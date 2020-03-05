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
let pics = [];
let imageCounter = 0;
let ifImage = false;
let button;

//let counter = 0;

function preload() {
  for (let i = 0; i <= 4; i++) {
    pics[i] = loadImage(`Images/dessert_${i}.jpg`);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight - 100);
  background(250, 200, 100);
  textSize(32);
  imageMode(CENTER);
  frameRate(5);

  text("Got a sweet tooth?", 50, 50);

  button = createButton("what are you craving??");
  button.mousePressed(buttonPressed);
  button.class("randomizerButton");

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
    image(pics[imageCounter], width / 2, height / 2);

    if (imageCounter < pics.length - 1) {
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


    image(pics[imageCounter], width / 2, height / 2);
    if (imageCounter < pics.length - 1) {
      imageCounter++;
    }  else {
      imageCounter = 0;
    }

    if (imageCounter == 0) {
      text(`${desserts[2].name}'s texture is
      ${desserts[2].texture}`, 10, 50);
    } else if (imageCounter == 1) {
      text(`${desserts[4].name}'s texture is
        ${desserts[4].texture}`, 10, 50);
    } else if (imageCounter == 2) {
      text(`${desserts[1].name}' texture is
          ${desserts[1].texture}`, 280, 100);
    } else if (imageCounter == 3) {
      text(`${desserts[0].name}'s texture is
            ${desserts[0].texture}`, 10, 50);
    } else {
      text(`${desserts[3].name}'s texture is
              ${desserts[3].texture}`, 10, 50);
    }

    // randomIndex = int(random(desserts.length));
    // text(`${desserts[randomIndex].name}'s texture is
    // ${desserts[randomIndex].texture}`, 10, 50); //Template literals
    /// NOTE: Template literals --> ex. `string text $(expression) string text`
    //text(desserts[randomIndex].name + "'s texture is " + desserts[randomIndex].texture, 50, 50);
    //desserts.splice(randomIndex, 1);
  } else {
    background(random(200, 255));
    text("nothing left!", 50, 50);
  }


}


function buttonPressed() {
  animating = true;
  setTimeout(randomizer, 2000);



}
