import { RankingService } from './../services/ranking.service';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompetitionDetailsService } from '../services/competition-details.service';
import { CompetitionDetails } from './CompetitionDetails';
import { User } from './User';
import { UserModel } from '../services/UserModel';
import { Ranking } from './Ranking';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-competition-details-component',
  templateUrl: './competition-details-component.component.html',
  styleUrls: ['./competition-details-component.component.css'],
})
export class CompetitionDetailsComponentComponent implements OnInit {
  DataCOmpetition: CompetitionDetails = new CompetitionDetails(0, '', new Date(), new Date(), new Date(), 0, '', 0, '');
  done: Boolean = false;
  UserModel?: UserModel[];
  numberIdC: number = 0;
  UserModel1?: UserModel[];
  lenght?: number;
  userSubscription?: Subscription;
  response?: { message: string, result: UserModel[], errors: any, errorMap: any };


  constructor(
    private route: ActivatedRoute,
    private competitionDetailsS: CompetitionDetailsService,
    private userservise: UserService,
    private rankService: RankingService
  ) { }

  ngOnInit(): void {
    

    this.userSubscription = interval(2000).subscribe(() => {
      this.route.params.subscribe((params) => {
        this.getCompetitionWithCode(params['code']);
      });
      this.retrieveUser();
    });
  }

  getCompetitionWithCode(code: string): void {
    this.competitionDetailsS.getCompetitionByCode(code).subscribe(
      (response) => {
        this.DataCOmpetition = response;
        //console.log(this.DataCOmpetition);
        this.numberIdC = response.id;
        this.getUserWithRank(response.id);
      },
      (error) => {
        //console.log(error);
      }
    );
  }

  AddUser: User = new User();

  Addusser(): void {
    this.userservise.AddUser(this.AddUser).subscribe(
      (reponse) => {
        //console.log('User added successfully', reponse);
      },
      (error) => {
        console.error('Error adding user', error);
      }
    );
  }
  retrieveUser(): void {
    this.userservise.getAllUser()
      .subscribe({
        next: (data) => {
          this.response = data;
          this.UserModel = data.result;
          //console.log(data.result);
          
        },
        error: (e) => console.error(e)
      });
  }

  AddRank: Ranking = new Ranking();

  AddRanking(): void {
    this.AddRank.competition = this.DataCOmpetition.id;

    this.rankService.AddRank(this.AddRank).subscribe(
      (response) => {
        //console.log('Ranking added successfully', response);
      },
      (error) => {
        console.error('Error adding Ranking', error);
      }
    );
  }

  getUserWithRank(numberIdC: number): void {
  
    this.userservise.getUserWithRank(this.numberIdC)
      .subscribe({
        next: (data) => {
          this.response = data;
          this.UserModel1 = data.result;
          this.lenght = data.result.length
          console.log(this.lenght);
        },
        error: (e) => console.error(e)
      });
  }
  
  


}
