import './Contact.scss';
import ContactData from './ContactData/ContactData';
import ContactForm from './ContactForm/ContactForm';

const Contact = () => {
    return (  
        <section className="section contact">
            <h2 className="contact__header">Kontakt ze mną:</h2>
            <ContactData />
            <ContactForm />
        </section>
    );
}
 
export default Contact;