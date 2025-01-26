---
Title: 'Supervised Learning'
Description: 'Supervised learning is a machine learning technique where algorithms learn from labeled data to make predictions.'
Subjects:
  - 'Machine Learning'
  - 'Data Science'
  - 'Artificial Intelligence'
Tags:
  - 'AI'
  - 'Deep Learning'
  - 'Classification'
  - 'Regression'
  - 'Predictive Modeling'
CatalogContent:
  - 'machine-learning'
  - 'paths/data-science'
---

**Supervised learning (ML)** is a type of machine learning where the algorithm learns from labeled data. It involves training a model on input-output pairs to generalize and predict outcomes for new, unseen data. This label acts as a "supervisor," guiding the learning process.

Imagine teaching a child by showing them examples with correct answers. Similarly, the algorithm learns patterns from these examples and uses them to make predictions on new, unseen data.

Examples: Identifying Handwritten Digits, predicting the prices of cars, spam emails detection.

Key Components
Training Data: A dataset of input-output pairs (e.g., emails labeled as "spam" or "not spam").

Model: The algorithm (e.g., decision tree, neural network) that learns from the data.

Loss Function: Measures how far the model's predictions are from the true labels (e.g., mean squared error for regression, cross-entropy for classification).

Optimization: Adjusting the model’s parameters (weights) to minimize the loss (e.g., using gradient descent).

## Types of Supervised Learning

### Classification

In Classification, the algorithm learns from labeled training data, where each input is associated with a specific class, and then uses this knowledge to classify new, unseen data.

- Examples:

  - Spam detection, Handwritten Digit Recognition, Image Classification, Medical Diagnosis.

- Key Components:

  - Features (Input Variables): These are the measurable characteristics or attributes of the data points. They can be numerical or categorical
  - Labels (Output Variables/Classes/Categories): These are the predefined categories to which data points are assigned. They are discrete values, meaning they belong to a finite set.
  - Training Data: A dataset where each data point is paired with its correct label. This is what the model learns from.
  - Model: The algorithm or function that learns the mapping between the features and the labels.

- Types of Classification:

  - Binary Classification: The task of classifying data points into one of two classes.
  - Multi-class Classification: The task of classifying data points into one of more than two classes.
  - Multi-label Classification: The task of assigning multiple labels to each data point. This is different from multi-class classification, where each data point can only belong to one class.

- Common Classification Algorithms: Logistic Regression, Support Vector Machines (SVMs), Decision Trees, Random Forests, Naive Bayes, K-Nearest Neighbors (KNN)

### Regression

Regression, in the realm of machine learning and statistics, is a supervised learning task focused on predicting a continuous numerical output.

Unlike classification, which assigns data points to categories, regression aims to estimate a value within a range.

- Key Components:
  - Features (Input Variables): These are the independent variables used to make predictions. They can be numerical or categorical, but they ultimately influence the numerical output.
  - Target Variable (Output Variable/Dependent Variable): This is the continuous numerical value we want to predict.
  - Training Data: A dataset containing examples of input features and their corresponding target values. The model learns from these examples.
  - Model: The learned function that maps the input features to the target variable.

Types of Regression:

Linear Regression: Assumes a linear relationship between the features and the target variable. It tries to find the best-fitting straight line (in simple linear regression with one feature) or hyperplane (in multiple linear regression with multiple features) that minimizes the difference between the predicted and actual values.  
Polynomial Regression: Used when the relationship between the features and the target variable is non-linear. It fits a polynomial curve to the data.  
Multiple Linear Regression: Used when there are multiple input features influencing the target variable.  
Support Vector Regression (SVR): Uses the principles of Support Vector Machines to perform regression. It tries to find a hyperplane that best fits the data within a certain margin of error.  
Decision Tree Regression: Uses a tree-like structure to make predictions. Each node in the tree represents a decision based on a feature, and the leaves represent the predicted values.  
Random Forest Regression: An ensemble method that combines multiple decision trees to improve prediction accuracy and reduce overfitting.  
Neural Network Regression: Uses neural networks to learn complex non-linear relationships between features and the target variable.

Examples: House Price Prediction, Stock Price Prediction, Temperature Forecasting, Sales Forecasting.

Common Classification Algorithms: Linear Regression, Polynomial Regression, Support Vector Regression (SVR), Decision Tree Regression, Random Forest Regression, Neural Network Regression.
//

- Clustering: Recognize patterns and structures in unlabeled data by grouping them into clusters.
  - K-Means: Categorizes data points into clusters based on their proximity to cluster centroids.
  - Hierarchical Agglomerative Clustering: Groups data points into clusters based on various measures of similarity, such as the smallest average distance between all points, minimal variance between data points, or smallest maximum distance between data points.
- Dimensionality Reduction: Scale down the dimensions in the dataset from a high-dimensional space into a low-dimensional space while maintaining the maximum amount of relevant information.
  - Principal Component Analysis (PCA): Reduces the dimensionality of a dataset to the 'n' number of principal dimensions that contain the most valuable information.
    //
