# Cypress Framework

This repository is used to create testcases for to do tasks page.

#### Tools used
Cypress: **10.17**
CI tool: **CircleCI**

#### Run tests
You can run tests by using below command

```test": "npx cypress run"```

```"headTest": "npm run test --headed"```

```"chromeTest": "npm run test --browser chrome"```


#### Pipeline

CircleCI is used for running the automation tests. Pipeline will be run whenever new commits are pushed and it is added as quality check before merging the code to main branch. Pipeline reports can be found [here](https://app.circleci.com/pipelines/github/saitejasripattapu/cypressAutomation).

Integration of **CircleCI** pipeline and **Cypress** dashboard is in place.

#### Cypress Dashboard Reporting

Test report is available in the Cypress dashboard: https://dashboard.cypress.io/projects/cotv91/runs/4/overview

`mochawesome` reporting has been implemented. So we have availability of screenshots and videos.

Examples of failure scenarios(bugs)
- Screenshots: https://dashboard.cypress.io/projects/cotv91/runs/fd6f2056-1010-4f41-97e0-4004c6eb5101/test-results/a8a4f7d1-7277-4718-960c-db4d6d8d4ddc/screenshots
- Videos: https://dashboard.cypress.io/projects/cotv91/runs/fd6f2056-1010-4f41-97e0-4004c6eb5101/test-results/a8a4f7d1-7277-4718-960c-db4d6d8d4ddc/video


### Bug reporting

Automation bugs are reported in the Cypress dashboard from the pipeline directly. [Click here](https://dashboard.cypress.io/projects/cotv91/runs/4/overview)

Manual testcases are available [here](https://docs.google.com/spreadsheets/d/1rqSjW3q06sC6GgQFBvLtmOgJG4WaeFub3n7HZPYwPQA/edit?usp=sharing)

