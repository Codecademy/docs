---
Title: '.get()'
Description: 'Sends a GET request to a web server and it returns a response object.'
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

The **`.get()`** method sends a `GET` request to a web server and it returns a response object.

## Syntax

```pseudo
import requests

requests.get("url", **kwargs)
```

`**kwargs` are any number of [dictionary](https://www.codecademy.com/resources/docs/python/dictionaries) items (named arguments) that are passed in as parameters. Many different named parameters can be passed into a `GET` request. For example, they can be used to include cookies in the request, set proxies, set user-agents, or set a page timeout.

## Example

The `.get()` method sends a request for data to a web server. The response object it returns contains various types of data such as the webpage text, status code, and the reason for that response.

```py
import requests

response = requests.get("https://codecademy.com")

print(f"{response.status_code}: {response.reason}")

response = requests.get("https://codecademy.com/cat-pictures")

print(f"{response.status_code}: {response.reason}")
```

This will produce the following output:

```shell
200: OK
404: Not Found
```

## Codebyte Example

The `.get()` method can also take in various parameters. These parameters allow a user to communicate additional information to the web server such as the content type that should be returned, and the user's authentication.

```codebyte/python
import requests

headers = {
  "accept": "application/json",
  "authorization": "bearer token TOKEN"
}

response = requests.get("https://codecademy.com", headers=headers)

print(f"{response.status_code}: {response.reason}")
```
