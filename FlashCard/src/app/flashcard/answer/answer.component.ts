import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

    @Output() modeOutput: EventEmitter<string> = new EventEmitter<string>();
    
  constructor() { }

  ngOnInit() {
  }

  BackToSameCard(): void {
      console.log("Back to Card");
      this.modeOutput.emit('flashcard');
  }

}
