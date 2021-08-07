import axios from "axios";
import { useEffect, useState } from "react";
import { useMarriage } from "../../providers/Marriage";
import { useGraduation } from "../../providers/Graduation";
import { useConfraternization } from "../../providers/Confraternization";
import DrinkCard from "../../components/DrinkCard";
import {GiLovers, GiGraduateCap, GiPartyPopper} from "react-icons/gi"

const DrinksList = () => {

    const {addToMarriage} = useMarriage();
    const {addToGraduation} = useGraduation();
    const {addToConfraternization} = useConfraternization();

    const [drinksData, setDrinksData] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
    axios.get(`https://api.punkapi.com/v2/beers?page=${page}`)
    .then(response => response.data.filter(drink => drink.image_url !== "https://images.punkapi.com/v2/keg.png"))
    .then(response => setDrinksData(response))
    },[page])

    const nextPage = () => {
        setPage(page + 1);
    }

    const previousPage = () => {
        page > 1 && setPage(page - 1);
    }

    return (
        <>
        <ul>
            

            
            {drinksData.map(drink => (
                <DrinkCard key = {drink.id}>
                    <img src = {drink.image_url} alt = {drink.name} />
                    <p>{drink.name}</p>
                    <p className = "drink_description">{drink.tagline}</p>
                    <p>First brewed: {drink.first_brewed}</p>
                    <p className = "drink_volume">volume: {drink.volume.value} litres</p>
                    <div className = "add-to-event_buttons">
                        <p className = "question">In what event?</p>
                        <div>
                        <span className = "wedding_icon">
                            <GiLovers onClick = {() => addToMarriage({id: drink.id, name: drink.name, image_url: drink.image_url, description: drink.description, first_brewed:drink.first_brewed})} />
                        </span>
                        <span className = "graduation_icon">
                            <GiGraduateCap onClick = {() => addToGraduation({id: drink.id, name: drink.name, image_url: drink.image_url, description: drink.description, first_brewed:drink.first_brewed})} /></span>
                        <span className = "confraternization_icon">
                            <GiPartyPopper onClick = {() => addToConfraternization({id: drink.id, name: drink.name, image_url: drink.image_url, description: drink.description, first_brewed:drink.first_brewed})} /></span>
                            </div>
                    </div>
                </DrinkCard>
            ))}
        </ul>
        <button onClick = {previousPage}>previous page</button>
        <button onClick = {nextPage}>next page</button>
        </>
    )
}

export default DrinksList;