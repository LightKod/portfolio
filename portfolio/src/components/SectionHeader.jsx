const SectionHeader = ({ title, icon }) => (
    <div className="text-center mb-12">
        <h2 className="text-[60px] text-shadow-heavy text-white font-vt323">
            {icon && (
                <span
                    className="inline-block w-12 h-12 bg-contain bg-no-repeat align-middle mr-4 mb-2 image-render-pixel"
                    style={{ backgroundImage: `url('${icon}')` }}
                />
            )}
            {title}
        </h2>
    </div>
);

export default SectionHeader;
