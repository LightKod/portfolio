import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import SectionHeader from "../components/SectionHeader";
import ProjectItem from "../components/ProjectItem";
import projectData from "../data/projectData";

const AchievementSection = () => {
    const [openId, setOpenId] = useState(projectData[0]?.id || null);

    useEffect(() => {
        AOS.init({
            duration: 500,
            mirror: true,
            once: false,
            offset: 200,
        });
    }, []);

    return (
        <section className="bg-[#2b2b45] py-16">
            <div className="separator-ltr default-pattern mb-16" />
            <div className="container mx-auto max-w-2xl">
                <SectionHeader title="ARCHIVE" icon="icon/ico_bulb.png" />
                <div className="flex flex-col mt-12 lg:mx-12 mx-8" data-aos="fade-up">
                    {projectData.map((item, index) => (
                        <ProjectItem
                            key={item.id}
                            {...item}
                            isOpen={openId === item.id}
                            onClick={() => {
                                // Only open clicked item, no closing
                                if (openId !== item.id) {
                                    setOpenId(item.id);
                                }
                            }}
                            isLast={index === projectData.length - 1}
                            index={index}

                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AchievementSection;
