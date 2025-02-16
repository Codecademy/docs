---
Title: 'GraphQL'
Description: 'A flexible, efficient API query language that allows clients to request precisely the data they need.'
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

**GraphQL** is a modern query language and runtime for [APIs](https://www.codecademy.com/resources/docs/general/api), developed by Facebook in 2012. It provides a more flexible, powerful alternative to traditional [REST](https://www.codecademy.com/resources/docs/general/rest) APIs by enabling clients to define exactly what data they want to retrieve.

## History

- Developed internally at Facebook in 2012 to address limitations in mobile application data fetching.
- Open-sourced in 2015, gaining rapid adoption in web and mobile development.
- Created to solve inefficiencies in data retrieval and provide more precise data manipulation.

## Working

GraphQL operates through a single endpoint where clients can:

- Define precise data requirements using a strongly typed schema.
- Request multiple resources in a single query.
- Retrieve exactly the data needed, reducing over-fetching and under-fetching.
- Provide a contract between client and server about data capabilities.

## GraphQL vs. REST

| Feature                            | GraphQL                                              | REST                                                                                                  |
| ---------------------------------- | ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Data Fetching**                  | Clients specify the exact data they need             | Server defines fixed endpoints returning predefined data                                              |
| **Over-fetching & Under-fetching** | Avoids both by allowing precise queries              | Over-fetching (getting more data than needed) and under-fetching (making multiple requests) can occur |
| **Endpoints**                      | Single endpoint (`/graphql`) for all queries         | Multiple endpoints for different resources (`/users`, `/posts`, etc.)                                 |
| **Performance**                    | Efficient as only required data is fetched           | Can be inefficient due to multiple round trips                                                        |
| **Flexibility**                    | Highly flexible; clients control response structure  | Less flexible; fixed responses based on server design                                                 |
| **Versioning**                     | No versioning needed; schema evolves dynamically     | Often requires versioning (`/v1/users`, `/v2/users`)                                                  |
| **Batch Requests**                 | Can retrieve multiple resources in one request       | Requires multiple requests for multiple resources                                                     |
| **Real-time Support**              | Built-in support via subscriptions                   | Requires WebSockets or polling for real-time data                                                     |
| **Ease of Use**                    | Requires learning a query language (GraphQL)         | Familiar, follows standard HTTP methods (GET, POST, PUT, DELETE)                                      |
| **Error Handling**                 | Centralized error handling with structured responses | Error handling varies by endpoint and implementation                                                  |
| **Caching**                        | More complex; requires custom caching strategies     | Easily cached using HTTP caching mechanisms                                                           |
