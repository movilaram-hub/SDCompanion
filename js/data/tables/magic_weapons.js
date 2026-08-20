window.SD_DATA = window.SD_DATA || {};

window.SD_DATA.MAGIC_WEAPONS = {
  d(sides) {
    return Math.floor(Math.random() * sides) + 1;
  },
  pick(arr) {
    if (!arr || arr.length === 0) return "";
    return arr[Math.floor(Math.random() * arr.length)];
  },

  // Tipo de Arma (d20)
  types: [
    { min: 1, max: 1, name: "Flechas (2d6) (Arrows)" },
    { min: 2, max: 3, name: "Espada bastarda (Bastard sword)" },
    { min: 4, max: 4, name: "Garrote / Clava (Club)" },
    { min: 5, max: 5, name: "Ballesta (Crossbow)" },
    { min: 6, max: 6, name: "Virotes de ballesta (2d6) (Crossbow bolts)" },
    { min: 7, max: 8, name: "Daga (Dagger)" },
    { min: 9, max: 9, name: "Gran hacha (Greataxe)" },
    { min: 10, max: 10, name: "Mandoble / Espadón (Greatsword)" },
    { min: 11, max: 11, name: "Jabalina (Javelin)" },
    { min: 12, max: 12, name: "Arco largo (Longbow)" },
    { min: 13, max: 14, name: "Espada larga (Longsword)" },
    { min: 15, max: 15, name: "Maza (Mace)" },
    { min: 16, max: 16, name: "Arco corto (Shortbow)" },
    { min: 17, max: 18, name: "Espada corta (Shortsword)" },
    { min: 19, max: 19, name: "Bastón (Staff)" },
    { min: 20, max: 20, name: "Martillo de guerra (Warhammer)" }
  ],

  // Rasgo del Arma (d20)
  features: [
    "Deja una estela de chispas brillantes",
    "Forjada en metal estelar",
    "Oxidada y mellada",
    "Gema incrustada en el pomo / mango",
    "Gotea icor verde",
    "Con motivo lunar y bañada en plata (silvered)",
    "Galaxias arremolinadas en su superficie",
    "De madera férrea (Ironwood)",
    "Grabada con runas",
    "Aura fantasmal tenue",
    "Con incrustaciones de oro",
    "Deja una estela de incienso",
    "Engarzada con piedras preciosas",
    "Chispas que danzan por su superficie",
    "Con forma de animal",
    "Tallada en granito",
    "Guarnición / herrajes de hueso de dragón",
    "Susurra en un idioma",
    "Gotea agua de mar",
    "Transforma la sangre en pétalos de rosa"
  ],

  // Beneficio del Arma (d12)
  benefits: [
    "Corta o aplasta cualquier material.",
    "Una vez al día, se enciende en llamas durante 5 asaltos e inflige 1d4 de daño adicional.",
    "Prueba de CAR CD 15 para dar órdenes a un animal salvaje a distancia lejana (far).",
    "Decapita al enemigo con un impacto crítico.",
    "Al impactar a una criatura, averiguas su Nombre Verdadero.",
    "Dispara un rayo de energía a distancia cercana (near) con DES, infligiendo 1d6 de daño.",
    "Una vez al día, desvías un ataque cuerpo a cuerpo que fuera a impactarte.",
    "Recuperas 1d6 puntos de golpe cuando abates a una criatura.",
    "Tienes ventaja en las tiradas de iniciativa.",
    "Tiene la propiedad de arrojadiza, alcance a distancia cercana (near), y regresa a ti.",
    "Doble de daño contra, 1d4: 1-2. no muertos, 3. demonios, 4. dragones.",
    "Vuelve a tirar los 1 naturales una vez por tirada al atacar con esta arma."
  ],

  // Maldición del Arma (d12)
  curses: [
    "No puedes ver a, 1d4: 1. no muertos, 2. demonios, 3. serpientes, 4. arañas.",
    "Sientes el impulso irrefrenable de tragarte todas las gemas a primera vista.",
    "Quema un muñeco de paja a diario o el arma perderá su magia temporalmente.",
    "Cualquier fuente de luz que sostengas se apaga de inmediato.",
    "Debes alabar a un dios en voz alta cada vez que veas su símbolo.",
    "Las criaturas venenosas siempre te eligen a ti como objetivo de sus ataques.",
    "Te transformas en rata todos los días a medianoche durante una hora.",
    "Tus pruebas para nadar son siempre extremas (CD 18).",
    "El contacto con el oro te quema.",
    "Baña el arma en sangre a diario o perderá su magia temporalmente.",
    "No puedes llevar armadura mientras empuñes esta arma.",
    "El arma puede poseerte si gana una prueba enfrentada de CAR (+2)."
  ],

  rollBonus() {
    const total = this.d(6) + this.d(6);
    if (total <= 3) return { bonus: "+0", roll: total };
    if (total <= 9) return { bonus: "+1", roll: total };
    if (total <= 11) return { bonus: "+2", roll: total };
    return { bonus: "+3", roll: total };
  },

  generateWeapon(forceBonus = null, forceBenefitsCount = 1, forceCursesCount = 0) {
    const dType = this.d(20);
    const typeObj = this.types.find(t => dType >= t.min && dType <= t.max) || this.types[0];
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
      ? `${typeObj.name} Mágica` 
      : `${typeObj.name} ${bonusData.bonus}`;

    return {
      nombre: nombreFinal,
      tipo: typeObj.name,
      bonificador: bonusData.bonus,
      rasgo: feature,
      beneficios: chosenBenefits,
      maldiciones: chosenCurses.length > 0 ? chosenCurses : ["Ninguna"],
      rolls: `Tipo: d20:${dType}, Bono: 2d6:${bonusData.roll}, Rasgo: d20:${featureRoll}`
    };
  }
};
