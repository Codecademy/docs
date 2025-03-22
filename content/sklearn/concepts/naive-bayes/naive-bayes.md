---
Title: 'Naive Bayes'
Description: 'Naive Bayes is a supervised learning algorithm that calculates outcome probabilities, assuming input features are independent and equally important.'
Subjects:
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'Machine Learning'
  - 'Supervised Learning'
  - 'Unsupervised Learning'
  - 'Scikit-learn'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

**Naive Bayes** algorithms are supervised learning methods that calculate the probability of an outcome based on input data and prior knowledge, assuming all inputs are equal and independent of each other. These _naive_ assumptions are often violated in real-world scenarios. For example, a response to an email depends on someone else emailing first and a person is more likely to have freckles if his/her sister has freckles. Despite their simplicity, Naive Bayes algorithms often perform well in practice.

Typically, a preprocessed dataset is divided into training and testing sets. The training set is used to train the model, while the testing set is used to evaluate the model’s accuracy. Scikit-learn provides several Naive Bayes classifiers, each suited for different types of supervised classification:

- **Multinomial Naive Bayes**: Designed for occurrence counts (e.g., predicting book genre based on the frequency of each word in the text). The multinomial distribution requires discrete features represented as integers.
- **Bernoulli Naive Bayes**: Designed for binary (yes/no) and boolean (true/false) features (e.g., predicting sales emails based on the presence of common sales phrases).
- **Categorical Naive Bayes**: Designed for features that can be separated into distinct categories (e.g., predicting a person’s favorite sport based on gender and preferred weather).
- **Gaussian Naive Bayes**: Designed for continuous features. It assumes that features follow a Gaussian distribution curve and determines the most likely class for an instance by calculating the probability of each class.
- **Complement Naive Bayes**: Designed to address the limitations of the standard Multinomial Naive Bayes classifier when dealing with imbalanced datasets. Imbalanced datasets are those where some classes have significantly more examples than others.

## Example

```py
import numpy as np
from sklearn.naive_bayes import GaussianNB
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

# Create random dataset for classification
n = 100  # 100 data points
X = 6 * np.random.rand(n, 2) - 3  # 2 features
y = (X[:, 0] + X[:, 1] > 1).astype(int)  # Class labels based on sum of features

# Split the dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# Instantiate the Naive Bayes model
model = GaussianNB()

# Fit the model to the training data
model.fit(X_train, y_train)

# Predict the labels for the test data
y_prediction = model.predict(X_test)

# Print predicted values
print("Predicted Labels: ", y_prediction)
```

Here is the output for the above example:

```shell
Predicted Labels:  [1 0 0 0 1 0 1 0 0 0 1 0 1 0 1 1 0 0 1 1 0 0 0 1 1 0 1 0 1 0]
```

## Codebyte Example

The following codebyte example demonstrates the use of a random dataset for classification using the Naive-Bayes model:

```codebyte/python
import numpy as np
from sklearn.naive_bayes import GaussianNB
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

# Create random dataset for classification
n = 100  # 100 data points
X = 6 * np.random.rand(n, 2) - 3  # 2 features
y = (X[:, 0] + X[:, 1] > 1).astype(int)  # Class labels based on sum of features

# Split the dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# Instantiate the Naive Bayes model
model = GaussianNB()

# Fit the model to the training data
model.fit(X_train, y_train)

# Predict the labels for the test data
y_prediction = model.predict(X_test)

# Print predicted values and accuracy
print("Predicted Labels: ", y_prediction)
```

> Note: The output predictions will vary due to the random generation of training data and noise in the model.
