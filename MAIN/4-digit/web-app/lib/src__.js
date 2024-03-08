function f0() {
 document.getElementById('id1').value = ''

 document.getElementById('b0').disabled = false;
 document.getElementById('b1').disabled = false;
 document.getElementById('b2').disabled = false;
 document.getElementById('b3').disabled = false;
 document.getElementById('b4').disabled = false;
 document.getElementById('b5').disabled = false;
 document.getElementById('b6').disabled = false;
 document.getElementById('b7').disabled = false;
 document.getElementById('b8').disabled = false;
 document.getElementById('b9').disabled = false;
}
// creating 4 digits
var flg = 1;
var arr = [];
// 1st digit
var n1 = Math.floor(Math.random() * 9);
arr.push(n1);
// 2nd digit
flg = 1
while(flg) {
 var n2 = Math.floor(Math.random() * 9);
 if (arr.includes(n2)) {flg = 1;}
 else {
  flg = 0;
  arr.push(n2);
 }
}
// 3rd digit
flg = 1
while(flg) {
 var n3 = Math.floor(Math.random() * 9);
 if (arr.includes(n3)) {flg = 1;}
 else {
  flg = 0;
  arr.push(n3);
 }
}
// 4th digit
flg = 1
while(flg) {
 var n4 = Math.floor(Math.random() * 9);
 if (arr.includes(n4)) {flg = 1;}
 else {
  flg = 0;
  arr.push(n4);
 }
}
// 4-digits
n = n1.toString() + n2.toString() + n3.toString() + n4.toString();

a = 0
b = 0
c = 1
function f1() {
 document.getElementById('b0').disabled = false;
 document.getElementById('b1').disabled = false;
 document.getElementById('b2').disabled = false;
 document.getElementById('b3').disabled = false;
 document.getElementById('b4').disabled = false;
 document.getElementById('b5').disabled = false;
 document.getElementById('b6').disabled = false;
 document.getElementById('b7').disabled = false;
 document.getElementById('b8').disabled = false;
 document.getElementById('b9').disabled = false;

 var v1 = document.getElementById('id1').value
 if (v1.length < 4) {
  alert('You need to input 4 digits.')
  return 0
 }

 if (n.search(v1[0]) == v1.search(v1[0])) {a += 1}
 if (n.search(v1[1]) == v1.search(v1[1])) {a += 1}
 if (n.search(v1[2]) == v1.search(v1[2])) {a += 1}
 if (n.search(v1[3]) == v1.search(v1[3])) {a += 1}

 if (n.includes(v1[0])) {b += 1}
 if (n.includes(v1[1])) {b += 1}
 if (n.includes(v1[2])) {b += 1}
 if (n.includes(v1[3])) {b += 1}

 b = b - a

 var R = a + 'A' + b + 'B'
 document.getElementById('g' + c).innerHTML = v1
 if (R == '4A0B') {
  alert('You Won!')
  document.getElementById('r' + c).innerHTML = '4A0B'
  document.getElementById('chk').disabled = true;
  return 0;
 }
 document.getElementById('r' + c).innerHTML = R

 c += 1
 document.getElementById('id1').value = ''
 a = 0
 b = 0
 if (c == 9) {
  alert('You Lost!')
  document.getElementById('id1').value = n
 }
}

function b0() {
 if (((document.getElementById('id1').value).length) < 4)
 {
  document.getElementById('id1').value =
  document.getElementById('id1').value + '0'
 }
 document.getElementById("b0").disabled = true;
}
function b1() {
 if (((document.getElementById('id1').value).length) < 4)
 {
  document.getElementById('id1').value =
  document.getElementById('id1').value + '1'
 }
 document.getElementById("b1").disabled = true;
}
function b2() {
 if (((document.getElementById('id1').value).length) < 4)
 {
  document.getElementById('id1').value =
  document.getElementById('id1').value + '2'
 }
 document.getElementById("b2").disabled = true;
}
function b3() {
 if (((document.getElementById('id1').value).length) < 4)
 {
  document.getElementById('id1').value =
  document.getElementById('id1').value + '3'
 }
 document.getElementById("b3").disabled = true;
}
function b4() {
 if (((document.getElementById('id1').value).length) < 4)
 {
  document.getElementById('id1').value =
  document.getElementById('id1').value + '4'
 }
 document.getElementById("b4").disabled = true;
}
function b5() {
 if (((document.getElementById('id1').value).length) < 4)
 {
  document.getElementById('id1').value =
  document.getElementById('id1').value + '5'
 }
 document.getElementById("b5").disabled = true;
}
function b6() {
 if (((document.getElementById('id1').value).length) < 4)
 {
  document.getElementById('id1').value =
  document.getElementById('id1').value + '6'
 }
 document.getElementById("b6").disabled = true;
}
function b7() {
 if (((document.getElementById('id1').value).length) < 4)
 {
  document.getElementById('id1').value =
  document.getElementById('id1').value + '7'
 }
 document.getElementById("b7").disabled = true;
}
function b8() {
 if (((document.getElementById('id1').value).length) < 4)
 {
  document.getElementById('id1').value =
  document.getElementById('id1').value + '8'
 }
 document.getElementById("b8").disabled = true;
}
function b9() {
 if (((document.getElementById('id1').value).length) < 4)
 {
  document.getElementById('id1').value =
  document.getElementById('id1').value + '9'
 }
 document.getElementById("b9").disabled = true;
}
