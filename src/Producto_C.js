import React,{Component} from "react"
class Producto_C extends Component{
    constructor(props){
        super(props)
        this.state={
            mensaje:""
        }
    }
    comprar=()=>{
        //console.log(this.props.data.cantidad)
        if(this.props.data.cantidad-1==0){
            this.setState({
                mensaje:"No hay stock"
            })
        }
    }
    
    render(){
        
        return(
            /* */
            <div>
                <div>Id: {this.props.data.id}</div>
                <div>Price: {this.props.data.price}</div>
                <div>Nombre: {this.props.data.name}</div>
                <button onClick={this.comprar}>Comprar</button>
                
                {this.state.mensaje}
            </div>
        )
    }
}
export default Producto_C;

