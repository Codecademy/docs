---
Title: 'ChatGPT'
Description: 'ChatGPT is an AI-powered chatbot designed by OpenAI to generate human-like responses using deep learning.'
Subjects:
  - 'AI'
  - 'Machine Learning'
Tags:
  - 'AI'
  - 'Attention'
  - 'Data'
  - 'Transformers'
CatalogContent:
  - 'intro-to-generative-ai'
  - 'paths/data-science'
---

[**ChatGPT**](https://chatgpt.com) is an AI-powered chatbot designed by OpenAI, built on Large Language Models (LLMs) like GPT-4 (Generative Pre-Trained Transformer). It generates human-like text responses by analyzing input context and predicting the most likely continuation of a conversation. ChatGPT is widely used for content creation, coding assistance, customer service, and more.

## How ChatGPT Works

ChatGPT is based on **transformer neural networks**, a breakthrough architecture for processing sequential data. These models are trained on massive text datasets and learn to predict the next word in a sentence based on context.

Unlike traditional search engines, ChatGPT:

- Doesn’t fetch live web results (unless using special tools like browsing or plugins).
- Responds based on training data, not current events.
- Doesn’t cite sources but mimics patterns in language.
- Is tuned using **Reinforcement Learning from Human Feedback (RLHF)** to align better with human expectations.

## Key Advancements

Recent improvements include:

- **GPT-4o (2024)**: Enhanced ability to process and generate audio, images, and text together.
- **Memory (2024)**: Can now remember user preferences and context across chats.
- **Integration with Microsoft Copilot**: Embedded in Word, Excel, and other tools.
- **Canvas (2024)**: Side-by-side interface within ChatGPT lets users edit text and code directly, facilitating real-time human-AI collaboration.
- **Deep Research (2025)**: AI agent integrated into ChatGPT that autonomously conducts web browsing to generate comprehensive, cited reports on user-specified topics.

## Practical Use Tips

### Prompting Effectively

Here are some basic tips to get the most out of ChatGPT:

- **Role play**: Request ChatGPT to take on a role, e.g. "Act as a senior developer with 20 years of experience, working with me, a non-tech hobbyist."
- **Give examples**: Show the structure or tone you want in your reply.
- **Use bullet formatting**: Easier for ChatGPT to mirror and structure output.
- **Confirm Understanding**: Ask ChatGPT to summarize its understanding of your request before providing a response — useful for complex asks with long responses.

### Support with Image Input

One of the most powerful ways to use ChatGPT for technical help is by combining image inputs with natural language queries. For example, you can paste a screenshot of a terminal error or code output, for example:

```bash
$ git checkout -b new-branch
fatal: A branch named 'new-branch' already exists.
```

Then ask ChatGPT: *"Why is this error happening? What should I do instead?"* — and it explains the issue clearly, sometimes suggesting alternate commands or best practices.

This capability can be used for anything, including math homework or understanding paperwork in a language one is not well-versed in.

**Tip:** Combine annotated screenshots with specific questions to get faster, more accurate support.

## Risks and Limitations

### Misinformation & Hallucinations

ChatGPT can sound confident while being wrong (hallucinations). While improvements have reduced errors, it remains a significant challenge. With prompt engineering, ChatGPT can be instructed to avoid answering unless it has high confidence in the results. This can reduce hallucinations but not completely solve the problem.

### Bias

All models inherit biases from training data, which can impact fairness in responses. OpenAI continues to refine its moderation techniques to minimize harmful outputs.

### Privacy

ChatGPT does not store user data permanently, but queries are analyzed to improve the model. Users should avoid sharing sensitive information.

### Cost and Energy

LLMs require immense compute resources to train and operate. Inference (every response) also has a cost, which affects accessibility.

## Behind the Model

### Evolution of AI Models

- **Feedforward Networks**: Early networks that process inputs in one direction.
- **RNNs**: Added memory for sequences but lacked scalability.
- **Transformers (2017)**: Enabled parallel training and deeper context understanding using self-attention.

## Future Outlook

- **GPT-5 (TBD)**: Expected to push reasoning, memory, and safety boundaries.
- **Deeper Multimodality**: More integration of audio, video, and real-world context.
- **Regulatory Collaboration**: OpenAI and others are working with governments on safety frameworks.
