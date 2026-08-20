window.SD_COMPONENTS = window.SD_COMPONENTS || {};

window.SD_COMPONENTS.createThreatClock = function(title, description, completionMessage, totalSegments, type) {
  const clockType = type === "progress" ? "progress" : "danger";
  const clock = document.createElement("div");
  clock.className = "threat-clock-item clock-" + clockType;
  clock.dataset.total = totalSegments;
  clock.dataset.filled = "0";
  clock.dataset.type = clockType;
  clock.dataset.title = title || "";
  clock.dataset.completionMessage = completionMessage || "";

  const safeText = function(value) {
    const element = document.createElement("div");
    element.textContent = value || "";
    return element.innerHTML;
  };

  let segmentsHtml = "";
  for (let i = 0; i < totalSegments; i++) {
    segmentsHtml += `<div class="clock-segment" data-idx="${i}"></div>`;
  }

  clock.innerHTML = `
    <div class="clock-main">
      <div class="clock-heading">
        <div>
          <div class="clock-type">${clockType === "progress" ? "PROGRESO" : "PELIGRO"}</div>
          <div class="clock-title">${safeText(title)}</div>
        </div>
        <button class="btn-clock-del" title="Eliminar reloj" aria-label="Eliminar reloj">×</button>
      </div>
      <p class="clock-description">${safeText(description)}</p>
      <div class="clock-progress-meta">
        <span>Estado del contador</span>
        <strong class="clock-count">0 / ${totalSegments}</strong>
      </div>
      <div class="clock-segments">${segmentsHtml}</div>
    </div>
  `;

  window.SD_COMPONENTS.bindThreatClock(clock);
  return clock;
};

window.SD_COMPONENTS.bindThreatClock = function(clock) {
  if (!clock || clock._clockBound) return;
  clock._clockBound = true;

  const segments = clock.querySelectorAll(".clock-segment");
  const totalSegments = parseInt(clock.dataset.total, 10) || segments.length;
  const count = clock.querySelector(".clock-count");

  const updateClock = function(filled, shouldAnnounce) {
    const normalizedFilled = Math.max(0, Math.min(filled, totalSegments));
    const wasComplete = parseInt(clock.dataset.filled, 10) === totalSegments;
    clock.dataset.filled = String(normalizedFilled);

    segments.forEach((segment, segmentIndex) => {
      segment.classList.toggle("filled", segmentIndex < normalizedFilled);
    });

    if (count) count.textContent = normalizedFilled + " / " + totalSegments;
    const isComplete = normalizedFilled === totalSegments;
    clock.classList.toggle("is-complete", isComplete);

    if (shouldAnnounce && isComplete && !wasComplete) {
      document.dispatchEvent(new CustomEvent("clock:completed", {
        detail: {
          type: clock.dataset.type === "progress" ? "progress" : "danger",
          title: clock.dataset.title || (clock.querySelector(".clock-title") || {}).textContent || "Reloj completado",
          message: clock.dataset.completionMessage || ""
        }
      }));
    }
  };

  segments.forEach((seg, idx) => {
    seg.addEventListener("click", () => {
      const currentFilled = parseInt(clock.dataset.filled, 10) || 0;
      const newFilled = (idx + 1 === currentFilled) ? idx : idx + 1;
      updateClock(newFilled, true);
    });
  });

  const deleteButton = clock.querySelector(".btn-clock-del");
  if (deleteButton) deleteButton.addEventListener("click", () => clock.remove());

  updateClock(parseInt(clock.dataset.filled, 10) || 0, false);
};