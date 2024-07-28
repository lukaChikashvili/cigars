import { createContext, useRef, useState } from "react";


export const MeshContext = createContext();


const ContextProvider = ({ children }) => {
   const [showText, setShowText] = useState(false);
   const [showHistory, setShowHistory] = useState(false);
   const [manu, setManu] = useState(false);
   const [contact, setContact] = useState(false);
   const [Gallery, setGallery] = useState(false);
   const [showModal, setShowModal] = useState(false);

   const clothRef = useRef();
const [showModalText, setShowModalText] = useState(true);
    return (
        <MeshContext.Provider value = {{showText, setShowText, showHistory, setShowHistory, manu, setManu
        , contact, setContact, Gallery, setGallery, showModal, setShowModal, clothRef, showModalText, setShowModalText }}>
            {children}
        </MeshContext.Provider>
    )

}


export default ContextProvider;