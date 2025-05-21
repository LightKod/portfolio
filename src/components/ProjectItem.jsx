import React, { useRef, useState, useEffect } from "react";
import LinkButton from "./LinkButton";
const ProjectItem = ({
    icon,
    title,
    description,
    image,
    isOpen,
    onClick,
    index,
    keyFeatures,
    developmentTeam,
    technology,
    buttons = [], // array of { href, icon, text }
}) => {
    const contentRef = useRef(null);
    const [maxHeight, setMaxHeight] = useState("0px");

    useEffect(() => {
        if (isOpen) {
            setMaxHeight(contentRef.current.scrollHeight + "px");
        } else {
            setMaxHeight("0px");
        }
    }, [isOpen]);

    return (
        <div
            className={`bg-[#1b1f21] rounded-t-xl transition-all duration-300 cursor-pointer overflow-hidden border-t relative
                ${index > 0 ? "mt-[-8px]" : ""}`}
            onClick={onClick}
            style={{ zIndex: 100 + index }}
        >
            <div className="flex items-center h-[60px] px-4 gap-4">
                <img
                    src={`${icon}`}
                    alt={title}
                    className="w-8 h-8 image-render-pixel"
                />
                <h3 className="text-white font-vt323 text-2xl">{title}</h3>
            </div>

            {/* Animated container for the collapsible content */}
            <div
                ref={contentRef}
                style={{
                    maxHeight: maxHeight,
                    transition: "max-height 0.3s ease",
                    overflow: "hidden",
                }}
            >
                <div className="px-4 pb-4">
                    {/* Image stays fixed height with cropping */}
                    <img
                        src={image}
                        alt={title}
                        className="w-full rounded mb-4 image-render-pixel"
                        style={{
                            height: "300px",
                            objectFit: "cover",
                            width: "100%",
                        }}
                    />

                    <p className="text-white font-vt323 text-lg mb-2">
                        <strong>Description:</strong> {"AAA"}
                    </p>
                    <p className="text-white font-vt323 text-lg mb-2">
                        <strong>Key Features:</strong> {"AAA"}
                    </p>
                    <p className="text-white font-vt323 text-lg mb-2">
                        <strong>Development Team:</strong> {"AAA"}
                    </p>
                    <p className="text-white font-vt323 text-lg mb-4">
                        <strong>Technology:</strong> {"AAA"}
                    </p>

                    <div className="flex justify-center flex-wrap gap-4">
                        {buttons.map(({ href, icon, text }, i) => (
                            <LinkButton key={i} href={href} icon={icon} text={text} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectItem;
