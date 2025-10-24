import BigStar from "@/assets/Image/BigStar.svg";
import Contra from "@/assets/Image/contra.svg";
import Hand from "@/assets/Image/Hand.png";
import LinkedIn from "@/assets/Image/linkedin.svg";
import { bounceVariants } from "@/lib/motion";
import { motion } from "motion/react";
import SectionHeading from "./SectionHeading";

const ContactSection = () => {
    return (
        <section
            id="contact"
            className="py-[5rem] space-y-[6rem] relative isolate"
        >
            <div className="w-contain flex flex-col gap-10 relative">
                <div className="flex items-center justify-between">
                    <SectionHeading index="04/" heading="CONTACT ME" />
                    <motion.h4
                        initial={{ opacity: 0, x: "100%" }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ type: "spring", delay: 1.5, duration: 1 }}
                        className="text-3xl lg:inline-flex hidden"
                    >
                        FOR Digital Design
                    </motion.h4>
                </div>

                <div className="lg:px-[10%] lg:text-2xl text-2xl font-medium relative flex flex-col gap-6">
                    <h4 className="text-3xl font-technor font-normal">
                        WANT TO DISCUSS A PROJECT?
                    </h4>
                    <p>
                        Feel free to reach me via email at{" "}
                        <a
                            href="mailto:xd.olayinka@gmail.com"
                            className="text-primary"
                        >
                            xd.olayinka@gmail.com
                        </a>
                    </p>
                    <p>
                        Or connect with me via phone call at{" "}
                        <a href="tel:+2349099346124" className="text-primary">
                            +234 9099346124
                        </a>
                    </p>
                    <div className="flex items-center gap-4">
                        <a href="">
                            <img src={LinkedIn} alt="" />
                        </a>
                        <a href="">
                            <img src={Contra} alt="" />
                        </a>
                    </div>
                </div>

                <div className="lg:flex hidden items-center gap-10 mt-10 text-3xl">
                    <span className="text-primary">{`Let's Discuss >`}</span>

                    <div className="flex items-center gap-1">
                        <a
                            href=""
                            className="hover:text-primary transition-colors duration-300"
                        >
                            Twitter,
                        </a>
                        <a
                            href=""
                            className="hover:text-primary transition-colors duration-300"
                        >
                            Contra
                        </a>
                    </div>
                </div>

                {/* Hand pointing */}
                <img
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
