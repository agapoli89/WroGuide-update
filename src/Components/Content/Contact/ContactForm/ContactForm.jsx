import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

import Button from '../../../Button/Button';

const ContactForm = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [feedbackMessage, setFeedbackMessage] = useState(null);

    const handleEmailChange = e => setEmail(e.target.value);
    const handleMessageChange = e => setMessage(e.target.value);

    const emailInput = useRef('');
    const messageInput = useRef('');

    const serviceID = 'gmail';
    const templateID = 'template_572pfwp';
    
    const submitForm = e => {
        e.preventDefault();

        const validatedEmail = validateEmail(email);
        const validatedMessage = validateMessage(message);

        !validatedEmail ? emailInput.current.classList.add("is-invalid") : emailInput.current.classList.remove("is-invalid");;

        !validatedMessage ? messageInput.current.classList.add("is-invalid") : messageInput.current.classList.remove("is-invalid");

        if (validatedEmail && validatedMessage) sendMessage(email, message);
    }

    const validateEmail = email => {
        // re from: "https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript";
        
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const validateMessage = message => message.length > 10;

    const sendMessage = (email, message) => {

        const emailParams = {
            message: message,
            reply_to: email,
        }
        
        emailjs.send(serviceID, templateID, emailParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                setFeedbackMessage((
                    <div className="alert alert-success" role="alert">Dziękuję za wiadomość! Odpowiem najszybciej, jak to możliwe :)</div>
                ));
            }, function(error) {
                console.log('FAILED...', error);
                setFeedbackMessage((
                    <div className="alert alert-danger" role="alert">Nie udało się wysłać wiadomości. Spróbuj ponownie później lub wybierz inny sposób kontaktu :)</div>
                ));
        }); 

        setEmail('');
        setMessage('');
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
                    <input ref={emailInput} type="email" className="form-control" id="email" placeholder="nazwa@domena"  value={email} onChange={handleEmailChange}/>
                    <div className="invalid-feedback contact__form__invalid-feedback">Proszę, wpisz adres email w odpowiednim formacie.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Wiadomość</label>
                    <textarea ref={messageInput} className="form-control" id="message" placeholder="Zapraszam do kontaktu :)" rows="3" value={message} onChange={handleMessageChange}></textarea>
                    <div className="invalid-feedback contact__form__invalid-feedback">Wiadomość musi mieć minimum 10 znaków.</div>
                </div>
                {feedbackMessage}
                <Button type="submit" text="Wyślij" additionalClass="contact-button" click={submitForm}/>
            </form>
        </div>
    );
}
 
export default ContactForm;