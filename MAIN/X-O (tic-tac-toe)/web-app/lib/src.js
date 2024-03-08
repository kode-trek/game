var unmarked = ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9"]

var turn = 1

function _end(arg1) {
 document.getElementById("s1").disabled = true
 document.getElementById("s2").disabled = true
 document.getElementById("s3").disabled = true
 document.getElementById("s4").disabled = true
 document.getElementById("s5").disabled = true
 document.getElementById("s6").disabled = true
 document.getElementById("s7").disabled = true
 document.getElementById("s8").disabled = true
 document.getElementById("s9").disabled = true

 turn = 0

 alert(arg1 + " won!")
}

// number of option(s) left.
// when each player takes a turn, this number is reduced by 1.
var c = 9

// opponent-O- randomly picks an option.
function ff() {
 c = c - 1
 var ind = Math.round(Math.random()*100) % c
 var pick = unmarked[ind]
 unmarked.splice(unmarked.indexOf(pick), 1)
 document.getElementById(pick).value = "O"
 document.getElementById(pick).disabled = true
}

function x_check() {
 var s1 = document.getElementById("s1").value
 var s2 = document.getElementById("s2").value
 var s3 = document.getElementById("s3").value
 var s4 = document.getElementById("s4").value
 var s5 = document.getElementById("s5").value
 var s6 = document.getElementById("s6").value
 var s7 = document.getElementById("s7").value
 var s8 = document.getElementById("s8").value
 var s9 = document.getElementById("s9").value

// diag
 if ((s1 == "X") && (s5 == "X") && (s9 == "X")) _end("X")
 if ((s3 == "X") && (s5 == "X") && (s7 == "X")) _end("X")
// col
 if ((s1 == "X") && (s4 == "X") && (s7 == "X")) _end("X")
 if ((s2 == "X") && (s5 == "X") && (s8 == "X")) _end("X")
 if ((s3 == "X") && (s6 == "X") && (s9 == "X")) _end("X")
// row
 if ((s1 == "X") && (s2 == "X") && (s3 == "X")) _end("X")
 if ((s4 == "X") && (s5 == "X") && (s6 == "X")) _end("X")
 if ((s7 == "X") && (s8 == "X") && (s9 == "X")) _end("X")
}

function o_check() {
 var s1 = document.getElementById("s1").value
 var s2 = document.getElementById("s2").value
 var s3 = document.getElementById("s3").value
 var s4 = document.getElementById("s4").value
 var s5 = document.getElementById("s5").value
 var s6 = document.getElementById("s6").value
 var s7 = document.getElementById("s7").value
 var s8 = document.getElementById("s8").value
 var s9 = document.getElementById("s9").value

// diag
 if ((s1 == "O") && (s5 == "O") && (s9 == "O")) _end("O")
 if ((s3 == "O") && (s5 == "O") && (s7 == "O")) _end("O")
// col
 if ((s1 == "O") && (s4 == "O") && (s7 == "O")) _end("O")
 if ((s2 == "O") && (s5 == "O") && (s8 == "O")) _end("O")
 if ((s3 == "O") && (s6 == "O") && (s9 == "O")) _end("O")
// row
 if ((s1 == "O") && (s2 == "O") && (s3 == "O")) _end("O")
 if ((s4 == "O") && (s5 == "O") && (s6 == "O")) _end("O")
 if ((s7 == "O") && (s8 == "O") && (s9 == "O")) _end("O")
}

// user-X- may takes an option: 1 ~ 9

function f1() {
 c = c - 1
 document.getElementById("s1").value = "X"
 unmarked.splice(unmarked.indexOf("s1"), 1)
 document.getElementById("s1").disabled = "true"
 x_check()
 if(turn == 1) ff()
 o_check()
}

function f2() {
 c = c - 1
 document.getElementById("s2").value = "X"
 unmarked.splice(unmarked.indexOf("s2"), 1)
 document.getElementById("s2").disabled = "true"
 x_check()
 if(turn == 1) ff()
 o_check()
}

function f3() {
 c = c - 1
 document.getElementById("s3").value = "X"
 unmarked.splice(unmarked.indexOf("s3"), 1)
 document.getElementById("s3").disabled = "true"
 x_check()
 if(turn == 1) ff()
 o_check()
}

function f4() {
 c = c - 1
 document.getElementById("s4").value = "X"
 unmarked.splice(unmarked.indexOf("s4"), 1)
 document.getElementById("s4").disabled = "true"
 x_check()
 if(turn == 1) ff()
 o_check()
}

function f5() {
 c = c - 1
 document.getElementById("s5").value = "X"
 unmarked.splice(unmarked.indexOf("s5"), 1)
 document.getElementById("s5").disabled = "true"
 x_check()
 if(turn == 1) ff()
 o_check()
}

function f6() {
 c = c - 1
 document.getElementById("s6").value = "X"
 unmarked.splice(unmarked.indexOf("s6"), 1)
 document.getElementById("s6").disabled = "true"
 x_check()
 if(turn == 1) ff()
 o_check()
}

function f7() {
 c = c - 1
 document.getElementById("s7").value = "X"
 unmarked.splice(unmarked.indexOf("s7"), 1)
 document.getElementById("s7").disabled = "true"
 x_check()
 if(turn == 1) ff()
 o_check()
}

function f8() {
 c = c - 1
 document.getElementById("s8").value = "X"
 unmarked.splice(unmarked.indexOf("s8"), 1)
 document.getElementById("s8").disabled = "true"
 x_check()
 if(turn == 1) ff()
 o_check()
}

function f9() {
 c = c - 1
 document.getElementById("s9").value = "X"
 unmarked.splice(unmarked.indexOf("s9"), 1)
 document.getElementById("s9").disabled = "true"
 x_check()
 if(turn == 1) ff()
 o_check()
}
