# My Issue Suggestion

I have noticed that Codecademy has a number of Python related projects that start with the installing or using Pip. (Onsite and Off Platform)
I have used Python2, Python3, and recently updated my MacBook to Python3.14.
When using Git (zsh) and attempting to follow Codecademy Projects steps involving pip/pip libraries for various python off-platform projects i encountered an issue.

I wanted to check which version of pip I was currently using and did this:

```bash
jl@Jeanines-MacBook-Air ~ % pip --version

zsh: command not found: pip
```

So I did a little research and found that because at one time I used Python2, and later upgraded to Python3 I needed to clarify that I want the pip install/packages for Python3. So I needed to use pip3:

```bash
jl@Jeanines-MacBook-Air ~ % pip3 --version

pip 25.3 from /Library/Frameworks/Python.framework/Versions/3.14/lib/python3.14/site-packages/pip (python 3.14)
```
I was then able to proceed with the project.  
But git did not provide any information that explained what I needed to do.

* I also updated to the latest version of git

* I think it would be helpful to provide this information on GitHub Codecademy Docs site.

* I would also include a reminder to users to check on the versions they are using and take a moment to update.

## Technologies Used:

* HomeBrew
* Python2, Python3
* Git
* Github
* VS code
* Google
* Stack Overflow
