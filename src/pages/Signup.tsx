import { useState } from "react";
import api from "../api/axios";
import { defaultTheme } from "../theme/config";
import BrandHeader from "../components/BrandHeader";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("worker");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const res = await api.post("/signup", { email, password, role });
      if (res.status === 201) {
        setSuccess("Signup successful! You can now log in.");
      } else {
        setError("Signup failed. Please try again.");
      }
    } catch (err: any) {
      setError(err.response?.data?.msg || "Signup failed. Please try again.");
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

      <div className="flex-grow flex items-start justify-center pt-1 sm:pt-1 px-4">
        <div className="w-full max-w-[420px] cq-card">
          <h2
            className="text-2xl font-semibold text-center mb-6"
            style={{
              color: defaultTheme.colors.primaryBlue,
              fontFamily: defaultTheme.typography.headingFont,
            }}
          >
            Create Account
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

            {/* Role */}
            <div>
              <label htmlFor="role" className="cq-label">
                Role
              </label>
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="cq-select"
              >
                <option value="worker">Worker</option>
                <option value="contractor">Contractor</option>
              </select>
            </div>

            {error && (
              <p className="text-red-500 text-sm text-center mt-2">{error}</p>
            )}
            {success && (
              <p className="text-green-600 text-sm text-center mt-2">
                {success}
              </p>
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
              {loading ? "Signing up..." : "Sign Up"}
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{" "}
            <a
              href="/login"
              className="font-medium hover:underline"
              style={{ color: defaultTheme.colors.primaryBlue }}
            >
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
