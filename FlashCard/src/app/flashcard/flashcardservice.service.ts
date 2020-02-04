import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Question } from 'src/Interfaces/Question';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlashcardserviceService {

  constructor(private http: HttpClient) {}

  baseUrl: string = 'https://localhost:5001';

  getAllFlashCards$(): Observable<Question[]> {
      return this.http.get<Question[]>(`${this.baseUrl}/api/flashcard/getall`)
  }

  getFlashCard$(id: number): Observable<Question> {
    return this.http.get<Question>(`${this.baseUrl}/api/flashcard/get/${id}`)
}


}
