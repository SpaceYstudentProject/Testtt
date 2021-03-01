import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MissionComponent } from './mission/mission.component';
import { StarshipComponent } from './starship/starship.component';
import { LaunchesComponent } from './launches/launches.component';
import { HomeComponent } from './home/home.component';
import { BlogsComponent } from './blogs/blogs.component';
import { CrewComponent } from "./crew/crew.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  { path: 'mission', component: MissionComponent },
  { path: 'starship', component: StarshipComponent },
  { path: 'launches', component: LaunchesComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'crew', component: CrewComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
