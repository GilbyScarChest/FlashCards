import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-menu',
  templateUrl: './card-menu.component.html',
  styleUrls: ['./card-menu.component.css']
})
export class CardMenuComponent implements OnInit {

    @Output() modeOutput: EventEmitter<string> = new EventEmitter<string>();

    constructor() { }

    ngOnInit() {
    }

    AddCard(): void {
    console.log("Add Card");
    this.modeOutput.emit('add-card');
    }

    EditCard(): void {
    console.log("Edit Card");
    this.modeOutput.emit('edit-card');
    }

}
