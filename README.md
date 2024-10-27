# TOP-project-restaurant-menu

### Current Best Practice to Keep `gh-pages` up to date with `main`

_Make sure to read the [npm scripts](https://github.com/SupraSensum/TOP-project-restaurant-menu/blob/main/package.json) themselves so you're not flying blind_

1. Commit your work on `main`. I like to use this npm script to do it all in one shot:
    ```
    npm run addCommitPush
    ```
1. Checkout `gh-pages` and merge `main`
    ```
    git checkout gh-pages && git merge main --no-edit
    ```
1. Run this script that will:
    1. Bundle into `dist`
    1. Add, commit && push just `dist` into `gh-pages`
    ```
    npm run deployPages
    ```