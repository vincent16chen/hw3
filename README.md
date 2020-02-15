# hw3

1. What code draws the blades of grass?
  function draw() {
    stroke(random(60, 70), 100, 90);
    line(x, height-10, x+random(-10, 10), height-10-random(h));
    noStroke();
   }

2.1 What code makes the "lawnmower" come by? 
   if (random(1000) > 999) {
    //white
    fill(255);
    //white rectangle to cover thee grass
    rect(0, 0, width, height-15);
    h = 10;
   }

2.2 How often does it come by?
    when grass is more than 999
    
3. What's the point of the h variable?
    grass hight
    
4. What does the -10 do in the second and fourth arguments of the line function, height-10-random(h)? Why is it there?   
   second argument is to make it grown form the ground 
   fourth one is to make it grow up 
   
   
