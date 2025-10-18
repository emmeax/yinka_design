import BigStar from "@/assets/Image/BigStar.svg";
import Dribble from "@/assets/Image/dribble.svg";
import Hand from "@/assets/Image/Hand.png";
import LinkedIn from "@/assets/Image/linkedin.svg";
import SectionHeading from "./SectionHeading";

const ContactSection = () => {
    return (
        <section className="py-[5rem] space-y-[6rem] relative isolate">
            <div className="w-contain flex flex-col gap-10">
                <SectionHeading index="04/" heading="CONTACT ME" />

                <div className="lg:px-[10%] lg:text-2xl text-2xl font-medium relative flex flex-col gap-6">
                    <h4 className="text-3xl font-technor font-normal">
                        WANT TO DISCUSS A PROJECT?
                    </h4>
                    <p>Feel free to reach me via email at</p>
                    <a
                        href="mailto:xd.olayinka@gmail.com"
                        className="text-primary"
                    >
                        xd.olayinka@gmail.com
                    </a>
                    <p>
                        Or connect with me via phone call at{" "}
                        <a href="tel:+2349099346124" className="text-primary">
                            +234 9099346124
                        </a>
                    </p>
                    <div className="flex items-center gap-2">
                        <a href="">
                            <img src={LinkedIn} alt="" />
                        </a>
                        <a href="">
                            <img src={Dribble} alt="" />
                        </a>
                    </div>
                </div>

                <div className="lg:flex hidden items-center justify-between text-3xl">
                    <span>{`Let's Discuss >`}</span>
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
                            Dribble
                        </a>
                    </div>
                    <span>Digital Design</span>
                </div>
            </div>

            {/* Hand pointing */}
            <img
                src={Hand}
                alt=""
                className="lg:block hidden absolute right-0 top-[10%] w-[486px] -z-10"
            />
            {/* Bottom star */}
            <img
                src={BigStar}
                alt=""
                className="lg:block hidden absolute -bottom-10 lg:left-[55%] -z-10"
            />
        </section>
    );
};

export default ContactSection;
