let songIndex = 0;
let audioElement = new Audio('media/mp3/sazaEMaut.mp3');
let play = document.getElementById('play');
let progressBar = document.getElementById('progress');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName : "OG", filePath:"media/mp3/og.mp3", cover : "media/cover/og.jpg"},
    {songName : "Blowing Up", filePath:"media/mp3/blowingUp.mp3", cover : "media/cover/blowing.webp"},
    {songName : "No Cap", filePath:"media/mp3/noCap.mp3", cover : "media/cover/noCap.png"},
    {songName : "Saza-E-Maut", filePath:"media/mp3/sazaEMaut.mp3", cover : "media/cover/saza.jpg"},
];

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].cover;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

play.addEventListener('click', ()=>{
    if (audioElement.paused || audioElement.currentTime<=0) {
        audioElement.play();
        play.classList.remove('fa-circle-play');
        play.classList.add('fa-circle-pause');
    }
    else{
        audioElement.pause();
        play.classList.add('fa-circle-play');
        play.classList.remove('fa-circle-pause');
    }
})

audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressBar.value = progress;
})

progressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (progressBar.value * audioElement.duration)/100;
})



// Open Album
function sellOut() {
    window.open("https://open.spotify.com/album/6KkoeJu06oVZ58nPBbzIcG?si=-zHiZm19Sb2lmJaC4bEXVA","_blank");

}

function stillHere() {
    window.location = "https://open.spotify.com/album/3TWJqzaophqIi6ZIm5wkux?si=j83ez58SQXu9VrVydUNN-Q";
}