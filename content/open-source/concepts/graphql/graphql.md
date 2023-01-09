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

[**GraphQL**](https://graphql.org/) is an open-source query language that allows developers to consume, construct, and create [APIs](https://www.codecademy.com/resources/docs/general/api) in their own unique way. It allows us to perform actions with API's via a query language, similar to using SQL when performing CRUD (Create, Read, Update, and Delete) operations on a database. A GraphQL service is created by defining types, with different fields available on those types, and then providing functions for each of those fields on how to resolve them. GraphQL supports multiple languages including JavaScript, TypeScript, Java, C#, Go, Python, and Ruby.

## History of GraphQL

GraphQL was initially developed by Meta (formerly Facebook) in 2012 to address internal issues with their mobile applications. As an alternative to representational state transfer (REST) architecture, GraphQL became open source in 2015. Consequently, because GraphQL makes data transfers more efficient, it reduced network usage for Meta's mobile applications drastically. Since then, GraphQL has attracted a large number of developers and is becoming increasingly popular for client-server communication.

## Why Adopt GraphQL?

Before adopting GraphQL, developers should be familiar with RESTful architecture.

- GraphQL allows developers to easily integrate with [databases](https://www.codecademy.com/resources/docs/general/database), [JSON](https://www.codecademy.com/resources/docs/general/json) files, RESTful APIs, and cloud services.
- It prioritises giving clients the exact data that they require and nothing more, so that we only receive the data that we need, helping to eliminate over-fetching.
- It can be used to construct requests that pull data from multiple sources into a single API call and response.
- Easier to adopt new data to existing objects, helping to improve future changes and potential under-fetching.
  - For example - We have an existing setup with objects and types already defined but we now need to include more data in our object, this could require a large change of including an additional fetch within our flow, or include additional steps when modelling/mapping the responses to our object.

## How GraphQL Works

A common GraphQL workflow can be seen below:

1. First, specific data is requested from the client via a query to GraphQL server.
2. To retrieve that data, a function on the GraphQL server is invoked.
3. Lastly, GraphQL server returns the specific data requested by the client.

In a system like REST, you can only pass a single set of arguments - the query parameters and URL segments of your request. But in GraphQL, every field and nested object have its own set of arguments, making GraphQL a complete replacement for making multiple API fetches. By passing arguments into scalar fields, you can implement data transformations on the server rather than on every individual client, which can be more efficient.

![source="https://graphql.org/learn/queries/"](https://raw.githubusercontent.com/Codecademy/docs/main/media/GraphQL-parameters-example.png)

In GraphQL, object types are the most basic building blocks of a schema and represent the kinds of objects that can be fetched from the service, along with their fields. In the GraphQL schema language, they can be represented as follows:

![source="https://graphql.org/learn/queries/"](https://raw.githubusercontent.com/Codecademy/docs/main/media/GraphQL-default-values-example.png)

- The "Character" type is an example of an object type, it has a set of fields that define its characteristics.
- "name" and "appearsIn" are fields that belong to the "Character" object type in GraphQL. These fields contain specific information about a character, and they are the only fields that can be included in a GraphQL query when retrieving data about a character.
- "String" is one of the predefined scalar types in GraphQL. Scalar types represent a single, indivisible value and cannot have sub-selections within a query. The "String" type represents a sequence of characters and is one of the default scalar types provided by GraphQL.
- The "String!" type indicates that a field is non-nullable, which means that it will always return a value when queried. This is represented in the type language using an exclamation mark (!). This means that when you include this field in a query, you can be certain that you will receive a string value in the response, rather than a null value.
- "[Episode!]!" represents an array of non-nullable "Episode" objects. This means that when you query the "appearsIn" field, you will always receive an array of "Episode" objects in the response, even if the array is empty. Additionally, each item in the array is guaranteed to be a non-null "Episode" object.

It is also possible to assign default values to variables in the query by adding the default value after the type declaration.

![source="https://graphql.org/learn/schema/"](https://raw.githubusercontent.com/Codecademy/docs/main/media/GraphQL-types-example.png)

If default values are provided for all variables in the query, it is not necessary to pass any variables when calling the query. However, if you do choose to pass variables as part of the variables dictionary, they will take precedence over the default values.

## Types

GraphQL includes a set of predefined scalar types that you can use in your schema. These are known as the "default scalar types":

- Int: A signed 32-bit integer.
- Float: A signed double-precision floating-point value.
- String: A UTF-8 character sequence.
- Boolean: True or False.
- ID: Represents a unique identifier, which is often used to reference an object or as the key for a cache. It is a string type that is intended to represent a unique identifier for an object, such as a database record or a file.

## Subscriptions

GraphQL provides support for a third type of operation called subscriptions in addition to queries and mutations. Subscriptions allow a client to receive real-time updates from the server.

- Subscriptions in GraphQL, like queries, allow you to retrieve data from the server. However, subscriptions are different from queries in that they are long-lasting operations that can change their result over time. A subscription maintains an active connection to the server, typically using WebSockets, which allows the server to push updates to the client whenever the data changes. This enables the client to receive updates about the data in real time, rather than having to request the data again each time it changes.
- They can be used to notify the client in real time about changes such as the creation of a new object or changes to an important field.

## Error Handling

Error handling is part of the default GraphQL response structure.

- Successful requests return a JSON response with a data field containing the results of a query/mutation.
- Un-successful requests include an additional errors field, representing an array of errors that may have occurred during a request. However only present if errors occur!
- All errors are treated the same way, returned within the errors array field.
- Request may return a partial response, where we have data for some fields and an errors array.

## Who Is Using GraphQL?

GraphQL is used by small and large businesses. Some bigger companies include Airbnb, Lyft, [GitHub](https://www.codecademy.com/resources/docs/general/github), Twitter, Paypal, and Shopify. More information can be found [here](https://graphql.org/users/).
