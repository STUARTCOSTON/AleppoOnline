var myVar;
function myLoader() {
    myVar = setTimeout(showPage, 2000);
}
function showPage() {
  document.getElementById("waterLoader").style.display = "none";
  document.getElementById("site").style.display = "block";
}
