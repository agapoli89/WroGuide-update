import { useState } from 'react';
import {useMediaQuery} from 'react-responsive';

import './Menu.scss';

const Menu = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const isNotMobileMenu = useMediaQuery({ query: '(min-width:576px)' });

    const toggleMenu = () => setIsMenuVisible(prev => !prev);

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
					<a className="nav-link menu__link" id="about-me" href="#">O mnie</a>
				</li>
				<li className="nav-item">
					<a className="nav-link menu__link" id="offert" href="#">Co oferuję?</a>
				</li>
				<li className="nav-item">
					<a className="nav-link menu__link" id="about-wroclaw" href="#">Wrocław</a>
				</li> 
				<li className="nav-item">
					<a className="nav-link menu__link" id="quiz" href="#">Quiz</a>
				</li>
				<li className="nav-item">
					<a className="nav-link menu__link" id="contact" href="#">Kontakt</a>
				</li> 
            </ul>
         </aside>
    );
}
 
export default Menu;