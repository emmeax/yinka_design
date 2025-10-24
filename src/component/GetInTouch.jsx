import GetIntouchMobileImg from "@/assets/Image/get-in-touch-mobile.svg";
import GetIntouchImg from "@/assets/Image/get-in-touch.svg";
import SectionHeading from "./SectionHeading";
import LinkedIn from "./icons/linkedin";
import Phone from "./icons/phone";

const GetInTouch = () => {
    return (
        <section
            id="get-in-touch"
            className="w-contain py-[5rem] space-y-[5rem]"
        >
            <SectionHeading index="07/" heading="GET IN TOUCH" />

            <div className="rounded-[40px] lg:bg-[#540D8B] bg-primary flex lg:flex-row flex-col items-center justify-between">
                <div className="flex flex-col lg:gap-9 gap-6 lg:pl-[4rem] pl-4 lg:py-0 py-20 pr-4">
                    <h3 className="lg:text-[4rem] text-[36px] font-bold font-technor text-center lg:text-start">
                        Let's get In
                        <br className="lg:hidden inline" /> Touch
                    </h3>
                    <div className="flex lg:flex-row flex-col lg:items-center lg:gap-2 gap-4 *:w-full *:lg:w-fit">
                        <a
                            href="tel:+2349099346124"
                            className="flex items-center justify-center gap-5 h-12 px-5 text-lg bg-[#F8F9FF] text-[#623187] rounded-2xl font-medium whitespace-nowrap"
                        >
                            Book a discovery call
                            {/* <Phone className="size-4" /> */}
                        </a>
                        <a
                            href=""
                            className="flex items-center justify-center gap-5 h-12 px-5 text-lg border border-white text-[#F8F9FF] rounded-2xl font-medium whitespace-nowrap"
                        >
                            Connect with me <LinkedIn className="size-4" />
                        </a>
                    </div>
                </div>

                <img src={GetIntouchImg} alt="" className="lg:block hidden" />
                <img
                    src={GetIntouchMobileImg}
                    alt=""
                    className="block lg:hidden size-full object-cover"
                />
            </div>
        </section>
    );
};

export default GetInTouch;
