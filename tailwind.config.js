module.exports = {
   content: [
      './src/**/*.{js,jsx,ts,tsx}',
   ],
   theme: {
      extend: {
         fontFamily: {
            F1: ["F1"]
         },
         colors: {
            gris: {
               light: "#CECECE",
               DEFAULT: "#353535",
               medium: "#B7B7B7",
               darkLight: "#6A6A6A",
               dark: "#000000",
            },
            jaune: {
               DEFAULT: "#F9DA1B",
               dark: "#EAB308",
            },
            rouge: {
               light: "#EF4444",
               DEFAULT: "#a62319",
               dark: "#8a271e",
            },
            bleu: {
               light: "#44CFFC",
               DEFAULT: "#3B82F6",
               dark: "#05509E",
            },
            vert: {
               DEFAULT: "#22C55E",
            }
         }
      },
   },
   plugins: [],
};



// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//     "./index.html",
//     "./node_modules/tailwind-datepicker-react/dist/**/*.js",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         // Starjedi: ["Starjedi"],
//         // Varino: ["Varino"],
//         // HanSolo: ["HanSolo"],
//         // Typewriter: ["Typewriter"],
//         // Ananda: ["Ananda"]
//       },
//       opacity: {
//         // 85: ".85",
//       },
//       letterSpacing: {
//         wide: ".025em",
//         wider: ".05em",
//         widest: ".10em",
//       },
//       // backgroundImage: {
//       //   'star-sky': "url('/src/app/assets/images/general/001.jpg')",
//       //   'auth': "url('./src/app/assets/images/general/011.jpg')",
//       //   'validate-email': "url('./src/app/assets/images/general/002.jpg')",
//       // },
//       colors: {
//         // primary: {
//         //   light: "#f4d3cd",
//         //   DEFAULT: "#e2a99f",
//         //   dark: "#e48d7e",
//         // },

//         // secondary: {
//         //   light: "#d6d6d6",
//         //   DEFAULT: "#aaaaaa",
//         //   dark: "#777777",
//         // },

//         // terciary: {
//         //   light: "#cbffe6",
//         //   DEFAULT: "#8fecbf",
//         //   dark: "#7ac7a2",
//         // },

//         // quaternary: {
//         //   light: "#fcfcc0",
//         //   DEFAULT: "#f6f591",
//         //   dark: "#d3d25f",
//         // },

//         // black: {
//         //   light: "#262626",
//         //   DEFAULT: "#11031D",
//         //   dark: "#000000",
//         // },

//         // purple: {
//         //   light: "#E9D5FF",
//         //   DEFAULT: "#C194DA",
//         //   dark: "#6B21A8",
//         // },

//         // orange: {
//         //   DEFAULT: "#F4AE09"
//         // }
//       },
//     },
//   },
//   plugins: [require("@tailwindcss/forms")],
// };