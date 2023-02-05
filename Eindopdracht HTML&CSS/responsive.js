
/* Toggle between adding and removing the "responsive" class to topnav 
when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


// The sticky menu //
// window.onscroll = function () { myFunction2() };
// var navbar = document.getElementById("myTopnav");
// var sticky = navbar.offsetTop;

// function myFunction2() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

// Get the button, and when the user clicks on it, execute myFunction//
document.getElementById("myBtn").onclick = function () { myFunction3() };

/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function myFunction3() {
  document.getElementById("myDropdown").classList.toggle("show");
}


