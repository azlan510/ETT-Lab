import { FaCloudDownloadAlt } from "react-icons/fa";

function ResumePage() {
  return (
    <div className="container-lg my-resume-container mb-5">
      <h1
        className="text-center"
        style={{ color: "#EE82EE", fontWeight: "bold" }}
      >
        My Resume
      </h1>
      <p className="text-center" style={{ color: "grey", fontWeight: "bold" }}>
        updating Soon...
      </p>
      <section className="my-resume mb-5">
        <div className="d-flex align-items-center justify-content-center ">
          <img
            src="/assets/updatedResume.png"
            className="img-fluid"
            alt="resume"
            style={{ borderRadius: "10px" }}
          />
        </div>
      </section>
      
      <a href="/assets/updatedResume.pdf" download style={{ textDecoration: "none" }}>
        <button className="btn btn-primary px-4 py-2">
          <FaCloudDownloadAlt size={20} /> Download
        </button>
      </a>
    </div>
  );
}

export default ResumePage;
