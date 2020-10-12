import { rerenderEnireTree } from "./render";
import * as math from 'mathjs';

export let output_value = "";
export let output_value2 = "";
var first_arg = 0;
var result = "";
let clickCount = 0;
let commaIsAdded = false;

export function switch_sign(){
    if(output_value.length!=0){
        output_value=math.evaluate(output_value+ "* -1");
        clickCount=0;
        commaIsAdded =false;
        rerenderEnireTree(switch_sign, divide, multiply, minus, equal_sign, plus,output_value,output_value2,addValue,delete_symbol);
    }
}

export function plus(){
    if(output_value.length!=0){
        output_value2+=output_value+" + ";
        output_value="";
        clickCount=0;
        commaIsAdded =false;
        rerenderEnireTree(switch_sign, divide, multiply, minus, equal_sign, plus,output_value,output_value2,addValue,delete_symbol);
    }
}

export function minus(){
    if(output_value.length!=0){
        output_value2+=output_value+" - ";
        output_value="";
        clickCount=0;
        commaIsAdded =false;
        rerenderEnireTree(switch_sign, divide, multiply, minus, equal_sign, plus,output_value,output_value2,addValue,delete_symbol);
    }
    if(output_value.length==0){

    }
}

export function divide(){
    if(output_value.length!=0){
        output_value2+=output_value+" / ";
        output_value="";
        clickCount=0;
        commaIsAdded =false;
        rerenderEnireTree(switch_sign, divide, multiply, minus, equal_sign, plus,output_value,output_value2,addValue,delete_symbol);
    }
}

export function multiply(){
    if(output_value.length!=0){
        output_value2+=output_value+" * ";
        output_value="";
        clickCount=0;
        commaIsAdded =false;
        rerenderEnireTree(switch_sign, divide, multiply, minus, equal_sign, plus,output_value,output_value2,addValue,delete_symbol);
    }
}

export function equal_sign(){
    if(output_value.length!=0){
        let x = output_value2+output_value;
        result=math.evaluate(x).toString().slice(0,14);
        output_value=result;

        output_value2="";
        clickCount=0;
        commaIsAdded =false;
        rerenderEnireTree(switch_sign, divide, multiply, minus, equal_sign, plus,output_value,output_value2,addValue,delete_symbol);
    }
}

export function delete_symbol(e){
    if(e=="D"){
        if(output_value.slice(-1)=="."){
            commaIsAdded =false;
        }
        output_value=output_value.slice(0,-1);
        clickCount-=1;
        rerenderEnireTree(switch_sign, divide, multiply, minus, equal_sign, plus,output_value,output_value2,addValue,delete_symbol);
    }
    else if (e=="CE"){
        output_value="";
        clickCount=0;
        commaIsAdded =false;
        rerenderEnireTree(switch_sign, divide, multiply, minus, equal_sign, plus,output_value,output_value2,addValue,delete_symbol);
    }
    else if (e=="C"){
        output_value="";
        output_value2=""
        first_arg=0;
        result="";
        clickCount=0;
        commaIsAdded =false;
        rerenderEnireTree(switch_sign, divide, multiply, minus, equal_sign, plus,output_value,output_value2,addValue,delete_symbol);
    }

    if(clickCount<0){
        clickCount=0;
    }
}

export function addValue(value){
    if(clickCount>13){
        return 0;
    }
    if(value=="." && !commaIsAdded){
        output_value +=value;
        clickCount+=1;
        commaIsAdded =true;
    }
    else if(value=="." && commaIsAdded){
        return 0;
    }
    else{
        output_value +=value;
        clickCount+=1;
    }
    

    rerenderEnireTree(switch_sign, divide, multiply, minus, equal_sign, plus,output_value,output_value2,addValue,delete_symbol);
}

 