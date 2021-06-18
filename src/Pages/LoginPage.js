import React,{useState} from "react"
import firebase from "../Config/firebase"
import {useHistory} from "react-router-dom"
import BotonConLoading from "../Components/Forms/BotonConLoading"
import {Button,Container, Spinner} from 'react-bootstrap'

function LoginPage(){
    const [loading,setLoading] = useState(false)
    const [form,setForm] = useState({email:'',password:''})
    const history = useHistory()
    const handleSubmit = (event)=>{
        event.preventDefault()
        setLoading(true)
        console.log(form)
        firebase.auth.signInWithEmailAndPassword(form.email,form.password)
        .then(data=>{
            setLoading(false)
            console.log("Login Ok", data)
            history.push("/")
        })
        .catch(error=>{
            setLoading(false)
            console.log("Error", error)
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
            <div>
                <label>Email: </label>
                <input type="email" name="email" value={form.email} onChange={handleChange}></input>
            </div>
            <div>
                <label>Contraseña: </label>
                <input type="password" name="password" value={form.password} onChange={handleChange}></input>
            </div>
            <BotonConLoading text="Ingresar" loading={loading}/>
        </form>
        </Container>
    )
    
}
export default LoginPage;
