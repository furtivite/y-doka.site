var p = document.getElementById("blinking")
setInterval(function () {
  if (p.style.fontSize != "10px") {
    p.style.fontSize = "10px"
  } else {
    p.style.fontSize = "20px"
  }
}, 2000)
