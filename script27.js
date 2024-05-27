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

document.getElementById('chatButton').addEventListener('click', function() {
    document.getElementById('chatWindow').style.display = 'block';
});

document.getElementById('closeChat').addEventListener('click', function() {
    document.getElementById('chatWindow').style.display = 'none';
});
