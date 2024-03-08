document.getElementById("b0").style.backgroundColor = "transparent";
document.getElementById("b0").style.cursor = "pointer";
document.getElementById("b1").style.backgroundColor = "transparent";
document.getElementById("b1").style.cursor = "pointer";
document.getElementById("b2").style.backgroundColor = "transparent";
document.getElementById("b2").style.cursor = "pointer";
document.getElementById("b3").style.backgroundColor = "transparent";
document.getElementById("b3").style.cursor = "pointer";
document.getElementById("b4").style.backgroundColor = "transparent";
document.getElementById("b4").style.cursor = "pointer";
document.getElementById("b5").style.backgroundColor = "transparent";
document.getElementById("b5").style.cursor = "pointer";
document.getElementById("b6").style.backgroundColor = "transparent";
document.getElementById("b6").style.cursor = "pointer";
document.getElementById("b7").style.backgroundColor = "transparent";
document.getElementById("b7").style.cursor = "pointer";
document.getElementById("b8").style.backgroundColor = "transparent";
document.getElementById("b8").style.cursor = "pointer";
document.getElementById("b9").style.backgroundColor = "transparent";
document.getElementById("b9").style.cursor = "pointer";

var flg = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
var cnt = 4;

function f0() {
 document.getElementById("id1").value = "";

 document.getElementById("b0").style.backgroundColor = "transparent";
 document.getElementById("b0").style.cursor = "pointer";
 document.getElementById("b1").style.backgroundColor = "transparent";
 document.getElementById("b1").style.cursor = "pointer";
 document.getElementById("b2").style.backgroundColor = "transparent";
 document.getElementById("b2").style.cursor = "pointer";
 document.getElementById("b3").style.backgroundColor = "transparent";
 document.getElementById("b3").style.cursor = "pointer";
 document.getElementById("b4").style.backgroundColor = "transparent";
 document.getElementById("b4").style.cursor = "pointer";
 document.getElementById("b5").style.backgroundColor = "transparent";
 document.getElementById("b5").style.cursor = "pointer";
 document.getElementById("b6").style.backgroundColor = "transparent";
 document.getElementById("b6").style.cursor = "pointer";
 document.getElementById("b7").style.backgroundColor = "transparent";
 document.getElementById("b7").style.cursor = "pointer";
 document.getElementById("b8").style.backgroundColor = "transparent";
 document.getElementById("b8").style.cursor = "pointer";
 document.getElementById("b9").style.backgroundColor = "transparent";
 document.getElementById("b9").style.cursor = "pointer";

 flg = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
 cnt = 4;
}

// generate a 4-digit number
var arr1=[1]
while(arr1.length != 4) {
 var idx = Math.floor(Math.random() * 9);
 if (!arr1.includes(idx)) {
  arr1.push(idx);
 }
}

n =
arr1[0].toString() +
arr1[1].toString() +
arr1[2].toString() +
arr1[3].toString();

function f2() {
 alert(n);
 flg = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
 cnt = 4;
}

a = 0
b = 0
c = 1

function f1() {
 document.getElementById("b0").style.backgroundColor = "transparent";
 document.getElementById("b0").style.cursor = "pointer";
 document.getElementById("b1").style.backgroundColor = "transparent";
 document.getElementById("b1").style.cursor = "pointer";
 document.getElementById("b2").style.backgroundColor = "transparent";
 document.getElementById("b2").style.cursor = "pointer";
 document.getElementById("b3").style.backgroundColor = "transparent";
 document.getElementById("b3").style.cursor = "pointer";
 document.getElementById("b4").style.backgroundColor = "transparent";
 document.getElementById("b4").style.cursor = "pointer";
 document.getElementById("b5").style.backgroundColor = "transparent";
 document.getElementById("b5").style.cursor = "pointer";
 document.getElementById("b6").style.backgroundColor = "transparent";
 document.getElementById("b6").style.cursor = "pointer";
 document.getElementById("b7").style.backgroundColor = "transparent";
 document.getElementById("b7").style.cursor = "pointer";
 document.getElementById("b8").style.backgroundColor = "transparent";
 document.getElementById("b8").style.cursor = "pointer";
 document.getElementById("b9").style.backgroundColor = "transparent";
 document.getElementById("b9").style.cursor = "pointer";

 flg = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
 cnt = 4;

 var v1 = document.getElementById("id1").value
 if (v1.length < 4) {
  alert("You need to input 4 digits.")
  f0();
  return 0
 }

 if (n.search(v1[0]) == v1.search(v1[0])) a += 1
 if (n.search(v1[1]) == v1.search(v1[1])) a += 1
 if (n.search(v1[2]) == v1.search(v1[2])) a += 1
 if (n.search(v1[3]) == v1.search(v1[3])) a += 1

 if (n.includes(v1[0])) b += 1
 if (n.includes(v1[1])) b += 1
 if (n.includes(v1[2])) b += 1
 if (n.includes(v1[3])) b += 1

 b = b - a

 var R = a + "A" + b + "B"
 document.getElementById("g" + c).innerHTML = v1
 if (R == "4A0B") {
  alert("You Won!")
  document.getElementById("r" + c).innerHTML = "4A0B"
  document.getElementById("chk").disabled = true
  return 0
 }
 document.getElementById("r" + c).innerHTML = R

 c += 1
 document.getElementById("id1").value = ""
 a = 0
 b = 0
 if (c == 9) {
  alert("You Lost!")
  document.getElementById("id1").value = n
 }
}

