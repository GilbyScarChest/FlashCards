import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Question } from 'src/Interfaces/Question';
import { FormControl } from '@angular/forms';
import { FormGroup,FormControl,Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {

    @Output() modeOutput: EventEmitter<string> = new EventEmitter<string>();
    @Input() question: Question;
    // question: Question = new FormControl('');

    constructor() {}
    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {}
    ngOnInit() {
      this.form = this.formBuilder.group({
        question: this.formBuilder.control('',Validators.required),
      });
    }

    BackToSameCard(): void {
        console.log("Back to Card");
        this.modeOutput.emit('flashcard');
    }

    AddFlashcard(): void {
      console.log(this.question);
    }
}
