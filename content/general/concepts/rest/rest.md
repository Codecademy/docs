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

**REST** is an architectural style for [API](https://www.codecademy.com/resources/docs/general/api) design that is defined by six constraints. These constraints were first documented in Roy Fielding's dissertation ["Architectural Styles and the Design of Network-based Architectures"](https://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm). The acronym REST stands for REpresentational State Transfer, which is foundational to this design architecture, the sharing of resources, or rather representations of those resources, across systems.

## REST Constraints

- Uniform Interface: A constraint that governs the implementation of these interfaces, requiring the use of standard methods and identified resources.

- Layered System: This constraint requires that intermediary systems exist so that the API consumer is never interacting directly with the server.

- Cacheable: Requires that information regarding if a representation can be saved, and for how long, so that this cached version can be used for equivalent requests in the future.

- Client-Server Model: A separation of concerns model that prescribes an interface that is uniform and that does not share details of the implementation, otherwise known as [abstraction](https://www.codecademy.com/resources/docs/general/programming-paradigms/abstraction) and [encapsulation](https://www.codecademy.com/resources/docs/general/programming-paradigms/encapsulation) in OOP.

- Statelessness: All information required to form a response must be available within the request (meaning that there is never any context information regarding the client saved between sessions).

- Code-On-Demand: This is an optional requirement that simply determines that code, such as JavaScript, within the document can be executed.
