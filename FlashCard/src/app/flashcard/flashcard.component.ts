import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css']
})
export class FlashcardComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

    mode = 'flashcard';

    changeMode(reqMode: any) {
        console.log('mode =', reqMode);
        this.mode = reqMode;
    }
  
}


