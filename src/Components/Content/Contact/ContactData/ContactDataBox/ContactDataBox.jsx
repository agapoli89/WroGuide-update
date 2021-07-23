import '../../../../../styles/fontello-72a473c8/css/fontello.css';
import { NavHashLink as Link } from 'react-router-hash-link';
import { scrollWithOffset } from '../../../../../helpers/ScrollWithOffset';
import ContactDataBoxButton from '../../../../Button/ContactDataBoxButton';

const ContactDataBox = ({ name, href, icon, styleClass}) => {

    const linkToForm = (
        <Link 
            activeclass="active"
            to="/#contact-form" 
            scroll={(el) => scrollWithOffset(el, 55)}
            exact
            className="contact__link"
        >
            <ContactDataBoxButton styleClass={styleClass} icon={icon} name={name}/>
        </Link>
    )
    return (  
        <>
        {name === 'Przez formularz' 
            ? linkToForm 
            : (
                <a target={name ==='Facebook' ? "_blank" : null} rel="noreferrer" className="contact__link" href={href}>
                    <ContactDataBoxButton styleClass={styleClass} icon={icon} name={name}/>
                </a> 
            )}
        </>
    );
}
 
export default ContactDataBox; 