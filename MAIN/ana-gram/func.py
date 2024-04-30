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

# excludes words with length less than 4
def less4(arg1):
 v1 = []
 for i in arg1:
  if len(i) < 4: pass
  else: v1.append(i)
 return v1

# excludes words with CAPITAL letters in them.
def no_upper(arg1):
 v1 = []
 for i in arg1:
  if is_AZ(i): pass
  else: v1.append(i)
 return v1

# excludes words with non-alphabet letters in them.
def az_only(arg1):
 v1 = []
 for i in arg1:
  if not_az(i): pass
  else: v1.append(i)
 return v1

# integrates 'em all.
def cleanse(arg1):
 v1 = no_gap(arg1)
 v1 = less4(v1)
 v1 = no_upper(v1)
 v1 = az_only(v1)
 # unique-list
 v1 = set(v1)
 w = []
 for i in v1: w.append(i)
 return w

# returns a scrambled-word:
def scramble_it(arg1):
 l = len(arg1)
 v = []
 while(len(v) != l):
  i = randrange(l)
  if i not in v: v.append(i)
 sw = ""
 for i in range(l): sw += arg1[v[i]]
 return sw

# if text-file not provided
db_default = [
"abstraction",
"ambiguous",
"arithmetic",
"backslash",
"bitmap",
"circumstance",
"combination",
"consequently",
"consortium",
"decrementing",
"dependency",
"disambiguate",
"dynamic",
"encapsulation",
"equivalent",
"expression",
"facilitate",
"fragment",
"hexadecimal",
"implementation",
"indistinguishable",
"inheritance",
"internet",
"java",
"localization",
"microprocessor",
"navigation",
"optimization",
"parameter",
"patrick",
"pickle",
"polymorphic",
"rigorously",
"simultaneously",
"specification",
"structure",
"lexical",
"likewise",
"management",
"manipulate",
"mathematics",
"hotjava",
"vertex",
"unsigned",
"traditional"
]
