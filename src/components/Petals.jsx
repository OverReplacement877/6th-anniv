import { useEffect, useRef } from "react";

export default function Petals() {
  const canvasRef = useRef(null);
  const mouseXRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const TOTAL = 100;
    const petalArray = [];

    const petalImg = new Image();
    petalImg.src =
      "https://djjjk9bjm164h.cloudfront.net/petal.png";

    class Petal {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y =
          Math.random() * canvas.height * 2 - canvas.height;

        this.w = 25 + Math.random() * 15;
        this.h = 20 + Math.random() * 10;
        this.opacity = this.w / 40;
        this.flip = Math.random();

        this.xSpeed = 0.3 + Math.random() * 0.8
        this.ySpeed = 0.2 + Math.random() * 0.6
        this.flipSpeed = Math.random() * 0.01
      }

      draw() {
        if (
          this.y > canvas.height ||
          this.x > canvas.width
        ) {
          this.x = -petalImg.width;
          this.y =
            Math.random() * canvas.height * 2 -
            canvas.height;

          this.xSpeed = 1.5 + Math.random() * 2;
          this.ySpeed = 1 + Math.random() * 1;
          this.flip = Math.random();
        }

        ctx.globalAlpha = this.opacity;

        ctx.drawImage(
          petalImg,
          this.x,
          this.y,
          this.w *
            (0.6 + Math.abs(Math.cos(this.flip)) / 3),
          this.h *
            (0.8 + Math.abs(Math.sin(this.flip)) / 5)
        );
      }

      animate() {
        this.x += this.xSpeed + mouseXRef.current * 5;
        this.y += this.ySpeed + mouseXRef.current * 2;
        this.flip += this.flipSpeed;
        this.draw();
      }
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      petalArray.forEach((p) => p.animate());
      requestAnimationFrame(render);
    };

    petalImg.onload = () => {
      for (let i = 0; i < TOTAL; i++) {
        petalArray.push(new Petal());
      }
      render();
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const mouseMove = (e) => {
      mouseXRef.current = e.clientX / window.innerWidth;
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
}