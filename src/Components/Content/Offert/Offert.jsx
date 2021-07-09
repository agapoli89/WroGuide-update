import offertImage from '../../../images/turysci.png';

import './Offert.scss'

const Offert = () => {
    return (  
        <section className="section offert">
            <h2>Co oferuję?</h2>
            <p>Oprowadzam wycieczki grupowe i&nbsp;indywidualne, piesze i&nbsp;rowerowe. W&nbsp;różnych przedziałach wiekowych. Moim głównym celem jest: nie zanudzić słuchacza :)&nbsp;opowiedzieć wszystko jak najzwięźlej, ale też jak najpełniej i&nbsp;najciekawiej się da. Na życzenie mogę przygotować i&nbsp;poprowadzić grę miejską (nie mam gotowych szablonów- staram się dostosowywać zadania do wieku i&nbsp;preferencji uczestników).</p>
            <p>Cena ustalana jest indywidualnie, w zależności od czasu trwania wycieczki, terminu i&nbsp;wielkości grupy.</p>
            <p>Napisz lub zadzwoń, przedstaw swoje oczekiwania, a&nbsp;ja postaram się przygotować ofertę najlepiej dostosowaną do Twoich potrzeb.</p>
            <img class="img-fluid" src={offertImage} alt="co oferuję"></img>
        </section>
    );
}
 
export default Offert;