# Integration test: Subscribe -> Verify -> Unsubscribe
$ErrorActionPreference = 'Stop'

$backendDir = "C:\Users\micha\OneDrive\Documents\Projects\SL\backend"
$apiUrl = "http://localhost:3001"
$testEmail = "test_audit_$(Get-Date -Format 'yyyyMMddHHmmss')@example.com"

Write-Host "`n=== Newsletter Integration Test ===" -ForegroundColor Cyan
Write-Host "Test email: $testEmail`n" -ForegroundColor Gray

# Start server
Write-Host "Starting server..." -ForegroundColor Cyan
$process = Start-Process -FilePath "node" -ArgumentList "server.js" -WorkingDirectory $backendDir -PassThru -NoNewWindow

# Wait for server
Start-Sleep -Seconds 3

try {
    # 1. Health check
    Write-Host "1. Health check..." -ForegroundColor Cyan
    $health = Invoke-WebRequest -Uri "$apiUrl/health" -UseBasicParsing -TimeoutSec 5
    $healthData = $health.Content | ConvertFrom-Json
    Write-Host "   Status: $($health.StatusCode) | Service: $($healthData.service)" -ForegroundColor Green

    # 2. Subscribe
    Write-Host "`n2. Subscribing email..." -ForegroundColor Cyan
    $subscribeBody = @{ email=$testEmail; hp_input=""; source="integration_test" } | ConvertTo-Json
    $subResponse = Invoke-WebRequest -Uri "$apiUrl/api/subscribe" -Method POST -Body $subscribeBody -ContentType "application/json" -UseBasicParsing -TimeoutSec 10
    $subData = $subResponse.Content | ConvertFrom-Json
    if ($subResponse.StatusCode -eq 200 -and $subData.success) {
        Write-Host "   ✅ Subscription success: $($subData.message)" -ForegroundColor Green
        Write-Host "   Contact ID: $($subData.data.contactId)" -ForegroundColor Gray
    } else {
        Write-Host "   ❌ Subscription failed: $($subResponse.StatusCode) $($subData.message)" -ForegroundColor Red
        exit 1
    }

    # 3. Unsubscribe
    Write-Host "`n3. Unsubscribing email..." -ForegroundColor Cyan
    $unsubBody = @{ email=$testEmail } | ConvertTo-Json
    $unsubResponse = Invoke-WebRequest -Uri "$apiUrl/api/unsubscribe" -Method DELETE -Body $unsubBody -ContentType "application/json" -UseBasicParsing -TimeoutSec 10
    $unsubData = $unsubResponse.Content | ConvertFrom-Json
    if ($unsubResponse.StatusCode -eq 200 -and $unsubData.success) {
        Write-Host "   ✅ Unsubscribe success: $($unsubData.message)" -ForegroundColor Green
    } else {
        Write-Host "   ❌ Unsubscribe failed: $($unsubResponse.StatusCode) $($unsubData.message)" -ForegroundColor Red
        exit 1
    }

    Write-Host "`n=== All integration tests passed! ===" -ForegroundColor Green
}
catch {
    Write-Host "`n❌ Test failed: $_" -ForegroundColor Red
    exit 1
}
finally {
    Write-Host "`nStopping server..." -ForegroundColor Cyan
    Stop-Process -Id $process.Id -Force
    Write-Host "Server stopped." -ForegroundColor Gray
}
