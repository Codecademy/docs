---
Title: '.put()'
Description: 'Sends a PUT request to a web server and returns a response object.'
Subjects:
  - 'Web Development'
Tags:
  - 'Methods'
  - 'APIs'
  - 'HTTP'
  - 'Queries'
  - 'Requests'
CatalogContent:
  - 'learn-python-3'
  - 'paths/analyze-data-with-python'
---

The **`.put()`** method sends a `PUT` request to a web server and returns a response object.

## Syntax

```pseudo
import requests

requests.put("url", **kwargs)
```

`**kwargs` are any number of [dictionary](https://www.codecademy.com/resources/docs/python/dictionaries) items (named arguments) that are passed in as parameters. Many different named parameters can be passed into a `PUT` request. For example, they can be used to include cookies in the request, set proxies, set headers, or set a page timeout.

Although similar to a `POST` request, `PUT` requests are idempotent, meaning that multiple requests have the same result. Multiple `PUT` requests will overwrite the same resource, and multiple `POST` requests will create a new resource each time. Therefore, `PUT` is generally used for update operations, and `POST` for create operations.

## Example

The `.put()` method can take in various parameters. These parameters allow a user to communicate additional information to the web server, such as data or [JSON](https://www.codecademy.com/resources/docs/python/json-module) to send in the request body in order to create or update a resource.

```py
import requests

json = {
  "my_key": "Hello, World!"
}

response = requests.put("https://httpbin.org/put", json=json)

print(response.json()["json"])
```

The following output shows the `json` dictionary that was defined earlier:

```shell
{'my_key': 'Hello, World!'}
```

## Codebyte Example

The response object returned by the `.put()` method contains various types of data, such as the webpage text, JSON (if returned), status code, and the reason for that response:

```codebyte/python
import requests

json = {
  "my_key": "Hello, World!"
}

response = requests.put("https://httpbin.org/put", json=json)

print(f"{response.status_code}: {response.reason}")

print(f"Value of my_key: {response.json()['json']['my_key']}")
```
