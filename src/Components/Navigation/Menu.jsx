import './Menu.scss';

const Menu = () => {
    return (  
        <aside className="menu">
            <nav className="navbar navbar-dark menu__toggler">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
            <ul className="collapse show menu__list" id="navbarToggleExternalContent">
                <li class="nav-item">
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