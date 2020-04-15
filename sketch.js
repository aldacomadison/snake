var s;
var scl = 20;
var food;

let state = 'splash';

function setup() {
  createCanvas(600, 400);
  textAlign(CENTER);
  textSize(20);
  s = new Snake();
  frameRate(5);
  pickLocation();
}

function pickLocation() {
  var cols = floor(width / scl);
  var rows = floor(height / scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);

}

function draw() {
  switch (state) {
    case ('splash'):
      //execute splash keyCode
      splashScreen();
      break;
    case ('game'):
      game();
      break;
    case ('end'):
      break;
    default:
      break;
  }

}

function game() {
  background(137, 207, 240);
  //  s.death();
  s.update();
  s.show();
  if (s.eat(food)) {
    pickLocation();
  }
  fill(255, 0, 100);
  noStroke();
  triangle(food.x - 20, food.y, food.x, food.y + 28, food.x + 20, food.y);
  ellipse(food.x + 9.5, food.y, scl, scl);
  ellipse(food.x - 9.5, food.y, scl, scl);

}

function gameKeyPressed1() {
  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  } else if (keyCode === '') {
    splashScreen();
  }

}

function keyPressed() {
  switch (state) {
    case ('splash'):
      //execute splash keyCode
      splashScreenKeyPressed();
      break;
    case ('game'):
      gameKeyPressed1();
      break;
    case ('end'):
      break;
    default:
      break;
  }
}

function splashScreen() {
  background(0);
  fill(255);
  textSize(40);
  text('There Are No Mistakes', width / 2, height / 7);
  textSize(30);
  text('Controls', width/2,height/ 3);
  text("Arrow Keys To Move", width/2, height/2);
  text('Spacebar To Begin',width/2, height/1.5);
}

function splashScreenKeyPressed() {
  state = 'game';
}
