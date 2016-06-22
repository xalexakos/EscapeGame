clickCount = 1;
equip = 0;
box1 = 1;
box2 = 2;
box3 = 3;
box4 = 4;

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
   supportElemnt.style.display = "block";
   hideElement.style.display="none";
   supportElemnt.style.marginLeft = -support1Elemnt.offsetWidth+"px";
   setTimeout(function () {
		showElement.style.display = "block";
		supportElemnt.style.display = "none";
		supportElemnt.style.marginLeft = "0px";
		support1Elemnt.innerHTML= '';
		support2Elemnt.innerHTML= '';
   }, 2000);
};

function getScrewDriver (){

    var popUpElement, inventoryElement;

    popUpElement = document.getElementById("popup");
    popUpElement.childNodes[0].src = "images/screwdriver.png";
    popUpElement.style.display = 'block';
    inventoryElement = document.getElementById("screwdriver");
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
		inventoryElement.style.display = "block";
	}, 2000);
	document.getElementById("chair").style.cursor = "default";
};

function equipItem(imgElement, num){

	if (imgElement.src != undefined)
	{
		document.getElementById("equipImg").src = imgElement.src;
		document.getElementById("equipImg").style.display = 'block';
		equip = num;
	}
		
};

function unequip(){
	document.getElementById("equipImg").style.display = 'none';
	document.getElementById("equipImg").src = '';
	equip = 0;
};

function validateLogin(form) {

    var showPage;

    if(form.userID.value == "son" && form.password.value == "cem")
    {
        alert("Successful Login");
        form.style.display = "none";
    }
    else
    {
        alert("Error Password or Username");
    }
};


function nextText(){
	var nextParagraph, currentParagraph, currentID, nextID;
		
	currentID = "p" + clickCount
	
	clickCount ++;
	
	nextID =  "p" + clickCount
	
	currentParagraph = document.getElementById(currentID);
	nextParagraph = document.getElementById(nextID);
	currentParagraph.style.display = "none";
	nextParagraph.style.display = "inline";
	if (clickCount==4){
		document.getElementById("curtain").style.display="none";
		document.getElementById("nextArrow").style.display="none";
	}
	
};

function changeChairImage(img) {
	img.src = 'images/armchair_broken.png';
	img.onclick = function() {
		getScrewDriver(img.src, 2);
	}
};

function changeChestImage(img) {
	if (equip == 2){
		img.src = 'images/open_chest.png';
		unequip();
		img.onclick = function() {
			document.getElementById("chest").childNodes[0].onclick = null;
			changePage("page-1", "clue-1");
		};
	}
};

function changeVentilatorImage (img) {
	if (equip == 1){
		img.src = 'images/ventilator_opened.png';
		unequip();
		img.onclick = function() {
			document.getElementById("chair").childNodes[0].onclick = null;
			changePage("page-1", "clue-1");
		};
		
	};
	
}


function colorSelector(boxDiv){
	if (boxDiv.id == "colorBox1" ) {
		switch(box1) {
			case 1:
				box1=2;
				boxDiv.style.backgroundImage = "url('images/greenBox.png')"
				break;
			case 2:
				box1=3;
				boxDiv.style.backgroundImage = "url('images/redBox.png')"
				break;
			case 3:
				box1=4;
				boxDiv.style.backgroundImage = "url('images/blueBox.png')"
				break;
			case 4:
				box1=1;
				boxDiv.style.backgroundImage = "url('images/yellowBox.png')"
				break;
			default:
				break;
		}
		
	}else if(boxDiv.id == "colorBox2" ){
		switch(box2) {
			case 1:
				box2=2;
				boxDiv.style.backgroundImage = "url('images/greenBox.png')"
				break;
			case 2:
				box2=3;
				boxDiv.style.backgroundImage = "url('images/redBox.png')"
				break;
			case 3:
				box2=4;
				boxDiv.style.backgroundImage = "url('images/blueBox.png')"
				break;
			case 4:
				box2=1;
				boxDiv.style.backgroundImage = "url('images/yellowBox.png')"
				break;
			default:
				break;
		}
		
	
	}else if(boxDiv.id == "colorBox3" ){
		switch(box3) {
			case 1:
				box3=2;
				boxDiv.style.backgroundImage = "url('images/greenBox.png')"
				break;
			case 2:
				box3=3;
				boxDiv.style.backgroundImage = "url('images/redBox.png')"
				break;
			case 3:
				box3=4;
				boxDiv.style.backgroundImage = "url('images/blueBox.png')"
				break;
			case 4:
				box3=1;
				boxDiv.style.backgroundImage = "url('images/yellowBox.png')"
				break;
			default:
				break;
		}
		
	
	}else if(boxDiv.id == "colorBox4" ){
		switch(box4) {
			case 1:
				box4=2;
				boxDiv.style.backgroundImage = "url('images/greenBox.png')"
				break;
			case 2:
				box4=3;
				boxDiv.style.backgroundImage = "url('images/redBox.png')"
				break;
			case 3:
				box4=4;
				boxDiv.style.backgroundImage = "url('images/blueBox.png')"
				break;
			case 4:
				box4=1;
				boxDiv.style.backgroundImage = "url('images/yellowBox.png')"
				break;
			default:
				break;
		}
	}
};

function checkcolors(){
	var tableDiv;
	if (box1==3 && box2==4 && box3==4 && box4==2){
		document.getElementById("keyimage").style.display="block";
		document.getElementById("checkButton").onclick=null;
		document.getElementById("checkButton").style.cursor = "default";
	}
};

function takeKey(){

    var popUpElement, inventoryElement;

    popUpElement = document.getElementById("popup");
    popUpElement.childNodes[0].src = "images/key.png";
    popUpElement.style.display = 'block';
    inventoryElement = document.getElementById("key");
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
		inventoryElement.style.display = "block";
	}, 2000);
	document.getElementById("keyimage").style.display = "none";
		tableDiv = document.getElementById("table");
		document.getElementById("table").childNodes[0].src = "images/table_with_pc.png";
		tableDiv.childNodes[0].onclick = function() {
		changePage("page-1", "loginPage");
	};
};