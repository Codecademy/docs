---
Title: 'Recurrent Neural Networks'
Description: 'Recurrent Neural Networks are a type of neural network distinguished by storing and re-using the output from previous steps as an additional input in the current step'
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

A **Recurrent Neural Network** (RNN) is a type of neural network that stores and re-uses the outputs from previous steps as additional inputs in the current step. RNNs process sequential data in groups of _timesteps_ which represent a segment of the sequence. These timesteps could represent words from a sentence or frames from an audio clip. The network uses the output from previous timesteps which are stored in a "hidden state" or "hidden variable" to compute the output for the current timestep.

RNNs are used in cases where the sequence of data is important to the predicted output. In sequential or time-based data sets, RNNs use previous outputs as "memories" or "states", and use that to predict the output in the sequence.

## How Does an RNN Work?

The training data is split into time-based sequences. They are then vector-encoded and passed into the RNN as inputs. The RNN is initialized with random weights and biases which remain the same through all timesteps. The network iterates over the sequence to compute the output or hidden state for each timestep.

The current hidden state is computed by passing the input for the current time-step, the previous hidden state, and the weights and biases for the sequence into a layer with an activation function of choice. The hidden state is then returned as an output and passed to the next timestep. The process is repeated through the rest of the timesteps. Depending on the task, the final output can either be returned as a single vector or can be a combination of output vectors returned in each timestep. For the first timestep, the previous hidden state can be initialized as a zero vector of size dependent on the intended output size.

A loss function is used to compare the expected result and actual result returned by the model. Using the loss calculated, the loss gradient for each timestep is computed using Backpropagation Through Time (BPTT) and is used to update the weights in order to reduce the loss. Repeating this process trains the network until the expected result is produced.

A common issue when training an RNN is the vanishing gradient problem. When backpropagating and updating the weights, the error gradient becomes smaller and smaller as it approaches the earlier inputs. As a result, the earlier inputs will have less of an impact on training process. To rectify this, networks like Long Short Term Memory (LSTM) and Gated Recurrent Unit (GRU) are often used. Although out of scope for the purpose of this doc, LSTM and GRU are both worth looking into, as well as another common problem that can come up - the exploding gradient.

## Relation to AI

RNNs are generally used to predict data that forms a series; this can be grouped into input-to-output classes. Some examples are:

- Many inputs to many outputs: Speech Recognition, Language Translation, Language modeling.
- Many inputs to one output: Stock prediction, weather prediction, Sentiment analysis.
- One input to many output: Image captioning, Music Generation.
- One input to one output: Image classification.
