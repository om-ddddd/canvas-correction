import React, { useRef, useEffect, useState } from "react";

const StarWarp = () => {
    const canvasRef = useRef(null);
    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const ctx = canvas.getContext("2d");

        let w = (canvas.width = dimensions.width);
        let h = (canvas.height = dimensions.height);

        const numStars = 400;
        const speed = 1.5;

        let stars = Array.from({ length: numStars }, () => createStar());
        let animationId;

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

            animationId = requestAnimationFrame(animate);
        }

        // Start the animation
        animate();

        // Handle resize and scroll events
        const handleResize = () => {
            const newWidth = window.innerWidth;
            const newHeight = window.innerHeight;
            
            setDimensions({
                width: newWidth,
                height: newHeight
            });
            
            w = canvas.width = newWidth;
            h = canvas.height = newHeight;
            
            // Regenerate stars when resizing
            stars = Array.from({ length: numStars }, () => createStar());
        };

        // Handle scroll events to ensure canvas covers entire viewport
        const handleScroll = () => {
            // Force a repaint of the canvas
            canvas.style.transform = 'translateZ(0)';
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll, { passive: true });
        
        // For mobile browsers that change height on scroll (when address bar shows/hides)
        window.addEventListener("orientationchange", handleResize);
        window.visualViewport?.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("orientationchange", handleResize);
            window.visualViewport?.removeEventListener('resize', handleResize);
        };
    }, [dimensions.width, dimensions.height]);

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
                right: '0', 
                bottom: '0',
                overflow: 'hidden',
                backgroundColor: '#000',
                zIndex: '-1',
                willChange: 'transform', // Hardware acceleration hint
                transform: 'translateZ(0)', // Force GPU acceleration
            }}
        />
    );
};

export default StarWarp;