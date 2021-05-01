rover_x = 10;
rover_y = 10;
rover_width = 100;
rover_height = 90;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

function add(){
   background_img = new Image();
   background_img.onload = backgroundImgUpload;
   background_img.src = "mars.jpg"; 

   rover_img = new Image();
   rover_img.onload = roverImgUpload;
   rover_img.src = "rover.png";
}

function roverImgUpload(){
    ctx.drawImage(rover_img, rover_x, rover_y, rover_width, rover_height);

}

function backgroundImgUpload(){
    ctx.drawImage(background_img, 0, 0, canvas.width, canvas.height);
}
window.addEventListener("keydown", myKeyDown);



function myKeyDown(e){
    kp = e.keyCode;
    console.log(kp);
    if (kp == '38'){
        up();
    }
    if (kp == '39'){
        right();
    }
    if (kp == '40'){
        down();
    }
    if (kp == '37'){
        left();
    }
}

function up(){
    if (rover_y >= 0){
        rover_y -= 10;
        backgroundImgUpload();
        roverImgUpload();
    }

}

function down(){
    if(rover_y <= 510){
        rover_y += 10;
        backgroundImgUpload();
        roverImgUpload();
    }
}

function left(){
    if(rover_x >= 0){
        rover_x -= 10;
        backgroundImgUpload();
        roverImgUpload();
    }
}

function right(){
    if(rover_x <= 700){
        rover_x += 10;
        backgroundImgUpload();
        roverImgUpload();
    }
}
