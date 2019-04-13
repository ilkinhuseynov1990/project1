var index = 0;

function sliderimg(){
	var img = document.getElementsByClassName('slider-image');
	for(var i = 0; i < img.length; i++){
		img[i].style.display="none";
	}
	index++;

	if(index>img.length){index= 1}

	img[index-1].style.display="block";

	setTimeout(sliderimg,5000);
}

sliderimg();