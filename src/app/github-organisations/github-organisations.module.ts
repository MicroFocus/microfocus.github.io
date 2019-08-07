import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IconModule } from '@ux-aspects/ux-aspects';
import { SharedModule } from '../shared/shared.module';
import { GithubOrganisationsComponent } from './github-organisations.component';


const routes: Routes = [
  {
    path: '',
    component: GithubOrganisationsComponent,
  }
];

@NgModule({
  declarations: [
    GithubOrganisationsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    IconModule,
    RouterModule.forChild(routes)
  ]
})
export class GithubOrganisationsModule { }
