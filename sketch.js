let desserts = [{
  name: "cheesecake",
  texture: "delicate"
}, {
  name: "brownies",
  texture: "chewy"
}, {
  name: "flan",
  texture: "jiggly"
}, {
  name: "croissant",
  texture: "fluffy"
}, {
  name: "apple pie",
  texture: "crusty"
}];

let randomIndex;
let animating = false;
let sweets = [];
let imageCounter = 0;
//let counter = 0;

function preload() {
  for (let i = 0; i <= 4; i++) {
    sweets[i] = loadImage(`Images/dessert_${i}.JPG`);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(250, 200, 100);
  textSize(32);
  imageMode(CENTER);
  frameRate(5);

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

  if (animating == true) {
    clear();
    image(sweets[imageCounter], width / 2, height / 2);

    if (imageCounter < sweets.length - 1) {
      imageCounter++;
    } else {
      imageCounter = 0;
    }
    //fill(random(255), random(255), random(255));
    //ellipse(random(width), random(height), random(50, 200));

  }
}


function randomizer() {
  animating = false;
  if (desserts[0]) {
    // this displays random name and splices it out of array
    background(random(200, 255));

    randomIndex = int(random(desserts.length));
    text(`${desserts[randomIndex].name}'s texture is
    ${desserts[randomIndex].texture}`, 10, 50); //Template literals
    /// NOTE: Template literals --> ex. `string text $(expression) string text`
    //text(desserts[randomIndex].name + "'s texture is " + desserts[randomIndex].texture, 50, 50);
    image(sweets[imageCounter], width / 2, height / 2);
    if (imageCounter < sweets.length - 1) {
      imageCounter++;
    } else {
      imageCounter = 0;
    }






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
