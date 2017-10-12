function setup() {
    createCanvas( windowWidth, windowHeight );
}


var angle = 0;
var posX = 0;
var posY = 0;

function draw() {

background( 'rgb(88, 224, 231)' );

push();
//draw propeller
fill( 'rgb(232, 228, 36)');
  translate( width*0.5, height*0.5 );
   rotate( radians(angle) );
   ellipse( 0, 0, 300, 50 );

   // update angle position
   angle = angle + 45;

//create flying dots
   ellipse( posX, posY, 30, 30 );

       // update posX & posY every frame
       // add 1, then re-assign back to self
       posX = posX + 1;
       posY = posY + 1;
       pop();
push();
       //draw a circle that moves with the mouse
   fill( 'rgb(242, 93, 235)' );
   ellipse( mouseX, mouseY, 15 );
   pop();

}
