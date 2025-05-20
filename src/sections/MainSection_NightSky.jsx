import { useEffect, useRef } from 'react';

const MainSection_NightSky = () => {
    const cloudRef = useRef();
    const skyRef = useRef();
    const reflectionRef = useRef();

    useEffect(() => {
        const elements = [
            { ref: cloudRef, speed: -0.02, range: 10 },
            { ref: skyRef, speed: 0.02, range: 100 },
            { ref: reflectionRef, speed: 0.04, range: 100 },
        ];

        const directions = [1, 1, 1];
        const positions = [0, 0, 0];

        let animationFrame;

        const animate = () => {
            elements.forEach((layer, i) => {
                positions[i] += directions[i] * layer.speed;

                // Use each layer's custom range
                if (positions[i] > layer.range || positions[i] < -layer.range) {
                    directions[i] *= -1;
                    positions[i] = Math.max(Math.min(positions[i], layer.range), -layer.range); // clamp
                }


                if (layer.ref.current) {
                    layer.ref.current.style.transform = `translateX(${positions[i]}px)`;
                }
            });

            animationFrame = requestAnimationFrame(animate);
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, []);


    return (
        <section className="relative w-full h-screen overflow-hidden bg-white image-render-pixel">
            {/* Base Layer (static) */}
            <img
                src="/NightSky/base.png"
                alt="base"
                className="absolute inset-0 w-screen h-screen image-render-pixel pointer-events-none"
            />

            {/* Sky Layer */}
            <img
                src="/NightSky/sky.png"
                alt="sky"
                ref={skyRef}
                className="absolute inset-0 w-screen h-screen image-render-pixel pointer-events-none"
            />


            {/* Cloud Layer */}
            <img
                src="/NightSky/cloud.png"
                alt="cloud"
                ref={cloudRef}
                className="absolute inset-0 w-screen h-screen image-render-pixel pointer-events-none"
            />

            {/* Reflection Layer */}
            <img
                src="/NightSky/reflection.png"
                alt="reflection"
                ref={reflectionRef}
                className="absolute inset-0 w-screen h-screen image-render-pixel pointer-events-none"
            />


            {/* Content */}
            <div className="relative z-10 flex items-center justify-center h-full">
            </div>
        </section>
    );
};

export default MainSection_NightSky;
