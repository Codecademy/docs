# Codecademy Docs: Contribution Guide 👩🏻‍💻👨🏾‍💻👩🏼‍💻

Welcome to the [Codecademy Docs](https://www.codecademy.com/resources/docs) GitHub repo!

We are an inclusive and passionate team of technologists and life-long learners around the world building free programming resources for a better tomorrow. For newcomers, contributing to an open-source project for the first time can be intimidating and overwhelming. Perhaps you’re a code newbie or maybe you’ve been tinkering for years but haven’t found that special project yet.

Good news, you are in the right place! Codecademy Docs is the perfect open-contribution project for you to get started. Every part of [Codecademy Docs](https://www.codecademy.com/resources/docs) content (entries, documentation, and translations) is written by amazing creative folks like yourself.

Thanks for your interest; we'd love to have you contribute. 💖

## How do I contribute?

There are many ways to contribute to Codecademy Docs:

- Submit a Pull Request to edit an existing entry.
- Submit a Pull Request to create a new entry.
- Submit a bug in [GitHub Issues](https://github.com/Codecademy/docs/issues).
- Give feedback in the [Google Form](https://docs.google.com/forms/d/e/1FAIpQLSeqwAiV8C2EjXciqTvPFI-ABxkh9iyy7HL-hnr69GrRW99MiA/viewform).
- Join the [#CodecademyDocs](https://twitter.com/search?q=%23CodecademyDocs&src=typed_query&f=live) discussion on Twitter.

If you're new to Codecademy Docs and contributing for the first time, it is recommended that you visit the [Issues](https://github.com/Codecademy/docs/issues) section and ask to be assigned to an open issue that interests you. Otherwise, feel free to submit a [PR](https://www.codecademy.com/resources/docs/git/pull-requests) by creating a new [branch](https://www.codecademy.com/resources/docs/general/git/branch) in your fork to create a new entry or edit an existing one.

## How do I submit a Pull Request (PR)?

Contributing follows this workflow:

1. Fork [this project repository](https://github.com/codecademy/docs).
2. Clone the forked repository to your computer.
3. Create and switch into a new branch.
4. Edit or create an entry and commit the changes.
5. Make a PR to merge your fork with this repo.

If you haven't gone through this workflow before, you can check out [this GitHub tutorial](https://github.com/firstcontributions/first-contributions#readme) (highly recommend) or [this YouTube video](https://www.youtube.com/watch?v=rgbCcBNZcdQ) to learn about how to make a PR from a fork using Git.

Alternatively, if you'd prefer to keep things to the GitHub UI, you can follow the instructions in that video up to 1:18 to fork this repo. After that, you can create your entry in your fork using the UI and then make a PR by pressing this handy button:<br>

<img src="https://github.com/Codecademy/docs/blob/main/media/pull-request-ui.png" alt="Code block with Codebyte tags" width="800"/>

If you are uncomfortable using Git, you can also check out [this YouTube video](https://youtu.be/RPagOAUx2SQ) to do this all using the GitHub Desktop app.

## How can I test my changes before submitting a PR?

There are a few tools you'll need to install in order to run our test suites locally:

- [yarn](https://classic.yarnpkg.com/lang/en/docs/install): we use yarn to manage dependencies (instead of npm)
- [node 16.0.0 (or newer)](https://nodejs.org/en/download/): the tests will likely run on earlier versions of node, but if you'd like your changes to be formatted automatically when you commit then you will need to be on node 16 or greater
- [nvm](https://github.com/nvm-sh/nvm#installing-and-updating): while not required, we recommend using nvm to manage multiple versions of node on the same machine

With everything installed, in the repository root (whatever directory contains the `package.json` file) you can run

**Note**: If you use `npm` instead of `yarn`, it is fine to do so with the commands described below.

- `yarn format:verify` and `yarn lint:md` to validate markdown file contents
- `yarn test` to validate `content/` directory structure

## I submitted a PR but tests are failing, how do I fix them?

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

- [Content Standards](https://github.com/Codecademy/docs/blob/main/documentation/content-standards.md)
- [Tags List](https://github.com/Codecademy/docs/blob/main/documentation/tags.md)
- [Subjects List](https://github.com/Codecademy/docs/blob/main/documentation/subjects.md)

And here, templates for creating your new entries.

| Template                                                                                                 | GitHub Example                                                                                                                                                                                                                      | Docs Example                                                            |
| -------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| [Entry Template](https://github.com/Codecademy/docs/blob/main/documentation/entry-template.md)           | [lists.md](https://github.com/Codecademy/docs/blob/main/content/python/concepts/lists/lists.md) ([Raw](https://raw.githubusercontent.com/Codecademy/docs/main/content/python/concepts/lists/lists.md))                              | [Lists](https://www.codecademy.com/resources/docs/python/lists)         |
| [Term Entry Template](https://github.com/Codecademy/docs/blob/main/documentation/term-entry-template.md) | [append.md](https://github.com/Codecademy/docs/blob/main/content/python/concepts/lists/terms/append/append.md) ([Raw](https://raw.githubusercontent.com/Codecademy/docs/main/content/python/concepts/lists/terms/append/append.md)) | [Append](https://www.codecademy.com/resources/docs/python/lists/append) |
| [Topic Info Template](https://github.com/Codecademy/docs/blob/main/documentation/topic-info-template.md) | [sql.md](https://github.com/Codecademy/docs/blob/main/content/sql/sql.md) ([Raw](https://raw.githubusercontent.com/Codecademy/docs/main/content/sql/sql.md))                                                                        | [SQL](https://www.codecademy.com/resources/docs/sql)                    |

### Codecademy Username

As a Codecademy Docs contributor, you have the opportunity to have your Codecademy username displayed on the side of the entry (this feature is coming in October)!

If you wish to have your Codecademy profile listed in the entry, before making the PR, make sure that your Codecademy user profile and your GitHub are linked, and that your Codecademy profile is set to public. You can stay anonymous by not linking them.

To link your Codecademy user profile to GitHub:

1. Log out of Codecademy.
2. Make sure that the email address associated with your Codecademy account is the [primary email associated with your Github account](https://github.com/settings/emails).
3. Go to the [Codecademy login page](https://www.codecademy.com/login).
4. Select the Github icon under "Or log in using:"
5. Proceed through the OAuth process.

## Any tips for a Pull Request (PR)?

- Before making a PR, make sure you pushed your changes from a branch other than `main`.
- Name the new branch after the changes being pushed to the PR.
- Keep your PRs byte-sized. No more than 3 new entries per PR!
- All contributors must sign the Contributor License Agreement (CLA).
- All required [status checks](https://docs.github.com/en/github/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks) are expected to pass in each PR.
- We require at least two round of reviews from the [content team members](https://github.com/codecademy/docs#-content-team). Make sure to make the changes after each round.
- Requested changes must be resolved before merging.
- Your entry will be deployed within the hour after it's merged!

## What do we check for?

- Technical accuracy
- Formatting standards
- Typos/bugs
- Plagiarism

## How do we update a PR branch?

To keep your PR branch up to date navigate to the branch on your fork. Then press `Fetch upstream` and `Fetch and merge`.

![Image of where the `Fetch upstream` button](https://raw.githubusercontent.com/Codecademy/docs/main/media/branch-up-to-date-1.png)

![Image of the `Fetch and merge` button](https://raw.githubusercontent.com/Codecademy/docs/main/media/branch-up-to-date-2.png)

The following Git commands can be run on the command line:

```pseudo
git remote add upstream https://github.com/Codecademy/docs.git
git fetch upstream
git rebase upstream main
git push -f
```

## Additional Resources

- [How to Contribute to Codecademy Docs](https://dev.to/codecademy/how-to-contribute-to-codecademy-docs-1a77) article

Remember, if you ever have any questions at all, we're always here to help in the [Codecademy Forums](https://discuss.codecademy.com/) and [Codecademy Discord](https://discord.com/invite/codecademy).

Tag [@sonnynomnom](https://twitter.com/sonnynomnom) if you find a typo, bug, or issue! 🖖
