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
   novelText: string[];
   myTextArea: string[];
   nonStopWords = [];
   stopWords = [];
  //  words: string[];
  words = [];
  // arrayOfLines = [];
  i = 0;

  engageApp() {
    
     console.log('App has been launched!');
     this.engage = true;
   
    //  var words = $('#myTextArea').val().split(' ');



    // for (var i = 0; i < this.words.length; i++) {
    //   filtering out stop words and numbers
    //   if (this.stopWords.indexOf(words[i].toLowerCase()) === -1 && isNaN(words[i])) {
    //     this.nonStopWords.push(words[i].toLowerCase());
    //     console.log(words.length);
    //   }
    // }
    // var keywords = {};
    // for (var i = 0; i < this.nonStopWords.length; i++) {
    //   checking if the word(property) already exists
    //   if it does increment the count otherwise set it to one
    //   if (this.nonStopWords[i] in keywords) {
    //     keywords[this.nonStopWords[i]] += 1;
    //   } else {
    //     keywords[this.nonStopWords[i]] = 1;
    //   }
    // }

    // step-3: sorting the object by first converting it to a 2D array
    // var sortedKeywords = [];
    // for (var keyword in keywords) {
    //   sortedKeywords.push([keyword, keywords[keyword]])
    // }
    // var sortedKeywords = [];
    // for (var keyword in keywords) {
    //   sortedKeywords.push([keyword, keywords[keyword]])
    // }
    // sortedKeywords.sort(function(a, b) {
    //   return b[1] - a[1]
    // });
    // console.log(sortedKeywords);

    
  }
}



    // for (this.i==0; this.i < arrayOfLines.length; this.i++){
    //   if (arrayOfLines[this.x] == arrayOfLines[this.i]){
    //       this.storeWord = arrayOfLines[this.x];
    //       this.wordCount+=1;
    //       console.log(this.x, this.i);
         
    //       }else if (arrayOfLines[this.x]!== arrayOfLines[this.i]) {
            
    //     console.log(this.storeWord, this.wordCount);
    //     this.storeWord = "";
    //     this.wordCount = 0;
    //     this.i++;
        
    //   }
    // }
    // }
     // console.log(this.storeWord, this.wordCount);
    
     

