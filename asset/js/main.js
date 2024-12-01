const SlideNav = document.getElementById("SlideNav");
const mediaBtn = document.getElementById("mediaBtn");

mediaBtn.onclick = function () {

    "use strict";
    
    SlideNav.classList.toggle("show_list");
    mediaBtn.classList.toggle("active");
    
};