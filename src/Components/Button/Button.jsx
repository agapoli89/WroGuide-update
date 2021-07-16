import './Button.scss';

const Button = ({
    text, 
    additionalClass,
    type="button",
    click
    }) => {
    return (  
        <button 
            type={type}
            className={`btn button button--center px-4 ${additionalClass}`}
            onClick={click}
        >
            {text}
        </button>
    );
}
 
export default Button;