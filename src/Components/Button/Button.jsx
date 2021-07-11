import './Button.scss';

const Button = ({text, additionalClass}) => {
    return (  
        <button type="submit" className={`btn button button--center px-4 ${additionalClass}`}>{text}</button>
    );
}
 
export default Button;