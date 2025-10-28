import ArrowLeft from "@/component/icons/arrow-left";
import { projectsByCategory } from "@/lib/data";
import { containerVariants, slideUpVariants } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { Outlet, useNavigate, useParams } from "react-router";

const ProjectLayout = () => {
    const { slug } = useParams();
    const navigate = useNavigate();

    const projectCategory = projectsByCategory.find((category) => category.projects.some((p) => p.slug === slug));
    const categories = ["All", ...projectsByCategory.map((category) => category.name)];

    return (
        <main className="w-contain pb-20 pt-12">
            {/* Header */}
            <section className="space-y-8">
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
                                "flex items-center justify-center lg:h-[4.5rem] h-[30px] lg:rounded-[20px] rounded-[9px] lg:px-9 px-3 lg:py-5 py-2.5 lg:text-2xl text-xs border border-primary whitespace-nowrap",
                                {
                                    "bg-white text-black border-transparent": projectCategory?.name === category,
                                },
                            )}
                            disabled
                        >
                            {category}
                        </motion.button>
                    ))}
                </motion.div>

                <motion.button
                    variants={slideUpVariants()}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="lg:h-9 flex items-center lg:gap-2 gap-1 text-primary-200 lg:text-base text-xs rounded-lg bg-white lg:px-4 px-2 lg:py-2 py-1 font-medium"
                    onClick={() => navigate(-1)}
                >
                    <ArrowLeft className="lg:size-5 size-2.5" />
                    Go Back
                </motion.button>
            </section>

            <Outlet />
        </main>
    );
};

export default ProjectLayout;
