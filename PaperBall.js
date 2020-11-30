class paper{

constructor(x,y,r){

var Ball_option={
    isStatic:false,
    restitution:0.3,
    density:1.2,
    friction:0.5
    

}
this.x=x;
this.y=y;
this.r=r;
this.body=Bodies.circle(this.x,this.y,this.r/2,Ball_option);

World.add(world,this.body);


}
display(){
var pos=this.body.position;
//var angle = this.body.angle;
push();
translate(pos.x,pos.y);
ellipseMode(RADIUS);
//rotate(angle);
fill(255,0,255);
ellipse(this.x,this.y,this.r);
pop();
}

}