---
Title: 'Bayesian Optimizaztion'
Description: 'Bayesian hyperparameter optimization encompasses algorithms used in the tuning phase of machine learning modelling that uses the scores from previous hyperparameter configurations to inform the selection of the next set.'
Subjects:
  - 'Machine Learning'
  - 'Data Science'
Tags:
  - 'AI'
CatalogContent:
  - 'machine-learning'
  - 'paths/data-science'
---

**Bayesian optimization** is a method employed in a the hyperparameter tuning process of machine learning. It uses previous evalutations of the objective function (the trained model score) to inform the selection of the next set of hyperparemeters to investigate.

## Why Use Bayesian Optimization?

With the effective simplicity of grid search and random search, it might seem unnecessary to explore alternatives when it comes to hyperparameter tuning. So what is the benefit to using Bayesian optimization over more basic methods? The answer is computational cost: by slightly increasing the computational time of selecting the next hyperparameter configuration, we can reduce the number of times that the model needs to be fit. This can be an invaluable method for instances where model complexity reaches a point in which fitting each model demands high computational costs and thus can take a long time.

## Defining the Problem

To understand the method, we must first understand what problem it is we are trying to solve. We are trying to find the configuration of hyperparameters (from a domain of potential values they could take) that yield the best validation performance for a given machine learning model. In terms of the *best performance*, we are trying to minimize the **loss** of a model. Thus, we fulfil the necessary requirements for an optimization problem: we have an **objective** we wish to minimize and a **domain** of **variables** for which we need to come to a **decision** concerning which provide the **optimal solution**. We can represent the optimization problem in a tidy equation as such:

$$
x^* = \min_{x \in X} f(x)
$$

In the above equation, $x$ represents a set of hyperparameters; $f(x)$ is the score of the objective function we wish to minimize (i.e. the model performance); $x^*$ is the hyperparameter configuration that returns the optimal score; and $X$ is the domain of values that hyperparameters, $x$, can take.

## Bayesian Optimization

In Bayesian optimzation, a probabilistic model is used to map hyperparameter configurations to a likelihood of an objective function score through a surrogate function which is represented as $P(f(x)|x).

