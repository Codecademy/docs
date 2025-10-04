---
Title: 'Classification'
Description: 'Classification is a supervised technique in machine learning used to categorize data into predefined classes or labels.'
Subjects:
  - 'AI'
  - 'Machine Learning'
Tags:
  - 'AI'
  - 'Machine Learning'
  - 'Supervised Learning'
  - 'Unsupervised Learning'
CatalogContent:
  - 'learn-python-3'
  - 'paths/intermediate-machine-learning-skill-path'
---

**Classification** is a supervised technique in machine learning used to categorize data into predefined classes or labels. It involves training a model using labeled data and then using the model to predict labels for new data. Common applications include spam detection, sentiment analysis, and medical diagnosis.

## Classification Process

The general process for performing classification involves the following steps:

```pseudo
1. Import necessary libraries
2. Load and preprocess the dataset
3. Split the dataset into training and testing sets
4. Initialize the classifier (e.g., Logistic Regression, Decision Tree, SVM).
5. Fit the model on the training set
6. Make predictions on the test set
7. Evaluate the model using metrics such as accuracy, precision, recall, and F1-score
```

## Example

[Python](https://www.codecademy.com/resources/docs/python) provides several libraries for performing classification, such as [Scikit-learn](https://www.codecademy.com/resources/docs/sklearn).

Here is an example that demonstrates how to perform classification using Logistic Regression in Scikit-learn:

```py
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score

# Load the Iris dataset
iris = load_iris()
X = iris.data
y = iris.target

# Split the dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# Initialize the classifier (Logistic Regression)
model = LogisticRegression()

# Fit the model on the training set
model.fit(X_train, y_train)

# Make predictions on the test set
y_pred = model.predict(X_test)

# Evaluate the model
accuracy = accuracy_score(y_test, y_pred)
print(f"Accuracy: {accuracy:.2f}")
```

The above code produces the following output:

```shell
Accuracy: 1.00
```

## Codebyte Example

The following codebyte example demonstrates how to perform classification using [Decision Tree](https://www.codecademy.com/resources/docs/sklearn/decision-trees) in Scikit-learn:

```codebyte/python
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score

# Load the Iris dataset
iris = load_iris()
X = iris.data
y = iris.target

# Split the dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# Define the base classifier (Decision Tree)
model = DecisionTreeClassifier()

# Fit the model on the training set
model.fit(X_train, y_train)

# Make predictions on the test set
y_pred = model.predict(X_test)

# Evaluate the model
accuracy = accuracy_score(y_test, y_pred)
print(f"Accuracy: {accuracy:.2f}")
```
