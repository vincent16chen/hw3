var ballY = 0;
var ballSpeed = 3;


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  ellipse(200, ballY, 50);


  ballY = ballY + ballSpeed
  
  if (ballY > height ){
  ballSpeed = -ballSpeed;
  }

  if (ballY < 0) {
    ballSpeed = -ballSpeed;
  }
}
