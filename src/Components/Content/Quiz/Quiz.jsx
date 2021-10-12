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

    const offsetToScroll = 55;
    const notQuestionSlides = 2;
    const slidesLength = quizData.length + notQuestionSlides;

    const quizSection = useRef('');

    const resetQuiz = () => {
        setSlideNumber(0);
        setScore(0);
        setSelectedAnswer('');
    }

    const handleChangeSlide = () => {
        if (slideNumber === slidesLength - 1) {
            resetQuiz();
            return;
        }
        if (isAnswerVisible || slideNumber === 0) {
            scrollWithOffset(quizSection.current, offsetToScroll)
            setSlideNumber(prev => prev + 1);
            setIsAnswerVisible(false);
            setAnswerIsNotSelected(false);
            return;
        } 
        checkCorrectAnswer();
    }

    const handleOnChangeAnswer = e => setSelectedAnswer(e.target.value);

    const checkCorrectAnswer = () => {

        const currentQuestion = quizData.find(question => question.id === Number(slideNumber));
        const correctAnswer = currentQuestion.answers.find(answer => answer.correct === true).id;

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