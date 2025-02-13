function nextPage() {
    window.location.href = 'index2.html'; // Redirige vers la prochaine page
}

function moveButton() {
    const button = document.getElementById('noButton');
    button.style.position = 'absolute';
    button.style.top = Math.random() * window.innerHeight + 'px';
    button.style.left = Math.random() * window.innerWidth + 'px';
}

document.addEventListener('DOMContentLoaded', () => {
    const noButton = document.getElementById('noButton');
    noButton.addEventListener('mouseover', moveButton);
});