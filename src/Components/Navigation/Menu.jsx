import './Menu.scss';

const Menu = () => {
    return (  
        <nav className="navbar navbar-expand-lg navbar-dark py-0 menu">
            <button className="navbar-toggler menu__button" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                <span className="navbar-toggler-icon"></span>
            </button>

            {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto lista">
                    <li className="nav-item bg-pozycja">
                        <a className="nav-link" id="o_mniel" href="#">O mnie</a>
                    </li>
                    <li className="nav-item bg-pozycja">
                        <a className="nav-link" id="co_oferujel" href="#">Co oferuję?</a>
                    </li>
                    <li className="nav-item bg-pozycja">
                        <a className="nav-link" id="wroclawl" href="#">Wrocław</a>
                    </li>
                    <li className="nav-item bg-pozycja">
                        <a className="nav-link" id="quizl" href="#">Quiz</a>
                    </li>
                    <li className="nav-item bg-pozycja">
                        <a className="nav-link" id="kontaktl" href="#">Kontakt</a>
                    </li>
                </ul>
            </div> */}
	</nav>
    );
}
 
export default Menu;