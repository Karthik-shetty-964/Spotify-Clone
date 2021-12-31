console.log("Welcome to KMusic");

// Intialize the variables
let songIndex = 0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));


// audioElement.play();

let songs=[
    {songname:"Warriyo - Mortals",filepath:"songs/1.mp3",coverpath:"covers/1.jpg"},
    {songname:"Cielo - Huma Huma",filepath:"songs/2.mp3",coverpath:"covers/2.jpg"},
    {songname:"DEAF KEV - Invincible",filepath:"songs/3.mp3",coverpath:"covers/3.jpg"},
    {songname:"Different Heaven & EHIDE",filepath:"songs/4.mp3",coverpath:"covers/4.jpg"},
    {songname:"Janji - Heroes-Tonight",filepath:"songs/5.mp3",coverpath:"covers/5.jpg"},
    {songname:"Let me love you",filepath:"songs/6.mp3",coverpath:"covers/6.jpg"},
    {songname:"Let me love you",filepath:"songs/7.mp3",coverpath:"covers/7.jpg"},
    {songname:"Let me love you",filepath:"songs/8.mp3",coverpath:"covers/8.jpg"},
    {songname:"Let me love you",filepath:"songs/9.mp3",coverpath:"covers/9.jpg"},
    {songname:"Let me love you",filepath:"songs/10.mp3",coverpath:"covers/10.jpg"}
]

songItems.forEach((element,i)=>{
   
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songname;
})
// Handle play/pause clicks 
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
        
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
});

// Listen to events 
audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    // update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
});

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100;
})

let makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    }) 
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        // console.log(e.target);
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songname;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;

        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })
})

document.getElementById('next').addEventListener('click',()=>{
     if(songIndex>=10){
         songIndex = 0;
     }else{
         songIndex+=1;
     }
     audioElement.src=`songs/${songIndex+1}.mp3`;
     masterSongName.innerText=songs[songIndex].songname;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;

        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        
})

document.getElementById('previous').addEventListener('click',()=>{
     if(songIndex<=0){
         songIndex = 0;
     }else{
         songIndex-=1;
     }
     audioElement.src=`songs/${songIndex+1}.mp3`;
     masterSongName.innerText=songs[songIndex].songname;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;

        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})