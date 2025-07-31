import React, { useState } from 'react';
import './style.css'

const Calculater = () => {

    const [input,setInput] = useState("");

    const handleClick = (value) =>{
        setInput((prev)=>prev + value)
    }

    const handleClear = ()=>{
        setInput("")
    }

    const handleBackSpace = ()=>{
        setInput((prev)=>prev.slice(0,-1) )
    }


    const calculatorResults =()=>{
        try{
          setInput(eval(input).toString());
        } 
        // eslint-disable-next-line no-unused-vars
        catch(error){
          setInput("");
        }
    }         

  return (
    <>
    <h1>Calculator</h1>


     <div className='calculator' >
        <div className="display">
            {input || 0}
        </div>

        <div className="buttons">
            <button className='clear' onClick={handleClear} >AC</button>
            <button className='backspace' onClick={handleBackSpace} >⌫</button>
            <button className='persentage' >%</button>


            <button onClick={()=>handleClick("/")}  className='operator' >/</button>
            <button onClick={()=>handleClick("7")}>7</button>
            <button onClick={()=>handleClick("8")}>8</button>
            <button onClick={()=>handleClick("9")}>9</button>

            <button onClick={()=>handleClick("*")}  className='operator' >*</button>
            <button onClick={()=>handleClick("4")}>4</button>
            <button onClick={()=>handleClick("5")}>5</button>
            <button onClick={()=>handleClick("6")}>6</button>

            <button onClick={()=>handleClick("-")}  className='operator' >-</button>
            <button onClick={()=>handleClick("1")}>1</button>
            <button onClick={()=>handleClick("2")}>2</button>
            <button onClick={()=>handleClick("3")}>3</button>

            <button onClick={()=>handleClick("+")}  className='operator' >+</button>
            
            <button onClick={()=>handleClick("🖩")} >🖩</button>
            <button onClick={()=>handleClick("0")}>0</button>
            <button onClick={()=>handleClick(".")}>.</button>

            <button className="equals" id='btn' onClick={calculatorResults}>=</button>

        </div>

     </div>
    
    </>
  )
}

export default Calculater