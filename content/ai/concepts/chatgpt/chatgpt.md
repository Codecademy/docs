---
Title: 'ChatGPT'
Description: 'ChatGPT an AI-powered chatbot by OpenAI, built on large language models (LLMs) like GPT-4, generating human-like responses through deep learning.'
Subjects:
  - 'AI'
  - 'Data Science'
  - 'Large Language Model'
  - 'Machine Learning'
  - 'Transformers'
Tags:
  - 'AI'
  - 'Attention'
  - 'Embeddings'
  - 'Prompts'
  - 'Prompt Engineering'
  - 'Transformers'
CatalogContent:
  - 'machine-learning'
  - 'paths/data-science'
---

**ChatGPT** is an AI-powered chatbot developed by **OpenAI**, built on large language models (LLM) like GPT-4 (Generative Pre-Trained Transformer). It generates human-like text responses by analyzing input context and predicting the most likely continuation of a conversation. ChatGPT is widely used for content creation, coding assitance, customer service, and more.

## How ChatGPT Works

**ChatGPT** is based on**transformer neural networks**, an AI architecture designed for handling sequential text data. It predicts words based on patterns it has learned during training. Other notable LLMs include **BERT** (used by Google for search), **Claude** (Anthropic's AI model), and Mistral (an open-source competitor).

### What Sets ChatGPT Apart from Search Engines?

ChatGPT differs from search engines in several ways:

- Does not browse the internet in real-time (unless using specific plugins or connected to retrieval-based systems).
- Knowledge is limited to training data, meaning it lacks awareness of recent events unless fine-tuned.
- Does not retrieve exact sources but instead generates responses based on patterns.
- Uses Reinforcement Learning from Human Feedback (RLHF) to improve quality and alignment with human expectations.

## Advancements in ChatGPT

Since its initial release, ChatGPT has seen several advancements:

- **GPT-4 (2023)**: Improved reasoning, factual accuracy, and multimodal capabilities.
- **ChatGPT Plus**: A premium subscription plan offering faster response times and access to the latest models.
- **Plugins and Browsing (2023)**: Optional features allowing access to real-time data retrieval and API integrations.
- **Memory Capabilities (2024)**: ChatGPT can now retain information across conversations, improving personalization.
- **Integration with Microsoft Products**: ChatGPT technology is embedded into Microsoft Copilot, powering AI-driven workflows in Word, Excel, and Teams.
- **GPT-4o (2024)**: Can reason across audio, vision, and text.

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

The breakthrough that allowed BERT and ChatGPT-based models is called **transformers**, introduced in a paper from 2017 entitled _“Attention is all you need”_. It was presented as a way to build machine translation but to have much faster parallel execution. It also introduced a new concept called _Self Attention_ to further make sense of long language sequences. It creates connections between different parts of the sequence. This allowed for highly scalable and efficient text generation, leading to models like GPT-3, GPT-4, and beyond.

So how does it all work? In the transformer-based model, each word is transformed into a token. As tokens are read as part of an input sentence the model starts predicting what the output should be - similar in concept to sentence completion.

Due to the use of transformers in creating the model, the potential output is not just a prediction of the next word. Because the model is trained with deep understanding and "attention", whole sentences and groupings of text are generated. The model used by ChatGPT can accept several thousand tokens as input.

## Risks and Limitations

### Misinformation & Hallucinations

ChatGPT may produce confident but incorrect responses (hallucinations). While improvements have reduced errors, it remains a significant challenge. With prompt engineering, ChatGPT can be told to not give an answer unless it has high confidence in the results. This can reduce hallucinations but not completely solve the problem.

### Bias

All models inherit biases from training data, which can impact fairness in responses. OpenAI continues to refine its moderation techniques to minimize harmful outputs.

### Data Privacy

ChatGPT does not store user data permanently, but queries are analyzed to improve the model. Users should avoid sharing sensitive information.

### Cost and Energy Consumption

Training LLMs like ChatGPT requires massive computing power, raising concerns about sustainability and accessibility.

## The Future

### Expanding Capabilities

ChatGPT is evolving beyond text-based chat. Future enhancements include:

- Improved memory for contextual awareness over multiple conversations.
- Expanded multimodel capabilities (processing images, audio, and video).
- Advanced personalization for tailored user experiences.

### AI in Everyday Use

ChatGPT is already embedded into:

- Microsoft Copilot (Windows & Office integration)
- Google AI-powered search
- AI-assisted customer service platforms
- Code generation tools (e.g., GitHub Copilot)

### OpenAI's Roadmap

- **GPT-5 (TBA)**: Expected to bring even greater reasoning, memory and adaptability.
- **AI Regulation & Safety**: OpenAI collaborates with governments to ensure responsible AI development.

### Cost

Costs to train a LLM can be in the millions of dollars - so training frequently may hit commercial challenges. After training, each _inference_ or transaction costs some amount of money and computing power.
