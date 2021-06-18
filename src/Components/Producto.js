import React,{Component,useState} from "react"
import {Link} from "react-router-dom"

function Producto(props){
    const {data,titulo} = props
    
    const verDetalle = (props.verDetalle!==false?true:false);
    const extendida = (props.extendida==true?true:false)
    const id = props.id
    const {price,name,description}=props.data
    const [mensaje,setMensaje]=useState("")

    const comprar = ()=>{
        
        if(data.stock-1==0){
            setMensaje("No hay stock")
        }else{
            setMensaje("Gracias por su compra")
        }
    }
    return(
        <div>
           
            <div>Nombre: {name}</div>
            <div>Price: ${price}</div>
            
            {
                extendida &&
                <div>Descripcion: {description} </div>
            }
            
            <button onClick={comprar}>Comprar</button>
            {
                verDetalle && 
                <button ><Link to={"/producto/"+id}>Ver Detalle</Link></button>
            }
            
            {mensaje}
        </div>
    )
}
export default Producto;

