---
Title: '.head()'
Description: 'Sends a HEAD request to a web server and it returns a response object.'
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

The **`.head()`** method sends a `HEAD` request to a web server and it returns a response object.

## Syntax

```pseudo
import requests

requests.head("url", **kwargs)
```

`**kwargs` are any number of [dictionary](https://www.codecademy.com/resources/docs/python/dictionaries) items (named arguments) that are passed in as parameters. Many different named parameters can be passed in to a `HEAD` request. For example, they can be used to include cookies in the request, set proxies, set user-agents, or set a page timeout.

## Example

The `.head()` method sends a request for data to a web server. The response object it returns contains the response headers (information about the web server's content) without including the content itself. Therefore, `.head()` is similar to [`.get()`](https://www.codecademy.com/resources/docs/python/requests-module/get), but is usually faster.

For example, `.head()` can check to make sure a website is responding, and see what content type is returned, without actually downloading the content:

```py
import requests

response = requests.head("https://www.codecademy.com")

print(response.status_code)

print(response.headers["Content-Type"])

print(response.text)
```

This will produce the following output:

```shell
200
text/html; charset=utf-8

```

## Codebyte Example

The `.head()` method can also take in various parameters. These parameters allow a user to communicate additional information to the web server such as the content type that should be returned, and the user's authentication.

```codebyte/python
import requests

headers = {
  "accept": "application/json",
}

response = requests.head("https://www.codecademy.com", headers=headers)

print(response.headers["Content-Type"])
```
