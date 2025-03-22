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
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.rollingstone.com%2Fwp-content%2Fuploads%2F2023%2F09%2FRyanClemens-ChappellRoan-BeautyQueen-4-2.jpeg%3Fw%3D1581%26h%3D1054%26crop%3D1&f=1&nofb=1&ipt=11ea470de54d381fbbc9aeb2526695bdb4c8110bf42a8a0915e0772b5d8104db&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimgix.ranker.com%2Flist_img_v2%2F9090%2F3189090%2Foriginal%2F3189090&f=1&nofb=1&ipt=325aea64031984ad55f93f494634f6e8a07da9748ddbd718c4ccb6aeaa4e8dad&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp6297184.jpg&f=1&nofb=1&ipt=120d93473e5a22f7496f92150913cb7985eda7b94268dd7d31764742cd2d7a53&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F1237873.jpg&f=1&nofb=1&ipt=9929c0edfc2e8b59ea0c45822ea4f5fa503fae0590f903b5d9c7c25966451f3b&ipo=images"
];
//set list of gallery descriptions
const gallerydescriptions = ["my queen chappell i love her come to dublin please",
    "severance best tv show oat fight me solos succession", "my fav game i got all the koroks",
    "i love life is strange sm. the lesbians of all time"];
//current selected image - default is 0
var currentimage = 0;
//increase selected image by 1
function galleryRight() {
    currentimage += 1
    //prevent overflow
    if (currentimage > 3) {
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
        currentimage = 3;
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