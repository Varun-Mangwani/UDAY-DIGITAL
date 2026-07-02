import { useEffect, useRef, useState } from "react";

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse((prev) => ({
        ...prev,
        targetX: e.clientX,
        targetY: e.clientY,
      }));
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    // Smooth dampening for the mouse coordinate
    let animationFrameId: number;
    const updateMouse = () => {
      setMouse((prev) => {
        const dx = prev.targetX - prev.x;
        const dy = prev.targetY - prev.y;
        return {
          ...prev,
          x: prev.x + dx * 0.1,
          y: prev.y + dy * 0.1,
        };
      });
      animationFrameId = requestAnimationFrame(updateMouse);
    };
    updateMouse();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Particle class
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.6;
        this.vy = (Math.random() - 0.5) * 0.6;
        this.radius = Math.random() * 2 + 1;
        this.color = `rgba(168, 85, 247, ${Math.random() * 0.3 + 0.15})`;
      }

      update(mx: number, my: number) {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off bounds
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Subtle attraction to mouse
        const dx = mx - this.x;
        const dy = my - this.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 250) {
          this.x += (dx / dist) * 0.2;
          this.y += (dy / dist) * 0.2;
        }
      }

      draw(c: CanvasRenderingContext2D) {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.fillStyle = this.color;
        c.fill();
      }
    }

    const particleCount = Math.min(65, Math.floor((width * height) / 25000));
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    let frameId: number;
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw background noise and grid effects manually or leave for CSS
      // Update and draw particles
      particles.forEach((p) => {
        p.update(mouse.targetX, mouse.targetY);
        p.draw(ctx);
      });

      // Draw connection lines
      ctx.lineWidth = 0.6;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < 140) {
            const alpha = (1 - dist / 140) * 0.15;
            ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw a subtle cursor glow ring
      if (mouse.targetX > 0 && mouse.targetY > 0) {
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 40, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(168, 85, 247, 0.08)";
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(168, 85, 247, 0.3)";
        ctx.fill();
      }

      frameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(frameId);
    };
  }, [mouse]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Canvas for dynamic Particle Network */}
      <canvas ref={canvasRef} className="absolute inset-0 block" />

      {/* 3D perspective grid lines */}
      <div className="absolute inset-x-0 bottom-0 h-[60%] bg-perspective-grid-3d opacity-60 pointer-events-none" />

      {/* Floating Ambient Glowing Gradients/Orbs */}
      <div 
        className="absolute w-[45vw] h-[45vw] rounded-full blur-[130px] opacity-25 animate-orb-float-1 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(106,17,203,0.8) 0%, rgba(139,92,246,0.2) 70%, transparent 100%)",
          left: "10%",
          top: "15%",
        }}
      />
      
      <div 
        className="absolute w-[35vw] h-[35vw] rounded-full blur-[140px] opacity-20 animate-orb-float-2 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(168,85,247,0.7) 0%, rgba(106,17,203,0.1) 70%, transparent 100%)",
          right: "10%",
          bottom: "10%",
        }}
      />

      <div 
        className="absolute w-[25vw] h-[25vw] rounded-full blur-[100px] opacity-15 pointer-events-none animate-slow-pulse"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.6) 0%, transparent 80%)",
          left: "50%",
          top: "40%",
          transform: `translate(-50%, -50%) translate(${(mouse.x - window.innerWidth/2) * 0.05}px, ${(mouse.y - window.innerHeight/2) * 0.05}px)`
        }}
      />

      {/* Subtle overlay grid lines (straight) */}
      <div className="absolute inset-0 bg-perspective-grid opacity-30" />
    </div>
  );
}
