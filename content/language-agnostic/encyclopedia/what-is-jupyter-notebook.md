---
Title: "What is Jupyter Notebook"
Subjects:
  - "Computer Science"
  - "Developer Tools"
Tags:
  - "Code Editors"
  - "Developer Tools"
  - "IDE"
Catalog Content:
  - "https://www.codecademy.com/paths/data-analyst/tracks/dacp-python-fundamentals/modules/dscp-getting-started-off-platform/articles/introducing-jupyter-notebook"
  - "https://www.codecademy.com/paths/data-analyst/tracks/dacp-python-fundamentals/modules/dscp-getting-started-off-platform/articles/setting-up-jupyter-notebook"
  - "https://www.codecademy.com/paths/data-analyst/tracks/dacp-python-fundamentals/modules/dscp-getting-started-off-platform/articles/getting-more-out-of-jupyter-notebook"
---

### Introduction
The community definition of Jupyter Notebook is:

*"An open-source web application that allows you to create and share documents that contain live code, equations, visualizations and narrative text. Uses include: data cleaning and transformation, numerical simulation, statistical modeling, data visualization, machine learning, and much more."*

Data workers use Jupyter Notebook as an integrated development environment (IDE) for its web application and notebook documents features.

### Web Application
As an open source web application, Jupyter Notebook enables users to interactively author and share documents containing explanatory text, live code, mathematics, computations, and visualizations. Jupyter Notebook is recognized for its many code editing features, some including:

 - In-browser editing for code, with automatic syntax highlighting, indentation, and tab completion/introspection.
 - The ability to execute code from the browser, with the results of computations attached to the code which generated them.
 - Displaying the result of computation using rich media representations, such as HTML, LaTeX, PNG, SVG, etc. For example, publication-quality figures rendered by the matplotlib library, can be included inline.

### Notebook Documents
Notebook documents are internally JSON files and are saved with the `.ipynb` extension. Notebooks contain the inputs and outputs of an interactive session and non-executing text that may accompany the code, and thus serve as a complete computational record of a session. As JSON is a plain text format, any `.ipynb` notebook hosted on a public URL can be shared with the Jupyter Notebook Viewer (nbviewer), which renders the file as a static web page. This allows users to share the record of their sessions with colleagues both publicly and privately, without the viewer needing to install Jupyter notebook.

### Privacy
While users interactively author `.ipynb` notebooks in their preferred browser, standard install instructions allow Jupyter to run on one's local machine, not on the web. By default, a notebook server runs locally at 127.0. 0.1:8888 and is accessible only from localhost.
