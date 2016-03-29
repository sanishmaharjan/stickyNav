#stickyNav 1.0.3
A jQuery plugin for sticky navigation.

## Installation  
###Bower
````bash
bower install stickyNav --save
````

##Usage
````javascript
$(function() {
  $("#nav").stickyNav({
      "top" : 100,
      "zIndex": 10,
      "backgroundColor": "#ffffff",
      "scrollUp": false
  });
});
````

Options.

* top : Top position of sticky navigation | default 0
* zIndex : z-index value of sticky navigation | default 10
* backgroundColor : sticky navigation background color | default "#ffffff"
* scrollUp : 
  - If true sticky navigation will be scroll on page scroll up & appear on scroll down even page scroll not reach to top. 
  - If false sticky navigation always sticky to the top position.
