import {List} from '../list-class.js'
export const checkValue=(e)=>{
   const inputEl= document.getElementById("input");
   const newInput=inputEl.value;

   const newObj=new List(newInput);
  
   const result=newObj.renderNumber(newObj.state.number)
   console.log(result)
   
   
}