import React from 'react';
import './#Source/scss/App.scss';
import ButtonRow from './Components/ButtonsRow';
import ReactDOM from 'react-dom';
import {ComponentDidMount,onKey,output_value,output_value2} from './State';




function App(props) {
  
  return (
    <div className="main-wrapper">
      {ComponentDidMount()}
      <div className="title">CALCULATOR</div>
      <div className="calculator-wrapper">
        <div className="output-wrapper">
        <div><p className="OutUp"> {output_value2}</p></div> 
        <p className="OutDown"> {output_value}</p>

        </div>
        <ButtonRow switch_sign={props.switch_sign} divide={props.divide}
                    multiply={props.multiply} minus={props.minus}
                    equal_sign={props.equal_sign} plus={props.plus}
                    delete_symbol={props.delete_symbol} addVal={props.addVal}
                    />

      </div>
    </div>
  );
}

export default App;
