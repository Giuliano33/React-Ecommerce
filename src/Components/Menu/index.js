import React,{Component} from "react"
import {Link} from "react-router-dom"
import {Navbar, Nav} from "react-bootstrap"
import Option from "./Option"
class Menu extends Component{
    
    render(){
        return(
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="home">Tienda Oficial</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">

                            <Option path="/" label="Inicio"/>
                            <Option path="/alta" label="Registro"/>
                            <Option path="/ingreso" label="Ingresar"/>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
export default Menu;