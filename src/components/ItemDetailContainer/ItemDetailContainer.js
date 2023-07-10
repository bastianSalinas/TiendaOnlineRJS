import { useEffect, useState } from "react"
import { getProductosById } from "../../Inventory"
import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    const[producto, SetProducto] = useState(null)

    useEffect(() => {
        getProductosById('1')
            .then(respuesta => {
                SetProducto(respuesta)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...producto} />
        </div>
    )
}

export default ItemDetailContainer