const mediaQuery = (maxWidth) => `
  @media (max-width: ${maxWidth}px)
`;

const media = {
  laptopXL: mediaQuery(1920),
  laptopL: mediaQuery(1440),
  laptopS: mediaQuery(1024),
  tablet: mediaQuery(768),
  mobile: mediaQuery(400),
  custom: mediaQuery,
};

export default media;
