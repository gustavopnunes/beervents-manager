import { useContext } from "react";
import { MarriageContext } from "../../providers/Marriage";
import DrinkCard from "../../components/DrinkCard";

const Marriage = () => {

    const {marriageDrinks} = useContext(MarriageContext)
    const {removeFromMarriage} = useContext(MarriageContext)

    return (
        <>
            <h2>YOUR WEDDING DRINKS</h2>
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