import Expand from 'react-expand-animated';

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
    
    const currentQuestion = quizData.find(({id}) => id === number);
    const checkedAnswer = currentQuestion.answers.find(answer => answer.id === selectedAnswer);

    const currentAnswers = currentQuestion.answers.map(({id, key, text}) => (
        <label key={key}>
            <input 
                type="radio" 
                value={id} 
                name={number}  
                disabled={isAnswerVisible && true} 
                onChange={changeAnswer}
                className="radio"
            /> {text}
        </label>
    ))
    
    const answerToDisplay = isAnswerVisible
        ? (
            <>
                <p className={`alert ${checkedAnswer.correct ? "alert-success" : "alert-danger"} mt-4`}>{checkedAnswer.comment}</p>
                <p>{currentQuestion.correctAnswer}</p>
            </>
        ) 
        : answerIsNotSelected
            ? (<p className='alert alert-danger mt-4'>Zaznacz jedną z odpowiedzi</p>)
            : '' 

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
            <h4>{`${number}. ${currentQuestion.question}`}</h4>
            {currentAnswers}
            <Expand open={isAnswerVisible || answerIsNotSelected}>
                {answerToDisplay}
            </Expand>
            <Button text={buttonText} click={clickFunction} />
        </>
    );
}
 
export default QuizQuestion;