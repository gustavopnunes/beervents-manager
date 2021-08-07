import { createContext, useState, useContext } from "react";

export const ConfraternizationContext = createContext();

export const ConfraternizationProvider = ({children}) => {

    const [confraternizationDrinks, setConfraternizationDrinks] = useState([]);

    const addToConfraternization = drink => {
        let index = confraternizationDrinks.findIndex(el => el.id === drink.id);
        if (index === -1) {
            setConfraternizationDrinks([...confraternizationDrinks, drink])
        } else {
            alert ("cerveja já adicionada à confraternização")
        }
    }

    const removeFromConfraternization = drink => {
        const newConfraternizationDrinks = confraternizationDrinks.filter(
            drinkOnConfraternization => drinkOnConfraternization.id !== drink
        )
        setConfraternizationDrinks(newConfraternizationDrinks);
    }

    return (
        <ConfraternizationContext.Provider value = {{confraternizationDrinks, addToConfraternization, removeFromConfraternization}}>
            {children}
        </ConfraternizationContext.Provider>
    )

}

export const useConfraternization = () => useContext(ConfraternizationContext);