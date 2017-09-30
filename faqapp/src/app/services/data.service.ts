import { Question } from './../models/Questions';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  //create a Question interface for the questions
  questions:Question[];

  constructor() {

    // questions are no longer going to be coming from a static array
    /*this.questions = [
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
    ];*/
   }

   // get Question(s) from localStorage
   getQuestions() {

    if (localStorage.getItem('questions') === null) {
      this.questions = [];
    } else {
      // when we get questions, they are in a JSON file
      // we need to convert them to an array
      // use .parse()
      this.questions = JSON.parse(localStorage.getItem('questions'));
    }
     return this.questions;
   }

   // add Question to localStorage
   addQuestion(question:Question) {
    this.questions.unshift(question);

    // initialize  local variable
    let questions;

    if (localStorage.getItem('questions') === null) {
      questions = [];
      // push new Question
      questions.unshift(question);
      // set new array to localStorage
      localStorage.setItem('questions', JSON.stringify(questions));
    } else {
      // set local variable questions to the current localStorage array:
      // is in JSON format, need to convert to array:
      questions = JSON.parse(localStorage.getItem('questions'));
      // add the new question to the array
      questions.unshift(question);
      // re-set localStorage to include the new question
      localStorage.setItem('questions', JSON.stringify(questions));
    }
   }

   // remove Question from localStorage
   removeQuestion(question) {
    for (let i = 0; i < this.questions.length; i++) {
      if (question == this.questions[i]) {
        this.questions.splice(i,1);
        // re-set localStorage to not include the deleted question
        localStorage.setItem('questions', JSON.stringify(this.questions));
      }
    }
   }

}
