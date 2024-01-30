// 3D Scroll

let zSpacing = -1000,
		lastPos = zSpacing / 5,
		$frames = document.getElementsByClassName('frame'),
		frames = Array.from($frames),
		zVals = []

window.onscroll = function() {

	let top = document.documentElement.scrollTop,
			delta = lastPos - top

	lastPos = top

	frames.forEach(function(n, i) {
		zVals.push((i * zSpacing) + zSpacing)
		zVals[i] += delta * -5.5
		let frame = frames[i],
				transform = `translateZ(${zVals[i]}px)`,
				opacity = zVals[i] < Math.abs(zSpacing) / 1.5 ? 1 : 0
		frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`);
		console.log(window.scrollY);
		if(window.scrollY >= 3250){
			// const lastForm = document.querySelector('.last_form');
			frames[frames.length - 1].setAttribute('style', `transform: translateZ(0); opacity: 1`);
			window.scrollTo(0,window.scrollY);
			// n.classList.add('focus')
		}else{
		}
	})

}

window.scrollTo(0, 1)

// Audio

let soundButton = document.querySelector('.soundbutton'),
		audio = document.querySelector('.audio')

soundButton.addEventListener('click', e => {
	soundButton.classList.toggle('paused')
	audio.paused ? audio.play() : audio.pause()
})

window.onfocus = function() {
	soundButton.classList.contains('paused') ? audio.pause() : audio.play()
}

window.onblur = function() {
	audio.pause()
}
