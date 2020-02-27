let desserts = [{
  name: "cheesecake",
  color: "white"
}, {
  name: "brownies",
  color: "brown"
}, {
  name: "flan",
  color: "tan"
}, {
  name: "croissant",
  color: "yellow"
}, {
  name: "apple pie",
  color: "golden"
}];

let randomIndex;
let counter = 0;


function setup() {
  createCanvas(600, 600);
  background(250, 200, 100);
  textSize(32);

  text("click to randomize!", 50, 50);

  setTimeout(changeBackground, 1000);
  //no () after changeBackground function bc it's expecting a function

}

function changeBackground() {
  if (counter <= 5) {
    counter++;

    background(random(255), random(255), random(255));
    setTimeout(changeBackground, 1000);
  } else {

  }
}

function draw() {

  // background(95,202,154);
  //strokeWeight(0);
  //fill(138, 230, 121, 150);
  //ellipse(mouseX, mouseY, 100, 100);


  //x,y,width,height
  ////bodies



  //strokeWeight(0)
  //fill(255, 255, 255, 200);
  //ellipse(300, 600, 550, 600);

  //strokeWeight(2);
  //fill(135, 76, 17);
  //rect(300, 350, 100, 250, 50, 50, 0, 0); //right
  //rect(170, 370, 100, 300, 50, 50, 0, 0); //left
  //rect(250, 400, 100, 300, 50, 50, 0, 0); //middle



  ////face
  //fill(90, 90, 90);
  //rect(335, 370, 10, 25, 25, 25, 25, 25);
  //rect(370, 370, 10, 25, 25, 25, 25, 25);
  //rect(270, 430, 10, 25, 25, 25, 25, 25);
  //rect(300, 430, 10, 25, 25, 25, 25, 25);
  //rect(200, 400, 10, 25, 25, 25, 25, 25);
  //rect(230, 400, 10, 25, 25, 25, 25, 25);

  //fill(255);
  //rect(335, 370, 9, 13, 25, 25, 25, 25);
  //rect(370, 370, 9, 13, 25, 25, 25, 25);
  //rect(270, 430, 9, 13, 25, 25, 25, 25);
  //rect(300, 430, 9, 13, 25, 25, 25, 25);
  //rect(200, 400, 9, 13, 25, 25, 25, 25);
  //rect(230, 400, 9, 13, 25, 25, 25, 25);

  //fill(255, 184, 251);
  //rect(340, 400, 35, 20, 30, 30, 30, 30);
  //rect(270, 460, 40, 20, 25, 25, 25, 25);
  //rect(200, 430, 40, 20, 25, 25, 25, 25);

  //strokeWeight(0);
  //fill(255, 255, 255, 190);
  //rect(345, 402, 20, 8, 30, 30, 30, 30);
  //rect(277, 462, 20, 8, 30, 30, 30, 30);
  //rect(205, 432, 20, 8, 30, 30, 30, 30);

  ////rocks
  //strokeWeight(2)
  //fill(100, 100, 100);
  //ellipse(160, 600, 50, 50);
  //ellipse(185, 600, 25, 25);
  //ellipse(220, 600, 30, 30);
  //ellipse(240, 600, 70, 70);
  //ellipse(300, 600, 50, 50);
  //ellipse(360, 600, 80, 50);

  //fill(90, 90, 90);
  //ellipse(420, 600, 60, 60);
  //ellipse(207, 600, 40, 40);

  //fill(125, 125, 125);
  //ellipse(177, 600, 30, 30);
  //ellipse(447, 600, 30, 30);
  //ellipse(277, 600, 50, 50);
}



function mousePressed() {
  //background(250, 200, 100);

  // this displays random name and splices it out of array
  if (desserts[0]) {
    background(random(200, 255));
    randomIndex = int(random(desserts.length));
    text(desserts[randomIndex].name, 50, 50);
    desserts.splice(randomIndex, 1);
  } else {
    background(random(200, 255));
    text("nothing left!", 50, 50);

  }
}
