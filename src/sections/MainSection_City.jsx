import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const MainSectionCity = () => {
    useEffect(() => {
        AOS.init({ duration: 500, once: false, mirror: true });
    }, []);

    return (
        <section className="relative w-full h-screen overflow-hidden bg-white image-render-pixel">
            {/* Sky background */}
            <img
                className="absolute inset-0 w-full h-full object-cover image-render-pixel pointer-events-none"
                src="/portfolio/City/bg0.png"
                alt="sky"
            />

            {/* bg1: Clouds Layer */}
            <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="absolute top-0 left-0 h-full w-full bg-scroll pointer-events-none"
                style={{ animationDuration: "60s" }}
            >
                <img src="/portfolio/City/bg1.png" alt="bg1" />
                <img src="/portfolio/City/bg1.png" alt="bg1 duplicate" />
            </div>

            {/* bg2: Mountains/Buildings Layer */}
            <div
                data-aos="fade-up"
                data-aos-delay="400"
                className="absolute top-0 left-0 h-full w-full bg-scroll pointer-events-none"
                style={{ animationDuration: "30s" }}
            >
                <img src="/portfolio/City/bg2.png" alt="bg2" />
                <img src="/portfolio/City/bg2.png" alt="bg2 duplicate" />
            </div>

            {/* Foreground content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-[-20px] pb-24">
                <h1
                    data-aos="fade-up"
                    data-aos-delay="600"
                    className="font-vt323 text-[80px] sm:text-[120px] md:text-[140px] text-[#FFFFFF] text-shadow-heavy text-center"
                >
                    Quang Nguyen
                </h1>
                <h1
                    data-aos="fade-right"
                    data-aos-delay="800"
                    className="font-vt323 text-[20px] sm:text-[28px] md:text-[40px] text-[#F0F0F0] text-shadow-heavy text-center"
                >
                    Software Engineer & Game Developer
                </h1>
            </div>
        </section>
    );
};

export default MainSectionCity;
