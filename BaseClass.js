class BaseClass{
    constructor(x,y,width,height){
        var options={
            restitution:0.1
          }
          this.body=Bodies.rectangle(x,y,width,height,options);
          this.width=width;
          this.height=height;
          this.image=loadImage("sprites/base.png");
          World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        fill(255);
        stroke("green");
        strokeWeight(4);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}