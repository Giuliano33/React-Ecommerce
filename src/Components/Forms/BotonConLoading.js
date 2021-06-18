import React,{useState} from "react"
import {Button,Spinner} from 'react-bootstrap'

function BotonConLoading(props){

    const {variant,type,loading,text} = props

    return(
            <Button type={type || "submit"} 
            variant={variant || "primary"} 
            disabled={loading}>
                {
                    loading &&
                    <Spinner animation="border" variant="dark" size="sm"/>
                }
            {text || "Registrarse"}
            </Button>
        
    )
}
export default BotonConLoading;
