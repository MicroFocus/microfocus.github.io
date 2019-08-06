import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IconModule } from '@ux-aspects/ux-aspects';
import { SharedModule } from '../shared/shared.module';
import { ProjectsComponent } from './projects.component';


const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
  }
];

@NgModule({
  declarations: [
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    IconModule,
    RouterModule.forChild(routes)
  ]
})
export class ProjectsModule { }
