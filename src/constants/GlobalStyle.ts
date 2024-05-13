import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body,div,section{
        margin: 0;
        padding: 0;
    }
    * {
        box-sizing: border-box;
    }
    h1,h2,h3,h4,h5,h6,p,li,a{
        font-family: sans-serif;
        text-decoration: none;
        line-height: 1.5;
    }
    h1{
        font-size: 40px;
    }
    h2{
        font-size: 32px;
    }
    h3{
        font-size: 28px;
    }
    h4{
        font-size: 24px;
    }
    h5{
        font-size: 20px;
    }
    h6{
        font-size: 16px;
    }
    p{
        font-size: 16px;
    }
`;
