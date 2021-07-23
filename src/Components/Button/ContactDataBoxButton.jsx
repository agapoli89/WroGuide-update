const ContactDataBoxButton = ({styleClass, icon, name}) => {
    return (  
        <button className={styleClass}>
            <i className={icon}></i>
            <span>{name}</span>
        </button>
    );
}
 
export default ContactDataBoxButton;