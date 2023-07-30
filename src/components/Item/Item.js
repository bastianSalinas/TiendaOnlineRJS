import './Item.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'

const Item = ({id, name, img, price, stock}) => {
    return (
        <Card 
        bg={'Danger'.toLowerCase()}
        key={'Danger'}
        text={'Danger'.toLowerCase() === 'light' ? 'dark' : 'white'}
        className='cardItem'>
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
                    Precio: ${price}
                </p>
                <p className='info'>
                    Stock Disponible: {stock}
                </p>
            </section>
            <footer className='itemFooter'>
                <Button variant='secondary'>
                    <Link to={`/item/${id}`} className='Option'>Ver Detalle</Link>
                </Button>
            </footer>
        </Card>
    )
}

export default Item