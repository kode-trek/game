#! /bin/bash

BLUE='\033[1;34m'
YELLOW='\033[1;33m'
NC='\033[0m' #No-Color

p1="/home/$USER/.wine/drive_c/Program Files (x86)/Codemasters/IGI 2/pc"
p2="$p1""/COMMON/ai"

# ABNORMAL-SHUTDOWN
if [[ -e "$p2""_" ]]
then
 printf "${YELLOW}[WARNING]${NC} game is CRASHED. please RESTORE file(s).""\n"
 printf "${BLUE}[]${NC} ""$p2""_""\n"
 read -n1 -r -p "press ANY-KEY to EXIT..." key
 echo
 exit
fi

# BACKUP
cp -r "$p2" "$p2""_"

# MENU
printf "CHEAT-MODE:""\n"
printf "[1] ON""\n"
printf "[2] OFF""\n"
read -p "> " ans
#
if [[ "$ans" == 1 ]]
then
 cd "$p2"
 gzip default.qvm
 gzip squaddefault.qvm
 cp settings.qvm default.qvm
 cp settings.qvm squaddefault.qvm
fi

# PLAY
cd "$p1"
wine trainer.exe &
wine igi2.exe

# REVERT
rm -r "$p2"
mv "$p2""_" "$p2"
