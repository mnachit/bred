import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetitionDetailsComponentComponent } from './competition-details-component/competition-details-component.component';
import { IndexComponent } from './index/index.component';


const routes: Routes = [
  { path: 'competition/:code', component: CompetitionDetailsComponentComponent },
  { path: 'dashbord', component: IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
