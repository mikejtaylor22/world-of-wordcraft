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

  constructor(private thesaurusService: ThesaurusService) {}

  engageApp(arrayOfLines: string[]) {
    this.engage = true;

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
    this.wordDisplay = this.sortedList.slice(0, 25);
  }

  //using thesaurusService to call thesaurus API
  onGetSynonyms(word: string) {
    this.thesaurusService
      .getThesaurus(word)
      .subscribe((dictionaryResponse: DictionaryResponse[]) => {
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

  onRemove(word: string) {
    this.removedWords.push(word);
    const removedWordsList = this.sortedList.filter((word: Word) => {
      return this.removedWords.indexOf(word.word) == -1;
    });

    this.wordDisplay = removedWordsList.slice(0, 25);
  }
}