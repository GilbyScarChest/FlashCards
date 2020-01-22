import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlashcardComponent } from './flashcard/flashcard.component';
import { CardMenuComponent } from './flashcard/card-menu/card-menu.component';
import { AnswerComponent } from './flashcard/answer/answer.component';


const routes: Routes = [
    {path: 'flashcard', component: FlashcardComponent},
    {path: 'card-menu', component: CardMenuComponent},
    {path: 'answer', component: AnswerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
