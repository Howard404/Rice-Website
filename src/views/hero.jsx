import { useEffect, useRef } from 'react';
import './styles/hero.css'

function Hero() {
    const animationState = useRef(true);

    useEffect(() => {
        const canvas = document.querySelector("canvas.ctx");
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const TOTAL = 100;
        const petalArray = [];

        class Petal {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height * 1 - canvas.height;
                this.radius = 2 + Math.random() * 2;
                this.opacity = this.radius / 5;
                this.xSpeed = 1 + Math.random();
                this.ySpeed = 1 + Math.random() * 0.5;
            }

            draw() {
                if (this.y > canvas.height || this.x > canvas.width) {
                    this.x = Math.random() * canvas.width;
                    this.y = -this.radius;
                    this.xSpeed = 1 + Math.random();
                    this.ySpeed = 1 + Math.random() * 0.5;
                }
                ctx.globalAlpha = this.opacity;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = "red";
                ctx.fill();
                ctx.closePath();
            }

            animate() {
                this.x += this.xSpeed;
                this.y += this.ySpeed;
                this.draw();
            }
        }

        for (let i = 0; i < TOTAL; i++) {
            petalArray.push(new Petal());
        }

        function render() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            petalArray.forEach((petal) => {
                petal.animate();
            });
            if (animationState.current) {
                window.requestAnimationFrame(render);
            }
        }

        window.addEventListener("resize", () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });

        render();
    }, []);

    return (
        <>
            <canvas className="ctx"></canvas>
        </>
    );
}

export default Hero;
