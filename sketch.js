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
let animating = false;
//let counter = 0;


function setup() {
  createCanvas(600, 600);
  background(250, 200, 100);
  textSize(32);

  text("click to randomize!", 50, 50);

  //setTimeout(changeBackground, 1000); //1000 milliseconds = 1 second
  //no () after changeBackground function bc it's expecting the name of a function

  //// NOTE: setInterval --> changes every second
  //// NOTE: nested setTimeout (aka same thing as setInterval, however, you can choose when to break out of it w counter var) --> setTimeout in setup and changeBackground function

}

//function changeBackground() {
//  if (counter <= 5) {
//    counter++;
//
//    background(random(255), random(255), random(255));
//    setTimeout(changeBackground, 1000);
//  } else {
//
//  }
//}

function draw() {
  if(animating == true){
    ellipse(random(width), random(height), random(50, 200));
  }
}


function randomizer() {
  animating = false;
  if (desserts[0]) {
    // this displays random name and splices it out of array
    background(random(200, 255));
    randomIndex = int(random(desserts.length));
    text(desserts[randomIndex].name, 50, 50);
    desserts.splice(randomIndex, 1);
  } else {
    background(random(200, 255));
    text("nothing left!", 50, 50);
  }


}


function mousePressed() {
  animating = true;
  setTimeout(randomizer, 2000);



}
