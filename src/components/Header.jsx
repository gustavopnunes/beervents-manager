import styled from "styled-components"

const Header = styled.header`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: orange;
    z-index: 2;
    top: 0;
    position: sticky;
    box-shadow: 1px 5px 5px 2px rgba(0, 0, 0, 0.2);

    h1 {
        margin: 4px auto;
    }

    .logo {
        text-decoration: none;
        color: inherit;

        &:hover {
            color: blanchedalmond;
            transition: .1s ease;
        }
    }

    p {
        margin: 2px auto;
        padding: 0 4px;
    }

    @media (max-width: 720px) {

        h1 {
            font-size: 1.4rem;
        }

        p {
            font-size: .75rem;
        }

        nav a {
            width: 140px;
            font-size: .8rem;
        }
    }

`

export default Header;