import CartWidget from "./CartWidget/CartWidget"
import logo from '../../assets/logo.png'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const NavBar = () => {
    return(
        <nav className="navbar bg-danger" bg="dark" data-bs-theme="dark">
            <img src={logo} alt="logo tienda" width="100px"></img>
            <div>
            <ButtonGroup size="lg" className="mb-2">
                <Button variant="secondary" size="lg">Figuras</Button>
                <Button variant="secondary" size="lg">Posters</Button>
                <Button variant="secondary" size="lg">Consolas</Button>
                <Button variant="secondary" size="lg">Accesorios</Button>
                <Button variant="secondary" size="lg">Geek</Button>
            </ButtonGroup>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar