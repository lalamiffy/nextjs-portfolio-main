"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // Get form data
      const email = e.target.email.value;
      const subject = e.target.subject.value;
      const message = e.target.message.value;

      const data = {
        email,
        subject,
        message,
      };

      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const resData = await response.json();

      if (response.ok) {
        console.log("Message sent successfully");
        setEmailSubmitted(true);
        e.target.reset(); // Clear form
        setTimeout(() => {
          setEmailSubmitted(false);
        }, 5000); // Reset after 5 seconds instead of reloading
      } else {
        setError(resData.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/lalamiffy/">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/jianna-huang-517175251/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <div className="text-center">
            <div className="text-green-500 text-lg font-medium mb-2">
              ✅ Message sent successfully!
            </div>
            <p className="text-gray-400 text-sm">
              Thank you for reaching out. I'll get back to you soon!
            </p>
          </div>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            {error && (
              <div className="mb-4 p-3 bg-red-900/20 border border-red-500 rounded-lg">
                <p className="text-red-400 text-sm">{error}</p>
              </div>
            )}
            
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                disabled={isLoading}
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 disabled:opacity-50 disabled:cursor-not-allowed focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                placeholder="jacob@google.com"
              />
            </div>
            
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                disabled={isLoading}
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 disabled:opacity-50 disabled:cursor-not-allowed focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                placeholder="Just saying hi"
              />
            </div>
            
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                rows="5"
                disabled={isLoading}
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 disabled:opacity-50 disabled:cursor-not-allowed focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors resize-vertical"
                placeholder="Let's talk about..."
              />
            </div>
            
            <button
              type="submit"
              disabled={isLoading}
              className="bg-primary-500 hover:bg-primary-600 disabled:bg-primary-700 disabled:cursor-not-allowed text-white font-medium py-2.5 px-5 rounded-lg w-full transition-colors flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
