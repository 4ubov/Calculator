import { rerenderEnireTree } from "./render";
import * as math from 'mathjs';

export let output_value = "0";
export let output_value2 = "";
var result = "";

export function switch_sign(){
    if(output_value.length!=0){
        output_value=math.evaluate(output_value+ "* -1").toString();
        rerenderEnireTree(switch_sign, divide, multiply, minus, equal_sign, plus,output_value,output_value2,addValue,delete_symbol);
    }
}

export function plus(){
    if(output_value.length!=0){
        output_value2+=output_value+" + ";
        output_value="0";
        rerenderEnireTree(switch_sign, divide, multiply, minus, equal_sign, plus,output_value,output_value2,addValue,delete_symbol);
    }
}

export function minus(){
    if(output_value.length!=0){
        output_value2+=output_value+" - ";
        output_value="0";
        rerenderEnireTree(switch_sign, divide, multiply, minus, equal_sign, plus,output_value,output_value2,addValue,delete_symbol);
    }
    if(output_value.length==0){

    }
}

export function divide(){
    if(output_value.length!=0){
        output_value2+=output_value+" / ";
        output_value="0";
        rerenderEnireTree(switch_sign, divide, multiply, minus, equal_sign, plus,output_value,output_value2,addValue,delete_symbol);
    }
}

export function multiply(){
    if(output_value.length!=0){
        output_value2+=output_value+" * ";
        output_value="0";
        rerenderEnireTree(switch_sign, divide, multiply, minus, equal_sign, plus,output_value,output_value2,addValue,delete_symbol);
    }
}

export function equal_sign(){
    if(output_value.length!=0){
        let x = output_value2+output_value;

        result=math.format(math.evaluate(x),{precision:14}).toString();
        output_value=result;

        output_value2="";
        rerenderEnireTree(switch_sign, divide, multiply, minus, equal_sign, plus,output_value,output_value2,addValue,delete_symbol);
        
    }
}

export function delete_symbol(e){
    if(e=="D"){
        output_value=output_value.toString().slice(0,-1);
        if(output_value.length==0){
            output_value="0";
        }
        result="";
        rerenderEnireTree(switch_sign, divide, multiply, minus, equal_sign, plus,output_value,output_value2,addValue,delete_symbol);
    }
    else if (e=="CE"){
        output_value="0";
        result="";
        rerenderEnireTree(switch_sign, divide, multiply, minus, equal_sign, plus,output_value,output_value2,addValue,delete_symbol);
    }
    else if (e=="C"){
        output_value="0";
        output_value2=""
        result="";
        rerenderEnireTree(switch_sign, divide, multiply, minus, equal_sign, plus,output_value,output_value2,addValue,delete_symbol);
    }

}

export function addValue(value){
    output_value = output_value.toString();
    if(value=="." && output_value.indexOf(".")==-1){
        let tmp=output_value.toString();
        if(tmp.length==0){
            output_value = "0"+value;
        }
        else{
            output_value = tmp+value;
        }
        
    }
    else if(value=="." && output_value.indexOf(".")!=-1){
        return 0;
    }
    else{
        let correct = ["0","1","2","3","4","5","6","7","8","9","-"]; //Anti Nan and Infinity
        let ucorrect = ["N","I"];
        let tmp=output_value.toString();
        
        if(tmp=="0" || correct.indexOf(tmp.slice(0,1))==-1 ){
            tmp = value;
            output_value=tmp;
            
        }else{
            if(tmp.length>1 && ucorrect.indexOf(tmp.slice(1,2))!=-1 || tmp==result && output_value2.length==0){
                tmp = value;
                output_value=tmp;
                result="";
            }
            else{
                output_value=tmp+value;
            }

            
        }
        
    }

    rerenderEnireTree(switch_sign, divide, multiply, minus, equal_sign, plus,output_value,output_value2,addValue,delete_symbol);
}

//Input from keyboard
export let onKey = (event) => {
    if (['1', '2', '3', '4', '5', '6', '7', '8', '9', '0','.'].indexOf(event.key) != -1){
        addValue(event.key);
    }
    else {
        switch (event.key) {
            case '+':
                plus();
                break;
            case '-':
                minus();
                break;
            case '*':
                multiply();
                break;
            case '/':
                divide();
                break;
            case '=':
                equal_sign();
                break;
            case 'Enter':
                equal_sign();
                break;
            case 'Backspace':
                delete_symbol("D");
                break;
        }
    }
};

export function ComponentDidMount(){
    document.addEventListener('keydown', onKey);
};