# learnJS
Repo for learnJS tasks

## Repo rules:

### Language
* english in repo
* js :-)
* maybe ts ;-)

### Files organisation
* src – for source ofk
    * partNumber_Name – example: **2_Basics**
        * subpartNumber_Name – example: **5_Variables**
            * taskName.js – example: **variablesUsage.js**
            * taskName.test.js – test for your task: **variablesUsage.test.js**
* .travis.yml – Travis CI config
* .huskyrc.js – hook for lint and test for pre-commit

### Linter
* Google
    * npm run lint
    * npm run lint-fix

### Testing
* Unit test with Jest 
    * npm run test

### Issues
* for each part create issue and suply with:
    * List of tasks
        * short task description (en + ru)
        * link to the task
    * Milestone if you wish
        * create milestone with same name as your **subbranch**

### Fork 
* You have to fork these repo before you canwork on it send a PR
* Ater the work in your repo is done send a PR from branch with name **username**

### Branches
* master is for best solutions only
* branch for user: **username** – use to merge all of your parts
    * **subbranch** for part: **username**-**partname** (like: nikitarub-basics)
        * (if not enought) subbbranch for task% **username**-**partName**-**taskNumber** (like: nikitarub-basics-1)

### Pull Request
* if you think, that your solution is best – create Pull Request
* **TEST MUST BE WRITTEN BEFORE PR**
* PR rules:
    * name – short task description
    * description:
        * Link to the task
        * Link to your solution
    * Set Reviewers of issue to @nikitarub
    * and assign to yourself
* Your PR will be CI'ed in travis
