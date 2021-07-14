import Invitation from "./Invitation/Invitation";
import AboutMe from "./AboutMe/AboutMe";
import Offert from "./Offert/Offert";
import AboutWroclaw from "./AboutWroclaw/AboutWroclaw";
import Quiz from "./Quiz/Quiz";
import Contact from "./Contact/Contact";

const Content = () => {
    return (  
        <main>
            <Invitation />
            <AboutMe id="about-me"/>
            <Offert />
            <AboutWroclaw />
            <Quiz />
            <Contact />
        </main>
    );
}
 
export default Content;