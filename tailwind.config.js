import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",

    "./node_modules/tw-elements-react/dist/js/**/*.js",
  ],

  theme: {
    extend: {
      bgcolor: "#0a192f",
    },
  },
  darkMode: "class",
  plugins: [require("tw-elements-react/dist/plugin.cjs")],
});
