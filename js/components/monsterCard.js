window.SD_COMPONENTS = window.SD_COMPONENTS || {};

window.SD_COMPONENTS.renderMonsterCard = function(m, isPinned = false) {
  const card = document.createElement("div");
  card.className = "tactical-card monster-card";
  card.dataset.category = "combate";

  const traitsHtml = m.traits ? m.traits.map(t => 
    `<div class="monster-traits"><strong>${t.name}:</strong> ${t.text}</div>`
  ).join("") : "";

  card.innerHTML = `
    <div class="card-header">
      <span class="card-type">BESTIARIO // NV ${m.nv} [${m.al}]</span>
      <button class="btn-card-del" title="Cerrar">×</button>
    </div>
    <div class="card-body">
      <div class="card-title" contenteditable="true">${m.name}</div>
      <p style="font-size: 0.75rem; color: var(--text-muted);">${m.desc}</p>
      
      <div class="hp-tracker">
        <span class="hp-label">PG ACTUAL:</span>
        <div class="hp-controls">
          <button class="hp-btn btn-hp-minus">-</button>
          <input type="number" class="hp-input" value="${m.pg}" data-max="${m.pg}">
          <button class="hp-btn btn-hp-plus">+</button>
        </div>
        <span style="font-size: 0.7rem; color: var(--text-muted);">/ ${m.pg}</span>
      </div>

      <div class="stat-grid">
        <div class="stat-item"><span>CA</span><strong>${m.ca}</strong></div>
        <div class="stat-item"><span>MV</span><strong>${m.mv}</strong></div>
        <div class="stat-item"><span>FUE</span><strong>${m.f}</strong></div>
        <div class="stat-item"><span>DES</span><strong>${m.d}</strong></div>
        <div class="stat-item"><span>CON</span><strong>${m.c}</strong></div>
        <div class="stat-item"><span>INT</span><strong>${m.i}</strong></div>
        <div class="stat-item"><span>SAB</span><strong>${m.s}</strong></div>
        <div class="stat-item"><span>CAR</span><strong>${m.ca_mod}</strong></div>
      </div>

      <div class="card-field">
        <label>Ataques</label>
        <div class="field-value" contenteditable="true">${m.atq}</div>
      </div>

      <div class="card-field">
        <label>Rasgos Especiales</label>
        <div>${traitsHtml}</div>
      </div>
    </div>
    ${!isPinned ? `
    <div class="card-footer">
      <button class="btn btn-pin">📌 Indexar a Pantalla de GM</button>
    </div>` : ""}
  `;

  // Controladores de Vida
  const hpInput = card.querySelector(".hp-input");
  const btnMinus = card.querySelector(".btn-hp-minus");
  const btnPlus = card.querySelector(".btn-hp-plus");

  btnMinus.addEventListener("click", () => {
    let val = parseInt(hpInput.value) || 0;
    if (val > 0) hpInput.value = val - 1;
    checkHpStatus();
  });

  btnPlus.addEventListener("click", () => {
    let val = parseInt(hpInput.value) || 0;
    hpInput.value = val + 1;
    checkHpStatus();
  });

  function checkHpStatus() {
    const val = parseInt(hpInput.value) || 0;
    if (val <= 0) {
      card.style.opacity = "0.45";
      card.style.filter = "grayscale(1)";
    } else {
      card.style.opacity = "1";
      card.style.filter = "none";
    }
  }

  card.querySelector(".btn-card-del").addEventListener("click", () => card.remove());
  return card;
};