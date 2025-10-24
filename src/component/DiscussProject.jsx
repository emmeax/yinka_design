import { motion } from "motion/react";
import Arrow from "../assets/Image/arrow.svg";
import { arrowScrollVariants } from "../lib/motion";
import { cn } from "../lib/utils";

const DiscussProject = ({ className }) => {
    return (
        <div
            className={cn(
                "flex lg:flex-row flex-col lg:items-center items-start lg:gap-15 gap-10 lg:mt-10 mt-5",
                className,
            )}
        >
            <div className="relative overflow-hidden py-[var(--padding)] [--padding:1rem]">
                <motion.img
                    variants={arrowScrollVariants("-100%", "0")}
                    initial="hidden"
                    animate="visible"
                    src={Arrow}
                    alt="Arrow"
                    className="lg:size-[5.75rem] size-14 absolute -translate-y-full"
                />
                <motion.img
                    variants={arrowScrollVariants(
                        "0",
                        "calc(100% + var(--padding))",
                    )}
                    initial="hidden"
                    animate="visible"
                    src={Arrow}
                    alt="Arrow"
                    className="lg:size-[5.75rem] size-14"
                />
            </div>

            <p className="font-technor lg:text-[2.5rem] text-[35px]">
                <span
                    className="text-primary cursor-pointer"
                    onClick={() => {
                        const contactSection =
                            document.getElementById("contact");
                        if (contactSection) {
                            contactSection.scrollIntoView({
                                behavior: "smooth",
                            });
                        }
                    }}
                >{`(< CLICK HERE)`}</span>{" "}
                <span className="">IF YOU'D LIKE TO DISCUSS A PROJECT</span>
            </p>
        </div>
    );
};

export default DiscussProject;
