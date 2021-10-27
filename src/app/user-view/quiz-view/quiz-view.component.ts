import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-view',
  templateUrl: './quiz-view.component.html',
  styleUrls: ['./quiz-view.component.css']
})
export class QuizViewComponent implements OnInit {
  isAdmin = false;
  constructor() { }

  ngOnInit(): void {
  }

}
