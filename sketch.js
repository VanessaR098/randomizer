//variable set with an array of objects --> different desserts set with a name and taste
let desserts = [{
  name: "cheesecake",
  taste: "tart and sweet"
}, {
  name: "brownies",
  taste: "chocolatey"
}, {
  name: "flan",
  taste: "creamy"
}, {
  name: "croissant",
  taste: "buttery"
}, {
  name: "apple pie",
  taste: "fresh and syrupy"
}];


//let randomIndex;
//declared variable animating and set to false
let animating = false;
//declare variable pics and set an empty array to later be store with dessert images
let pics = [];
//declare ima
let imageCounter = 0;
//let ifImage = false;
//declare variable for button that will be pressed
let button;
//declare variable for canvas
let cnv;


//let counter = 0;

//function to preload dessert images that are in array
function preload() {
  //runs through array of dessert images...sets variable i to 0 before code is executed..starts at 0 and if i is less than 4, it increments by 1 to the next image in the array
  for (let i = 0; i <= 4; i++) {
    //loadImage() function ensrues image is beady for rendering before doing anything with it.. i increases/iterates as does the file names, thus allowing the code to increment through image and story it in the pics array
    pics[i] = loadImage(`Images/dessert_${i}.jpg`);
  }
}

//function that runs when the program starts and sets the initial environment
function setup() {
  //assign canvas variable with canvas to manipulate it as a p5.element
  cnv = createCanvas(windowWidth / 2.5, windowHeight - 200);
  //attachs cavnas element to the parent specified
  cnv.parent("#canvasDiv");
  //sets background of the canvas to a shade of yellow
  background(250, 200, 100);
  //sets the text's size to 32 pixels
  textSize(32);
  //interrets the second and third paramentes and the image's center point
  imageMode(CENTER);
  //specifies the number of frames to be displayed every second...set for 5 times a second
  frameRate(5);

  //displays text placed at the specified x and y position
  text("Got a sweet tooth?", width / 3.3, height / 2);

  //button = createButton("what are you craving??");
  //assigns button variable with an element with the given ID name...select() searches page to specificy the given ID and returns it as a p5.element
  button = select('#randButton');
  //creates button as a p5.element and assigns it mousePressed() function.... mousePressed() is called once every time a mouse button is pressed over the element and when mouse is pressed, the randomizer in the buttonPressed call back function is called (aka randomzer starts)
  button.mousePressed(buttonPressed);
  //attaches button element to the parent specified
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

//function that continuously executes its lines of code
function draw() {
  //checks if animating is true..
  if (animating == true) {
    //if animating is true, clear background
    clear();
    //sequences through the dessert images of the pics array and draws it the middle of the canvas
    image(pics[imageCounter], width / 2, height / 2);

    //manipulates imageCounter variable to increment through the array 
    if (imageCounter < pics.length - 1) {
      //imageCounter increments if less than one minus the pic array's length
      imageCounter++;
    } else {
      //else imageCounter is set back to 0
      imageCounter = 0;
    }
    //fill(random(255), random(255), random(255));
    //ellipse(random(width), random(height), random(50, 200));

  }
}

//function that both randomizes the images and displays the image chosen after randomized
function randomizer() {
  //sets animating variable to false
  animating = false;
  // this displays random name and splices it out of array
  if (desserts[0]) {
    //randomizes background with random light greys
    background(random(200, 255));

    //sequences through the dessert images of the pics array and draws it the middle of the canvas
    image(pics[imageCounter], width / 2, height / 2);
    //maniuplates imageCounter variable to increment through the array
    if (imageCounter < pics.length - 1) {
      //imageCounter increments if less than one minus the pic array's length
      imageCounter++;
    } else {
      //else imageCounter is set back to 0
      imageCounter = 0;
    }

    //code that ensure the images are assigned to the matching text..
    if (imageCounter == 0) { //flan
      text(`${desserts[2].name}s taste
      ${desserts[2].taste}`, 10, 50);
    } else if (imageCounter == 1) { //apple pie
      text(`${desserts[4].name}s taste
        ${desserts[4].taste}`, 10, 50);
    } else if (imageCounter == 2) { //brownies
      text(`${desserts[1].name} taste
          ${desserts[1].taste}`, 220, 80);
    } else if (imageCounter == 3) { //cheescake
      text(`${desserts[0].name}s taste
            ${desserts[0].taste}`, 10, 50);
    } else { //quascant
      text(`${desserts[3].name}s taste
              ${desserts[3].taste}`, 10, 50);
    }

    // randomIndex = int(random(desserts.length));
    // text(`${desserts[randomIndex].name}'s taste
    // ${desserts[randomIndex].taste}`, 10, 50); //Template literals
    /// NOTE: Template literals --> ex. `string text $(expression) string text`
    //text(desserts[randomIndex].name + "'s taste " + desserts[randomIndex].taste, 50, 50);
    //desserts.splice(randomIndex, 1);
  } else {
    //randomizes background with random light greys
    background(random(200, 255));
    //after all images are displayed.. display text "nothing left" at specified  x and y position
    text("nothing left!", 50, 50);
  }


}

//function that executes what happens when the button "what are you craving" is pressed... aka begins the randomzing of the dessert images
function buttonPressed() {
  //when button is pressed, animating variable is set to true
  animating = true;
  //a method that calls a function (aka function randomizer) after a specificed number of milliseconds (aka 2000 milliseconds)
  setTimeout(randomizer, 2000);



}
