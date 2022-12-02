function myFunction() {
    var x = document.getElementById("topnav");
    if (x.className === "navigation") {
      x.className += " responsive";
    } else {
      x.className = "navigation";
    }
}