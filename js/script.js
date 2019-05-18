
//AIT LHADJ NOUHAILA

//declaration des variables
let canvas;
let context;
let video;
let image;

async function capture() {
	//affichage de compteur de 3->0 avanat de capturer l image
	showCountdown(true);
	ms=3;
	do {
		document.getElementById('countdown').innerText = "" + ms;
		await sleep(1000);
		ms--;
	}while(ms >= 0);
	showCountdown(false);
	canvas = document.getElementById('resultat');
	//notre CANVAS
	context = canvas.getContext('2d');
	video = document.getElementById('camera');
	
	context.filter = "none";
	//recuperer picture dans canvas
	context.drawImage(video, 0, 0, canvas.clientWidth, canvas.clientHeight);
	image = new Image();
	image.src = canvas.toDataURL();
	resize();
}


//il creer une pic qu'on voit pas il la download et l'enregistre
function download(url) {
	let element = document.createElement('a');
	element.setAttribute('href', url);
	element.setAttribute('download', 'image.png');
	element.style.display = 'none';
	document.body.appendChild(element);
	element.click();
	document.body.removeChild(element);
}

const sleep = (milliseconds) => {
	return new Promise(resolve => setTimeout(resolve, milliseconds))
} 


function filtercanvas(id, val) {
	//les filtres varient entre 0 et 200
	//luminosité
	let val1 = parseFloat(document.getElementById('fbrightness').value);
	//contraste
	let val2 = parseFloat(document.getElementById('fcontrast').value);
	//saturation
	let val3 = parseFloat(document.getElementById('fsaturate').value);
	switch (id) {
		case "fbrightness": {
			val1 = val;
			break;
		}
		case "fcontrast": {
			val2 = val;
			break;
		}
		case "fsaturate": {
			val3 = val;
			break;
		}
	}
	context.filter = "brightness(" + val1 + "%) contrast(" + val2 + "%) saturate(" + val3 + "%)";
	context.drawImage(image, 0, 0, canvas.offsetWidth, canvas.offsetHeight);
}


