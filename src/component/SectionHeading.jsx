const SectionHeading = ({ index, heading }) => {
    return (
        <h2 className="flex lg:items-center items-start lg:gap-1 gap-2">
            <span className="lg:text-6xl text-3xl text-primary">{index}</span>
            <span className="lg:text-7xl text-5xl leading-[100%] font-technor font-medium text-white">
                {heading}
            </span>
        </h2>
    );
};

export default SectionHeading;
