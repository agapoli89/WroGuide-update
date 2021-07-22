import { useRef } from 'react';
import emailjs from 'emailjs-com';

import Button from '../../../Button/Button';

const ContactForm = () => {
    const email = useRef('');
    const message = useRef('');

    const serviceID = 'gmail';
    const templateID = 'template_572pfwp';
    
    const emailParams = {
        name: email.current.value,
        message: message.current.value + ' FROM: ' + email.current.value,
    }

    const submitForm = e => {
        e.preventDefault();

        emailjs.send(serviceID, templateID, emailParams)
            .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
            console.log('FAILED...', error);
        }); 
    }

    (function(){
        emailjs.init("user_4DqKIFqhrE66lb857uE8a");
    })();

    return (  
        <div id="contact-form" className="contact__form-wrapper">
            <h3>Formularz</h3>
            <form className="contact__form">
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Adres e-mail</label>
                    <input ref={email} type="email" className="form-control" id="email" placeholder="nazwa@domena" />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Wiadomość</label>
                    <textarea ref={message} className="form-control" id="message" placeholder="Zapraszam do kontaktu :)" rows="3"></textarea>
                </div>
                <Button type="submit" text="Wyślij" additionalClass="contact-button" click={submitForm}/>
            </form>
        </div>
    );
}
 
export default ContactForm;