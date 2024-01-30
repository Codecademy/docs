# Docs: Contribution Guide 👩🏻‍💻👨🏾‍💻👩🏼‍💻

> **[Contribute to Docs](https://www.codecademy.com/pages/contribute-docs)!** Please see our updated **[Contribution Guide](https://www.codecademy.com/resources/docs/contribution-guide)** that provides a step-by-step video and text guide on how you can make an impact through Docs. 🌠

Welcome to the [Docs](https://www.codecademy.com/resources/docs) GitHub repo!

We are an inclusive and passionate team of technologists and life-long learners around the world, building free programming resources for a better tomorrow. For newcomers, contributing to an open-source project for the first time can be intimidating and overwhelming. Perhaps you’re a code newbie, or maybe you’ve been tinkering for years but haven’t found that special project yet.

Good news, you are in the right place! Docs is the perfect open-contribution project for you to get started. Every part of [Docs](https://www.codecademy.com/resources/docs) content (entries, documentation, and translations) is written by amazing creative folks like yourself.

Thanks for your interest; we'd love to have you contribute. 💖

## How do I contribute?

There are many ways to contribute to Docs:

- Submit a Pull Request to edit an existing entry.
- Submit a Pull Request to create a new entry.
- Submit a bug in [GitHub Issues](https://github.com/Codecademy/docs/issues).
- Give feedback in the [Typeform Survey](https://codecademyready.typeform.com/to/hzVIWDgz).
- Join the [#CodecademyDocs](https://twitter.com/search?q=%23CodecademyDocs&src=typed_query&f=live) discussion on Twitter.

If you're new to Docs and contributing for the first time, it is recommended that you visit the [Issues](https://github.com/Codecademy/docs/issues) section and ask to be assigned to an [open issue](https://github.com/Codecademy/docs/blob/main/CONTRIBUTING.md#how-do-i-claim-an-issue) that interests you. Otherwise, feel free to submit a [PR](https://www.codecademy.com/resources/docs/git/pull-requests) by creating a new [branch](https://www.codecademy.com/resources/docs/git/branch) in your fork to create a new entry or edit an existing one.

## How do I claim an Issue?

Becoming an assignee to an issue follows this workflow:

1. Comment on a thread for an open issue that you're interested in being assigned to (e.g., [Issue #1026](https://github.com/Codecademy/docs/issues/1026)).
2. Await 2-3 days for a maintainer's response to be assigned an issue. If assigned, start working on a PR. If not yet assigned, continue steps 1 and 2 until assigned an issue.
3. If a PR has not been opened in 2 weeks for the issue, the issue may be reassigned to another contributor. Maintainers will do their best to notify contributors by tagging their GitHub handle along the issue thread every 5-7 days.
4. Please note that you aren't allowed to claim more than 3 open issues (issues without a PR) at a time.

## How do I submit a Pull Request (PR)?

Contributing follows this workflow:

1. Fork [this project repository](https://github.com/codecademy/docs): ![A red stencil outlining the "Fork" link for the Codecademy Docs repo](https://raw.githubusercontent.com/Codecademy/docs/main/media/indicate_fork_link.png)
2. Clone the forked repository to your computer. One option is using the HTTPS URL: `git clone https://github.com/github_username/docs.git`
3. Create and switch into a new branch.
4. Edit or create an entry and commit the changes.
5. Make a PR to merge your fork with this repo: ![Red arrow on the Codecademy Docs repo pointing at a pop-up link for creating a new pull request](https://raw.githubusercontent.com/Codecademy/docs/main/media/create_pull_request_link.png)

If you haven't gone through this workflow before, you can check out [this GitHub tutorial](https://github.com/firstcontributions/first-contributions#readme) (highly recommend) or [this YouTube video](https://www.youtube.com/watch?v=rgbCcBNZcdQ) to learn about how to make a PR from a fork using Git.

Alternatively, if you'd prefer to work directly on GitHub, you can follow the instructions in that video up to 1:18. After forking this repo, you can create your entry in your fork using the website's user interface and make a PR by pressing this handy button:<br>

<img src="https://github.com/Codecademy/docs/blob/main/media/pull-request-ui.png" alt="Code block with Codebyte tags" width="800"/>

If you are uncomfortable using Git, you can also check out [this YouTube video](https://youtu.be/RPagOAUx2SQ) to do this all using the GitHub Desktop app.

> **Note:** There should be some noticeable activity (such as new commits or comments) within the PR branch every 2-3 days.

## How can I test my changes before submitting a PR?

There are a few tools you'll need to install in order to run our test suites locally:

- [yarn](https://classic.yarnpkg.com/lang/en/docs/install): we use yarn to manage dependencies (instead of npm)
- [node 16.0.0 (or newer)](https://nodejs.org/en/download/): the tests will likely run on earlier versions of node, but if you'd like your changes to be formatted automatically when you commit then you will need to be on node 16 or greater
- [nvm](https://github.com/nvm-sh/nvm#installing-and-updating): while not required, we recommend using nvm to manage multiple versions of node on the same machine

With everything installed, in the repository root (whatever directory contains the `package.json` file), you can run:

> **Note**: If you use `npm` instead of `yarn`, it is fine to do so with the commands described below.

- `yarn format:verify` and `yarn lint:md` to validate markdown file contents
- `yarn test` to validate `content/` directory structure

## I submitted a PR, but tests are failing. How do I fix them?

Here are some common issues and resolutions:

- The `verify_formatting` is failing
  - Run `yarn format path/to/markdown/file.md` or `yarn format:all` and commit the results.
- The `verify_lint` is failing
  - Same as above.
  - If `verify_lint` is still failing, running `yarn lint` locally should let you know what needs to be changed by hand.
- The `test` is failing
  - Ensure any new markdown files have a `Title` and `Description` defined in their metadata.
  - Ensure any new markdown files only contain alphanumerics and dashes in their file names and have the same name as their parent directory.
  - If that looks okay, running `yarn test` locally should let you know what the issue is.

## What do I need to do before creating new entries?

Before creating new entries, poke around the [/content](https://github.com/Codecademy/docs/tree/main/content) folder. This is where all the content is stored.

Please read through the following in the [/documentation](https://github.com/Codecademy/docs/tree/main/documentation) folder. In these links, you'll find a write-up of our standards for content and style:

- [Catalog Content Guide](https://github.com/Codecademy/docs/blob/main/documentation/catalog-content.md)
- [Content Standards](https://github.com/Codecademy/docs/blob/main/documentation/content-standards.md)
- [Tags List](https://github.com/Codecademy/docs/blob/main/documentation/tags.md)
- [Subjects List](https://github.com/Codecademy/docs/blob/main/documentation/subjects.md)

The following are templates for creating your new entries:

| Template                                                                                                       | GitHub Example                                                                                                                                                                                                                      | Docs Example                                                            |
| -------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| [Concept Entry Template](https://github.com/Codecademy/docs/blob/main/documentation/concept-entry-template.md) | [lists.md](https://github.com/Codecademy/docs/blob/main/content/python/concepts/lists/lists.md) ([Raw](https://raw.githubusercontent.com/Codecademy/docs/main/content/python/concepts/lists/lists.md))                              | [Lists](https://www.codecademy.com/resources/docs/python/lists)         |
| [Term Entry Template](https://github.com/Codecademy/docs/blob/main/documentation/term-entry-template.md)       | [append.md](https://github.com/Codecademy/docs/blob/main/content/python/concepts/lists/terms/append/append.md) ([Raw](https://raw.githubusercontent.com/Codecademy/docs/main/content/python/concepts/lists/terms/append/append.md)) | [Append](https://www.codecademy.com/resources/docs/python/lists/append) |
| [Topic Entry Template](https://github.com/Codecademy/docs/blob/main/documentation/topic-entry-template.md)     | [sql.md](https://github.com/Codecademy/docs/blob/main/content/sql/sql.md) ([Raw](https://raw.githubusercontent.com/Codecademy/docs/main/content/sql/sql.md))                                                                        | [SQL](https://www.codecademy.com/resources/docs/sql)                    |

### Codecademy Username

As a Docs contributor, you have the opportunity to have your Codecademy username displayed on the side of the entry!

If you wish to have your Codecademy profile listed in the entry, before making the PR, make sure that your Codecademy user profile and your GitHub are linked, and that your Codecademy profile is set to public. You can stay anonymous by not linking them.

To link your Codecademy user profile to GitHub:

1. Log out of Codecademy.
2. Make sure that the email address associated with your Codecademy account is the [primary email associated with your Github account](https://github.com/settings/emails).
3. Go to the [Codecademy login page](https://www.codecademy.com/login).
4. Select the Github icon under "Or log in using:"
5. Proceed through the OAuth process.

## Any requirements for a Pull Request (PR)?

- Before making a PR, make sure you pushed your changes from a branch other than `main`.
- Name the new branch after the changes being pushed to the PR.
- Keep your PRs byte-sized. No more than 3 new entries per PR! And do not have more than 3 PRs open in a two week period!
- All contributors must sign the [Contributor License Agreement (CLA)](<[url](https://cla-assistant.io/Codecademy/docs)>) when contributing for the first time.
- All required [status checks](https://docs.github.com/en/github/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks) are expected to pass in each PR.
- PRs will be marked as **invalid** if there is no consistent activity within a **2-week period** on the contributor's part and content does not meet or pass standard formatting, quality, and plagiarism checks.
- We require at least two round of reviews from the [content team members](https://github.com/codecademy/docs#-content-team). Make sure to make the changes after each round.
- Requested changes must be resolved before merging.
- Your entry will be deployed within the hour after it's merged!
- Refer to the [Codecademy Markdown Style Guide](https://curriculum-documentation.codecademy.com/content-guidelines/markdown-style-guide/).

## What do we check for?

- Technical accuracy
- Formatting standards
- Typos/bugs
- Plagiarism

## What is the policy for using generative AI?

We will not accept entries that were exclusively generated through an AI tool. We have this policy because:

- AI-generated content is often confidently incorrect, leading to the spread of inaccurate or misleading information.
- We provide authorship credit for submissions, and to submit AI-generated work under one's own name would be a violation of our plagiarism policy.
- Docs is an educational space for people to learn how to write effective technical documentation. Using generative AI, at this point, negatively impacts that desired learning goal.

## How do we update a PR branch?

To keep your PR branch up to date, navigate to the branch on your fork. Then press `Fetch upstream` and `Fetch and merge`.

![Image of where the `Fetch upstream` button](https://raw.githubusercontent.com/Codecademy/docs/main/media/branch-up-to-date-1.png)

![Image of the `Fetch and merge` button](https://raw.githubusercontent.com/Codecademy/docs/main/media/branch-up-to-date-2.png)

The following Git commands can be run on the command line:

```pseudo
git remote add upstream https://github.com/Codecademy/docs.git
git fetch upstream
git rebase upstream main
git push
```

## Additional Resources

- [How to Contribute to Docs](https://dev.to/codecademy/how-to-contribute-to-codecademy-docs-1a77) article

Remember, if you ever have any questions at all, we're always here to help in the [Codecademy Forums](https://discuss.codecademy.com/c/community/community-docs/2205) and [Codecademy Discord](https://discord.com/invite/codecademy).

If you find any bugs or errors in the content, feel free to file an issue [here](https://github.com/Codecademy/docs/issues/new?assignees=Name+here&labels=bug&template=bug_reports.yml&title=%5BBug%2FError%5D+Subject%3A+Entry+Name)! 🖖
