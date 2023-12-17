import { Ranking } from './../competition-details-component/Ranking';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  private baseUrl = "http://localhost:8082/api/v1/ranking";

  constructor(private http: HttpClient) { }

  AddRank(ranking: Ranking): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}`, ranking);
  }
}
