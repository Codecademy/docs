---
Title: 'AI for Computer Vision'
Description: 'Computer vision is a subfield of artificial intelligence, which specialises in recognition, extraction and processing of image data to simulate human vision. '
Subjects:
  - 'Machine Learning'
  - 'Data Science'
  - 'Artificial Intelligence'
Tags:
  - 'AI'
  - 'Image Classification Model'
  - 'Image Generation Model'
  - 'Prompt Engineering'
  - 'Image Labelling'
  - 'Deep Learning'
  - 'Classification'
  - 'Facial Recognition'
  - 'Machine Learning'
CatalogContent:
  - 'machine-learning'
  - 'paths/data-science'
---

**Computer Vision** is the field of artificial intelligence that allows computers to analyse images, videos and 3D scans. The aim is to replicate human vision - *recognition of 3D and 2D objects*. Vision allows analysis and decision-making based on image data.

*E.g... robot moving around the room and picking up objects based on a live video.*

In addition, computer vision also is  the automation of tasks that require visual data. AI engineers aim to improve the performance of algorithms to make them better than humans at seeing objects.  

*For autonomous driving, this could be stopping a car earlier than a human driver using distance detection from an obstacle.*

## **Convolution** - How computers perceive images

The convolution process is the decomposition of an image into different layers and features. This is achieved by specialised artificial neurons in **Convolutional Neuron Networks (CNNs)** layers, which use filters **kernels**  of a specific size that move across an image in a defined number of steps.  

Kernel moves across an image:
 ![CNN kernel moves across an image.](https://miro.medium.com/v2/resize:fit:990/1*hOI0jW3CcS_yuxcmJIYjKw.gif)

 Multiple CNN layers are applied across an image, which leads to a lot of features being identified, and weights and biases calculated.

Because CNNs produce a large number of parameters during this process, dimensionality reduction techniques are applied on top. Reduction is achieved using pooling layers. Pooling layers use the output of kernels to calculate a representation value: max, min or average per area covered by the kernel.


 By decomposing an image into these hierarchical features, artificial neurons can effectively represent and understand objects, shapes, and other visual elements present in the image. This process makes classification, object recognition and other vision tasks possible.


![CNN layers break down an image into layers of different features.](https://i0.wp.com/mmcheng.net/wp-content/uploads/2022/12/hDecomp.png?resize=907%2C427&ssl=1)

More information is available on the convolution doc. 

## Computer Vision History


- 1960s - Larry Roberts created the first image recognition systems, able to recognise simple objects and shapes. 


- 1970s - researchers experimented with image processing techniques such as edge detection and pattern recognition. 

- 1980s - exploration of areas such as object recognition, motion tracking, and scene understanding.

- 1990s - implementation of artificial neural networks (ANN) to computer vision tasks.

Thanks to more powerful computers, the availability of large datasets and more complex ANNs, computer vision advanced greatly over the past 20 years. 

- 2000s - Deep neural networks used for classification, facial recognition, and even autonomous driving.

- 2010s - Computer vision ANNs are used in virtual reality, augmented reality and robotics. 

- 2020s - Image generative AI becomes very popular. 



## Where is computer vision used?
1. Autonomous cars
1. Facial and car plate recognition
1. Cancer, COVID-19 and other disease diagnostics
1. Agricultural crop harvest action
1. Image generation
1. Robot navigation and human interaction

...and many more!






