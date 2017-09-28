import { Question } from '../../models/Questions';
import { DataService } from '../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  questions: Question[];

  //inject the imported service into the constructor
  constructor(public dataService: DataService) {

   }

  ngOnInit() {

    // use the imported service to get the questions:
    this.questions = this.dataService.getQuestions();

  }

}
