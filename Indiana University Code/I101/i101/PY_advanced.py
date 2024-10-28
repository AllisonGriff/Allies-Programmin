#### Task 1 ####
#### TO DO####
def mathfactorial(n):
    mathfactorial=1

    for inputi in range(n):
        mathfactorial*=inputi +1
    return mathfactorial
print(mathfactorial(5))

#### Task 2 ####
#### Uncomment out the below lines and input the number you want to check#
import math
print(math.factorial(5))

while True:
    userInput=input("Enter a number(or type stop to end):")

    if userInput.lower() == "stop":
        print("Gaame over!")
        break

    try:
        number=int(userInput)
        result= mathfactorial(number)
        print(result)

    except ValueError:
        print(f"{userInput} is not a number. Try again")

# #### Task 3 ####
# #### YOUR CODE BELOW ####
luddy_courses = ["INFO-I 101", "INFO-I 210", "INFO-I 308", "INFO-I 360", "INFO-I 453","STAT-S 350","CSCI-C 211","CSCI-B 365", "CSCI-C 311","CSCI-C 343","CSCI-B 405","ENGR-E 313", "LLLC-Y 101"]
info_courses = []
cs_courses = []
other_courses = []

for course in luddy_courses:
    if course.startswith("INFO"):
        info_courses.append(course)
    elif course.startswith("CSCI") or course.startswith("STAT"):
        cs_courses.append(course)
    else:
        other_courses.append(course)

print(f"Informatics courses: {info_courses} (Total: {len(info_courses)})")
print(f"Computer Science courses: {cs_courses} (Total: {len(cs_courses)})")
print(f"Other courses: {other_courses} (Total: {len(other_courses)})")