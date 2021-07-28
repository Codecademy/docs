---
Title: "Commit in Git"
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

In Git, commits are used as snapshots of a given branch in a repository. Collectively, they serve as the growth history of all the branches in a git repository. The most recent commit is considered directly related to the pointer of the current branch. \


## Syntax 

```
git commit
```



## How do I Commit?

Before using `git commit`, make sure to have all the neccessary files staged for the commit. 

```
git add <filename or "." to add all files>
```

After the files are staged for commit, use the following syntax: 

```
git commit [-m "optional '-m' to add commit message here"]
```

Here is what the command line would like look afterwards: 

```
git commit
[master (root-commit) b77d68b]
 3 files changed, 26 insertions(+)
 create mode 100644 git_practice.js
 create mode 100644 package-lock.json
 create mode 100644 package.json
```

With message: 

```
git commit -m "this is a commit message"
[master (root-commit) b77d68b] this is a commit message
 3 files changed, 26 insertions(+)
 create mode 100644 git_practice.js
 create mode 100644 package-lock.json
 create mode 100644 package.json
 ```