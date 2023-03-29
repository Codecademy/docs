#General Git Commands 

**git config --global user.name "name"** - sets the name you want attached to your commit transactions <br/>
**git config --global user.email "email address"** - sets the email you want attached to your commit transactions

**git init** - creates a new Git repository

**git clone [url]** - download a repository that already exists on GitHub, including all of the files, branches, and commits <br/>
**git status** - shows the status of the files in the repository <br/>
**git add [file name]** - start tracking file (indexe the specified file for later commit) <br/>
**git add [file_name_1] [file_name_2] [file_name_3]** - start tracking several files <br/>
**git add .** - start tracking every file in the working directory <br/>
**git commit** - record changes to the repository <br/>
**git push** - push commit to remote repository (on Github) <br/>
**git reset [file name]** - cancel the indexing of a file (after ‘git add’ command), but keep its content (It does not discard file changes from the working directory) <br/>
**git restore [file name]** - delete changes from the file <br/>
**git reset HEAD~1** - undo the last commit, leaving all changes in the working directory (1 - parameter of how many commits to reset) <br/>
**git reset [commit hash]** - undo all commits after the specified one <br/>

**git format-patch -1** - for creating patch for the last commit ‘-1’ is used <br/>
**git format-patch [commit hash]** - for creating patch for the specific commit <br/>
**git am** - apply patch, changes the file and also creates a commit <br/>
**git apply** - apply patch, changes local files without making a commit <br/>

**git fetch** - downloads changes (commits, files) from a remote repository to a local repository <br/>
**git merge** - merges changes from the remote repository branch into the current local repository branch <br/>
**git pull** - downloads a history from a remote repository and merges it with the local one <br/>
**(git pull = git fetch + git merge)**

**git log** - show history of all files <br/>
**git log --oneline** - shows the list of commits in one line format <br/>
**git log --oneline --graph** - displays a visual representation of how the branches and commits were created <br/>
**git show** - show information about last commit <br/>
**git show [commit hash]** - show information about specific commit <br/>

**git branch [branch name]** - create new branch <br/>
**git checkout [branch name]** - switch to another branch <br/>
**git checkout -b [branch name]** - create and switch to the created branch in one command <br/>
**git branch** OR **git branch --list** - show the list of branches in the local repository (the branch you are in is marked with '*') <br/>
**git branch - a** - show the list of branches in the local and remote repositories <br/>
**git push -u origin [branch name]** - push new branch to the remote repository <br/>
**git merge [branch name]** - merge new branch with the main one (before 'merge' command switch to the main branch) <br/>
**git rebase [branch name]** - reapply commits on top of another base tip

**git branch -m [existing_branch_name] [new_branch_name]** - rename branch <br/>
**git branch -d** - delete branch from the local repository <br/>
**git push origin :[branch_name]** - delete branch from remote repository <br/>



