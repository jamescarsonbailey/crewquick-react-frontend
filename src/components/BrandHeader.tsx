import CrewQuickLogo from "../assets/CrewQuickLogo.png";
import { defaultTheme } from "../theme/config";

export default function BrandHeader() {
  return (
    <header className="flex flex-col items-center justify-center py-6">
      <div className="flex flex-col items-center">
        <img
          src={CrewQuickLogo}
          alt="CrewQuick logo"
          className="max-h-[25vh] w-auto object-contain"
          style={{ maxWidth: "375px" }}
        />
        <h1
          className="text-2xl font-bold mt-3"
          style={{
            fontFamily: defaultTheme.typography.taglineFont,
            color: defaultTheme.colors.tagline,
            fontSize: "2.0rem",
            fontWeight: 600,
            letterSpacing: "0.3px",
            marginTop: "0.25rem"
          }}
        >
          Helping teams click.
        </h1>
      </div>
    </header>
  );
}
