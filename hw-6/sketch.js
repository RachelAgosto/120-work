// declare variables
var pt1_x, pt1_y;
var pt2_x, pt2_y;
var pt3_x;
var pt3_y;

var col_r = 10;
var col_g = 10;
var col_b = 10;

function setup() {
  createCanvas( windowWidth, windowHeight );
  background(0);

  pt1_x = 0 - width;
  pt1_y = height;

  pt2_x = width;
  pt2_y = 0 - height;

  pt3_x = width;
  pt3_y = height;

  frameRate(5);

}
//colorful live background
function draw() {
push();
  pt1_x += random(0, 50);
  pt2_y += random(0, 50);

  col_g += random(0, 10);
  col_b += random(0, 10);
  col_r += random(0, 10);

  // protection for going over 255
  col_g = col_g % 255;
  col_b = col_b % 255;
  col_r = col_b % 255;

  noStroke();
  fill(col_r, col_g, 255 - col_b);
  triangle(pt1_x, pt1_y, pt2_x, pt2_y, pt3_x, pt3_y);
pop();

// random circles
push();
    noFill();
    stroke( 255 );
    frameRate(2);

    var circle_size = random( 10, width-10 );
    ellipse( width/2, height/2, circle_size );
pop();

}
