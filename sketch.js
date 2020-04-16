var s;
var scl = 20;
var food;

let state = 'splash';
let death1;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  textSize(20);
  s = new Snake();
  frameRate(8);
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
  death1 = s.death();
  if(death1=='end'){
    state='end';
  }
  s.update();
  s.show();
  if (s.eat(food)) {
    pickLocation();
  }
  //HEART FOOD RED
  fill(255, 0, 100);
  noStroke();
  triangle(food.x - 20, food.y, food.x, food.y + 28, food.x + 20, food.y);
  ellipse(food.x + 9.5, food.y - 4, scl, scl);
  ellipse(food.x - 9.5, food.y - 4, scl, scl);

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
     death();
      break;
    default:
      break;
  }
}

function splashScreen() {
  background(0, 0, 128);
  fill(255);
  textSize(40);
  text('There Are No Mistakes', width / 2, height / 7);
  textSize(30);
  text('Controls', width / 2, height / 3);
  text("Arrow Keys To Move", width / 2, height / 2);
  text('Spacebar To Begin', width / 2, height / 1.5);
}

function splashScreenKeyPressed() {
  state = 'game';
}

function death(){
  background(0);
  fill(255);
  textSize(20);
  text('sometimes there are no winners or losers', width/2, height/2);
}
