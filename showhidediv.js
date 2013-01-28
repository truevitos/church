/*
	Show and hide div content when clicking a link
	Version 1.02
	Last revision: 24.11.2009
	Modification of code found here: http://www.webmasterworld.com/forum91/441.htm by ashkosh
*/


function showhide(id){ 
  if (document.getElementById){ 
    obj = document.getElementById(id);
  } 
  if (obj.style.display == "none"){ 
    obj.style.display = ""; 
  } else { 
    obj.style.display = "none"; 
  } 
}  

Event.observe(window, 'load', function() {
  $$('#navigation .menu_primary ul li div.menu_secondary').each( function(e) {
    // Menu generating code puts an inline "display: none" on each of these.
    // Take it off and less our CSS file handle hiding/showing.
    e.show();
  });
  $$('#navigation .menu_primary ul li').each( function(e) {
    Event.observe(e, 'mouseover', function() {
      Element.addClassName(e, 'hovering');
    });
    Event.observe(e, 'mouseout', function() {
      Element.removeClassName(e, 'hovering');
    });
  });
});

