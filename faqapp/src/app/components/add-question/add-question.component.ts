import { Question } from './../../models/Questions';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  @Output() questionAdded = new EventEmitter<Question>();
  
  text: string;
  answer: string;

  constructor() { }

  ngOnInit() {
  }

  addQuestion() {
    this.questionAdded.emit({ 
      text: this.text,
      answer: this.answer,
      hide: true,
    })
  }

  clearFields() {
    this.text = "";
    this.answer = "";
  }

}
