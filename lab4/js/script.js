function typeMotto() {
  const titleEl = document.querySelector(".title");
  const mottoEl = document.querySelector(".motto");

  if (!titleEl || !mottoEl) return;

  const text = mottoEl.dataset.motto?.trim() || "";

  const titleCS = window.getComputedStyle(titleEl);
  let titleWeight = titleCS.fontWeight;

  titleWeight = parseInt(titleWeight, 10);
  if (isNaN(titleWeight))
    titleWeight = 400;

  const steps = [100, 200, 300, 400, 500, 600, 700, 800, 900];
  const target = Math.min(900, Math.max(100, Math.round(titleWeight * 1.2)));
  const closest = steps.reduce(
    (acc, curr) =>
      Math.abs(curr - target) < Math.abs(acc - target) ? curr : acc,
    steps[0]
  );

  mottoEl.style.fontWeight = String(closest);

  let i = 0;
  const speed = 55;

  function typeNext() {
    if (i <= text.length) {
      mottoEl.textContent = text.slice(0, i);
      i++;
      setTimeout(typeNext, speed);
    } else {
      mottoEl.classList.add('done');
    }
  }
  typeNext();
}
document.addEventListener("DOMContentLoaded", typeMotto);

// --------------------------------------------------------

const modal = document.getElementById('riddleModal');
const dlg = modal?.querySelector('.modal__dialog');
const titleEl = document.getElementById('riddleTitle');
const textEl = document.getElementById('riddleText');
const form = document.getElementById('riddleForm');
const input = document.getElementById('riddleAnswer');
const feedback = document.getElementById('riddleFeedback');

let currentAnswers = [];
const normalize = (s) =>
  s
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]+/gu, '')
    .trim();

function openModal({ founder, riddle, answers }) {
  titleEl.textContent = `${founder}: загадка`;
  textEl.textContent = riddle;

  currentAnswers = (answers || [])
    .map(normalize)
    .filter(Boolean);

  feedback.textContent = '';
  feedback.classList.remove('modal__feedback--ok', 'modal__feedback--bad');
  input.value = '';

  modal.classList.add('is-open');
  setTimeout(() => input.focus(), 0);

  document.addEventListener('keydown', onEsc, { once: true });
}

function onEsc(e) {
  if (e.key === 'Escape') closeModal();
}

function closeModal() {
  modal.classList.remove('is-open');
  feedback.textContent = '';
}

modal.addEventListener('click', (e) => {
  if (e.target.closest('[data-close-modal]')) {
    closeModal();
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = normalize(input.value);

  const isOk = currentAnswers.some(a => {
    return a === user || a.includes(user) || user.includes(a);
  });

  feedback.classList.remove('modal__feedback--ok', 'modal__feedback--bad');
  if (isOk) {
    feedback.textContent = 'Правильно! Дякуємо за відповідь';
    feedback.classList.add('modal__feedback--ok');
  } else {
    feedback.textContent = 'Неправильно. Спробуйте знову';
    feedback.classList.add('modal__feedback--bad');
    input.focus();
  }
});

const photos = document.querySelectorAll('.founder-photo');
let hoverTimer = null;

photos.forEach((img) => {
  const founder = img.dataset.founder || 'Засновник';
  const riddle = img.dataset.riddle || 'Моя загадка…';
  const answers = (img.dataset.answer || '')
    .split(',')
    .map(s => s.trim())
    .filter(Boolean);

  function show() {
    openModal({ founder, riddle, answers });
  }
  function scheduleShow() {
    clearTimeout(hoverTimer);
    hoverTimer = setTimeout(show, 180);
  }
  function cancelShow() { clearTimeout(hoverTimer); }

  img.addEventListener('mouseenter', scheduleShow);
  img.addEventListener('mouseleave', cancelShow);

  img.addEventListener('click', (e) => {
    e.preventDefault();
    show();
  });
});

// --------------------------------------------------------
function applyNightClass() {
  const h = new Date().getHours();
  const isNight = (h >= 21 || h < 6);

  if (isNight)
    document.body.classList.add('night');
  else
    document.body.classList.remove('night');
}

document.addEventListener('DOMContentLoaded', applyNightClass);