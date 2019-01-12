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

    //   var doToggle = function(e) {
    //     e.preventDefault();
    //     menuToggle.classList.toggle('header_menu_list');
    //     list.classList.toggle('header_menu_list');
    //     console.log('działam');
    //   }

    // menuToggle.addEventListener('click', function(e) { doToggle(e); });
    // list.addEventListener('click', function(e) { doToggle(e); });
  });



