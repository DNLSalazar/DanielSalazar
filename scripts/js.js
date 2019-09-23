
var menIcon = document.getElementById("menuIcon");

window.addEventListener("load", function() {
  menIcon.addEventListener("click", fullmenu);
})



function fullmenu() {
  this.parentElement.classList.toggle("change");
}

function focusIn(data) {
  data.parentElement.lastElementChild.firstChild.style.transform = "translateY(-30px)";
  data.style.transform = "scale(1,1)";
}

function nofocus(data) {
  if(data.value != "") {
    data.parentElement.lastElementChild.firstChild.style.transform = "translateY(-30px)";
    data.style.transform = "scale(1,1)";
  } else {
    data.parentElement.lastElementChild.firstChild.style.transform = "translateY(0px)";
    data.style.transform = "scale(1,0)";
  }
}
