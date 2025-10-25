import { motion } from "motion/react";
import CirclesOverlap from "../assets/Image/circles-overlap.svg";
import Profilepics from "../assets/Image/Profilepics.jpg";
import {
    containerVariants,
    imageClipUpVariants,
    itemVariants,
} from "../lib/motion";
import Document from "./icons/document";
import LinkedIn from "./icons/linkedin";

const Hero = () => {
    return (
        <section className="w-contain relative isolate pt-[4rem] pb-[10rem] text-white flex lg:flex-row flex-col lg:items-start justify-center gap-[3.75rem] z-10">
            <motion.div
                variants={containerVariants()}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="lg:w-[55%] space-y-4 font-medium"
            >
                <motion.h2
                    variants={itemVariants}
                    className="lg:text-8xl text-5xl inline-flex flex-col gap-2 font-technor leading-[60px]"
                >
                    <span className="lg:inline hidden text-primary-100">
                        CREATIVE DIRECTOR & DESIGNER
                    </span>
                    <span className="inline lg:hidden text-primary-100">
                        DIGITAL DESIGNER
                    </span>
                    <span className="lg:text-5xl text-3xl">
                        with 6+ years of experience
                    </span>
                </motion.h2>
                <motion.p
                    variants={itemVariants}
                    className="lg:text-2xl text-xl inline-flex flex-col gap-4"
                >
                    <span>
                        I specialize in using Design as a Method of
                        Communicating and taking Ideas and Visions from
                        obscurity to execution with Problem solving skills and
                        Creativity applied with Out of the Box thinking.
                    </span>
                    <span>
                        My experience in Writing, Design, Marketing, Sales and
                        Management, allowing me lead cross-functional teams to
                        achieving success and create High Conversion Designs
                        that Resonate with Target Audiences.
                    </span>
                </motion.p>
            </motion.div>

            <motion.div
                variants={containerVariants()}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="lg:w-[25%] flex flex-col gap-6"
            >
                <motion.img
                    variants={imageClipUpVariants}
                    src={Profilepics}
                    alt=""
                    className="size-full object-cover"
                />
                <motion.div
                    variants={containerVariants()}
                    className="flex items-center gap-2 *:w-full"
                >
                    <motion.a
                        variants={itemVariants}
                        href=""
                        className="flex items-center justify-center gap-2 h-12 px-2.5 bg-[linear-gradient(122.27deg,#310E4C_75.91%,rgba(142,24,234,0.54)_98.49%)] rounded-2xl font-medium"
                    >
                        Download CV <Document className="size-4" />
                    </motion.a>
                    <motion.a
                        variants={itemVariants}
                        href=""
                        className="flex items-center justify-center gap-2 h-12 px-2.5 border border-primary rounded-2xl font-medium"
                    >
                        Let's connect <LinkedIn className="size-4" />
                    </motion.a>
                </motion.div>
            </motion.div>

            <motion.img
                variants={imgVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                src={CirclesOverlap}
                alt=""
                className="absolute hidden lg:block top-5 right-0 -z-10"
            />
        </section>
    );
};

export default Hero;

/** @type {import('motion/react').Variants} */
const imgVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delay: 2,
            duration: 1.2,
        },
    },
};
