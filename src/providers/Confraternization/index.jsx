import { createContext, useState, useContext } from "react";
import toast from "react-hot-toast";

export const ConfraternizationContext = createContext();

export const ConfraternizationProvider = ({children}) => {

    const [confraternizationDrinks, setConfraternizationDrinks] = useState([]);

    const addToConfraternization = drink => {
        let index = confraternizationDrinks.findIndex(el => el.id === drink.id);
        if (index === -1) {
            setConfraternizationDrinks([...confraternizationDrinks, drink])
            toast.success(`${drink.name} was added to confraternization!`, {
                position: "top-right",
            })
        } else {
            toast.error(`${drink.name} is already on you confraternization!`, {
                position: "top-right"
            })
        }
    }

    const removeFromConfraternization = drink => {
        const newConfraternizationDrinks = confraternizationDrinks.filter(
            drinkOnConfraternization => drinkOnConfraternization.id !== drink
        )
        setConfraternizationDrinks(newConfraternizationDrinks);
        toast.success(`removed!`, {
            position: "top-right"
        })
    }

    return (
        <ConfraternizationContext.Provider value = {{confraternizationDrinks, addToConfraternization, removeFromConfraternization}}>
            {children}
        </ConfraternizationContext.Provider>
    )

}

export const useConfraternization = () => useContext(ConfraternizationContext);