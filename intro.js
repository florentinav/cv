function getWelcomeMsg() {
  return "Welcome to my site!";
}

function getColor() {
  var date = new Date();
  console.log(date.getMinutes());
  if (date.getMinutes() > 9) {
    return "green";
  }
  return "red";
}

var welcome = getWelcomeMsg();
console.info(welcome);

var summaryElement = document.getElementById("summary");
console.info("summaryElement", summaryElement);

var color = getColor();
summaryElement.style.color = color;

function hidePage(page) {
  document.getElementById(page).style.display = "none";
}
function showPage(page) {
  document.getElementById(page).style.display = "block";
}

function initMenu() {
  var links = document.querySelectorAll("#top-menu-bar a");
  console.info(links);
  for (var i = 0; i < links.length; i++) {
    links[i].onclick = clickOnMenuItem;
  }
}

function clickOnMenuItem() {
  hideAllPages();
  var pageId = this.getAttribute("data-page");
  showPage(pageId);
}

function hideAllPages() {
  var pages = document.querySelectorAll(".page");
  for (var i = 0; i < pages.length; i++) {
    pages[i].style.display = "none";
  }
}

initMenu();

function showSkills() {
    var skills = ['html', 'css', 'js', 'funny'];
    console.warn('showSkills', skills);

    var htmlSkills = skills.map(function(skill, index) {
        return '<li>' + skill.toLocaleUpperCase() + '</li>' });

    var ul = document.querySelector('#skills-page ul');
    ul.innerHTML = htmlSkills.join(['']);
}


showSkills();
