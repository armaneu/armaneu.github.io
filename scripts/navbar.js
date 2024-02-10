
function CloseMenu() {
  var element = document.getElementById("topnavbar_id");

  if (element.className !== "topnavbar") {
    element.className = "topnavbar";

    var div = document.getElementById("openclosebuttondiv_id");
    div.classList.toggle("change");
  }
}

function ShowHideMenu() {
  var element = document.getElementById("topnavbar_id");

  if (element.className === "topnavbar") {
    element.className += " responsive";
  } else {
    element.className = "topnavbar";
  }
}

function OpenCloseBtn(div) {
  
  div.classList.toggle("change");

  ShowHideMenu();
}

