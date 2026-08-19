window.SD_DATA = window.SD_DATA || {};
window.SD_DATA.ENCOUNTER_TABLES = window.SD_DATA.ENCOUNTER_TABLES || {};

window.SD_DATA.ENCOUNTERS = {
  d: function(sides) {
    return Math.floor(Math.random() * sides) + 1;
  },

  pick: function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  },

  // 1. DISTANCIA (1d6)
  getDistancia: function(roll) {
    if (roll === 1) return { tipo: "Cerrada (Close)", desc: "A 5 pies / cuerpo a cuerpo." };
    if (roll <= 4) return { tipo: "Cercana (Near)", desc: "Hasta 30 pies (1 movimiento)." };
    return { tipo: "Lejana (Far)", desc: "Más de 30 pies (límite de luz)." };
  },

  // 2. ACTIVIDAD (2d6)
  getActividad: function(roll) {
    if (roll <= 4) return "Cazando / Rastreando (Hunting) - Alerta";
    if (roll <= 6) return "Comiendo / Devorando (Eating) - Distraída";
    if (roll <= 8) return "Construyendo / Anidando (Building) - Ocupada";
    if (roll <= 10) return "Socializando / Jugando (Playing) - Desprevenida";
    if (roll === 11) return "Haciendo guardia (Guarding) - Alerta máxima";
    return "Durmiendo / Descansando (Sleeping) - Vulnerable";
  },

  // 3. REACCIÓN (2d6 + CHA)
  getReaccion: function(total) {
    if (total <= 6) return { actitud: "Hostil (Hostile)", desc: "Ataca de inmediato o embosca." };
    if (total <= 8) return { actitud: "Suspicaz (Suspicious)", desc: "Cautelosa, tensa, a la defensiva." };
    if (total === 9) return { actitud: "Neutral (Neutral)", desc: "Indiferente si no la molestan." };
    if (total <= 11) return { actitud: "Curiosa (Curious)", desc: "Dispuesta a observar o negociar." };
    return { actitud: "Amistosa (Friendly)", desc: "Acogedora o dispuesta a colaborar." };
  },

  // 4. TESORO (50%)
  getTesoroChance: function(tierLevel) {
    if (this.d(2) === 1) return "Ninguno (No porta objetos de valor)";
    var tier = "0–3";
    if (tierLevel >= 10) tier = "10+";
    else if (tierLevel >= 7) tier = "7–9";
    else if (tierLevel >= 4) tier = "4–6";
    return `💰 <strong>¡Porta Tesoro!</strong> Consultar tabla: <strong>Tesoro ${tier}</strong>`;
  },

  // 5. MOTOR RESOLUTOR GENÉRICO D100
  resolveRoll: function(tableKey, roll) {
    var tableObj = window.SD_DATA.ENCOUNTER_TABLES[tableKey];
    if (!tableObj) return { desc: "Encuentro desconocido", nv: 1, esMonstruo: true };

    for (var i = 0; i < tableObj.entries.length; i++) {
      var entry = tableObj.entries[i];
      if (roll >= entry.min && roll <= entry.max) {
        if (entry.isDouble) {
          var rA = this.d(entry.maxRoll || 97);
          var rB = this.d(entry.maxRoll || 97);
          var resA = this.resolveRoll(tableKey, rA);
          var resB = this.resolveRoll(tableKey, rB);
          return {
            desc: `⚡ <strong>¡Doble Encuentro!</strong><br>1) [${rA}] ${resA.desc}<br>2) [${rB}] ${resB.desc}`,
            nv: Math.max(resA.nv, resB.nv),
            esMonstruo: true
          };
        }
        return entry;
      }
    }
    return tableObj.entries[0];
  },

  // 6. DISPARADOR PRINCIPAL
  generateEncounter: function(tableKey, chaMod) {
    var tableObj = window.SD_DATA.ENCOUNTER_TABLES[tableKey];
    var rollD100 = this.d(100);
    var res = this.resolveRoll(tableKey, rollD100);

    var dDist = this.d(6);
    var dAct = this.d(6) + this.d(6);
    var dReacBase = this.d(6) + this.d(6);
    var modCarisma = parseInt(chaMod) || 0;
    var dReacTotal = dReacBase + modCarisma;

    var distInfo = this.getDistancia(dDist);
    var actInfo = this.getActividad(dAct);
    var reacInfo = this.getReaccion(dReacTotal);
    var tesoroInfo = res.esMonstruo ? this.getTesoroChance(res.nv) : "No aplicable (Entorno / Objeto)";

    return {
      titulo: `ENCUENTRO // ${tableObj ? tableObj.name.toUpperCase() : tableKey.toUpperCase()}`,
      criatura: res.desc,
      nivel: `Nivel ${res.nv}`,
      distancia: `${distInfo.tipo} (${distInfo.desc})`,
      actividad: res.esMonstruo ? actInfo : "Peligro ambiental / Estático",
      actitud: res.esMonstruo ? `${reacInfo.actitud} — ${reacInfo.desc}` : "Inanimado / Pasivo",
      raw2d6: dReacBase,
      totalReac: dReacTotal,
      tesoro: tesoroInfo,
      rolls: `d100:[${rollD100}] | Distancia:[${dDist}] | Actividad:[${dAct}] | Reacción:[${dReacBase}] + CHA(${modCarisma}) = [${dReacTotal}]`
    };
  }
};