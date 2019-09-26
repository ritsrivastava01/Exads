import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.scss']
})
export class JavascriptComponent implements OnInit {
  codeSolution1 = `
    function diff(newCode,oldCode){
      let diffArray=[];

      // combine the two object
      let combineObject={...newCode, ...oldCode};

      for(let property in combineObject){

        //Check if property is exit in new Code but not in old Code
        if(newCode.hasOwnProperty(property) && ! oldCode.hasOwnProperty(property))
        {
        diffArray.push([' + ',property, combineObject[property]]);

        // Check if property is exit in Old Code but not in New code
        }else if(!newCode.hasOwnProperty(property) && oldCode.hasOwnProperty(property)){
          diffArray.push([' - ',property, combineObject[property]]);
        }
      }
    return diffArray;
    };`;

  codeSolution2 = `
  const mode = (myArray) => {

    //Filter all numbers
    //Then apply the reduce function
    let mostOccurringNumber= myArray.filter(x=>typeof(x)==='number').reduce(
        (a,b,i,arr)=>
         (arr.filter(v=>v===a).length>=arr.filter(v=>v===b).length?a:b),null);

    
    //Filter all strings
    //Then apply the reduce function     
    let mostOccurringString= myArray.filter(x=>typeof(x)==='string').reduce(
        (a,b,i,arr)=>
         (arr.filter(v=>v===a).length>=arr.filter(v=>v===b).length?a:b),null);

         return [mostOccurringNumber, mostOccurringString];
    }`;

  constructor() {}

  ngOnInit() {}
}
