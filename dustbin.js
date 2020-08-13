class Dustbin {
    constructor(x,y,width,height){
       var options = {
           isStatic:true
       }
       this.body = Bodies.rectangle(650,650,150,20,options);
       this.width = width;
       this.height = height;
       this.image = loadImage("db.png")
       World.add(world,this.body);
       this.av = Bodies.rectangle(585,550,20,200,options)
       this.vv = 20
       this.ik = 200
       World.add(world,this.av)
       this.a = Bodies.rectangle(715,550,20,200,options);
       this.aa = this.vv
       this.aaa = this.ik
       World.add(world,this.a)
    }
    display(){
        var pos = this.body.position;
        var pot = this.av.position;
        var b = this.a.position 
        rectMode(CENTER);
        fill("red")
        image(this.image,pos.x,550,this.width,200) 
    }
}
