import CartWidget from "../CartWidget/CartWidget"
import logo from '../../assets/logo.png'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
    
    return(
        <nav className="navbar bg-danger" bg="dark" data-bs-theme="dark">
            <Link to='/'>
                <img src={logo} alt="logo tienda" width="100px" className="ms-5"></img>
            </Link>
            <div>
            <ButtonGroup size="lg" className="mb-2">
                <Button variant="secondary" size="lg"><NavLink to={`/category/figuras`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Figuras</NavLink></Button>
                <Button variant="secondary" size="lg"><NavLink to={`/category/posters`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Posters</NavLink></Button>
                <Button variant="secondary" size="lg"><NavLink to={`/category/consolas`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Consolas</NavLink></Button>
                <Button variant="secondary" size="lg"><NavLink to={`/category/accesorios`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Accesorios</NavLink></Button>
                <Button variant="secondary" size="lg"><NavLink to={`/category/geek`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Geek</NavLink></Button>
            </ButtonGroup>
            </div>
            <CartWidget/>
        </nav>
    )
}
export default NavBar