number = []
of_3 = []
of_5 = []
both = []
con1 = "Fizz"
con2 = "Buzz"
con3 = "FizzBuzz"

for i in range(1,101):
  number.append(i)

for number in number:
  if number % 3 == 0 and number % 5 == 0:
    both.append(number)
    print(con3)
  elif number % 3 == 0:
    of_3.append(number)
    print(con1)
  elif number % 5 == 0:
    of_5.append(number)
    print(con2)
  else:
    pass

print(of_3)
print(of_5)
print(both)
