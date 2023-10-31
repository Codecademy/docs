---
Title: 'Fork'
Description: 'A duplicate of a repository that resides within the independent directories of a contributor.'
Subjects:
  - 'Code Foundations'
  - 'Developer Tools'
Tags:
  - 'Git'
  - 'GitHub'
  - 'Version Control'
CatalogContent:
  - 'learn-git'
  - 'learn-the-command-line'
---

A **fork** is a duplicate of an existing repository. This "fork" is an independent entity that allows a contributor to interact with the original repository. Collaboration, experimentation, and contributions to open-source code are made possible by forking. It enables developers worldwide to collaborate, make changes, and contribute to projects while retaining the integrity of the source code. It is a secure approach to modify and test code without making changes directly to the original.

> **Note:** The fork command is provided by a separate command-line tool than Git.

## Steps to Fork a Repository

- Step 1

First the user login to his/her GitHub account using the command:

```shell
gh auth login
```

- Step 2

After successful login, the user can fork the repository using the command:

```shell
gh repo fork <repository_url>
```

This will create a new copy of the original repository.

> **Note:** Users can get `repository_url` by going to the Github repository that they want to fork and copying the URL.
