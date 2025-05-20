const ContactSection = () => {
    return (
        <>
            <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#2b2b45]">
                {/* Parallax background */}
                <div className="image-render-pixel absolute top-0 left-0 h-full bg-scroll pointer-events-none z-0">
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
