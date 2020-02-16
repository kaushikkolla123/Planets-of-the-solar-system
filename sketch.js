  var sun;
  var mercury;
  var venus;
  var earth;
  var mars;
  var jupiter;
  var saturn;
  var uranus;
  var neptune;

  var sumImg;
  var meImg;
  var viperImg;
  var earthenImg;
  var mortalImg;
  var activaImg;
  var sedonaImg;
  var greekImg;
  var numbImg;

  var angle =0;
  var anglespeed = 0.5;
  var sunRadius;

  function Preload{
  	sumImg = loadImage("u.png");
  	meImg = loadImage("me.png")
  	viperImg = loadImage("ves.png");
  	earthenImg = loadImage("ear.png");
  	mortalImg = loadImage("mo.png");
  	activaImg =loadImage("juventus.png");
   	sedonaImg = loadImage("sedona.png");
   	greekImg = loadImage("nun.png");
   	numbImg = loadImage("episode.png");
  } 

  function setup() {
    createCanvas(1200,400);
   	sun = createSprite(0,0);
   	sun.addImage("sun",sumImg);
   	sun.scale = 0.5;
   	sun.setCollider("circle",-85,-60,140);
   	sun.debug = true; 

   	 mercury =createSprite(80,50);
   	 mercury.addImage("mercury",meImg);
   	 mercury.scale =0.35;
   	 mercury.setCollider("circle",0,0,300);
   	 mercury.debug =true;

   	 		venus =createSprite(210,60);
   	 			venus.addImage("venus",viperImg);
   	 			venus.scale = 0.29;

   	 				earth = createSprite(150,-20);
   	 				earth.addImage("earth",earthenImg);
   	 				earth.scale =0.31;

        mars = createSprite(30,220);
        mars.addImage("mars",mortalImg);
        mars.scale =0.4;

        	jupiter = createSprite(-180,220);
        	jupiter.addImage("jupiter",activaImg);
        	jupiter.scale =1.5;

        		saturn = createSprite(340,-30);
        		saturn.addImage("saturn",sedona);
        		saturn.scale = 1.2;

        			uranus = createSprite(220,350);
        			uranus.addImage("uranus",greekImg);
        			uranus.scale =0.8;

   		neptune = createSprite(-340,-320);
   		neptune.addImage("neptune",numbImg);
   		neptune.scale =0.7;

  }
  function draw(){
    background(0);
    angleMode(DEGREES);
    translate(width/2,height,2);
    rotate(angle);
     
     if(sun.collide(mercury)) {
       mercury.destroy();	
     }

    angle =angle + anglespeed;
    if(frameCount % 2 === 0){
    	sun.scale =sun.scale +0.03
    }
    drawSprites();
}