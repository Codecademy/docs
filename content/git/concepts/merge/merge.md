---
Title: "Merge"
Subjects:
  - "Bash/Shell"
  - "Developer Tools"
Tags: 
  - "Git"
  - "GitHub"
CatalogContent:
  - "learn-git"
  - "learn-the-command-line"
---

In Git, what if you wanted to include all the changes you made to the local branch onto the `main` branch? Merge a pull request into the `main` branch when work is completed. Anyone with push access to the repository can complete the merge.

## Git Command

To merge a branch into the `main` branch:

```shell
git merge branch_name
```

For example, if we want to merge our `feature_test` branch to the `main` branch:

```shell
git merge feature_test
```

## Merging a Pull Request on GitHub

1. On the GitHub repository page, click the "Pull requests" tab at the top.

2. In the "Pull Requests" list, choose the pull request that you'd like to merge.

3. Depending on the merge options enabled for your repository, you can:

    - Merge all the commits into the base branch by clicking **Merge pull request**. If the **Merge pull request** option is not shown, then click the merge drop down menu and select **Create a merge commit**.

    - Squash the commits into one commit by clicking the merge drop down menu, selecting **Squash and merge** and then clicking the **Squash and merge** button.

    - Rebase the commits individually onto the base branch by clicking the merge drop down menu, selecting **Rebase and merge** and then clicking the **Rebase and merge** button.

4. If prompted, type a commit message, or accept the default commit message.

5. If you have more than one email address associated with your GitHub account, click the email address drop-down menu and select the email address to use as the Git author email address. Only verified email addresses appear in this drop-down menu. If you enabled email address privacy, then `<username>@users.noreply.github.com` is the default commit author email address.

6. Click **Confirm merge**, **Confirm squash and merge**, or **Confirm rebase and merge**.

7. (Optional) Last but not the least, delete the branch. This keeps the list of branches in your repository nice and tidy.
