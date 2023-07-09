import './CartWidget.css'
import cart from './assets/cart-icon.png'
const CartWidget = () => {
    return(
        <div className='contCart'>
            <img src={cart} alt="cart-widget" className='imgCart'></img>
            0
        </div>
    )
}

export default CartWidget