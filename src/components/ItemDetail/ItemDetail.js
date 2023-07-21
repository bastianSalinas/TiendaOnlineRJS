import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext';

const ItemDetail = ({id, name, img, category, details, price, stock}) => {


    const { carrito, setCarrito} = useContext(CartContext)
    console.log(carrito)
    const [cantidadClic, setCantidadClic] = useState(1)

    const handleOnAdd = (cantidad) =>{
        setCantidadClic(cantidad)
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
                    Descripcion: {price}
                </p>
            </section>
            <footer className='itemFooter'>
                {
                    cantidadClic > 0 ? (
                        <Button><Link to='/cart' className='Option'>Terminar compra</Link></Button>
                    ) : (
                        <ItemCount inicio={1} stock={20} agregado={handleOnAdd} />
                    )
                }
            </footer>
        </Card>
    )
}

export default ItemDetail