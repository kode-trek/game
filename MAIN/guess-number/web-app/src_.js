ans = Math.floor(Math.random() * 1000) + 1
count = 0

function f1() {
 var rand = "#"+(Math.random()*0xFFFFFF<<0).toString(16)
 count += 1
 var v1 = document.getElementById("id1").value
 v1 = parseInt(v1)
 if (v1 == ans) {
  document.getElementById("id2").style.color = "green"
  document.getElementById("id2").innerHTML = "Excellent! That was my number."
  document.getElementById("id3").style.color = "blue"
  document.getElementById("id3").innerHTML = "You tried: " + count + " time(s)"
  count = 0
  document.getElementById("id4").disabled = true;
 }
 else if (Math.abs(ans - v1) <= 10) {
  document.getElementById("id2").style.color = rand
  document.getElementById("id2").innerHTML = "You're getting closer!"
 }
 else if (v1 < ans) {
  document.getElementById("id2").style.color = rand
  document.getElementById("id2").innerHTML = "Too Low!"
 }
 else if (v1 > ans) {
  document.getElementById("id2").style.color = rand
  document.getElementById("id2").innerHTML = "Too High!"
 }
}
