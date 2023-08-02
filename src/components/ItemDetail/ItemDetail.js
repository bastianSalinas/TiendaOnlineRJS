import ItemCount from '../ItemCount/ItemCount'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({id, name, img, category, details, price, stock}) => {


    const [cantidadClic, setCantidadClic] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) =>{
        setCantidadClic(quantity)

        const item = {
            id, name, price
        }
        addItem(item, quantity)
    }

    return (
        <Card 
        bg={'Danger'.toLowerCase()}
        key={'Danger'}
        text={'Danger'.toLowerCase() === 'light' ? 'dark' : 'white'}
        className='cardItemDetail mb-2'>
            <header className='header'>
                <h2 className='title'>
                   {name} 
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className='imgCard'/>
            </picture>
            <section>
                <p className='info'>
                    Categoria: {category}
                </p>
                <p className='info'>
                    Descripcion: {details}
                </p>
                <p className='info'>
                    Precio: {price}
                </p>
            </section>
            <footer className='itemFooter'>
                {
                    cantidadClic > 0 ? (
                        <Button variant='secondary'><Link to='/cart' className='Option'>Terminar compra</Link></Button>
                    ) : (
                        <ItemCount variant='secondary' inicio={1} stock={stock} agregado={handleOnAdd} />
                    )
                }
            </footer>
        </Card>
    )
}

export default ItemDetail