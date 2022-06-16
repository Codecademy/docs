---
Title: 'WSDL'
Description: 'WSDL (Web Services Description Language) is a specification for an XML document that describes a web service.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Data Structures'
  - 'Development'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

**WSDL (Web Services Description Language)** is a specification for an [XML](https://www.codecademy.com/resources/docs/general/xml) document that describes a web service. A WSDL document is a machine-readable description of how a service can be called, what parameters it expects, and what type of data structures are returned by it. [WSDL Version 2.0](https://www.w3.org/TR/wsdl/) was released by the [World Wide Web Consortium](https://www.w3.org/standards/) (W3C) in 2007, but support for this version of the specification is still poorly implemented, with much web development software only supporting [WSDL Version 1.1](https://www.w3.org/TR/2001/NOTE-wsdl-20010315).

WSDL documents are usually constructed and read by web development software, and developers don't often need to interact with these files directly.

## Elements

A WSDL document is made up of the following elements:

- `<definitions>`: The root element defining the name of the service, declares namespaces used in the document, and contains all the other elements.
- `<types>`: The data types used in the form of XML schemas.
- `<message>`: Description of the data exchanged between the web service and its consumers.
- `<portType>`: Combines multiple messages to form a complete transaction.
- `<operation>`: A single request/response operation defined within a `<portType>`.
- `<binding>`: Defines the specific details on how a `<portType>` operation is actually transmitted.
- `<port>`: An individual endpoint address for a binding.
- `<service>`: Defines the collection of ports supported by the web service.
- `<documentation>`: Human-readable comments that can be included within any other WSDL element.

## Structure

The structure of a WSDL document looks like this:

```pseudo
<definitions>
  <types>
    description of types...
  </types>

  <message>
    description of a message...
  </message>

  <portType>
    <operation>
      description of an operation...
    </operation>
  </portType>

  <binding>
    description of a binding...
  </binding>

  <service>
    description of a service...
  </service>
</definitions>
```
