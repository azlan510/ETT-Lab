import Lottie from "lottie-react";
// import ComputerAnimation from "../../../public/assets/ProgrammingComputer.json";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
function HomePage() {
  return (
    <div className="container-lg my-home-container mb-5">
      <div className=" d-flex  gap-5  align-items-center justify-content-between my-home ">
        <div className="my-home-content">
          <h1>Hi there,</h1>
          <h1 className="myname"> I'm Ankush Verma</h1>
          <p>
            <Typewriter
              words={[
                "Full Stack Web Developer",
                "Aspiring Software Engineer",
                "MERN Stack Enthusiast",
                "AI Explorer",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              id="typewriter"
            />
          </p>
        </div>
        <div className="my-home-computer">
          <Lottie
            // animationData={ComputerAnimation}
            path="../../../assets/ProgrammingComputer.json"
            loop={true}
            autoplay={true}
            style={{ width: "32rem", height: "40rem", transform: "scale(1.3)" }}
            className="text-end "
            id="computer-lottie"
          />
        </div>
      </div>
      <div className="my-home-connect">
        <h1 className="fw-bold">Find me on </h1>
        <div className="d-flex justify-content-evenly pt-3 ">
          <a
            href="https://www.linkedin.com/in/ankushverma109/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: " rgb(178, 107, 232)", cursor: "pointer" }}
          >
            <FaLinkedinIn
              size={28}
              className="icon"
              style={{ color: " rgb(178, 107, 232)", cursor: "pointer" }}
            />
            {/* linkedin */}
          </a>
          
          <a
            href="https://github.com/Ankush-verma-Source/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: " rgb(178, 107, 232)", cursor: "pointer" }}
          >
            <FaGithub
              size={28}
              className="icon"
              style={{ color: "rgb(178, 107, 232)", cursor: "pointer" }}
            />
            {/* github */}
          </a>

          <a
            href="mailto:ankushverma100009@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: " rgb(178, 107, 232)", cursor: "pointer" }}
          >
            {/* mail */}
            <i
              className="fa-solid fa-envelope"
              style={{ color: "rgb(178, 107, 232)", fontSize: "1.8rem" }}
            ></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
