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

**Supervised learning (ML)** is a type of machine learning in which the algorithm learns from labeled data. It involves training a model using input-output pairs so that it can generalize and make predictions for new, unseen data. The labels serve as "supervisors," guiding the learning process.

**Examples:** Identifying Handwritten Digits, Predicting the prices of cars, Spam emails detection.

## Key Components

- **_Training Data:_** A dataset of input-output pairs (e.g., emails labeled as "spam" or "not spam").
- **_Model:_** The algorithm (e.g., decision tree, neural network) that learns from the data.
- **_Loss Function:_** Measures how far the model's predictions are from the true labels (e.g., mean squared error for regression, cross-entropy for classification).
- **_Optimization:_** Adjusting the model’s parameters (weights) to minimize the loss (e.g., using gradient descent).

## Types of Supervised Learning

### Classification

In Classification, the algorithm learns from labeled training data, where each input is associated with a specific class, and then uses this knowledge to classify new, unseen data.

**Examples:** Spam Detection, Handwritten Digit Recognition, Image Classification, Medical Diagnosis.

## Types of Classification

- **_Binary Classification:_** The task of classifying data points into one of two classes.
- **_Multi-class Classification:_** The task of classifying data points into one of more than two classes.
- **_Multi-label Classification:_** The task of assigning multiple labels to each data point. This is different from multi-class classification, where each data point can only belong to one class.

**Common Classification Algorithms:** Logistic Regression, Support Vector Machines (SVMs), Decision Trees, Random Forests, Naive Bayes, K-Nearest Neighbors (KNN)

### Regression

Regression is a supervised learning task focused on predicting a continuous numerical output. Unlike classification, which assigns data points to categories, regression aims to estimate a value within a range.

**Examples:** House Price Prediction, Stock Price Prediction, Temperature Forecasting, Sales Forecasting.

## Types of Regression

- **_[Linear Regression:](https://www.codecademy.com/learn/linear-regression-mssp)_** Models a linear relationship between inputs and a target variable by finding the line of best fit that minimizes the sum of squared errors.
- **_Polynomial Regression:_** Used when the relationship between the features and the target variable is non-linear. It fits a polynomial curve to the data.
- **_[Multiple Linear Regression:](https://www.codecademy.com/learn/multiple-linear-regression-course)_** Used when there are multiple input features influencing the target variable.
- **_[Support Vector Regression (SVR):](https://www.codecademy.com/resources/docs/sklearn/support-vector-machines)_** Uses SVM principles to find the best-fitting hyperplane within a margin of error.
- **_[Decision Tree Regression:](https://www.codecademy.com/article/mlfun-decision-trees-article)_** Uses a tree structure where nodes represent feature-based decisions, and leaves represent predicted values.
- **_[Random Forest Regression:](https://www.codecademy.com/learn/machine-learning-random-forests-decision-trees)_** An ensemble method that combines multiple decision trees to improve prediction accuracy and reduce overfitting.
- **_Neural Network Regression:_** Uses neural networks to learn complex non-linear relationships between features and the target variable.

**Common Classification Algorithms:** Linear Regression, Polynomial Regression, Support Vector Regression (SVR), Decision Tree Regression, Random Forest Regression, Neural Network Regression.
