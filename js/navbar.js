function ShowHideMenu() {
  var element = document.getElementById("main_topnav");

  if (element.className === "topnav") {
    element.className += " responsive";
  } else {
    element.className = "topnav";
  }
}

function OpenCloseBtn(div) {
  
  div.classList.toggle("change");

  ShowHideMenu();
}

