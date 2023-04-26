// Alyson Mary
// Pascal Huynh 
// WEB AND FX: FROM THEORY TO PRACTICE, 502-A22, sect. 00002 
// A Day in The Mountains 
// https://openprocessing.org/sketch/1861125


/* (Instruction)
Use the mouse to click to change the colour of the background/the mountains and the cursor.
Move the cursor at the second click.
Click on 'a' on your keyboard when it's night time to see a message in the 
gray box below (that needs to be opened before trying the code).

(Analysis/artist statement)
This interactive art experiment is a visual representation of a complete day (morning,day,evening,night) in the mountains and nature.
It is also to demonstrate that during the day, many things happen such as a change in weather. 
My story is also to make feel the user to experience digitally a day in the mountains for the occasion of the beginning of spring.

*/


let img
let counting=[1,2,3,4]
let a //counter
let r= [255,133,206,41]
let g =[193,224,129,50]
let b =[94,255,71,65]
let c // random color for the mountains
let i // index that allows to display the clouds randomly in the cloud screen
let j // displays the cloud instead of the sun



function setup() {
  createCanvas(800,800);
  background(118, 229, 252);
  a=0
  e=0
  j=0
  c=color(35, 108, 40);
  
  
}
// sun rays of the sun
function preload() {
  img = loadImage('glow.png');
}

// different background colour after each click 
function draw() {
  background(r[e], g[e], b[e]);
  fill(243, 222, 44) //colour of the sun
  
  // Draw the sun in all backgrounds except the moon and the clouds

  if (e !=2) {
    circle(mouseX, mouseY, 300);//draw the sun
  } 

// In the clouds' window, randomly display clouds from 0 to 790 both vertically and horizontally and this 40 times (in loop)
  
if ((e===2) && (j===1)) {
  for (i = 0; i < 40; i++) {
    x1=int(random(790));
    y1=int(random(790));
  
   // Displays the image with position random
    width=300
    height=300
     //* image(img, 0, 0);
      image(img, random(x1, y1), random(x1, y1), width, height);
  
    }
  }
  
  imageMode(CENTER)
  image(img,mouseX,mouseY,500,500)
  
// Draw mountains and trees

  fill(c);
  noStroke();
  triangle(0,800,213,502,443,800); 
  triangle(430,800,602,606,800,800);//the mountains
  
fill(72, 169, 166)
triangle(36,800,65,736,80,800);
triangle(80,800,89,749,100,800);
triangle(100,800,114,730,139,800);
triangle(139,800,143,742,163,800);//the first section of trees

triangle(343,800,365,751,380,800);
triangle(380,800,396,730,411,800);
triangle(411,800,430,747,451,800);
triangle(451,800,458,771,470,800);//the second section of trees
  
triangle(611,800,627,765,638,800);
triangle(638,800,659,740,671,800);//the third section of trees
  
  // When the mouse click is at 2, there's an interaction 
  
  if (counting[a]===2){
  
  triangle(36,800,65,mouseY,80,800);
  triangle(80,800,89,mouseY,100,800);
  triangle(411,800,430,mouseY,451,800);
  triangle(638,800,659,mouseY,671,800);
  triangle(343,800,365,mouseY,380,800);

}
    
  }
 
  // If the 4th screen is reached, we return to the 1st
function mousePressed(){
  a=a+1
  if(a===3){
    a=0
  }

  e=e+1
// If we are in the 3rd screen, the cloud drawing is loaded
  if (e===2){
    img = loadImage('cloud.png');
    j=1
  }
  
  // If we are in the 4th screen, the moon drawing is loaded
  if (e===3){
    img = loadImage('moon.png');
    j=0
    
  }
  if (e===4){
    img = loadImage('glow.png');
    e=0
  j=0
  }
  
  c=color(0,random(255),0); // random tones of green for the mountains
  

}
// If the "a" key is pressed, a message is displayed
function keyPressed(){  
  if (key === 'a'){
    print ('Click again to restart the day :)');

  }
  
}
