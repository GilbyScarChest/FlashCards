import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Question } from 'src/Interfaces/Question';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
    @Input() currentQuestion: Question;
    @Output() modeOutput: EventEmitter<string> = new EventEmitter<string>();

    constructor() { }

    ngOnInit() {
      console.log(this.currentQuestion);
    }

    BackToSameCard(): void {
        console.log("Back to Card");
        this.modeOutput.emit('flashcard');
    }

}
