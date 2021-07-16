import { useState } from 'react';

import Button from '../../Button/Button';
import QuizStart from './QuizStart';
import QuizQuestion from './QuizQuestion';
import QuizSummary from './QuizSummary';

import './Quiz.scss';

const Quiz = () => {
    const [slideNumber, setSlideNumber] = useState(0);
    const [isAnswerVisible, setIsAnswerVisible] = useState(false);

    const quizContent = slideNumber === 0 
        ? <QuizStart /> 
        : slideNumber === 6
            ? <QuizSummary />
            : <QuizQuestion number={slideNumber} isAnswerVisible={isAnswerVisible}/>;

    const buttonText = slideNumber === 0 
        ? "Zapraszam do quizu!" 
        : slideNumber === 5 & isAnswerVisible
            ? "Sprawdź wynik"
            : slideNumber === 6
                ? "Spróbuj jeszcze raz"
                : !isAnswerVisible 
                ? "Sprawdź"
                : "Następne pytanie"

    const handleChangeSlide = () => {
        if (slideNumber === 6) {
            setSlideNumber(0);
            return;
        }
        if (isAnswerVisible || slideNumber === 0) {
            setSlideNumber(prev => prev + 1);
            setIsAnswerVisible(false);
            return;
        } 
        setIsAnswerVisible(true)
    }

    return (  
        <section id="quiz" className="section quiz">
            {quizContent}
            <Button text={buttonText} click={handleChangeSlide} /> 
        </section>
    );
}
 
export default Quiz;