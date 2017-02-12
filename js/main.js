'use strict';

//Load the RSS and show on the page.
$("#alaune").rss("http://www.lessentiel.lu/rss/front.tmpl").show();
$("#hitech").rss("http://www.lessentiel.lu/rss/hitech.tmpl").show();
$("#musique").rss("http://www.lessentiel.lu/rss/musique.tmpl").show();
$("#sport").rss("http://www.lessentiel.lu/rss/sport.tmpl").show();
$("#video").rss("http://www.lessentiel.lu/rss/video.tmpl").show();


// Put variables in global scope to make them available to the browser console.
var video = document.querySelector('video#videoStream');

var constraints = {
  audio: false,
  video: true
};

function handleSuccess(stream) {
  window.stream = stream; // make stream available to browser console
  video.srcObject = stream;
}

function handleError(error) {
  console.log('navigator.getUserMedia error: ', error);
}

navigator.mediaDevices.getUserMedia(constraints).
	then(handleSuccess).catch(handleError);
	

$('.carousel').carousel({
		
});