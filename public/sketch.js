let player, direction, status, r, speed;

function setup() {
  createCanvas(windowWidth,windowHeight);
  textAlign(CENTER);
  player = createVector(0, 0);
  direction = createVector(random(-1, 1), random(-1, 1));
  status = "alive";
  r = 40;
  speed = 0.5;
}

function draw() {
  background(220);
  translate(width/2, height/2);
  translate(-player.x, -player.y);
  //scale(2);

  fill("green");
  strokeWeight(0);
  ellipse(player.x, player.y, r);
  strokeWeight(4);

  border();

  if (crossedBorder() != true && status == "alive") {
    player.add(direction);
    movePlayer();
  }
  if(status == "dead"){
    playerDied();
  }
}

function border() {
  stroke("red");
  line(500, 500, 500, -500);
  line(500, -500, -500, -500);
  line(-500, -500, -500, 500);
  line(500, 500, -500, 500);
}

function crossedBorder() {
  if (player.x > 500 - r/2 || player.x < -500 + r/2 || player.y < -500 + r/2 || player.y > 500 - r/2) {
    status = "dead";
    return true;
  }
  return false;
}

function movePlayer() {
  if (keyIsPressed) {
    if (keyCode === UP_ARROW && direction.y > -3) {
      direction.add(0, -speed);
    }
    if (keyCode === DOWN_ARROW && direction.y < 3) {
      direction.add(0, speed);
    }
    if (keyCode === LEFT_ARROW && direction.x > -3) {
      direction.add(-speed, 0);
    }
    if (keyCode === RIGHT_ARROW && direction.x < 3) {
      direction.add(speed, 0);
    }
  }
}

function playerDied(){
  textSize(10);
  fill("blue");
  strokeWeight(0);
  text("You Died", player.x, player.y);
}