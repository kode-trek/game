/* variable(s)
 [v1] generated random number (1~100)
 [v2] player's move(s)
 [v3] random color
 [v4] player's guess
*/
var v1 = Math.floor(Math.random() * 100) + 1
var v2 = 0
var v3 = "black"
var v4 = -1
// op(s)
function f1() {
 v3 = "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16)
 v2 += 1
 v4 = document.getElementById("id1").value
 v4 = parseInt(v4)
 if (v4 == v1) {
  document.getElementById("id2").style.color = "green"
  document.getElementById("id2").innerHTML = "Excellent! That was my number."
  document.getElementById("id3").style.color = "blue"
  document.getElementById("id3").innerHTML = "You tried: " + v2 + " time(s)"
  v2 = 0
  document.getElementById("id4").disabled = true;
 }
 else if (Math.abs(v1 - v4) <= 10) {
  document.getElementById("id2").style.color = v3
  document.getElementById("id2").innerHTML = "You're getting closer!"
 }
 else if (v4 < v1) {
  document.getElementById("id2").style.color = v3
  document.getElementById("id2").innerHTML = "Too Low!"
 }
 else if (v4 > v1) {
  document.getElementById("id2").style.color = v3
  document.getElementById("id2").innerHTML = "Too High!"
 }
}
