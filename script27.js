// script.js
let progress = 0;

document.getElementById('fillButton').addEventListener('click', function() {
    if (progress < 100) {
        progress += 25;
        if (progress > 100) progress = 100; // Ensure it doesn't exceed 100%
        const progressBar = document.querySelector('.progress');
        progressBar.style.width = progress + '%';
    }
});
