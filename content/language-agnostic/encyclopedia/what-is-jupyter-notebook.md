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
*Jupyter Notebook Documentation Excerpts*

- A web application: a browser-based tool for interactive authoring of documents which combine explanatory text, mathematics, computations and their rich media output.

- Notebook documents: a representation of all content visible in the web application, including inputs and outputs of the computations, explanatory text, mathematics, images, and rich media representations of objects.



### Web Application
*Jupyter Notebook Documentation Excerpts*
In-browser editing for code, with automatic syntax highlighting, indentation, and tab completion/introspection.

The ability to execute code from the browser, with the results of computations attached to the code which generated them.

Displaying the result of computation using rich media representations, such as HTML, LaTeX, PNG, SVG, etc. For example, publication-quality figures rendered by the matplotlib library, can be included inline.

In-browser editing for rich text using the Markdown markup language, which can provide commentary for the code, is not limited to plain text.

The ability to easily include mathematical notation within markdown cells using LaTeX, and rendered natively by MathJax.


### Notebook Documents
*Jupyter Notebook Documentation Excerpts*
Notebook documents contains the inputs and outputs of a interactive session as well as additional text that accompanies the code but is not meant for execution. In this way, notebook files can serve as a complete computational record of a session, interleaving executable code with explanatory text, mathematics, and rich representations of resulting objects. These documents are internally JSON files and are saved with the .ipynb extension. Since JSON is a plain text format, they can be version-controlled and shared with colleagues.

Notebooks may be exported to a range of static formats, including HTML (for example, for blog posts), reStructuredText, LaTeX, PDF, and slide shows, via the nbconvert command.

Furthermore, any .ipynb notebook document available from a public URL can be shared via the Jupyter Notebook Viewer (nbviewer). This service loads the notebook document from the URL and renders it as a static web page. The results may thus be shared with a colleague, or as a public blog post, without other users needing to install the Jupyter notebook themselves. In effect, nbviewer is simply nbconvert as a web service, so you can do your own static conversions with nbconvert, without relying on nbviewer.

### Sharing
Jupyter notebooks have built-in support for Markdown and HTML, so you can embed rich content and largely control formatting. The main obstacle to presentation-quality notebooks seems to be managing attention.

It’s difficult to focus the attention of your audience on a single thing like you can with slides.
Although we want to keep code (input cells) for reproducability’s sake, showing it is distracting.

Online methods include Jovian platform, Binder, and nbviewer a tool made by the Jupyter community that renders a notebook hosted on Github

### Privacy
*Jupyter Notebook Documentation Excerpts*
Because you use Jupyter in a web browser, some people are understandably concerned about using it with sensitive data. However, if you followed the standard install instructions, Jupyter is actually running on your own computer. If the URL in the address bar starts with http://localhost: or http://127.0.0.1:, it’s your computer acting as the server. Jupyter doesn’t send your data anywhere else—and as it’s open source, other people can check that we’re being honest about this.

You can also use Jupyter remotely: your company or university might run the server for you, for instance. If you want to work with sensitive data in those cases, talk to your IT or data protection staff about it.

We aim to ensure that other pages in your browser or other users on the same computer can’t access your notebook server. See Security in the Jupyter notebook server for more about this.
