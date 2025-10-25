import { containerVariants, slideUpVariants } from "@/lib/motion";
import { motion } from "motion/react";

const SectionHeading = ({ index, heading }) => {
    return (
        <motion.h2
            variants={containerVariants()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex lg:items-center items-start lg:gap-1 gap-2 overflow-hidden"
        >
            <motion.span
                variants={slideUpVariants()}
                className="lg:text-6xl text-3xl text-primary"
            >
                {index}
            </motion.span>
            <motion.span
                variants={slideUpVariants()}
                className="lg:text-7xl text-5xl leading-[100%] font-technor font-medium text-white"
            >
                {heading}
            </motion.span>
        </motion.h2>
    );
};

export default SectionHeading;
