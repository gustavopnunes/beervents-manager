import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        background-color: #c75252;
        color: #313030;
        font-family: 'Courier New', Courier, monospace, sans-serif;
        text-align: center;
        margin: 0;
    }

    h1 {
        text-transform: uppercase;
    }

    ul {
        margin: 24px auto;
        padding: 0;
        display: flex;
        width: 90%;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        max-width: 1220px;
    }


    p {
        margin: 2px;
        font-size: 1rem;
    }

    nav {
        max-width: 900px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        margin: 0 auto;
    }

    nav a {
        text-decoration: none;
        color: snow;
        text-transform: uppercase;
        border-bottom: 2px solid snow;
        padding: 0 4px;
        font-weight: bold;
        font-size: 1.2rem;
        width: 200px;
        margin: 1px 4px;
        background-color: #967272;
        &:hover{
            transition: .3s ease;
            transform: scale(90%);
        }
    }


    section {
        display: flex;
        margin: 0 auto;
        max-width: 1200px;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    button {
        cursor: pointer;
        background-color: #c73c3c;
        border: none;
        height: 32px;
        border-radius: 4px;
        &:hover {
            background-color: #473b3b;
            transition: .2s ease;
        }
    }

`;

export default GlobalStyle;