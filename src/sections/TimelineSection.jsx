import TimelineItem from "../components/TimelineItem";
import TimelineArrow from "../components/TimelineArrow";
import SectionHeader from "../components/SectionHeader";
import timelineData from "../data/timelineData";

const TimelineSection = () => {
    return (
        <section className="bg-[#2b2b45] py-16 px-4">
            <div className="separator-rtl default-pattern mb-16" />

            <div className="container mx-auto max-w-4xl">
                <SectionHeader title="LOG ENTRY" icon="icon/ico_file.png" />
                <ul className="list-none">
                    {timelineData.map((item, index) =>
                        item.isArrow ? (
                            <TimelineArrow key={index} />
                        ) : (
                            <TimelineItem
                                key={index}
                                date={item.date}
                                type={item.type}
                                text={item.text}
                                description={item.description}
                            />
                        )
                    )}
                </ul>
                <div className="text-center mt-16">
                    <a
                        href="/docs/cv.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center outline outline-2 outline-[#f68958] 
                            bg-[#1b1f21] hover:bg-[#fd5c71] text-white text-[20px] text-shadow-heavy
                            font-vt323 px-6 py-2 rounded transition"
                    >
                        <img
                            src="/icon/ico_file.png"
                            alt="file icon"
                            className="w-8 h-8 mr-2 image-render-pixel"
                            loading="lazy"
                        />
                        Take a peek at my CV
                    </a>
                </div>

            </div>
        </section>
    );
};

export default TimelineSection;
