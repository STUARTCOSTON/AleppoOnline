$('#site').on( 'DOMMouseScroll mousewheel', function ( event ) {
  if( event.originalEvent.detail > 0 || event.originalEvent.wheelDelta < 0 ) { //alternative options for wheelData: wheelDeltaX & wheelDeltaY
    //scroll down
    plusDivs(1);
  } else {
    //scroll up
    plusDivs(-1);
  }
  //prevent page fom scrolling
  return false;
});
