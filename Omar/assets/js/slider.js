// Slider
const $sliderPrev = document.querySelector('.slider-prev'),
$sliderNext = document.querySelector('.slider-next'),
$sliderItem = document.querySelectorAll('.slider-item'),
$controller = document.querySelector('.controller');
// Slider Vars
var sliderItemCount = $sliderItem.length - 1,
sliderNow = 0,
sliderNP = 0,
sliderIndex = 0,
// Create Controller bar
controllerIndex = 0,
controllerBar,
sliderAutoPlay = setInterval(showNextSlider, 10000);

for(let i of $sliderItem) {
	if (controllerIndex == 0) {
		controllerBar = "<a href='javascript:void(0)' class='controller-bar controller-active' data-index='" + controllerIndex + "'><span class='controller-icon'></span></a>";
	}else {
		controllerBar = "<a href='javascript:void(0)' class='controller-bar' data-index='" + controllerIndex + "'><span class='controller-icon'></span></a>";
	}
	$controller.innerHTML += controllerBar;
	controllerIndex++;
}

const $controllerBar = document.querySelectorAll('.controller-bar');

$sliderNext.addEventListener('click', showNextSlider);
$sliderPrev.addEventListener('click', showPrevSlider);
for (let i of $controllerBar) {
	i.addEventListener('click', controllerSlider);
}

function showNextSlider(){
	if (!$sliderItem[sliderNow].classList.contains('slider-marker')) {
		if (sliderNow == sliderItemCount) {
			sliderNP = 0;
		}else {
			sliderNP = sliderNow + 1;
		}
		$sliderItem[sliderNow].classList.add('slider-marker');
		$sliderItem[sliderNP].classList.add('slider-item-next');
		setTimeout(()=>{
			$sliderItem[sliderNow].classList.add('slider-item-left');
			$sliderItem[sliderNP].classList.add('slider-item-left');
			$controllerBar[sliderNow].classList.remove('controller-active');
			$controllerBar[sliderNP].classList.add('controller-active');
		}, 100);
		setTimeout(()=>{
			$sliderItem[sliderNP].classList.add('slider-active');
			$sliderItem[sliderNP].classList.remove('slider-item-next', 'slider-item-left');
			$sliderItem[sliderNow].classList.remove('slider-active', 'slider-item-left', 'slider-marker');
			if(sliderNow == sliderItemCount){
				sliderNow = 0;
			}else {
				sliderNow++;
			}
			clearInterval(sliderAutoPlay);
			sliderAutoPlay = setInterval(showNextSlider, 10000);
		}, 700);
	}
}

function showPrevSlider(){
	if (!$sliderItem[sliderNow].classList.contains('slider-marker')) {
		if (sliderNow == 0) {
			sliderNP = sliderItemCount;
		}else {
			sliderNP = sliderNow - 1;
		}
		$sliderItem[sliderNow].classList.add('slider-marker');
		$sliderItem[sliderNP].classList.add('slider-item-prev');
		setTimeout(()=>{
			$sliderItem[sliderNow].classList.add('slider-item-right');
			$sliderItem[sliderNP].classList.add('slider-item-right');
			$controllerBar[sliderNow].classList.remove('controller-active');
			$controllerBar[sliderNP].classList.add('controller-active');
		}, 100);
		setTimeout(()=>{
			$sliderItem[sliderNP].classList.add('slider-active');
			$sliderItem[sliderNP].classList.remove('slider-item-prev', 'slider-item-right');
			$sliderItem[sliderNow].classList.remove('slider-active', 'slider-item-right', 'slider-marker');
			if(sliderNow == 0){
				sliderNow = sliderItemCount;
			}else {
				sliderNow--;
			}
			clearInterval(sliderAutoPlay);
			sliderAutoPlay = setInterval(showNextSlider, 10000);
		}, 700);
	}
}

function controllerSlider() {
	if (!$sliderItem[sliderNow].classList.contains('slider-marker')) {
		sliderIndex = parseInt(this.dataset.index);
		if (sliderNow != sliderIndex && sliderNow  < sliderIndex) {
			$sliderItem[sliderNow].classList.add('slider-marker');
			$sliderItem[sliderIndex].classList.add('slider-item-next');
			setTimeout(()=>{
				$sliderItem[sliderNow].classList.add('slider-item-left');
				$sliderItem[sliderIndex].classList.add('slider-item-left');
				$controllerBar[sliderNow].classList.remove('controller-active');
				$controllerBar[sliderIndex].classList.add('controller-active');
			}, 100);
			setTimeout(()=>{
				$sliderItem[sliderIndex].classList.add('slider-active');
				$sliderItem[sliderIndex].classList.remove('slider-item-next', 'slider-item-left');
				$sliderItem[sliderNow].classList.remove('slider-active', 'slider-item-left', 'slider-marker');
				sliderNow = sliderIndex;
				clearInterval(sliderAutoPlay);
				sliderAutoPlay = setInterval(showNextSlider, 10000);
			}, 700);
		}else if(sliderNow != sliderIndex && sliderNow  > sliderIndex) {
			$sliderItem[sliderNow].classList.add('slider-marker');
			$sliderItem[sliderIndex].classList.add('slider-item-prev');
			setTimeout(()=>{
				$sliderItem[sliderNow].classList.add('slider-item-right');
				$sliderItem[sliderIndex].classList.add('slider-item-right');
				$controllerBar[sliderNow].classList.remove('controller-active');
				$controllerBar[sliderIndex].classList.add('controller-active');
			}, 100);
			setTimeout(()=>{
				$sliderItem[sliderIndex].classList.add('slider-active');
				$sliderItem[sliderIndex].classList.remove('slider-item-prev', 'slider-item-right');
				$sliderItem[sliderNow].classList.remove('slider-active', 'slider-item-right', 'slider-marker');
				sliderNow = sliderIndex;
				clearInterval(sliderAutoPlay);
				sliderAutoPlay = setInterval(showNextSlider, 10000);
			}, 700);
		}
	}
}