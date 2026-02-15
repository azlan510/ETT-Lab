import Lottie from "lottie-react";
// import contactUsAnimation from "../../../public/assets/contactus.json";
import { IoIosSend } from "react-icons/io";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import emailjs from "@emailjs/browser";

function ContactSec() {
  const [isSent, setIsSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  // let emailTemplate ={
  //   from_name: name,
  //   from_email: email,
  //   to_name: "Admin",
  //   message: message
  // }
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_zspmn24", "template_ncqbuww", form.current, {
        publicKey: "mvuhASCdAbNZ2AEF3",
      })
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          setName("");
          setEmail("");
          setMessage("");
          toast.success("Message Sent Successfully", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
          console.log("SUCCESS!", isSent);
        },
        (error) => {
          setName("");
          setEmail("");
          setMessage("");
          toast.error("Message Not Sent", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <div className="container-lg my-contact-container mb-5">
      <div className="my-contact">
        <ToastContainer />
        <Lottie
          // animationData={contactUsAnimation}
          path="../../../assets/contactus.json"
          loop={true}
          autoplay={true}
          style={{ width: "50rem", height: "32rem" }}
          className="text-center "
          id="contact-us-lottie"
        />
        <h2 style={{ color: "#ee82ee", fontWeight: "bold" }}>Get in Touch</h2>
        {/* <div className="my-contant-form-container"> */}
        <div className="my-contact-form row">
          <form ref={form} className="col-lg-6 px-4" onSubmit={sendEmail}>
            <h4 className="fs-3 fw-bold mb-4">Send me a message</h4>

            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Name
              </label>
              <input
                type="text"
                name="user_name"
                className="form-control bg-dark text-white "
                id="exampleFormControlInput1"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput2" className="form-label">
                Email
              </label>
              <input
                type="email"
                name="reply_email"
                className="form-control bg-dark text-white "
                id="exampleFormControlInput2"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Message
              </label>
              <textarea
                className="form-control bg-dark text-white "
                id="exampleFormControlTextarea1"
                rows="3"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message"
              ></textarea>
            </div>
            <div className="mb-3">
              <button
                type="submit"
                className="btn btn-primary my-contact-btn w-100 mt-3"
              >
                <IoIosSend size={23} /> Send
              </button>
            </div>
          </form>
          <div
            className="my-contact-info col-lg-6 px-4"
            style={{ borderLeft: "2px solid #6c757d63" }}
          >
            <h4 className="fs-3 fw-bold mb-4">Contact Information</h4>
            <div className="mb-3">
              <h5>
                <i
                  class="fa-solid fa-envelope"
                  style={{ color: "#ee82ee", fontSize: "1rem" }}
                ></i>{" "}
                Email
              </h5>
              <p style={{ color: "#6c757d", fontWeight: "500" }}>
                <a
                  href="mailto:ankushverma100009@gmail.com"
                  className="text-decoration-none"
                  style={{ color: "#6c757d", fontWeight: "500" }}
                >
                  {" "}
                  ankushverma100009@gmail.com
                </a>
              </p>
            </div>
            <div className="mb-3">
              <h5>
                <i
                  class="fa-solid fa-phone"
                  style={{ color: "#ee82ee", fontSize: "1rem" }}
                ></i>{" "}
                Phone
              </h5>
              <p style={{ color: "#6c757d", fontWeight: "500" }}>7889198136</p>
            </div>
            <div className="mb-3">
              <h5>
                <i
                  class="fa-brands fa-square-linkedin"
                  style={{ color: "#ee82ee", fontSize: "1rem" }}
                ></i>{" "}
                Linkedin
              </h5>
              <p style={{ color: "#6c757d", fontWeight: "500" }}>
                <a
                  href="https://www.linkedin.com/in/ankushverma109/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                  style={{ color: "#6c757d", fontWeight: "500" }}
                >
                  https://www.linkedin.com/in/ankushverma109/
                </a>
              </p>
            </div>
            <div className="mb-3">
              <h5>
                <i
                  class="fa-brands fa-github"
                  style={{ color: "#ee82ee", fontSize: "1rem" }}
                ></i>{" "}
                GitHub
              </h5>
              <p style={{ color: "#6c757d", fontWeight: "500" }}>
                <a
                  href="https://github.com/Ankush-verma-Source"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                  style={{ color: "#6c757d", fontWeight: "500" }}
                >
                  https://github.com/Ankush-verma-Source
                </a>
              </p>
            </div>
            <div className="mb-3">
              <h5>
                <i
                  class="fa-solid fa-location-dot"
                  style={{ color: "#ee82ee", fontSize: "1rem" }}
                ></i>
                Location
              </h5>
              <p style={{ color: "#6c757d", fontWeight: "500" }}>
                Jaipur, Rajasthan, India
              </p>
            </div>
            <p className="text-center pt-4">
              <i>
                Feel free to reach out for collaborations, questions, or just to
                say hi!
              </i>
            </p>
          </div>
        </div>
      </div>
      <div className="my-contact-info bg-danger "></div>
    </div>
    //  </div>
  );
}

export default ContactSec;
