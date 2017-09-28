import { Question } from '../../models/Questions';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input('question') question:Question;

  constructor() { }

  ngOnInit() {
  }

}