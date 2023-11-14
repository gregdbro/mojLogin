Commands to execute the suite:
npm run wdio
npm run allure-reports

How to setup the suite:
Execute terminal commands
node -v / v16.14.1
npm -v / 8.5.0

npm init
npm init wdio .

Change wdio.conf.js baseUrl to the desired URL

Create mojLogin.feature file under directory ./mojLogin/features
Provide the cucumber steps which the test case should follow

Create steps.js file under directory ./mojLogin/features/step-definitions
Provide the step definitions that map the feature file to the page object

Create login.page.js under directory ./mojLogin/features/pageobjects
Define the element paths
Define each action that will take place

npm install @wdio/allure-reporter --save-dev
npm i allure-commandline

Change wdio.conf.js reporters to allure to the desired URL

git init -b main

Create a .gitignore file in the main directory of the project
Add node_modules to it

git status
git add .
git commit -m"Committing technical test for review"

git remote add origin https://github.com/gregdbro/mojLogin.git
git branch -M main
git push -u origin main