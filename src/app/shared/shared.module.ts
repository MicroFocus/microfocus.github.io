import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EllipsisDirective } from './directives/ellipsis.directive';
import { LayoutModule } from '@angular/cdk/layout';
import { AccessibilityModule } from '@ux-aspects/ux-aspects';
import { MastheadComponent } from './components/masthead/masthead.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    MastheadComponent,
    EllipsisDirective,
    FooterComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule,
    AccessibilityModule
  ],
  exports: [
    MastheadComponent,
    EllipsisDirective,
    FooterComponent
  ]
})

export class SharedModule { }
