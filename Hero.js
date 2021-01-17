class Hero {
    constructor(x,y,r,angle){
      var options={
          density: 1, 
          frictionAir: 0.005
  }
  this.x=x;
  this.y=y;
  this.r=r
 
  this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
  World.add(world, this.body);
  
   }
   display (){
    var angle = this.body.angle ;
    push()
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    ellipse(0,0,this.r,this.r);
    pop()
  }
  
  }