---
Title: 'ChatGPT'
Description: 'ChatGPT is a publically accessible web-based ChatBot and API interface created by OpenAI. It connects to a large language model (LLM) called GPT (Generative Pre-Trained Transformer). GPT includes some of the largest models ever created. After the model training, there is further fine-tuning to improve its generated responses.'
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

## How ChatGPT Works

In some ways `ChatGPT` is comparable to the Google search engine. Both systems use content from the internet, but do not search the internet at the time of search - it would be too slow. Like the Google search engine, ChatGPT uses a pre-trained model from a previous time. GPT is only aware of the content from the time of training.

Beyond this `ChatGPT` is very different. Some differences include:

- No ongoing daily web crawlers and updates
- The size of the data trained in the model
- ChatGPT uses a type of fine-tuning called Reinforcement Learning from Human Feedback (RLHF)
- ChatGPT-specific approaches including `prompts`, `embeddings`, and parameters such as `temperature`.

## History of ChatGPT

There were several generations of AI technologies that have led up to ChatGPT.

### Feed Forward Networks

Artificial Neural Networks (ANNs) are a class of computational functions inspired by how neurons work in the human brain. Neurons are arranged in layers and training occurs by guiding the network to know correct from incorrect answers. These are called feed-forward networks because signals move forward through the system.

One example of a common ANN is called Convolutional Neural network (CNN). These are commonly used in image recognition. You can think of a convolution as a filter applied to the image to make things like edges or specific features stand out.

### Recurrent Neural Networks

One limitation of ANNs is that they don’t have the concept of time sequences and the input size is fixed. So for language processing where you have a sequence of words or a sentence, Recurrent Neural Networks (RNNs) were created.

RNNs feed decision results back in the system. So for example if we wanted to translate the sentence “What time is it?” by the time the word “it” is encountered, the system would already know all about the question.

While RNNs have been very useful in doing language translation, they do not scale well with large amounts of information. Also computation can not be done in parallel.

### Breakthrough with Transformers

The breakthrough that allowed BERT and ChatGPT-based models is called `Transformers`. This was introduced in a paper from 2019 entitled “Attention is all you need”. It was presented as a way to build machine translation but to have much faster parallel execution. It also has a new concept called `Self Attention` to further make sense of long language sequences. It creates connections between different parts of the sequence.

So how does it all really work? In the `Transformer` based model each word is transformed into a token. As tokens are read as part of an input sentence the model starts predicting what the output should be - just like word completion.

As each successive token is read, the model generates a potential output of tokens. The potential connections and relationships are not just in connection to words but with sentences. The use of `Transformers` and `Attention` create this advanced model. The model used by ChatGPT can accept several thousand tokens.

## Challenges

### Hallucinations

ChatGPT and LLMs in general often give confident and plausible generated results but they are wrong or do not make sense. In AI these are called Hallucinations. With prompt engineering, ChatGPT can be told to not give an answer unless it has high confidence in the results.

### Plagiarism and cheating

Because ChatGPT works so well many people are concerned about its usage. You could use ChatGPT to generate a 500-word essay that convincingly looks like a person wrote it. In some tests, it has been proven ChatGPT could answer many common standardized tests.

### Bias

The internet is full of biased negative information. For ChatGPT to be useful this information needs to be filtered so it is not produced in responses. ChatGPT has come a long way in this regard.

## The Future

### Usage

ChatGPT was intended to be a demonstration product. Companies around the world are evaluating how to use this new technology. There are usage scenarios that may reduce or replace some work being performed by human beings. These include:

- Filtering human-generated content
- Creating advanced chatbots
- Writing code
- Summarizing news articles
- Much more!

### Cost

Costs to train a LLM can be in the millions of dollars - so to train frequently may hit commercial challenges. After training each `inference` or transaction costs some amount of money and computing power.

### New areas of Tech

ChatGPT `Prompt Engineering`, `Embeddings`, and `Fine tuning` are necessary in using the new LLM technology. While there are predictings that some types of coding may change, new programming approaches are being created.
