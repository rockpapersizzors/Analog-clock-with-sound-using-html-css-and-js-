# Analog-clock-with-sound-using-html-css-and-js- 

I made it just to learn there are a lots to improve and learn . 
The main concept in this is i use --cssvariables  (initalization ) , var(--cssvariables)  and use js to update that variables using  element.style.setProperty("--cssvariables" , value); 
 I have also utilized basic css thing if there are 9 divs with one class same and one different for each you can set different value for each elements .
 You have to write that property in style of that element with a variable and you can give different variables for different elements . 
 ex : 
 HTML
 * ` ```html `
<div class="container">
  <div class="square rot-1">1</div>
  <div class="square rot-2">2</div>
  <div class="square rot-3">3</div>
  </div>
CSS
* ` ```css `
CSS
/* The shared class */
.square {
  transform: rotate(var(--angle, 0deg));
  /* note that : var(--variable-name, fallback-value)}$$ */

}

/* Individual classes just define the value */
.rot-1 { --angle: 15deg; }
.rot-2 { --angle: 45deg; }
.rot-3 { --angle: 90deg; }


there are a lots of things like playing sound whenever  second hand element "transitionend" 
and lots of css 
: ) 
#happylearnig
#keepgoing 
