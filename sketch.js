//all of the variables used on cover page of the quiz
var backgroundImg,coverImg, quiztitleImg, quiztitle, toppictureframeImg,toppictureframe, midpictureframeImg
var midpictureframe, bottompictureframe, bottompictureframeImg, toppictureframephotoImg,toppictureframephoto
var midpictureframephoto,midpictureframephotoImg, bottompictureframephoto, bottompictureframephotoImg
var level1Img,level1,level2,level2Img
var music_play, music_playImg
var music_stop, music_stopImg, bgmusic

function preload() {

    //loading all the images for the cover page of the quiz
    backgroundImg = loadImage("Quiz/Quiz/images/bg1-sheet0.png");
    quiztitleImg= loadImage("Quiz/Quiz/images/title-sheet0.png");
    toppictureframeImg=loadImage("Quiz/Quiz/images/topim-sheet0.png");
    midpictureframeImg=loadImage("Quiz/Quiz/images/midim-sheet0.png");
    bottompictureframeImg=loadImage("Quiz/Quiz/images/botim-sheet0.png");
    toppictureframephotoImg=loadImage("Quiz/Quiz/images/sprite3-sheet0.png");
    midpictureframephotoImg=loadImage("Quiz/Quiz/images/sprite4-sheet0.png");
    bottompictureframephotoImg=loadImage("Quiz/Quiz/images/sprite5-sheet0.png");
    level1Img=loadImage("Quiz/Quiz/images/easybutton-sheet0.png");
    level2Img=loadImage("Quiz/Quiz/images/hardbutton-sheet0.png");
    music_playImg=loadImage("Quiz/Quiz/images/mute-sheet1.png");
    music_stopImg=loadImage("Quiz/Quiz/images/mute-sheet0.png");
    bgmusic=loadSound("Quiz/Quiz/media/background music.ogg");




    

    
}

function setup(){
    //setting the canvas size
    var canvas = createCanvas(1400,620);

    bgmusic.play();

    //setting the background of the cover page
     coverImg=createSprite(690,300,800,800);
     coverImg.addImage("pujyashreephoto",backgroundImg);
     coverImg.scale=0.65;

    //adding in the quiz title
    quiztitle=createSprite(1050,100,450,100);
    quiztitle.addImage("title_of_the_quiz",quiztitleImg);
    quiztitle.scale=0.7;

    //setting up the picture frames

    //adding the top frame
    toppictureframe=createSprite(230,180,100,100);
    toppictureframe.addImage("toppictureframeforcoverpageofquiz",toppictureframeImg);
    toppictureframe.scale=0.5;

    //adding the photo in the top frame
    toppictureframephoto=createSprite(188,160,100,100);
    toppictureframephoto.addImage("picturetoputinthetopframe",toppictureframephotoImg);
    toppictureframephoto.scale=0.5

    //adding the middle frame
    midpictureframe=createSprite(290,300,100,100);
    midpictureframe.addImage("midpictreframeforcoverpageofquiz", midpictureframeImg);
    midpictureframe.scale=0.5;

    //adding the photo in the middle frame
    midpictureframephoto=createSprite(281,285,100,100);
   midpictureframephoto.addImage("picturetoputinthemiddleframe", midpictureframephotoImg);
    midpictureframephoto.scale=0.5;

    //adding the bottom picture frame
    bottompictureframe=createSprite(330,420,100,100);
    bottompictureframe.addImage("bottompictureframeforcoverpageofquiz", bottompictureframeImg);
    bottompictureframe.scale=0.5

    //adding the photo in the bottom frame
    bottompictureframephoto=createSprite(326,427,100,100);
    bottompictureframephoto.addImage("phototoputinthebottomframe",bottompictureframephotoImg);
    bottompictureframephoto.scale=0.5

    //creating the level 1 object
    level1=createSprite(1050,230,200,50);
    level1.addImage("level1display", level1Img);
    level1.scale=0.7

    //creating the level 2 object
    level2=createSprite(1050,330,200,50);
    level2.addImage("level2display", level2Img);
    level2.scale=0.7;

    //creating the sound object
    music_play=createSprite(1250,568,50,50);
    music_play.addImage("unmuted sound", music_playImg);
    //creating the muted object
    music_stop=createSprite(1245,564,50,50);
    music_stop.addImage("mutedsound", music_stopImg);
    music_stop.visible=false;


   
   



    

}

function draw(){
    background("black");
    
    if(mousePressedOver(music_play)){
        
    }

  
    
drawSprites();
//level 1 display 
textSize(30);
fill(0);
text("Level 1",1000,220,200,50);
//level 2 display
textSize(30)
fill(0)
text("Level 2",1000,320,200,50);

}

//function clicked(){
    //let d= dist(mouseX, mouseY, this.x, this.y);
    //if(d< this.r){
      //  console.log("CLICKED ON THE SOUND BUTTON!", d);
      //  bgmusic.stop();
      //  music_play.changeImage(music_stop);
       // music_stop.visible=true;
       // music_play.visible=false;
   // }
    
//}

//function mousePressed(){
  //  clicked();
//}
//else if(d<24)){
    //bgmusic.play();
   // music_stop.changeImage(music_play);



//}




