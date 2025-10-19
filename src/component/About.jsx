import React from "react";
import aboutshape from "../assets/Image/aboutshape.png";
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
                <img
                    src={BgDiagonal}
                    alt="Background Diagonal Right"
                    className="lg:block hidden -z-10 absolute right-0 top-[30%]"
                />

                <SectionHeading index="02/" heading="ABOUT ME" />

                <div className="lg:px-[10%] space-y-10 mx-auto lg:text-2xl text-xl relative">
                    <h3 className="text-3xl font-semibold font-technor">
                        Olayinka D. Adeyefa
                    </h3>

                    <p>
                        Asides having worked on various projects ranging from
                        Websites to Brand Identity
                        <br className="lg-br" /> projects to Pitch Decks and
                        more, My Design versatility are not the extent of my
                        <br className="lg-br" /> abilities.
                        <br /> I have experience as a Creative director and
                        Project/Product Manager delivery
                        <br className="lg-br" /> over a dozen projects
                        successfully in the last year alone, which means I can
                        <br className="lg-br" />
                        comfortably work with Multiple other Developers and
                        other members of a Project
                        <br className="lg-br" /> Delivery team/Sprint,
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

                    <p>
                        My uncanny ability to bring creative thinking and
                        excellent execution to project
                        <br className="lg-br" /> might just be available for
                        your project (NO GUARANTEE's though).
                    </p>

                    <img
                        src={BgCurve}
                        alt="Background Curve Left"
                        className="lg:block hidden -z-10 absolute bottom-[-130px] left-0"
                    />
                    <img
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
