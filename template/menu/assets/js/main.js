//DOM Loaded
window.addEventListener('DOMContentLoaded', function() {
	// Loading
	$loading.style.opacity = '0';
	setTimeout(()=>{
		$loading.style.display = 'none';
	}, 1000);
	loadingMarker++;
	NProgress.done();
});

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

// Loading
function loadingOnResize(){
	$loading.style.opacity = '1';
	$loading.style.display = 'flex';
	NProgress.start();
	setTimeout(()=>{
		$loading.style.opacity = '0';
		NProgress.done();
		setTimeout(()=>{
			$loading.style.display = 'none';
		}, 1000);
	}, 1000);
}