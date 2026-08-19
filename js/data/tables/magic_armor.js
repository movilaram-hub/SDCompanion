window.SD_DATA = window.SD_DATA || {};

window.SD_DATA.MAGIC_ARMOR = {
  d(sides) {
    return Math.floor(Math.random() * sides) + 1;
  },
  pick(arr) {
    if (!arr || arr.length === 0) return "";
    return arr[Math.floor(Math.random() * arr.length)];
  },

  // Tipo de Armadura (2d6) - 12: Mitrilo + volver a tirar
  types: [
    { min: 2, max: 5, name: "Cuero (Leather)" },
    { min: 6, max: 7, name: "Cota de malla (Chainmail)" },
    { min: 8, max: 9, name: "Escudo (Shield)" },
    { min: 10, max: 11, name: "Armadura de placas (Plate mail)" }
  ],

  // Rasgo de la Armadura (d20)
  features: [
    "Rostro demoníaco con cuernos",
    "Motivo de hojas de roble",
    "Tachonada con dientes de tiburón",
    "Escamas de dragón",
    "Púas de hueso o metal",
    "Runas arcanas tenues",
    "Placas de caparazón de tortuga",
    "Hecha de quitina de escorpión",
    "Metal bañado en oro / hilo de oro",
    "Chamuscada, con olor a quemado",
    "Escamas de pez de color blanco perla",
    "Supura sangre",
    "Adornada con hongos / cubierta de setas",
    "Sonido distante del océano",
    "Engarzada con cristales",
    "Cubierta de símbolos sagrados",
    "Exuda savia de árbol",
    "Bordes borrosos e indistintos",
    "Ojo de gato grande y dorado",
    "Cubierta de escarcha"
  ],

  // Beneficio de la Armadura (d12)
  benefits: [
    "Una vez al día, desvías un ataque a distancia que fuera a impactarte.",
    "Las pruebas para estabilizarte son fáciles (CD 9).",
    "No puedes ser derribado mientras estés consciente.",
    "Las criaturas no detectadas no tienen ventaja al atacarte.",
    "Conoces el idioma diabólico (Diabolic) y eres inmune al fuego, la lava y el magma.",
    "Eres inmune a las maldiciones de un objeto a tu elección.",
    "Una vez al día, obtienes ventaja en todos los ataques durante 3 asaltos.",
    "Tienes un bonificador de +4 en tus contadores de muerte (death timers).",
    "Obtienes inmunidad a un veneno tras haber sufrido sus efectos una vez.",
    "Conoces el idioma celestial (Celestial) y puedes volar durante 3 asaltos una vez al día.",
    "Los impactos críticos contra ti se tratan como impactos normales.",
    "Ignoras cualquier daño que recibas de 3 puntos o menos."
  ],

  // Maldición de la Armadura (d12)
  curses: [
    "Sufres 2d10 de daño si te quitas esta armadura.",
    "Tu grupo no puede sumar bonificadores de CAR a las tiradas de reacción.",
    "Las monturas te temen y no te permitirán montarlas.",
    "Tirada de SAB a CD 15 en el primer asalto de combate o atacas a la criatura más cercana.",
    "Sufres el doble de daño por armas contundentes (blunt/bludgeoning).",
    "La armadura ocupa 5 espacios de equipo (gear slots) y es extremadamente ruidosa y tosca.",
    "Los ataques a distancia contra ti tienen ventaja.",
    "Trata un 1 natural en una tirada de ataque contra ti como un impacto crítico.",
    "Los conjuros beneficiosos dirigidos a ti son difíciles de lanzar (CD 15).",
    "Tienes desventaja en las pruebas de Destreza.",
    "Hay una probabilidad secreta de 1 en 6 de que cada PNJ aliado te traicione.",
    "Sufres el doble de daño por armas de plata / plateadas."
  ],

  rollBonus() {
    const total = this.d(6) + this.d(6);
    if (total <= 5) return { bonus: "+0", roll: total };
    if (total <= 8) return { bonus: "+1", roll: total };
    if (total <= 11) return { bonus: "+2", roll: total };
    return { bonus: "+3", roll: total };
  },

  rollArmorType() {
    let isMithral = false;
    let roll = this.d(6) + this.d(6);
    let rollsHistory = [`2d6:${roll}`];

    if (roll === 12) {
      isMithral = true;
      roll = Math.floor(Math.random() * 10) + 2; // Reroll 2-11
      rollsHistory.push(`Mitrilo -> Re-roll 2d6:${roll}`);
    }

    const typeObj = this.types.find(t => roll >= t.min && roll <= t.max) || this.types[0];
    const finalName = isMithral ? `${typeObj.name} de Mitrilo` : typeObj.name;

    return { name: finalName, isMithral: isMithral, rolls: rollsHistory.join(", ") };
  },

  generateArmor(forceBonus = null, forceBenefitsCount = 1, forceCursesCount = 0) {
    const armorBase = this.rollArmorType();
    const bonusData = forceBonus ? { bonus: forceBonus, roll: "-" } : this.rollBonus();
    const featureRoll = this.d(20);
    const feature = this.features[featureRoll - 1];

    const chosenBenefits = [];
    const bRolls = [];
    for (let i = 0; i < forceBenefitsCount; i++) {
      const r = this.d(12);
      bRolls.push(r);
      chosenBenefits.push(this.benefits[r - 1]);
    }

    const chosenCurses = [];
    const cRolls = [];
    for (let i = 0; i < forceCursesCount; i++) {
      const r = this.d(12);
      cRolls.push(r);
      chosenCurses.push(this.curses[r - 1]);
    }

    const nombreFinal = bonusData.bonus === "+0" 
      ? `${armorBase.name} Mágica` 
      : `${armorBase.name} ${bonusData.bonus}`;

    return {
      nombre: nombreFinal,
      tipo: armorBase.name,
      bonificador: bonusData.bonus,
      rasgo: feature,
      beneficios: chosenBenefits,
      maldiciones: chosenCurses.length > 0 ? chosenCurses : ["Ninguna"],
      rolls: `Tipo: [${armorBase.rolls}], Bono: 2d6:${bonusData.roll}, Rasgo: d20:${featureRoll}`
    };
  }
};