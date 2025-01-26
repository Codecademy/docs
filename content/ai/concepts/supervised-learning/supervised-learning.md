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

## Types of Supervised Learning

### Classification

In Classification, the algorithm learns from labeled training data, where each input is associated with a specific class, and then uses this knowledge to classify new, unseen data.

Examples:
Key Components: Spam detection, Handwritten Digit Recognition, Image Classification, Medical Diagnosis.

Features (Input Variables): These are the measurable characteristics or attributes of the data points. They can be numerical or categorical
Labels (Output Variables/Classes/Categories): These are the predefined categories to which data points are assigned. They are discrete values, meaning they belong to a finite set.
Training Data: A dataset where each data point is paired with its correct label. This is what the model learns from.
Model: The algorithm or function that learns the mapping between the features and the labels.

Types of Classification:
Binary Classification: The task of classifying data points into one of two classes.
Examples: Spam detection (spam or not spam), Medical diagnosis (disease present or absent)
Multi-class Classification: The task of classifying data points into one of more than two classes.
Examples: Image classification (cat, dog, bird, fish), Handwritten digit recognition (0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
Multi-label Classification: The task of assigning multiple labels to each data point. This is different from multi-class classification, where each data point can only belong to one class.
Examples: Tagging a movie with multiple genres (action, adventure, comedy), Classifying a document with multiple topics (politics, economics, international relations)

Common Classification Algorithms: Logistic Regression, Support Vector Machines (SVMs), Decision Trees, Random Forests, Naive Bayes, K-Nearest Neighbors (KNN)
//

- Example: In a spam filter, the classes are "spam" and "not spam."
  - Linear regression: Plots the line or plane of "best fit" of optimal values for prediction tasks.
  - Logistic regression: Classifies elements in a data set into discrete categories.
- Classification: Categorizes data points into discrete groups.
  - Naïve-Bayes classifier: Uses Bayes' theorem of probability to perform classification of elements.
  - Support vector machine (SVM): Margin classifiers that define hyperplanes to separate data points into discrete categories.
  - Artificial Neural Networks (ANN): Classifiers modeled after biological neural networks with relatively high-performance capabilities in regression and classification tasks.
    //

### Regression

Regression, in the realm of machine learning and statistics, is a supervised learning task focused on predicting a continuous numerical output.

Unlike classification, which assigns data points to categories, regression aims to estimate a value within a range.

Key Components:

Features (Input Variables): These are the independent variables used to make predictions. They can be numerical or categorical, but they ultimately influence the numerical output.  
Target Variable (Output Variable/Dependent Variable): This is the continuous numerical value we want to predict.  
Training Data: A dataset containing examples of input features and their corresponding target values. The model learns from these examples.  
Model: The learned function that maps the input features to the target variable.

Types of Regression:

Linear Regression: Assumes a linear relationship between the features and the target variable. It tries to find the best-fitting straight line (in simple linear regression with one feature) or hyperplane (in multiple linear regression with multiple features) that minimizes the difference between the predicted and actual values.  
Polynomial Regression: Used when the relationship between the features and the target variable is non-linear. It fits a polynomial curve to the data.  
Multiple Linear Regression: Used when there are multiple input features influencing the target variable.  
Support Vector Regression (SVR): Uses the principles of Support Vector Machines to perform regression. It tries to find a hyperplane that best fits the data within a certain margin of error.  
Decision Tree Regression: Uses a tree-like structure to make predictions. Each node in the tree represents a decision based on a feature, and the leaves represent the predicted values.  
Random Forest Regression: An ensemble method that combines multiple decision trees to improve prediction accuracy and reduce overfitting.  
Neural Network Regression: Uses neural networks to learn complex non-linear relationships between features and the target variable.

Examples: House Price Prediction, Stock Price Prediction, Temperature Forecasting, Sales Forecasting.

//

- Clustering: Recognize patterns and structures in unlabeled data by grouping them into clusters.
  - K-Means: Categorizes data points into clusters based on their proximity to cluster centroids.
  - Hierarchical Agglomerative Clustering: Groups data points into clusters based on various measures of similarity, such as the smallest average distance between all points, minimal variance between data points, or smallest maximum distance between data points.
- Dimensionality Reduction: Scale down the dimensions in the dataset from a high-dimensional space into a low-dimensional space while maintaining the maximum amount of relevant information.
  - Principal Component Analysis (PCA): Reduces the dimensionality of a dataset to the 'n' number of principal dimensions that contain the most valuable information.
    //
