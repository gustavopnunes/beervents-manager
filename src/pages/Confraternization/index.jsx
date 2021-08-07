import { useContext } from "react";
import { ConfraternizationContext } from "../../providers/Confraternization";
import DrinkCard from "../../components/DrinkCard";
import { Link } from "react-router-dom";

const Confraternization = () => {

    const {confraternizationDrinks} = useContext(ConfraternizationContext);
    const {removeFromConfraternization} = useContext(ConfraternizationContext);
    return (
        <>
            <h2>YOUR CONFRATERNIZATION DRINKS</h2>
            <nav className = "drinks_list_link">
                <Link to = "/" >Choose ur drinks</Link>
            </nav>
        <section>
            {confraternizationDrinks.map(drink => (
                <DrinkCard key = {drink.id}>
                <img src = {drink.image_url} alt = {drink.name} />
                <p>{drink.name}</p>
                <p>First brewed: {drink.first_brewed}</p>
                <p>{drink.tagline}</p>
                <button onClick = {() => removeFromConfraternization(drink.id)}>remove from confraternization</button>
                <div>
                </div>
            </DrinkCard>            
            ))}

        </section>
        </>
    )
}

export default Confraternization;