var red, green, blue, redHex, greenHex, blueHex, boxColor, boxColorHex;
var hexString;

// function to change background color and output rgb and hex to html span
function randomColor() {

	// generate random rgb numbers
	red = Math.floor(Math.random() * 255);
	green = Math.floor(Math.random() * 255);
	blue = Math.floor(Math.random() * 255);

	// convert from rgb to hex and add leading zero if needed
	redHex = red.toString(16);
	var redLength = redHex.length;
	if (redLength == 1) {
		redHex = "0" + redHex;
	}
	greenHex = green.toString(16);
	var greenLength = greenHex.length;
	if (greenLength == 1) {
		greenHex = "0" + greenHex;
	}
	blueHex = blue.toString(16);
	var blueLength = blueHex.length;
	if (blueLength == 1) {
		blueHex = "0" + blueHex;
	}
	
	// create rgb and hex strings
	boxColorHex = '#' + redHex + greenHex + blueHex;
	boxColor = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
	headingMatch();
}

function hexToRgbConverter(hexString) {
	var str = hexString;
	redHex = str.substr(1,2);
	greenHex = str.substr(3,2);
	blueHex = str.substr(5,2);
	red = parseInt(redHex, 16);
	blue = parseInt(blueHex, 16);
	green = parseInt(greenHex, 16);
	boxColor = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
	headingMatch();
}

function createRandom1() {
	randomColor();
	//create variables for changing html
	var box = document.getElementById("box-1");
	//change background and displayed color codes
	box.style.backgroundColor = boxColor;
	document.getElementById('rgb1').innerHTML = boxColor;
	document.getElementById('hex1').innerHTML = boxColorHex;
}
function createRandom2() {
	randomColor();
	//create variables for changing html
	var box = document.getElementById("box-2");
	//change background and displayed color codes
	box.style.backgroundColor = boxColor;
	document.getElementById('rgb2').innerHTML = boxColor;
	document.getElementById('hex2').innerHTML = boxColorHex;
}
function createRandom3() {
	randomColor();
	//create variables for changing html
	var box = document.getElementById("box-3");
	//change background and displayed color codes
	box.style.backgroundColor = boxColor;
	document.getElementById('rgb3').innerHTML = boxColor;
	document.getElementById('hex3').innerHTML = boxColorHex;
}
function createRandom4() {
	randomColor();
	//create variables for changing html
	var box = document.getElementById("box-4");
	//change background and displayed color codes
	box.style.backgroundColor = boxColor;
	document.getElementById('rgb4').innerHTML = boxColor;
	document.getElementById('hex4').innerHTML = boxColorHex;
}
function createRandom5() {
	randomColor();
	//create variables for changing html
	var box = document.getElementById("box-5");
	//change background and displayed color codes
	box.style.backgroundColor = boxColor;
	document.getElementById('rgb5').innerHTML = boxColor;
	document.getElementById('hex5').innerHTML = boxColorHex;
}
function clearIt1() {
	boxColorHex = '#000000';
	boxColor = 'rgb(0, 0, 0)';
	//create variables for changing html
	var box = document.getElementById("box-1");
	//change background and displayed color codes
	box.style.backgroundColor = boxColor;
	document.getElementById('rgb1').innerHTML = boxColor;
	document.getElementById('hex1').innerHTML = boxColorHex;
}
function clearIt2() {
	boxColorHex = '#000000';
	boxColor = 'rgb(0, 0, 0)';
	//create variables for changing html
	var box = document.getElementById("box-2");
	//change background and displayed color codes
	box.style.backgroundColor = boxColor;
	document.getElementById('rgb2').innerHTML = boxColor;
	document.getElementById('hex2').innerHTML = boxColorHex;
}
function clearIt3() {
	boxColorHex = '#000000';
	boxColor = 'rgb(0, 0, 0)';
	//create variables for changing html
	var box = document.getElementById("box-3");
	//change background and displayed color codes
	box.style.backgroundColor = boxColor;
	document.getElementById('rgb3').innerHTML = boxColor;
	document.getElementById('hex3').innerHTML = boxColorHex;
}
function clearIt4() {
	boxColorHex = '#000000';
	boxColor = 'rgb(0, 0, 0)';
	//create variables for changing html
	var box = document.getElementById("box-4");
	//change background and displayed color codes
	box.style.backgroundColor = boxColor;
	document.getElementById('rgb4').innerHTML = boxColor;
	document.getElementById('hex4').innerHTML = boxColorHex;
}
function clearIt5() {
	boxColorHex = '#000000';
	boxColor = 'rgb(0, 0, 0)';
	//create variables for changing html
	var box = document.getElementById("box-5");
	//change background and displayed color codes
	box.style.backgroundColor = boxColor;
	document.getElementById('rgb5').innerHTML = boxColor;
	document.getElementById('hex5').innerHTML = boxColorHex;
}
function pickColor1() {
	boxColorHex = document.getElementById('color').value;
	var box = document.getElementById('box-1');
	box.style.backgroundColor = boxColorHex;
	document.getElementById('hex1').innerHTML = boxColorHex;
    hexToRgbConverter(boxColorHex);
    document.getElementById('rgb1').innerHTML = boxColor;
}
function pickColor2() {
	boxColorHex = document.getElementById('color').value;
	var box = document.getElementById('box-2');
	box.style.backgroundColor = boxColorHex;
	document.getElementById('hex2').innerHTML = boxColorHex;
    hexToRgbConverter(boxColorHex);
    document.getElementById('rgb2').innerHTML = boxColor;
}
function pickColor3() {
	boxColorHex = document.getElementById('color').value;
	var box = document.getElementById('box-3');
	box.style.backgroundColor = boxColorHex;
	document.getElementById('hex3').innerHTML = boxColorHex;
    hexToRgbConverter(boxColorHex);
    document.getElementById('rgb3').innerHTML = boxColor; 
}
function pickColor4() {
	boxColorHex = document.getElementById('color').value;
	var box = document.getElementById('box-4');
	box.style.backgroundColor = boxColorHex;
	document.getElementById('hex4').innerHTML = boxColorHex;
    hexToRgbConverter(boxColorHex);
    document.getElementById('rgb4').innerHTML = boxColor; 
}

