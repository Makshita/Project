class Wall{
    constructor(x,y,width,height){
 this.body=createSprite(x,y,width,height);
    }

 display(){
    rect(this.body.position.x,this.body.position.y,this.width,this.height);
 }

}