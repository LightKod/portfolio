import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import TimelineItem from "../components/TimelineItem";
import TimelineArrow from "../components/TimelineArrow";
import SectionHeader from "../components/SectionHeader";
import timelineData from "../data/timelineData";
import LinkButton from "../components/LinkButton";

const TimelineSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 500,
            mirror: true,
            once: false,
            offset: 300,
        });
    }, []);

    return (
        <section className="bg-[#2b2b45] py-16">
            <div className="separator-rtl default-pattern mb-16" />

            <div className="container mx-auto max-w-4xl">
                <SectionHeader title="LOG ENTRY" icon="icon/ico_file.png" />
                <ul className="list-none">
                    {timelineData.map((item, index) => (
                        <li
                            key={index}
                            data-aos="fade-up"
                        >
                            {item.isArrow ? (
                                <TimelineArrow />
                            ) : (
                                <TimelineItem
                                    date={item.date}
                                    type={item.type}
                                    text={item.text}
                                    description={item.description}
                                />
                            )}
                        </li>
                    ))}
                </ul>
                <div className="text-center mt-16" data-aos="fade-up" >
                    <LinkButton href="/portfolio/docs/cv.pdf" icon="/portfolio/icon/ico_file.png" text="Take a peek at my CV" />
                </div>
            </div>
        </section>
    );
};

export default TimelineSection;
