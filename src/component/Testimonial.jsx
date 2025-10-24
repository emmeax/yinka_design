import Avatar1 from "@/assets/Image/avatar-1.svg";
import TestimonialHeader from "@/assets/Image/testimonial-header.svg";
import TestimonialLeft from "@/assets/Image/testimonial-left.svg";
import TestimonialRight from "@/assets/Image/testimonial-right.svg";
import VideoPlaceholder1 from "@/assets/Image/video-placeholder-1.svg";
import VideoPlaceholder2 from "@/assets/Image/video-placeholder-2.svg";
import VideoPlaceholder3 from "@/assets/Image/video-placeholder-3.svg";
import SectionHeading from "./SectionHeading";
import Play from "./icons/play";
import Star from "./icons/star";

const videoPlaceholders = [
    VideoPlaceholder1,
    VideoPlaceholder2,
    VideoPlaceholder3,
    VideoPlaceholder1,
    VideoPlaceholder2,
    VideoPlaceholder3,
];

const Testimonial = () => {
    return (
        <section id="testimonial" className="py-[8rem] relative isolate">
            <div className="flex flex-col gap-10">
                <div className="w-contain">
                    <SectionHeading index="05/" heading="TESTIMONIALS" />
                </div>

                <div className="relative flex lg:flex-row flex-col lg:items-end lg:justify-center lg:gap-0 gap-10">
                    <img
                        src={TestimonialHeader}
                        alt=""
                        className="size-full object-cover lg:block hidden"
                    />

                    <div className="lg:hidden flex items-center justify-between">
                        <img src={TestimonialLeft} alt="" />
                        <img src={TestimonialRight} alt="" />
                    </div>

                    <h2 className="lg:absolute lg:-bottom-10 lg:text-5xl text-2xl text-center">
                        <span className="font-medium text-primary">
                            Trusted by top companies
                        </span>
                        <br />
                        from various industries
                    </h2>

                    <div className="lg:hidden flex items-center justify-between">
                        <img src={TestimonialLeft} alt="" />
                        <img src={TestimonialRight} alt="" />
                    </div>
                </div>

                <div className="w-contain mt-20 flex flex-col gap-20 lg:px-[10%]">
                    <div className="flex overflow-auto snap-x scrollbar-hide -ml-[var(--gap)] [--gap:3rem]">
                        {videoPlaceholders.map((placeholder, index) => (
                            <div
                                key={index}
                                className="shrink-0 grow-0 lg:basis-1/4 basis-9/12 pl-[var(--gap)] snap-start flex flex-col gap-4"
                            >
                                <div className="relative flex items-center justify-center">
                                    <img
                                        src={placeholder}
                                        alt=""
                                        className="size-full object-cover"
                                    />
                                    <Play className="absolute" />
                                </div>

                                <div className="flex items-center gap-2">
                                    <img
                                        src={Avatar1}
                                        alt=""
                                        className="size-8"
                                    />
                                    <div>
                                        <h6 className="font-syne font-medium">
                                            Paul Jake
                                        </h6>
                                        <span className="text-sm">
                                            Product manager, Wise
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex overflow-auto snap-x scrollbar-hide -ml-[var(--gap)] [--gap:1.5rem]">
                        {[...Array(6)].map((_, index) => (
                            <div
                                key={index}
                                className="shrink-0 grow-0 lg:basis-1/3 basis-full pl-[var(--gap)] snap-start flex flex-col gap-8"
                            >
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, index) => (
                                        <Star
                                            key={index}
                                            className="text-[#EFC725]"
                                        />
                                    ))}
                                </div>

                                <p className="text-xl">
                                    I love his work so much, i was able to rely
                                    on his agency to deliver the mvp of our
                                    product in less than 2 months beginning from
                                    the discovery session to delivering
                                    prototypes. You should definitely give him a
                                    try
                                </p>

                                <div className="flex items-center gap-2">
                                    <img
                                        src={Avatar1}
                                        alt=""
                                        className="size-[60px]"
                                    />
                                    <div>
                                        <h6 className="font-syne font-medium text-2xl text-primary">
                                            Paul Jake
                                        </h6>
                                        <span className="text-xl">
                                            Product manager, Wise
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
