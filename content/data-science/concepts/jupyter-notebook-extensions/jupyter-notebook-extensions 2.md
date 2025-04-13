---
Title: 'Jupyter Notebook Extension'
Description: 'Jupyter Notebook extensions are community-developed plugins that enhance the functionality, customization, and usability of Jupyter Notebooks.'
Subjects:
  - 'Data Visualization'
  - 'Machine Learning'
CatalogContent:
  - 'paths/machine-learning-engineer'
  - 'paths/visualize-data-with-python'
---

**Jupyter Notebook extensions** are add-ons that enhance the functionality of the Jupyter Notebook interface. They allow users to customize and improve their experience by adding various features.

## Examples of Jupyter Notebook Extensions

1. **Code Folding**: The `jupyter_fold` extension helps users focus on specific sections by enabling code cells to be folded and unfolded.
2. **Spellchecking**: The `spellchecker` extension highlights misspelt words in both code and Markdown cells.
3. **Table of contents**: The `toc` extension automatically generates a table of contents based on Markdown headers, improving navigation within a notebook.

## Installing Jupyter Notebook extensions

The Jupyter Notebook extensions are available through the open-source package `jupyter_contrib_nbextensions`. This Python package provides several unofficial extensions designed to enhance Jupyter Notebook’s capabilities.

To install it, run the following command:

```shell
pip install jupyter_contrib_nbextensions && jupyter contrib nbextension install --user
```

To add the `nbextensions` to the Jupyter server’s search directory, use:

```shell
jupyter contrib nbextension install
```

## Enabling/Disabling Extensions

After installation, users need to enable specific extensions like this:

```pseudo
jupyter nbextension enable <extension-name>
```

And to disable:

```pseudo
jupyter nbextension disable <extension-name>
```
