// script.js
let progress = 0;

document.getElementById('fillButton').addEventListener('click', function() {
    console.log('Button clicked'); // Debugging
    if (progress < 100) {
        progress += 25;
        console.log('Progress:', progress); // Debugging
        const progressBar = document.querySelector('.progress');
        progressBar.style.width = progress + '%';
        console.log('ProgressBar width:', progressBar.style.width); // Debugging
    }
});
