import Button from '../../../Button/Button'

const ContactForm = () => {
    return (  
        <div id="contact-form" className="contact__form-wrapper">
            <h3>Formularz</h3>
            <form className="contact__form">
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Adres e-mail</label>
                    <input type="email" className="form-control" id="email" placeholder="nazwa@domena" />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Wiadomość</label>
                    <textarea className="form-control" id="message" placeholder="Zapraszam do kontaktu :)" rows="3"></textarea>
                </div>
                <Button type="submit" text="Wyślij" additionalClass="contact-button" />
            </form>
        </div>
    );
}
 
export default ContactForm;