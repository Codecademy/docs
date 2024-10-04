---
Title: 'Optimizers' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'A PyTorch optimizer is a tool that helps with the process of training a machine learning model. This involves adjusting the parameters of the model during training in order to minimize the error between the predicted output and the actual output.' # Required; ideally under 150 characters and starts with a noun (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'How to use an optimizer'
  - 'Constructing it'
  - 'Per-parameter options'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'PyTorch'
  - 'Optimizers'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'Concept Entry'
  - 'content/pytorch'
---

**torch.optim** is a package implementing various optimization algorithms.

Most commonly used methods are already supported, and the interface is general enough, so that more sophisticated ones can also be easily integrated in the future. 

## How to use an optimizer

To use ```torch.optim``` you have to construct an optimizer object that will hold the current state and will update the parameters based on the computed gradients.

## Constructing it

To construct an Optimizer you have to give it an iterable containing the parameters (all should be Variable s) to optimize. Then, you can specify optimizer-specific options such as the learning rate, weight decay, etc.

Example:
```codebyte/js
optimizer = optim.SGD(model.parameters(), lr=0.01, momentum=0.9)
optimizer = optim.Adam([var1, var2], lr=0.0001)
```

## Per-parameter options

Optimizer s also support specifying per-parameter options. To do this, instead of passing an iterable of Variables, pass in an iterable of dicts. Each of them will define a separate parameter group, and should contain a ```params``` key, containing a list of parameters belonging to it. Other keys should match the keyword arguments accepted by the optimizers, and will be used as optimization options for this group.

For example, this is very useful when one wants to specify per-layer learning rates:
```codebyte/js
optim.SGD([
                {'params': model.base.parameters(), 'lr': 1e-2},
                {'params': model.classifier.parameters()}
            ], lr=1e-3, momentum=0.9)
```

This means that ```model.base```’s parameters will use a learning rate of ```1e-2```, whereas ```model.classifier```’s parameters will stick to the default learning rate of ```1e-3```. Finally a momentum of ```0.9``` will be used for all parameters.

Also consider the following example related to the distinct penalization of parameters. Remember that parameters() returns an iterable that contains all learnable parameters, including biases and other parameters that may prefer distinct penalization. To address this, one can specify individual penalization weights for each parameter group:
```codebyte/js
bias_params = [p for name, p in self.named_parameters() if 'bias' in name]
others = [p for name, p in self.named_parameters() if 'bias' not in name]

optim.SGD([
                {'params': others},
                {'params': bias_params, 'weight_decay': 0}
            ], weight_decay=1e-2, lr=1e-2)
```
In this manner, bias terms are isolated from non-bias terms, and a weight_decay of 0 is set specifically for the bias terms, as to avoid any penalization for this group.