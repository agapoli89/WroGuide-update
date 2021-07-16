import ScrollToTop from "react-scroll-to-top";

const Arrow = () => {
    return (  
        <ScrollToTop 
            smooth 
            color="#fff" 
            style={{ 
                backgroundColor: "transparent",
                right: '0px',
                boxShadow: 'none',
            }}/>
    );
}
 
export default Arrow;