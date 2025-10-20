import { motion, stagger } from "motion/react";
import Profilepics from "../assets/Image/Profilepics.png";
import Document from "./icons/document";
import LinkedIn from "./icons/linkedin";

const Home = () => {
    return (
        <section className="w-contain relative pt-20 pb-[10rem] text-white flex lg:flex-row flex-col lg:items-start justify-center gap-[3.75rem] z-10">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="lg:w-[55%] space-y-4 font-medium"
            >
                <motion.h2
                    variants={itemVariants}
                    className="lg:text-8xl text-5xl inline-flex flex-col gap-2 font-technor leading-[60px]"
                >
                    <span className="lg:inline hidden">
                        CREATIVE DIRECTOR & DESIGNER
                    </span>
                    <span className="inline lg:hidden">DIGITAL DESIGNER</span>
                    <span className="lg:text-5xl text-3xl">
                        with 7+ years of experience
                    </span>
                </motion.h2>
                <motion.p
                    variants={itemVariants}
                    className="lg:text-2xl text-xl inline-flex flex-col gap-4"
                >
                    <span>
                        I specialize in taking Ideas and Visions from obscurity
                        to execution with Problem solving skills, Technology and
                        Service Delivery Systems applied with out of the box
                        thinking.
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
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="lg:w-[25%] flex flex-col gap-6"
            >
                <motion.img
                    variants={imageClipPathVariants}
                    src={Profilepics}
                    alt=""
                    className="size-full object-cover"
                />
                <motion.div
                    variants={containerVariants}
                    className="flex items-center gap-2 *:w-full"
                >
                    <motion.a
                        variants={itemVariants}
                        href=""
                        className="flex items-center justify-center gap-2 h-12 px-2.5 bg-primary rounded-2xl font-medium"
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
        </section>
    );
};

export default Home;

const containerVariants = {
    hidden: {
        opacity: 0,
        // transition: { when: "afterChildren" },
    },
    visible: {
        opacity: 1,
        transition: {
            // when: "beforeChildren",
            delayChildren: stagger(0.3),
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 150,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.5,
        },
    },
};

const imageClipPathVariants = {
    hidden: {
        clipPath: "inset(100% 0 0 0)",
    },
    visible: {
        clipPath: "inset(0% 0 0 0)",
        transition: {
            duration: 1.5,
        },
    },
};
