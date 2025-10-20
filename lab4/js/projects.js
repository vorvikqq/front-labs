const track = document.getElementById('carouselTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const indicatorsContainer = document.getElementById('indicators');
const slides = document.querySelectorAll('.carousel__slide');

let currentIndex = 0;
const slidesPerView = 1;
const totalSlides = slides.length;
const maxIndex = totalSlides - slidesPerView;

function createIndicators() {
  indicatorsContainer.innerHTML = '';
  for (let i = 0; i <= maxIndex; i++) {
    const indicator = document.createElement('button');
    indicator.className = 'carousel__indicator';
    if (i === currentIndex) indicator.classList.add('active');
    indicator.addEventListener('click', () => goToSlide(i));
    indicatorsContainer.appendChild(indicator);
  }
}

function updateCarousel() {
  const containerWidth = track.parentElement.offsetWidth;
  const slideWidth = 700;
  const actualSlideWidth = Math.min(slideWidth, containerWidth - 120);
  const offset = -(currentIndex * actualSlideWidth);
  track.style.transform = `translateX(${offset}px)`;

  document.querySelectorAll('.carousel__indicator').forEach((indicator, index) => {
    indicator.classList.toggle('active', index === currentIndex);
  });
}

function goToSlide(index) {
  currentIndex = Math.max(0, Math.min(index, maxIndex));
  updateCarousel();
}

prevBtn.addEventListener('click', () => {
  goToSlide(currentIndex - 1);
});

nextBtn.addEventListener('click', () => {
  goToSlide(currentIndex + 1);
});

createIndicators();
updateCarousel();