import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { GithubOrganisationsComponent } from './github-organisations.component';
import { SharedModule } from '../shared/shared.module';

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
    RouterModule.forChild(routes)
  ]
})
export class GithubOrganisationsModule { }
