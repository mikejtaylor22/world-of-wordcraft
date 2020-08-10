import { Component } from '@angular/core';
import { InputFormComponent } from './components/input-form/input-form/input-form.component';
import { ThesaurusService} from './thesaurus.service';
import { DictionaryResponse, Word } from './models';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'world-of-wordcraft';
  engage = false;
  myTextArea: string[];
  wordDisplay: Word[];
  newString: string;
  newStringStripped: string;
  strippedArray: string[] = [];
  table1: string;
  inputText: string;
  arrayOfLines: string[];
  sortedList: Word[];
  removedWords: string[] = [];

  index: number;
  endApp = false;
  constructor(private thesaurusService: ThesaurusService) {}

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

    //remove all unnecessary characters and make everything lowercase
    this.strippedArray = arrayOfLines.map((s) =>
      s.replace(/[^0-9a-z]/gi, '').toLowerCase()
    );

    //get all the words in the array and the number of times they are used
    const unsortedList: Word[] = this.strippedArray.reduce((accum, value) => {
      const dupeIndex = accum.findIndex((itemX) => itemX.word == value);
      if (dupeIndex == -1) {
        accum.push({
          qty: 1,
          word: value,
        });
      } else {
        accum[dupeIndex].qty++;
      }
      return accum;
    }, []);

    this.sortedList = unsortedList.sort((a, b) => b.qty - a.qty);
    this.wordDisplay = this.sortedList.slice(0, 10);
  }

  onGetSynonyms(word: string) {
    this.thesaurusService
      .getThesaurus(word)
      .subscribe((dictionaryResponse: DictionaryResponse[]) => {
        console.log(dictionaryResponse);
        const index = this.wordDisplay.findIndex((element: Word) => {
          return element.word == word;
        });
        this.wordDisplay[index].syns = dictionaryResponse[0].meta.syns;
      });
  }

  //reset the app
  onReset() {
    this.arrayOfLines = [];
    this.strippedArray = [];
    this.wordDisplay = [];
    this.engage = false;
    this.removedWords = [];
    //Would like to also clear the textarea here
  }

  onRemove(word:string) {
     this.removedWords.push(word);
    const removedWordsList = this.sortedList.filter((word:Word)=>{
      return this.removedWords.indexOf(word.word) == -1;
    });

    this.wordDisplay = removedWordsList.slice(0,10);
   }

  // removeWords(arrayOfWords: string[], wordsToRemove: string[]): string[] {
  //   return arrayOfWords.filter((word) => {
  //     return wordsToRemove.indexOf(word) == -1;
  //   });
  //   const originalArray = arrayOfWords;
  //   const arrayWithWordsRemoved = this.removeWords(
  //     originalArray,
  //     wordsToRemove
  //   );
  //   console.log(arrayWithWordsRemoved);
  // }
}