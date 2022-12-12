import { createGlobalStyle } from "styled-components";
import background from "./background.jpg";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  background:url("${background}");
  background-size: cover;
}

*,
::after,
::before {
  box-sizing: inherit;
}
`;
