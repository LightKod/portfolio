import SectionHeader from "../components/SectionHeader";
import ProjectItem from "../components/ProjectItem";
import projectData from "../data/projectData";

const AchievementSection = () => {
    return (
        <section className="bg-[#2b2b45] py-16 px-4">
            <div className="separator-rtl default-pattern mb-16" />
            <div className="container mx-auto max-w-6xl">
                <SectionHeader title="ACHIEVEMENT" icon="icon/ico_bulb.png" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
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