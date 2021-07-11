import aboutMeImage from '../../../images/aga.jpg'

import './AboutMe.scss'

const AboutMe = () => {
    return (  
        <section className="section about-me">
            <h2>Kim jestem?</h2>
            <img src={aboutMeImage} alt="ja" className="float-lg-left img-fluid mr-lg-3 my-3 rounded about-me__image"></img>
            <p>
                Urodziłam się we Wrocławiu i&nbsp;tu spędziłam większość życia. Odkąd pamiętam interesowało mnie wszystko co związane z&nbsp;tym miastem: jego dzieje, architektura czy kultura. Pewnie dlatego zdecydowałam się studiować historię na Uniwersytecie Wrocławskim (staram się jednak nie zanudzać swoich słuchaczy przytaczaniem jedynie pustych dat!). Odkąd ukończyłam kurs przewodnika po Wrocławiu, co chwilę odkrywam nowe aspekty miasta oraz przekonuję się jak inspirujące może być dzielenie się wiedzą, które przy okazji daje możliwość poznania innych perspektyw i&nbsp;punktów widzenia.
            </p>
            <p className="m-0">
                Prywatnie uwielbiam spędzać czas z moimi psami, chodzić na długie spacery (czy to po wrocławskich parkach czy po&nbsp;górach), podróżować, czytać książki&nbsp;i ćwiczyć jogę. Ostatnio coraz więcej czasu poświęcam front-endowi, czego efektem jest ta strona&nbsp;:)
            </p>
        </section>
    );
}
 
export default AboutMe;