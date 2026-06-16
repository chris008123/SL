import { useEffect, useRef } from "react";

// ─── COLOURS ──────────────────────────────────────────────
const C = {
  primary: [0, 140, 255],
  mid:     [30, 80, 200],
  deep:    [5,  25,  90],
};

// ─── SPINE ────────────────────────────────────────────────
function buildSpine(t, phase, W, H) {
  const N   = 24;
  const ax  = W * 0.30;  // horizontal figure-eight amplitude
  const ay  = H * 0.20;  // vertical amplitude

  return Array.from({ length: N }, (_, i) => {
    const k    = i / (N - 1);
    const baseT = t * Math.PI * 2;

    // Lissajous-style figure eight
    const x0 = Math.sin(baseT)           * ax;
    const y0 = Math.sin(baseT * 2 + k)  * ay;

    // muscle / ripple deformation – decreases toward tail
    const wave = Math.sin(phase * 2.4 + k * 9 + t * 5) * (20 * (1 - k));
    const sway = Math.cos(phase * 1.6 + k * 5)          * (10 * (1 - k));

    return { x: W * 0.5 + x0 + wave, y: H * 0.5 + y0 + sway, k };
  });
}

// ─── DRAW ─────────────────────────────────────────────────
function drawCreature(ctx, spine, phase) {
  ctx.lineCap  = "round";
  ctx.lineJoin = "round";

  // body
  for (let i = 0; i < spine.length - 1; i++) {
    const { x: x1, y: y1, k: k1 } = spine[i];
    const { x: x2, y: y2 }         = spine[i + 1];

    const alpha = 0.15 + (1 - k1) * 0.75;
    const r = Math.round(C.deep[0] + (C.primary[0] - C.deep[0]) * (1 - k1));
    const g = Math.round(C.deep[1] + (C.primary[1] - C.deep[1]) * (1 - k1));
    const b = Math.round(C.deep[2] + (C.primary[2] - C.deep[2]) * (1 - k1));

    ctx.strokeStyle = `rgba(${r},${g},${b},${alpha})`;
    ctx.lineWidth   = (1 - k1) * 26 + 2;

    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }

  // head glow
  const { x: hx, y: hy } = spine[0];
  const glow = ctx.createRadialGradient(hx, hy, 0, hx, hy, 100);
  glow.addColorStop(0,   "rgba(0,180,255,0.28)");
  glow.addColorStop(0.4, "rgba(0,120,255,0.10)");
  glow.addColorStop(1,   "rgba(0,0,0,0)");

  ctx.fillStyle = glow;
  ctx.beginPath();
  ctx.arc(hx, hy, 100, 0, Math.PI * 2);
  ctx.fill();
}

// ─── COMPONENT ────────────────────────────────────────────
/**
 * Drop this directly inside any `position: relative` container.
 *
 * The canvas fills 100 % of its parent and renders behind content
 * via `isolation: isolate` on the parent (see usage note below).
 *
 * Usage:
 *   <div style={{ position: "relative", isolation: "isolate" }}>
 *     <HeroBackground />
 *     <YourHeroContent />
 *   </div>
 */
export default function HeroBackground({ className = "", bg = "#000918" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let W = 0, H = 0, raf;
    let phase = 0, scrollNorm = 0, scrollTarget = 0, last = performance.now();

    // ── resize ──────────────────────────────────────────
    const resize = () => {
      const parent = canvas.parentElement;
      const rect   = parent
        ? parent.getBoundingClientRect()
        : { width: window.innerWidth, height: window.innerHeight };

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = rect.width;
      H = rect.height;

      canvas.width  = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      canvas.style.width  = W + "px";
      canvas.style.height = H + "px";

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Fill base background so the first frame isn't empty
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);
    };

    resize();

    const ro = new ResizeObserver(resize);
    if (canvas.parentElement) ro.observe(canvas.parentElement);

    // ── scroll ──────────────────────────────────────────
    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      scrollTarget = max > 0 ? window.scrollY / max : 0;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // ── loop ────────────────────────────────────────────
    const loop = (now) => {
      const dt = Math.min(now - last, 33);
      last  = now;
      phase += dt * 0.0006;
      scrollNorm += (scrollTarget - scrollNorm) * 0.05;

      // ── trail: blend toward solid bg instead of black ──
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = bg + "14"; // bg colour at ~8 % opacity = hex 14
      ctx.fillRect(0, 0, W, H);

      // ── creature ────────────────────────────────────
      const t     = ((scrollNorm * 0.6 + now * 0.00008) % 1 + 1) % 1;
      const spine = buildSpine(t, phase, W, H);
      drawCreature(ctx, spine, phase);

      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      ro.disconnect();
    };
  }, [bg]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        display: "block",       // removes inline gap
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,              // 0 not -1 — sit inside the stacking ctx
      }}
    />
  );
}
