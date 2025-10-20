const details = document.getElementById("details");
const wrapper = details.closest(".field-textarea");

const TIP_TEXT =
  "Вдячні за Ваш час!<br>Конкретизуйте мету звернення, будь ласка";
let tipEl = null;

function ensureTip() {
  if (tipEl)
    return tipEl;

  tipEl = document.createElement("span");
  tipEl.className = "tooltip-js";
  tipEl.innerHTML = TIP_TEXT;

  wrapper.appendChild(tipEl);
  return tipEl;
}

function showTip() {
  const tip = ensureTip();
  tip.style.opacity = "1";
  tip.style.pointerEvents = "auto";
}

function hideTip() {
  if (!tipEl) return;
  tipEl.style.opacity = "0";
  tipEl.style.pointerEvents = "none";
}

details.addEventListener("mouseenter", showTip);
details.addEventListener("mouseleave", hideTip);

details.addEventListener("focus", showTip);
details.addEventListener("blur", hideTip);
