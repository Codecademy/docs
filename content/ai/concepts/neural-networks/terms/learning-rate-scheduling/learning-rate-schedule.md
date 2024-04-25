---
Title: 'Learning Rate Scheduling'
Description: 'Learning rate scheduling involves planned changes to the learning rate of a neural network, allowing the function to avoid oscillations and learn more efficiently.'
Subjects:
  - 'Machine Learning'
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'AI'
  - 'Machine Learning'
  - 'Neural Networks'
  - 'Functions'
  - '
CatalogContent:
  - 'paths/machine-learning-ai-engineering-foundations'
  - 'intro-to-ai-strategy'
  - 'machine-learning'
---

A **Learning Rate Schedule** is a method which determines routine modifications to the learning rate of a neural network at specified times in between epochs or iterations. These schedules can be Constant, Time-Based, Step-Based, or Exponential, depending on the needs of the programmer. Choosing your learning rate schedule, similar to choosing any other hyperparameter, will impact the efficiency of your neural network significantly.

## Review: What are Learning Rates?

- Learning Rates are mathematical constants chosen as hyperparameters for your neural network. Learning Rates scale the difference between Expected and Predicted outcomes as determined by the optimization algorithm, thus directly impacting the process of [Backpropagation](https://www.codecademy.com/resources/docs/ai/neural-networks/backpropagation). 

- Higher Learning Rates will cause your neural network to make larger adjustments, which can be more time-efficient but tend to be volatile and unpredictable. This will cause the predictions of your network to oscillate without converging to the desired maxima or minima of the optimization problem.

- Lower Learning Rates will allow your network to converge to a relative maxima or minima, but may also give you an unwelcome introduction to the Vanishing Gradient Problem, in which changes made in [Backpropagation](https://www.codecademy.com/resources/docs/ai/neural-networks/backpropagation) are exceedingly small, paralyzing the network.

Because of the inflexibility of constant learning rates, many developers choose to implement Learning Rate Schedules that modify the network as training progresses.

## Types of Learning Rate Scheduling

## Constant

- Surprise, surprise! You can choose a constant learning rate for the entire duration of training. This isn't very complex, and is a simple approach that many higher-level developers also use. 
## Example:
    ```py
    import keras
    keras.optimizers.SGD(lr=0.05, momentum=0.0, decay=0.0, nesterov=False)
    ```


## Decaying Learning Rate
This choice of scheduling involves progressively **decaying** or lowering the learning rate as the network training progresses. Because of this decay, the function can start with high learning rates but eventually settle into a lower learning rate as it approaches the optimal solution for its optimization function. This is a "best-of-both-worlds" approach that combines the advantages of high and low constant learning rates. It can often involve the specification of a decay constant hyperparameter. Let's look at common forms of decaying learning rates and their implementations using Stochastic Gradient Descent Optimizer in Keras. Keras also offers a LearningRateScheduler function which can systematize the process of modifying your learning rates.
### Time-Based: 
- This approach modifies the current rate based on the previous iteration. The current rate thus varies inversely with the progression of time. Here is a very basic implementation of time-based learning rate scheduling.
## Example 
```py
current_epoch=0
num_epochs=500
lr=0.05
decay_rate=lr/num_epochs
lr*=(1/(1+decay_rate*current_epoch))
current_epoch+=1
```
> **Note:** Momentum is another hyperparameter involved in scheduling which speeds up learning when the gradient hasn't changed much, and can 'roll over' local minima. Keras automatically implements momentum for you in SGDOptimizer.
## Example 2
```py
import tensorflow.keras as keras
num_epochs=500
lr = 0.05
decay_rate = lr / num_epochs
momentum = 0.7
sgd = keras.optimizers.SGD(lr=learning_rate, momentum=momentum, decay=decay_rate, nesterov=False)
```
## Step-Based: 
- This method is a second-order implementation of decay in which the learning rate decays by a set constant hyperparameter after a manually-set number of epochs. Thus, the level at which the learning rate decays each epoch will decay itself. Here is a very basic implementation of step-based scheduling which halves the learning rate every 10 epochs.
##Example 
```py
import tensorflow.keras as keras
initial_lr=0.1
drop=0.5
epoch_drop_num=10
def step_decayer(epoch):
    lr=initial_lr*math.pow(drop,math.floor((1+epoch) / epoch_drop_num))
    return lr

learning_rate=keras.callbacks.LearningRateScheduler(step_decayer)
```
##Exponential: 
- This implementation is a separate form of the step-based decay method, with the initial level of decay set as a variant of Euler's constant e. Here is an intuitive implementation of exponential scheduling using keras. 
```py
import tensorflow.keras as keras
def exponential_decay(epoch):
   initial_lr = 0.1
   constant = 0.09
   lr = initial_lr * exp(-constant*epoch)
   return lr
lr = keras.callbacks.LearningRateScheduler(exponential_decay)
```

> **Note:** Use of each method depends on the demands of your model and the level of complexity required. Make sure to try out each before settling on one.



