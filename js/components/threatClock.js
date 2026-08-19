window.SD_COMPONENTS = window.SD_COMPONENTS || {};

window.SD_COMPONENTS.createThreatClock = function(title, totalSegments) {
  const clock = document.createElement("div");
  clock.className = "threat-clock-item";
  clock.dataset.total = totalSegments;
  clock.dataset.filled = "0";

  let segmentsHtml = "";
  for (let i = 0; i < totalSegments; i++) {
    segmentsHtml += `<div class="clock-segment" data-idx="${i}"></div>`;
  }

  clock.innerHTML = `
    <div>
      <div class="clock-title">${title}</div>
      <div class="clock-segments">${segmentsHtml}</div>
    </div>
    <button class="btn-clock-del" title="Eliminar reloj">×</button>
  `;

  const segments = clock.querySelectorAll(".clock-segment");
  segments.forEach((seg, idx) => {
    seg.addEventListener("click", () => {
      let currentFilled = parseInt(clock.dataset.filled);
      let newFilled = (idx + 1 === currentFilled) ? idx : idx + 1;
      clock.dataset.filled = newFilled;
      
      segments.forEach((s, sIdx) => {
        if (sIdx < newFilled) s.classList.add("filled");
        else s.classList.remove("filled");
      });
    });
  });

  clock.querySelector(".btn-clock-del").addEventListener("click", () => clock.remove());
  return clock;
};