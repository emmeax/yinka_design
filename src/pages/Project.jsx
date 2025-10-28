import ProjectGrid from "@/component/ProjectGrid";
import { projectsByCategory } from "@/lib/data";
import { containerVariants, imageClipUpVariants, slideUpVariants } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { Navigate, useParams } from "react-router";

const Project = () => {
    const { slug } = useParams();

    const project = projectsByCategory.flatMap((category) => category.projects).find((p) => p.slug === slug);
    const objectives = ["Website Design", "Responsive Design", "Website Copywriting", "Brand Alignment"];

    if (!project) return <Navigate to="/" />;

    return (
        <section className="text-center lg:px-10 lg:pt-5 pt-10">
            <motion.div
                variants={containerVariants()}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-2"
            >
                <motion.h1 variants={slideUpVariants()} className="lg:text-7xl text-3xl font-medium">
                    {project.title}
                </motion.h1>
                <motion.p variants={slideUpVariants()} className="lg:text-2xl text-lg">
                    {project.description}
                </motion.p>
            </motion.div>

            <div className="flex flex-col gap-10 lg:p-10 pt-10">
                <motion.img
                    variants={imageClipUpVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    src={project.desktopImage}
                    alt=""
                    className="rounded-2xl size-full object-cover"
                />

                <div className="flex flex-col gap-[60px]">
                    <div className="space-y-4 lg:px-10">
                        <motion.h2
                            variants={slideUpVariants()}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: "all" }}
                            className="lg:text-7xl text-3xl font-medium"
                        >
                            Our Objectives
                        </motion.h2>

                        <motion.div
                            variants={containerVariants(0.1)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: "all" }}
                            className="flex items-center justify-between gap-4 overflow-auto scrollbar-hide"
                        >
                            {objectives.map((objective, index) => (
                                <motion.button
                                    key={objective + index}
                                    variants={slideUpVariants(0.5)}
                                    className="flex items-center justify-center lg:h-[4.5rem] h-[30px] lg:rounded-[20px] rounded-[9px] lg:px-9 px-3 lg:py-5 py-2.5 lg:text-2xl text-xs border border-primary whitespace-nowrap"
                                    disabled
                                >
                                    {objective}
                                </motion.button>
                            ))}
                        </motion.div>
                    </div>

                    <ProjectGrid
                        images={project.images}
                        className={cn("gap-4", {
                            "lg:grid-cols-2 lg:[&>div:is(:nth-child(3))]:col-span-2": ["scaleon-website"].includes(
                                project.slug,
                            ), // Index 3 spans 2 columns on large screens
                            "lg:grid-cols-2 lg:[&>div:is(:nth-child(3),:nth-child(4))]:col-span-2": [
                                "prompt-plumber-ai",
                            ].includes(project.slug), // Index 3 and 4 span 2 columns on large screens
                            "lg:grid-cols-3 lg:[&>div:is(:nth-child(1),:nth-child(3))]:col-span-2 lg:[&>div:last-child]:col-span-3":
                                ["watersmith-website", "axcel-cyber"].includes(project.slug), // Index 1 and 3 span 2 columns, last spans 3 columns on large screens
                        })}
                    />
                </div>
            </div>
        </section>
    );
};

export default Project;
