const ContactSection = () => {
    return (
        <>
            <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#2b2b45]">
                {/* Top pixel bar */}
                <div className="separator default-pattern " />

                {/* Parallax background */}
                <div className="image-render-pixel absolute top-0 left-0 h-full w-full bg-scroll pointer-events-none z-0 flex">
                    <img src="/City/bg3.png" alt="bg3" />
                    <img src="/City/bg3.png" alt="bg3 duplicate" />
                </div>

                {/* Foreground content */}
                <div className="z-10">
                    <h1 className="text-4xl font-bold text-white">Contact Section</h1>
                </div>
            </section>

            {/* Small section with color #1b1f21 */}
            <div className="h-32 w-full bg-[#1b1f21]"></div>
        </>
    );
};

export default ContactSection;
