from sys import argv
from sys import exit
from random import randrange

# reads a text-file, returns text
def read_text_file(arg1):
 fh = open(arg1)
 v1 = fh.read()
 fh.close()
 return v1

# checks for CAPITAL letter in word.
def is_AZ(arg1):
 AZ = []
 for i in range(ord("A"), ord("Z") + 1): AZ.append(chr(i))
 for i in arg1:
  if i in AZ: return True

# checks for non-alphabet letter in word.
def not_az(arg1):
 az = []
 for i in range(ord("a"), ord("z") + 1): az.append(chr(i))
 for i in arg1:
  if i not in az: return True

# omits ir-regular gaps ("\n", "\t", ...), returns list of word(s)
def no_gap(arg1):
 v1 = ""
 for i in arg1:
  if i == "\n" or i == "\t": pass
  else: v1 += i
 return v1.split(" ")

# excludes