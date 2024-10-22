---
Title: 'Optimizers'
Description: 'Helps adjust the model parameters during training to minimize the error between the predicted output and the actual output.'
Subjects:
  - 'Data Science'
  - 'Machine Learning'
  - 'AI'
Tags:
  - 'Deep Learning'
  - 'Libraries'
  - 'TensorFlow'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/data-science'
  - 'paths/machine-learning'
---

**Optimizers** help adjust the model parameters during training to minimize the error between the predicted output and the actual output. They use the gradients calculated through backpropagation to update the model in a direction that reduces this error, improving the model's performance over time.

## How to use an optimizer

To use ```torch.optim``` you have to construct an optimizer object that will hold the current state and will update the parameters based on the computed gradients.

## Constructing it

To construct an Optimizer you have to give it an iterable containing the parameters (all should be Variable s) to optimize. Then, you can specify optimizer-specific options such as the learning rate, weight decay, etc.

Example:

```codebyte/python
optimizer = optim.SGD(model.parameters(), lr=0.01, momentum=0.9)
optimizer = optim.Adam([var1, var2], lr=0.0001)
```

## Per-parameter options

Optimizers also support specifying per-parameter options. To do this, instead of passing an iterable of Variables, pass in an iterable of dicts. Each of them will define a separate parameter group and should contain a ```params``` key, containing a list of parameters belonging to it. Other keys should match the keyword arguments accepted by the optimizers and will be used as optimization options for this group.

For example, this is very useful when one wants to specify per-layer learning rates:

```codebyte/python
optim.SGD([
                {'params': model.base.parameters(), 'lr': 1e-2},
                {'params': model.classifier.parameters()}
            ], lr=1e-3, momentum=0.9)
```

This means that ```model.base```’s parameters will use a learning rate of ```1e-2```, whereas ```model.classifier```’s parameters will stick to the default learning rate of ```1e-3```. Finally a momentum of ```0.9``` will be used for all parameters.

Also, consider the following example related to the distinct penalization of parameters. Remember that parameters() return an iterable that contains all learnable parameters, including biases and other parameters that may prefer distinct penalization. To address this, one can specify individual penalization weights for each parameter group:

```codebyte/python
bias_params = [p for name, p in self.named_parameters() if 'bias' in name]
others = [p for name, p in self.named_parameters() if 'bias' not in name]

optim.SGD([
                {'params': others},
                {'params': bias_params, 'weight_decay': 0}
            ], weight_decay=1e-2, lr=1e-2)
```
In this manner, bias terms are isolated from non-bias terms, and a weight_decay of 0 is set specifically for the bias terms, as to avoid any penalization for this group.
