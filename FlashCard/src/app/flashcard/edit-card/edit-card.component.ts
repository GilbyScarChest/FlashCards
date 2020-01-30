import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.css']
})
export class EditCardComponent implements OnInit {

    @Output() modeOutput: EventEmitter<string> = new EventEmitter<string>();
    
    constructor() { }

    ngOnInit() {
    }

    BackToSameCard(): void {
    console.log("Back to Card");
    this.modeOutput.emit('flashcard');
    }

}
