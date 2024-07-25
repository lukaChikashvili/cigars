import { createContext, useState } from "react";


export const MeshContext = createContext();


const ContextProvider = ({ children }) => {
   const [showText, setShowText] = useState(false);
   const [showHistory, setShowHistory] = useState(false);

   

    return (
        <MeshContext.Provider value = {{showText, setShowText, showHistory, setShowHistory}}>
            {children}
        </MeshContext.Provider>
    )

}


export default ContextProvider;