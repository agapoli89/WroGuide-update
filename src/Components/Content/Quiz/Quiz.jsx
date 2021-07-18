import { useState } from 'react';

import QuizStart from './QuizStart';
import QuizQuestion from './QuizQuestion';
import QuizSummary from './QuizSummary';
import { quizData } from './QuizData';

import './Quiz.scss';

const Quiz = () => {
    const [slideNumber, setSlideNumber] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [answerIsNotSelected, setAnswerIsNotSelected] = useState(false);
    const [isAnswerVisible, setIsAnswerVisible] = useState(false);
    const [score, setScore] = useState(0);
    const [questionNumber, setQuestionNumber] = useState(null);
    const [inputChecked, setInputChecked] = useState(false);

    const handleChangeInputChecked = () => setInputChecked(true);

    const handleChangeSlide = () => {
        if (slideNumber === 6) {
            setSlideNumber(0);
            return;
        }
        if (isAnswerVisible || slideNumber === 0) {
            setInputChecked(false);
            setSelectedAnswer('');
            setSlideNumber(prev => prev + 1);
            setIsAnswerVisible(false);
            setAnswerIsNotSelected(false);
            return;
        } 
        checkCorrectAnswer();
    }

    const handleOnChangeAnswer = e => {
        setSelectedAnswer(e.target.value);
        setQuestionNumber(e.target.name);
    }

    const checkCorrectAnswer = () => {

        const currentQuestion = quizData.filter(question => question.id === Number(questionNumber))[0];
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
            clickChangeSlide={handleChangeSlide} 
            clickCheckAnswer={checkCorrectAnswer} 
            clickNoAnswerSelected={handleNoAnswerSelected}
            selectedAnswer={selectedAnswer}
            changeAnswer={handleOnChangeAnswer}
            inputChecked={inputChecked}
            handleChangeInputChecked={handleChangeInputChecked}
          />;

    return (  
        <section id="quiz" className="section quiz">
            {quizContent} 
        </section>
    );
}
 
export default Quiz;