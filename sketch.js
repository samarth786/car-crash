var car, wall;
var speed, weight;
function setup() {
  createCanvas(1600,400);


  speed = random(55, 90);
  weight = random(400, 1500);
  wall = createSprite(1500, 200, 60, 200);
  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  }

function draw() {
  wall.shapeColor = color(80, 80, 80);
  background(35,255,230);  

  if(wall.x - car.x<(wall.width+car.width)/2){
    var deformation = (0.5 *speed*speed*weight)/22500;
    car.velocityX = 0;
  }
  

  if(deformation<100){
    car.shapeColor =color(0, 255, 0);
   }

 if(deformation<180 && deformation>100){
   car.shapeColor =color(230, 230,  0);
   }

 if(deformation>180){
    car.shapeColor =color(255, 0, 0);
   }

  drawSprites();
}

