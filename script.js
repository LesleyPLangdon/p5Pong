//STEP 4
let p1X = 20;
let p1Y = 250;
let p2X = 780;
let p2Y = 250;
let pWidth = 20;
let pHeight = 100;
// STEP 12
let p1Speed = 5;
let p2Speed = 5;


//STEP 6
//ball
let ballX = 400;
let ballY = 250;
let ballSize = 20;
//STEP 13
let ballSpeed =2;
let ballDx =1;
let ballDy = 1;

//STEP 9
//scoreboard
let p1Score = 0;
let p2Score = 0;

//STEP 1
function setup() {
    createCanvas(800, 500);
    rectMode(CENTER);
    textAlign(CENTER);
    // background(100);
} //close setup
//STEP 2
function draw() {

    //STEP 2
    // draw court
    background(0);
    noFill();
    stroke(255);
    strokeWeight(3);
    line(400, 0, 400, 500);
    rect(400, 250, 800, 500);

    //STEP 3
    // draw players
    noStroke(); // turn off the outline
    fill(255); // player will be white
    //rect(xcoord, ycoord, width, height)
    rect(p1X, p1Y, pWidth, pHeight)
    rect(p2X, p2Y, pWidth, pHeight)

    //STEP 5 
    //draw ball
    noStroke();
    fill(255);
    //square(x, y, size);
    //STEP 7
    square(ballX, ballY, ballSize);

    //STEP 8
    //scoreboard
    noStroke();
    fill(255);
    textSize (30);
    // text(string, startX, startY); x and y are bottom left
    //STEP 10
    text(p1Score, 350, 50);
    text(p2Score, 450, 50);
}

//STEP 11
// take 5 minutes to talk with your neighbor about what functionality needs to be added to the program