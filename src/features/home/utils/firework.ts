type Particle = {
  x: number;
  y: number;
  dx: number;
  dy: number;
  size: number;
  alpha: number;
  color: string;
  trail: { x: number; y: number }[];
  maxTrailLength: number;
};

class Firework {
  private ctx: CanvasRenderingContext2D;
  private canvasWidth: number;
  private canvasHeight: number;
  private x: number;
  private y: number;
  private color: string;
  private dx: number;
  private dy: number;
  private exploded: boolean;
  private particles: Particle[];
  private age: number;

  constructor(
    ctx: CanvasRenderingContext2D,
    canvasWidth: number,
    canvasHeight: number
  ) {
    this.ctx = ctx;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.reset();
  }

  private reset(): void {
    // Launch point
    this.x = Math.random() * this.canvasWidth;
    this.y = this.canvasHeight;

    // Vibrant, random color
    this.color = `hsl(${Math.random() * 360}, 100%, 60%)`;

    // Randomized launch trajectory
    this.dx = (Math.random() - 0.5) * 3;
    this.dy = -(Math.random() * 10 + 10);

    this.exploded = false;
    this.particles = [];
    this.age = 0;
  }

  private launch(): void {
    this.x += this.dx;
    this.y += this.dy;

    // Draw launch trail
    this.ctx.beginPath();
    this.ctx.moveTo(this.x - this.dx, this.y - this.dy);
    this.ctx.lineTo(this.x, this.y);
    this.ctx.strokeStyle = this.color;
    this.ctx.stroke();

    // Check for explosion
    if (this.y <= this.canvasHeight * Math.random() * 0.5) {
      this.explode();
    }
  }

  private explode(): void {
    const particleCount = Math.floor(Math.random() * 50 + 50);
    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 5 + 2;

      this.particles.push({
        x: this.x,
        y: this.y,
        dx: Math.cos(angle) * speed,
        dy: Math.sin(angle) * speed,
        size: Math.random() * 3 + 1,
        alpha: 1,
        color: this.color,
        trail: [{ x: this.x, y: this.y }],
        maxTrailLength: 10,
      });
    }
    this.exploded = true;
  }

  private updateParticles(): void {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const particle = this.particles[i];

      // Particle movement
      particle.x += particle.dx;
      particle.y += particle.dy;

      // Add the current point to the trail
      particle.trail.push({ x: particle.x, y: particle.y });
      if (particle.trail.length > particle.maxTrailLength) {
        particle.trail.shift();
      }

      // Gravity and friction
      particle.dy += 0.15;
      particle.dx *= 0.99;

      // Draw the trail
      if (particle.trail.length > 1) {
        this.ctx.beginPath();
        this.ctx.moveTo(particle.trail[0].x, particle.trail[0].y);
        for (let j = 1; j < particle.trail.length; j++) {
          this.ctx.lineTo(particle.trail[j].x, particle.trail[j].y);
        }
        this.ctx.strokeStyle = `rgba(${this.getRGB(particle.color)}, ${
          particle.alpha
        })`;
        this.ctx.lineWidth = particle.size / 2;
        this.ctx.stroke();
      }

      // Draw the particle
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(${this.getRGB(particle.color)}, ${
        particle.alpha
      })`;
      this.ctx.fill();

      // Decrease alpha
      particle.alpha -= 0.01;

      if (
        particle.alpha <= 0 ||
        particle.x < 0 ||
        particle.x > this.canvasWidth ||
        particle.y > this.canvasHeight
      ) {
        this.particles.splice(i, 1);
      }
    }
  }

  public update(): void {
    this.age++;

    if (!this.exploded) {
      this.launch();
    } else {
      this.updateParticles();
    }

    // Reset if all particles are gone
    if (this.exploded && this.particles.length === 0) {
      this.reset();
    }
  }

  // Utility function to convert HSL to RGB
  private getRGB(hslColor: string): string {
    const match = hslColor.match(/hsl\((\d+\.?\d*),\s*(\d+)%,\s*(\d+)%\)/);
    if (match) {
      const [, h, s, l] = match;
      const rgb = this.hslToRgb(parseFloat(h), parseInt(s), parseInt(l));
      return rgb.join(",");
    }
    return "255,255,255"; // Default color if conversion fails
  }

  private hslToRgb(h: number, s: number, l: number): [number, number, number] {
    s /= 100;
    l /= 100;
    const k = (n: number) => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = (n: number) =>
      l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    return [
      Math.round(255 * f(0)),
      Math.round(255 * f(8)),
      Math.round(255 * f(4)),
    ];
  }
}

export class FireworksDisplay {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private fireworks: Firework[];
  private animationFrameId: number | null = null;
  private animationDuration: number = 5000; // Duration in milliseconds (e.g., 5 seconds)

  constructor() {
    this.canvas = document.getElementById(
      "fireworks-canvas"
    ) as HTMLCanvasElement;
    this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;
    this.resize();

    this.fireworks = [];
    for (let i = 0; i < 5; i++) {
      this.fireworks.push(
        new Firework(this.ctx, this.canvas.width, this.canvas.height)
      );
    }

    window.addEventListener("resize", () => this.resize());

    // Start the animation and stop after the set duration
    this.startAnimation();
  }

  private resize(): void {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  private animate(): void {
    // Subtle fade effect
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // Update and draw fireworks
    this.fireworks.forEach((firework) => firework.update());

    // Continue the animation
    this.animationFrameId = requestAnimationFrame(() => this.animate());
  }

  private startAnimation(): void {
    this.animate();

    // Stop the animation after a specific duration
    setTimeout(() => {
      if (this.animationFrameId) {
        cancelAnimationFrame(this.animationFrameId);
        this.animationFrameId = null; // Reset animation frame ID
        this.clearCanvas();
      }
    }, this.animationDuration);
  }

  private clearCanvas(): void {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
