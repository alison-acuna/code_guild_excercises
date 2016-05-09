#from random import randint

#how_many_dice = int(input("How many dice would you like to roll?"))
#sides_of_dice = int(input("How many sides should each die have?"))

#for count in range(how_many_dice):
#    print(randint(1, sides_of_dice))

import random

class Die:
    def __init__(self, number_of_sides):
        self.number_of_sides = number_of_sides

    def roll_die(self):
        return random.randint(1, self.number_of_sides)

    def change_sides(self, new_number):
         self.number_of_sides = new_number



def main(side_1, side_2):
    die_1 = Die(side_1)
    die_2 = Die(side_2)
    return die_1.roll_die()
    return die_2.roll_die()

main(6, 12)
