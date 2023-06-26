import CartWidget from "./CartWidget/CartWidget"
import logo from '../../assets/logo.png'

const NavBar = () => {
    return(
        <nav>
            <img src={logo} alt="logo tienda" width="100px"></img>
            <div>
                <button>Figuras</button>
                <button>Posters</button>
                <button>Consolas</button>
                <button>Accesorios</button>
                <button>Geek</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar