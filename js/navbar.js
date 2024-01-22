function CloseMenuOnClickMain() {
  var element = document.getElementById("main_topnav");

  if (element.className !== "topnav") {
    element.className = "topnav"; 
  }

  var div = document.getElementById("id_open_close_btn");
  div.classList.toggle("change");
}

function CloseMenu() {
  var element = document.getElementById("main_topnav");
  element.className = "topnav";

  var div = document.getElementById("id_open_close_btn");
  div.classList.toggle("change");
}

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

