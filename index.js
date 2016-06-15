function ready() {
    document.getElementById("page-1").style.display = "block";
};

function changePage(hideId, showId) {
   var hideElement, showElement;
   hideElement = document.getElementById(hideId);
   showElement = document.getElementById(showId);
   showElement.style.display = "block";
   hideElement.style.display= "none";
};

function showPopUp (src, hideId, num){

    var popUpElement;
    popUpElement = document.getElementById("popup");
    popUpElement.childNodes[0].src = src;
    popUpElement.style.display = 'block';
    setTimeout(function () {popUpElement.style.display = 'none';}, 2000);
    hideElement = document.getElementById(hideId);
    hideElement.style.display= "none";
}