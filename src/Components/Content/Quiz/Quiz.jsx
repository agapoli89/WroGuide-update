import { useRef, useState } from 'react';

import { quizData } from './QuizData';
import { scrollWithOffset } from '../../../helpers/ScrollWithOffset';
import QuizStart from './QuizStart';
import QuizQuestion from './QuizQuestion';
import QuizSummary from './QuizSummary';

import './Quiz.scss';

const Quiz = () => {
    const [slideNumber, setSlideNumber] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [answerIsNotSelected, setAnswerIsNotSelected] = useState(false);
    const [isAnswerVisible, setIsAnswerVisible] = useState(false);
    const [score, setScore] = useState(0);

    const quizSection = useRef('');

    const handleChangeSlide = () => {
        if (slideNumber === 6) {
            setSlideNumber(0);
            setScore(0);
            setSelectedAnswer('');
            return;
        }
        if (isAnswerVisible || slideNumber === 0) {
            /* setSelectedAnswer(''); */
            scrollWithOffset(quizSection.current, 55)
            setSlideNumber(prev => prev + 1);
            setIsAnswerVisible(false);
            setAnswerIsNotSelected(false);
            return;
        } 
        checkCorrectAnswer();
    }

    const handleOnChangeAnswer = e => setSelectedAnswer(e.target.value);

    const checkCorrectAnswer = () => {

        const currentQuestion = quizData.filter(question => question.id === Number(slideNumber))[0];
        const correctAnswer = currentQuestion.answers.filter(answer => answer.correct === true)[0].id;

        if (correctAnswer === selectedAnswer) {
            setScore(prev => prev + 1);
        }
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
        : <QuizQuestion 
            number={slideNumber} 
            isAnswerVisible={isAnswerVisible} 
            answerIsNotSelected={answerIsNotSelected} 
            selectedAnswer={selectedAnswer}
            clickChangeSlide={handleChangeSlide} 
            clickCheckAnswer={checkCorrectAnswer} 
            clickNoAnswerSelected={handleNoAnswerSelected}
            changeAnswer={handleOnChangeAnswer}
          />;

    return (  
        <section ref={quizSection} id="quiz" className="section quiz">
            {quizContent} 
        </section> 
    );
}
 
export default Quiz;