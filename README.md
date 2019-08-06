# Micro Focus Open Source Software Portal

The Open Source Software Portal showcases Micro Focus open source projects.

https://microfocus.github.io/

## Adding Content

To add details of your project or GitHub organization, or to post a blog entry related to an open source project:

1. Fork this repository and clone it.
2. Update the respective [YAML](https://yaml.org/refcard.html) file, or add a [Markdown](https://www.markdownguide.org/cheat-sheet) blog post file.
3. Add any required assets.
4. Test the changes using [SEPG](https://jenkins.swinfra.net/job/SEPG/view/Templates/job/New%20SEPG%20Build/build?delay=0sec) or a local build.
5. Commit and push changes to your fork.
6. Create a pull request from your fork to this repository. Take care to fill in the pull request template as requested.

For more details on the fork/pull request workflow, see [Forking Projects](https://guides.github.com/activities/forking/). We recommend using [GitHub Desktop](https://desktop.github.com/) to handle cloning, committing, and pushing.

### Adding a Project

Projects are described in the `projects.yml` file. The following properties should be provided:

- `image`: A URL to a logo representing the project. Logos should be 48x48 pixels, and added in the `src/assets/images` directory. Ensure that it is named in a way that identifies the project, e.g. `my-project-logo.png`. The `image` path in this case would be `assets/images/my-project-logo.png`. If no suitable logo is available, use `assets/images/default-logo.png` to specify the generic Micro Focus logo.
- `title`: The name of the project.
- `description`: A short summary of the purpose of the project. Note that the height of the project cards is limited, so if the title and/or description is particularly long, truncation will occur.
- `link`: The following child properties describe the link to the project's homepage:
  - `url`: The URL of the project's web site or GitHub page.
  - `icon`: The name of one of the [UX Aspects icons](https://uxaspects.github.io/UXAspects/#/css/icons#ux-icons), which should indicate the type of URL. For example, `social-github` for a GitHub repository page, or `home-filled` for a custom site.
  - `title`: The text to apply to the link. For a GitHub repository page, this should be the repository name.

An example of a project entry:

````yaml
-   image: assets/images/ux-aspects-logo.png
    title: UX Aspects
    description: UX Aspects is an open source user interface framework for building modern, responsive, mobile, big data applications on the web.
    link:
        url: https://uxaspects.github.io/UXAspects/#/landing
        icon: home-filled
        title: UX Aspects
````

### Adding a GitHub Organization

A GitHub organization can be added if it contains multiple active Micro Focus projects. GitHub organizations are described in the `github-organizations.yml` file. The following properties should be provided:

- `title`: The name of the organization.
- `description`: A short summary of the purpose of the organization. Note that the height of the organization cards is limited, so if the title and/or description is particularly long, truncation will occur.
- `link`: The following child properties describe the link to the organization's homepage:
  - `url`: The URL of the organization's web site or GitHub page.
  - `icon`: The name of one of the [UX Aspects icons](https://uxaspects.github.io/UXAspects/#/css/icons#ux-icons), which should indicate the type of URL. For example, `ux-icon-social-github` for a GitHub organization page, or `home-filled` for a custom site.
  - `title`: The text to apply to the link.

An example of an organization entry:

````yaml
-   title: Common Application Framework
    description: Big data analytics service for next generation archiving, back-up, content management and analytics products.
    link:
      url: http://cafapi.github.io/
      icon: home-filled
      title: cafapi.github.io
````

### Adding a Blog Post

A blog post can contain news or information about any of the open source projects showcased on the site. To add a new blog post, create a [Markdown](https://www.markdownguide.org/cheat-sheet) file in the `blog-posts` directory named as follows: `YYYY-MM-DD-Post-Title.md`.

Several properties should be provided with each post using [Markdown Front Matter](https://jekyllrb.com/docs/front-matter/).

- `title`: The title of the blog post.
- `author`: The name of the blog post author.
- `date`: The date that the blog post was written, in `YYYY-MM-DD` format.

Within the post body, use `###` (heading 3) and onwards for subheaders, to match the heading hierarchy on the Blog page.

An example of a blog post:

````markdown
---
title: "Angular Productivity"
author: "Ashley Hunter"
date: "2017-05-25"
---
If you have started working with Angular and TypeScript one of the first things you notice is how much the
tooling has improved when compared to writing apps in AngularJS and plain JavaScript. It brings many
benefits such as early error detection, scalability and a productivity boost. With Type Definitions for
nearly all major third party libraries the editor is now able to prompt you with contextually aware
suggestions and often documentation on that function without leaving the editor. You get all these features
as standard in editors such as VS Code, but there are many extensions available for the most popular editors
that can further improve productivity and developer experience using Angular.

### 1. Angular Language Service

The Angular Language Service is an extension being developed by the Angular team and provides some
incredibly useful features.
````

### Testing Changes

There are two ways to test changes: SEPG self-service build, or local build.

#### SEPG

The easiest way to test changes if you do not have a web development environment available is to run an [SEPG self-service build](https://jenkins.swinfra.net/job/SEPG/view/Templates/job/New%20SEPG%20Build/build?delay=0sec). If you do not already have an account, get in touch to arrange access.

To fill in the form, refer to the URL of your forked repository, e.g.:

https://github.com/github-user/microfocus.github.io

| Field               | Value                  |
|---------------------|------------------------|
| GITHUB_SERVER       | `github.com`           |
| GITHUB_ORGANISATION | `github-user`          |
| REPO_NAME           | `microfocus.github.io` |
| BRANCH_NAME         | `master`               |

Check the progress of your build at:

https://jenkins.swinfra.net/job/SEPG/job/github-user/job/github-user~microfocus.github.io~master~CI

On completion, the site will be available at:

https://pages.github.houston.softwaregrp.net/sepg-docs-qa/github-user_CI_microfocus.github.io_master

Include this URL in your pull request under the **Site CI URL** heading.

#### Local Build

This section assumes familiarity with the command line and [NPM](https://www.npmjs.com/).

Ensure that you have the pre-requisites:

1. [Node.js 10.x](https://nodejs.org/en/download/)
2. `npm install -g @angular/cli`

Within the project directory, update the dependencies and build the project:

1. `npm ci`
2. `npm start`

The site can then be viewed at http://localhost:4200/. This is a live development server, so it will reload as you make changes to the source.
