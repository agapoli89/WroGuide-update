import { quizData } from './QuizData';
import Button from '../../Button/Button';
import { useState } from 'react';

const QuizQuestion = ({ number, isAnswerVisible, answerIsNotSelected, clickChangeSlide, clickCheckAnswer, clickNoAnswerSelected }) => {
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const currentQuestion = quizData.filter(({id}) => id === number);

    const handleInputClick = (e) => {
        setSelectedAnswer(e.target.value)
    }
    const currentAnswers = currentQuestion[0].answers.map(({id, text}) => (
        <label key={id}>
            <input type="radio" value={id} name={`q${number}`} onClick={handleInputClick}/> {text}
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
        ? () => clickCheckAnswer(selectedAnswer, number) 
        : selectedAnswer
            ? clickChangeSlide
            : clickNoAnswerSelected

    return (  
        <>
            <h4>{`${number}. ${currentQuestion[0].question}`}</h4>
            {currentAnswers}
            {answerToDisplay}
            <Button text={buttonText} click={clickFunction}/>
        </>
    );
}
 
export default QuizQuestion;