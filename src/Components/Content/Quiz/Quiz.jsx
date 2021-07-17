import { useState } from 'react';

import QuizStart from './QuizStart';
import QuizQuestion from './QuizQuestion';
import QuizSummary from './QuizSummary';
import { quizData } from './QuizData';

import './Quiz.scss';

const Quiz = () => {
    const [slideNumber, setSlideNumber] = useState(0);
    const [answerIsNotSelected, setAnswerIsNotSelected] = useState(false);
    const [isAnswerVisible, setIsAnswerVisible] = useState(false);
    const [score, setScore] = useState(0);

    const handleChangeSlide = () => {
        if (slideNumber === 6) {
            setSlideNumber(0);
            return;
        }
        if (isAnswerVisible || slideNumber === 0) {
            setSlideNumber(prev => prev + 1);
            setIsAnswerVisible(false);
            setAnswerIsNotSelected(false);
            return;
        } 
        checkCorrectAnswer();
    }

    const checkCorrectAnswer = (selectedAnswer, number) => {

        console.log(number);
        console.log(selectedAnswer);
        const isAnswerCorrect = quizData.filter(question => question.id === number);
        console.log(isAnswerCorrect);

        setScore(prev => prev + 1)
        setIsAnswerVisible(true);
        setAnswerIsNotSelected(false);
    }

    const handleNoAnswerSelected = () => {
        setAnswerIsNotSelected(true);
    }

    const quizContent = slideNumber === 0 
    ? <QuizStart click={handleChangeSlide}/> 
    : slideNumber === 6
        ? <QuizSummary score={score} click={handleChangeSlide}/>
        : <QuizQuestion number={slideNumber} isAnswerVisible={isAnswerVisible} answerIsNotSelected={answerIsNotSelected} clickChangeSlide={handleChangeSlide} clickCheckAnswer={checkCorrectAnswer} clickNoAnswerSelected={handleNoAnswerSelected}/>;

    return (  
        <section id="quiz" className="section quiz">
            {quizContent} 
        </section>
    );
}
 
export default Quiz;