---
Title: 'Nearest Neighbors' 
Description: 'Nearest Neighbors algorithms are based on the concept of finding points in a space that are closest to a given point, using a specific search method and distance metric.'  
Subjects: 
  - 'Machine Learning'
  - 'Data Science'
  - 'Computer Science'
Tags: 
  - 'Scikit-learn'
  - 'K-Nearest Neighbors'
  - 'Machine Learning'
  - 'Classification'
  - 'Regression'
CatalogContent: 
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
  - 'paths/data-science-foundations'
---

**Nearest Neighbors Algorithms** are non-parametric, neighbors-based learning methods that predict labels and values by using the similarity between data points. This fundamental concept is at the core of many learning routines and is especially useful in scenarios where the relationships between data points are more important than their distribution. The *number of points* or neighbors used during the training process can be specified by the user (as in k-nearest neighbor learning method) or adjusted based on the local density of points (as in radius-based neighbor learning). The *distance* metric can vary, with the standard Euclidean distance being a common choice. Nearest neighbors algorithms are applied in classification, regression, and clustering problems. They are widely used due to their simplicity in various real-world applications; however, they can become computationally intensive for large datasets. Please note that most of the content on this page is sourced directly from the `sklearn.neighbors` [documentation](https://scikit-learn.org/stable/modules/neighbors.html#neighbors). 

## Applications:

The `sklearn.neighbors` functions include nearest neighbors algorithms for both [supervised and unsupervised learning methods](https://scikit-learn.org/stable/modules/neighbors.html#neighbors). Supervised nearest neighbors are used for classification and regression, while unsupervised nearest neighbors are used for clustering. These algorithms require defining the number of points or neighbors (`n_neighbors`) and the algorithm search (`algorithm`). There are other parameters specific to each method, which you can find and learn more about by checking the [documentation](https://scikit-learn.org/stable/modules/neighbors.html#neighbors).

  - **Nearest Neighbors Classification** predicts the class of a new data point by (1) identifying the nearest neighbors of the new point from the training dataset based on a chosen distance metric, (2) counting how many of these neighbors belong to each class, and (3) assigning the new point to the class that has the most representatives among the neighbors. For example, if the new point has 1 neighbor of class A, 1 neighbor of class B, and 3 neighbor of class C, the new point will be classified as class C because it has the majority vote. `scikit-learn` offers two different classifiers, `KNeighborsClassifier` and `RadiusNeighborsClassifier`. `KNeighborsClassifier` implements learning based on the nearest neighbors of each new point, where the number of neighbors is an integer value specified by the user. `RadiusNeighborsClassifier` implements learning based on the number of neighbors within a fixed radius of each training point, where the radius is a floating-point value specified by the user. The `KNeighborsClassifier` is the most commonly used method. In cases where data is not uniformly sampled,  `RadiusNeighborsClassifier` can be a better choice; however, it is less effective for high-dimensional parameter problems. Basic nearest neighbors classification uses uniform `weights`; however, in some cases, it is recommended to weight the neighbors so that nearer neighbors contribute more to the prediction. 

  - **Nearest Neighbors Regression** predicts the value of a new data point in cases where the data labels and values are continuous (not discrete) by (1) identifying the nearest neighbors of the new point from the training dataset based on a chosen distance metric, (2) averaging the values of these neighbors, and (3) assigning the new point the averaged value. For example, if the new point has 3 neighbors with values 10, 20, and 30, the new point's predicted value will be the average of these, i.e., 20. `scikit-learn` offers two different regressor: `KNeighborsRegressor` and `RadiusNeighborsRegressor`. Their learning are similar to those mentioned in the classification above. 


## Codebyte Example (if applicable)

Here are two simple examples for classification and regression using `KNeighborsClassifier` and `KNeighborsRegressor` from scikit-learn.

### Usage of Nearest Neighbors in Scikit-learn for a **classification** problem:
The following code uses the k-Nearest Neighbors (k-NN) classification algorithm to predict snow seasons (Accumulation or Melt) based on snow depth, air temperature, and snow density. The dataset contains historical records of these three features, alongside their corresponding seasons. The classification algorithm classifies new data points by finding the 5 nearest data points in the training set and taking a majority vote of their seasons. In this example, the search algorithm is 'auto', meaning the classifier will automatically select the most appropriate algorithm based on the training data provided. You can change it by specifying the `algorithm` parameter to other options when using `KNeighborsClassifier`. The method outputs a class label that is the result of a majority vote among the nearest neighbors, ensuring that the predicted class is one that exists in the training set (1 or 0 in this example) .

```shell
import numpy as np
import pandas as pd
from sklearn.neighbors import KNeighborsClassifier

# Create a DataFrame with sample data
data = {
    "Snow Depth (in)": [
        65, 64, 64, 69, 78, 75, 71, 70, 70, 68,
        66, 64, 64, 68, 68, 66, 65, 64, 63, 62,
        62, 59, 58, 55, 53, 51, 52, 56, 53, 51,
        48, 48, 46, 43, 41, 40, 36, 36, 36, 36],
    "Air Temperature Average (degF)": [
        33.4, 33.6, 16.5, 16.9, 23, 25, 25.5, 20.8, 18.9, 25,
        30.2, 31.6, 26.1, 23.2, 27.1, 28.6, 28.4, 29.5, 32, 32,
        31.5, 32.5, 40.8, 44.2, 43.7, 35.8, 34.3, 37.8, 33.4, 35.2,
        35.2, 38.7, 45.3, 41.4, 45, 42.6, 36.1, 32.7, 33.6, 38.3],
    "Snow Density (pct)": [
        32.6, 33.4, 34.5, 32.8, 30, 31.7, 33.5, 34, 34, 35,
        36.4, 37.5, 38, 36.2, 36.2, 37.6, 38.2, 38.9, 39.7, 40.6,
        43.1, 45.3, 45.7, 47.5, 47.2, 46.9, 45, 42.3, 45.1, 46.1,
        47.1, 45.6, 45.7, 45.1, 44.9, 43.5, 46.1, 45.3, 45, 45],
    "Season": [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
}

# Convert to DataFrame
df = pd.DataFrame(data)

# Preprocess data
X = df[["Snow Depth (in)", "Air Temperature Average (degF)", "Snow Density (pct)"]]
y = df["Season"]

# Classification model
knn_classifier = KNeighborsClassifier(n_neighbors=5)
knn_classifier.fit(X, y)

X_test = np.array([[29, 27, 45.5]])

predictions = knn_classifier.predict(X_test)

print(f'Predicted season for the given snow condition is: {["Accumulation" if predictions[0]==1 else "Melt"][0]}.')
```

### Usage of Nearest Neighbors in Scikit-learn for a **regression** problem:
The following code predicts the discharge in cubic feet per second based on the snow water equivalent in inches using a k-Nearest Neighbors (k-NN) regression model. The snowmax is an array representing snow water equivalent measurements, and flowmax, is an array representing corresponding discharge values. The model is trained using these arrays. The parameter `n_neighbors=5` specifies that the prediction for a new data point will be based on the **average discharge values** of the 5 nearest neighbors in the training data. The search algorithm implicitly used by `KNeighborsRegressor` finds the nearest neighbors by calculating the distance between points in the feature space, typically using the Euclidean distance. The code then predicts the discharge for a new snow water equivalent value of 42 inches and prints the result. This method outputs a value that is the averages the output, leading to potentially new values not seen in the training set.

```shell
import numpy as np
from sklearn.neighbors import KNeighborsRegressor

# Snow water equivalent in inch
snowmax = np.array([44.3, 43.6, 21.1, 58.4, 48.5, 51. , 38.7, 53.3, 16.8, 27. , 46.4,
       24.6, 29.7, 16.9, 41.2, 28.7, 34.9, 42.7, 55.9, 45. , 49.6, 34.7,
       25.4, 29.8, 34.5, 31.5, 45.2, 58.2, 26.1, 42. , 42.1, 28.9, 66.2,
       29.7, 24.2, 48.5, 27.6, 37.6, 54.2, 32.3, 41.5, 41.7, 26.4])  

# Discharge in cubic feet per second
flowmax = np.array([ 855.,  876., 584., 1270., 1400., 1830., 865., 1870.,  338.,
        540.,  748., 290.,  760., 243., 1180., 595.,  1220., 1330.,
        1560., 977., 1430., 562., 721., 492.,  716.,  529., 1230.,
        1530., 468., 722.,  967., 852., 1630., 429.,  480., 773.,
        545.,  775., 1390., 628., 929., 695.,  271.])

snow_test = np.array([42])

# Regression model
knn_regressor = KNeighborsRegressor(n_neighbors=5)
knn_regressor.fit(snowmax.reshape(-1, 1), flowmax)
predictions = knn_regressor.predict(snow_test.reshape(-1, 1))

print(f'Predicted flow for snow water equivalent of {snow_test[0]} inches: {predictions[0]} cubic feet per second.')
```

