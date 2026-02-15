import { Link } from "react-router-dom";
import { FaLinkedinIn, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className=" bg-transparent my-footer mt-5 pb-3">
      <footer className="container-fluid px-3">
        <div className=" my-footer-content">
          <Link
            to="/"
            style={{ textDecoration: "none" }}
            className="cursor-pointer"
          >
            <span className="tag-wrapper  fs-5">
              <span className="tag">&lt;</span>
              <span className="name">Ankush</span>
              <span className="slash"> / </span>
              <span className="surname">Verma</span>
              <span className="tag">&gt;</span>
            </span>
          </Link>
          <p className="m-0 py-4 text-center">
            &copy; 2025 Ankush Verma. All rights reserved.
          </p>
          <div className="social-icons ">
            <span>Connect with me</span>
            <div className=" d-flex gap-3 text-white text-2xl mt-1 justify-content-center">
              <a
                href="https://www.linkedin.com/in/ankushverma109/"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-white"
              >
                <FaLinkedinIn size={24} className=" icon" />
              </a>
              <a
                href=" https://github.com/Ankush-verma-Source"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-white"
              >
                <FaGithub size={24} className="icon" />
              </a>
              {/* <a
                href="https://www.instagram.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-white"
                
              >
                <FaInstagram size={24} className="icon" />
              </a>
              <a
                href="https://twitter.com/your-handle"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-white"
              >
                <FaTwitter size={24} className="icon" />
              </a> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
