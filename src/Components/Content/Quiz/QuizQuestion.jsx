import { quizData } from './QuizData';
import Button from '../../Button/Button';

const QuizQuestion = ({ number, isAnswerVisible, answerIsNotSelected, clickChangeSlide, clickCheckAnswer, clickNoAnswerSelected, selectedAnswer, changeAnswer, inputChecked, handleChangeInputChecked }) => {
    
    const currentQuestion = quizData.filter(({id}) => id === number);

    const currentAnswers = currentQuestion[0].answers.map(({id, text}) => (
        <label key={id}>
            <input type="radio" value={id} name={number} checked={inputChecked} onChange={handleChangeInputChecked} onClick={changeAnswer}/> {text}
        </label>
    ))
    
    const answerToDisplay = isAnswerVisible
        ? (
            <>
                <p>{currentQuestion[0].answers.filter(answer => answer.id === selectedAnswer)[0].comment}</p>
                <p>{currentQuestion[0].correctAnswer}</p>
            </>
        ) 
        : answerIsNotSelected
            ? (<p>Zaznacz jedną z odpowiedzi</p>)
            : null

    const buttonText = !isAnswerVisible 
        ? "Sprawdź"
        : number === 5
            ? "Sprawdź wynik"
            : "Następne pytanie"

    const clickFunction = buttonText === "Sprawdź" & selectedAnswer
        ? clickCheckAnswer
        : selectedAnswer
            ? clickChangeSlide
            : clickNoAnswerSelected

    return (  
        <>
            <h4>{`${number}. ${currentQuestion[0].question}`}</h4>
            {currentAnswers}
            {answerToDisplay}
            <Button text={buttonText} click={clickFunction} />
        </>
    );
}
 
export default QuizQuestion;