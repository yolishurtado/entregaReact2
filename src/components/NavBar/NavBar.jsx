import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'
import { Link } from "react-router-dom"

const NavBar = () => {
    const imgMarolio = "https://www.marolio.com.ar/sites/all/themes/theme1043/logo.png";
    return (
        <header>
            <Link to={"/"}>
                <img className="imgMarolio" src={imgMarolio} alt="" />
            </Link>

            <nav>
                <ul>
                    <li>
                        <Link to={"/categoria/2"}> Lácteos </Link>
                    </li>

                    <li>
                        <Link to={"/categoria/3"}> Almacén </Link>
                    </li>
                </ul>
            </nav>

            <CartWidget />

        </header>
    )
}

export default NavBar;