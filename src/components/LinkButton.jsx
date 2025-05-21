const LinkButton = ({ href, icon, text }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center outline outline-2 outline-[#f68958]
        bg-[#1b1f21] hover:scale-110 text-white text-[20px] text-shadow-heavy
        font-vt323 px-4 py-2 rounded transition m-2"
    >
        <img
            src={icon}
            alt={`${text} icon`}
            className="w-8 h-8 mr-2 image-render-pixel"
            loading="lazy"
        />
        {text}
    </a>
);

export default LinkButton;