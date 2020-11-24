import { Component } from '@angular/core';
import { ThesaurusService} from './thesaurus.service';
import { DictionaryResponse, Word } from './models';




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
  strippedArray: string[] = [];
  inputText: string;
  arrayOfLines: string[];
  sortedList: Word[];
  removedWords: string[] = [];
  totalWords: number;
  sliceNum: number;
  sliceSet = false;
  constructor(private thesaurusService: ThesaurusService) {}

 

  engageApp(arrayOfLines: string[]) {
    this.engage = true;
    
    
    //remove all unnecessary characters and make everything lowercase
    this.strippedArray = arrayOfLines.map((s) =>
      s.replace(/[^0-9a-z]/gi, '').toLowerCase()
    );

    if(this.sliceSet === false && this.sliceNum <= 0){
    this.sliceNum = this.strippedArray.length;
    }

    //store the amount of words the user input
    this.totalWords = this.strippedArray.length;
    
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
    this.wordDisplay = this.sortedList.slice(0, this.sliceNum);
  }

  //using thesaurusService to call thesaurus API
  onGetSynonyms(word: string) {
    this.thesaurusService
      .getThesaurus(word)
      .subscribe((dictionaryResponse: DictionaryResponse[]) => {
        const index = this.wordDisplay.findIndex((element: Word) => {
          return element.word == word;
        });
        const synonyms = dictionaryResponse[0].meta.syns.join().replace(/,/g,', ');
        this.wordDisplay[index].syns = synonyms;
      });
  }

  //reset the app
  onReset() {
    this.arrayOfLines = [];
    this.strippedArray = [];
    this.wordDisplay = [];
    this.engage = false;
    this.removedWords = [];
    // this.sliceNum = this.strippedArray.length;
    this.sliceNum = null;
    this.sliceSet = false;
    //Would like to also clear the textarea here
  }

  onRemove(word: string) {
    this.removedWords.push(word);
    const removedWordsList = this.sortedList.filter((word: Word) => {
      return this.removedWords.indexOf(word.word) == -1;
    });

    this.wordDisplay = removedWordsList.slice(0, this.sliceNum);
  }
}