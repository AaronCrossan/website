import SkillCard from "../ui/skillcard/SkillCard";
import SocialButton from "../ui/socialbutton/SocialButton";
import smoothScroll from "../misc/smoothScroll";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();

  const [title, setTitle] = useState(0);
  const titles = [
    "Website Developer",
    "Software Developer",
    "Graphics Designer",
  ];

  useEffect(() => {
    setTimeout(() => {
      if (title < titles.length - 1) {
        setTitle((t) => t + 1);
      } else {
        setTitle(0);
      }
    }, 3000);
  }, [title]);

  function handleLearnClick(e) {
    e.preventDefault();

    smoothScroll(".cards");
  }

  function handleContactClick(e) {
    e.preventDefault();

    navigate("/contact");
  }

  return (
    <>
      <section className="landing--section">
        <h1 id="highlight">{titles[title]}</h1>
        <p id="introText">
          Hello, thanks for visiting my website. I'm a 17 year old developer
          based in Scotland with a passion for creating visually stunning
          websites.
        </p>
        <div className="cta-buttons">
          <button id="cta-primary" onClick={handleLearnClick}>
            Learn more
          </button>
          <button id="cta-secondary" onClick={handleContactClick}>
            Contact me
          </button>
        </div>
      </section>
      <section className="aboutme--section">
        <h3>
          About Me <span style={{ color: "#fc2d5a" }}>|</span> Web Related
        </h3>

        <p>
          Hi, thanks again for visiting. As mentioned previously im a 17 year
          old developer with a passion for creating visually stunning websites.
          I've been interested in programming for 9 years now and have been
          hooked ever since creating my first program. In my time in this field
          I have learnt a lot of technologies, which some of, I am using for
          this website. Here are some, but not all of my Web Skills (you can
          hover or press on them to see more info):
        </p>

        <div className="cards">
          <SkillCard
            name="React"
            description="A vital part of my tech stack and used in most of my websites including this one."
            color="#61DBFC"
            icon="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png"
          />
          <SkillCard
            name="AWS"
            description="Used in the deployment of this website."
            color="#F89C2A"
            icon="https://cdn.iconscout.com/icon/free/png-256/free-aws-logo-icon-download-in-svg-png-gif-file-formats--cloud-computing-network-server-database-brand-pack-logos-icons-1583149.png?f=webp&w=256"
          />
          <SkillCard
            name="HTML5"
            description="I try to my best to keep my websites to HTML5 standards."
            color="#E44D26"
            icon="https://www.svgrepo.com/show/452228/html-5.svg"
          />
        </div>
      </section>

      <section className="aboutme-software--section">
        <h3>
          About Me <span style={{ color: "#fc2d5a" }}>|</span> Software Related
        </h3>

        <p>
          For software development, I have learnt a lot of important
          technologies such as:
        </p>
        <div className="cards">
          <SkillCard
            name="C++"
            description="Very important for software solutions that require performance"
            color="#00599E"
            icon="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png"
          />

          <SkillCard
            name="Python"
            description="A well known and powerful tool that has versatile use cases."
            color="#F2BB30"
            icon="https://cdn.iconscout.com/icon/free/png-256/free-python-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-5-pack-logos-icons-3030224.png?f=webp"
          />
        </div>
      </section>
      {/* 
      <section className="aboutme-graphics--section">
        <h3>
          About Me <span style={{ color: "#fc2d5a" }}>|</span> Graphics Related
        </h3>

        <div className="cards">
          <SkillCard
            name="Affinity Photo 2"
            description="used for photo editing."
            color="#F497FF"
            icon="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Affinity_Photo_V2_icon.svg/2048px-Affinity_Photo_V2_icon.svg.png"
          />
          <SkillCard
            name="Affinity Designer 2"
            description="used for graphic design."
            color="#57D2FB"
            icon="https://cdn.jim-nielsen.com/macos/512/affinity-designer-2-2023-02-14.png?rf=1024"
          />
        </div>
      </section> */}

      <section className="socials--section">
        <h3>How to get in contact with me</h3>
        <p>
          You can get in contact with me through my{" "}
          <Link to="/contact" style={{ color: "#fc2d5a" }}>
            Contact Page
          </Link>{" "}
          or through my socials below.
        </p>
        <div className="socials">
          <SocialButton
            name="instagram"
            href="https://www.instagram.com/aaron.crossan/"
            iconUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
          />
          <SocialButton
            name="discord"
            href="#"
            iconUrl="https://static-00.iconduck.com/assets.00/discord-icon-2048x2048-nnt62s2u.png"
          />
          <SocialButton
            name="facebook"
            href="https://facebook.com/aaron.crossan"
            iconUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/2048px-2023_Facebook_icon.svg.png"
          />

          <SocialButton
            name="linkedin"
            href="https://linkedin.com"
            iconUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1024px-LinkedIn_icon.svg.png"
          />
        </div>
      </section>
    </>
  );
}

export default Homepage;
