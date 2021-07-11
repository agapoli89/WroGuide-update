import '../../../../../styles/fontello-72a473c8/css/fontello.css';

const ContactDataBox = ({ name, href, icon, styleClass}) => {
    return (  
        <a className="contact__link" href={href}>
            <div className={styleClass}>
                <i className={icon}></i>
                <span>{name}</span>
            </div>
        </a>
    );
}
 
export default ContactDataBox;