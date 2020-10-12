import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


export let rerenderEnireTree = (switch_sign, divide, multiply, minus, equal_sign, plus,output_value,output_value2,addValue,delete_symbol)=>{
  ReactDOM.render(
    <React.StrictMode>
      <App switch_sign={switch_sign} divide={divide}
           multiply={multiply} minus={minus} equal_sign={equal_sign}
           plus={plus} output_value2={output_value2} delete_symbol={delete_symbol}
           State={output_value} addVal={addValue}
           />
    </React.StrictMode>,
    document.getElementById('root')
    
  );
}

