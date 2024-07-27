import React from "react";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <div className="about-content">
        <p className="about-description">
          Welcome to Death Note Realty, your number one source for all things
          real estate. We're dedicated to providing you with the best
          properties, with a focus on dependability, customer service, and a
          touch of Shinigami magic.
        </p>
        <p className="about-description">
          Founded by Light Yagami, who used his god-like vision (and a notebook)
          to shape the perfect real estate empire. When Light first started out,
          his passion for creating a "new world" drove him to start this
          business (with some help from Ryuk).
        </p>
        <p className="about-description">
          We hope you enjoy our properties as much as we enjoy offering them to
          you. If you have any questions or comments, please don't hesitate to
          contact us. Just remember, don't leave your name carelessly... Ryuk
          might take an interest.
        </p>
        <h2 className="about-subtitle">Our Mission</h2>
        <p className="about-description">
          Our mission is to simplify the process of buying, selling, and renting
          properties. We aim to offer a comprehensive and user-friendly platform
          for all your real estate needs. Even L would approve of our meticulous
          attention to detail.
        </p>
        <h2 className="about-subtitle">Our Team</h2>
        <div className="team-section">
          <div className="team-member">
            <img
              src="/L.webp"
              alt="L Lawliet"
              className="team-member-image"
            />
            <h3 className="team-member-name">L Lawliet</h3>
            <p className="team-member-role">Back-End Developer</p>
          </div>
          <div className="team-member">
            <img
              src="/Light.webp"
              alt="Light Yagami"
              className="team-member-image"
            />
            <h3 className="team-member-name">Light Yagami</h3>
            <p className="team-member-role">Front-End Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
