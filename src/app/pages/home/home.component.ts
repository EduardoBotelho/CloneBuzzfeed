import { Component } from '@angular/core';
import { QuizzComponent } from "../../components/quizz/quizz.component";

@Component({
  selector: 'app-home',
  imports: [QuizzComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor() {
    // Constructor logic can be added here if needed
  }
  ngOnInit():void {
}
}
