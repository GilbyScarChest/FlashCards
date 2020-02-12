import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Question } from 'src/Interfaces/Question';
import { FlashcardserviceService } from '../flashcardservice.service';

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.css']
})
export class EditCardComponent implements OnInit {

    @Output() modeOutput: EventEmitter<string> = new EventEmitter<string>();
    @Input() currentQuestion: Question;

    constructor(private service: FlashcardserviceService) { }

    ngOnInit() {
    }

    BackToSameCard(): void {
      console.log("Back to Card");
      this.modeOutput.emit('flashcard');
    }

    UpdateCard(): void {
      this.currentQuestion.difficulty*=1; // convert to number to avoid validation errors
      this.service.updateFlashcard$(this.currentQuestion).subscribe(
        resp => console.log(resp)
      );
      this.modeOutput.emit('flashcard');
    }
}
