const video = document.getElementById('video');
const audio = document.getElementById('audio');
const btn = document.getElementById('btn');
const output = document.getElementById('output');
const label = document.getElementById('label');
btn.addEventListener('click', () => {
    let input = document.getElementById('name');
    const value = input.value.trim();
    if (value === '') {
        alert('Please enter your name');
        return;
    } else {
        video.style.display = 'block';
        btn.style.display = 'none';
        input.style.display = 'none';
        audio.playbackRate = 3.0;
        audio.play();
        output.style.display = 'block';
        output.innerText = value;
        label.style.display = 'block';
        label.innerText = 'Fvck you ' + value;
    }
    console.log(value);
});