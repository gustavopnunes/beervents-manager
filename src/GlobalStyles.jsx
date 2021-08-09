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

    .drinks_list_link a {
        text-decoration: none;
        color: snow;
        text-transform: uppercase;
        border-bottom: 2px solid snow;
        font-weight: bold;
        font-size: 1.2rem;
        width: 224px;
        margin: 1px 4px;
        background-color: #967272;
        border-radius: 6px;
        padding: 4px 2px;
        position: relative;
        
        &:hover{
            transition: .3s ease;
            transform: scale(95%);
            color: #6e3c1e;
        }
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
        margin: 4px;

        &:hover {
            background-color: #473b3b;
            transition: .2s ease;
        }
    }

    .drinks_list_link{
        width: 100%;
        height:60px;
        display: flex;
        justify-content: center;
        align-items: center;

        a{
            color: #ffdb0d;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.2rem;
        }

        font-size: 3rem;
    }

    .pages_btn {
        background-color: blanchedalmond;
        width: 104px;
        &:hover {
            background-color: #d63434;
        }
    }
`;

export default GlobalStyle;