import wroclawImage from '../../../images/wroclaw_uniwersytet_wroclawski_o_poranku.jpg';

import './AboutWroclaw.scss';

const AboutWroclaw = () => {
    return (  
        <section className="section about-wroclaw">
            <h2>Wrocław</h2>
            <p>
                ... to miasto, którego właściwie nikomu nie trzeba        przedstawiać. Stolica Dolnego Śląska, piąte pod względem powierzchni, a czwarte co do liczby mieszkańców miasto w Polsce, jeden z głównych ośrodków uniwersyteckich w kraju itp.
            </p>
            {/*źródło i licencja: https://pl.wikipedia.org/wiki/Plik:Wroclaw_-_Uniwersytet_Wroclawski_o_poranku.jpg*/}
            <img src={wroclawImage} alt="Uniwersytet Wrocławski" className="float-lg-right img-fluid ml-lg-3 my-3 rounded about-wroclaw__image"></img>
            <p>
                Ja podczas swoich wycieczek, chciałabym również zwrócić uwagę na wielokulturowość Wrocławia, jego zawiłe dzieje, które sprawiły że dzisiaj wygląda tak a&nbsp;nie inaczej. Dlaczego obok średniowiecznego ratusza znajduje się modernistyczny biurowiec z lat 30., a&nbsp;kilka ulic dalej zabudowa plombowa z lat 90. XX wieku? Skąd we Wrocławiu Synagoga? I co tu właściwie robią krasnoludki? Na te i inne pytania postaram się odpowiedzieć w czasie moich wycieczek. Będzie też sporo ciekawostek, a jeżeli czas pozwoli to i&nbsp;legend, które bezsprzecznie tworzą klimat miasta.
            </p>
        </section>
    );
}
 
export default AboutWroclaw;