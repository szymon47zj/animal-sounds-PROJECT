window.addEventListener('click', function (e) {
	var animalId = e.path[0].id;
	const audio = document.querySelector('audio[data-animal=' + animalId + ']');
	audio.currentTime = 0;
	audio.play();
})
