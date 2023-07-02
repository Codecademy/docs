---
Title: 'Prompt Engineering'
Description: 'Prompt Engineering is the study and implementation of prompts which are used to instruct an Artifical Intelligence (AI) into completing a specific task. This document will provide a brief overview of this subject matter, as well as provide additional areas of study. ' # Required; ideally under 150 characters and starts with a noun (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'AI'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'AI'
  - 'Machine Learning'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'intro-to-chatgpt'
    # @KTom101, please let me know if this would be the right path
  - 'paths/intro-to-chatgpt'
---

**Prompt Enginneering** is a low-code solution to providing instructions to Artifical Intelligences(AIs). AIs are typically trained with large amounts of data. As a result, when an AI is given a task, it uses all this data to complete the task. Keep in mind, the task probably does not require that much data. This introduces a handful of issues. Such as hallucinations, or possibly using data that is irrelevant to completing the task. Prompt Engineering allows users to clearly define the guard rails in which the AI must follow in completing the task assigned to it.

## General Tips to Writting a Good Prompt

### Use Clear Language

When forming a prompt, it is important to be precise, yet concise in your instruction. This means being specific, while also trying to do so in the least amount of words. There are several benefits when following this strategy. The motivation for this requires a minimal understanding of how Large Language Models (LLMs).

When an LLM is given a body of text it typically breaks this text into individual units or "tokens." It then processes these tokens in order to generate an answer. This computation comes at a cost, and is the reason why companies charge a certain amount of dollars per token. Particularly when these tokens are being sent through some sort of API request. In these situations, having clear language can not only save money, but also directly affect the performance of the LLM.

One example of using clear language could be the following.

```
Explain the concept of for loops in Javascript. Keep your explaination short, and do not be too descriptive.
```

In this example, there is too much ambiguity for an LLM. For example, there is no guidance on what "short" means, and "not be too descriptive" could have two meanings. Either, do not use too many words, which we already said, or provide a description that is easy to understand. A better prompt would be the following.

```
Use 2 to 3 sentences to explain the concept of for loops in Javascript to a 5 year old.
```

### Define Your Purpose

Another key to writting effective prompts, is defining the purpose of your prompt. Or in other words, effectively defining the goal you wish for the LLM to achieve.

## Prompt Engineering Techniques

[Text about subsection 2]

## Risks & Misuses

[Text about subsection n]

## Prompt Examples

We can currently support:

- Python
- JavaScript
- Ruby
- C++
- C#
- Go
- PHP

See [content-standards.md](https://github.com/Codecademy/docs/blob/main/documentation/content-standards.md) for more details!

```codebyte/js
# Example runnable code block.
console.log('Hello, World!');
```
