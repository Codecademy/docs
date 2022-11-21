---
Title: 'Proxy Server'
Description: 'Proxy servers are intermediary computers that allows a client to connect with a web server while maintaining privacy.'
Subjects:
  - 'Computer Science'
  - 'Cybersecurity'
Tags:
  - 'Browsers'
  - 'Cybersecurity'
  - 'Encoding'
  - 'Requests'
  - 'Servers'
  - 'Validation'
CatalogContent:
  - 'introduction-to-cybersecurity'
  - 'paths/securing-express-applications'
---

<link rel="canonical" href="https://www.codecademy.com/resources/blog/what-is-a-proxy-server/" />

**Proxy servers** are intermediary computers that allows a client to connect with a web server while maintaining privacy.

Every computer needs a unique IP address to connect with the server(s) of a network. The IP address sends a request to the server for a response with data such as the web page for this entry. Proxy servers come with their own IP address that is used to direct the client's request to the server.

Depending on the setup, use-cases for a single proxy server include the following:

- It can serve as a common "exit point" for the client and the network to access the internet.
- It can be an "entry point" for clients outside of the network to access multiple internal servers.

Unlike [VPNs](https://www.codecademy.com/resources/blog/what-is-a-vpn/), which offer a secure connection that is system-wide, proxy servers only offer privacy protection while web browsing.

## Forward Proxy Servers

Forward proxy servers are used to manage how a person or organization communicates with and accesses external web servers. If an unauthorized user tried to visit a restricted page on the network, the forward proxy server would step in and send a message back saying that the user was denied access.

Depending on the specific needs, forward proxy servers come in the following forms and configurations:

- Transparency proxies are commonly used by institutions (schools, libraries, etc.) to enforce acceptable use policies and cache content for improved performance.
- An anonymous server uses its own IP address for web requests while identifying itself as a proxy (ideal for avoiding ads).
- High anonymity proxies usually change their IP address after each request, maximizing privacy.

## Reverse Proxy Servers

Reverse proxy servers are used by people and organizations for managing incoming web traffic and housing data on multiple servers. With this server in place, all website requests are directed to a single proxy server that can then fetch the requested data and send it back to the computer.

In this setup, the reverse proxy server acts as a traffic cop to ensure that no website server is overloaded with requests. It also serves as a security buffer that prevents people from directly communicating with company servers.
