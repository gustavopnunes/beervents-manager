import { useContext } from "react";
import { GraduationContext } from "../../providers/Graduation";
import DrinkCard from "../../components/DrinkCard";

const Graduation = () => {

    const {graduationDrinks} = useContext(GraduationContext);
    const {removeFromGraduation} = useContext(GraduationContext);

    return (
        <>
            <h2>YOUR GRADUATION DRINKS</h2>
        <section>
            {graduationDrinks.map(drink => (
                <DrinkCard key = {drink.id}>
                <img src = {drink.image_url} alt = {drink.name} />
                <p>{drink.name}</p>
                <p>First brewed: {drink.first_brewed}</p>
                <p>{drink.tagline}</p>
                <button onClick = {() => removeFromGraduation(drink.id)}>remove from graduation</button>
                <div>
                </div>
            </DrinkCard>            
            ))}

        </section>
        </>
    )
}

export default Graduation;