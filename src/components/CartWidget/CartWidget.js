import { Link } from 'react-router-dom'
import './CartWidget.css'
import cart from './assets/cart-icon.png'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'


const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    const totQuantity = totalQuantity();

    return(
        <div className='contCart'>
            <Link to='/cart' style={{ textDecoration: 'none', display: totQuantity > 0 ? 'block' : 'none'}}>
                <img src={cart} alt="cart-widget" className='imgCart'></img>
                <span className='numCarrito'>{ totQuantity }</span>
            </Link>
        </div>
    )
}
export default CartWidget