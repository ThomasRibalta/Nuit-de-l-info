function openHamb(){
    var element = document.getElementById('hamburger');
    element.classList.toggle('open');

    var menu = document.getElementById('menu');
    menu.classList.toggle('active');
};