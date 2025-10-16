import Profilepics from "../assets/Image/Profilepics.png";
import Document from "./icons/document";
import LinkedIn from "./icons/linkedin";

const Home = () => {
    return (
        <section className="w-contain relative py-20 text-white mb-9 flex lg:flex-row flex-col lg:items-start justify-center gap-[3.75rem]">
            <div className="lg:w-[55%] space-y-4 font-medium">
                <h2 className="lg:text-8xl text-5xl inline-flex flex-col gap-2 leading-[60px]">
                    <span className="lg:inline hidden">
                        CREATIVE DIRECTOR & DESIGNER
                    </span>
                    <span className="inline lg:hidden">DIGITAL DESIGNER</span>
                    <span className="lg:text-5xl text-3xl">
                        with 7+ years of experience
                    </span>
                </h2>
                <p className="lg:text-2xl text-xl inline-flex flex-col gap-4">
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
                </p>
            </div>

            <div className="flex flex-col gap-6">
                <img
                    src={Profilepics}
                    alt=""
                    className="size-full object-cover"
                />
                <div className="flex items-center gap-2 *:w-full">
                    <a
                        href=""
                        className="flex items-center gap-2 h-12 px-2.5 bg-primary rounded-2xl font-medium"
                    >
                        Download CV <Document className="size-4" />
                    </a>
                    <a
                        href=""
                        className="flex items-center gap-2 h-12 px-2.5 border border-primary rounded-2xl font-medium"
                    >
                        Let's connect <LinkedIn className="size-4" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Home;
