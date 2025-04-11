const video = document.querySelector('#player1');

window.addEventListener("load", function () {
	console.log("Good job opening the window")
	video.autoplay=false;
	console.log("Set autoplay to false.")
	video.loop=false;
	console.log("Set loop to false.")

});

document.querySelector('#play').addEventListener('click', function () {
	video.play();
	document.querySelector('#volume').textContent=document.querySelector('#slider').valueAsNumber+'%';
	console.log('Play video.');
})

document.querySelector('#pause').addEventListener('click', function () {
	video.pause();
	console.log('Pause video.');
})

document.querySelector('#slower').addEventListener('click', function () {
	video.playbackRate *= 0.9;
	console.log('Slow down video.');
	console.log('Speed is '+video.playbackRate);
})

document.querySelector('#faster').addEventListener('click', function () {
	video.playbackRate /= 0.9;
	console.log('Speed up video.');
	console.log('Speed is '+video.playbackRate);
})
document.querySelector('#skip').addEventListener('click', function () {
	console.log('Skip ahead.');
	const newTime = video.currentTime + 10;
	if (newTime >= video.duration) {
		video.currentTime = 0;
	} else {
		video.currentTime = newTime;
	}
	console.log('Video current time is '+video.currentTime);
})

document.querySelector('#mute').addEventListener('click', function () {
	video.muted = !video.muted;
	if (video.muted) {
		document.querySelector('#slider').valueAsNumber=0;
		document.querySelector('#volume').innerHTML=document.querySelector('#slider').value+'%';
		document.querySelector('#mute').innerHTML='Unmute'
		console.log('Mute.');
	}else{
		document.querySelector('#slider').valueAsNumber=100;
		document.querySelector('#volume').innerHTML=document.querySelector('#slider').value+'%';
		document.querySelector('#mute').innerHTML='Mute'
		console.log('Unmute.')
	}
})

document.querySelector('#slider').addEventListener('change', function (e) {
	video.volume = e.target.valueAsNumber/100;
	document.querySelector('#volume').innerHTML=document.querySelector('#slider').value+'%';
	console.log('the current value is '+video.volume)
})

document.querySelector('#vintage').addEventListener('click', function () {
	video.classList.add('oldSchool');
})

document.querySelector('#orig').addEventListener('click', function () {
	video.classList.remove('oldSchool');
})
