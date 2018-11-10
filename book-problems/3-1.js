"use strict";
//3.1 Describe how you could use a single array to implement three stacks.

// Whenever you insert or remove an element you can use modulo 3 to determine where your element is 
// going to be placed and where it should be popped from.  If you keep track of the length of the 
// array it is a pretty simple calculation to figure out the index for each operation.  

// One constraint you have here is whether or not your array is fixed or not.  If it is fixed
// you will need to prevent any push from overrunning the buffer. 