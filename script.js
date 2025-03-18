const shareButtons = document.querySelectorAll('.share-button');

shareButtons.forEach(button => {
  button.addEventListener('click', function () {
    const paragraph = this.parentElement.querySelector('p');
    const text = paragraph.textContent.trim();

    const whatsappLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;

    window.open(whatsappLink, '_blank');
  });
});

const likeButtons = document.querySelectorAll('.like-button');
const bookmarkButtons = document.querySelectorAll('.bookmark-button');

likeButtons.forEach(button => {
  button.addEventListener('click', function () {
    this.classList.toggle('far');
    this.classList.toggle('fas');
    this.classList.toggle('liked');
  });
});

bookmarkButtons.forEach(button => {
  button.addEventListener('click', function () {
    this.classList.toggle('far');
    this.classList.toggle('fas');
    this.classList.toggle('bookmarked');
  });
});


/*------------------------------*/
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function moveSlide(step) {
    currentSlide += step;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    if (currentSlide >= slides.length) currentSlide = 0;
    showSlide(currentSlide);
}

showSlide(currentSlide);
