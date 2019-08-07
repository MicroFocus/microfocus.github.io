import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-open-source',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent {

  public projects: Project[] = require('!!js-yaml-loader!!../../../projects.yml');

}

export interface Project {
  image: string;
  title: string;
  description: string;
  link: Link;
}

export interface Link {
  url: string;
  icon: string;
  title: string;
}

