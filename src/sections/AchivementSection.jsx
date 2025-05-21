import SectionHeader from "../components/SectionHeader";
import ProjectItem from "../components/ProjectItem";
import projectData from "../data/projectData";

const AchievementSection = () => {
    return (
        <section className="bg-[#2b2b45] py-16">
            <div className="separator-ltr default-pattern mb-16" />
            <div className="container mx-auto max-w-6xl">
                <SectionHeader title="ARCHIVE" icon="icon/ico_bulb.png" />

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-12 md:max-w-xl xl:max-w-6xl mx-auto">
                    {projectData.map((item) => (
                        <ProjectItem
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            description={item.description}
                            image={item.image}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AchievementSection;