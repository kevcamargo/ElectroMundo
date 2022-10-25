import React, {useState, useEffect, useContext} from 'react';

// Local Imports
import './DataUser.css';
import { db } from '../../../fuegobase/fuegobase';
import {UserContext} from '../../../context/UserContext'; 

// Modules Imports
import { Button, Card, CardContent, Container, Grid, Alert } from '@mui/material';
import TextField from '@mui/material/TextField';
import { getDoc, collection, doc, updateDoc } from 'firebase/firestore';




const DataUser = () => {
    
    // Context
    const valorUserContext = useContext(UserContext)

    // Firestore
    const usuariosCollection = collection(db, 'usuarios')
    const ref = doc(usuariosCollection, "FaMaFUuuvaPms9Q2k6sA")

    // States
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [domicilio, setDomicilio] = useState("");
    const [mail, setMail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [mostrarAlert,setMostrarAlert] = useState(false)

    useEffect(() =>{
        getDoc(ref).then(
            async (result) => {
                const usuario = await result.data()
                setNombre(usuario.nombre);
                setApellido(usuario.apellido);
                setDomicilio(usuario.domicilio);
                setMail(usuario.mail);
                setTelefono(usuario.telefono);
            }
        ).catch(
            (error) =>
            console.log(error)
        )
    },[])

    // handleSubmit - Al hacer click en Guardar datos. Se procede a realizar la actualizacion de los datos dentro de la coleccion de usuarios, despues se modifica el estado Alert para mostrar una notificacion de datos guarddos. Tambien se actualiza el contexto del user, para reflejar el cambio al momento de realizar el click.
    const handleSubmit = (e) => {
        e.preventDefault()
        
        const usuarioDefault = doc(db,"usuarios", "FaMaFUuuvaPms9Q2k6sA")
        updateDoc(usuarioDefault, {
            nombre,
            apellido,
            domicilio,
            mail,
            telefono
        })

        setMostrarAlert(true)
        valorUserContext.updateName(nombre)
    }

    return(
        <> 
            <h1 className='titulo'>Informacion de la cuenta</h1>

            <Container className='main--container'>
                <form onSubmit={handleSubmit}>

                    <Card className='main--card'>
                        
                        <CardContent className='main--cardcontentitem' sx={{borderColor: 'transparent'}}>

                            {/* Nombre y Apellido */}
                            <Grid container>
                                <Grid xs={6} sx={{padding: 2}}>
                                    <TextField
                                        id="nombre"
                                        className='input--text'
                                        label="Nombre"
                                        type="text"
                                        variant="filled"
                                        fullWidth
                                        InputProps={{ disableUnderline: true}}
                                        autoComplete='off'
                                        onChange={(e) => setNombre(e.target.value)}
                                        value={nombre}
                                        required
                                    />
                                </Grid>
                                <Grid xs={6} sx={{padding: 2}}>
                                    <TextField
                                        id="apellido"
                                        className='input--text'
                                        label="Apellido"
                                        type="text"
                                        variant="filled"
                                        fullWidth
                                        InputProps={{ disableUnderline: true}}
                                        autoComplete='off'
                                        onChange={(e) => setApellido(e.target.value)}
                                        value={apellido}
                                        required
                                    />
                                </Grid>
                            </Grid>

                            {/* Domicilio */}
                            <Grid container>
                                <Grid xs={12} sx={{padding: 2}}>
                                    <TextField
                                        id="domicilio"
                                        className='input--text'
                                        label="Domicilio"
                                        type="text"
                                        variant="filled"
                                        fullWidth
                                        InputProps={{ disableUnderline: true}}
                                        autoComplete='off'
                                        onChange={(e) => setDomicilio(e.target.value)}
                                        value={domicilio}
                                        required
                                    />
                                </Grid>
                            </Grid>

                            {/* Mail y Telefono */}
                            <Grid container>
                                <Grid xs={6} sx={{padding: 2}}>
                                    <TextField
                                        id="mail"
                                        className='input--text'
                                        label="E-Mail"
                                        type="mail"
                                        variant="filled"
                                        fullWidth
                                        InputProps={{ disableUnderline: true}}
                                        autoComplete='off'
                                        onChange={(e) => setMail(e.target.value)}
                                        value={mail}
                                        required
                                    />
                                </Grid>
                                <Grid xs={6} sx={{padding: 2}}>
                                    <TextField
                                        id="telefono"
                                        className='input--text'
                                        label="Telefono"
                                        type="string"
                                        variant="filled"
                                        fullWidth
                                        InputProps={{ disableUnderline: true}}
                                        autoComplete='off'
                                        onChange={(e) => setTelefono(e.target.value)}
                                        value={telefono}
                                        required
                                    />
                                </Grid>
                            </Grid>

                        </CardContent>
                        
                    </Card>

                    {
                        mostrarAlert 
                        ? <Alert className='alert--guardarDatos' onClose={()=>setMostrarAlert(false)}>Se guardaron los datos correctamente.</Alert> 
                        :<></>
                    }

                    <Button color='inherit' type="submit" className='boton--guardarDatos' variant="outlined">
                        Guardar Datos
                    </Button>                

                </form>
            </Container>
        </>
    )
}

export default DataUser
