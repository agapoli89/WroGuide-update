import '../../../../../styles/fontello-72a473c8/css/fontello.css';
import { NavHashLink as Link } from 'react-router-hash-link';

const ContactDataBox = ({ name, href, icon, styleClass}) => {

    const scrollWithOffset = (el, offset) => {
        window.scroll({
          top: el.offsetTop - offset,
          left: 0,
          behavior: "smooth"
        });
    };

    const linkToForm = (
        <Link 
            activeclass="active"
            to="/#contact-form" 
            scroll={(el) => scrollWithOffset(el, 55)}
            exact
            className="contact__link"
        >
            <button className={styleClass}>
                <i className={icon}></i>
                <span>{name}</span>
            </button>
        </Link>
    )
    return (  
        <>
        {name === 'Przez formularz' 
            ? linkToForm 
            : (
                <a target={name ==='Facebook' ? "_blank" : null} rel="noreferrer" className="contact__link" href={href}>
                    <button className={styleClass}>
                        <i className={icon}></i>
                        <span>{name}</span>
                    </button>
                </a> 
            )}
        </>
    );
}
 
export default ContactDataBox; 