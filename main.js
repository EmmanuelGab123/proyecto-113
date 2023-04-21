function preload() {

}

function setup() {
  //crear canvas con tamaño 640, 480
  canvas = createCanvas(640,480);
  canvas.position(150, 150);
  video = createCapture(VIDEO);
  video.hide();

}

function draw() {
  image(video, 230, 150, 220, 200);

  fill(255, 0, 0);
  stroke(255, 0, 0);
  circle(50, 50, 80);

  fill(255, 0, 0);
  stroke(255, 0, 0);
  circle(550, 40, 80);

  fill(255, 0, 0);
  stroke(255, 0, 0);
  circle(90, 400, 80);

  fill(255, 0, 0);
  stroke(255, 0, 0);
  circle(550, 400, 80);
  //dibujar el resto de los circulos 
  

  fill(0, 128, 0);
  stroke(0, 128, 0);
  rect(90, 40, 460, 20);

  fill(0, 128, 0);
  stroke(0, 128, 0);
  rect(550, 40, 20, 380);

  fill(0, 128, 0);
  stroke(0, 128, 0);
  rect(90, 400, 460, 20);

  fill(0, 128, 0);
  stroke(0, 128, 0);
  rect(70, 40, 20, 380);
  //dibujar el resto de los rectangulos
  
}

function take_snapshot(){  
  //crear la funcion save para guardar la imagen  
  save('imagen.png')
}
