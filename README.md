# Gatsby Remotely Tailwind Starter

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

### INITIALIZATION

#### Install Gatsby Remotely Tailwind Starter as your project

Please note that Gatsby CLI (`npm install -g gatsby-cli`) should be installed on your system in order to run gatsby commands.

1. Clone this repo to create your project and navigate to it (replace my-project with something telling)

```
$ git clone https://github.com/arnars/gatsby-remotely-tailwind-starter/ my-project && cd my-project
```

2. Create new repository on our [GitHub page](https://github.com/arnars) called my-project

3. Modify `package.json` to fit your needs.

4. Install project dependencies

```
$ npm
```

6. Make your first commit

```
$ git add :/ -A && git commit -m "First commit"
```

6. Push to master

```
$ git push origin master
```

7. Branch out and start developing

```
$ git checkout -b my-branch && npm run dev
```

### DEVELOPING

#### Install

1. Clone the repo, then install the required node modules using `npm`.

```
$ git clone https://github.com/arnars/my-project.git && cd my-project && npm install
```

2. Branch out and start developing

```
$ git checkout -b my-branch && npm run dev
```

#### Branching

Branching is inspired by [Gitlab Flow](https://docs.gitlab.com/ee/workflow/gitlab_flow.html).

A few pointers:

1. Feature branches (commits), Master branch (PR) and Production branch (PR)
2. Always do work using feature branches, **no direct commits on master or production**
3. Always perform code reviews via pull requests before **rebasing** onto master
4. Always delete feature branches after rebasing onto master
5. Pushed commits are never rebased
6. Everyone starts from master, and targets master
7. Fix bugs in master first then rebase via pull request to production
8. Do not use a GUI for your git'ing, unless you are certain that the above is possible to do

#### Commit messages

Commit messages is based on [The Seven Rules of a Great Commit Message](http://chris.beams.io/posts/git-commit/#seven-rules)

1. Separate subject from body with a blank line
2. Limit the subject line to 50 characters
3. Capitalize the subject line
4. Do not end the subject line with a period
5. Use the imperative mood in the subject line
6. Wrap the body at 72 characters
7. Use the body to explain what and why vs. how

The above 7 rules should always be applied. If working on anything that **is not** a feature, please use one of the following commit type prefixes:

##### Commit types

-   `[fix]` (bug fix)
-   `[docs]` (changes to documentation)
-   `[cleanup]` (removal of obsolete files or code)
-   `[refactor]` (refactoring production code)
-   `[chore]` (updating gulp tasks etc; linting)

E.g. `[chore] Versioning`

When committing features, omit any prefix and just write a telling subject line.

##### Amending

Do not **ever** amend a commit that has been pushed public. Otherwise feel free.
