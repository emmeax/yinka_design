import BigStar from "@/assets/Image/BigStar.svg";
import Contra from "@/assets/Image/contra.svg";
import Hand from "@/assets/Image/Hand.png";
import LinkedIn from "@/assets/Image/linkedin.svg";
import {
    bounceVariants,
    containerVariants,
    slideUpVariants,
} from "@/lib/motion";
import { motion } from "motion/react";
import SectionHeading from "./SectionHeading";

const ContactSection = () => {
    return (
        <section
            id="contact"
            className="py-[5rem] space-y-[6rem] relative isolate"
        >
            <div className="w-contain flex flex-col gap-10 relative overflow-hidden">
                <div className="flex items-center justify-between">
                    <SectionHeading index="04/" heading="CONTACT ME" />
                    <motion.h4
                        initial={{ opacity: 0, x: "100%" }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                type: "spring",
                                delay: 1,
                                duration: 1,
                            },
                        }}
                        viewport={{ once: true }}
                        className="text-3xl lg:inline-flex hidden"
                    >
                        FOR Digital Design
                    </motion.h4>
                </div>

                <motion.div
                    variants={containerVariants()}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="lg:px-[10%] lg:text-2xl text-2xl font-medium relative flex flex-col gap-6"
                >
                    <motion.h4
                        variants={slideUpVariants()}
                        className="text-3xl font-technor font-normal"
                    >
                        WANT TO DISCUSS A PROJECT?
                    </motion.h4>
                    <motion.p variants={slideUpVariants()}>
                        Feel free to reach me via email at{" "}
                        <a
                            href="mailto:xd.olayinka@gmail.com"
                            className="text-primary"
                        >
                            xd.olayinka@gmail.com
                        </a>
                    </motion.p>
                    <motion.p variants={slideUpVariants()}>
                        Or connect with me via phone call at{" "}
                        <a href="tel:+2349099346124" className="text-primary">
                            +234 9099346124
                        </a>
                    </motion.p>

                    <motion.div
                        variants={containerVariants()}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex items-center gap-4"
                    >
                        <motion.a variants={slideUpVariants()} href="">
                            <img
                                src={LinkedIn}
                                alt=""
                                className="lg:size-[6rem] size-[4.375rem]"
                            />
                        </motion.a>
                        <motion.a variants={slideUpVariants()} href="">
                            <img
                                src={Contra}
                                alt=""
                                className="lg:w-[21.125rem] w-[11.875rem]"
                            />
                        </motion.a>
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={containerVariants()}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="lg:flex hidden items-center gap-10 mt-10 text-3xl"
                >
                    <motion.span
                        variants={slideUpVariants()}
                        className="text-primary"
                    >{`Let's Discuss >`}</motion.span>

                    <motion.div
                        variants={containerVariants()}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex items-center gap-1"
                    >
                        <motion.a
                            variants={slideUpVariants()}
                            href=""
                            className="hover:text-primary transition-colors duration-300"
                        >
                            Twitter,
                        </motion.a>
                        <motion.a
                            variants={slideUpVariants()}
                            href=""
                            className="hover:text-primary transition-colors duration-300"
                        >
                            Contra
                        </motion.a>
                    </motion.div>
                </motion.div>

                {/* Hand pointing */}
                <motion.img
                    initial={{ opacity: 0, x: "100%" }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: {
                            type: "spring",
                            delay: 1.5,
                            duration: 1,
                        },
                    }}
                    viewport={{ once: true }}
                    src={Hand}
                    alt=""
                    className="lg:block hidden absolute right-0 top-[15%] -z-10"
                />
            </div>

            {/* Big Star */}
            <motion.img
                variants={bounceVariants()}
                initial="hidden"
                animate="visible"
                src={BigStar}
                alt=""
                className="lg:block hidden absolute -bottom-[2.5rem] right-0"
            />
        </section>
    );
};

export default ContactSection;
