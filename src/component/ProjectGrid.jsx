import { fadeInVariants } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const ProjectGrid = ({ className, images }) => {
    return (
        <div className={cn("grid", className)}>
            {images.map((image) => (
                <motion.div
                    variants={fadeInVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    key={image}
                    className="flex rounded-2xl overflow-hidden"
                >
                    <img src={image} alt="" className="size-full object-cover" />
                </motion.div>
            ))}
        </div>
    );
};

export default ProjectGrid;
