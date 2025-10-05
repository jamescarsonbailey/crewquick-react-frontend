export const defaultTheme = {
  colors: {
    primaryBlue: "#2F80ED",
    primaryGreen: "#27AE60",
    background: "#F2F4F8",
    surfaceLight: "#D6EFFF",
    surfaceMint: "#B8EFCF",
    surfaceDark: "#1A2A40",
    accentYellow: "#FFEB99",
    textPrimary: "#1A2A40",
    textSecondary: "#4B5563",
    tagline: "#27AE60", // optional tagline accent
  },

  typography: {
    headingFont: "'Poppins', sans-serif",
    bodyFont: "'Inter', sans-serif",
    buttonFont: "'Poppins', sans-serif",
    fontFamily: "'Inter', sans-serif",
    taglineFont: "'Caveat', cursive", 
  },

  layout: {
    maxFormWidth: "420px",
  },
};



/**
 * Future white-labelling example:
 * export const altTheme: ThemeConfig = {
 *   ...defaultTheme,
 *   name: "Alt Partner Theme",
 *   colors: { ...defaultTheme.colors, primaryBlue: "#0033A0" },
 *   logo: "/src/assets/AltLogo.png",
 * };
 */
