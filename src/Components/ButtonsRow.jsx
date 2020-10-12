import { Button } from '@material-ui/core';
import React from 'react';



function ButtonRow(props){
    let addValue = (e)=>{
      props.addVal(e.currentTarget.value);
    }
    let delValue = (e)=>{
      props.delete_symbol(e.currentTarget.value);
    }
    let plusVal = ()=>{
      props.plus();
    }
    let equal1 = ()=>{
      props.equal_sign();
    }
    return(
        <div className="buttons-wrapper">

          <div className="buttons-row-1">
            <Button className="operator" value ="CE" onClick={delValue}>CE</Button>
            <Button className="operator" value ="C" onClick={delValue}>C</Button>
            <Button className="operator" value ="D" onClick={delValue}>D</Button>
            <Button className="operator" onClick={props.divide}>/</Button>
          </div>
             
          <div className="buttons-row-2">
            <Button className="number" value ="7" onClick={addValue}>7</Button>
            <Button className="number" value ="8" onClick={addValue}>8</Button>
            <Button className="number" value ="9" onClick={addValue}>9</Button>
            <Button className="operator" onClick={props.multiply}>*</Button>
          </div>

          <div className="buttons-row-3">
            <Button className="number" value ="4" onClick={addValue}>4</Button>
            <Button className="number" value ="5" onClick={addValue}>5</Button>
            <Button className="number" value ="6" onClick={addValue}>6</Button>
            <Button className="operator" onClick={props.minus}>-</Button>
          </div>

          <div className="buttons-row-4">
            <Button className="number" value ="1" onClick={addValue}>1</Button>
            <Button className="number" value ="2" onClick={addValue}>2</Button>
            <Button className="number" value ="3" onClick={addValue}>3</Button>
            <Button className="operator" onClick={plusVal}>+</Button>
          </div>

          <div className="buttons-row-5">
            <Button className="operator" onClick={props.switch_sign}>&#177;</Button>
            <Button className="number" value ="0" onClick={addValue}>0</Button>
            <Button className="operator" value ="." onClick={addValue} >.</Button>
            <Button className="operator" onClick={equal1}>=</Button>
          </div>
        </div>
    )
}

export default ButtonRow;