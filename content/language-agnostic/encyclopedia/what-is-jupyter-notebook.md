---
Title: "What is Jupyter Notebook"
Subjects:
  - "Computer Science"
  - "Developer Tools "
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
Notebook documents are internally JSON files and are saved with the `.ipynb` extension. Notebooks contain the inputs and outputs of an interactive session and non-executing text that may accompany the code, and thus serve as a complete computational record of a session. As JSON is a plain text format, any `.ipynb` notebook hosted on a public URL can be shared with the Jupyter Notebook Viewer (nbviewer), which renders the file as a static web page. This allows users to share the record of their sessions with both public and private colleagues, without the viewer needing to install Jupyter notebook.

### Privacy
Because you use Jupyter in a web browser, some people are understandably concerned about using it with sensitive data. However, if you followed the standard install instructions, Jupyter is actually running on your own computer. If the URL in the address bar starts with http://localhost: or http://127.0.0.1:, it’s your computer acting as the server. Jupyter doesn’t send your data anywhere else—and as it’s open source, other people can check that we’re being honest about this.

You can also use Jupyter remotely: your company or university might run the server for you, for instance. If you want to work with sensitive data in those cases, talk to your IT or data protection staff about it.

We aim to ensure that other pages in your browser or other users on the same computer can’t access your notebook server. See Security in the Jupyter notebook server for more about this.
