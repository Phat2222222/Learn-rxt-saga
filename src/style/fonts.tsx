import { Global, css } from "@emotion/react";

const globalStyles = css`
  @font-face {
    font-family: "Montserrat";
    src: url("https://fonts.googleapis.com/css2?family=Montserrat");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
`;

const Fonts = () => <Global styles={globalStyles} />

export default Fonts
