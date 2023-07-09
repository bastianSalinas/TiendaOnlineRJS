import { useEffect, useState } from "react"
import { getProductos } from "../../Inventory"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([])

    useEffect(() =>{
        getProductos()
            .then(respuesta =>{
                setProductos(respuesta)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])


    return(
        <div>
            <h1>{greeting}</h1>
            <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer