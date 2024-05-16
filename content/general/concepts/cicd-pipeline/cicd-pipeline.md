---
Title: 'CICD Pipeline'
Description: 'The CICD pipeline automates the software/application delivery process.'
Subjects:
  - 'Developer Tools'
  - 'Mobile Development'
  - 'Web Design'
  - 'Web Development'
Tags:
  - 'Developer Tools'
  - 'Development'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/back-end-engineer-career-path'
---

The **CICD Pipeline** is the combination of continuous integration, delivery, and deployment of software development and application deployment.

CI (Continuous Integration) is the automation process for developers. CD (Continuous Delivery and Continuous Deployment) is the automated delivery of code to the testing and development steps of the pipeline. These environments are usually in a repository like Github. Continuous deployment refers to code passing automated tests and then placed in production, which in turn is used for automatic deployment.

## The Four Phases of a CICD Pipeline

1. Source: The creation of code by developers, which is continuously integrated within a shared repository. Version control systems, like Git are used for tracking and managing changes to the software. When changes are committed to the repository, automated builds and tests are triggered.

2. Build: The process of using code from the repository to link necessary dependencies and libraries to "build" an executable file. Scripts can be utilized to convert the file to a [virtual machine](https://www.codecademy.com/resources/docs/general/virtual-machines) or container. Logs generated during this time are used to find errors and send notifications to developers when the build is complete.

3. Test: Automated testing tools confirm the build is working and any new additions are not causing disruptions to a previous working version. If there are any errors, the test results are sent back to the developers to fix.

4. Deploy: After a build successfully passes rigorous testing, it is automatically deployed to the production environment. Since no deployment is perfect, there are still ways to report the unexpected errors and alert developers, which starts the process all over again.
