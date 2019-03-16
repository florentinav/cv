console.info("my first js file")

var name = "Vasilovschi F";
var employed = true;

console.warn("employed");
console.warn(employed);

console.info('Name:')
console.info(name)

name = "Florentina";

console.info('Name:')
console.info(name)

function getWelcomeMsg(){
    return "Welcome to my site!";
    
}

function getColor() {
    var date = new Date();
    console.log(date.getMinutes());
    if (date.getMinutes() > 9) {
        return "green"
    }
    return "red";
}


var welcome = getWelcomeMsg();
console.info(welcome);

var summaryElement = document.getElementById("summary");
console.info("summaryElement", summaryElement);

var color = getColor();
summaryElement.style.color = color;


// first example
function hideHomePage () {
    document.getElementById('home-page').style.display = 'none';
}
function showSkillsPage () {
    document.getElementById ('skills-page').style.display = 'block';
}
function clickOnSkills () {
    //hideHomePage ();
    //showSkillsPage ();
    hidePage('home-page');
    hidePage('languages-page');
    hidePage('aboutme-page');
    showPage('skills-page');
}
// first example - end

function hidePage(page) {
    document.getElementById(page).style.display = 'none';
}
function showPage(page) {
    document.getElementById(page).style.display = 'block';
}