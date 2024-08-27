---
Title: 'Naive Bayes'
Description: Naive-Bayes is a learning automatic supervised algorithm used for classification tasks, like text classification. Uses probability techniques to perform classification tasks.  
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

**Naive Bayes** Imagine we have a bunch of country flags. Each of them has information about the country's weather, population, location, costumes, etc... so we use all this information to try to find what is the country that the card belongs to through its main characteristics

- **how it works**: Data recollection:
 1- We get the information we know about the country and its characteristics (population, costumes, etc...)
 Colombia: Populations, South America
 Germany: Population, Europe
 Japan: Population, Asia
 2- Clues: When we find a new flag, we have to look at its characteristics, let's suppose that the new card has 3.000.000 populations and its weather is mostly under 0° during winter.
 3- Smart riddle, using naive-bayes we could calculate the probability that the country is e.g. South Africa based on its population of 59 million. Compare this data with the possibility that the country might be Denmark and the one that has more probability is the one that we pick.
  
- **Example step by step**: Let´s see an example step by step:
 1- France: Europe, french, flag with dark blue
 2- Sweden: Europe, Sweden, flag with yellow
 3- Argentina: South America, spañish, flag with clear blue
-**new country** South America, Spanish, stations 
 We calculate the probabilities 2 countries from Europe 1 from South America
 the probability that it is a country in Europe 0, in South America 3.
- **Summary**: 
    Based on Naive Bayes analysis, it is highly likely that the country in question is Argentina based on its flag, language, and population in comparison to other options. Naive Bayes uses the probabilities of known characteristics to make the best guess. It's called "naive" because it assumes that all characteristics are independent of each other, which isn't always the case, but it often works effectively.
- **Practice**: To practice, you can try to make your naive-bayes with different types of toys. Write its main characteristics, shape, color, etc...and use naive Bayes to guess what is its type. 