function b0() {
 if (cnt && flg[0]) {
  document.getElementById("id1").value =
  document.getElementById("id1").value + "0";
  document.getElementById("b0").style.backgroundColor = "gray";
  document.getElementById("b0").style.cursor = "not-allowed";
  flg[0] = 0;
  cnt--;
 }
}

function b1() {
 if (cnt && flg[1]) {
  document.getElementById("id1").value =
  document.getElementById("id1").value + "1";
  document.getElementById("b1").style.backgroundColor = "gray";
  document.getElementById("b1").style.cursor = "not-allowed";
  flg[1] = 0;
  cnt--;
 }
}

function b2() {
 if (cnt && flg[2]) {
  document.getElementById("id1").value =
  document.getElementById("id1").value + "2";
  document.getElementById("b2").style.backgroundColor = "gray";
  document.getElementById("b2").style.cursor = "not-allowed";
  flg[2] = 0;
  cnt--;
 }
}

function b3() {
 if (cnt && flg[3]) {
  document.getElementById("id1").value =
  document.getElementById("id1").value + "3";
  document.getElementById("b3").style.backgroundColor = "gray";
  document.getElementById("b3").style.cursor = "not-allowed";
  flg[3] = 0;
  cnt--;
 }
}

function b4() {
 if (cnt && flg[4]) {
  document.getElementById("id1").value =
  document.getElementById("id1").value + "4";
  document.getElementById("b4").style.backgroundColor = "gray";
  document.getElementById("b4").style.cursor = "not-allowed";
  flg[4] = 0;
  cnt--;
 }
}

function b5() {
 if (cnt && flg[5]) {
  document.getElementById("id1").value =
  document.getElementById("id1").value + "5";
  document.getElementById("b5").style.backgroundColor = "gray";
  document.getElementById("b5").style.cursor = "not-allowed";
  flg[5] = 0;
  cnt--;
 }
}

function b6() {
 if (cnt && flg[6]) {
  document.getElementById("id1").value =
  document.getElementById("id1").value + "6";
  document.getElementById("b6").style.backgroundColor = "gray";
  document.getElementById("b6").style.cursor = "not-allowed";
  flg[6] = 0;
  cnt--;
 }
}

function b7() {
 if (cnt && flg[7]) {
  document.getElementById("id1").value =
  document.getElementById("id1").value + "7";
  document.getElementById("b7").style.backgroundColor = "gray";
  document.getElementById("b7").style.cursor = "not-allowed";
  flg[7] = 0;
  cnt--;
 }
}

function b8() {
 if (cnt && flg[8]) {
  document.getElementById("id1").value =
  document.getElementById("id1").value + "8";
  document.getElementById("b8").style.backgroundColor = "gray";
  document.getElementById("b8").style.cursor = "not-allowed";
  flg[8] = 0;
  cnt--;
 }
}

function b9() {
 if (cnt && flg[9]) {
  document.getElementById("id1").value =
  document.getElementById("id1").value + "9";
  document.getElementById("b9").style.backgroundColor = "gray";
  document.getElementById("b9").style.cursor = "not-allowed";
  flg[9] = 0;
  cnt--;
 }
}
