import instance from "../Config/axios"
import {endpoint} from "../Config/config"

export function getProductos(){
    return instance.get("items")
}

export function getProducto(id){
    return instance.get("items/"+id)
}