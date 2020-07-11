class paper{
constructor(x,y){
  this.Body = Bodies.circle(x, y,width,height);
this.Width = 20;
this.Height = 20;
 World.add(world,this.Body)
}
display(){
 var pos = this.Body.position;
circle(pos.x,pos.y,this.Width,this.Height);
}
}

