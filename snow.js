class Snow {
    constructor(x,y,width,height) {
        isStatic:false
        restitution:0.1;
        friction: 0.001
      var options = {
          

      }
    
      
      
    }

    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("brown");
        Matter.Body.setPosition(this.snow, {x:random(0,800), y:random(0,800)})

      }
    }