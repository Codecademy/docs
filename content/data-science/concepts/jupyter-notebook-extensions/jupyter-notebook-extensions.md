---
Title: 'Jupyter Notebook Extension'

Description: 'Jupyter contributed notebook extensions are community-contributed and maintained plug-ins to the Jupyter notebook.'

Subjects:
    - 'Data Visualization'
    - 'Machine Learning'

CatalogContent:
    - 'paths/machine-learning-engineer'
    - 'paths/visualize-data-with-python

---

***Jupyter notebook extensions*** serve many purposes, from pedagogical tools to tools for converting and editing notebooks.Jupyter contributed notebook extensions are community-contributed and maintained plug-ins for Jupyter notebook.

## Syntax
***Enabling extensions via the command line***
1. There are multiple ways to install contributed extensions. For this example, we will use pip.

        sudo -E pip install jupyter_contrib_nbextensions
1. Next, add the notebook extension style files to the Jupyter configuration files.

        sudo -E jupyter contrib nbextension install --sys-prefix
1. Then, you will enable the extensions you would like to use. The syntax for this is jupyter nbextension enable followed by the path to the desired extension’s main file. For example, to enable scratchpad, you would type the following:

        sudo -E jupyter nbextension enable scratchpad/main --sys-prefix
1. When this is completed, the enabled extension should be visible in the extension list:

        jupyter nbextension list
1. You can also verify the availability of the extension via its user interface in the notebook. For        example, spellchecker adds an ABC checkmark icon to the interface.

