import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AccessibilityModule } from '@ux-aspects/ux-aspects';

import { BlogComponent } from './blog.component';
import { CodeHighlighterDirective } from './code-highlighter.directive';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
  }
];

@NgModule({
  declarations: [
    BlogComponent,
    CodeHighlighterDirective
  ],
  imports: [
    CommonModule,
    AccessibilityModule,
    RouterModule.forChild(routes)
  ],
})

export class BlogModule { }
