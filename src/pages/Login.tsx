import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError(error.message);
      toast.error(error.message);
      setLoading(false);
    } else {
      toast.success("Welcome back!");
      navigate("/dashboard");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    backgroundColor: "var(--color-surface-card)",
    color: "var(--color-ink)",
    border: "1px solid var(--color-hairline-strong)",
    borderRadius: 8,
    padding: "12px 16px",
    height: 44,
    fontSize: 15,
    outline: "none",
    transition: "border-color 0.15s ease",
    fontFamily: "inherit",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: 13,
    fontWeight: 600,
    color: "var(--color-ink)",
    marginBottom: 6,
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--color-canvas)", display: "flex", flexDirection: "column", padding: 24 }}>
      <header>
        <Link
          to="/"
          style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14, color: "var(--color-muted)", textDecoration: "none", transition: "color 0.15s ease" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-ink)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-muted)")}
        >
          <ArrowLeft style={{ width: 16, height: 16 }} />
          Back to Refract
        </Link>
      </header>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: "100%", maxWidth: 400, display: "flex", flexDirection: "column", gap: 32 }}>
          <div style={{ textAlign: "center" }}>
            <h1 style={{ fontSize: 30, fontWeight: 400, color: "var(--color-ink)", letterSpacing: "-0.02em", margin: 0 }}>
              Welcome back.
            </h1>
          </div>

          <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div>
              <label htmlFor="email" style={labelStyle}>Email</label>
              <input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={inputStyle}
                onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-ink)")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "var(--color-hairline-strong)")}
              />
            </div>
            <div>
              <label htmlFor="password" style={labelStyle}>Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={inputStyle}
                onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-ink)")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "var(--color-hairline-strong)")}
              />
            </div>

            {error && (
              <p style={{ fontSize: 14, color: "var(--color-error)", textAlign: "center" }}>{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn-primary"
              style={{ width: "100%", justifyContent: "center", height: 44, opacity: loading ? 0.65 : 1 }}
            >
              {loading ? "Signing in…" : "Sign in"}
            </button>
          </form>

          <p style={{ textAlign: "center", fontSize: 14, color: "var(--color-muted)" }}>
            Don't have an account?{" "}
            <Link to="/signup" style={{ color: "var(--color-ink)", fontWeight: 500, textDecoration: "underline", textUnderlineOffset: 3 }}>
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
