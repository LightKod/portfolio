const MainSectionCity = () => {
    return (
        <section className="relative w-full h-screen overflow-hidden bg-white image-render-pixel">
            {/* Sky background */}
            <img
                src="/City/bg0.png"
                alt="sky"
                className="absolute inset-0 w-full h-full object-cover image-render-pixel pointer-events-none"
            />

            {/* bg1: Clouds Layer */}
            <div className="absolute top-0 left-0 h-full bg-scroll pointer-events-none" style={{ animationDuration: '60s' }}>
                <img
                    src="/City/bg1.png"
                    alt="bg1"
                />
                <img
                    src="/City/bg1.png"
                    alt="bg1 duplicate"
                />
            </div>

            {/* bg2: Mountains/Buildings Layer */}
            <div className="absolute top-0 left-0 h-full bg-scroll pointer-events-none" style={{ animationDuration: '30s' }}>
                <img
                    src="/City/bg2.png"
                    alt="bg2"
                />
                <img
                    src="/City/bg2.png"
                    alt="bg2 duplicate"
                />
            </div>

            {/* Foreground content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-[-50px] pb-24">
                <h1 className="font-vt323 text-[140px] text-[#FFFFFF] text-shadow-heavy">Quang Nguyen</h1>
                <h1 className="font-vt323 text-[40px] text-[#F0F0F0] text-shadow-heavy">Software Engineer & Game Developer</h1>
            </div>
        </section>
    );
};

export default MainSectionCity;