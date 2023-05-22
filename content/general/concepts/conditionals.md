## General Conditionals
Many times we have to take a decision based on some conditions, for example, if we want to decide whether a person can vote or not, we need to check if the person is 18 years or older or not.

Such decision-making is done with the help of conditionals.Besides, condtionals are also required for flow control.

All the languages support conditonals in various ways, but majorly there are two main conditionals: 
> if- else
> switch

## If-else
>If statement

The if statement is the most basic form of a conditional. It checks a condition and executes a block of code if the condition is true. 
If the condition is false, the program continues with the next instruction. The basic syntax for an if statement is as follows:
>if (condition) {
>
>    // code to be executed if the condition is true
>
>}

For example: If we want to print Hello when 1 is entered in variable a. (Note: It is not specific to any language.) 

        if(int a=1){
        print("Hello");
        }

>If-else statement

The if-else statement provides an alternative block of code to execute when the condition is false. 
If the condition is true, the if block is executed; otherwise, the else block is executed. The basic syntax for an if-else statement is as follows:

>if (condition) {
>
>    // code to be executed if the condition is true
>    
>} else {
>
>    // code to be executed if the condition is false
>    
>}

For example let us take the condition we discussed earlier regarding the eligibility to vote.(Note: It is not specific to any language.)

      if(int age>=18){
      print("You can vote");
      }
      else{
      print("You can't vote);
      }
      
## Switch statements
The switch statement provides a way to perform different actions based on different values of a variable or expression. 
It simplifies complex if-else chains. The basic syntax for a switch statement is as follows:
>switch (variable/expression) {
>
>    case value1:
>    
>        // code to be executed if the variable/expression matches value1
>        
>        break;
>        
>    case value2:
>    
>        // code to be executed if the variable/expression matches value2
>        
>        break;
>        
>    // more cases...
>    
>    default:
>    
>        // code to be executed if none of the cases match the variable/expression
>        
>        break;
>        
>}

For example a program that determines the day of the week based on a given number

    day_number = 3
    switch (day_number) {
      case 1:
          print("Monday")
          break
      case 2:
          print("Tuesday")
          break
      case 3:
          print("Wednesday")
          break
      case 4:
          print("Thursday")
          break
      case 5:
          print("Friday")
          break
      case 6:
          print("Saturday")
          break
      case 7:
          print("Sunday")
          break
      default:
          print("Invalid day number")
          break
    }

