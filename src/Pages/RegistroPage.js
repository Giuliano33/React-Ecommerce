import React,{useState} from "react"
import firebase from "../Config/firebase"
import {Button,Container,Spinner} from 'react-bootstrap'
import BotonConLoading from "../Components/Forms/BotonConLoading"
import FormGroup from "../Components/Forms/FormGroup"
import AlertCustom from "../Components/AlertCustom"

function RegistroPage(){
    const [form,setForm] = useState({nombre:'',apellido:'',email:'',password:''})
    const [loading,setLoading] = useState(false)
    const [alert,setAlert] = useState({variant:"", text:""})

    const handleSubmit = (event)=>{
        event.preventDefault()
        setLoading(true)
        console.log(form)
        firebase.auth.createUserWithEmailAndPassword(form.email, form.password)
        .then(data=>{
            console.log("Registro", data.user.uid)
            firebase.db.collection("Usuarios")
            .add({
                nombre: form.nombre,
                apellido: form.apellido,
                email:form.email,
                userId: data.user.uid
            })
            .then(data=>{
                setLoading(false)
                setAlert({variant:"succes", text:"Registro exitoso! :D"})
                console.log(data);
            })
            .catch(error=>{
                setLoading(false)
                console.log("Error add",error)
            })
        })
        .catch(error=>{
            console.log("Error",error)
            setAlert({variant:"dark", text:"Oh! Ha ocurrido un error :("})
        })
    }
    const handleChange = (event)=>{
        const name = event.target.name
        const value = event.target.value
        console.log(name,value)
        setForm({...form,[name]:value})
    }
    
    return(
        /* */
       <Container>
        <form onSubmit={handleSubmit}>
        <FormGroup label="Nombre" name="nombre" type="text" placeholder="Ingrese su nombre" value={form.nombre} change={handleChange}/>
        <FormGroup label="Apellido" name="apellido" type="text" placeholder="Ingrese su apellido" value={form.apellido} change={handleChange}/>
        <FormGroup label="Email" name="email" type="email" placeholder="Ingrese su nombre" value={form.email} change={handleChange}/>
        <FormGroup label="Contraseña" name="password" type="password" placeholder="Ingrese su nombre" value={form.password} change={handleChange}/>

            <BotonConLoading text="Registrarse" loading={loading}/>
            <AlertCustom variant={alert.variant} text={alert.text}/>
        </form>
        </Container>  
    )
    
}
export default RegistroPage;
