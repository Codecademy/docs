---
Title: 'Stochastic Gradient Desent'
Description: 'Stochastic Gradient Desent is optimizer algorithm that minimizes the loss functions in machine learning and deep learning models.'
Subjects:
  - 'Machine Learning'
  - 'Deep Learning'
  - 'Computer Science'
Tags:
  - 'AI'
  - 'Neural Network'
  - 'Optimizer'
CatalogContent:
  - 'paths/computer-science'
  - 'paths/data-science'
---

**Stochastic Gradient Descent** (SGD) is one of the optimization algorithms. It is varient of gradient descent optimizer. The SGD minimize the loss function of machine learning algorithms and deep learning algorithms during backpropogation to update the weight and bias in Artificial Neural Networks. 

The term stochastic mean randomness on which algorithm based upon. In this algorithm instead of taking whole dataset like grdient descent we take single randomly selected data point or small batch of data.suppose if the data set contains 500 rows SGD update the model parameters 500 times in one cycle or one epoch.

This approach significantly reduces computation time, especially for large datasets, making SGD faster and more scalable.SGD is used for training models like neural networks, support vector machines (SVMs), and logistic regression. However, it introduces more noise into the learning process, which can lead to less stable convergence but also helps escape local minima, making it suitable for non-convex problems. 


![stochastic gradient descent](https://www.goglides.dev/images/Jq8EpuPoMjCcxm7PqMqWuQK7M_MoVtdfAUsGJsoUIMA/w:880/mb:500000/ar:1/aHR0cHM6Ly93d3ct/Z29nbGlkZXMtZGV2/LnMzLmFtYXpvbmF3/cy5jb20vdXBsb2Fk/cy9hcnRpY2xlcy8z/cGh3bjR0bmpnNGlo/eHV0Znpqby5wbmc)

## Algorithms Step

- At each iteration, a random sample  is selected from the training dataset.
- The gradient of the cost function with respect to the model parameters is computed based on the selected sample.
- The model parameters are updated using the computed gradient and the learning rate.
- The process is repeated for multiple iterations until convergence or a specified number of epochs.

## Formula 

$$ 
\large \theta = \theta - \alpha  * \nabla J((\theta ; x_iy_i))
$$

Where:

- θ represents the model parameter (weight or bias) being updated.
- α is the learning rate, a hyperparameter that controls the step size of the update.
- ∇J(θ;xi,yi)  is the gradient of the cost or loss function J with respect to the model parameter θ, computed based on a single training sample (xi,yi).

## Advantages
- **Faster convergence:** SGD updates parameters more frequently that hence it takes less time to converge especially for large datasets.
- **Reduced Computation Time:** SDD takes only subset of dataset or batch for each updates. This make it easy to handle large datasets and compute faster.
- **Avoid Local Minima:** The noise introduced by updating parameters with individual data points or small batches can help escape local minima.This can potentially lead to better solutions in complex, non-convex optimization problems.
- **Online Learning:** SGD can be used in scenarios where data is arriving sequentially (online learning).- It allows models to be updated continuously as new data comes in.

## Disadvantages
- **Noisy Updates:** Updates are based on a single data point or small batch, which introduces variability in the gradient estimates.This noise can cause the algorithm to converge more slowly or oscillate around the optimal solution.
- **Convergence Issues:** The noisy updates can lead to less stable convergence and might make it harder to reach the exact minimum of the loss function.Fine-tuning the learning rate and other hyperparameters becomes crucial to achieving good results.
- **Hyperparameter Sensitivity:** - SGD's performance is sensitive to the choice of learning rate and other hyperparameters.Finding the right set of hyperparameters often requires experimentation and tuning.

## Practical Tips And Tricks When Using SGD
- Shuffle data before training 
- Use mini batches(batch size 32)
- Normalize input
- Choose suitable learning rate (0.01)

