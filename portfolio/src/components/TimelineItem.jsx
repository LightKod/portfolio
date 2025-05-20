const TimelineItem = ({ date, type, text, description }) => (
    <li className="text-white font-vt323 text-[22px] text-shadow
                text-center mt-2 mb-6 flex flex-col items-center">
        <span className="text-[16px] text-white px-4 py-1 mb-2 
                    rounded-full inline-block bg-[#1b1f21]">
            {date}
        </span>
        <div className=" max-w">
            <div>
                {type != "" ? <strong className="underline">{type}:</strong> : ""}
                <span className="ml-2">{text}</span>
            </div>
            {description && (
                <p className="text-[18px] text-[#d5d5d5] font-vt323">{description}</p>
            )}
        </div>
    </li>
);

export default TimelineItem;
