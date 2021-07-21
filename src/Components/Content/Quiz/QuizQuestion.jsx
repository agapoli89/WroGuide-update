import { quizData } from './QuizData';
import Button from '../../Button/Button';

const QuizQuestion = ({ 
        number, 
        isAnswerVisible, 
        answerIsNotSelected, 
        clickChangeSlide, 
        clickCheckAnswer, 
        clickNoAnswerSelected, 
        selectedAnswer, 
        changeAnswer, 
    }) => {
    
    const currentQuestion = quizData.filter(({id}) => id === number);
    const checkedAnswer = currentQuestion[0].answers.filter(answer => answer.id === selectedAnswer)[0];

    const currentAnswers = currentQuestion[0].answers.map(({id, text}) => (
        <label key={id}>
            <input 
                type="radio" 
                value={id} 
                name={number}  
                disabled={isAnswerVisible ? true : false} 
                onChange={changeAnswer}
            /> {text}
        </label>
    ))
    
    const answerToDisplay = isAnswerVisible
        ? (
            <>
                <p className={`alert ${checkedAnswer.correct ? "alert-success" : "alert-danger"} mt-4`}>{checkedAnswer.comment}</p>
                <p>{currentQuestion[0].correctAnswer}</p>
            </>
        ) 
        : answerIsNotSelected
            ? (<p className='alert alert-danger mt-4'>Zaznacz jedną z odpowiedzi</p>)
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