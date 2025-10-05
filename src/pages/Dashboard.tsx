import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { defaultTheme } from "../theme/config";
import BrandHeader from "../components/BrandHeader";

export default function Dashboard() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div
      className="min-h-screen flex flex-col items-center"
      style={{
        background: `linear-gradient(to bottom, ${defaultTheme.colors.background}, ${defaultTheme.colors.surfaceLight})`,
        fontFamily: defaultTheme.typography.fontFamily,
      }}
    >
      <BrandHeader />

      <div className="w-full flex justify-center px-4 mt-10 sm:mt-12 md:mt-16">
        <div className="w-full max-w-[480px] bg-white/85 backdrop-blur-sm rounded-2xl shadow-md p-8 text-center">
          {user ? (
            <>
              <h2
                className="text-2xl font-semibold mb-2"
                style={{
                  color: defaultTheme.colors.primaryBlue,
                  fontFamily: defaultTheme.typography.logoFont,
                }}
              >
                Welcome, {user.role === "contractor" ? "Contractor" : "Worker"}!
              </h2>
              <p
                className="text-base mb-6"
                style={{ color: defaultTheme.colors.textDark }}
              >
                This is your personalized CrewQuick dashboard.
              </p>
              <button
                onClick={logout}
                className="px-6 py-3 rounded-md text-white font-medium transition"
                style={{
                  backgroundColor: defaultTheme.colors.primaryGreen,
                }}
              >
                Log Out
              </button>
            </>
          ) : (
            <p className="text-gray-600 mt-10">You are not logged in.</p>
          )}
        </div>
      </div>
    </div>
  );
}
