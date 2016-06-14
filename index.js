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

function showPopUp (src, num){

    var popUpElement;
    popUpElement = document.getElementById("popup");
    popUpElement.childNodes[0].src = src;
    popUpElement.style.display = 'block';
    setTimeout(function () {popUpElement.style.display = 'none';}, 2000);

};

function equipItem(imgElement){

	if (imgElement.src != undefined)
	{
		document.getElementById("equipImg").src = imgElement.src;
	}
		
};

function unequip(){
	document.getElementById("equipImg").src = '';
};