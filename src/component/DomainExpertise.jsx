import database from "../assets/Image/database.png";
import { cn } from "../lib/utils";

const expertiseData = [
    {
        title: "Autonomous Systems",
        description:
            "Experience with autonomous driving or robotics systems is highly valued for roles in the automotive and transportation sectors.",
    },
    {
        title: "Generative AI",
        description:
            "Deep understanding of large language models and generative AI applications is increasingly required across multiple industries.",
    },
    {
        title: "Manufacturing & Electronics",
        description:
            "Knowledge of manufacturing processes and electronics is valuable for AI product roles in industrial settings.",
    },
    {
        title: "E-commerce & Retail",
        description:
            "Understanding of online retail platforms and consumer behavior is important for AI product roles in e-commerce.",
    },
    {
        title: "Healthcare & Life Sciences",
        description:
            "Knowledge of healthcare regulations and clinical workflows is crucial for AI products in medical applications.",
    },
    {
        title: "Financial Services",
        description:
            "Understanding of financial regulations and banking systems is important for AI products in fintech and financial services.",
    },
];

const DomainExpertise = () => {
    return (
        <div>
            <h2 className="text-2xl lg:text-3xl font-technor font-medium mb-4 text-left flex items-center gap-2">
                <img
                    src={database}
                    alt="Database Icon"
                    className="h-[30px] w-[30px]"
                />
                <span>Domain Expertise</span>
            </h2>
            <p className="mb-12 text-2xl text-left">
                Beyond general Design skills, domain-specific expertise is vital
                here are Industries I have been very familiar:
            </p>

            <div className="grid lg:grid-cols-3 text-left gap-5">
                {expertiseData.map((item, index) => (
                    <div
                        key={index}
                        className={cn(
                            "group relative rounded-[10px] px-10 py-6 overflow-hidden transition-all duration-300",
                        )}
                    >
                        {/* Default Gradient Layer */}
                        <div className="absolute inset-0 bg-[linear-gradient(0deg,#232429,#232429)] transition-opacity duration-300 opacity-100 group-hover:opacity-0" />
                        {/* Hover Gradient Layer */}
                        <div className="absolute inset-0 bg-[linear-gradient(283.85deg,#000000_12.21%,#24043D_50.43%,#260045_86.29%)] transition-opacity duration-300 opacity-0 group-hover:opacity-100" />

                        <div className="relative z-10">
                            <h3 className="text-primary text-[1.5625rem] font-medium font-technor mb-4">
                                {item.title}
                            </h3>
                            <p className="text-lg">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DomainExpertise;
