const flipCard = document.querySelector('.flip-card-back');

flipCard.addEventListener('click', function() {
    this.classList.toggle('flipped');
});