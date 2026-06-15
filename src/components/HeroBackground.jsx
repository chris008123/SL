import { useEffect, useRef } from "react";

const COLORS = {
  primary: [99, 102, 241],
  accent: [139, 92, 246],
  cyan: [56, 189, 248],
};

const rgba = (c, a) =>
  `rgba(${c[0]},${c[1]},${c[2]},${a.toFixed(3)})`;

const lerp = (a, b, t) => a + (b - a) * t;

const lerpCol = (a, b, t) => [
  lerp(a[0], b[0], t),
  lerp(a[1], b[1], t),
  lerp(a[2], b[2], t),
];

// ---------- SPLINE PATH ----------
function getSplinePoint(t, phase, W, H) {
  const N = 6;
  const pts = [];

  for (let i = 0; i < N; i++) {
    const angle = (i / N) * Math.PI * 2 + phase;

    const r = 0.25 + 0.18 * Math.sin(phase * 0.6 + i);
    const wobble = 0.1 * Math.cos(phase * 0.9 + i * 2);

    pts.push({
      x: 0.5 + (r + wobble) * Math.cos(angle),
      y: 0.5 + (r + wobble) * Math.sin(angle),
    });
  }

  pts.push(pts[0], pts[1], pts[2]);

  const seg = pts.length - 3;
  const i = Math.floor(t * seg);
  const lt = t * seg - i;

  const p0 = pts[i];
  const p1 = pts[i + 1];
  const p2 = pts[i + 2];
  const p3 = pts[i + 3];

  const tt = lt;
  const tt2 = tt * tt;
  const tt3 = tt2 * tt;

  const x =
    0.5 *
    ((-tt3 + 2 * tt2 - tt) * p0.x +
      (3 * tt3 - 5 * tt2 + 2) * p1.x +
      (-3 * tt3 + 4 * tt2 + tt) * p2.x +
      (tt3 - tt2) * p3.x);

  const y =
    0.5 *
    ((-tt3 + 2 * tt2 - tt) * p0.y +
      (3 * tt3 - 5 * tt2 + 2) * p1.y +
      (-3 * tt3 + 4 * tt2 + tt) * p2.y +
      (tt3 - tt2) * p3.y);

  return { x: x * W, y: y * H };
}

