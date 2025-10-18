import { useState } from "react";
import Cube from "../assets/Image/box.svg";
import CirclesOverlap from "../assets/Image/circles-overlap.svg";
import { cn } from "../lib/utils";
import DiscussProject from "./DiscussProject";
import SectionHeading from "./SectionHeading";

const Hero = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = [
        "All",
        "UI/UX Design",
        "Website Design",
        "Brand Design",
        "Pitch & Presentations",
        "Marketing",
    ];

    const allProjects = [
        {
            id: 1,
            category: "UI/UX Design",
            desktopImage:
                "https://res.cloudinary.com/ddjnrebkn/image/upload/v1746444044/all%20folder/Home_page_0_1_w2w6de.png",

            tags: ["Web Design", "Finance"],
        },
        {
            id: 2,
            category: "Website Design",
            desktopImage:
                "https://res.cloudinary.com/ddjnrebkn/image/upload/v1746444045/all%20folder/PromptGuardianlandingpage_mvklp8.png",
            tags: ["Web Design", "Saas"],
        },
        {
            id: 3,
            category: "Brand Design",
            desktopImage:
                "https://res.cloudinary.com/ddjnrebkn/image/upload/v1746444044/all%20folder/Home_page_0_1_w2w6de.png",
            tags: ["Brand Design", "Brand Design"],
        },
        {
            id: 4,
            category: "Pitch & Presentations",
            desktopImage:
                "https://res.cloudinary.com/ddjnrebkn/image/upload/v1746444045/all%20folder/PromptGuardianlandingpage_mvklp8.png",
            tags: ["Pitch & Presentations", "Brand Design"],
        },
        {
            id: 5,
            category: "Marketing",
            desktopImage:
                "https://res.cloudinary.com/ddjnrebkn/image/upload/v1746444044/all%20folder/Home_page_0_1_w2w6de.png",
            tags: ["Marketing", "Marketing"],
        },
        {
            id: 6,
            category: "Marketing",
            desktopImage:
                "https://res.cloudinary.com/ddjnrebkn/image/upload/v1746444045/all%20folder/PromptGuardianlandingpage_mvklp8.png",
            tags: ["Web Design", "Marketing"],
        },
    ];

    const filteredProjects =
        selectedCategory === "All"
            ? allProjects
            : allProjects.filter(
                  (project) => project.category === selectedCategory,
              );

    return (
        <section className="relative isolate">
            <img
                src={CirclesOverlap}
                alt=""
                className="absolute hidden lg:block top-0 -translate-y-[80%] -z-10"
            />
            <img
                src={Cube}
                alt=""
                className="absolute hidden lg:block bottom-0 translate-y-[30%] right-0 -z-10"
            />

            <div className="w-contain flex flex-col gap-10">
                <SectionHeading index="01/" heading="SKILLSETS & PROJECTS" />

                <div className="flex flex-col lg:gap-[6.25rem] gap-10">
                    <div className="flex items-center justify-between lg:gap-7 gap-4 overflow-auto scrollbar-hide">
                        {categories.map((category, index) => (
                            <button
                                key={category + index}
                                className={cn(
                                    "flex items-center justify-center lg:h-[4.5rem] h-[62px] rounded-[30px] px-9 py-5 lg:text-2xl text-base hover:bg-white hover:text-black border border-primary hover:border-transparent whitespace-nowrap transition duration-300",
                                    {
                                        "bg-white text-black border-transparent":
                                            selectedCategory === category,
                                    },
                                )}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-7 overflow-auto snap-x scrollbar-hide">
                        {filteredProjects.map(
                            ({ category, desktopImage, tags }, index) => (
                                <div
                                    key={category + index}
                                    className="lg:min-w-[618.5px] min-w-[90%] flex flex-col gap-6 snap-start"
                                >
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
                            ),
                        )}
                    </div>
                </div>

                <DiscussProject />
            </div>
        </section>
    );
};

export default Hero;
