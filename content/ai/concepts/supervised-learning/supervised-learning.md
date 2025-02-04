---
Title: 'Supervised Learning'
Description: 'Supervised learning is a machine learning technique where algorithms learn from labeled data to make predictions.'
Subjects:
  - 'AI'
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'AI'
  - 'Deep Learning'
  - 'Classification'
  - 'Regression'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

**Supervised learning (ML)** is a type of machine learning where an algorithm learns from labeled data. It involves training a model using input-output pairs so it can generalize and make accurate predictions for new, unseen data. The labeled outputs act as a guide, helping the model learn the correct relationships.

**Examples:** Identifying handwritten digits, predicting car prices based on features, detecting spam emails based on content and metadata.

### Key Components

- **Training Data:** A dataset containing input-output pairs (e.g., images labeled with digits or emails marked as spam/not spam).
- **Model:** A machine learning algorithm (e.g., decision trees, neural networks) that learns patterns from the data.
- **Loss Function:** A metric that measures how well the model’s predictions match the actual labels. (e.g., Mean Squared Error for regression, Cross-Entropy Loss for classification).
- **Optimization:** A process of adjusting model parameters to minimize the loss and improve accuracy, often using gradient descent or other optimization techniques.

## Types of Supervised Learning

### Classification

Classification involves training an algorithm on labeled data, where each input is associated with a specific category. The model then classifies new, unseen data based on learned patterns.

**Examples:** Spam Detection, handwritten digit recognition, image classification, medical diagnosis.

#### Types of Classification

- **Binary Classification:** The task of classifying data points into one of two classes.
- **Multi-class Classification:** The task of classifying data points into one of more than two classes.
- **Multi-label Classification:** The task of assigning multiple labels to each data point. This is different from multi-class classification, where each data point can only belong to one class.

**Common Classification Algorithms:** Logistic Regression, Support Vector Machines (SVMs), Decision Trees, Random Forests, Naive Bayes, K-Nearest Neighbors (KNN)

### Regression

Regression is a supervised learning task focused on predicting a continuous numerical output. Unlike classification, which assigns data points to categories, regression aims to estimate a value within a range.

**Examples:** House price prediction, stock price prediction, temperature forecasting, sales forecasting.

#### Types of Regression

- **[Linear Regression:](https://www.codecademy.com/learn/linear-regression-mssp):** Models a linear relationship between inputs and a target variable by finding the line of best fit that minimizes the sum of squared errors.
- **Polynomial Regression:** Captures non-linear relationships by fitting a polynomial curve to the data.
- **[Multiple Linear Regression:](https://www.codecademy.com/learn/multiple-linear-regression-course):** Used when there are multiple input features influencing the target variable.
- **[Support Vector Regression (SVR):](https://www.codecademy.com/resources/docs/sklearn/support-vector-machines):** Uses SVM principles to find the best-fitting hyperplane within a margin of error.
- **[Decision Tree Regression:](https://www.codecademy.com/article/mlfun-decision-trees-article):** Uses a tree structure where nodes represent feature-based decisions, and leaves represent predicted values.
- **[Random Forest Regression:](https://www.codecademy.com/learn/machine-learning-random-forests-decision-trees):** An ensemble method that combines multiple decision trees to improve prediction accuracy and reduce overfitting.
- **Neural Network Regression:** Uses neural networks to learn complex non-linear relationships between features and the target variable.

**Common Classification Algorithms:** Linear Regression, Polynomial Regression, Support Vector Regression (SVR), Decision Tree Regression, Random Forest Regression, Neural Network Regression.
