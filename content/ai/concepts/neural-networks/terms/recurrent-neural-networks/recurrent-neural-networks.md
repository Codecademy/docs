---
Title: 'Recurrent Neural Networks'
Description: 'Recurrent Neural Network is a type of neural network distinguished by storing and re-using outputs from previous layers as additional inputs in the current layer'
Subjects:
  - 'Machine Learning'
  - 'Computer Science'
Tags:
  - 'AI'
  - 'Neural Networks'
CatalogContent:
  - 'machine-learning'
  - 'paths/machine-learning-engineer'
---

## What Is A Recurrent Neural Network (RNN)?

**Recurrent Neural Network** (RNN) is a type of neural network distinguished by storing and re-using outputs from previous layers as additional inputs in the current layer; in other words, the results from earlier layers are persisted through the network through hidden states.

RNNs apply best in cases where the sequence of data is important to the predicted output. In sequential or time-based data sets, RNNs can persist previous outputs as "memories" or "states", and use that to predict the output in the sequence.

## How Does an RNN Work?

To conceptually train an RNN, a vector-encoded input is passed from the dataset to the network, and the network computes its output using initially random weights and biases (unlike other neural networks, an RNN keeps the same weight through all its layers).
When the output is computed, it is fed forward to the next layer, which uses the previous result as well as the current input from the dataset to form its output. This process is continued through the rest of the layers in the network until the final output is returned as a result.
Using a loss function, we compare the expected and actual results to find the error. The error is backpropagated through time (BPTT) to update the weights and biases and thus train the network until the expected result is produced.

A standard issue when training a typical RNN is the vanishing gradient problem. When attempting to backpropagate, inputs used earlier in the layer have a smaller impact on training as the error becomes smaller when updating the weights. To solve this, networks like Long Short Term Memory (LSTM) and Gated recurrent unit (GRU) can be used, which, although out of the scope of this doc, are worth looking into, as well as another common issue that can come up: the exploding gradient problem.

## Relation to AI

RNNs are generally used to predict data that forms a series; this can be grouped into input-to-output classes. Some examples are:

- Many inputs to many outputs: Speech Recognition, Language Translation, Language modeling.

- Many inputs to one output: Stock prediction, weather prediction, Sentiment analysis.

- One input to many output: Image captioning, Music Generation.

- One input to one output: Image classification.
