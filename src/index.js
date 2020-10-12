import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { switch_sign,divide,multiply,minus, equal_sign, plus, addValue, delete_symbol, output_value ,output_value2} from './State';
import { rerenderEnireTree } from './render';



rerenderEnireTree(switch_sign, divide, multiply, minus, equal_sign, plus,output_value,output_value2,addValue,delete_symbol);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
