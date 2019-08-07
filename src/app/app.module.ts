import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { colorSets, ColorServiceModule } from '@ux-aspects/ux-aspects';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  {
    path: 'projects',
    loadChildren: () => import('./projects/projects.module').then(mod => mod.ProjectsModule),
    data: {
      title: 'Projects'
    }
  },
  {
    path: 'github-organizations',
    loadChildren: () => import('./github-organisations/github-organisations.module').then(mod => mod.GithubOrganisationsModule),
    data: {
      title: 'Organizations'
    }
  },
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then(mod => mod.BlogModule),
    data: {
      title: 'Blog'
    }
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'projects'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, { useHash: true, preloadingStrategy: PreloadAllModules, scrollPositionRestoration: 'top'}),
    SharedModule,
    ColorServiceModule.forRoot(colorSets.microFocus)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
