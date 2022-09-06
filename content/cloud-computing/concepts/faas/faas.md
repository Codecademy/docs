---
Title: 'FaaS'
Description: 'Function as a service (FaaS) is a cloud computing model that offers the ability to develop applications without building and maintaining the typical infrastructure needed for application development and deployment.'
Subjects:
  - 'Computer Science'
  - 'Networking'
Tags:
  - 'Cloud'
  - 'Functions'
  - 'Development'
  - 'Infrastructure'
CatalogContent:
  - 'foundations-of-cloud-computing'
  - 'paths/back-end-engineer-career-path'
---

**Function as a service (FaaS)** is a cloud computing model that offers the ability to develop applications without building and maintaining the typical infrastructure needed for application development and deployment. The application functionality is developed and hosted on the cloud resulting in a "serverless" architecture.

## History

FaaS was first offered by start-ups like PiCloud around 2010. It has since been offered by large vendors such as Google (Google Cloud Functions) and Microsoft (Microsoft Azure Functions).

## Advantages and Disadvantages

The main difference between the FaaS and platform as a service (PaaS) models is that FaaS services hide the [server](https://www.codecademy.com/resources/docs/general/server) details from the user. Instead of paying for server processes being run on the cloud, the user is paying for function execution time. Because FaaS does not require a server process to be constantly run, the user does not pay for any process idle time. The disadvantage to this is that initial requests might take several seconds to respond (though [caching](https://www.codecademy.com/resources/docs/general/cache) may reduce subsequent requests to milliseconds). The advantage is a lower cost and higher scalability.
