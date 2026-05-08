# Test script: Start server, check health endpoint, stop server
$ErrorActionPreference = 'Stop'

$backendDir = "C:\Users\micha\OneDrive\Documents\Projects\SL\backend"

Write-Host "Starting server..." -ForegroundColor Cyan
$process = Start-Process -FilePath "node" -ArgumentList "server.js" -WorkingDirectory $backendDir -PassThru -NoNewWindow

# Wait for server to initialize
Start-Sleep -Seconds 3

try {
    Write-Host "Testing health endpoint..." -ForegroundColor Cyan
    $response = Invoke-WebRequest -Uri "http://localhost:3001/health" -UseBasicParsing -TimeoutSec 5
    Write-Host "Health Status: $($response.StatusCode)" -ForegroundColor Green
    $content = $response.Content | ConvertFrom-Json
    Write-Host "Response:" $content -ForegroundColor Green

    Write-Host "`nServer test successful!" -ForegroundColor Green
}
catch {
    Write-Host "Health check failed: $_" -ForegroundColor Red
    exit 1
}
finally {
    Write-Host "Stopping server..." -ForegroundColor Cyan
    Stop-Process -Id $process.Id -Force
    Write-Host "Server stopped." -ForegroundColor Gray
}
