import { createContext, useState, useContext } from "react";
import toast from "react-hot-toast";

export const MarriageContext = createContext();

export const MarriageProvider = ({children}) => {

    const [marriageDrinks, setMarriageDrinks] = useState([]);

    const addToMarriage = drink => {
        let index = marriageDrinks.findIndex(el => el.id === drink.id);
        if (index === -1) {
        setMarriageDrinks([...marriageDrinks, drink]);
        toast.success(`${drink.name} was added to your wedding!`, {
            position: "top-right",
        })
        } else {
            toast.error(`${drink.name} is already on your wedding`, {
                position: "top-right",
            })
        }
    }

    const removeFromMarriage = drink => {
        const newMarriageDrinks = marriageDrinks.filter(
            drinkOnMarriage => drinkOnMarriage.id !== drink
        )
        setMarriageDrinks(newMarriageDrinks)
        toast.success("removed!", {
            position: "top-right",
        })
    }

    return (
        <MarriageContext.Provider value = {{marriageDrinks, addToMarriage, removeFromMarriage}}>
            {children}
        </MarriageContext.Provider>
    )
}

export const useMarriage = () => useContext(MarriageContext);