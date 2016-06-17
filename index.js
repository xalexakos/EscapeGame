function ready() {
    document.getElementById("page-1").style.display = "block";
};

function changePage(hideId, showId) {
   var hideElement, showElement,supportElemnt,support1Elemnt,support2Elemnt;
   hideElement = document.getElementById(hideId);
   showElement = document.getElementById(showId);
   supportElemnt = document.getElementById("support");
   support1Elemnt = document.getElementById("support-1");
   support2Elemnt = document.getElementById("support-2");
   support1Elemnt.style.display="inline";
   support2Elemnt.style.display="inline";
   support1Elemnt.innerHTML= hideElement.innerHTML;
   support2Elemnt.innerHTML= showElement.innerHTML;
   support1Elemnt.className= hideElement.className;
   support2Elemnt.className= showElement.className;
   support1Elemnt.style.backgroundColor = hideElement.style.backgroundColor;
   support2Elemnt.style.backgroundColor = showElement.style.backgroundColor;
   supportElemnt.style.display = "block";
   hideElement.style.display="none";
   supportElemnt.style.marginLeft = -support1Elemnt.offsetWidth+"px";
   setTimeout(function () {
		showElement.style.display = "block";
		supportElemnt.style.display = "none";
		supportElemnt.style.marginLeft = "0px";
   }, 2000);
};

function showPopUp (src, num){
    var popUpElement;
    popUpElement = document.getElementById("popup");
    popUpElement.childNodes[0].src = src;
    popUpElement.style.display = 'block';
	setTimeout(function () {
		popUpElement.style.marginTop = "200px";
		popUpElement.style.marginLeft = "200px";
		popUpElement.style.width = "400px";
		popUpElement.style.height = "300px";
	}, 10);
    setTimeout(function () {
		popUpElement.style.display = 'none';
		popUpElement.style.width = "0px";
		popUpElement.style.height = "0px";
		popUpElement.style.marginLeft = "400px";
		popUpElement.style.marginTop = "350px";
	}, 2000);

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

function validateLogin(){

    var loginUsername, loginPassword, loginForm;

    loginUsername = document.getElementById("loginUsername").value;
    loginPassword = document.getElementById("loginPassword").value;
    loginForm = document.getElementById("loginForm");

    alert(loginUsername);

    if (loginUsername == "username" && loginPassword == "text"){
        loginForm.style.display = "none";
    }
    else{
        alert('Incorrect Credentials!');
    }

};