import { useContext } from "react";
import { GraduationContext } from "../../providers/Graduation";
import DrinkCard from "../../components/DrinkCard";
import { Link } from "react-router-dom";
import EventPage from "../../components/EventPage"

const Graduation = () => {

    const {graduationDrinks} = useContext(GraduationContext);
    const {removeFromGraduation} = useContext(GraduationContext);

    return (
        <EventPage>
            <h2 className = "page_title">YOUR GRADUATION DRINKS</h2>
            {
                graduationDrinks.length === 0 && 
                <p className = "no_drinks">You didn't add any drinks to this event.
                </p>
            }
            <nav className = "drinks_list_link">
                <Link to = "/" >Choose ur drinks!</Link>
            </nav>
        <section>
            {graduationDrinks.map(drink => (
                <DrinkCard key = {drink.id}>
                <img src = {drink.image_url} alt = {drink.name} />
                <p>{drink.name}</p>
                <p>First brewed: {drink.first_brewed}</p>
                <p>{drink.tagline}</p>
                <button className = "remove_btn" onClick = {() => removeFromGraduation(drink.id)}>remove from graduation</button>
            </DrinkCard>            
            ))}

        </section>
        </EventPage>
    )
}

export default Graduation;