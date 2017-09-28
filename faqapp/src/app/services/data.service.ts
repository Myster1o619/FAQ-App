import { Question } from './../models/Questions';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  //create a Question interface for the questions
  questions:Question[];

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

   getQuestions() {
     return this.questions;
   }

   addQuestion(question:Question) {
    this.questions.unshift(question);
   }

}
