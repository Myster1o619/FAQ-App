import { Question } from '../../models/Questions';
import { Component, Input, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input('question') question:Question;

  constructor(public dataService: DataService) { }

  ngOnInit() {
  }

  removeQuestion(question) {
    this.dataService.removeQuestion(question);  
  }

}
