import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  questions: Object[];

  constructor() {
    this.questions = [
      {
        text: 'What is your name?',
        answer: 'My name is Morty',
        hide: true,
      },
      {
        text: 'What is your favorite color?',
        answer: 'My favorite color is green',
        hide: true,
      },
      {
        text: 'When were you born?',
        answer: '25 December 2001',
        hide: true,
      },
    ];

   }

  ngOnInit() {
  }

}
