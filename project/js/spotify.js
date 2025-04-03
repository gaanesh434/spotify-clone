//js code


let songIndex = 0;
let masterplay = document.getElementById('masterplay');
let audioElement = new Audio('res/songs/1.mp3');
let myprogressBar = document.getElementById('myprogressBar');
let songs = [
{songname:"1",filepath:'/res/songs/1.mp3',coverpath:"res/photo/1.jpg"},
{songname:"2",filepath:'res/songs/2.mp3',coverpath:"res/photo/2.jpg"},
{songname:"3",filepath:'res/songs/3.mp3',coverpath:"res/photo/3.jpg"},
{songname:"4",filepath:'res/songs/4.mp3',coverpath:"res/photo/4.jpg"},
{songname:"5",filepath:'res/songs/5.mp3',coverpath:"res/photo/5.jpg"},
{songname:"6",filepath:'res/songs/6.mp3',coverpath:"res/photo/6.jpg"},
{songname:"7",filepath:'res/songs/7.mp3',coverpath:"res/photo/7.jpg"},
{songname:"8",filepath:'res/songs/8.mp3',coverpath:"res/photo/8.jpg"},
{songname:"9",filepath:'res/songs/9.mp3',coverpath:"res/photo/9.jpg"},
]


document.getElementById('myAudio').addEventListener('click', function() {
  this.play();
  alert('Audio playing!');
});

masterplay.addEventListener('click', () => {
    console.log("masterplay");
if (audioElement.paused || audioElement.currentTime <= 0) {
audioElement.play();
alert('it has responded');
masterplay.innerHTML = 'Pause';
} else {
audioElement.pause();
masterplay.innerHTML = 'Play';
}
});

audioElement.addEventListener('timeupdate', () => {
const progress = (audioElement.currentTime / audioElement.duration) * 100;
myprogressBar.value = progress;
});

myprogressBar.addEventListener('change', () => {
audioElement.currentTime = (myprogressBar.value / 100) * audioElement.duration;
});
