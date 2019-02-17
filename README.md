# hw3

What code draws the blades of grass?
      line(x, height-10, x+random(-10, 10), height-10-random(h));

What code makes the "lawnmower" come by? How often does it come by?
      if (random() > 0.999) {
        fill(255);
        rect(0, 0, width, height-15);
        h = 10;
      }
  If a randomly selected number between 0 and 1 is greater than 0.999
  set the fill to white,
  draw a rectangle that covers everything except some of the grass and the ground,
  and reset variable h which controls the maximum grass height to 10.

What's the point of the h variable?
  It determines the height of each blade of grass. It is increased by 3 each time the loop occurs. It also is reset to 10 when
  the "lawnmower" covers the existing long grass.

What does the -10 do in the second and fourth arguments of the line function, height-10-random(h)? Why is it there?
  It ensures that the initial and terminal points of the line are positioned properly in relation to the 10 px tall "ground"
  rectangle.
