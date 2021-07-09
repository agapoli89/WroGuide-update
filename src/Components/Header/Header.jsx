import logo from '../../images/logo.png';

import './Header.scss';

const Header = () => {
    return (  
     <header className="header">
        <img src={logo} className="header__logo" alt="logo" />
        <h1 className="header__title fw-light">Przewodniczka po Wrocławiu</h1>
     </header>
    );
}
 
export default Header;