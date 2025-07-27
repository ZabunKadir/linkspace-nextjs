"use client";
import React from "react";

const PrivacyAndTermsPage = () => {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-8 border-b pb-2 border-gray-300 dark:border-gray-600">
        Privacy Policy & Terms of Service
      </h1>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
        <p className="text-base leading-relaxed">
          Welcome to <span className="font-medium text-indigo-600">LinkSpace</span>. This Privacy Policy and Terms of Service explain how we handle your data and the rules for using our platform. By accessing or using LinkSpace, you agree to these policies.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">2. What Data We Collect</h2>
        <ul className="list-disc pl-5 space-y-1 text-base">
          <li>Your name, email, and contact information</li>
          <li>Job listings and application history</li>
          <li>Usage data (pages visited, actions taken)</li>
        </ul>
        <p className="mt-2">
          We only collect what’s necessary to improve our services.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">3. How We Use Your Data</h2>
        <ul className="list-disc pl-5 space-y-1 text-base">
          <li>Managing your account and job postings</li>
          <li>Sending notifications related to your activity</li>
          <li>Improving platform performance and user experience</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">4. Security</h2>
        <p className="text-base">
          We implement industry-standard measures to protect your data. However, no system is completely immune, so we encourage strong personal security practices.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">5. Your Responsibilities</h2>
        <p className="text-base">
          You are responsible for keeping your credentials secure and for the data you provide. Misuse of the platform may result in account suspension.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-3">6. Contact</h2>
        <p className="text-base">
          If you have any questions, feel free to contact us at{" "}
          <a href="mailto:support@linkspace.com" className="text-blue-600 underline">
            support@linkspace.com
          </a>.
        </p>
      </section>

    </main>
  );
};

export default PrivacyAndTermsPage;
