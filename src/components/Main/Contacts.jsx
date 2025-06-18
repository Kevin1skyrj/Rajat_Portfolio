import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import SocialIcons from "./SocialIcons";

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <>
      <section
        id="contacts"
        className=" pt-24 bg-transparent dark:from-[#0a192f] dark:via-[#232946] dark:to-[#1f243c]"
      >
        <div className="container mx-auto px-4 ">
          <div className="text-center mb-16">
            <motion.h2
              className="text-cyan-400 text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Get In Touch
            </motion.h2>
            <div className="w-20 h-1 bg-[#15e2e5] mx-auto mb-6"></div>
            <p className="text-gray-300 font-normal dark:text-gray-400 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? Feel free to reach
              out to me using the contact form below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h3 className=" text-2xl font-normal mb-6 text-white">
                Contact Information
              </h3>
              <p className="text-gray-200 font-normal dark:text-gray-400 mb-8">
                Feel free to reach out to me for any inquiries, project
                discussions, or just to say hello. I'm always open to new
                opportunities and collaborations.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-900/30 rounded-full flex items-center justify-center mr-4">
                    <Mail className="w-5 h-5 text-[#15e2e5]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-normal mb-1 text-white">
                      Email
                    </h4>
                    <a
                      href="mailto:hello@example.com"
                      className="text-gray-300 font-normal dark:text-gray-400 hover:text-[#15e2e5] dark:hover:text-cyan-500 transition-colors"
                    >
                      rajatpndey257@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-900/30 rounded-full flex items-center justify-center mr-4">
                    <Phone className="w-5 h-5 text-[#15e2e5]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-normal mb-1 text-white">
                      Phone
                    </h4>
                    <a
                      href="tel:+1234567890"
                      className="text-gray-300 font-normal dark:text-gray-400 hover:text-[#15e2e5] dark:hover:text-cyan-500 transition-colors"
                    >
                      +91 7518588603
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-900/30 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="w-5 h-5 text-[#15e2e5]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-nomral mb-1 text-white">
                      Location
                    </h4>
                    <p className="text-gray-300 font-normal dark:text-gray-400">
                      Rourkela , Odisha, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-md text-white border border-white/20"
            >
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900 text-green-700 dark:text-green-400 rounded-lg">
                  Your message has been sent successfully! I'll get back to you
                  soon.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-700  bg-gray-900  text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#15e2e5]"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-mediumtext-gray-300 mb-2"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border  border-gray-700 bg-gray-900  text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#15e2e5]"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium  text-gray-300 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border  border-gray-700  bg-gray-900  text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#15e2e5]"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border  border-gray-700  bg-gray-900  text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#15e2e5]resize-none"
                    placeholder="Hello, I'd like to talk about..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium transition-colors duration-300 ${
                    isSubmitting
                      ? "bg-cyan-500 cursor-not-allowed"
                      : "bg-gradient-to-r from-[#0a8ada] to-[#0670d4] hover:from-[#085bcf] hover:to-[#0364a1]"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
        <div>
          <SocialIcons />
        </div>
      </section>
    </>
  );
}
