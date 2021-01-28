const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



var particles=[];

var plinkos=[];

var divisions=[];
var divisionHeight=300

function setup() {

  var canvas = createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

ground=new Ground(600,780,1200,20)

for(var k = 0; k <=innerWidth; k = k + 80) {
  divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
}
  for(var j = 40; j <=innerWidth; j=j+50){
    plinkos.push(new Plinko(j,75))
  }

  for (var j = 15; j <=width-10 ; j=j+50){
    plinkos.push(new Plinko(j,175))
  }

 
}

function draw() {
  background(0);
  Engine.update(engine);

  ground.display()


  for (var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }
  
  drawSprites();
}