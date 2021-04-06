import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing : border-box;
}

html{
    font-family: 'Jost', sans-serif;
}

body{
    min-height:100vh;
    --burger-span: #000000;
    --peach : #E7816B;
}

`;

export default GlobalStyle;
