import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Competitionntity } from '../index/Competitionntity';
import { CompetitionDetails } from '../competition-details-component/CompetitionDetails';

var apiUrl = "http://localhost:8100/";

@Injectable({
  providedIn: 'root'
})
export class CompetitionDetailsService {

  private baseUrl = "http://localhost:8082/api/v1/competition";

  constructor(private http: HttpClient) { }

  getCompetitionByCode(code: string): Observable<CompetitionDetails> {
    return this.http.get<CompetitionDetails>(`${this.baseUrl}/${code}`);
}

}
