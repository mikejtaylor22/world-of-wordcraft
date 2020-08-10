import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ThesaurusService {

  constructor(private http: HttpClient){}

  getThesaurus(word: string){
    console.log(word);
    return this.http.get(`https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=ff6ba678-c7f2-4617-9be2-569ca0db57b6`);
  }

  
}
