var previousAudio;
/*var audios = {
    0: "resources/sound-board_sounds_applause.mp3",
    1: "sound-board_sounds_boo.mp3", 
    2: "sound-board_sounds_gasp.mp3", 
    3: "sound-board_sounds_tada.mp3", 
    4: "sound-board_sounds_victory.mp3", 
    5: "sound-board_sounds_wrong.mp3"};*/

function load()
{
    previousAudio = "a";
    console.log(previousAudio)
}

function audioclick(element){
    var value = element.innerText;
    var audio = document.getElementById(value);
    if(previousAudio != "a")
    {
        previousAudio.pause();
        previousAudio.currentTime = 0;

    }
    audio.play();
    previousAudio = audio;
}