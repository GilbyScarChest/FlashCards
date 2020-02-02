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
  id: number;
  mode = 'flashcard';

  constructor(private flashCard: FlashcardserviceService) { }

  ngOnInit() {
    this.flashCard.getAllFlashCards$().subscribe(
      (resp: Question) => {
        this.question = resp
      }
    );
    console.log(this.question)
  }

  changeMode(reqMode: any) {
      console.log('mode =', reqMode);
      this.mode = reqMode;
  }

  printQuestion() {
    this.flashCard.getAllFlashCards$().subscribe(
      (resp: Question) => {
        this.question = resp
      }
    );
    console.log(this.question);
  }

}


