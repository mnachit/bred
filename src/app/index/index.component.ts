import { CompetitionDetailsService } from './../services/competition-details.service';
import { Competitionntity } from './Competitionntity';
import { CompetitionServiceService } from './../services/competition-service.service';
import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { CompetitionModel } from './CompetitionModel';
import * as $ from 'jquery';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  userSubscription?: Subscription;
  compeetition?: CompetitionModel[];
  currentDate: Date = new Date(); //
  errorAddingCompetition: boolean = false;

  parseDate(dateString: Date): Date {
    return new Date(dateString);
  }
  response?: { message: string, result: CompetitionModel[], errors: any, errorMap: any };

  constructor(private CompetitionService: CompetitionServiceService) { }

  ngOnInit(): void {
    this.retrieveCompetition();

    this.userSubscription = interval(1000).subscribe(() => {
      this.retrieveCompetition();
    });
  }

  retrieveCompetition(): void {
    this.CompetitionService.getCompetition()
      .subscribe({
        next: (data) => {
          this.response = data;
          this.compeetition = data.result;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  openErrorModal(): void {
    // Set the Bootstrap modal to be visible
    ($('#errorModal') as any).modal('show');
  }
  

  Competition1: Competitionntity = new Competitionntity();

  addCompetition(): void{
    this.CompetitionService.addCompetition(this.Competition1).subscribe(
      (reponse) => {
        console.log('User added successfully', reponse);
      },
      (error) => {
        console.error('Error adding user', error);
        this.openErrorModal();
        this.errorAddingCompetition = true;
      }
    );
  }
  
}
