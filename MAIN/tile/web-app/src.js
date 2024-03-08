document.getElementById('place4').name = 'null'

function check() {
flag1 = 0
flag2 = 0
flag3 = 0
flag4 = 0

if (document.getElementById('place1').getAttribute('src') == '1.jpg')
	flag1 = 1
if (document.getElementById('place2').getAttribute('src') == '2.jpg')
	flag2 = 1
if (document.getElementById('place3').getAttribute('src') == '3.jpg')
	flag3 = 1
if (document.getElementById('place4').getAttribute('src') == 'null.png')
	flag4 = 1

	if ((flag1 == 1) && (flag2 == 1) && (flag3 == 1) && (flag4 == 1)) {
		alert('won!')
		window.open("default.jpg")
	}
}

function mov() {
	var m = document.getElementsByName("marked")[0].id
	var n = document.getElementsByName("null")[0].id

	src1 = document.getElementById(m).getAttribute('src')
	document.getElementById(m).src = document.getElementById(n).getAttribute('src')
	document.getElementById(n).src = src1

	document.getElementById(m).name = document.getElementById(n).name
	document.getElementById(n).name = ""

	check()
}

function s1() {
	document.getElementById('place1').border = 5
	document.getElementById('place2').border = 0
	document.getElementById('place3').border = 0
	document.getElementById('place4').border = 0

	document.getElementById('place1').name = "marked"
}
function s2() {
	document.getElementById('place2').border = 5
	document.getElementById('place1').border = 0
	document.getElementById('place3').border = 0
	document.getElementById('place4').border = 0

	document.getElementById('place2').name = "marked"
}
function s3() {
	document.getElementById('place3').border = 5
	document.getElementById('place2').border = 0
	document.getElementById('place1').border = 0
	document.getElementById('place4').border = 0

	document.getElementById('place3').name = "marked"
}
function s4() {
	document.getElementById('place4').border = 5
	document.getElementById('place2').border = 0
	document.getElementById('place3').border = 0
	document.getElementById('place1').border = 0

	document.getElementById('place4').name = "marked"
}
