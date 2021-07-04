import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
    box-sizing: border-box;
}

body {
    font-family: 'Open Sans';
    font-weight: 300;
    background-color: ${({ theme, dark }) => dark && theme.dark.bgc};
    color: ${({ theme, dark }) => dark && theme.dark.color};
}

`;
export default GlobalStyle;
