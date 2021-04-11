var canvas=new fabric.Canvas('myCanvas');
var player_y=10;
var player_x=10;
var player_object="";

function player_update()
 {
    fabric.Image.fromURL("player.png", function(Img) { 
    player_object = Img;
    player_object.scaleToWidth(150); 
    player_object.scaleToHeight(140);
    player_object.set({ top:player_y, left:player_x });
    canvas.add(player_object); 
    });
 }

function new_image(get_image){
   fabric.Image.fromURL(get_image,function(Img){
      block_image_object=Img;
      block_image_object.scaleToWidth(block_image_width);
      block_image_object.scaleToHeight(block_image_height);
      block_image_object.set({
         top:player_y,
         left:player_x
      });
      canvas.add(block_image_object);
   });
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
   keypressed=e.keyCode;
   console.log(keypressed);

  

}
function up(){

   if(player_y >=0){

      player_y=player_y-block_image_height;
      console.log("block image height="+block_image_height);
      console.log("when up aroow is pressed X="+player_x+"Y="+player_y);
      canvas.remove(player_object);
      player_update();
   }
}

function down(){

   if(player_y <=500){

      player_y=player_y+block_image_height;
      console.log("block image height="+block_image_height);
      console.log("when down aroow is pressed X="+player_x+"Y="+player_y);
      canvas.remove(player_object);
      player_update();
   }
}

function left(){

   if(player_x >0){

      player_x=player_x-block_image_height;
      console.log("block image height="+block_image_height);
      console.log("when left aroow is pressed X="+player_x+"Y="+player_y);
      canvas.remove(player_object);
      player_update();
   }
}

function right(){

   if(player_x <=850){

      player_x=player_x+block_image_height;
      console.log("block image height="+block_image_height);
      console.log("when right aroow is pressed X="+player_x+"Y="+player_y);
      canvas.remove(player_object);
      player_update();
   }
}

