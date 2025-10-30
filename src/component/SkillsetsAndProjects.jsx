import { categories as allCategories, projects } from "@/lib/data";
import { carouselItemVariants, containerVariants, slideUpVariants } from "@/lib/motion";
import Autoplay from "embla-carousel-autoplay";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Link } from "react-router";
import { cn } from "../lib/utils";
import Carousel from "./carousel";
import DiscussProject from "./DiscussProject";
import SectionHeading from "./SectionHeading";

const SkillsetsAndProjects = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const categories = ["All", ...allCategories];

    const filteredProjects =
        selectedCategory === "All" ? projects : projects.filter((p) => p.categories.includes(selectedCategory));

    return (
        <section className="relative isolate">
            <div className="w-contain flex flex-col gap-10">
                <SectionHeading index="01/" heading="SKILLSETS & PROJECTS" />

                <div className="flex flex-col lg:gap-[6.25rem] gap-10">
                    <motion.div
                        variants={containerVariants(0.1)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex items-center justify-between lg:gap-7 gap-4 overflow-auto scrollbar-hide"
                    >
                        {categories.map((category, index) => (
                            <motion.button
                                key={category + index}
                                variants={slideUpVariants(0.5)}
                                className={cn(
                                    "flex items-center justify-center lg:h-[4.5rem] h-[62px] rounded-[30px] px-9 py-5 lg:text-2xl text-base hover:bg-white hover:text-black border border-primary hover:border-transparent whitespace-nowrap transition-colors duration-300",
                                    {
                                        "bg-white text-black border-transparent": selectedCategory === category,
                                    },
                                )}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </motion.button>
                        ))}
                    </motion.div>

                    <Carousel
                        options={{ align: "start" }}
                        plugins={[
                            Autoplay({
                                delay: 2000,
                                stopOnInteraction: false,
                                stopOnMouseEnter: true,
                            }),
                        ]}
                        showControls={false}
                        className="-ml-7"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map(({ id, desktopImage, tags, slug }, index) => (
                                <motion.div
                                    key={id}
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
                                    className="min-w-0 flex-shrink-0 flex-grow-0 basis-[90%] lg:basis-[618.5px] pl-7"
                                >
                                    <Link to={slug.length > 0 ? `/projects/${slug}` : ""}>
                                        <div className="flex flex-col gap-6">
                                            <div className="overflow-hidden group lg:h-[350px] h-[194px]">
                                                <img
                                                    src={desktopImage}
                                                    alt=""
                                                    className="size-full object-cover group-hover:scale-105 transition-transform duration-[600ms]"
                                                />
                                            </div>
                                            <div className="flex items-center gap-4">
                                                {tags.map((tag, index) => (
                                                    <span
                                                        key={tag + index}
                                                        className="border border-white rounded-lg px-2.5 py-1"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </Carousel>
                </div>

                <DiscussProject />
            </div>
        </section>
    );
};

export default SkillsetsAndProjects;
