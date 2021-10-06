import Button from '../../Button/Button';

const QuizSummary = ({click, score}) => {

    const goodScoreComment = score === 3
    ? "Widać, że masz sporą wiedzę o Wrocławiu, ale wciąż znajdzie się parę ciekawostek, które mogą Cię zainteresować. Zapraszam na wycieczkę!"
    : "Gratulacje! Twoja wiedza o Wrocławiu jest imponująca! Czas zastanowić się nad zrobieniem kursu na przewodnika :)"

    const comment = score <= 2
        ? "Zdecydowanie przyda Ci się wycieczka po Wrocławiu z przewodnikiem :) Zapraszam!"
        : goodScoreComment

    return (  
        <>
            <p>Twój wynik: {score}/5</p>
            <p>{comment}</p>
            <Button text="Spróbuj jeszcze raz" click={click} /> 
        </>
    );
}
 
export default QuizSummary;