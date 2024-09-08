---
Title: 'Neural Network'
Description: 'A neural network, inspired by the human brain, is a model that learns from data to make decisions and solve complex problems.'
Subjects:
  - 'AI'
  - 'Computer Science'
  - 'Machine Learning'
Tags:
  - 'AI'
  - 'Deep Learning'
  - 'Machine Learning'
  - 'Neural Networks'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In TensorFlow, a **Neural Network** is a specific type of model that consists of a combination of interconnected nodes (neurons) organized into different numbers and types of layers.

A neural network is a computing technique for creating programs that can process and learn from data, imitating the behavior of the human brain. Neural networks can find patterns and relations in data to train themselves and make predictions. Their potential relies on their capacity to provide solutions for complex, hard-to-systematize problems, such as image and speech recognition.

## Layer Structure in TensorFlow Neural Networks

In a neural network, each neuron or node in a layer is connected to every neuron in the next layer.

A neural network in TensorFlow includes the following layers:

- **Input Layer**: The initial layer that receives the data used to train the model. The input can be represented by one or more tensors, and the output can also consist of one or more tensors.

- **Hidden Layers**: These layers configure the model and allow it to process and learn from the input data. The number and type of hidden layers can vary depending on the model's complexity. Neural networks in TensorFlow include at least one hidden layer.

- **Output Layer**: The final layer that generates the predictions of the trained model.

## Build a Neural Network with TensorFlow

The basic steps in the process of implementing a neural network with TensorFlow include:

1. **Collect and Load Data**: TensorFlow provides the [`tf.data.Dataset` API](https://www.tensorflow.org/api_docs/python/tf/data/Dataset) to create and prepocess a dataset from your input data.

2. **Build the Model**: The [Keras](https://www.tensorflow.org/guide/keras) high-level API provides functionality to construct different neural networks architectures in TensorFlow. The simplest type of model is the [`Sequential` model](https://www.tensorflow.org/guide/keras/sequential_model), which has a single input tensor and a single output tensor.

3. **Add Model layers**: In a Sequential model, layers can be added with the `sequential()` function or using the `add()` method. The number and types of layers depend on the complexity of the model.

4. **Compile the Model**: Keras [`Model.compile` method](https://www.tensorflow.org/api_docs/python/tf/keras/Model#compile) is used to configure the model's training process, specify how it should learn, and how to minimize errors.

5. **Train the Model**: The `Model.fit` method can be used to train the model for a choosen number of epochs (e.g., `model.fit(x_train, y_train, epochs=5)`). A higher number of epochs will require more computing power and time.

6. **Use the Model**: The trained model is an object that can be used to pass in data and get predictions. TensorFlow provides several options to [save, serialize and export models](https://www.tensorflow.org/guide/keras/serialization_and_saving).
