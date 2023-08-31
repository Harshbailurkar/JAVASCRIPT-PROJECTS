window.addEventListener('load',function() {

   const canvas = document.getElementById('canvas1');
    const ctx= canvas.getContext('2d');// getContext is built in method, with context  type argument '2d'. this will initiliaze a built in object that holds all canvas properties and canvas method
    canvas.width=1280;
    canvas.height=720;
    ctx.fillStyle='white';
    ctx.lineWidth=3;
    ctx.strokeStyle='white';

   class Player{

    constructor(game){
           this.game=game;
           this.collisionx=this.game.width*0.5;
           this.collisiony=this.game.height*0.5;
           this.collosionRadius = 30;
    }

    draw(context){

        context.beginPath();// property of canvas to draw 
        context.arc(this.collisionx,this.collisiony,this.collosionRadius,0,Math.PI*2);// built in arc method accept atleat 5 agruments as x,y cordinates,radius,start angle in radian, end angle(Math.PI*2 is full circle)
        context.save();// save() method creates a snapshot of the current canvas state, including fillStyle,lineWidth,opacity(globalAlpha)as well as transformation and scaling// to limit certain canvas settings only to specific draw calls we can weap that drawing code betn save() and restore() built in canvas method.these methods allow us to apply specific drawing settings only to selescted shapes, without affecting the rest of our canvas drawings
        context.globalAlpha=0.5;
        context.restore();
        context.fill();
        context.stroke(); // for  outline to  fill use fill instade of stroke
        context.beginPath();
        context.moveTo(this.collisionX,this.collisionY);
        context.lineTo(this.game.mouse.x, this.game.mouse.y);
        context.stroke();
            
    }
    update(){
        this.speedX=1;
        this.collisionX= this.game.mouse.x;
        this.collisionY=this.game.mouse.y;
    }
   }

   class Game{

    constructor(canvas){

        this.canvas=canvas;
        this.width=this.canvas.width;
        this.height=this.canvas.height;
        this.player = new Player(this);
        this.mouse={
            x: this.width * 0.5,
            y: this.height * 0.5,
            pressed:false
        }
        //mouse control

        canvas.addEventListener('mousedown',(e) =>{
           this.mouse.x = e.offsetX;
           this.mouse.y = e.offsetY;
           this.mouse.pressed=true;
        })
        // arrow functions automatically inherit the reference to 'this' keyward from the parent scope.
        canvas.addEventListener('mouseup',(e) =>{
            this.mouse.x = e.offsetX;
            this.mouse.y = e.offsetY;
            this.mouse.pressed=false;
         })
         canvas.addEventListener('mousemove',(e) =>{
            this.mouse.x = e.offsetX;
            this.mouse.y = e.offsetY;
            
         })
    }
   
   
   render(context){
     
    this.player.draw(context);
    this.player.update();
   }
}
   const game= new Game(canvas);
  game.render(ctx);
   function animate(){
  ctx.clearRect(0,0, canvas.width, canvas.height);   
game.render(ctx);
requestAnimationFrame(animate);
   }
   animate();
    
});