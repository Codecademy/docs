---
Title: 'Jupyter Notebook Extension'

Description: 'Jupyter contributed notebook extensions are community-contributed and maintained plug-ins to the Jupyter notebook.'

Subjects:
    - 'Data Visualization'
    - 'Machine Learning'

CatalogContent:
    - 'paths/machine-learning-engineer'
    - 'paths/visualize-data-with-python'

---


### What are Jupyter Notebook Extensions? ###
They are used to add functionalities to Jupyter Notebook interface. It is used to customize and improve ones Jupyter Notebook Experience.

Examples of Jupyter Extensions

1. Code Folding 

	Jupyter_fold aids in focusing on specific parts by allowing Jupyter      	notebook user to fold and unfold code cells
2.  Spellchecking
		
	 Spellchecker highlights misspelled words in code and markdown 		 cells.
 3. Table of contents

	The ‘toc’ extensions help Jupyter Notebook users to generate table 		of contents based on markdown headers

Installing Jupyter Notebook extensions

The mentioned extensions above and many more are available through open source package ‘jupyter_contrib_nbextensions’.  It is a python package that contains several unofficial extensions provided through open source to improve Jupyter Notebook capabilities.

Run the following in the command prompt:

	!sudo pip install jupyter_contrib_nbextensions && jupyter contrib nbextension install —user


To add the nbextensions into the Jupyter servers’s search directory, tun this code

	jupyter contributed nbextension install