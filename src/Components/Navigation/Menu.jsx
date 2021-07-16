import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { NavHashLink as Link } from 'react-router-hash-link';

import './Menu.scss';

const Menu = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const isNotMobileMenu = useMediaQuery({ query: '(min-width:576px)' });

    const toggleMenu = () => setIsMenuVisible(prev => !prev);

    //function from: https://codesandbox.io/s/04rsh?file=/src/components/Navbar.jsx:977-1018
    const scrollWithOffset = (el, offset) => {
        window.scroll({
          top: el.offsetTop - offset,
          left: 0,
          behavior: "smooth"
        });
    };

    return (  
        <aside className="menu">
            <nav className="navbar navbar-dark menu__toggler">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleMenu}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
            <ul className={`collapse ${isNotMobileMenu | isMenuVisible && 'show'} menu__list`} id="navbarToggleExternalContent">
                <li className="nav-item">
                    <Link 
                        activeclass="active"
                        to="/#about-me" 
                        scroll={(el) => scrollWithOffset(el, 55)}
                        exact
                        className="nav-link menu__link"
                        onClick={!isNotMobileMenu ? toggleMenu : undefined}
                    >
                        O mnie
                    </Link>
				</li>
				<li className="nav-item">
                    <Link 
                        activeclass="active"
                        to="/#offert" 
                        scroll={(el) => scrollWithOffset(el, 55)}
                        exact
                        className="nav-link menu__link"
                        onClick={!isNotMobileMenu ? toggleMenu : undefined}
                    >
                        Co oferuję
                    </Link>
				</li>
				<li className="nav-item" >
                    <Link 
                        activeclass="active"
                        to="/#about-wroclaw"
                        scroll={(el) => scrollWithOffset(el, 55)} 
                        exact
                        className="nav-link menu__link"
                        onClick={!isNotMobileMenu ? toggleMenu : undefined}
                    >
                        Wrocław
                    </Link>
				</li> 
				<li className="nav-item">
                    <Link 
                        activeclass="active"
                        to="/#quiz" 
                        scroll={(el) => scrollWithOffset(el, 55)}
                        exact
                        className="nav-link menu__link"
                        onClick={!isNotMobileMenu ? toggleMenu : undefined}
                    >
                        Quiz
                    </Link>
				</li>
				<li className="nav-item">
                    <Link 
                        activeclass="active"
                        to="/#contact" 
                        scroll={(el) => scrollWithOffset(el, 55)}
                        exact
                        className="nav-link menu__link"
                        onClick={!isNotMobileMenu ? toggleMenu : undefined}
                    >
                        Kontakt
                    </Link>
				</li> 
            </ul>
         </aside>
    );
}
 
export default Menu;