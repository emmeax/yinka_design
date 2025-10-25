import GetIntouchMobileImg from "@/assets/Image/get-in-touch-mobile.svg";
import GetIntouchImg from "@/assets/Image/get-in-touch.svg";
import {
    containerVariants,
    fadeInVariants,
    slideUpVariants,
} from "@/lib/motion";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import SectionHeading from "./SectionHeading";
import LinkedIn from "./icons/linkedin";

const GetInTouch = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end end"],
    });
    const scaleTransform = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const scale = useSpring(scaleTransform, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <section
            ref={sectionRef}
            id="get-in-touch"
            className="w-contain py-[5rem] space-y-[5rem]"
        >
            <SectionHeading index="07/" heading="GET IN TOUCH" />

            <motion.div
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="rounded-[40px] lg:bg-[#540D8B] bg-primary flex lg:flex-row flex-col items-center justify-between"
            >
                <div className="flex flex-col lg:gap-9 gap-6 lg:pl-[4rem] pl-4 lg:py-0 py-20 pr-4">
                    <motion.h3
                        variants={slideUpVariants()}
                        className="lg:text-[4rem] text-[36px] font-bold font-technor text-center lg:text-start"
                    >
                        Let's get In
                        <br className="lg:hidden inline" /> Touch
                    </motion.h3>
                    <motion.div
                        variants={containerVariants()}
                        className="flex lg:flex-row flex-col lg:items-center lg:gap-2 gap-4 *:w-full *:lg:w-fit"
                    >
                        <motion.a
                            variants={slideUpVariants()}
                            href="tel:+2349099346124"
                            className="flex items-center justify-center gap-5 h-12 px-5 text-lg bg-[#F8F9FF] text-[#623187] rounded-2xl font-medium whitespace-nowrap"
                        >
                            Book a discovery call
                            {/* <Phone className="size-4" /> */}
                        </motion.a>
                        <motion.a
                            variants={slideUpVariants()}
                            href=""
                            className="flex items-center justify-center gap-5 h-12 px-5 text-lg border border-white text-[#F8F9FF] rounded-2xl font-medium whitespace-nowrap"
                        >
                            Connect with me <LinkedIn className="size-4" />
                        </motion.a>
                    </motion.div>
                </div>

                <motion.img
                    style={{
                        scaleX: scale,
                        transformOrigin: "right",
                    }}
                    src={GetIntouchImg}
                    alt=""
                    className="lg:block hidden"
                />
                <motion.img
                    style={{
                        scaleY: scale,
                        transformOrigin: "bottom",
                    }}
                    src={GetIntouchMobileImg}
                    alt=""
                    className="block lg:hidden size-full object-cover"
                />
            </motion.div>
        </section>
    );
};

export default GetInTouch;
