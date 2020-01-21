import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlashcardComponent } from './flashcard/flashcard.component';
import { CardMenuComponent } from './card-menu/card-menu.component';


const routes: Routes = [
    {path: 'flashcard', component: FlashcardComponent},
    {path: 'card-menu', component: CardMenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
