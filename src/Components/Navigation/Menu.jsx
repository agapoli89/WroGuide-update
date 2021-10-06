import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { NavHashLink as Link } from 'react-router-hash-link';

import { scrollWithOffset } from '../../helpers/ScrollWithOffset';

import './Menu.scss';

const menuData = [
    {
        text: "O mnie",
        url: "/#about-me"
    },
    {
        text: "Co oferuję",
        url: "/#offert"
    },
    {
        text: "Wrocław",
        url: "/#about-wroclaw"
    },
    {
        text: "Quiz", 
        url: "/#quiz"
    },
    {
        text: "Kontakt",
        url: "/#contact"
    }
]

const Menu = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const isNotMobileMenu = useMediaQuery({ query: '(min-width:576px)' });
    const offsetToScroll = 55;

    const toggleMenu = () => setIsMenuVisible(prev => !prev);

    const LinkToDisplay = ({text, url}) => (
        <Link 
            to={url} 
            scroll={(el) => scrollWithOffset(el, offsetToScroll)}
            exact
            className="nav-link menu__link"
            onClick={!isNotMobileMenu ? toggleMenu : undefined}
        >
            {text}
        </Link>
    )

    const liToDisplay = menuData.map(({text, url}) => (
        <li className="nav-item">
            <LinkToDisplay text={text} url={url}/>
		</li>
    ))

    return (  
        <aside className="menu">
            <nav className="navbar navbar-dark menu__toggler">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleMenu}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
            <ul className={`collapse ${(isNotMobileMenu || isMenuVisible) && 'show'} menu__list`} id="navbarToggleExternalContent">
                {liToDisplay}
            </ul>
         </aside>
    );
}
  
export default Menu;