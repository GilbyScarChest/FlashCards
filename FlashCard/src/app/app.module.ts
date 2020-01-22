import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { FlashcardComponent } from './flashcard/flashcard.component';
import { CardMenuComponent } from './flashcard/card-menu/card-menu.component';
import { AnswerComponent } from './flashcard/answer/answer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FlashcardComponent,
    CardMenuComponent,
    AnswerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { 

    
}
