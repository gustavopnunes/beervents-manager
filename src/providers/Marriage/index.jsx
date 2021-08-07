import { createContext, useState, useContext } from "react";

export const MarriageContext = createContext();

export const MarriageProvider = ({children}) => {

    const [marriageDrinks, setMarriageDrinks] = useState([]);

    const addToMarriage = drink => {
        let index = marriageDrinks.findIndex(el => el.id === drink.id);
        if (index === -1) {
        setMarriageDrinks([...marriageDrinks, drink]);
        } else {
            alert("cerveja já adicionada ao casamento")
        }
    }

    const removeFromMarriage = drink => {
        const newMarriageDrinks = marriageDrinks.filter(
            drinkOnMarriage => drinkOnMarriage.id !== drink
        )
        setMarriageDrinks(newMarriageDrinks)
    }

    return (
        <MarriageContext.Provider value = {{marriageDrinks, addToMarriage, removeFromMarriage}}>
            {children}
        </MarriageContext.Provider>
    )
}

export const useMarriage = () => useContext(MarriageContext);