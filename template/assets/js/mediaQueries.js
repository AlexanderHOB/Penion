// MEDIA QUERIES
// Loading
const onResize = e => {
	if (loadingMarker != 0) {
		if (e.matches) {
			loadingOnResize();
		}else{
			loadingOnResize();
		}
	}
}
$desktopBpSm.addListener(onResize);
onResize($desktopBpSm);


// Sidenav
const mql = e => {
	if (e.matches) {
		for(let i of $navItems){
			i.classList.add('waves');
		}
		for(let i of $navLinks){
			i.addEventListener('click', navRemove);
		}
	}else{
		for(let i of $navItems){
			i.classList.remove('waves');
		}
		for(let i of $navLinks){
			i.removeEventListener('click', navRemove);
		}
	}
}

$desktopBpSm.addListener(mql);
mql($desktopBpSm);