//switch to dark mode from light mode when mode switch button double clicked
function switchToDark() {
    document.getElementById("theme").href = "night.css";
    document.getElementById("nightday").ondblclick = switchToLight;
}

//switch to light mode from darkmode when mode switch button double clicked
function switchToLight() {
    // Switch the stylesheet to the day ver
    document.getElementById("theme").href = "day.css";
    // Switch the function to the darkmode function so we can get back to dark mode
    document.getElementById("nightday").ondblclick = switchToDark;
}

//make aboutme window visible
function aboutMe(){
    document.getElementById("aboutme_window").style.display = "block";
}

//make gallery window visible
function gallery(){
    document.getElementById("gallery_window").style.display = "block";
}

//close aboutme window
function close_aboutme(){
    document.getElementById("aboutme_window").style.display = "none"
}

//close gallery window
function close_gallery(){
    document.getElementById("gallery_window").style.display = "none"
}

//gallery handling
//set list of gallery images
const galleryimages = [
    "assets/chappell.jpeg",
    "assets/fortnite.png",
    "assets/severance.jpeg",
    "assets/botw.jpg",
    "assets/lis.jpg"
];
//set list of gallery descriptions
const gallerydescriptions = ["my queen chappell i love her come to dublin please",
    "the time i won a game of fortnite on the ucc lab computers (proudest of my life)",
    "severance best tv show oat fight me solos succession", "my fav game i got all the koroks",
    "i love life is strange sm. the lesbians of all time"];
//current selected image - default is 0
var currentimage = 0;
//increase selected image by 1
function galleryRight() {
    currentimage += 1
    //prevent overflow
    if (currentimage > 4) {
        currentimage = 0;
    };
    document.getElementById("gallery_current").src=galleryimages[currentimage];
    document.getElementById("gallery_desc").innerHTML=gallerydescriptions[currentimage];
}

//decrease selected image by 1
function galleryLeft() {
    currentimage -= 1
    //prevent underflow
    if (currentimage < 0) {
        currentimage = 4;
    };
    document.getElementById("gallery_current").src=galleryimages[currentimage];
    document.getElementById("gallery_desc").innerHTML=gallerydescriptions[currentimage];
}

//open + close contact window
function contact() {
    document.getElementById("contact_window").style.display = "block";
}

function close_contact() {
    document.getElementById("contact_window").style.display = "none";
}

//open + close readme window
function readme() {
    document.getElementById("readme_window").style.display = "block";
}

function close_readme(){
    document.getElementById("readme_window").style.display = "none";
}