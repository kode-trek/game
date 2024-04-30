function f1() {
 var v1 = document.getElementById("id1").value
 var v2 = document.getElementById("id2").value
 var v3 = document.getElementById("id3").value
 if ((v1 == 1) && (v2 == 2) && (v3 == 3))
  document.getElementById("id0").style.backgroundColor = "lightgreen"
 else
  document.getElementById("id0").style.backgroundColor = "pink"
}