function pickColor5() {
	boxColorHex = document.getElementById('color').value;
	var box = document.getElementById('box-5');
	box.style.backgroundColor = boxColorHex;
	document.getElementById('hex5').innerHTML = boxColorHex;
    hexToRgbConverter(boxColorHex); 
    document.getElementById('rgb5').innerHTML = boxColor;
}
window.onbeforeunload = function() {
  return "You are about to refresh the page and will lose all of your colors.";
};
function headingMatch() {
	var redPart = red;
	var greenPart = green;
	var bluePart = blue;
	var total = redPart + greenPart + bluePart;
	if (total < 255 ) {
		redPart = redPart + 100;
			if (redPart >= 255) {
			redPart = 255;
			}
		greenPart = greenPart + 100;
			if (greenPart >= 255) {
			greenPart = 255;
			}
		bluePart = bluePart + 100;
			if (bluePart >= 255) {
			bluePart = 255;
			}
	}
	var finishedColor = 'rgb(' + redPart + ', ' + greenPart + ', ' + bluePart + ')';
	document.getElementById('footer-link').style.color = finishedColor;
	document.getElementById('promo-link').style.color = finishedColor;
	document.getElementById('title').style.color = finishedColor;
	document.getElementById('how-to').style.color = finishedColor;
}									  									  										  									  										  									  										  									  										  									  										  									  										  									  										  									  										  									  										  									  									  									  										  									  										  									  										  									  										  									  										  									  										  									  										  									  										  									  										  									  										  									  										  									  										  									  										  									  										  									  										  									  										  									  										  									  										  									  										  									  										  									  										  									  										  									  										  									  										  									  										  									  										  									  										  									  										  									  										  									  