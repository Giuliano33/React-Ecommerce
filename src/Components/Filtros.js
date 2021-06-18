import React,{Component} from "react"
class Filtros extends Component{
    constructor(props){
        super(props)
        
    }
    componentWillMount(){
        console.log("componentWillMount")
    }
    componentDidMount(){
        console.log("componentDidMount")
    }
    componentWillUpdate(nextProps, nextState){
        console.log("componentWillUpdate",nextProps, nextState)
    }
    componentDidUpdate(prevProps, prevState){
        console.log("componentDidUpdate",prevProps, prevState)
    }
    shouldComponentUpdate(nextProps, nextState){
        return true
    }
    render(){
        
        return(
            /* */
            <div>
            </div>
        )
    }
}
export default Filtros;

