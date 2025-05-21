import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import SectionHeader from "../components/SectionHeader";

const socialLinks = [
    { href: "https://linkedin.com/in/lightkod", icon: "/portfolio/icon/ico_linkedin.png", alt: "LinkedIn" },
    { href: "https://github.com/lightkod", icon: "/portfolio/icon/ico_github.png", alt: "GitHub" },
    { href: "https://x.com/solstrixstudio", icon: "/portfolio/icon/ico_x.png", alt: "X" },
    { href: "https://youtube.com/@SolStrixStudio", icon: "/portfolio/icon/ico_youtube.png", alt: "YouTube" },
];

const ContactSection = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <>
            <section className="relative h-screen overflow-hidden bg-[#2b2b45]">
                {/* Parallax background */}
                <div
                    className="image-render-pixel absolute top-0 left-0 h-full w-full bg-scroll pointer-events-none z-0 flex"
                    style={{ animationDuration: "90s" }}
                >
                    <img src="/portfolio/City/bg3.png" alt="bg3" />
                    <img src="/portfolio/City/bg3.png" alt="bg3 duplicate" />
                </div>

                {/* Top pixel bar */}
                <div className="separator-rtl default-pattern z-10" />

                {/* Main content */}
                <div className="flex flex-col items-center justify-center h-[calc(100%-64px)] z-10">
                    <div className="container mx-auto max-w-4xl">
                        {/* Section Header - stays static */}
                        <SectionHeader title="CONTACT" icon="icon/ico_mail.png" />

                        {/* Animated block */}
                        <div data-aos="fade-up">
                            <p className="text-white text-center text-xl font-vt323 px-0 mb-[-20px]">
                                Every great game starts with a spark. <br />
                                If you’ve got one, I’m all in.
                            </p>

                            <div className="text-center mt-16">
                                <a
                                    href="/docs/cv.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center outline outline-2 outline-[#f68958] mt-[-80px]
                                        bg-[#1b1f21] hover:scale-110 text-white text-[20px] text-shadow-heavy
                                        font-vt323 px-6 py-2 rounded transition"
                                >
                                    <img
                                        src="/portfolio/icon/ico_email.png"
                                        alt="file icon"
                                        className="w-8 h-8 mr-2 image-render-pixel"
                                        loading="lazy"
                                    />
                                    Shoot me an email
                                </a>

                                <p className="text-white text-center text-xl font-vt323 px-4 mt-4 mb-[-20px]">
                                    or follow me on:
                                </p>

                                <div className="flex justify-center gap-6 mt-8">
                                    {socialLinks.map(({ href, icon, alt }, i) => (
                                        <a
                                            key={i}
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={alt}
                                            className="w-12 h-12 bg-[#1b1f21] outline-[#f68958] outline outline-2 rounded-full inline-block 
                                                flex items-center justify-center image-render-pixel transition-transform hover:scale-110"
                                            style={{
                                                backgroundImage: `url('${icon}')`,
                                                backgroundSize: '65% 65%',
                                                backgroundPosition: 'center',
                                                backgroundRepeat: 'no-repeat',
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-[#1b1f21] text-center text-white py-8 font-vt323 text-lg">
                <p className="mb-1">Wow, you made it all the way down here?</p>
                <p className="opacity-70">I hope you clicked something cool along the way.</p>
            </footer>
        </>
    );
};

export default ContactSection;
