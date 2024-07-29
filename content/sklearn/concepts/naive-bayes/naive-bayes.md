---
Title: 'Naive Bayes'
Description: 'Naive Bayes are supervised learning algorithms that calculate the probability of an outcome based on input data and prior knowledge, assuming all inputs are equal and independent of each other.' # 187 char, ideally 150
Codecademy Hub Page: 'https://www.codecademy.com/catalog/language/python'
CatalogContent:
  - 'getting-started-with-python-for-data-science'
  - 'paths/data-science'
---

**Naive Bayes** are supervised learning algorithms that calculate the probability of an outcome based on input data and some prior knowledge, assuming all inputs are equal and independent of each other. These "naive" assumptions are often violated in the real world- for example, a response to an email is dependent on someone else emailing first, and a person is more likely to have freckles if their sister has freckles. However, Naive Bayes algorithms still perform well in real world scenarios despite its simplicity.

Typically, a preprocessed data set is divided into training and testing data sets. The training data set is first used to train the model, then the testing data set is used to assess how accurate the model is. There are several different Naive Bayes classifiers provided in Scikit-Learn that you can use, each performing a different type of supervised classification:

The **Multinomial Naive Bayes** classifier is designed for occurrence counts (e.g., predicting book genre based on frequency of each word in the text). The multinomial distribution requires discrete features represented as integers.

The **Bernoulli Naive Bayes** classifier is designed for binary (yes/no) and boolean (true/false) features (e.g. predicting sales emails based on whether they contain common sales phrases).

The **Categorical Naive Bayes** classifier is designed for features that can be separated into distinct categories (e.g. predicting a person's favorite sport based on gender and preferred weather)

The **Gaussian Naive Bayes** classifier is designed for features with continuous, not discrete, data. It assumes that features follow a [Gaussian distribution curve](https://www.codecademy.com/resources/docs/ai/neural-networks/gaussian-activation-function) and determines which class an instance is most likely to belong to by calculating the probability of each class.

The **Complement Naive Bayes** classifier is designed to correct the severe assumptions made by the standard Multinomial Naive Bayes classifier when performed on imbalanced data sets. Imbalanced data sets are data sets where the number of examples of some classes is higher than the number of examples belonging to other classes.

## Syntax

```pseudo
# Initialize the classifier
model = MultinomialNB()

# Train the model with training data
model.fit(x_train, y_train)

# Use the model to predict the outcomes for testing data
predictions = model.predict(x_test)
```

## Codebyte Example

```codebyte/python
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import GaussianNB
from sklearn.metrics import accuracy_score
 
# Split the data set into training and testing data sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)
 
# Initialize the Gaussian Naive Bayes classifier
gnb = GaussianNB()
 
# Train the model with training data
gnb.fit(X_train, y_train)
 
# Predict the outcomes for test data
y_pred = gnb.predict(X_test)
 
# Calculate the accuracy score
accuracy = accuracy_score(y_test, y_pred)
print(f'Accuracy: {accuracy}')
```
