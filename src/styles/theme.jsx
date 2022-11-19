export const size = {
  largest: "75em", // 1200px
  large: "56.25em", // 900px
  medium: "37.5em", // 600px
  small: "31.25em", // 500px
  smallest: "25em", // 400px
};

const theme = {
  mainColor: "#f9f7f3",
  mq: {
    laptopL: `@media only screen and (min-width: ${1440}px)`,
    laptopS: `@media only screen and (min-width: ${1024}px)`,
    tablet: `@media only screen and (min-width: ${768}px)`,
    mobile: `@media only screen and (min-width: ${400}px)`,
  },
};

export default theme;
