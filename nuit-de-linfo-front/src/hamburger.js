function openHamb(){
    var element = document.getElementById('hamburger');
    element.classList.toggle('open');

    //var menu = document.getElementById('menu');
    //menu.classList.toggle('active');
    
    var nav = document.getElementById("mynav");
    if (nav.style.width === "250px") {
        nav.style.width = "0";
    } else {
        nav.style.width = "250px";
    }
      
};

