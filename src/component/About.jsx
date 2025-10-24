import { bounceVariants } from "@/lib/motion";
import { motion } from "motion/react";
import React from "react";
import aboutshape from "../assets/Image/aboutshape.png";
import Cube from "../assets/Image/box.svg";
import BgCurve from "../assets/Image/div.png"; // Arch shape
import BgDiagonal from "../assets/Image/div1.png"; // Diagonal line
import { skills } from "../lib/data";
import DiscussProject from "./DiscussProject";
import DomainExpertise from "./DomainExpertise";
import SectionHeading from "./SectionHeading";
import Skills from "./Skills";

const About = () => {
    return (
        <section
            id="about"
            className="pt-[10rem] pb-[5rem] space-y-[10rem] relative isolate"
        >
            <div className="w-contain flex flex-col gap-10">
                <motion.img
                    variants={bounceVariants()}
                    initial="hidden"
                    animate="visible"
                    src={BgDiagonal}
                    alt="Background Diagonal Right"
                    className="lg:block hidden -z-10 absolute right-0 top-[30%]"
                />
                <motion.img
                    variants={bounceVariants()}
                    initial="hidden"
                    animate="visible"
                    src={Cube}
                    alt=""
                    className="absolute hidden lg:block top-0 right-0 -z-10"
                />

                <SectionHeading index="02/" heading="ABOUT ME" />

                <div className="lg:px-[10%] space-y-8 mx-auto lg:text-2xl text-xl relative">
                    <h3 className="text-3xl text-primary font-semibold font-technor">
                        Olayinka D. Adeyefa
                    </h3>

                    <p className="flex flex-col gap-8">
                        <span>
                            Over the last & year I have honed my skills on
                            projects ranging from Websites to
                            <br className="lg-br" /> Brand Identity projects to
                            Pitch Decks and more, My Design versatility are not
                            <br className="lg-br" /> the extent of my abilities.
                        </span>
                        <span>
                            I have experience as a Creative director and
                            Project/Product Manager delivery
                            <br className="lg-br" /> over a dozen projects
                            successfully in the last year alone, which means I
                            can
                            <br className="lg-br" /> comfortably Collaborate
                            with Multiple other Marketing and Sales minds as
                            well as
                            <br className="lg-br" />
                            Developers and Engineers to successfully Deliver a
                            Project
                        </span>
                    </p>

                    <div className="lg:text-[2.5rem] text-3xl leading-[1.2]">
                        <p>
                            I can comfortably contribute to projects with my
                            knowledge and provable experience in the following
                            fields
                        </p>
                        <ul className="list-disc pl-12">
                            {skills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </div>

                    <p className="text-primary">
                        My uncanny ability to bring creative thinking and
                        excellent execution to project is what makes me one
                        <br className="lg-br" /> of the best at what I do
                    </p>

                    <motion.img
                        variants={bounceVariants()}
                        initial="hidden"
                        animate="visible"
                        src={BgCurve}
                        alt="Background Curve Left"
                        className="lg:block hidden -z-10 absolute bottom-[-130px] left-0"
                    />
                    <motion.img
                        variants={bounceVariants()}
                        initial="hidden"
                        animate="visible"
                        src={aboutshape}
                        alt="Background Center (mirrored or duplicated)"
                        className="lg:block hidden -z-10 absolute top-10 left-10"
                    />
                </div>
            </div>

            <div className="w-contain space-y-[6rem]">
                <DomainExpertise />

                <Skills />

                <DiscussProject />
            </div>
        </section>
    );
};

export default About;
