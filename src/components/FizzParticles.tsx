import React, { useEffect, useRef } from 'react';

interface Bubble {
  x: number;
  y: number;
  radius: number;
  speed: number;
  opacity: number;
  wobbleSpeed: number;
  wobbleAmp: number;
  wobbleOffset: number;
}

export const FizzParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Check prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Create fizzy bubbles
    const bubbleCount = Math.min(55, Math.floor(width / 25));
    const bubbles: Bubble[] = [];

    for (let i = 0; i < bubbleCount; i++) {
      bubbles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 3.5 + 1.2,
        speed: Math.random() * 1.2 + 0.6,
        opacity: Math.random() * 0.45 + 0.15,
        wobbleSpeed: Math.random() * 0.025 + 0.01,
        wobbleAmp: Math.random() * 2 + 1,
        wobbleOffset: Math.random() * Math.PI * 2,
      });
    }

    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.05;

      for (let i = 0; i < bubbles.length; i++) {
        const b = bubbles[i];
        b.y -= b.speed;
        b.x += Math.sin(time * b.wobbleSpeed + b.wobbleOffset) * 0.4;

        // Reset if reached top
        if (b.y < -10) {
          b.y = height + 10;
          b.x = Math.random() * width;
        }

        // Draw bubble with realistic fizzy shine
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${b.opacity * 0.4})`;
        ctx.fill();

        ctx.strokeStyle = `rgba(255, 255, 255, ${b.opacity * 0.8})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();

        // Highlight glint
        ctx.beginPath();
        ctx.arc(b.x - b.radius * 0.35, b.y - b.radius * 0.35, b.radius * 0.3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${b.opacity * 0.9})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 opacity-80"
      aria-hidden="true"
    />
  );
};
