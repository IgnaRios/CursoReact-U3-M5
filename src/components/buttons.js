import { useDispatch } from "react-redux";
import './button.css';


const Button = () => {

    const  dispatch = useDispatch();

    const dispatchIncrease = () => {
        dispatch({type: 'INCREASE'})
    }
    const dispatchDecrease = () => {
        dispatch({type: 'DECREASE'})
    }
    const dispatchReset = () => {
        dispatch({type: 'RESET'})
    }

    return (
        <div className='botonera'>
            <button className='button' onClick={dispatchIncrease} >+ 1</button>
            <button className='button' onClick={dispatchDecrease} >- 1</button>
            <button className='button' onClick={dispatchReset} >Reset</button>
         </div>
    );
}

export default Button