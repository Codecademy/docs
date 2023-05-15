---
Title: 'ChatGPT'
Description: 'ChatGPT is a publicly available web-based chatbot and API interface created by OpenAI. It connects to a large language model (LLM) called GPT (Generative Pre-Trained Transformer). GPT includes some of the largest models ever created. After the model training, there is further fine-tuning to improve its generated responses.'
Subjects:
  - 'Machine Learning'
  - 'Data Science'
  - 'Large Language Model'
  - 'Transformers'
Tags:
  - 'AI'
  - 'Transformers'
  - 'Embeddings'
  - 'Prompts'
  - 'Prompt Engineering'
  - 'Attention'
CatalogContent:
  - 'machine-learning'
  - 'paths/data-science'
---

**ChatGPT** is a publicly available web-based chatbot and API interface created by **OpenAI**. It connects to a large language model (LLM) called GPT (Generative Pre-Trained Transformer). GPT includes some of the largest models ever created. After the model training, there is further fine-tuning to improve its generated responses.

## How ChatGPT Works

**ChatGPT** is part of a new group of LLMs that are now made available by a technology called **transformers**. Other notable and similar LLMs include **BERT** used by Google to understand user searches; **DALL-E**, which can generate images; and **GPT-Neo**, a promising open-source LLM.

ChatGPT is the packaging of a set of trained LLMs into a chatbot and developer friendly interface. This has created a system where there is low barrier to entry and almost everyone can start using the LLM.

### What is the Relation to Internet Search?

**ChatGPT** is trained by using vast quantities of data from the internet. However, LLMs are different from internet search engines in the following ways:

- No ongoing daily web crawlers and updates.
- Data can be out of date. **ChatGPT 3** uses data from 2021.
- The size of the data trained in the model.
- ChatGPT uses a type of fine-tuning called Reinforcement Learning from Human Feedback (RLHF).
- ChatGPT-specific approaches including **prompts**, **embeddings**, and parameters such as **temperature**.

## History of ChatGPT

There were several generations of AI technologies that have led up to ChatGPT.

### Feed Forward Networks

**Artificial Neural Networks** (ANNs) are a class of computational functions inspired by how neurons work in the human brain. Neurons are arranged in layers and training occurs by guiding the network to differentiate between correct and incorrect answers. These are called feed-forward networks because signals move forward through the system.

One example of a common ANN is a **Convolutional Neural Network** (CNN). These are commonly used in image recognition. A _convolution_ can be thought of as a filter applied to the image to make things like edges or specific features stand out.

### Recurrent Neural Networks

One limitation of ANNs is that they don’t have the concept of time sequences and the input size is fixed. So for language processing where a sequence of words or a sentence exists, **Recurrent Neural Networks** (RNNs) were created.

RNNs feed decision results back into the system. So for example, if the sentence “What time is it?” were to be translated, when the word “it” is encountered, the system would already know all about the question.

While RNNs are very useful for language translation, they do not scale well with large amounts of information. Also, computations cannot be done in parallel.

### Breakthrough with Transformers

The breakthrough that allowed BERT and ChatGPT-based models is called **transformers**, introduced in a paper from 2017 entitled _“Attention is all you need”_. It was presented as a way to build machine translation but to have much faster parallel execution. It also introduced a new concept called _Self Attention_ to further make sense of long language sequences. It creates connections between different parts of the sequence.

So how does it all work? In the transformer-based model, each word is transformed into a token. As tokens are read as part of an input sentence the model starts predicting what the output should be - similar in concept to sentence completion.

Due to the use of transformers in creating the model, the potential output is not just a prediction of the next word. Because the model is trained with deep understanding and "attention", whole sentences and groupings of text are generated. The model used by ChatGPT can accept several thousand tokens as input.

## Risks and Limitations

### Misinformation

Because current LLMs are trained against data sets from some period in the past, they don't always give accurate information. Also, their correctness is only as good as the data they are trained with. This doesn't always lead to accurate results.

### Disinformation

ChatGPT and LLMs in general often give confident and plausible generated results, but sometimes they are wrong or do not make sense. In AI, these are called **hallucinations**. With prompt engineering, ChatGPT can be told to not give an answer unless it has high confidence in the results. This can reduce hallucinations but not completely solve the problem.

### Data Security

Using ChatGPT requires the sending of information over the internet. Sending personal or sensitive information presents a possible security risk.

### Bias

The internet is full of biased negative information. For ChatGPT to be useful, this information needs to be filtered so that it is not produced in responses. OpenAI has identified this as a major concern with ChatGPT and LLMs in general.

## The Future

### Usage

ChatGPT was intended to be a demonstration product. Companies around the world are evaluating how to use this new technology. There are usage scenarios that may reduce or replace some work being performed by human beings. These include:

- Processing and summarizing text
- Filtering human-generated content
- Creating advanced chatbots
- Writing code
- Customer service and support
- Generating styled documents (i.e. resumes, proposals, emails)
- Much more!

### Cost

Costs to train a LLM can be in the millions of dollars - so training frequently may hit commercial challenges. After training, each _inference_ or transaction costs some amount of money and computing power.

### New Areas of Tech

ChatGPT **Prompt Engineering**, **Embeddings**, and **Fine tuning** are necessary in using new LLM technology. There are predictions that some types of coding may change as these technologies continue to develop, however, work in the assessment and refinement of new programming approaches is just beginning.
