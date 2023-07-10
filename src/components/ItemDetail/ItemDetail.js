import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import Card from 'react-bootstrap/Card'

const ItemDetail = ({id, name, img, category, details, price, stock}) => {
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
                <ItemCount inicio={1} stock={20} agregado={(cantidad) => console.log('Cantidad agregada: ', cantidad)} />   
            </footer>
        </Card>
    )
}

export default ItemDetail