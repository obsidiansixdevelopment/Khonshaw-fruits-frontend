"use client"

import React, { useState } from 'react';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How Is Organic Farming Different From Conventional Farming?",
      answer:
        "Organic farming avoids synthetic pesticides, fertilizers, and genetically modified organisms, focusing on natural processes to maintain soil health and biodiversity.",
    },
    {
      question: "Are Organic Fruits Healthier Than Conventional Ones?",
      answer:
        "Organic fruits often have higher levels of certain nutrients and fewer pesticide residues, making them a healthier choice for consumers.",
    },
    {
      question: "Why Do Organic Fruits Cost More?",
      answer:
        "Organic fruits are more expensive due to labor-intensive farming practices, smaller yields, and the cost of organic certification.",
    },
    {
      question: "What Are The Environmental Benefits Of Organic Farming?",
      answer:
        "Organic farming helps preserve soil health, reduces water pollution, and promotes biodiversity, making it more sustainable for the environment.",
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-7xl mx-auto my-10 md:px-0 px-4">
      <div className="mt-2 space-y-2">
        {faqs.map((faq, index) => (
          <div key={index} className={`border border-gray-300 ${activeIndex === index ? "border-secondary-main" : "text-secondary-main" } `}>
            <div
              className={`bg-gray-100 p-4 flex justify-between items-center cursor-pointer ${activeIndex === index ? "bg-secondary-main text-white" : "text-secondary-main" } `}
              onClick={() => toggleAnswer(index)}
            >
              <span className="font-semibold">{faq.question}</span>
              <i
                className={`fas ${
                  activeIndex === index ? "fa-chevron-up" : "fa-chevron-down"
                } `}
              />
            </div>
            {activeIndex === index && (
              <div className="p-4 bg-white text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
