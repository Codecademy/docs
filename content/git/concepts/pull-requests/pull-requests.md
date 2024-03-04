---
Title: 'Pull Request'
Description: 'Pull requests are used to recommend merging code from one branch into a different branch. PRs are a core tool in open-source software development.'
Subjects:
  - 'Bash/Shell'
  - 'Developer Tools'
Tags:
  - 'Git'
  - 'GitHub'
CatalogContent:
  - 'learn-git'
  - 'learn-the-command-line'
---

Pull requests (PRs) are used to recommend the merging of code from one [branch](https://www.codecademy.com/resources/docs/git/branch) into a different branch. PRs are a core tool in open-source software development as it allows developers to propose changes to large, open-source codebases.

After reviewing, if the changes are approved by the author(s)/collaborators of the repository, they are merged into the base branch (this is usually named the `main` branch). If the changes are not approved, the maintainer(s) may either ask the requester for additional changes or decline the PR altogether.

The review process by the contributors, usually involves:

- Examining the code submitted in the PR for errors and/or optimizations.
- Running tests to ensure the code works as intended.
- Discussing potential modifications.

PRs are featured on popular version control platforms such as [GitHub](https://github.com/) and [GitLab](https://about.gitlab.com/).

## Create a Pull Request

### Method 1: Fork (Ideal for Open Source Projects)

1. Fork the project.
2. Clone the forked repository to your local machine.
3. Create a new branch, then switch to it.
4. `add`, `commit`, and `push` the changes to your forked repository.
5. From the web page of your forked repository, click on the "Pull requests" tab.

> **Note**: Forking a repository is needed when the user lacks write access to the original repository or wants to make changes without affecting the original repository.

### Method 2: Collaborators (Ideal for Small Teams)

If you are a collaborator of a repository (meaning the repository owner has added you as a collaborator), you can:

1. Clone the repository to your machine.
2. Create a new branch, then switch to it.
3. Make your changes, `commit`, and then `push` the branch to the repository.
4. From the web page of the repository, click on the "Pull Requests" tab.

### Method 3: Within an Organization/Company

If you are part of an organization/company, depending on your permissions, you may have the privilege to push branches directly and create PRs (Pull Requests). You can follow the same steps as Method 2 to create a PR.

> **Note:** Regardless of the method you choose, be sure to follow the contribution guidelines and standards specific to the project you are working on.

No matter which method you use, you need to visit the relevant repository to access the PRs (Pull Requests).

Navigate to the repository of the relevant project and go to 'Pull requests'.
![navbar Git Hub](https://raw.githubusercontent.com/Codecademy/docs/main/media/dongle-pullrequest-repositorie.png)

Once on the page, you'll see a blue button labeled 'New pull request'; click on it.
![New pull request interface](https://raw.githubusercontent.com/Codecademy/docs/main/media/new-pullrequest-button.png)

Finally, you just need to configure your Pull Request (PR), specifying the destination repository and branch, as well as the source branch and repository.
![New pull request setting](https://raw.githubusercontent.com/Codecademy/docs/main/media/pullrequest-settings.png)
