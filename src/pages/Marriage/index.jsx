import { useContext } from "react";
import { MarriageContext } from "../../providers/Marriage";
import DrinkCard from "../../components/DrinkCard";
import { Link } from "react-router-dom";
import EventPage from "../../components/EventPage"

const Marriage = () => {

    const {marriageDrinks} = useContext(MarriageContext)
    const {removeFromMarriage} = useContext(MarriageContext)

    return (
        <EventPage>
            <h2 className = "page_title">YOUR WEDDING DRINKS</h2>
            {
                marriageDrinks.length === 0 && 
                <p className = "no_drinks">You didn't add any drinks to this event.
                </p>
            }
            <nav className = "drinks_list_link">
                <Link to = "/" >Choose ur drinks!</Link>
            </nav>
        <section>
            {marriageDrinks.map(drink => (
                <DrinkCard key = {drink.id}>
                <img src = {drink.image_url} alt = {drink.name} />
                <p>{drink.name}</p>
                <p>First brewed: {drink.first_brewed}</p>
                <p>{drink.tagline}</p>
                <button className = "remove_btn" onClick = {() => removeFromMarriage(drink.id)}>remove from wedding</button>
            </DrinkCard>            
            ))}

        </section>
        </EventPage>
    )
}

export default Marriage;