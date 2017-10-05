// set up function
function setup() {

  // create the canvas
  createCanvas( 600, 800 );

}

function draw() {

// background
background( 'rgb(120, 236, 189)' );

//main sandbox
push();

// setting canvas to center, grid center( x:0, y:0)
translate( 300, 400);

//wings
push();
fill( 'rgb(246, 240, 243)' );
triangle( 0, 0, -290, -15, -190, -300);
triangle( 0, 0, -250, 0, -200, 300 );
scale( -1, 1 );
triangle( 0, 0, -290, -15, -190, -300);
triangle( 0, 0, -250, 0, -200, 300 );
pop();
//end wings

push();
strokeWeight( 6 );
line( 0, 0, 140, -300);

strokeWeight( 10);
point( 140, -300);
scale( -1, 1);
strokeWeight( 6 );
line( 0, 0, 140, -300);

strokeWeight( 10);
point( 140, -300);
pop();

//arms
push();
translate( 0, -55 );

//left arm
strokeWeight( 50 );
line( -140, 0, -200, 100 );
line( -200, 100, -200, 200);

// right arm
scale( -1, 1 );
strokeWeight( 50 );
line( -140, 0, -200, 100 );
line( -200, 100, -200, 200);

// hands
strokeWeight( 75 );
point( 200, 200 );
scale( -1, 1 );
strokeWeight( 75 );
point( 200, 200 );

pop();


// Body
push();
rect(-150, -100, 300, 300);


push();
fill( 'rgb(244, 241, 23)' );
translate(-150, -100);
rect(0, 0, 300, 40);
translate(0, 80);
rect(0, 0, 300, 40);
translate(0, 80);
rect(0, 0, 300, 40);
translate(0, 80);
rect(0, 0, 300, 40);
pop();


pop(); // body end

// legs
push();
translate( 0, 200);

//left legs
triangle( -140, 0, -50, 0, -100, 500);
//right leg
scale( -1, 1);
triangle( -140, -1, -50, -1, -100, 500);
pop(); // end legs


//head
push();
translate( 0, -175 );

fill( 'rgb(247, 192, 224)' );
ellipse( 0, 0, 300, 200 );

// mouth
fill( 0 );
arc( 0, 50, 180, 60, radians(350), radians(190) );


// nose
fill( 'rgb(237, 117, 232)' );
triangle( 0, -20, 30, 20, -30, 20 );


// eyes
//left
push();
translate( -60, -40 );

fill(255);
ellipse( 0, 0, 60, 38 );
noFill();
fill( 'rgb(8, 154, 41)' );
ellipse( 0, 0, 30 );
fill( 0 );
ellipse( 0, 0, 20 );

fill( 'rgb(73, 44, 7)' );
quad( 30, -40, 30, -30, -40, -15, -35, -30 );
pop();

//right
push();
translate( 60, -40 );
fill(255);
ellipse( 0, 0, 60, 38 );
noFill();
fill( 'rgb(8, 154, 41)' );
ellipse( 0, 0, 30 );
fill( 0 );
ellipse( 0, 0, 20 );

fill( 'rgb(73, 44, 7)' );
quad( -30, -40, -30, -30, 40, -15, 35, -30 );
pop();

pop(); // end head


pop();


pop(); // end character
}
