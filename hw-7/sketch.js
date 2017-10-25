var ball = {};
ball.width = 25;
ball.x = 10;
ball.y = 10;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 1;
ball.scale_y = 1;
var ball_color;
var fill_counter = 0;
var x_pos = 0;
function setup() {
    createCanvas(windowWidth, windowHeight);
    ball_color = color( 255, 255, 255, 5 );
    background(0);
}



function draw() {

x_pos++;
x_pos %= width;
fill_counter = x_pos % 30;
if( fill_counter == 0) {
  ball_color = color(
    random(255), random(255), random(255), 5 );
}


    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;


    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }

    noStroke();
     fill( ball_color );
     ellipse(ball.x, ball.y, ball.width, ball.width);
     ellipse(ball.x, ball.y, ball.width, ball.width + 25);
 ellipse(ball.x, ball.y, ball.width + 25, ball.width);
}

function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, 0.5, 10);
    ball.scale_y = map(mouseY, 0, height, 0.5, 10);
}
