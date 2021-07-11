import inviteImage from '../../../images/turysta_wroclaw_krasnal.jpg'

import './Invitation.scss'

const Invitation = () => {
    return (  
        <section className="section invitation">
            <p className="invitation__quotation">
                <q>Ze wszystkich miast, które odwiedziliśmy w&nbsp;Europie, Wrocław był największą
                niespodzianką. Nie możemy się doczekać powrotu...</q>
                <cite>Len&nbsp;Rutledge</cite>
			</p>
            <p className="invitation__from-guide">
                Zapraszam na wycieczkę! Agnieszka&nbsp;Polińska - przewodniczka po&nbsp;Wrocławiu :)
			</p>
            <figure className='invitation__image-wrapper'>
                <img src={inviteImage}  alt="turysta" className="invitation__image img-fluid rounded"/>
            </figure>
		</section>
    );
}
 
export default Invitation;