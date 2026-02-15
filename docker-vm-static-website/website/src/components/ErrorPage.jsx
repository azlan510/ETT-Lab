import { useNavigate } from "react-router-dom";
// We'll define this next

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="container-fluid error-page d-flex flex-column justify-content-center align-items-center text-center">
      <h1 className="display-1 fw-bold text-gradient">404</h1>
      <h2 className="mb-3 fw-semibold">Page Not Found</h2>
      <p className="mb-4">Oops! The page you’re looking for doesn’t exist.</p>
      <button onClick={() => navigate("/")} className="btn btn-primary px-4 py-2">
        Go Back Home
      </button>
    </div>
  );
}

export default ErrorPage;
