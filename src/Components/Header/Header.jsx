import headerLogo from '../../images/logo.png';

import './Header.scss';

const Header = () => {
    return (  
     <header className="header">
        <img src={headerLogo} className="header__logo" alt="logo" />
        <h1 className="header__title fw-light">Przewodniczka po&nbsp;Wrocławiu</h1>
     </header>
    );
}
 
export default Header;