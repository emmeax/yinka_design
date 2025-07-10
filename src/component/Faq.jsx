import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";

const faqs = [
  {
    question: "Can you walk us through your design process",
    answer:
      "Gbadebo Adeokoya is a Product designer based in Nigeria focused on creating visuals and good digital experience leveraging on FinTech and Ed-Tech",
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

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0); // Open first item by default

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className=" bg-black text-white  ">
      <h2 className="text-2xl md:text-5xl font-technor font-medium mb-10 mr-10 text-left">
        <span className="text-purple-500">06/</span> FAQ’s
      </h2>

      <div className="space-y-6 md:px-20 ">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`rounded-xl px-6 py-4 transition-all duration-300 ${
              openIndex === index
                ? "bg-gradient-to-r from-purple-800 to-purple-600"
                : "bg-gradient-to-r from-purple-900 to-purple-700"
            }`}
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggle(index)}
            >
              <h3 className="text-lg font-syne font-semibold text-left md:text-xl font-semibold">
                {faq.question}
              </h3>
             {openIndex === index ? (
  <Minus className="w-6 h-6 rounded-full bg-white text-[#A22CFF] p-1 border border-white" />
) : (
  <Plus className="w-6 h-6 rounded-full bg-white text-[#A22CFF] p-1 border border-white" />
)}
            </div>

            {openIndex === index && faq.answer && (
              <p className="mt-4  text-sm font-neue font-regular text-white leading-relaxed text-left">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
