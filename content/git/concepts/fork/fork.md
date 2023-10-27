---
Title: 'Fork'
Description: 'Making a duplicate of a repository to work on separately is known as forking.'
Subjects: 
  - 'Code Foundations'
  - 'Developer Tools'
  - 'Web Development'
Tags:
  - 'Git'
  - 'GitHub'
  - 'Version Control'
CatalogContent:
  - 'learn-git'
---

A **fork** is making a duplicate of an existing repository. This "fork" becomes a separate undertaking that the user is in charge of. Collaboration, experimentation, and contributions to open-source code are made possible by forking. It enables developers worldwide to collaborate, make changes, and contribute to projects while retaining the integrity of the source code. It is a secure approach to modify and test code without changing the original.

*NOTE:* The fork command is provided by a separate command-line tool than Git.

## Steps to Fork a Repository

+ Step 1

First the user login to his/her GitHub account using the command:

```shell
gh auth login
```

+ Step 2

After successful login, the user can fork the repository using the command:

```shell
gh repo fork <repository_url>
```

This will create a new copy of the original repository.