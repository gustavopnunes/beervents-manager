import { useContext } from "react";
import { MarriageContext } from "../../providers/Marriage";
import DrinkCard from "../../components/DrinkCard";
import { Link } from "react-router-dom";

const Marriage = () => {

    const {marriageDrinks} = useContext(MarriageContext)
    const {removeFromMarriage} = useContext(MarriageContext)

    return (
        <>
            <h2>YOUR WEDDING DRINKS</h2>
            <nav className = "drinks_list_link">
                <Link to = "/" >Choose ur drinks</Link>
            </nav>
        <section>
            {marriageDrinks.map(drink => (
                <DrinkCard key = {drink.id}>
                <img src = {drink.image_url} alt = {drink.name} />
                <p>{drink.name}</p>
                <p>First brewed: {drink.first_brewed}</p>
                <p>{drink.tagline}</p>
                <button onClick = {() => removeFromMarriage(drink.id)}>remove from wedding</button>
                <div>
                </div>
            </DrinkCard>            
            ))}

        </section>
        </>
    )
}

export default Marriage;