---
Title: 'Semantic Technologies'
Description: 'A class of technologies used for data management with a focus on the underlying meaning of the data.'
Subjects:
  - 'Data Science'
Tags:
  - 'Data'
  - 'Database'
  - 'Graphs'
  - 'Metadata'
  - 'Semantic'
CatalogContent:
  - 'paths/data-science-foundations'
  - 'paths/data-science-nlp'
---

**Semantic technologies** are a class of data management technologies that focus on making the underlying meaning of data more transparent to both human and machine users.

Semantic technologies encompass a variety of standards, frameworks, data models, and applications, which are described in further detail below.

## Semantic Data Models

Semantic technologies organize information using the following data models.

### Taxonomies

A **taxonomy** consists of hierarchies of concepts. For example, the concept `poodle` is a subclass of the concept `dog`, in the sense that all poodles are dogs. In turn, the concept `dog` is a subclass of the concept `mammal`. Taxonomies are data models consisting of definitions of concepts and a specification of the hierarchies (relations of subclass and superclass) between them.

### Ontologies

An **ontology** is an enriched taxonomy. Ontologies include all the elements in taxonomies and add the following:

- _Additional relations over concepts_: Ontologies can include relations other than subclass and superclass. For example, to represent the information that cars have tires as parts, one can define a relation `partOf` as holding between the concepts `tire` and `car`. Notice that this is not a hierarchy relation: it does not say that all tires are cars or that all cars are tires.
- _Properties of concepts_: Ontologies can include properties that apply to concepts. For example, to represent the information that cars have weights, one can define the property `weight` as applying to the concept `car`.
- _Additional information about properties and relations_
  - _The domain and range of properties and relations_: Ontologies can include specifications of what types of entities a property or relation applies to (domain) and what values it can take (range). For example, one could specify that the domain of a relation `authorOf` is `person`, and the range is `document`.
  - _Formal structures of properties and relations_: Ontologies can include axioms specifying the formal structures of properties and relations. For example, one could include an axiom that _partOf_ is transitive, to convey the information that if `A` is `partOf` `B`, and `B` is `partOf` `C`, then `A` is `partOf` `C`.

### Knowledge Graphs

A **knowledge graph** models the properties of, and relations between, particular things using an ontology. For example, suppose a grocery store had an ontology modeling all of the concepts relevant to their operations, including concepts about store employees (`cashier`, `manager`, `employee`, etc.), products (`napkins`, `produce`, `apple`), and so on. They could then create a knowledge graph which models and tracks the relationships between particular employees (`Bob Johnson`, `Snoop Dog`), products as identified by barcodes (`175937462846`, `175937462840`), and so on.

## Fundamental Semantic Technology Stack

Most semantic technologies are based on the three following fundamental standards.

### Resource Description Framework (RDF)

**RDF** is a language for storing data. RDF stores data in **triples**, which represent information using a subject-predicate-object format. For example, the information that Brazil is larger than Italy could be represented as a triple as follows:

```pseudo
subject:Brazil predicate:largerThan object:Italy
```

> **Note:** This example is not valid RDF, although it resembles the syntax of some RDF serializations.

### Web Ontology Language (OWL)

**OWL** is a language for creating taxonomies, ontologies, and knowledge graphs using RDF data. OWL provides vocabulary to implement the elements of an ontology, such as `owl:TransitiveProperty`, which specifies that a property or relation is transitive, and `owl:DatatypeProperty` which specifies that the range of values that a property or relation can take.

### SPARQL Protocol and RDF Query Language (SPARQL)

**SPARQL** is a language for querying RDF data. Suppose that a supply-chain manager at a grocery store wanted to identify all of the apples in the store using a knowledge graph. A SPARQL query for getting this information would look something like the following:

```pseudo
SELECT ?x
WHERE {
  ?x rdf:type groceryOntology:apple
}
```

This query will return everything in the knowledge graph that is an instance of the class `apple` in the ontology used to create the knowledge graph (`groceryOntology`).

## Advantages of Semantic Technologies

Proponents of semantic technologies claim that they have several advantages over other common data management technologies, including [relational](https://www.codecademy.com/resources/docs/general/relational-database) and [tabular](https://www.codecademy.com/resources/docs/general/csv) databases. These include:

- Better for integrating data from heterogeneous sources
- Better for extracting data from unstructured sources
- Easier to adapt when the data model needs to be changed
- More accessible to AI systems
- Enable automated logical inferences from existing data
