import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'world-of-wordcraft';
  engage = false;
   myTextArea: string[];
  wordCount = 0;
 wordDisplay: string[];
  arrayOfLines: string[] = [];
  newString: string;
  newStringStripped: string;
  strippedArray: string[] = [];;
 

  index: number;
  endApp = false;

  engageApp() {
    
     console.log('App has been launched!');
     this.engage = true;
  
     //split the textarea into an array of strings seperated by ATLEAST 1 space
    var arrayOfLines = $('#myTextArea').val().split(/\s+/);
    
    //remove all unnecessary characters
    for(this.index=0; this.index < arrayOfLines.length; this.index++){
      this.newString = arrayOfLines[this.index];
      this.newStringStripped = this.newString.replace(/[^0-9a-z]/gi, '');
      this.strippedArray.push(this.newStringStripped);
         
    }

    
    //get all the words in the array and the number of times they are used
    this.wordDisplay = this.strippedArray.reduce((accum, value) => {
       const dupeIndex = accum.findIndex(itemX => itemX.word == value);
       if (dupeIndex == -1 ){
         accum.push({
           qty:1, word:value
         });

       } else {
         accum[dupeIndex].qty++;
       }
     
      return accum;
    },[]);

  }
}