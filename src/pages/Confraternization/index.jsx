import { useContext } from "react";
import { ConfraternizationContext } from "../../providers/Confraternization";
import DrinkCard from "../../components/DrinkCard";
import EventPage from "../../components/EventPage";
import { Link } from "react-router-dom";


const Confraternization = () => {

    const {confraternizationDrinks} = useContext(ConfraternizationContext);
    const {removeFromConfraternization} = useContext(ConfraternizationContext);
    return (
        <EventPage>
            <h2 className = "page_title">YOUR CONFRATERNIZATION DRINKS</h2>
            {
                confraternizationDrinks.length === 0 && 
                <p className = "no_drinks">You didn't add any drinks to this event.
                </p>
            }
            <nav className = "drinks_list_link">
                <Link to = "/" >Choose ur drinks!</Link>
            </nav>
        <section>
            {confraternizationDrinks.map(drink => (
                <DrinkCard key = {drink.id}>
                <img src = {drink.image_url} alt = {drink.name} />
                <p>{drink.name}</p>
                <p>First brewed: {drink.first_brewed}</p>
                <p>{drink.tagline}</p>
                <button className = "remove_btn" onClick = {() => removeFromConfraternization(drink.id)}>remove from confraternization</button>
            </DrinkCard>            
            ))}

        </section>
        </EventPage>
    )
}

export default Confraternization;