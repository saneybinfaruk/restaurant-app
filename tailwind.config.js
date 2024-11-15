/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        robotoBold: ["Roboto-Bold"],
        robotoRegular: ["Roboto-Regular"],
        poppinsRegular: ["Poppins-Regular"],
        poppinsSemiBold: ["Poppins-SemiBold"],
        ralewayMedium: ["Raleway-Medium"],
        BebasNeueRegular: ["BebasNeue-Regular"],
        OpenSansSemiBold: ["OpenSans-SemiBold"],
        OpenSansBold: ["OpenSans-Bold"],
        InterRegular: ["Inter-Regular"],
        InterMedium: ["Inter-Medium"],
        CotorisBold: ["CotorisBold"],
      },
    },
  },
  plugins: [],
};
