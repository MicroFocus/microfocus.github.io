import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-github-organisations',
  templateUrl: './github-organisations.component.html',
  styleUrls: ['./github-organisations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GithubOrganisationsComponent {

  public organisations: Organisation[] = require('!!js-yaml-loader!!../../../github-organizations.yml');

}

export interface Organisation {
  title: string;
  description: string;
  link: Link;
}

export interface Link {
  url: string;
  icon: string;
  title: string;
}
