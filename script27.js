// script27.js
let progress = 0;

document.getElementById('fillButton').addEventListener('click', function() {
    if (progress < 100) {
        progress += 25;
        const progressBar = document.querySelector('.progress');
        progressBar.style.width = progress + '%';

        if (progress === 100) {
            document.getElementById('star').style.display = 'block';
        }
    }
});
