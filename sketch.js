var runnerimg, runner
var pathimg, path
var limite1
var limite2
function preload(){
  //imagens pré-carregadas
  runnerimg = loadAnimation("Runner-1.png","Runner-2.png" );
  pathimg = loadImage("path.png");

}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
  path = createSprite(200,200,100,100)
  path.addAnimation("path",pathimg);
  path.scale = 1
  runner = createSprite(200,300,50,50);
  runner.addAnimation("runner1",runnerimg);
  runner.scale = 0.1
  limite1 =createSprite(10,200,10,400)
  limite1.visible = false
  limite2 = createSprite(390,200,10,400)
  limite2.visible = false
}

function draw() {
  background(0)

  path.velocityY = 4

  if (path.y > 400) {
    path.y = 200
  }

  runner.x = mouseX

  runner.collide(limite1)
  runner.collide(limite2)

  drawSprites()
}
