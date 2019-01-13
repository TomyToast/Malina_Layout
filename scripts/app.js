require("../sass/main/style.scss");

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    const hamburger  = document.getElementById('hamburger_menu');
    const list = document.getElementsByClassName('header_menu_list');
    const listNode = list[0].style.display = 'none';
    let bool = true;

    hamburger.addEventListener("click", () => {
            list[0].style.display = "block";
    });
  });



