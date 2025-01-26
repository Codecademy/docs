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

**Examples:** Identifying Handwritten Digits, predicting the prices of cars, spam emails detection.

**Key Components:**

- **_Training Data:_** A dataset of input-output pairs (e.g., emails labeled as "spam" or "not spam").
- **_Model:_** The algorithm (e.g., decision tree, neural network) that learns from the data.
- **_Loss Function:_** Measures how far the model's predictions are from the true labels (e.g., mean squared error for regression, cross-entropy for classification).
- **_Optimization:_** Adjusting the model’s parameters (weights) to minimize the loss (e.g., using gradient descent).

## Types of Supervised Learning

### Classification

In Classification, the algorithm learns from labeled training data, where each input is associated with a specific class, and then uses this knowledge to classify new, unseen data.

**Examples:** Spam detection, Handwritten Digit Recognition, Image Classification, Medical Diagnosis.

**Key Components:**

- **_Features (Input Variables):_** These are the measurable characteristics or attributes of the data points. They can be numerical or categorical
- **_Labels (Output Variables/Classes/Categories):_** These are the predefined categories to which data points are assigned. They are discrete values, meaning they belong to a finite set.
- **_Training Data:_** A dataset where each data point is paired with its correct label. This is what the model learns from.
- **_Model:_** The algorithm or function that learns the mapping between the features and the labels.

**Types of Classification:**

- **_Binary Classification:_** The task of classifying data points into one of two classes.
- **_Multi-class Classification:_** The task of classifying data points into one of more than two classes.
- **_Multi-label Classification:_** The task of assigning multiple labels to each data point. This is different from multi-class classification, where each data point can only belong to one class.

- **Common Classification Algorithms:** Logistic Regression, Support Vector Machines (SVMs), Decision Trees, Random Forests, Naive Bayes, K-Nearest Neighbors (KNN)

### Regression

Regression, in the realm of machine learning and statistics, is a supervised learning task focused on predicting a continuous numerical output.
Unlike classification, which assigns data points to categories, regression aims to estimate a value within a range.

**Examples:** House Price Prediction, Stock Price Prediction, Temperature Forecasting, Sales Forecasting.

**Key Components:**

- **_Features (Input Variables):_** These are the independent variables used to make predictions. They can be numerical or categorical, but they ultimately influence the numerical output.
- **_Target Variable (Output Variable/Dependent Variable):_** This is the continuous numerical value we want to predict.
- **_Training Data:_** A dataset containing examples of input features and their corresponding target values. The model learns from these examples.
- **_Model:_** The learned function that maps the input features to the target variable.

**Types of Regression:**

- **_Linear Regression:_** Models a linear relationship between inputs and a target variable by finding the line of best fit that minimizes the sum of squared errors.
- **_Polynomial Regression:_** Used when the relationship between the features and the target variable is non-linear. It fits a polynomial curve to the data.
- **_Multiple Linear Regression:_** Used when there are multiple input features influencing the target variable.
- **_Support Vector Regression (SVR):_** Uses SVM principles to find the best-fitting hyperplane within a margin of error.
- **_Decision Tree Regression:_** Uses a tree structure where nodes represent feature-based decisions, and leaves represent predicted values.
- **_Random Forest Regression:_** An ensemble method that combines multiple decision trees to improve prediction accuracy and reduce overfitting.
- **_Neural Network Regression:_** Uses neural networks to learn complex non-linear relationships between features and the target variable.

**Common Classification Algorithms:** Linear Regression, Polynomial Regression, Support Vector Regression (SVR), Decision Tree Regression, Random Forest Regression, Neural Network Regression.
