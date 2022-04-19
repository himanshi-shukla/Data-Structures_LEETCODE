import random
import time

print('Hi! Welcome to the guess Game. I am going to pick a number between 1 to 100')
time.sleep(3)
print('I am picking a number.....')

user_guess = int(input('What is your guess ?? 😃'))

real_number = random.randint(1,100)
guess_count = 1
while user_guess != real_number:
  time.sleep(1)
  guess_count += 1
  if  user_guess < real_number:
    user_guess = int(input('Wrong !!!❌ you need to guess higher .What is your guess ?? 😃'))
  else:
    user_guess = int(input('Wrong !!!❌ you need to guess lower .What is your guess ?? 😃'))

print(f'Congratulations !! you made it. The real number is {real_number}. You took {guess_count} : attempts to guess it')
    
    
  


