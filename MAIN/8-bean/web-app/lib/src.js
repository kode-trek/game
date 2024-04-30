/*START
هشت نخود
از حضرت دانیال (ع) روایت است که اگر خواهید بدانید حاجت تان برآورده می شود یا نه، ابتدا نیت کرده و یک قبضه نخود یا سایر حبوبات بگیرید و هشت هشت تعداد کنید..
STOP*/
function getRndInteger(min, max) {
 return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function f1() {
 var v1 = getRndInteger(0, 255);
 if ((v1 % 8) == 0) {
  document.getElementById("id-1").innerHTML = "زمین";
  document.getElementById("id-2").innerHTML = "برای تو سودی ندارد. منتظر برآورده شدن آن حاجت مباش که در آن در توقف ماند.";
 }
 if ((v1 % 8) == 1) {
  document.getElementById("id-1").innerHTML = "زهره";
  document.getElementById("id-2").innerHTML = "حاجت اش چنان که نیت کرده همان قرار روا خواهد شد.";
 }
 if ((v1 % 8) == 2) {
  document.getElementById("id-1").innerHTML = "مریخ";
  document.getElementById("id-2").innerHTML = "آن حاجت برآورده نخواهد شد.";
 }
 if ((v1 % 8) == 3) {
  document.getElementById("id-1").innerHTML = "ذنبه";
  document.getElementById("id-2").innerHTML = "آن حاجت نحس است و برآورده نخواهد شد.";
 }
 if ((v1 % 8) == 4) {
  document.getElementById("id-1").innerHTML = "زحل";
  document.getElementById("id-2").innerHTML = "آن حاجت برآورده نخواهد شد.";
 }
 if ((v1 % 8) == 5) {
  document.getElementById("id-1").innerHTML = "مشتری";
  document.getElementById("id-2").innerHTML = "آن حاجت به زودی برآورده خواهد شد.";
 }
 if ((v1 % 8) == 6) {
  document.getElementById("id-1").innerHTML = "قمر";
  document.getElementById("id-2").innerHTML = "آن حاجت برآورده خواهد شد.";
 }
 if ((v1 % 8) == 7) {
  document.getElementById("id-1").innerHTML = "عطارد";
  document.getElementById("id-2").innerHTML = "آن حاجت به خوبی برآورده می شود.";
 }
}
