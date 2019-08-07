import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccessibilityModule, IconModule } from '@ux-aspects/ux-aspects';
import { FooterComponent } from './components/footer/footer.component';
import { MastheadComponent } from './components/masthead/masthead.component';
import { EllipsisDirective } from './directives/ellipsis.directive';

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
    AccessibilityModule,
    IconModule
  ],
  exports: [
    MastheadComponent,
    EllipsisDirective,
    FooterComponent
  ]
})

export class SharedModule { }
