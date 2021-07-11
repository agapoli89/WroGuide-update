import ContactDataBox from "./ContactDataBox/ContactDataBox";

const contactDataElements = [
    {
        name: 'agapoli@gmail.com',
        href: 'mailto:agapoli@gmail.com',
        icon: 'icon-mail contact__icon',
        styleClass: 'contact__data__box',
    },
    {
        name: '+48508071833',
        href: 'tel:+48508071833',
        icon: 'icon-phone contact__icon',
        styleClass: 'contact__data__box',
    },
    {
        name: 'Facebook',
        href: 'https://www.facebook.com/agnieszka.polinska.9',
        icon: 'icon-facebook contact__icon',
        styleClass: 'contact__data__box',
    },
    {
        name: 'Przez formularz',
        href: '#',
        icon: 'icon-right-outline contact__icon contact__icon--arrow-mobile',
        styleClass: 'contact__data__box contact__data__box--outstanding',
    },
]

const ContactData = () => {

    const contactDataBoxes = contactDataElements.map(contactDataElement => (
        <ContactDataBox key={contactDataElement.name} {...contactDataElement}/>
    ))

    return (  
        <div className="contact__data">
            {contactDataBoxes}
        </div>
    );
}
 
export default ContactData;