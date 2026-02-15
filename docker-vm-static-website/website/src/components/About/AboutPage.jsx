import { useState } from "react";

const skills = [
  {
    title: "Programming Languages",
    colorClass: "text-blue",
    items: ["Java", /*"C", "Python",*/ "HTML", "CSS", "JavaScript", "Node.js"],
  },
  {
    title: "Libraries & Frameworks",
    colorClass: "text-yellow",
    items: ["React.js", "Express.js", "Bootstrap" /* "Web3.js"*/],
  },
  {
    title: "Tools & Platforms",
    colorClass: "text-pink",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      /*"Firebase", "Microsoft Azure", "IntelliJ IDEA",*/ "Hoppscotch",
    ],
  },
  {
    title: "Databases",
    colorClass: "text-purple",
    items: ["MongoDB", "MySQL" /*"PostgreSQL"*/],
  },
  {
    title: "CS Fundamentals",
    colorClass: "text-cyan",
    items: [
      "Data Structures & Algorithms",
      "OOPs",
      "Operating Systems",
      "DBMS",
      "Computer Networking",
    ],
  },
  //   {
  //     title: "Blockchain",
  //     colorClass: "text-indigo",
  //     items: ["Solidity", "Ethereum", "Smart Contracts", "MetaMask", "Remix IDE"],
  //   },
  //   {
  //     title: "AI/ML",
  //     colorClass: "text-fuchsia",
  //     items: ["Azure AI", "Scikit-learn", "OpenAI API", "Hugging Face", "LangChain"],
  //   },
  {
    title: "Web Development",
    colorClass: "text-rose",
    items: ["MERN Stack", "RESTful APIs", "Responsive Design"],
  },
];

function AboutPage() {
  let [activeTab, setActiveTab] = useState(1);

  return (
    <div className="container-lg my-about-container mb-5">
      <div className="my-about-navigation">
        <ul className="list-unstyled text-light">
          <li
            onClick={() => setActiveTab(1)}
            className={activeTab === 1 ? "my-about-active" : ""}
          >
            <a href="#about">About</a>
          </li>
          <li
            onClick={() => setActiveTab(2)}
            className={activeTab === 2 ? "my-about-active" : ""}
          >
            <a href="#skills">Skills</a>
          </li>
        </ul>
      </div>
      <div id="about" className="my-about">
        <div className="text-start my-about-content">
          <h2 className="mb-4" style={{ color: "#EE82EE", fontWeight: "bold" }}>
            About me
          </h2>
          <p>
            Hello, I’m Ankush Verma from Gola Gokarannath, Uttar Pradesh. I’m
            currently pursuing a Bachelor’s degree in Computer Science and
            Engineering at Manipal University Jaipur, Jaipur.
          </p>
          <p>
            {/* I have completed comprehensive training in Data Structures and
            Algorithms using Java, solving over 300 problems to strengthen my
            foundation. Alongside this, <br /> */}
            I have hands-on experience with the MERN stack—MongoDB, Express.js,
            React, and Node.js—for full-stack web development. My skills also
            extend to Firebase services and Bootstrap for UI design. I am
            proficient in implementing authentication strategies using
            Passport.js , JWT and managing session and database operations with
            MongoDB, MySQL.
            <br />
            {/* Additionally, I have explored Web3 and blockchain technologies like
            Solidity and smart contracts. */}
          </p>
          <p className="">
            I’m passionate about building innovative and scalable web
            applications that solve real-world problems. Rather than
            overwhelming myself with information, I focus on deeply
            understanding small details to craft thoughtful and creative
            solutions. Outside of tech, I find joy and balance in spending time
            with nature—it reminds me of the value of patience, loyalty, and
            curiosity.
          </p>
          <div className="my-about-location mt-5">
            <div className="d-flex my-location-1 ">
              <div>
                <h5 style={{ color: "#EE82EE", fontWeight: "bold" }}>
                  Location
                </h5>
                <p>Jaipur, Rajasthan, India</p>
              </div>
              <div>
                <h5 style={{ color: "#EE82EE", fontWeight: "bold" }}>Study</h5>
                <p>Manipal University Jaipur</p>
              </div>
            </div>
            <div className="d-flex my-location-2">
              <div>
                <h5 style={{ color: "#EE82EE", fontWeight: "bold" }}>Email</h5>
                <p>ankushverma100009@gmail.com</p>
              </div>
              <div>
                <h5 style={{ color: "#EE82EE", fontWeight: "bold" }}>Degree</h5>
                <p>Bachelor of Computer Science and Engineering</p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-about-photo ">
          <img
            src="/assets/hero.png"
            className="img-fluid rounded-circle mx-auto d-block"
            alt="Ankush Verma"
            style={{ margin: "0 auto" }}
          />
        </div>
      </div>
      <div id="skills" className="my-about-skills mt-5">
        <h1
          style={{ color: "#EE82EE", fontWeight: "bold", textAlign: "center" }}
        >
          Skills
        </h1>
        <div className="skills-section  py-5">
          <div className="container">
            <div className="row g-4">
              {skills.map((section, index) => (
                <div className="col-12 col-md-6 col-lg-3" key={index}>
                  <div className="skill-card p-3 h-100">
                    <h5 className={`fw-bold mb-3 ${section.colorClass}`}>
                      {section.title}
                    </h5>
                    <ul className="list-unstyled text-light">
                      {section.items.map((item, i) => (
                        <li key={i}> {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
