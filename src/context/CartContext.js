import { createContext, useState} from "react"

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    
    // useEffect(() => {
    //     console.log(cart);
    //   }, [cart]); 

    const addItem = (item, quantity) =>{
        if(!isInCart(item.id)){
            setCart(prev => [...prev, {...item, quantity}])
        }else{
            console.error('El producto ya fue agregado')
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) =>{
        return cart.some(prod =>prod.id === itemId)
    }

    const totalQuantity = () => {
        let total = 0;
        for (const product of cart) {
            total += product.quantity;
        }
        return total;
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity }}>
            { children }
        </CartContext.Provider>
    )
}