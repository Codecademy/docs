---
Title: '.post()'
Description: 'Sends a POST request to a web server and returns a response object.'
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

The **`.post()`** method sends a `POST` request to a web server and it returns a response object.

## Syntax

```pseudo
import requests

requests.post("url", **kwargs)
```

`**kwargs` are any number of [dictionary](https://www.codecademy.com/resources/docs/python/dictionaries) items (named arguments) that are passed in as parameters. Many different named parameters can be passed in to a `POST` request. For example, they can be used to include cookies in the request, set proxies, set headers, or set a page timeout.

## Example

The `.post()` method can take in various parameters. These parameters allow a user to communicate additional information to the web server, such as data or [JSON](https://www.codecademy.com/resources/docs/general/json), to send in the request body to create or update a resource.

```py
import requests

data = {
  "my_key": "my_value"
}

response = requests.post("https://codecademy.com", data=data)

print(f"{response.status_code}: {response.reason}")
```

This will print the following output:

```shell
200: OK
```

## Codebyte Example

The response object returned by the `.post()` method contains various types of data, such as the webpage text, status code, and the reason for that response.

```codebyte/python
import requests

data = {
  "my_key": "my_value"
}

response = requests.post("https://codecademy.com")

print(f"{response.status_code}: {response.reason}")
```
