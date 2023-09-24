var n = prompt("Enter your Name");
document.getElementById("span").innerHTML = n;
if (n == "") {
  var n = "user";
  document.getElementById("span").innerHTML = n;
}

function cal() {
  var a = document.getElementById("f").value;
  var b = document.getElementById("s").value;
  var ope = document.getElementById("ope").value;
  if (ope == "0") {
    var sum = 0;
    document.getElementById("val").value = sum;
  }
  if (ope == "+") {
    var sum = parseInt(a) + parseInt(b);
    document.getElementById("val").value = sum;
  }
  if (ope == "-") {
    var sum = parseInt(a) - parseInt(b);
    document.getElementById("val").value = sum;
  }
  if (ope == "x") {
    var sum = parseInt(a) * parseInt(b);
    document.getElementById("val").value = sum;
  }
  if (ope == "÷") {
    var sum = parseInt(a) / parseInt(b);
    document.getElementById("val").value = sum;
  }
}
