code = input("Enter your command: ")

#WIn this example a user could inject malicious code like "import os; os.system('cat /etc/passwd')"
exec(code)

code = input("Enter another command: ")

#The globlas dictonary allows only the print function from the buitlins.
#Entering "import os; os.system('cat /etc/passwd')" would throw an error
exec(code,{"__builtins__": {"print": print}},{})

def f1():
    print('Hello, Codecademy!')

def f2():
    print('Hello, world!')

#locals restrict the usage of f1 function with exec:
ohoho = exec("f1()",{"__builtins__": {}}, {"f1": f1})

print(type(ohoho))
print(ohoho)

exec("f2()",{"__builtins__": {}}, {"f1": f1}) #will throw an error