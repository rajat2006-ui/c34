const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box=[1,2]

function preload(){
    crane=loadImage("crane.png")
}
function setup(){
    createCanvas(1200,600);
    engine=Engine.create();
    world=engine.world;

    ground=new Ground(600,580,1200,40)

    bob=new Ball(400,400,30);

    chain=new SlingShot(bob.body,{x:390,y:100})

    box1=new Box(600,200,50,50);
    box2=new Box(600,250,50,50);
    box3=new Box(600,300,50,50);
    box4=new Box(600,350,50,50)
    box5=new Box(600,400,50,50)

    
}

function draw(){
    background(255);
    Engine.update(engine);

    console.log(box[0])

    imageMode(CENTER)
    image(crane,260,235,270,350)

    ground.display()
    bob.display()

    chain.display()
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()

    
}

function mouseDragged(){
    Matter.Body.setPosition(bob.body,{x:mouseX,y:mouseY})
}