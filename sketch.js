let value1 = "blue";
let value2 = "red";
let value3 = "green";
let value4 = "purple";
let value5 = "orange";
let value6 = "yellow";
let value7 = "teal"

function setup() {
  createCanvas(710, 400, WEBGL);

  describe(
    'a 3d example containing seven primitive objects, a plane, box, cylinder, cone, torus, sphere, and ellipsoid.'
  );
}

function draw() {
  background(250);

  fill(value1);

  noStroke();

  //normalMaterial();
  push();
  translate(-240, -100, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  //if ((keyIsPressed == true)  && (key == '1')) {
    //fill(250);
 // }


  plane(70);
  pop();

  //fill(value2);

  fill(value2);

  push();
  translate(0, -100, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  if (mouseIsPressed === true) {
    fill(250);
  }
  box(70, 70, 70);
  pop();

  fill(value3);

  push();
  translate(240, -100, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  if (mouseIsPressed === true) {
    fill(250);
  }
  cylinder(70, 70);
  pop();

  fill(value4);

  push();
  translate(-250, 100, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  if (mouseIsPressed === true) {
    fill(250);
  }
  cone(50, 70);
  pop();

  fill(value5);

  push();
  translate(-75, 100, 0);  
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  if (mouseIsPressed === true) {
    fill(250);
  }
  torus(50, 20);
  pop();

  fill(value6);

  push();
  translate(100, 100, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  if (mouseIsPressed === true) {
    fill(250);
  }
  sphere(50);
  pop();

  fill(value7);

  push();
  translate(275, 100, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  if (mouseIsPressed === true) {
    fill(250);
  }
  ellipsoid(30, 40, 40);
  pop();

}

function keyPressed() {
  if (key === '1') {
    value1 = 250;

  }

  if (key === '2') {
    value2 = 250;
    
  }

  if (key === '3') {
    value3 = 250;
    
  }
  if (key === '4') {
    value4 = 250;

  }

  if (key === '5') {
    value5 = 250;
    
  }

  if (key === '6') {
    value6 = 250;
    
  }

  if (key === '7') {
    value7 = 250;

  }

}
