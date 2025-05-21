import { useState } from "react";
import SectionHeader from "../components/SectionHeader";
import ProjectItem from "../components/ProjectItem";
import projectData from "../data/projectData";

const AchievementSection = () => {
    // Open the first project by default
    const [openId, setOpenId] = useState(projectData[0]?.id || null);

    return (
        <section className="bg-[#2b2b45] py-16">
            <div className="separator-ltr default-pattern mb-16" />
            <div className="container mx-auto max-w-2xl">
                <SectionHeader title="ARCHIVE" icon="icon/ico_bulb.png" />
                <div className="flex flex-col mt-12 lg:mx-12 mx-8">
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
