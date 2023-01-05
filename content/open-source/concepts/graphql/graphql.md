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

[**GraphQL**](https://graphql.org/) is an open-source query language that allows developers to consume, construct, and create [APIs](https://www.codecademy.com/resources/docs/general/api) in their own unique way. It allows us to perform actions with API's via a query language, similar to using SQL when performing CRUD operations on a database. A GraphQL service is created by defining types, with different fields available on those types, and then providing functions for each of those fields on how to resolve them. GraphQL has multiple implementations (Javascript/Typescript, Java, C#, Go, Python, Ruby and more).

## History of GraphQL

GraphQL was initially developed by Meta (formerly Facebook) in 2012 to address internal issues with their mobile applications. As an alternative to representational state transfer (REST) architecture, GraphQL became open source in 2015. Consequently, because GraphQL makes data transfers more efficient, it reduced network usage for Meta's mobile applications drastically. Since then, GraphQL has attracted a large number of developers and is becoming increasingly popular for client-server communication.

## Why Adopt GraphQL?

Before adopting GraphQL, developers should be familiar with RESTful architecture.

- GraphQL allows developers to easily integrate with [databases](https://www.codecademy.com/resources/docs/general/database), [JSON](https://www.codecademy.com/resources/docs/general/json) files, RESTful APIs, and cloud services.
- GraphQL prioritises giving clients the exact data that they require and nothing more, so that we only receive the data that we need, helping to eliminate over-fetching.
- It can be used to construct requests that pull data from multiple sources into a single API call and response.
- Easier to adopt new data to existing objects, helping to improve future changes and potential under-fetching.
  - For example - We have an existing setup with objects and types already defined but we now need to include more data in our object, this could require a large change of including an additional fetch within our flow, or include additional steps when modelling/mapping the responses to our object.

## How GraphQL Works

A common GraphQL workflow can be seen below:

1. First, specific data is requested from the client via a query to GraphQL server.
2. To retrieve that data, a function on the GraphQL server is invoked.
3. Lastly, GraphQL server returns the specific data requested by the client.

In a system like REST, you can only pass a single set of arguments - the query parameters and URL segments of your request. But in GraphQL, every field and nested object have its own set of arguments, making GraphQL a complete replacement for making multiple API fetches. You can even pass arguments into scalar fields, to implement data transformations once on the server instead of on every client separately.

![source="https://graphql.org/learn/queries/"](https://raw.githubusercontent.com/Codecademy/docs/main/media/GraphQL-parameters-example.png)

The most basic components of a GraphQL schema are object types, which just represent a kind of object you can fetch from your service, and what fields it has. In the GraphQL schema language, we might represent it like this:

![source="https://graphql.org/learn/queries/"](https://raw.githubusercontent.com/Codecademy/docs/main/media/GraphQL-default-values-example.png)

- Character is a GraphQL Object Type, meaning it's a type with some fields. Most of the types in your schema will be object types.
- name and appearsIn are fields on the Character type. That means that name and appearsIn are the only fields that can appear in any part of a GraphQL query that operates on the Character type.
- String is one of the built-in scalar types - these are types that resolve to a single scalar object, and can't have sub-selections in the query. We'll go over scalar types more later.
- String! means that the field is non-nullable, meaning that the GraphQL service promises to always give you a value when you query this field. In the type language, we'll represent those with an exclamation mark.
- [Episode!]! represents an array of Episode objects. Since it is also non-nullable, you can always expect an array (with zero or more items) when you query the appearsIn field. And since Episode! is also non-nullable, you can always expect every item of the array to be an Episode object.

Default values can also be assigned to the variables in the query by adding the default value after the type declaration.

![source="https://graphql.org/learn/schema/"](https://raw.githubusercontent.com/Codecademy/docs/main/media/GraphQL-types-example.png)

When default values are provided for all variables, you can call the query without passing any variables. If any variables are passed as part of the variables dictionary, they will override the defaults.

## Types

GraphQL comes with a set of default scalar types out of the box:

- Int: A signed 32-bit integer.
- Float: A signed double-precision floating-point value.
- String: A UTF-8 character sequence.
- Boolean: true or false.
- ID: The ID scalar type represents a unique identifier, often used to refetch an object or as the key for a cache. The ID type is serialized in the same way as a String; however, defining it as anID signifies that it is not intended to be human-readable.

## Subscriptions

In addition to queries and mutations, GraphQL supports a third operation type: subscriptions.

- Like queries, subscriptions enable you to fetch data. Unlike queries, subscriptions are long-lasting operations that can change their result over time. They can maintain an active connection to your GraphQL server (most commonly via WebSocket), enabling the server to push updates to the subscription's result.
- Subscriptions are useful for notifying your client in real time about changes to back-end data, such as the creation of a new object or updates to an important field.

## Error Handling

Error handling is part of the default GraphQL response structure.

- Successful requests return a JSON response with a data field containing the results of a query/mutation.
- Un-successful requests include an additional errors field, representing an array of errors that may have occurred during a request. However only present if errors occur!
- All errors are treated the same way, returned within the errors array field.
- Request may return a partial response, where we have data for some fields and an errors array.

## Who Is Using GraphQL?

GraphQL is used by small and large businesses. Some bigger companies include Airbnb, Lyft, [GitHub](https://www.codecademy.com/resources/docs/general/github), Twitter, Paypal, and Shopify. More information can be found [here](https://graphql.org/users/).
