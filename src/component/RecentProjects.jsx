import ClinexRecentDesign from "@/assets/Image/clinex-recent-design.svg";
import DesignSystem1 from "@/assets/Image/design-system-1.svg";
import HerenciaMockup from "@/assets/Image/herencia-mockup.svg";
import HomelyProjectShowcase from "@/assets/Image/homely-project-showcase.svg";
import RedAppMockup from "@/assets/Image/red-app-mockup.svg";
import SmileLitMockup from "@/assets/Image/smileLit-mockup.svg";
import SpaceDesignMockup from "@/assets/Image/space-design-mockup.svg";
import YogaProjectShowcase from "@/assets/Image/yoga-project-showcase.svg";
import { carouselItemVariants } from "@/lib/motion";
import { motion } from "motion/react";
import Carousel from "./carousel";
import SectionHeading from "./SectionHeading";

const RecentProjects = () => {
    const projects = [
        DesignSystem1,
        HerenciaMockup,
        YogaProjectShowcase,
        SmileLitMockup,
        HomelyProjectShowcase,
        SpaceDesignMockup,
        ClinexRecentDesign,
        RedAppMockup,
    ];

    const OPTIONS = { align: "start", loop: true };

    return (
        <section id="work" className="py-[5rem] space-y-[6rem] relative isolate">
            <div className="w-contain">
                <SectionHeading index="03/" heading="RECENT PROJECTS" />
            </div>

            <Carousel
                options={OPTIONS}
                // type="scale"
                // tweenFactorBase={0.15}
                // minScale={0.85}
                className="ml-[-1rem] lg:ml-[-1.5rem] items-center"
            >
                {projects.map((image, index) => (
                    <motion.div
                        variants={carouselItemVariants}
                        initial="hidden"
                        whileInView="visible"
                        exit="exit"
                        transition={{
                            type: "spring",
                            delay: index * 0.1,
                            duration: 0.8,
                        }}
                        viewport={{ once: true }}
                        key={index}
                        className="min-w-0 shrink-0 grow-0 basis-full sm:basis-1/2 lg:basis-1/3 lg:pl-[1.5rem] pl-[1rem]"
                    >
                        <div className="max-h-[580px] overflow-hidden group">
                            <img
                                src={image}
                                alt="Recent Project Image"
                                className="size-full object-cover group-hover:scale-105 transition-transform duration-[600ms]"
                            />
                        </div>
                    </motion.div>
                ))}
            </Carousel>
        </section>
    );
};

export default RecentProjects;
