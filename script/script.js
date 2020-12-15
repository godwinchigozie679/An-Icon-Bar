//DECLARE VARIABLES
const home = document.getElementById('home');
const search = document.getElementById('search');
const message = document.getElementById('message');
const globe = document.getElementById('globe');
const deleteBar = document.getElementById('deleteBar');
const iconBar = document.getElementById('iconBar');

//DISPLAY CONTENT

function displayContent(){

    iconBar.classList.add('iconbar');

    //Home
    home.innerHTML = '<i class="fas fa-home"></i>';
    home.classList.add('icon-stlye');
    home.classList.add('icon-activated');
   


    //SEARCH
    search.innerHTML = '<i class="fas fa-search"></i>';
    search.classList.add('icon-stlye');
    search.classList.add('icon-stlyed');


    //MESSAGE
    message.innerHTML = '<i class="fas fa-envelope"></i>';
    message.classList.add('icon-stlye');
    message.classList.add('icon-stlyed');


    //GLOBE
    globe.innerHTML = '<i class="fas fa-globe"></i>';
    globe.classList.add('icon-stlye');
    globe.classList.add('icon-stlyed');


    //TRASH
    deleteBar.innerHTML = '<i class="fas fa-trash"></i>';
    deleteBar.classList.add('icon-stlye');
    deleteBar.classList.add('icon-stlyed');

}

displayContent();