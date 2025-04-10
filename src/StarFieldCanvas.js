import React, { useRef, useEffect } from "react";

const StarWarp = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const numStars = 400;
    const speed = 1.5;

    let stars = Array.from({ length: numStars }, () => createStar());

    function createStar() {
        return {
            x: Math.random() * w - w / 2,
            y: Math.random() * h - h / 2,
            z: Math.random() * w,
        };
    }

    function updateStar(star) {
        star.z -= speed;
        if (star.z <= 0) {
            Object.assign(star, createStar());
            star.z = w;
        }
    }

    function drawStar(star) {
        const sx = (star.x / star.z) * w + w / 2;
        const sy = (star.y / star.z) * h + h / 2;
        const r = (1 - star.z / w) * 1.2;

        if (sx < 0 || sx > w || sy < 0 || sy > h) {
            Object.assign(star, createStar());
            star.z = w;
            return;
        }

        ctx.beginPath();
        ctx.arc(sx, sy, r, 0, Math.PI * 2);
        ctx.fillStyle = "#fff";
        ctx.fill();
    }

    function animate() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
        ctx.fillRect(0, 0, w, h);

        stars.forEach((star) => {
            updateStar(star);
            drawStar(star);
        });

        requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
        stars = Array.from({ length: numStars }, () => createStar());
    };

    window.addEventListener("resize", handleResize);

    return () => {
        window.removeEventListener("resize", handleResize);
    };
}, []);


    return (
        <canvas
            ref={canvasRef}
            style={{
                display: 'block',
                position: 'fixed',
                width: '100%',
                height: '100%',
                left: '0',
                top: '0',
                overflow: 'hidden',
                backgroundColor: '#000',
                zIndex: '-1 !important'
            }}
        />
    );
};

export default StarWarp;
