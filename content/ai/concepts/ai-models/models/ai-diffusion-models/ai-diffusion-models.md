---
Title: 'Diffusion Models'
Description:'Diffusion Models are generative models, which means they are used to generate data similar to what they were trained on. The models work by destroying training data through the addition of Gaussian noise, and then learning to recover that data.' 
Subjects:
  - 'Machine Learning'
  - 'Data Science'
  - 'Large Language Model'
Tags:
  - 'AI'
  - 'Image Generation Model' 
  - 'Denoising'
  - 'Prompts'
  - 'Prompt Engineering'
  - 'Text-To-Image'
  - 'Deep Learning'
CatalogContent:
  - 'machine-learning'
  - 'paths/data-science'
---

**AI Diffusion Models** Are generative models, which means they are used to generate data similar to what they were trained on. The models work by destroying training data through the addition of Gaussian noise, and then learning to recover that data.

## More About Diffusion Models
- A Diffusion model is a deep learning generative model that works by adding noise to the available training data known as the forward diffusion process, it then reverses the process to recover the data. This is known as denoising or the reverse diffusion process.

### Image Example
![Alt text](<ai diffusion model example.png>)

## Image Generation
- Diffusion models start with a base image from what it has been previously trained on and slowly adds more and more gaussian noise over time.   
- It then gradually removes the noise, this learned denoising process then generates new, high-quality images from random seeds also known as random noised images.
