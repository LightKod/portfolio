const ProjectItem = ({ id, title, description, image }) => {
    return (
        <div
            className="font-vt323 relative group cursor-pointer 
                       overflow-hidden rounded-lg shadow-lg 
                       transform transition duration-300 hover:scale-[1.02]
                       h-[250px]" // Set desired height
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-once="true"
        >
            <a data-toggle="modal" data-target={`#${id}`}>
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 
                            group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white p-4">
                        <h2 className="text-[60px]">{title}</h2>
                        <p className="mt-[-10px] text-[20px] text-[#F0F0F0]">{description}</p>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default ProjectItem;
