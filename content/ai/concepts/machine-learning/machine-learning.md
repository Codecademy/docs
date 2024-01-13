---
Title: 'Machine Learning'
Description: 'Machine learning (ML) is a discipline of computer science that relates to using data and algorithms to develop computer programs that improve their performance at tasks without being explicitly programmed to do so.'
Subjects:
  - 'Machine Learning'
  - 'Data Science'
Tags:
  - 'AI'
  - 'Deep Learning'
  - 'Algorithms'
  - 'Scikit-learn'
  - 'Tensorflow'
  - 'Keras'
CatalogContent:
  - 'machine-learning'
  - 'paths/data-science'
---

**Machine learning (ML)** is a discipline of computer science that relates to using data and algorithms to develop computer programs that improve their performance at tasks without being explicitly programmed to do so. Machine Learning is considered a branch of Artificial Intelligence as some machine learning algorithms are designed to imitate the way that humans learn and interact with their environment.

## Branches of Machine Learning

### Supervised Learning

Machine Learning algorithms that receive labeled data as input and produce a prediction as output.

- Regression: Predicts a continuous-valued output.
  - Linear regression: Plots the line or plane of "best fit" of optimal values for prediction tasks.
  - Logistic regression: Classifies elements in a data set into discrete categories.
- Classification: Categorizes data points into discrete groups.
  - Naïve-Bayes classifier: Uses Bayes' theorem of probability to perform classification of elements.
  - Support vector machine (SVM): Margin classifiers that define hyperplanes to separate data points into discrete categories.
  - Artificial Neural Networks (ANN): Classifiers modeled after biological neural networks with relatively high-performance capabilities in regression and classification tasks.

### Unsupervised Learning

Machine Learning algorithms that receive unlabeled data as input and produce a grouping or clustering as output.

- Clustering: Recognize patterns and structures in unlabeled data by grouping them into clusters.
  - K-Means: Categorizes data points into clusters based on their proximity to cluster centroids.
  - Hierarchical Agglomerative Clustering: Groups data points into clusters based on various measures of similarity such as smallest average distance between all points, minimal variance between data points, or smallest maximum distance between data points.
- Dimensionality Reduction: Scale down the dimensions in the dataset from a high-dimensional space into a low-dimensional space, while maintaining the maximum amount of relevant information.
  - Principal Component Analysis (PCA): Reduces the dimensionality of a dataset to the 'n' number of principal dimensions that contain the most valuable information.

### Reinforcement Learning

Machine learning algorithms that act as agents in an environment, which receive a current state, environment, reward, and goal as input and produce a policy of best action relative to the stated goal as output.

- Model-Free: Act as trial-and-error algorithms that use only real samples of the environment to calculate optimal actions instead of the transition probability distribution to create a model of the environment.
- Model-Based: Create models of the environment to generate predictions of the next state and reward to calculate optimal actions.

Some methods used in reinforcement learning include:

- Markov Decision Processes (MDPs): Use a model of the environment based on their state transition probability and reward functions to create a policy of optimal action and satisfy the Markov property.
- Monte-Carlo methods: Model-Free randomized algorithms that learn from episodes of experience whether continuous or terminal to calculate the value for a state based on the average return from those experiences.
- Q-Learning/Deep Q-Learning: Model-Free algorithms that focus on maximizing the expected value of reward using q-tables, or artificial neural networks.

## Machine Learning vs. Deep Learning

Deep Learning is the subset of machine learning that focuses on artificial neural networks. The "deep" component of the name is in reference to the many hidden layers that typically are embedded within neural networks that simulate the function of a biological brain.

The relatively high performance of neural networks in human-like tasks such as speech and object recognition distinguishes deep learning from other machine learning algorithms.

## Model Development

Based on the evaluation results, the model's user might modify the model's hyperparameters or adjust the model architecture to improve its performance. There are several methods to further refine models that may include strategies such as:

- Hyperparameter Tuning: Hyperparameters are configuration settings for a machine learning model that are not learned during training but are set before training begins. These settings can significantly impact a model's performance.
- Model Architecture Adjustments: There are several methods to accurately adjust the architecture of ML algorithms. There are techniques such as feature engineering, model selection, and ensemble methods.

## Evaluation

There are several methods to accurately evaluate the performance of ML algorithms. Methods vary based on which algorithm is being evaluated, and for which purpose. For classifiers such as Logistic Regression, confusion matrices inform analysts of the number of true and false positives as well as negatives to calculate values such as recall, precision, and F1 scores.

These values help analysts understand if their models are underfitting or overfitting, which is critical to improving and maintaining their performance.
