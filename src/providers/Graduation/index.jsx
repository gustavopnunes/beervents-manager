import { createContext, useState, useContext } from "react";

export const GraduationContext = createContext();

export const GraduationProvider = ({children}) => {

    const [graduationDrinks, setGraduationDrinks] = useState([]);

    const addToGraduation = drink => {
        let index = graduationDrinks.findIndex(el => el.id === drink.id);
        if (index === -1) {
        setGraduationDrinks([...graduationDrinks, drink]);
        } else {
            alert("drink already on your graduation")
        }
    }

    const removeFromGraduation = drink => {
        const newGraduationDrinks = graduationDrinks.filter(
            drinkOnGraduation => drinkOnGraduation.id !== drink
        )
        setGraduationDrinks(newGraduationDrinks)
    }

    return (
        <GraduationContext.Provider value = {{graduationDrinks, addToGraduation, removeFromGraduation}}>
            {children}
        </GraduationContext.Provider>
    )
}

export const useGraduation = () => useContext(GraduationContext);