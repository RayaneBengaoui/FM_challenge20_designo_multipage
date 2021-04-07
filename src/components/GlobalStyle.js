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
    --burger-span: #1D1C1E;
    --title-color: #ffffff;
    --button-bg: #ffffff;
    --button-text-color : #333136;
    --peach : #E7816B;
}

h1{
    font-size: 2rem;
    color: var(--title-color);
    font-weight:500;
    line-height: 2.25rem;
}

h3{
    font-size:1.25rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 5px;
    color: #333136;
}

p{
    font-size: 1rem;
    font-weight: 400;
    color: #333136;
    line-height: 1.625rem;
}

button{
    cursor: pointer;
    font-family:inherit;
    outline: none;
    border: none;
    background : var(--button-bg);
    color: var(--button-text-color);
    font-size: 0.9375rem;
    font-weight:500;
    text-transform:uppercase;
    letter-spacing:1px;
    width:9.5rem;
    height: 3.5rem;
    border-radius: .5rem;
}

a{
    text-decoration: none;
}

`;

export default GlobalStyle;
