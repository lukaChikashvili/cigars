import { createContext, useState } from "react";


export const MeshContext = createContext();


const ContextProvider = ({ children }) => {
   const [showText, setShowText] = useState(false);
   const [showHistory, setShowHistory] = useState(false);
   const [manu, setManu] = useState(false);
   const [contact, setContact] = useState(false);

   

    return (
        <MeshContext.Provider value = {{showText, setShowText, showHistory, setShowHistory, manu, setManu
        , contact, setContact}}>
            {children}
        </MeshContext.Provider>
    )

}


export default ContextProvider;