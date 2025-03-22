---
Title: 'Opacity'
Description: 'The inability to explain the inner workings of some AI systems.'
Subjects:
  - 'AI'
Tags:
  - 'AI'
  - 'Accessibility'
  - 'Deep Learning'
  - 'Neural Networks'
  - 'Opacity'
CatalogContent:
  - 'learn-explainable-ai-xai'
  - 'paths/build-deep-learning-models-with-tensorflow'
---

Some AI systems are labelled as "black boxes" because it is difficult to explain their inner workings. This feature is known as AI **opacity**.

Opacity is not inherent to all AI systems, but tends to be associated especially with deep learning methods as implemented by [neural networks](https://www.codecademy.com/resources/docs/ai/neural-networks). The problem is that when data is fed into a neural network, that input passes through hidden layers of nodes. These layers perform thousands of computations in a manner that is not predictable in advance. Moreover, the inner meaning of the path that the input takes through these hidden layers is not known by the human programmer. The result is that it may be difficult to explain why the system classified a certain input in the way that it did.

## Problems of AI Opacity

Some reasons for thinking that opaque AI systems are ethically problematic are discussed below.

### The Right to Explanation

Some theorists have argued that AI opacity is a problem because it conflicts with the **right to explanation**. They posit that some decisions must be backed by a substantive explanation of the reasons behind the decision that can be given to those affected by that decision. For example, judges do not merely deliver verdicts and sentences, they explain the reasons behind those decisions in written opinions.

Imagine a neural network that took in the data of a legal case and produced a verdict (with a sentence, if appropriate) as an output. Because of the opacity of neural networks, it might be impossible to give a humanly-understandable, accurate explanation of why the system produced the verdict that it did. Proponents of the right to explanation argue that the use of such an AI system would be unjust, because it conflicts with the rights of legal defendants to be given an adequate explanation of the verdict of their case.

An opposing view is that there is no right to explanation, but only a right to a reliable decision-making process. On this view, so long as an AI system can reliably (at or above expert-human levels) classify cases, there is no further ethical need to explain those decisions. In the present example, this would mean as long as the system could accurately classify defendants as guilty or not guilty at or above the performance of a human judge, defendants would have no legitimate complaint against the use of the system to decide their case.

### Engaging with AI Decisions

AI opacity implies the reasons behind certain AI decisions are inaccessible to human users. This also means that users cannot engage rationally with these reasons. In other words, they cannot check the reasoning against other sources of knowledge, or deliberate with the AI system about those reasons, as can be done with a human decision-maker.

This inability to rationally cross-check AI decision-making becomes an issue when AI decisions are surprising. Suppose, for example, that an AI system is used to forecast how much of a certain material a company should order, and that, on a particular occasion, it makes a surprisingly large recommendation. If employees at the company are unable to understand the reasons behind that particular recommendation, they will be unable to assess those reasons and therefore be unable to know whether to trust the recommendation.

The limitations on rationally engaging with AI decision-making are another potentially ethically problematic feature of relying on AI systems to make high-stakes, morally significant decisions.

## Explainable AI (XAI)

The goal of **Explainable AI (XAI)** is to develop techniques for explaining the processes and outputs of AI systems, thereby addressing the challenges above. Some of the techniques currently used in XAI are explained in the _Learn Explainable AI (XAI)_ course linked below this article.

## Further Reading on AI Opacity

- Fleisher, W. (2022). Understanding, Idealization, and Explainable AI. _Episteme 19_ (4): 534-560. DOI: 10.1017/epi.2022.39.
- Gunning, D. et al (2019). XAI — Explainable artificial intelligence. _Science Robotics 4_ (37): 1-2. DOI: 10.1126/scirobotics.aay7120.
- Ross, Amber (2022). AI and the expert; a blueprint for the ethical use of opaque AI. _AI & Society_. DOI: 10.1007/s00146-022-01564-2.
- Uwe, Peters (2023). Explainable AI lacks regulative reasons: why AI and human decision-making are not equally opaque. _AI and Ethics 3_: 963-974. DOI: 10.1007/s43681-022-00217-w.
