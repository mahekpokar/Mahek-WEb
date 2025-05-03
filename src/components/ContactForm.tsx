"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const form = event.target as HTMLFormElement;
      const formData = new FormData(form);
      const payload = {
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Network response was not ok");

      setIsSuccess(true);
      form.reset();
    } catch (error) {
      console.error("Submission error:", error);
      // Optionally display an error message to the user
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setIsSuccess(false), 3000);
    }
  };

  return (
    <div className="flex justify-center">
      <motion.div
        className="w-full max-w-2xl origin-top scale-[0.3]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <motion.div
          className="section-title mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h2 className="text-white text-6xl md:text-7xl font-bold">LET'S WORK</h2>
          <h2 className="text-gray-500 text-6xl md:text-7xl font-bold uppercase">TOGETHER</h2>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <label className="text-sm mb-2 block text-gray-300">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="bg-sawad-gray-dark text-white rounded-md px-4 py-3 focus:outline-none w-full"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <label className="text-sm mb-2 block text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="bg-sawad-gray-dark text-white rounded-md px-4 py-3 focus:outline-none w-full"
                required
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <label className="text-sm mb-2 block text-gray-300">Message</label>
            <textarea
              name="message"
              placeholder="Message"
              className="bg-sawad-gray-dark text-white rounded-md px-4 py-3 focus:outline-none min-h-[140px] w-full"
              required
            />
          </motion.div>

          <motion.button
            type="submit"
            className="w-full bg-sawad-orange hover:bg-sawad-orange/90 text-white font-medium py-3 rounded-md"
            disabled={isSubmitting}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitting ? "Submitting..." : isSuccess ? "Submitted!" : "Submit"}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
