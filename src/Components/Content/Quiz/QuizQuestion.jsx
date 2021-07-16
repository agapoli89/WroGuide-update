import { quizData } from './QuizData';

const QuizQuestion = ({number, isAnswerVisible}) => {
    const currentQuestion = quizData.filter(({id}) => id === number);
    const currentAnswers = currentQuestion[0].answers.map(({id, text}) => (
        <label key={id}>
            <input type="radio" value={id} name={`q${number}`} /> {text}
        </label>
    ))
    
    const correctAnswerToDisplay = isAnswerVisible === true ? currentQuestion[0].correctAnswer : null
    
    return (  
        <>
            <h4>{`${number}. ${currentQuestion[0].question}`}</h4>
            {currentAnswers}
            <p>{correctAnswerToDisplay}</p>
        </>
    );
}
 
export default QuizQuestion;