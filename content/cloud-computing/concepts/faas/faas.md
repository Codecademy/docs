---
Title: 'FaaS'
Description: 'Function as a service (FaaS) is a cloud computing model that offers the ability to develop applications without building and maintaining the typical infrastructure needed for development and deployment.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Cloud'
  - 'Functions'
  - 'Development'
  - 'Infrastructure'
CatalogContent:
  - 'foundations-of-cloud-computing'
  - 'paths/back-end-engineer-career-path'
---

**Function as a service (FaaS)** is a cloud computing model that offers the ability to develop applications without building and maintaining the typical infrastructure needed for development and deployment. The application functionality is developed and hosted on the cloud. This removes the need for the configuration and maintenance of a [server](https://www.codecademy.com/resources/docs/general/server), resulting in a "serverless" architecture.

## History

FaaS was first offered by start-ups like PiCloud around 2010. It has since been offered by large vendors such as Amazon (AWS Lambda), Google (Google Cloud Functions), and Microsoft (Microsoft Azure Functions).

## Advantages and Disadvantages

The main difference between the FaaS and platform as a service (PaaS) models is that FaaS services hide the server details from the user. This results in the following advantages:

- Instead of paying for server processes being run on the cloud, the user is only paying for function execution time.
- Because a server process is not being constantly run, the user does not pay for any process idle time.
- This results in a lower cost and higher scalability.

The disadvantages include:

- Initial requests to the server might take several seconds to respond, though [caching](https://www.codecademy.com/resources/docs/general/cache) may reduce subsequent requests to milliseconds.
- It requires giving up substantial control. Things like the server, security or database the application uses are handled by the service provider.
- There may be difficulty switching service providers after the application is developed.
