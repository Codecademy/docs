---
Title: 'OWL'
Description: 'A language which provides vocabulary for creating ontologies and knowledge graphs.'
Subjects:
  - 'Data Science'
Tags:
  - 'Ontologies'
  - 'Knowledge Graphs'
  - 'Semantic'
CatalogContent:
  - 'paths/data-science-foundations'
  - 'paths/data-science-nlp'
---

**Web Ontology Language (OWL)** is a language used to create ontologies and knowledge graphs. OWL provides vocabulary to describe the classes, properties, and relations that constitute these semantic data models.

OWL ontologies and knowledge graphs are written in [RDF](https://www.codecademy.com/resources/docs/general/semantic-technologies/rdf) and consist of RDF statements.

## OWL Vocabulary

Some important and commonly used OWL terms are described in the tables below.

### Declarations

The following OWL terms are used to declare new classes, individuals, and properties:

|        OWL Term        |            Usage Syntax             |                  Meaning          |
| :--------------------: | :---------------------------------: | :-------------------------------: |
|       `owl:Class`      |       `:ex rdf:type owl:Class`      |       `:ex` is an OWL class       |
|  `owl:NamedIndividual` |  `:ex rdf:type owl:NamedIndividual` |  `:ex` is an OWL named individual |
|  `owl:ObjectProperty`  |  `:ex rdf:type owl:ObjectProperty`  |  `:ex` is an OWL object property  |
| `owl:DatatypeProperty` | `:ex rdf:type owl:DatatypeProperty` | `:ex` is an OWL datatype property |

An **object property** is a predicate which takes an instance of a class as both its subject and object. For example, an object property `hasAuthor` can be defined as holding between instances of the class `books` and the class `authors`.

A **datatype property** is a predicate which takes an instance of a class as its subject, and a literal (such as a string or number) as its object. For example, a datatype property `soldCopies` can be defined as holding between instances of the class `books` and integer numbers.

A **named individual** is a particular member of a class.

### Relations Between Classes

The following OWL terms are used to describe relationships between OWL classes:

|       OWL Term       |             Usage Syntax                                                                            |                                 Meaning                                                                  |
| :------------------: | :--------------------------------------------------------------------------------------------------:| :-------------------------------------------------------------------------------------------------------:|
| `owl:intersectionOf` | `:ex1 owl:intersectionOf (:ex2 :ex3)`                                                               |  `:ex1` contains all and only members of both `:ex2` and `:ex3`                                          |
|    `owl:unionOf`     |     `:ex1 owl:unionOf (:ex2 :ex3)`                                                                  | `:ex1` contains all and only members of either `:ex2` or `:ex3`                                          |
|  `owl:complementOf`  |      `:ex1 owl:complementOf :ex2`                                                                   |        `:ex1` contains all and only non-members of `:ex2`                                                |
|  `owl:disjointWith`  |      `:ex1 owl:disjointWith :ex2`                                                                   |         `:ex1` contains no members in common with `:ex2`                                                 |
| `owl:AllValuesFrom`  |    `:ex1 rdf:type owl:Restriction`<br>`:ex1 owl:onProperty :ex2`<br>`:ex1 owl:AllValuesFrom :ex3`   | `:ex1` contains all and only members that are related by property `:ex2` only to members of `:ex3`       |
| `owl:SomeValuesFrom` |  `:ex1 rdf:type owl:Restriction`<br>`:ex1 owl:onProperty :ex2`<br>`:ex1 owl:SomeValuesFrom :ex3`    | `:ex1` contains all and only members that are related by property `:ex2` to at least one member of `:ex3`|

### Object Property Vocabulary

The following OWL terms are used to describe the behavior of OWL object properties:

|          OWL Term          |              Usage Syntax                 |                                           Meaning                                                 |
| :------------------------: | :---------------------------------------: | :-----------------------------------------------------------------------------------------------: |
|  `owl:ReflexiveProperty`   |   `:ex rdf:type owl:ReflexiveProperty`    |                             Every individual is related to itself by `:ex`                        |
| `owl:IrreflexiveProperty`  |  `:ex rdf:type owl:IrreflexiveProperty`   |                             No individual is related to itself by `:ex`                           |
|  `owl:SymmetricProperty`   |   `:ex rdf:type owl:SymmetricProperty`    |                   If A is related to B by `:ex`, then B is related to A by `:ex`                  |
|  `owl:AsymmetricProperty`  |   `:ex rdf:type owl:AsymmetricProperty`   |                 If A is related to B by `:ex`, then B is not related to A by `:ex`                |
|  `owl:TransitiveProperty`  |   `:ex rdf:type owl:TransitiveProperty`   |   If A is related to B by `:ex`, and B is related to C by `:ex`, then A is related to C by `:ex`  |
|  `owl:propertyChainAxiom`  | `:ex1 owl:propertyChainAxiom (:ex2 :ex3)` | If A is related to B by `:ex2`, and B is related to C by `:ex3`, then A is related to C by `:ex1` |
| `owl:propertyDisjointWith` |    `:ex1 owl:propertyDisjointWith :ex2`   |                If A is related to B by `:ex1`, then A is not related to B by `:ex2`               |

## OWL Profiles

There are three _profiles_ or _fragments_ of OWL that can be used in place of the complete OWL vocabulary. These profiles avoid some OWL vocabulary in order to increase the efficiency of query and automated reasoning tools used on OWL ontologies.

OWL profiles are briefly described below:

- _OWL / EL (Existential Logic)_: OWL / EL is designed for building ontologies that define large numbers of classes and properties.
- _OWL / QL (Query Logic)_: OWL / QL is designed for building ontologies that can be used to query data in [relational databases](https://www.codecademy.com/resources/docs/general/relational-database) through traditional query languages (such as [SQL](https://www.codecademy.com/resources/docs/sql)).
- _OWL / RL (Rules Logic)_: OWL / RL is designed for building ontologies that work with business rules engines.

## OWL Namespace

OWL vocabulary is stored at the following IRI:

`http://www.w3.org/2002/07/owl#`

The prefix `owl` is conventionally used as shorthand for this IRI in OWL ontologies, and is used this way in the tables above.

> **Note**: OWL profiles share the same IRI with full OWL. It is up to the ontology designer to avoid using non-compliant vocabulary when creating an ontology with an OWL profile.