// ---------- DRAW LOGO ----------
function drawSL(ctx, x, y, size, alpha, col) {
  ctx.save();
  ctx.translate(x, y);
  ctx.globalAlpha = alpha;

  const glow = ctx.createRadialGradient(0, 0, 0, 0, 0, size * 2.5);
  glow.addColorStop(0, rgba(col, 0.22));
  glow.addColorStop(1, "rgba(0,0,0,0)");

  ctx.fillStyle = glow;
  ctx.beginPath();
  ctx.arc(0, 0, size * 2.5, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = rgba(col, 0.85);
  ctx.lineWidth = size * 0.1;
  ctx.lineCap = "round";

  const w = size * 0.45;
  const h = size * 0.7;

  // S
  ctx.beginPath();
  ctx.moveTo(-w, -h * 0.5);
  ctx.bezierCurveTo(-w, -h * 0.8, 0, -h * 0.7, 0, -h * 0.2);
  ctx.bezierCurveTo(0, 0.1 * h, -w, 0.05 * h, -w, 0.35 * h);
  ctx.bezierCurveTo(-w, h * 0.75, 0, h * 0.7, 0, h * 0.5);
  ctx.stroke();

  // L
  ctx.beginPath();
  ctx.moveTo(size * 0.1, -h * 0.5);
  ctx.lineTo(size * 0.1, h * 0.5);
  ctx.lineTo(size * 0.6, h * 0.5);
  ctx.stroke();

  ctx.restore();
}

export default function HeroBackground({ className = "" }) {
  const canvasRef = useRef(null);
  const stateRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    let W = 0,
      H = 0;
    let raf;

    const isLowPower =
      window.innerWidth < 768 &&
      (navigator.hardwareConcurrency || 4) <= 4;

    // ---------- STATE ----------
    const state = {
      mouse: { x: 0, y: 0 },
      scroll: 0,
      targetScroll: 0,
      phase: 0,
      particles: [],
      dust: [],
      network: [],
      last: performance.now(),
      maxParticles: isLowPower ? 180 : 420,
    };

    stateRef.current = state;

    // ---------- RESIZE ----------
    const resize = () => {
      const rect =
        canvas.parentElement?.getBoundingClientRect() || {
          width: window.innerWidth,
          height: window.innerHeight,
        };

      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      W = rect.width;
      H = rect.height;

      canvas.width = W * dpr;
      canvas.height = H * dpr;

      canvas.style.width = W + "px";
      canvas.style.height = H + "px";

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    const ro = new ResizeObserver(resize);
    if (canvas.parentElement) ro.observe(canvas.parentElement);

    // ---------- MOUSE ----------
    const onMouseMove = (e) => {
      const r = canvas.getBoundingClientRect();
      state.mouse.x = e.clientX - r.left;
      state.mouse.y = e.clientY - r.top;
    };

    // ---------- SCROLL ----------
    const onScroll = () => {
      const max =
        document.body.scrollHeight - window.innerHeight;
      state.targetScroll = max > 0 ? window.scrollY / max : 0;
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("scroll", onScroll);

    // ---------- INIT DUST ----------
    state.dust = Array.from({ length: isLowPower ? 20 : 50 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: 0.5 + Math.random(),
      vx: (Math.random() - 0.5) * 0.02,
      vy: (Math.random() - 0.5) * 0.02,
      phase: Math.random() * Math.PI * 2,
    }));

    // ---------- PARTICLES ----------
    const spawn = (x, y, col, layer) => {
      const s = state;
      if (s.particles.length > s.maxParticles) s.particles.shift();

      s.particles.push({
        x,
        y,
        ox: x,
        oy: y,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        life: 1,
        decay: 0.004 + Math.random() * 0.008,
        size: 1.5 + Math.random() * 2.5,
        col,
        layer,
      });
    };

    // ---------- LOOP ----------
    const loop = (now) => {
      const s = stateRef.current;
      if (!s) return;

      const dt = Math.min(now - s.last, 33);
      s.last = now;

      s.scroll += (s.targetScroll - s.scroll) * 0.05;
      s.phase += dt * 0.00015;

      ctx.clearRect(0, 0, W, H);

      // spline positions
      const t = (s.scroll * 0.6 + now * 0.00005) % 1;

      const main = getSplinePoint(t, s.phase, W, H);
      const g1 = getSplinePoint((t + 0.05) % 1, s.phase, W, H);

      // dust
      for (const d of s.dust) {
        d.x = (d.x + d.vx * 0.001 + 1) % 1;
        d.y = (d.y + d.vy * 0.001 + 1) % 1;

        ctx.fillStyle = rgba(
          COLORS.primary,
          0.04 + 0.03 * Math.sin(now * 0.001 + d.phase)
        );

        ctx.beginPath();
        ctx.arc(d.x * W, d.y * H, d.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // spawn
      const rate = isLowPower ? 2 : 5;
      for (let i = 0; i < rate; i++) {
        spawn(
          main.x + (Math.random() - 0.5) * 5,
          main.y + (Math.random() - 0.5) * 5,
          COLORS.primary,
          1
        );
      }

      // update particles
      for (let i = s.particles.length - 1; i >= 0; i--) {
        const p = s.particles[i];

        const dx = s.mouse.x - p.x;
        const dy = s.mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 140) {
          const f = (1 - dist / 140) * 0.02;
          p.vx += dx * f;
          p.vy += dy * f;
        }

        p.vx += (p.ox - p.x) * 0.001;
        p.vy += (p.oy - p.y) * 0.001;

        p.vx *= 0.96;
        p.vy *= 0.96;

        p.x += p.vx;
        p.y += p.vy;

        p.life -= p.decay;

        if (p.life <= 0) {
          s.particles.splice(i, 1);
          continue;
        }

        const a = p.life * 0.7;

        ctx.fillStyle = rgba(p.col, a);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // logo layers
      drawSL(ctx, g1.x, g1.y, 16, 0.2, COLORS.accent);
      drawSL(ctx, main.x, main.y, 22, 0.85, COLORS.cyan);

      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}