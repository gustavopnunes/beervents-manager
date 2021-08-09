import { createContext, useState, useContext } from "react";
import toast from "react-hot-toast";

export const GraduationContext = createContext();

export const GraduationProvider = ({children}) => {

    const [graduationDrinks, setGraduationDrinks] = useState([]);

    const addToGraduation = drink => {
        let index = graduationDrinks.findIndex(el => el.id === drink.id);
        if (index === -1) {
        setGraduationDrinks([...graduationDrinks, drink]);
        toast.success(`${drink.name} was added to your graduation!`, {
            position: "top-right",
        })
        } else {
            toast.error(`${drink.name} is already on your graduation!`, {
                position: "top-right",
            })
        }
    }

    const removeFromGraduation = drink => {
        const newGraduationDrinks = graduationDrinks.filter(
            drinkOnGraduation => drinkOnGraduation.id !== drink
        )
        setGraduationDrinks(newGraduationDrinks)
        toast.success("removed!", {
            position: "top-right",
        })
    }

    return (
        <GraduationContext.Provider value = {{graduationDrinks, addToGraduation, removeFromGraduation}}>
            {children}
        </GraduationContext.Provider>
    )
}

export const useGraduation = () => useContext(GraduationContext);