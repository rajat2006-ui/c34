class Ball {
  constructor(x, y, r){
    var option={density:1,}
    this.body=Bodies.circle(x,y,r,option)
    this.r=r
    World.add(world,this.body)
  }
  display(){
    var pos=this.body.position;

    ellipseMode(RADIUS);
    fill("black")
    ellipse(pos.x,pos.y,this.r,this.r)
  }
};
