import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

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
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 ">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Get In Touch</h2>
          <div className="w-20 h-1 bg-[#15e2e5] mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out to me using the contact form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 dark:text-white">Contact Information</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Feel free to reach out to me for any inquiries, project
              discussions, or just to say hello. I'm always open to new
              opportunities and collaborations.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mr-4">
                  <Mail className="w-5 h-5 text-[#15e2e5]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1 dark:text-white">Email</h4>
                  <a
                    href="mailto:hello@example.com"
                    className="text-gray-600 dark:text-gray-400 hover:text-[#15e2e5] dark:hover:text-cyan-500 transition-colors"
                  >
                    hello@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mr-4">
                  <Phone className="w-5 h-5 text-[#15e2e5]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1 dark:text-white">Phone</h4>
                  <a
                    href="tel:+1234567890"
                    className="text-gray-600 dark:text-gray-400 hover:text-[#15e2e5] dark:hover:text-cyan-500 transition-colors"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="w-5 h-5 text-[#15e2e5]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1 dark:text-white">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    New York City, NY, United States
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-10">
              <h4 className="text-lg font-semibold mb-4 dark:text-white">Connect With Me</h4>
              <div className="flex space-x-4">
                {[
                  {
                    name: "github",
                    icon: "M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z",
                  },
                  {
                    name: "linkedin",
                    icon: "M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z",
                  },
                  {
                    name: "twitter",
                    icon: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
                  },
                  {
                    name: "instagram",
                    icon: "M12 2a10 10 0 110 20 10 10 0 010-20zm0 2a8 8 0 100 16 8 8 0 000-16zm0 1.5a6.5 6.5 0 110 13 6.5 6.5 0 010-13zM12 5a7 7 0 100 14 7 7 0 000-14zm0 5a2 2 0 110 4 2 2 0 010-4z",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={`#${social.name}`}
                    className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-[#15e2e5] hover:text-white transition-colors duration-300"
                    aria-label={`Follow me on ${social.name}`}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 dark:text-white">
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
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#15e2e5]"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#15e2e5]"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
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
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#15e2e5]"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
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
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#15e2e5]resize-none"
                  placeholder="Hello, I'd like to talk about..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium transition-colors duration-300 ${
                  isSubmitting
                    ? "bg-cyan-400 cursor-not-allowed"
                    : "bg-[#15e2e5] hover:bg-cyan-500"
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
          </div>
        </div>
      </div>
    </section>
  );
}
