---
Title: 'Naive Bayes'
Description: 'Naive Bayes is a supervised learning algorithm that calculates outcome probabilities, assuming input features are independent and equally important.'
Subjects:
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'Machine Learning'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

**Naive Bayes** algorithms are supervised learning methods that calculate the probability of an outcome based on input data and prior knowledge, assuming all inputs are equal and independent of each other. These "naive" assumptions are often violated in real-world scenarios. For example, a response to an email depends on someone else emailing first, and a person is more likely to have freckles if their sister has freckles. Despite their simplicity, Naive Bayes algorithms often perform well in practice.

Typically, a preprocessed dataset is divided into training and testing sets. The training set is used to train the model, while the testing set is used to evaluate the model’s accuracy. Scikit-Learn provides several Naive Bayes classifiers, each suited for different types of supervised classification:

- **Multinomial Naive Bayes**: Designed for occurrence counts (e.g., predicting book genre based on the frequency of each word in the text). The multinomial distribution requires discrete features represented as integers.
- **Bernoulli Naive Bayes**: Designed for binary (yes/no) and boolean (true/false) features (e.g., predicting sales emails based on the presence of common sales phrases).
- **Categorical Naive Bayes**: Designed for features that can be separated into distinct categories (e.g., predicting a person’s favorite sport based on gender and preferred weather).
- **Gaussian Naive Bayes**: Designed for continuous features. It assumes that features follow a Gaussian distribution curve and determines the most likely class for an instance by calculating the probability of each class.
- **Complement Naive Bayes**: Designed to address the limitations of the standard Multinomial Naive Bayes classifier when dealing with imbalanced datasets. Imbalanced datasets are those where some classes have significantly more examples than others.
