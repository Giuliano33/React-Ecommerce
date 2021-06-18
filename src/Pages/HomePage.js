import React,{useState,useEffect} from "react"
import Producto from "../Components/Producto"
import Filtros from "../Components/Filtros"
import firebase from "firebase"
import { getProductos } from "../Services/itemServices";
function HomePage(props) {

    
    
    const [productos,setProductos] = useState([]);
    const [loading,setLoading] = useState(true);
    const [titulo,setTitulo] = useState("Productos mas recientes:");
    const [mensaje,setMensaje] = useState("");
    //componentDidMount
    useEffect(
        ()=>{
            firebase.db.collection("Productos")
            .get()
            .then(querySnapshot=>{
                console.log(querySnapshot.docs)
                setProductos(querySnapshot.docs);
                setLoading(false);
                querySnapshot.docs.map(doc=>{
                    console.log(doc.data())
                })

            })
        },
        []
    )
    const filtrarProducto = ()=>{
        
        setProductos([
            {
                id:2,
                name:"moto x",
                price:200
            }
        ])
    }
    const cambiarTitulo = ()=>{
        
        setTitulo("Home modificada")
    }
    
    if(loading){
        return(
            /* */
            <div>
                loading...
            </div>
        )
    }else{
        return(
            /* */
            <div>
                
            <div>{titulo}</div>
                {productos.map(producto=><Producto id={producto.id} data={producto.data()} />)}
                
                <Filtros clickCambiarTitulo={cambiarTitulo} clickFiltrarProducto={filtrarProducto} title={titulo} />
            </div>
        )
    }
        
    
}
export default HomePage;

