---
Title: 'Neural Network'
Description: 'A neural network is a model that can be trained to learn and make decisions from data. It is inspired by the human brain and particularly powerful for solving complex problems that are hard to systematize.'
Subjects:
  - 'AI'
  - 'Machine Learning'
  - 'Computer Science'
Tags:
  - 'AI'
  - 'Deep Learning'
  - 'Machine Learning'
  - 'Neural Networks'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In TensorFlow, a **neural network** is a specific type of model that consists of a combination of interconnected nodes (neurons) organized into different numbers and types of layers.

A neural network is a computing technique for creating programs that can process and learn from data, imitating the behavior of the human brain. Neural networks can find patterns and relations in data to train themselves and make predictions. Their potential relies on their capacity to provide solutions for complex, hard-to-systematize problems, such as image and speech recognition.

## Layer Structure in TensorFlow Neural Networks

In a neural network, each neuron or node in a layer is connected to every neuron in the next layer.

A neural network in TensorFlow includes the following layers:

- Input Layers: The initial layer that takes the data used to train the model. The input can be shaped by one or more tensors, and the output can also consist of one or more tensors.

- Hidden Layers: The layers that configure the model and enable it to process and learn from the input data. The number and type of hidden layers may vary based on the model's complexity. Neural networks in TensorFlow include at least one layer of this type.

- Output Layer: The final layer that produces the trained model's predictions.

## Build a Neural Network with TensorFlow

The basic steps in the process of implementing a neural network with TensorFlow include:

1. Collect and load data. TensorFlow provides the [`tf.data.Dataset` API](https://www.tensorflow.org/api_docs/python/tf/data/Dataset) to create and prepocess a dataset from your input data.

2. Build the model: The [Keras](https://www.tensorflow.org/guide/keras) high-level API provides functionality construct different neural networks arquitectures in TensorFlow. The most simplest type of model is the [`Sequential` model](https://www.tensorflow.org/guide/keras/sequential_model), where each one has only one input tensor and one output tensor.

3. Add the model layers: In a secuential model, you can add layers with the sequential() function or using the add() method. The number and types of layers depend on the complexity of your model.

4. Compile the model: Use the Keras `Model.compile` method(https://www.tensorflow.org/api_docs/python/tf/keras/Model#compile) to configure the model's training process, specify how it should learn, and how to minimize errors.

5. Train model: Use the `Model.fit` method to train the model for a choosen number of epochs `model.fit(x_train, y_train, epochs=5)`. A higher number will require more computing power and time.

6. Use the model: The result is an object that you can use to pass in data and get results. TensorFlow provides several options to [save, serialize and export models](https://www.tensorflow.org/guide/keras/serialization_and_saving).
