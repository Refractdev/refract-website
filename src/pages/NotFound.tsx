import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--color-canvas)",
        flexDirection: "column",
        textAlign: "center",
        padding: 24,
      }}
    >
      <p
        className="text-caption-upper"
        style={{ color: "var(--color-muted)", marginBottom: 16 }}
      >
        404
      </p>
      <h1
        className="text-display-md"
        style={{ color: "var(--color-ink)", marginBottom: 12 }}
      >
        Page not found.
      </h1>
      <p style={{ fontSize: 15, color: "var(--color-body)", marginBottom: 40 }}>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="btn-primary"
        style={{ textDecoration: "none" }}
      >
        Back to home
      </Link>
    </div>
  );
};

export default NotFound;
