print("Welcome to the Simple Calculator !")
#
num1 = input("Enter the first number : ")
num2 = input("Enter the second number : ")
#
print ("Select an operation :")
print ("1) Addition (+)")
print ("2) Subtraction ( -)")
print ("3) Multiplication (*)")
print ("4) Division (/)")
operation = input("Enter the operation (1 , 2 , 3 , or 4): ")
#
if operation == "1":
    result = num1 + num2
    print("The result of " + num1 + "+"+ num2 + " is : " + result )
elif operation == "2":
    result = num1 - num2
    print("The result of " + num1 + " -" + num2 + " is :" + result )
elif operation == "3":
    result = num1 * num2
    print("The result of " + num1 + "*" + num2 + " is :" + result )
elif operation == "4":
    result = num1 / num2
    print("The result of " + num1 + "/" + num2 + " is :" + result )
    if num2 == 0:
    # result = num1 / num2
    # print("The result of " + num1 + "/" + num2 + " is :" + result )
        print("Error : Cannot divide by zero .")
else :
    print("Invalid operation selected .")