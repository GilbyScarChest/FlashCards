import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Question } from 'src/Interfaces/Question';
import { FlashcardserviceService } from '../flashcardservice.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {

    @Output() modeOutput: EventEmitter<string> = new EventEmitter<string>();
    question: Question = {
      questionId: 0,
      questionText: "",
      answer: "",
      difficulty: null,
      subject: ""
    }
    

    constructor(private service: FlashcardserviceService) {}

    ngOnInit() {}

    BackToSameCard(): void {
        console.log("Back to Card");
        this.modeOutput.emit('flashcard');
    }

    AddFlashcard(): void {
      this.question.difficulty*=1; // convert to number to avoid validation errors
      this.service.postFlashcard$(this.question).subscribe(
        resp => console.log(resp)
      );
      this.modeOutput.emit('flashcard');
    }
}
