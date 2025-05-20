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
            <div className="absolute top-0 left-0 h-full bg-scroll pointer-events-none">
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
            <div className="absolute top-0 left-0 h-full bg-scroll pointer-events-none" style={{ animationDuration: '10s' }}>
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
            <div className="relative z-10 flex items-center justify-center h-full">
                {/* Add foreground elements here */}
            </div>
        </section>
    );
};

export default MainSectionCity;