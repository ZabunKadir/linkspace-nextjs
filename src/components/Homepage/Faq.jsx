import React from "react";
import CustomFaq from "../Common/Faq";

const FaqHomePage = () => {
  const faqItems = [
    {
      question: "What is LinkSpace?",
      answer:
        "LinkSpace is a platform that connects job seekers with companies through modern, efficient, and secure job listings.",
    },
    {
      question: "How can I register?",
      answer:
        "Click the 'Sign Up' button on the homepage to quickly create your account and start exploring opportunities.",
    },
    {
      question: "Who is LinkSpace for?",
      answer:
        "LinkSpace is ideal for job seekers, HR teams, recruiters, freelancers, and anyone looking to hire or get hired globally.",
    },
    {
      question: "Is there a subscription fee?",
      answer:
        "LinkSpace offers a free membership with optional premium features for employers and recruiters.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes, all user data is protected under GDPR-compliant standards and stored with advanced encryption.",
    },
    {
      question: "How do I contact support?",
      answer:
        "You can reach our support team via the Contact page or through the live chat on the platform.",
    },
    {
      question: "How can I grow my job visibility?",
      answer:
        "By using LinkSpace's featured listings, smart filtering, and performance analytics, you can reach the right candidates faster.",
    },
  ];

  return (
    <div>
      <CustomFaq items={faqItems} />
    </div>
  );
};

export default FaqHomePage;
