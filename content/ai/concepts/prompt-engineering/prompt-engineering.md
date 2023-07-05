---
Title: 'Prompt Engineering'
Description: 'Prompt Engineering is the study and implementation of prompts which are used to instruct an Artificial Intelligence (AI) into completing a specific task.' # Required; ideally under 150 characters and starts with a noun (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Machine Learning'
  - 'Large Language Model'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'AI'
  - 'Machine Learning'
  - 'Prompts'
  - 'Prompt Engineering'
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

Another key to writting effective prompts, is defining the purpose of your prompt. Or in other words, effectively defining the goal you wish for the LLM to achieve. This can be done by specifying the tone, format and audience of your prompt.

One area in which tone is important, is writting an email. For example, you would probably have a different tone when writting an email to your sibling, versus your boss. Therefore, when asking an LLM to write a draft of an email, it is important to make sure it understands what tone you would prefer.

In addition to specifying the tone, you can also specify the format that you wish an LLM to follow. In some situations you may want the LLM to use a bullet list, versus a series of paragraphs.

Finally, by specifying a possible audience, an LLM can even be more precise when generating text. For instance, an LLM will most likely provide additional details when writting an email for a professional audience, versus a less technical audience.

### Provide Context

As mentioned earlier, LLMs are trained using vast amounts of data. It uses this data to effectively predicate and craft responses to a user's prompt. One way to indirectly control what data an LLM uses in it's response, is by clearly defining the context of your prompt.

A common use case in which context is important, is when asking an LLM to debug an error message from your code. This itself can be an entire area of study by itself, because there can be many types of errors. Let us say we are encountering a specific error associated with a line of our code. A good prompt for this scenario would be the following.

```
I'm encountering an error in my code. Given the error message, and the following block of code, can you help me find a solution?

Here is the error message:
x
Here is the block of code:
y
```

Keep in mind `x` and `y` are just place holders. When using this prompt you will want to provide the relevant information.

## Prompt Examples

Here are some examples that implement some of the concepts mentioned above.

```
Act as a Spanish language tutor. I am new to learning Spanish.

Provide me with 20 must know phrases in Spanish.

Provide translation and pronunciation instructions.
```

In this instance we are giving the LLM purpose by defining our famialarity with Spanish. The LLM will now craft a response knowing that it's audience is new to Spanish.

```
Imagine yourself as a teacher and I'm your student. You have to explain the topic that I'll ask and then check me with your own questions. For example:

You: Binary addition of two bits is done with two operators - AND and XOR. When adding two bits, the output's most significant bit is set to 1 if both bits are 1, and the least significant bit is set to 1 if either bit, but not both, are 1. For example: 0b1 + 0b1 = 0b10, 0b0 + 0b1 = 0b01. Is everything clear?
Me: Yes.
You: Excellent. Solve the following examples: 0b0 + 0b0, 0b1 + 0b0
Me: 0b0 + 0b0 = 0b01, 0b1 + 0b0 = 0b01
You: No, 0b0 + 0b0 = 0b00 because both input bits are zeros.
Me: Oh, I see...

And here are a few commands:
!difficulty (number) - sets the difficulty level of the problems. 0-100. The higher the difficulty, the harder the problems.
!hint (example) - asks for a hint, but not the answer. Ideally, you should guide me in the right direction rather than explain everything.
!topic (topic) - changes the "lesson" topic and forgets everything that was before.
!help - displays this list of commands and chat description.

If you understood everything, write "OK" and nothing else.
```

This example is a little more advanced, but shows how an LLM can be a "low-code" solution. As you can see this prompt has built in commands in which we can adjust the context of the conversation dynamically.

This prompt also shows how can we train the LLM to respond with a specific format.
