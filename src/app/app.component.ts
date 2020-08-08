import { Component } from '@angular/core';
import { InputFormComponent } from './components/input-form/input-form/input-form.component';
import { ThesaurusService} from './thesaurus.service';
import { ConstantPool } from '@angular/compiler';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'world-of-wordcraft';
  engage = false;
   myTextArea: string[];
 wordDisplay: string[];
  newString: string;
  newStringStripped: string;
  strippedArray: string[] = [];;
  table1: string;
  inputText: string;
 arrayOfLines: string[];

 
  index: number;
  endApp = false;
  constructor(private thesaurusService: ThesaurusService){}

  engageApp(arrayOfLines: string[]) {
    
    
     console.log('App has been launched!');
     this.engage = true;
  
    
    
    //remove all unnecessary characters (I believe you can use map here. something for later)
    // for(this.index=0; this.index < arrayOfLines.length; this.index++){
    //   this.newString = arrayOfLines[this.index];
    //   this.newStringStripped = this.newString.replace(/[^0-9a-z]/gi, '');
    //   this.newStringStripped = this.newStringStripped.toLowerCase();
    //   this.strippedArray.push(this.newStringStripped);
    // }

    this.strippedArray = arrayOfLines.map(s => s.replace(/[^0-9a-z]/gi, '').toLowerCase());

    

    
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
      // const wordCheck = this.thesaurusService.getThesaurus(value)
      //  console.log(wordCheck);
      //  console.log(value); 
      
       return accum;
      
    },[]);
    
  }
  
  
  //reset the app
  onReset() {
    this.arrayOfLines = [];
    this.strippedArray = [];
    this.wordDisplay = [];
    this.engage = false;
    //Would like to also clear the textarea here
  }

}