import { useEffect, useState } from "react"
import { getProductos, getProductosXCategoria } from "../../Inventory"
import ItemList from "../ItemList/ItemList"
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductosXCategoria : getProductos

        asyncFunc(categoryId)
            .then(respuesta =>{
                setProductos(respuesta)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])


    return(
        <div>
            <h1>{greeting}</h1>
            <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer