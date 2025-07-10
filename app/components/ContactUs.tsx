"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface ContactUsProps {
  projectName?: string;
}

const ContactUs = ({ projectName }: ContactUsProps) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    acceptedTerms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      if (!formData.acceptedTerms) {
        setError("Please accept the terms and conditions");
        return;
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          projectName: projectName,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      router.push("/success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to submit form");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <section id="contact" className="py-12 sm:py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Contact us
          </h2>

          {projectName && (
            <div className="mb-6 p-4 bg-blue-100 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Enquiry for:</strong> {projectName}
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base text-gray-900 bg-white"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base text-gray-900 bg-white"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base text-gray-900 bg-white"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="flex items-start">
              <input
                id="acceptedTerms"
                name="acceptedTerms"
                type="checkbox"
                checked={formData.acceptedTerms}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
              />
              <label
                htmlFor="acceptedTerms"
                className="ml-2 block text-sm text-gray-700 leading-relaxed"
              >
                I accept the{" "}
                <Link
                  href="#"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Terms and Conditions
                </Link>
              </label>
            </div>

            {error && <p className="text-red-600 text-sm">{error}</p>}

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition duration-300 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
