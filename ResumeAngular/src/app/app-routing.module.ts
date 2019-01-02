import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ HomeComponent} from './home/home.component';
import {QualificationsComponent} from './qualifications/qualifications.component';
import {ExperienceComponent} from './experience/experience.component';
import {SkillsComponent} from './skills/skills.component';
import {ProjectsComponent} from './projects/projects.component';
import {ResearchComponent} from './research/research.component';
import { from } from 'rxjs';
const routes: Routes = [{path:'home',component:HomeComponent},
                        {path:'qualifications',component:QualificationsComponent},
                        {path:'experience',component:ExperienceComponent},
                        {path:'skills',component:SkillsComponent},
                        {path:'projects',component:ProjectsComponent},
                        {path:'research',component:ResearchComponent},
                        {path:'',component:HomeComponent,pathMatch:'full'},
                        {path:'**',component:HomeComponent,pathMatch:'full'} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
