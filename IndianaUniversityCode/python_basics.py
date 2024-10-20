# My Number

myNumber = 37
print(myNumber + 64)
print(138 - myNumber)
print( myNumber +64 *1)
print( 3737/ myNumber)
#  division opperand automatically turns whole numbers into a float for precision

## Human Debugging
credits_to_graduate = 120 
current_credits = 30
years_til_graduation = credits_to_graduate / current_credits
print("I have " , (int(years_til_graduation)) , "years until I graduate")

###Slice and Dice

info_courses = ["INFO-I 210", "INFO-I 211", "INFO-I 308", "INFO-I 422"]
courseDigits=[]
courseDigits.append(info_courses[0][-3:])
courseDigits.append(info_courses[1][-3:])
courseDigits.append(info_courses[2][-3:])
courseDigits.append(info_courses[3][-3:])

print(courseDigits)


