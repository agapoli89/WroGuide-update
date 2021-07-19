import Button from '../../Button/Button';

const QuizSummary = ({click, score}) => {
    return (  
        <>
            <p>Twój wynik: {score}/5</p>
            <Button text="Spróbuj jeszcze raz" click={click} />
        </>
    );
}
 
export default QuizSummary;