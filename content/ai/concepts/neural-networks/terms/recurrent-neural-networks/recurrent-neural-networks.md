---
Title: 'Recurrent Neural Networks'
Description: 'Recurrent Neural Network is a type of neural network that uses the outputs from previous layers as an input in the current layer'
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

## What Is A Recurrent Neural Network (RNN)

**Recurrent Neural Networks** (RNNs) are a type of neural network distinguished by its use of the outputs from previous layers as an input in the current layer, in other words the results from earlier layers are persisted through the network.

RNNs apply best in cases where "memory" is important, this can be sequential or time based data, where the output is a predictable value in the sequence.

## How Does an RNN Work?

To train an RNN, a vector encoded input is passed from the dataset to the network, the network computes its current state initially using a random weight and biases, (unlike other neural networks, an RNN keeps the same weight though all it's layers). When the output is computed, it is fed forward to the next layer, which then  that result as well as the current input from the dataset to form its output and passes its output to the next layer. This process is continued through the rest of the layers until the final output is returned as the result. Using a loss function we find the error and backpropagate through time (BPTT) to update the weights and thus train the network.

A popular issue when training an RNN is the vanishing gradient problem. When attempting to backpropagate and update the weights, we see that inputs used earlier in the layer have a smaller impact in the training. To rectify this, networks like Long Short Term Memory (LSTM) and Gated recurrent unit (GRU) can be used and although out of scope of this doc are worth looking into as well as another common issue that can come up: the exploding gradient problem.

## Relation to AI
RNNs are generally used to predict data that form a series, these can be grouped into input->output classes, some examples are:
- Sequential input to sequential output: Speech Recognition, Language Translation, Language modeling
- Sequential input to single output: Stock prediction, weather prediction
- Single input to sequential output: Image captioning
