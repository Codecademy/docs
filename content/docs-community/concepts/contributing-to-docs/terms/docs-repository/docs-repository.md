---
Title: 'Docs Repository'
Description: 'The docs repository is where contributors can view, edit, and propose new content to be published to the Codecademy Docs site.'
Subjects:
  - 'Code Foundations'
Tags:
  - 'Documentation'
  - 'Git'
  - 'GitHub'
CatalogContent:
  - 'introduction-to-open-source'
  - 'paths/code-foundations'
---

The content-base where Codecademy Docs is housed is the [**`docs` repository**](https://github.com/Codecademy/docs) (or "repo") on [GitHub](https://www.codecademy.com/resources/docs/general/github). Contributors can view, edit, and propose new content for the repo. After the changes are merged into the repo's `main` branch, they will go live on the [Docs site](https://www.codecademy.com/resources/docs).

## Forking the Repository

When getting started, contributors should create a new fork of the `docs` repo. This should be done prior to changing any existing files or creating new ones in order to avoid merge conflicts.

![A red stencil outlining the "Fork" link for the Codecademy Docs repo](https://raw.githubusercontent.com/Codecademy/docs/main/media/indicate_fork_link.png)

The forked repo is a remote repo that exists on GitHub. To make changes on a local computer, a copy of the remote `docs` repo (local repo) must be made using the following command:

```pseudo
git clone https://github.com/github_username/docs.git
```

Changes can now be made in the newly created `docs` folder. It contains all of the files and folders from the remote repo.

## Issues

First-time contributors are highly encouraged to visit the [Issues](https://github.com/Codecademy/docs/issues) tab of the `docs` repo. There, they can ask to be assigned to an open issue and begin writing a markdown file for a new [entry](https://www.codecademy.com/resources/docs/docs-community/entries) or make edits to an existing one.

## Pull Requests

Pull requests (PRs) are used to propose new changes to be merged into the base `main` branch of the `docs` repo. After contributors are finished editing files in the PR branch of their local repo (separate from the `main` branch), they are ready to [add](https://www.codecademy.com/resources/docs/git/add), [commit](https://www.codecademy.com/resources/docs/git/commit), and [push](https://www.codecademy.com/resources/docs/git/push) their changes and open a new PR.

![Red arrow on the Codecademy Docs repo pointing at a pop-up link for creating a new pull request](https://raw.githubusercontent.com/Codecademy/docs/main/media/create_pull_request_link.png)

The draft for the PR borrows from a [template](https://github.com/Codecademy/docs/blob/main/.github/PULL_REQUEST_TEMPLATE.md) to assist with submitting information. After the PR is officially created, it is assigned a number and added to the ["Pull requests" tab](https://github.com/Codecademy/docs/pulls) to await [review](https://www.codecademy.com/resources/docs/docs-community/contributing-to-docs/reviews).
