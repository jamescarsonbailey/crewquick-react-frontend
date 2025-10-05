import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import api from "../api/axios";
import { defaultTheme } from "../theme/config";
import BrandHeader from "../components/BrandHeader";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await api.post("/login", { email, password });
      const token = res.data?.token;
      const role = res.data?.user?.role;

      if (token && role) {
        login(token, role);
        window.location.href = "/dashboard";
      } else {
        setError("Invalid response from server.");
      }
    } catch (err: any) {
      setError(err.response?.data?.msg || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: `linear-gradient(to bottom, ${defaultTheme.colors.background}, ${defaultTheme.colors.surfaceLight})`,
        fontFamily: defaultTheme.typography.fontFamily,
      }}
    >
      <BrandHeader />

      {/* Centered container */}
      <div className="flex-grow flex items-start justify-center pt-1 sm:pt-1 px-4">
        {/* Form Card */}
        <div className="w-full max-w-[420px] cq-card">
          <h2
            className="text-2xl font-semibold text-center mb-6"
            style={{
              color: defaultTheme.colors.primaryBlue,
              fontFamily: defaultTheme.typography.headingFont,
            }}
          >
            Sign In
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label htmlFor="email" className="cq-label">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="cq-input"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="cq-label">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="cq-input"
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm text-center mt-2">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 font-semibold text-blue-50 transition-all duration-300 ease-out rounded-xl
                        bg-[rgba(47,128,237,0.92)] hover:bg-[rgba(47,128,237,0.98)]
                        focus:outline-none focus:ring-2 focus:ring-blue-200 disabled:opacity-70"
              style={{
                border: "none",
                outline: "none",
                fontFamily: defaultTheme.typography.buttonFont,
              }}
            >
              {loading ? "Logging in..." : "Log In"}
            </button>

          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            Don’t have an account?{" "}
            <a
              href="/signup"
              className="font-medium hover:underline"
              style={{ color: defaultTheme.colors.primaryGreen }}
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
