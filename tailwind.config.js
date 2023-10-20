/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "roboto-regular": "RobotoRegular",
        "roboto-medium": "RobotoMedium",
        "roboto-bold": "RobotoBold",
        popping: "Popping-cute",
        "winter-poppins": "Winter-Poppins",
        plasto: "Plasto",
        brandier: "Brandier",
      },
      colors: {
        dark: "#222",
        darkest: "#151515",
        cyan: "rgb(0, 136, 136)",
      },
      padding: {
        pad: "5rem",
        "pad-md": "2.5rem",
      },
    },
  },
  plugins: [],
};
