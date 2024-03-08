#https://youtu.be/I8VGW0C_GO4

import numpy as np
from numpy.random import randint

dodgers = np.zeros(9)
giants = np.zeros(9)

for i in range(9):
	score = randint(3, size=1)
#	1/3 chance to score at least a run
	if score == 2:
#		1 to 3 runs
		dodgers[i] = randint(3, size=1) + 1
	if score == 3:
#		simulates chance of a big inning of 1 to 7 runs
		dodgers[i] = randint(7, size=1) + 1
for i in range(9):
	score = randint(3, size=1)
	if score == 2:
		giants[i] = randint(3, size=1) + 1
	if score == 3:
		giants[i] = randint(7, size=1) + 1
print dodgers, sum(dodgers)
print giants, sum(giants)
if sum(dodgers) > sum(giants):
	print 'dodgers won!'
else:
	print 'giants won!'
