import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import {GraduationContext} from "../providers/Graduation"
import { MarriageContext } from "../providers/Marriage";
import { ConfraternizationContext } from "../providers/Confraternization";
import DrinksCounter from "./DrinksCounter";

const Navbar = styled.nav`
    max-width: 900px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 24px auto;

    a {
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
`

const Nav = () => {

    const {graduationDrinks} = useContext(GraduationContext);
    const {marriageDrinks} = useContext(MarriageContext);
    const {confraternizationDrinks} = useContext(ConfraternizationContext);

    return (
        <Navbar>
            <Link to =  "/marriage" > 
                Wedding {marriageDrinks.length > 0 && <DrinksCounter>{marriageDrinks.length}</DrinksCounter>} 
            </Link>
            <Link to =  "/confraternization" > 
                Confraternization{confraternizationDrinks.length > 0 && <DrinksCounter>{confraternizationDrinks.length}</DrinksCounter>} 
            </Link>
            <Link to =  "/graduation" > 
                Graduation {graduationDrinks.length > 0 && <DrinksCounter>{graduationDrinks.length}</DrinksCounter>}
            </Link>
        </Navbar>
        )
}

export default Nav;