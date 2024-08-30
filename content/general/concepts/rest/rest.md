---
Title: 'REST'
Description: 'REST is an architectural style for API design that is defined by 6 constraints.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'APIs'
  - 'Developer Tools'
  - 'Dependency'
  - 'Interface'
CatalogContent:
  - 'paths/computer-science'
  - 'paths/front-end-engineer-career-path'
---

**REST** is an architectural style for [API](https://www.codecademy.com/resources/docs/general/api) design that is defined by six constraints. These constraints, or design principles, were first documented in Roy Fielding's dissertation ["Architectural Styles and the Design of Network-based Architectures"](https://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm). The acronym REST stands for REpresentational State Transfer.

A REST [API](https://www.codecademy.com/resources/docs/general/api) is an API that follows the constraints of REST architectural style. REST APIs are the most commonly used APIs today.

## REST Constraints

1. Uniform Interface: The API must use standard HTTP methods to represent the operations that can be performed on a resource (endpoint). Examples of these HTTP methods are `GET`, `POST`, `PUT`, and `DELETE`.
2. Layered System: The API can be implemented with multiple layers, where each layer performs a different task. For example, the data layer (where information is stored) could be implemented on a different server than the authentication layer (where requests are verified).
3. Cacheable: Clients must be able to [cache](https://www.codecademy.com/resources/docs/general/cache) responses, and the server must be able to tell clients how long it should keep a response stored in its cache.
4. Client-Server Model: The client and server must be separate. They must communicate using HTTP requests and responses.
5. Statelessness: The server must not store information related to the client's state or session. The client is responsible for storing and handling this information.
6. Code-On-Demand (optional): In certain cases, the API can send executable code to be run on-demand by the client. JavaScript is a popular language for code-on-demand, but other languages can be used. This is an optional requirement that determines if code within the document can be executed.
