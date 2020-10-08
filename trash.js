class Trash {
   
    constructor(x, y,radius) {
        var options = {
            'restitution':0.8,
            'friction':5.0,
            'density':1.0
        }

        this.body=Bodies.circle(x,y,radius);
        this.radius=radius;
        World.add(world, this.body);
      }

      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipse(0,0,this.radius,this.radius)
        pop();

       
      }

    
  
}
