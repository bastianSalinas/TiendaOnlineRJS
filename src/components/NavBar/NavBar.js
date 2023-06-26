import CartWidget from "./CartWidget/CartWidget"

const NavBar = () => {
    return(
        <nav>
            <h3>ForMoreHP</h3>
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