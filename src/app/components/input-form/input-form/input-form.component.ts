import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css'],
})
export class InputFormComponent implements OnInit {
  @Output() wordArrayEvent = new EventEmitter<string[]>();
  @Output() resetArrayEvent = new EventEmitter<null>();
  inputForm: FormGroup;
 

  constructor() {}

  //create the form group on init
  ngOnInit() {
    this.inputForm = new FormGroup({
      inputText: new FormControl(null),
    });
  }

  public onSubmit() {
    // const arrayOfLines: string[] = this.inputForm.value.inputText.split(/\s+/);
    var arrayOfLines: string[] = this.inputForm.value.inputText.split(/\s+/);
    this.wordArrayEvent.emit(arrayOfLines);
    
  }

  public resetSend() {
    this.resetArrayEvent.emit();
  
  }
}
