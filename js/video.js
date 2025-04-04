var video = document.querySelector('#player1');

window.addEventListener("load", function () {
	console.log("Good job opening the window")
	video.setAttribute('autoplay', 'false');
	video.setAttribute('loop', 'false');
});

document.querySelector('#play').addEventListener('click', () => {
	video.play();
	document.querySelector('#volume').textContent=document.querySelector('#slider').valueAsNumber;
})

document.querySelector('#pause').addEventListener('click', () => {
	video.pause();
})

document.querySelector('#slower').addEventListener('click', () => {
	video.playbackRate -= 0.1;
	console.log(video.playbackRate);
})

document.querySelector('#faster').addEventListener('click', () => {
	video.playbackRate += 0.1;
	console.log(video.playbackRate);
})
document.querySelector('#skip').addEventListener('click', () => {
	const newTime = video.currentTime + 10;
	if (newTime >= video.duration) {
		video.currentTime = 0;
	} else {
		video.currentTime = newTime;
	}
	console.log(video.currentTime);
})

document.querySelector('#mute').addEventListener('click', () => {
	video.muted = !video.muted;
	if (video.muted) {
		document.querySelector('#slider').valueAsNumber=0;
		document.querySelector('#volume').innerHTML=document.querySelector('#slider').value;
	}else{
		document.querySelector('#slider').valueAsNumber=100;
		document.querySelector('#volume').innerHTML=document.querySelector('#slider').value;
	}
})

document.querySelector('#slider').addEventListener('change', (e) => {
	video.volume = e.target.valueAsNumber/100;
	document.querySelector('#volume').innerHTML=document.querySelector('#slider').value;
})

document.querySelector('#vintage').addEventListener('click', () => {
	video.classList.add('oldSchool');
})

document.querySelector('#orig').addEventListener('click', () => {
	video.classList.remove('oldSchool');
})

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

