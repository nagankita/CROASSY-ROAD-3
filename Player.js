class Player{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.spt=createSprite(this.x,this.y,50,50)
        this.spt.shapeColor="orange"
player.spt.addAnimation("player",playerAnimation)
player.spt.scale=0.05
    }
movee(xdir,ydir){
    this.spt.x+=xdir*grid
    this.spt.y+=ydir*grid
}
}