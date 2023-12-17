import { CompetitionModel } from './../index/CompetitionModel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Competitionntity } from '../index/Competitionntity';

@Injectable({
  providedIn: 'root'
})
export class CompetitionServiceService {

  private baseUrl = "http://localhost:8082/api/v1/competition";

  constructor(private http: HttpClient) { }

  getCompetition(): Observable<{ message: string, result: CompetitionModel[], errors: any, errorMap: any }> {
    return this.http.get<{ message: string, result: CompetitionModel[], errors: any, errorMap: any }>(this.baseUrl);
  }

  addCompetition(CompetitionAdd: Competitionntity): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}`, CompetitionAdd);
  } 
}
