import { useEffect, useState } from "react"
import { getProductosById } from "../../Inventory"
import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.css'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const[producto, SetProducto] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        getProductosById(itemId)
            .then(respuesta => {
                SetProducto(respuesta)
            })
            .catch(error => {
                console.error(error)
            })
    }, [itemId])

    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...producto} />
        </div>
    )
}

export default ItemDetailContainer