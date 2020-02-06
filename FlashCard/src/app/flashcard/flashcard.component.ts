import { Component, OnInit } from '@angular/core';
import { Question } from 'src/Interfaces/Question';
import { FlashcardserviceService } from './flashcardservice.service';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css']
})
export class FlashcardComponent implements OnInit {

  question: Question;
  questions: Question[];
  id: number;
  mode = 'flashcard';

  constructor(private flashCard: FlashcardserviceService) { }

  ngOnInit() {
    this.flashCard.getFlashCard$(1).subscribe(
      (resp: Question) => {
        this.question = resp
      }
    );
    this.flashCard.getAllFlashCards$().subscribe(
      (resp: Question[]) => {
        this.questions = resp
      }
    );
  }

  changeMode(reqMode: any) {
      console.log('mode =', reqMode);
      this.mode = reqMode;
  }

  changeQuestion(id: any) {
    this.flashCard.getFlashCard$(id).subscribe(
      (resp: Question) => {
        this.question = resp
      }
    );
  }

  refreshQuestions(): void {
    this.flashCard.getAllFlashCards$().subscribe(
      (resp: Question[]) => {
        this.questions = resp
      }
    );
  }

}


