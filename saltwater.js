var paginationIndex = 1;
var contentIndex = 1;
var numsIndex = 1;
var themeIndex = 1;
var slideIndex = 1;
showDivs(slideIndex);
showTheme(themeIndex);
showPageNums(numsIndex);
showContent(contentIndex);
showPagination(paginationIndex);

function plusDivs(n){
  transTheme(themeIndex);
  setTimeout(function(){showDivs(slideIndex += n);}, 230);
  setTimeout(function(){ showPagination(paginationIndex += n);}, 230);
  setTimeout(function(){ showTheme(themeIndex += n); }, 1000);
  setTimeout(function(){ showPageNums(numsIndex += n); }, 1000);
  setTimeout(function(){ showContent(contentIndex += n); }, 1200);
}
function currentDiv(n){
  transTheme(themeIndex);
  setTimeout(function(){ showDivs(slideIndex = n); }, 230);
  setTimeout(function(){ showPagination(paginationIndex = n);}, 230);
  setTimeout(function(){ showTheme(themeIndex = n); }, 1000);
  setTimeout(function(){ showPageNums(numsIndex = n); }, 1000);
  setTimeout(function(){ showContent(contentIndex = n); }, 1200);
}
function transTheme(n) {
  var pn = document.getElementsByClassName("pageNums");
  var td = document.getElementsByClassName("themeDiv");
  var c = document.getElementsByClassName("content");
  pn[themeIndex-1].style.display = "none";
  td[themeIndex-1].style.transition = "1s";
  td[themeIndex-1].style.left = "100%";
  c[themeIndex-1].style.display = "none";
}
function showDivs(n) {
  var id;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (id = 0; id < x.length; id++) {
     x[id].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
function showTheme(n) {
  var it;
  var td = document.getElementsByClassName("themeDiv");
  if (n > td.length) {themeIndex = 1}    
  if (n < 1) {themeIndex = td.length}
  for (it = 0; it < td.length; it++) {
     td[it].style.display = "none";
  }
  td[themeIndex-1].style.transition = "0.5s";
  td[themeIndex-1].style.display = "block";
  td[themeIndex-1].style.left = "-100%";
  setTimeout(function(){ td[themeIndex-1].style.left = "-50%"; }, 50);
}
function showPageNums(n) {
  var inum;
  var pn = document.getElementsByClassName("pageNums");
  if (n > pn.length) {numsIndex = 1}    
  if (n < 1) {numsIndex = pn.length}
  for (inum = 0; inum < pn.length; inum++) {
     pn[inum].style.display = "none";
  }
  pn[numsIndex-1].style.display = "block";
}
function showContent(n) {
  var ic;
  var c = document.getElementsByClassName("content");
  if (n > c.length) {contentIndex = 1}    
  if (n < 1) {contentIndex = c.length}
  for (ic = 0; ic < c.length; ic++) {
     c[ic].style.display = "none";
  }
  c[contentIndex-1].style.display = "block";
}
function showPagination(n) {
  var ip;
  var p = document.getElementsByClassName("pagination");
  if (n > p.length) {paginationIndex = 1}    
  if (n < 1) {paginationIndex = p.length}
  for (ip = 0; ip < p.length; ip++) {
     p[ip].style.display = "none";
  }
  p[paginationIndex-1].style.display = "block";
}
