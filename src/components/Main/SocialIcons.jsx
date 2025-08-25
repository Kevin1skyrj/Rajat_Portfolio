import React from "react";
import "./SocialIcons.css";
import { Typewriter } from "react-simple-typewriter";

const SocialIcons = ({
  showHeader = true,
  showTypingAnimation = true,
  socialLinks = {
    gmail: "",
    whatsapp: "",
    instagram: "https://www.instagram.com/rajatpandey2584/",
    telegram: "",
    linkedin: "https://www.linkedin.com/in/rajatpandey24/",
    github: "https://github.com/Kevin1skyrj",
  },
  enableAOS = true,
  
  contactInfo = "Contact me by: ",
//   iconColor = "#15e2e5", // You can pass a custom color as a prop if you want
}) => {
  const socialData = [
    {
      href: socialLinks.gmail,
      icon: "fa-solid  fa-envelope",
      text: "Gmail",
      name: "gmail",
    },
    {
      href: socialLinks.whatsapp,
      icon: "fab fa-whatsapp",
      text: "Whatsapp",
      name: "whatsapp",
    },
    {
      href: socialLinks.instagram,
      icon: "fab fa-instagram",
      text: "Instagram",
      name: "instagram",
    },
    {
      href: socialLinks.telegram,
      icon: "fab fa-telegram",
      text: "Telegram",
      name: "telegram",
    },
    {
      href: socialLinks.linkedin,
      icon: "fab fa-linkedin-in",
      text: "Linkedin",
      name: "linkedin",
    },
    {
      href: socialLinks.github,
      icon: "fab fa-github-square",
      text: "GitHub",
      name: "github",
    },
  ];

  return (
    <section className="contactos custom-social-section " id="contactos ">
      {showHeader && (
        <>
          
          <h3
            className="titulo text-white"
            data-aos={enableAOS ? "fade-left" : ""}
            data-aos-delay="300"
          >
            {contactInfo}
            {showTypingAnimation && (
              <span className="typewriter-margin">
                <Typewriter
                  words={[
                    "Gmail",
                    "WhatsApp",
                    "Instagram",
                    "Telegram",
                    "Linkedin",
                    "Github",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            )}
          </h3>
        </>
      )}

      <div className="icons custom-icons">
        {socialData.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            data-aos={enableAOS ? "zoom-in" : ""}
          >
            <div className="layer">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              {/* Inline style for icon color */}
              <span
                className={social.icon}
                // style={{ color: iconColor }}
              ></span>
            </div>
            <div className="text">{social.text}</div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default React.memo(SocialIcons);