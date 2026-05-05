import { useEffect, useRef } from "react";

const WaveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const SCALE = 2;
    let animId: number;
    let width = 0, height = 0;
    let imageData: ImageData;
    let data: Uint8ClampedArray;

    const resize = () => {
      // Fixed canvas = always viewport size = only renders what's visible
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      width  = Math.floor(canvas.width  / SCALE);
      height = Math.floor(canvas.height / SCALE);
      imageData = ctx.createImageData(width, height);
      data = imageData.data;
    };

    window.addEventListener("resize", resize);
    resize();

    // Precalculate sin/cos tables for performance
    const TABLE_SIZE = 1024;
    const SIN_TABLE = new Float32Array(TABLE_SIZE);
    const COS_TABLE = new Float32Array(TABLE_SIZE);
    for (let i = 0; i < TABLE_SIZE; i++) {
      const angle = (i / TABLE_SIZE) * Math.PI * 2;
      SIN_TABLE[i] = Math.sin(angle);
      COS_TABLE[i] = Math.cos(angle);
    }

    const TAU = Math.PI * 2;
    const fastSin = (x: number) => {
      // Normalize to positive range
      const norm = ((x % TAU) + TAU) % TAU;
      return SIN_TABLE[Math.floor((norm / TAU) * TABLE_SIZE) & (TABLE_SIZE - 1)];
    };
    const fastCos = (x: number) => {
      const norm = ((x % TAU) + TAU) % TAU;
      return COS_TABLE[Math.floor((norm / TAU) * TABLE_SIZE) & (TABLE_SIZE - 1)];
    };

    const startTime = Date.now();

    const render = () => {
      const time = (Date.now() - startTime) * 0.001;

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const u_x = (2 * x - width)  / height;
          const u_y = (2 * y - height) / height;

          let a = 0, d = 0;
          for (let i = 0; i < 4; i++) {
            a += fastCos(i - d + time * 0.5 - a * u_x);
            d += fastSin(i * u_y + a);
          }

          const wave      = (fastSin(a) + fastCos(d)) * 0.5;
          const intensity = 0.28 + 0.38 * wave;

          // Paleta: verde selva dominante + lila + turquesa
          const base        = 0.07 + 0.13 * fastCos(u_x + u_y + time * 0.3);
          const greenPulse  = 0.20 * fastSin(a * 1.2 + time * 0.25);   // verde vivo
          const lilacAccent = 0.14 * fastCos(d * 1.8 + time * 0.15);   // lila/violeta
          const tealGlow    = 0.11 * fastSin(a * 0.8 - d * 0.5 + time * 0.2); // turquesa

          // R: bajo, con toque lila
          const r = Math.max(0, Math.min(1, base * 0.35 + lilacAccent * 1.15)) * intensity;
          // G: dominante — verde selva
          const g = Math.max(0, Math.min(1, base + greenPulse * 1.30 + tealGlow * 0.45)) * intensity;
          // B: turquesa + lila
          const b = Math.max(0, Math.min(1, base * 0.55 + tealGlow * 1.20 + lilacAccent * 0.75)) * intensity;

          const idx = (y * width + x) * 4;
          data[idx]     = r * 255;
          data[idx + 1] = g * 255;
          data[idx + 2] = b * 255;
          data[idx + 3] = 255;
        }
      }

      ctx.putImageData(imageData, 0, 0);

      // Scale up from low-res buffer to full canvas
      if (SCALE > 1) {
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(canvas, 0, 0, width, height, 0, 0, canvas.width, canvas.height);
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: -1 }}
    />
  );
};

export default WaveBackground;
