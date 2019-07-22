import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogComponent {

  public posts: Post[];

  constructor() {
    const fileList = require.context('!!frontmatter-markdown-loader!../../../blog-posts', false, /\.md$/);
    this.posts =  fileList.keys().map(fileList);
    this.posts.sort((a: Post, b: Post) => {
      return new Date(b.attributes.date).getTime() - new Date(a.attributes.date).getTime();
    });
  }
}

export interface Post {
  attributes?: Details;
  body?: string;
  html?: string;
  show?: boolean;
}

export interface Details {
  author: string;
  date: string;
  title: string;
}
