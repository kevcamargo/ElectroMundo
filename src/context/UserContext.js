import React, { createContext, useState, useEffect } from "react";
import { db } from '../fuegobase/fuegobase';
import { getDoc, collection, doc } from 'firebase/firestore';

export const UserContext = createContext()

const UserProvider = ({children}) => {
    const [nombre, setNombre] = useState("...")
    const usuariosCollection = collection(db, 'usuarios')
    const ref = doc(usuariosCollection, "FaMaFUuuvaPms9Q2k6sA")

    useEffect(() => {
        getDoc(ref).then(
            async (result) => {
                const usuario = await result.data()
                setNombre(usuario.nombre);
            }
        ).catch(
            (error) =>
            console.log(error)
        )
    },[])

    const updateName = (name) => {
        setNombre(name)
    }

    return (
        <UserContext.Provider value={{nombre, updateName}}>
            {children}
        </UserContext.Provider>
    )

}

export default UserProvider
