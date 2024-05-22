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
  - 'paths/data-science'
---

**Prompt Engineering** is the technique of crafting instructions that will be provided to a Large Language Model (LLM) used in Artificial Intelligence (AI) systems.

Large Language Models (LLMs) are typically trained with large amounts of data that is used to answer a prompt. As a result, when an AI is given a task, it uses all of the training data to complete the task even if the task does not require much data. This introduces a handful of issues such as hallucinations, or possibly using data that is irrelevant to completing the task. Prompt Engineering allows users to clearly define which of the training data the AI should use to complete a task.

## General Tips to Writing a Good Prompt

### Use Clear Language

When creating a prompt, it is important to be precise, yet concise in our instruction. There are several benefits when following this strategy, one of which is the AI can achieve it's task in an efficient manner without additional intervention. In addition, there is typically a monetary cost associated when interacting with an LLM. Therefore prompting an LLM with the least amount of words can provide immediate benefits in terms of upfront cost. Understanding the cost associated with prompting an AI requires a basic knowledge of LLMs.

When an LLM is given a body of text it typically breaks this text into individual units or "tokens," the base unit of information that is being sent to the LLM. You can think of a word as a token. Additional information about tokens can be found in [OpenAI's help docs](https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them). It then processes these tokens in order to generate an answer. This computation comes at a cost and is the reason why companies charge a certain amount of dollars per token, particularly when these tokens are being sent through some sort of API request. In these situations, having clear language can not only save money, but also directly affect the performance of the LLM.

One example of using unclear language could be the following:

```
Explain the concept of for loops in Javascript. Keep your explanation short, and do not be too descriptive.
```

In this example, there is too much ambiguity for an LLM. For example, there is no guidance on what "short" means, and "not be too descriptive" could have two meanings. To fix this, do not use too many words or provide a description that is easy to understand. A better prompt would be the following:

```
Use 2 to 3 sentences to explain the concept of for loops in Javascript to a 5 year old.
```

### Define Your Purpose

Another key to writing effective prompts is defining the purpose of the prompt. In other words, effectively defining the goal for the LLM to achieve. This can be done by specifying the tone, format, and audience of the prompt.One area in which tone is important, is writing an email. For example, a different tone would be used when writing an email to a sibling, versus one to someone's boss. Therefore, when asking an LLM to write a draft of an email, it is important to make sure it understands what tone is preferred. In addition to specifying the tone, we can also specify the format of the LLM's response. In some situations, it can be specified that the LLM use a bullet list, versus a series of paragraphs.Finally, by specifying a possible audience, an LLM can even be more precise when generating an email. For instance, an LLM will most likely provide additional details when writing an email in a professional tone versus a casual tone.

### Provide Context

As mentioned earlier, LLMs are trained using vast amounts of data, which is used to effectively craft responses to a prompt. One way to indirectly control what data an LLM uses in its response, is by clearly defining the context of the prompt. Defining context indicates to the LLM what training data it should use to formulate a response.

A common case in which context is important is when asking an LLM to debug an error message when writing code. For example, when encountering a specific error associated with a line of code, a good prompt would be the following.

```
I'm encountering an error in my code. Given the error message, and the following block of code, can you help me find a solution?

Here is the error message:
x
Here is the block of code:
y
```

Keep in mind `x` and `y` are just place holders. When using this prompt, the relevant information should be provided.

## Prompt Examples

Here are some examples that implement some of the concepts mentioned above:

```
Act as a Spanish language tutor. I am new to learning Spanish.

Provide me with 20 must know phrases in Spanish.

Provide translation and pronunciation instructions.
```

In this instance, we are giving the LLM purpose by defining the familiarity with Spanish. The LLM will now craft a response knowing that it's audience is new to Spanish.

```
Imagine yourself as a teacher and I'm your student. You have to explain the topic that I'll ask and then quiz me with your own questions. For example:

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

This example is a little more advanced, but shows how an LLM can be an efficient solution. This prompt has built in commands in which we can adjust the context of the conversation dynamically.

This prompt also shows how the LLM can be trained to respond with a specific format.
