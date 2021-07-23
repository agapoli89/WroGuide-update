import ContactData from './ContactData/ContactData';
import ContactForm from './ContactForm/ContactForm';

import './Contact.scss';

const Contact = () => {
    return (  
        <section id="contact" className="section contact">
            <h2 className="contact__header">Kontakt ze mną:</h2>
            <ContactData />
            <ContactForm />
        </section>
    );
}
 
export default Contact;