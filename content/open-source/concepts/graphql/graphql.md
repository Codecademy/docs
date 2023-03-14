---
Title: 'GraphQL'
Description: 'GraphQL is an open-source query language that allows developers to consume, construct, and create APIs in their own unique way.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'APIs'
  - 'Open Source'
  - 'Queries'
  - 'Servers'
CatalogContent:
  - 'paths/computer-science'
  - 'paths/back-end-engineer-career-path'
  - 'paths/front-end-engineer-career-path'
---

[**GraphQL**](https://graphql.org/) is an open-source query language that allows developers to consume, construct, and create [APIs](https://www.codecademy.com/resources/docs/general/api) in their own unique way. It allows for performing actions with APIs via a query language, similar to using [SQL](https://www.codecademy.com/resources/docs/sql) when performing CRUD (Create, Read, Update, and Delete) operations on a database. A GraphQL service is created by defining types, with different fields available on those types, and then providing functions for each of those fields on how to resolve them. GraphQL supports multiple languages including [JavaScript](https://www.codecademy.com/resources/docs/javascript), [TypeScript](https://www.codecademy.com/resources/docs/typescript), [Java](https://www.codecademy.com/resources/docs/java), [C#](https://www.codecademy.com/resources/docs/c-sharp), [Go](https://www.codecademy.com/resources/docs/go), [Python](https://www.codecademy.com/resources/docs/python), and [Ruby](https://www.codecademy.com/resources/docs/ruby).

## History of GraphQL

GraphQL was initially developed by Meta (formerly Facebook) in 2012 to address internal issues with their mobile applications. As an alternative to representational state transfer (REST) architecture, GraphQL became open source in 2015. Consequently, because GraphQL makes data transfers more efficient, it reduced network usage for Meta's mobile applications drastically. Since then, GraphQL has attracted a large number of developers and is becoming increasingly popular for client-[server](https://www.codecademy.com/resources/docs/general/server) communication.

## Why Adopt GraphQL?

Before adopting GraphQL, developers should be familiar with RESTful architecture. Here are some of the benefits of using GraphQL over REST:

- GraphQL allows developers to easily integrate with [databases](https://www.codecademy.com/resources/docs/general/database), [JSON](https://www.codecademy.com/resources/docs/general/json) files, RESTful APIs, and [cloud services](https://www.codecademy.com/resources/docs/cloud-computing/cloud-services).
- It prioritizes giving clients the exact data required and nothing more, so only the needed data is received, helping to eliminate over-fetching.
- It can be used to construct requests that pull data from multiple sources into a single API call and response.
- Easier to adopt new data to existing objects, helping to improve future changes and potential under-fetching.
- For example, an existing setup with objects and types already defined needs to include more data in the object (this could require a large change of including an additional fetch within the flow) or additional steps when modeling/mapping the responses to the object.

## How GraphQL Works

A common GraphQL workflow can be seen below:

1. First, specific data is requested from the client via a query to the GraphQL server.
2. To retrieve that data, a function on the GraphQL server is invoked.
3. Lastly, the GraphQL server returns the specific data requested by the client.

In a system like REST, only a single set of arguments can be passed in: the query parameters and [URL](https://www.codecademy.com/resources/docs/general/url) segments of the request. But in GraphQL, every field and nested object has its own set of arguments, making GraphQL a complete replacement for making multiple API fetches. By passing arguments into scalar fields, data transformations can be implemented on the server rather than on every individual client, which can be more efficient.

![source="https://graphql.org/learn/queries/"](https://raw.githubusercontent.com/Codecademy/docs/main/media/GraphQL-parameters-example.png)

In GraphQL, object types are the most basic building blocks of a schema and represent the kinds of objects that can be fetched from the service, along with their fields. In the GraphQL schema language, they can be represented as follows:

![source="https://graphql.org/learn/queries/"](https://raw.githubusercontent.com/Codecademy/docs/main/media/GraphQL-default-values-example.png)

- The `Character` type is an example of an object type, it has a set of fields that define its characteristics.
- `name` and `appearsIn` are fields that belong to the `Character` object type in GraphQL. These fields contain specific information about a `Character`, and they are the only fields that can be included in a GraphQL query when retrieving data about a `Character`.
- `String` is one of the predefined scalar types in GraphQL. Scalar types represent a single, indivisible value and cannot have sub-selections within a query. The `String` type represents a sequence of characters and is one of the default scalar types provided by GraphQL.
- The `String!` type indicates that a field is non-nullable, which means that it will always return a value when queried. This is represented in the type language using an exclamation mark (`!`). This means that when this field is included in a query, a string value must be received in the response, rather than a `null` value.
- `[Episode!]!` represents an array of non-nullable `Episode` objects. When the `appearsIn` field is queried, an array of `Episode` objects must be received in the response, even if the array is empty. Additionally, each item in the array is guaranteed to be a non-null `Episode` object.

It is also possible to assign default values to variables in the query by adding the default value after the type declaration.

![source="https://graphql.org/learn/schema/"](https://raw.githubusercontent.com/Codecademy/docs/main/media/GraphQL-types-example.png)

If default values are provided for all variables in the query, it is not necessary to pass any variables when calling the query. However, if variables are passed in as part of the variables dictionary, they will take precedence over the default values.

## Types

GraphQL includes a set of predefined scalar types that can be used in the schema. These are known as the "default scalar types":

- `Int`: A signed 32-bit integer.
- `Float`: A signed double-precision floating-point value.
- `String`: A UTF-8 character sequence.
- `Boolean`: `True` or `False`.
- `ID`: Represents a unique identifier, which is often used to reference an object or as the key for a cache. It is a string type that is intended to represent a unique identifier for an object, such as a database record or a file.

## Subscriptions

GraphQL provides support for a third type of operation called subscriptions in addition to queries and mutations. Subscriptions allow a client to receive real-time updates from the server. Subscriptions in GraphQL, like queries, allow the retrieval of data from the server. However, subscriptions are different from queries in that they are long-lasting operations that can change their result over time. A subscription maintains an active connection to the server, typically using WebSockets, which allows the server to push updates to the client whenever the data changes. This enables the client to receive updates about the data in real-time, rather than having to request the data again each time it changes. They can be used to notify the client in real-time about changes such as the creation of a new object or changes to an important field.

## Error Handling

Error handling is part of the default GraphQL response structure. Here's how it works:

- Successful requests return a JSON response with a data field containing the results of a query/mutation.
- Un-successful requests include an additional errors field, representing an array of errors that may have occurred during a request.
- Errors are returned within the errors array field.
- Requests may return a partial response where some fields contain data and others contain an errors array.

## Who Is Using GraphQL?

GraphQL is used by small and large businesses. Some bigger companies include Airbnb, Lyft, [GitHub](https://www.codecademy.com/resources/docs/general/github), Twitter, Paypal, and Shopify. More information can be found [here](https://graphql.org/users/).
