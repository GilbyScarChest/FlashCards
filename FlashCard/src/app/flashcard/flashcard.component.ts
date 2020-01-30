import { Component, OnInit } from '@angular/core';
import { Question } from 'src/Interfaces/Question';
import { FlashcardserviceService } from './flashcardservice.service';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css']
})
export class FlashcardComponent implements OnInit {


  constructor(private flashCard: FlashcardserviceService) { }

  ngOnInit() {

    this.flashCard.getAllFlashCards$().subscribe((data: Question) => this.question = {
            
        QuestionId: (data as any).QuestionId,
        Subject: (data as any).Subject,
        Difficulty: (data as any).Difficulty,
        QuestionText: (data as any).QuestionText,
        Answer: (data as any).Answer

    });
  }

    mode = 'flashcard';
    question: Question;

    changeMode(reqMode: any) {
        console.log('mode =', reqMode);
        this.mode = reqMode;
    }

}


