import React, { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "How do I offer my services to neighbors?",
    answer: "Go to the Community Feed and click 'Create Post'. Select 'Offer' as your post intent, fill in your details, and submit. Your neighbors in your local area will be able to see and respond to your offer.",
  },
  {
    id: 2,
    question: "Is there a cost to use The Commons?",
    answer: "The Commons is completely free to use for all community members. Our platform is built on mutual aid principles — neighbors helping neighbors without financial transactions.",
  },
  {
    id: 3,
    question: "How are community members verified?",
    answer: "Members go through a simple verification process that includes email confirmation and optional ID verification. Verified members display a 'Verified Neighbor' badge on their profile.",
  },
  {
    id: 4,
    question: "What do I do if I feel unsafe?",
    answer: "Your safety is our top priority. Use the 'Report' button on any post or profile, or contact our support team at support@thecommons.org immediately. For emergencies, always contact local emergency services first.",
  },
];

const FAQItem = ({ faq }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#dde8e3] last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left bg-transparent border-none cursor-pointer gap-4"
      >
        <span className="font-jakarta text-[15px] font-semibold text-[#111918]">
          {faq.question}
        </span>
        <svg
          className={`w-5 h-5 text-[#6b7f78] flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {open && (
        <p className="text-[14px] text-[#6b7f78] leading-relaxed pb-5 max-w-[560px]">
          {faq.answer}
        </p>
      )}
    </div>
  );
};

const HelpFAQ = () => {
  return (
    <section className="px-5 sm:px-10 lg:px-16 py-14 bg-[#eef3f1]">

      {/* Header row */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-jakarta text-[26px] sm:text-[30px] font-extrabold text-[#111918] tracking-[-0.5px]">
          Frequently Asked Questions
        </h2>
        <button className="text-[13.5px] font-semibold text-[#1c5c47] bg-transparent border-none cursor-pointer hover:underline flex items-center gap-1 whitespace-nowrap">
          View all FAQ
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </button>
      </div>

      {/* 2-column FAQ grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-white rounded-2xl border border-[#dde8e3] divide-y md:divide-y-0 md:divide-x divide-[#dde8e3] overflow-hidden">
        <div className="px-6">
          {faqs.slice(0, 2).map((faq) => (
            <FAQItem key={faq.id} faq={faq} />
          ))}
        </div>
        <div className="px-6">
          {faqs.slice(2).map((faq) => (
            <FAQItem key={faq.id} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HelpFAQ;