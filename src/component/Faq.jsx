import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";
import SectionHeading from "./SectionHeading";

const faqs = [
    {
        question: "Can you walk us through your design process",
        answer: "Gbadebo Adeokoya is a Product designer based in Nigeria focused on creating visuals and good digital experience leveraging on FinTech and Ed-Tech",
    },
    {
        question: "How much do you charge?",
        answer: "Gbadebo Adeokoya is a Product designer based in Nigeria focused on creating visuals and good digital experience leveraging on FinTech and Ed-Tech",
    },
    {
        question: "What is the standard delivery timeline",
        answer: "Gbadebo Adeokoya is a Product designer based in Nigeria focused on creating visuals and good digital experience leveraging on FinTech and Ed-Tech",
    },
    {
        question: "Can you walk us through your design process",
        answer: "Gbadebo Adeokoya is a Product designer based in Nigeria focused on creating visuals and good digital experience leveraging on FinTech and Ed-Tech",
    },
    {
        question: "Can you walk us through your design process",
        answer: "Gbadebo Adeokoya is a Product designer based in Nigeria focused on creating visuals and good digital experience leveraging on FinTech and Ed-Tech",
    },
];

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="rounded-2xl p-5 bg-[linear-gradient(122.27deg,_#310E4C_75.91%,_rgba(142,_24,_234,_0.54)_98.49%)]">
            <div
                className="flex justify-between items-start cursor-pointer"
                onClick={onClick}
            >
                <h3 className="text-xl font-syne font-semibold">{question}</h3>
                <div className="shrink-0 size-[30px] relative flex justify-center items-center rounded-full bg-[#F8F9FF] text-primary">
                    <Minus
                        className={cn("opacity-0 invisible size-[16.25px] absolute transition-all duration-300 ease-in-out", {
                            "opacity-100 visible": isOpen,
                        })}
                    />
                    <Plus
                        className={cn("opacity-0 invisible size-[16.25px] absolute transition-all duration-300 ease-in-out", {
                            "opacity-100 visible": !isOpen,
                        })}
                    />
                </div>
            </div>
            <div
                className={cn(
                    "grid overflow-hidden transition-all duration-300 ease-in-out",
                    isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0",
                )}
            >
                <div className="overflow-hidden">
                    <p className="mt-4">{answer}</p>
                </div>
            </div>
        </div>
    );
};

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const handleClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="w-contain py-[5rem] space-y-[5rem]">
            <SectionHeading index="06/" heading="FAQ's" />

            <div className="space-y-4 lg:px-[10%]">
                {faqs.map((faq, index) => (
                    <AccordionItem
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={openIndex === index}
                        onClick={() => handleClick(index)}
                    />
                ))}
            </div>
        </section>
    );
};

export default Faq;
