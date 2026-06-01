# Repository Rescue Challenge

## Story

A development team has been working directly on `main` and using inconsistent branch names. The history includes messy direct commits and poor branch names. They have also left a configuration drift issue in the documentation. Your responsibility is to stabilize the repository before the next release by cleaning the Git workflow, resolving a merge conflict, and fixing the environment instructions.

## Learning Objective

Practice Git repository diagnosis, branch workflow cleanup, merge conflict recovery, and environment drift repair using a small Node.js application.

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd repository-rescue-challenge
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the app:
   ```bash
   npm run start-prod
   ```

## Investigation Commands

Use these commands to inspect the repository and workflow:

```bash
git log --oneline --all --graph
git branch -a
git status
```

## Expected Deliverables

Submit one PDF containing five screenshots:

1. Broken repository diagnosis
2. Branch cleanup and feature branch creation
3. Merge conflict identification or resolution
4. Environment drift fix
5. Final clean repository state

## Task Guidance

### Task 1: Repository Diagnosis

Inspect the branch history and repository state to identify:

- messy history
- direct commits on `main`
- poor branch names
- one merged branch and one abandoned branch

### Task 2: Conflict Recovery & Workflow Fix

- create a properly named feature branch, for example:
  ```bash
  git checkout -b feature/workflow-cleanup
  ```
- resolve the merge conflict in `src/config.js`
- commit with a meaningful message, for example:
  ```bash
  git commit -m "fix: resolve configuration conflict"
  ```

### Task 3: Environment Drift Repair

- identify the startup mismatch in the README
- correct the environment configuration
- run the application successfully with:
  ```bash
  npm install
  npm start
  ```

## Notes

The application reads the port from `process.env.PORT` and falls back to `3000` if it is not set. The README currently contains an incorrect startup command to simulate environment drift.


> Temporary test change on temp branch.
