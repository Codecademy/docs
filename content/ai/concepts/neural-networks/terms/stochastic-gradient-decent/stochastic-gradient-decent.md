 # Stochastic gradient decent (SGD)

 Stochastic gradient decent is an optimization algorithm often used in Machine Learning and Deep Learning applications to find a model whose parameters correspond to the best fit between predicted values versus actual values. It is an iterative method of optimizing the objective function of the model by adjusting the gradient (first derivative), to find the local minima. Techniques such as *Momentum* are used to ensure a more glabal minima is found over local minima, but for the sake of clarity, we will only introduce the concept of stochastic gradient decent here.

 ## Basic Concept

**Gradient Descent:** At its core, gradient descent is an optimization technique used to minimize a function by iteratively moving towards the steepest descent as defined by the negative of the gradient. In Deep Learning, this function is usually a loss function, which measures how well the model's predictions match up with the actual data. For use cases in Neural Networks, common choices of loss functions are Mean Squared Error (MSE), Root Mean-Square Error (RMSE) or Mean Absolute Error (MAE). 

**Stochastic:** Traditional gradient descent calculates the gradient of the loss function using the entire dataset to make a single update to the parameters, which can be very slow and computationally expensive for large datasets. Stochastic Gradient Descent improves upon this by using only a single data point (or a small batch of data points known as your *batch size*) stochastically selected from the dataset to calculate the gradient and update the parameters. This stochastic nature helps to speed up the computation significantly.

## How It Works

1. Initialization: Start with initial values for the parameters of the model (e.g. weights in neural networks).
2. Random Selection: Randomly pick a sample or a small batch of samples from the dataset.
3. Gradient Calculation: Compute the gradient of the loss function with respect to the parameters for just the selected sample(s).
4. Parameter Update: Adjust the parameters of the model in the direction that reduces the loss function. The size of the step taken in the parameter space is determined by a parameter called the learning rate. 
5. Repeat: Repeat steps 2-4 until the algorithm converges or a predefined number of iterations is reached.

### Advantages

**Efficiency:** By using only a subset of data at each iteration, SGD can make updates to the parameters more frequently, which leads to faster convergence, especially on large datasets.
**Escape Local Minima:** The stochastic nature of the algorithm can help to escape local minima in the loss landscape, potentially leading to better overall solutions. Although this is not always the case, and other techniques such as *Momentum*  are leveraged to find global minima.

### Challenges

**Convergence Behavior:** The updates are based on estimates of the true gradient, which can make SGD's trajectory towards the minimum quite noisy (i.e., not smooth). This can mean the convergence to the exact minimum is not guaranteed, and it might oscillate around the minimum.
**Parameter Tuning:** Choosing the right learning rate and the size of the batches (if using mini-batch SGD) is critical and can be somewhat tricky. Too small a learning rate makes the convergence slow, while too large can cause overshooting and divergence.
**Adaptive Learning Rates:** To address some of these issues, variants of SGD such as Adam, RMSprop, and AdaGrad adjust the learning rate dynamically during training.

SGD is fundamental to many types of machine learning algorithms, particularly in the training of deep neural networks, due to its simplicity and effectiveness in handling large-scale data. The integration of SGD with backpropagation allows for the effective training of neural networks by iteratively adjusting the weights to minimize the loss. The stochastic nature of SGD, when using batches of data, helps in speeding up the training process and improving the generalization of the model on new, unseen data.