//fonction de la redimension des pics
function resize() {
	let original_width = 0;
	let original_height = 0;
	let original_x = 0;
	let original_y = 0;
	let original_mouse_x = 0;
	let original_mouse_y = 0;
	let element = document.getElementById('cadre');
	const parent = document.getElementById('container');
	const resizers = document.querySelectorAll(' .corner')

	for (let i = 0; i < resizers.length; i++) {
		const corners = resizers[i];
		corners.addEventListener('mousedown', function (e) {
			e.preventDefault()
			original_width = valueInCss(element,'width');
			original_height = valueInCss(element,'height');
			original_x = valueInCss(element,'left');
			original_y = valueInCss(element,'top');
			original_mouse_x = e.pageX;
			original_mouse_y = e.pageY;
			window.addEventListener('mousemove', rz)
			window.addEventListener('mouseup', stoprz)
		})

		function rz(e) {
			if (corners.classList.contains('br')) {
				const new_width = original_width + (e.pageX - original_mouse_x)
				const new_height = original_height + (e.pageY - original_mouse_y)
				element.style.width  = new_width + 'px';
				element.style.height  = new_height + 'px';
				element.style.maxWidth = (valueInCss(parent,'width') - original_x) + 'px';	
				element.style.maxHeight = (valueInCss(parent,'height') - original_y) + 'px';	
			} else if (corners.classList.contains('bl')) {
				const new_width = original_width - (e.pageX - original_mouse_x)
				const new_height = original_height + (e.pageY - original_mouse_y)
				const new_x = original_x + (e.pageX - original_mouse_x)
				element.style.width  = new_width + 'px';
				element.style.height  = new_height + 'px';
				element.style.left  = new_x + 'px';
			}
			else if (corners.classList.contains('tr')) {
				const new_width = original_width + (e.pageX - original_mouse_x)
				const new_height = original_height - (e.pageY - original_mouse_y)
				const new_y = original_y + (e.pageY - original_mouse_y)
				element.style.width  = new_width + 'px';
				element.style.height  = new_height + 'px';
				element.style.top  = minmaxvalue(new_y,0,valueInCss(parent,'width')) + 'px';
				element.style.maxHeight = (valueInCss(parent,'height') - original_y) + 'px';	
				element.style.maxWidth = (valueInCss(parent,'width') - original_x) + 'px';	

			} else if (corners.classList.contains('tl')) {
				const new_width = original_width - (e.pageX - original_mouse_x)
				const new_height = original_height - (e.pageY - original_mouse_y)
				const new_x = original_x + (e.pageX - original_mouse_x)
				const new_y = original_y + (e.pageY - original_mouse_y)
				element.style.width  = new_width + 'px';
				element.style.height = new_height + 'px';
				element.style.top = minmaxvalue(new_y,0,valueInCss(parent,'width')) + 'px';
				element.style.left = minmaxvalue(new_x,0,valueInCss(parent,'width')) + 'px';
				element.style.maxHeight = (valueInCss(parent,'height') - original_y) + 'px';	
				element.style.maxWidth = (valueInCss(parent,'width') - original_x) + 'px';	

			} else if (corners.classList.contains('tc')) {
				const new_height = original_height - (e.pageY - original_mouse_y)
				const new_y = original_y + (e.pageY - original_mouse_y)
				element.style.height = new_height + 'px';
				element.style.top = minmaxvalue(new_y,0,valueInCss(parent,'width')) + 'px';
				element.style.maxHeight = (valueInCss(parent,'height') - original_y) + 'px';	

			} else if (corners.classList.contains('bc')) {
				const new_height = original_height + (e.pageY - original_mouse_y)
				element.style.height = new_height + 'px';
				element.style.maxHeight = (valueInCss(parent,'height') - original_y) + 'px';	
			} else if (corners.classList.contains('lc')) {
					const new_width = original_width - (e.pageX - original_mouse_x)
					const new_x = original_x + (e.pageX - original_mouse_x)
					element.style.width = new_width + 'px';
					element.style.left = minmaxvalue(new_x,0,valueInCss(parent,'width')) + 'px';
					element.style.maxWidth = (valueInCss(parent,'width') - original_x) + 'px';	

			} else if (corners.classList.contains('rc')) {
						const new_width = original_width + (e.pageX - original_mouse_x)
						element.style.width = new_width + 'px';	
						element.style.maxWidth = (valueInCss(parent,'width') - original_x) + 'px';	
				}
			}
		function stoprz() {
			window.removeEventListener('mousemove', rz)
		}
	}
}

function recadrage() {
	//apparition de la nouvelle picture avec redimension
	let elm = document.getElementById('cadre');
	context.drawImage(image, valueInCss(elm, 'left'), valueInCss(elm, 'top'), valueInCss(elm, 'width'), valueInCss(elm, 'height'), 0, 0, canvas.offsetWidth, canvas.offsetHeight);
	image = new Image();
	image.src = canvas.toDataURL();
	//on fait disparaitre le carrée de dimensionnement
	showCarre(false);
}

function minmaxvalue(val,min,max){
	if(val < min)
		val = min;
	if(val > max)
		val = max
	return val;
}

function valueInCss(parent, str){
	const value = parseFloat(getComputedStyle(parent, null).getPropertyValue(str).replace('px', ''));
	return value;
}


//affichage de carree de redimension
function showCarre(bool){
	if(bool){
		document.getElementById('cadre').style.display = 'block';
	}else{
		document.getElementById('cadre').style.display = 'none';
	}
}
//display countdown
function showCountdown(bool){
	if(bool){
		document.getElementById('countdown').style.display = 'block';
	}else{
		//apres 0 disparaitre le countdown
		document.getElementById('countdown').style.display = 'none';
	}
}

//apres avoir cliquer sur photo
function displayInterface2(){
		document.getElementById('centerdiv').style.display = 'block';
		document.getElementById('btni1').style.display = 'none';
			 video = document.getElementById('camera');
	if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
		navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
			video.srcObject = stream;
			video.play();
			//fonctio pour recuperer la video
		}, function () {
			let source = document.createElement('source');
			source.type = 'video/mp4';
			source.src = 'video/loading.mp4';
			video.appendChild(source);
			video.load();
			video.currentTime = 0;
			video.loop = true;
			video.play();
		});
	}
}

//pour le telechargement de l'image en base 64
function downloadImageBase64() {
		const imgsrc = canvas.toDataURL();
		download(imgsrc);
}