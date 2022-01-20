// computer genteted voice



// var round = document.getElementById('round');
// var likes = document.getElementById('likes');
// var synth = window.speechSynthesis;
// var click_count = 0;
// var voices = synth.getVoices();
// var selectedVoiceName = 'Microsoft David - English (United States)';
// voices.forEach((voice) => {
//     if (voice.name === selectedVoiceName) {
//         toSpeak.voice = voice;
//     }
// });


// round.addEventListener('click', function () {
//     if (click_count == 0) {
//         click_count = 1;
//         round.style = `border: 3px solid #ff3659;  background-color: #ff3659;`
//         likes.innerText = (Number(likes.textContent) + 1);
//         var toSpeak = new SpeechSynthesisUtterance('thank you');
//         synth.speak(toSpeak);

//     }
//     else if (click_count == 1) {
//         click_count = 0;
//         round.style = ``;
//         likes.innerText = (Number(likes.textContent) - 1);
//         toSpeak = new SpeechSynthesisUtterance('oh no dont');
//         synth.speak(toSpeak);
//     }
// });




// audio files



var round = document.getElementById('round');
var likes = document.getElementById('likes');
var click_count = 0;
var yes = document.getElementById('yes');
var no = document.getElementById('no');
if (localStorage.like === undefined){
    localStorage.setItem('like','159');
}
likes.innerText = localStorage.like;


round.addEventListener('click', function () {
    if (click_count == 0){
        click_count = 1;
        round.style = `border: 3px solid #ff3659;  background-color: #ff3659;`;
        no.pause();
        yes.play();
        let l = localStorage.like;
        l=Number(l);
        localStorage.like = String(l+1);
        likes.innerText = localStorage.like;     
    }
    else if (click_count == 1) {
        click_count = 0;
        round.style = ``;
        likes.innerText = (Number(likes.textContent) - 1);
        yes.pause();
        no.play();
        let l = localStorage.like;
        l=Number(l);
        localStorage.like = String(l-1);
        likes.innerText = localStorage.like;
    }
});
