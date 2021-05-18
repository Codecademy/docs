---
Title: "What is Push in Git?"
Subjects:
  - "Bash/Shell"
  - "Developer Tools"
Tags: 
  - "Git"
  - "GitHub"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-git"
  - "https://www.codecademy.com/learn/learn-the-command-line"
---

In Git, pushing is the process of moving code from one repository to another one. Often this is used to move code from a local machine to a remote one, or to a repository hosting service like GitHub.

Pushing a repository allows a programmer to maintain an easily accessible backup in a second location. It is also used when collaborating with people that would not have access to the computer that the code is written on.

## How do I push?

Prerequisites to pushing from within a repository include the following:

* Being inside of a repository (if you're not, the next step will give you an error)
* Having a clean `git status` (no uncommitted, but tracked, files):

    ```
    $ git status

    On branch main
    nothing to commit, working tree clean
    ```

* Having a valid remote repository set, in our case there is remote repository called companyname-dev:

    ```
    $ git remote -v

    companyname-dev	https://github.com/CompanyName/product-dev.git (fetch)
    companyname-dev	https://github.com/CompanyName/product-dev.git (push)
    ```

Once you are at this stage, pushing is as simple as running the following command from the command line:

```
$ git push <remote-name> <branch-name>
```

Or, in our case:

```
$ git push companyname-dev main
```

If it worked, you'll see the following sort of message:

```
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Writing objects: 100% (3/3), 304 bytes | 304.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/CompanyName/product-dev.git
   0e21f7b..2a668cb  main -> main
```

## Why did something go wrong?

Oh no, it didn't work! There are a few common things that could possibly happen when you try to push code to a remote repository:

* You don't have write access to the repository. This can be solved by being added as a collaborator to the remote repository, ask an owner of the repo for help with that.
* The remote branch has code that is not present on your local branch. The remote repository does not wish to make decisions on your behalf, so you will have to merge the code locally, first. This requires the following steps:
    * First, pull the code from the remote branch into your repo, i.e. `git pull <remote-name> <branch-name>`
    * Resolve and merge conflicts and commit the result, leading back to a clean status
    * Push again using the method detailed above



