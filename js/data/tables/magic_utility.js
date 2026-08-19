window.SD_DATA = window.SD_DATA || {};

window.SD_DATA.MAGIC_UTILITY = {
  d(sides) {
    return Math.floor(Math.random() * sides) + 1;
  },
  pick(arr) {
    if (!arr || arr.length === 0) return "";
    return arr[Math.floor(Math.random() * arr.length)];
  },

  // Tipo de Utilidad (d20)
  types: [
    "Broche (Brooch)",
    "Anillo (Ring)",
    "Botas (Boots)",
    "Capa (Cloak)",
    "Amuleto (Amulet)",
    "Frasco / Petaca (Flask)",
    "Tomo (Tome)",
    "Diadema / Tiara (Circlet)",
    "Parche para el ojo (Eyepatch)",
    "Guanteletes (Gauntlets)",
    "Símbolo sagrado (Holy symbol)",
    "Sombrero (Hat)",
    "Copa / Cáliz (Goblet)",
    "Yelmo (Helm)",
    "Estatuilla (Statuette)",
    "Gafas protectoras (Goggles)",
    "Bolsa (Bag)",
    "Roca / Piedra (Rock)",
    "Sobretodo / Tabardo (Surcoat)",
    "Máscara (Mask)"
  ],

  // Rasgo de Utilidad (d20)
  features: [
    "Con forma de cuervo",
    "Iridiscente",
    "Púas y espinas crueles",
    "Hecho/a a partir de una rana grande",
    "Engarzado/a con gemas",
    "Hilo de oro / herrajes de oro",
    "Hecho/a de piel de basilisco",
    "Poseído/a por un espíritu",
    "Hecho/a de humo con forma sólida",
    "Cubierto/a de pequeñas espinas",
    "Hecho/a con plumas raras",
    "Tiene alas diminutas",
    "Cambia lentamente de color",
    "Con forma de murciélago",
    "Herrajes de plata deslustrada",
    "Hecho/a de seda de araña",
    "Emite un zumbido en tonos suaves y dulces",
    "Sacudida de dolor al primer contacto",
    "Palpita como un corazón",
    "Deja una estela de niebla tenue"
  ],

  // Beneficio de Utilidad (d12)
  benefits: [
    "No puedes ser escudriñado ni detectado mágicamente.",
    "Se conecta a un bolsillo interdimensional con 5 espacios de equipo (gear slots).",
    "Una característica se convierte en 18 (+4) mientras usas/vistes el objeto.",
    "Una vez al día, te teletransportas a distancia cercana (near).",
    "Los conjuros dañinos dirigidos a ti tienen dificultad CD 15 para ser lanzados.",
    "Eres inmune a, 1d4: 1. fuego, 2. frío, 3. electricidad, 4. veneno.",
    "Detectas puertas secretas cuando se encuentran a distancia corta / a tu alcance (close).",
    "Puedes ver criaturas invisibles e incorpóreas.",
    "Tu movimiento no se ve obstaculizado por ningún tipo de terreno.",
    "Puedes aguantar la respiración durante 1 hora.",
    "No necesitas comer ni beber para sobrevivir.",
    "Puedes caminar sobre superficies no sólidas durante 2 asaltos seguidos cada vez."
  ],

  // Maldición de Utilidad (d12)
  curses: [
    "Pudre lentamente todos los demás objetos no mágicos que lo toquen.",
    "Inflige 1d4 de daño y deja ampollas cada vez que se usa.",
    "El objeto atrae el mal tiempo a su ubicación.",
    "No puedes ser curado mediante magia; solo mediante descanso.",
    "Resuena estrepitosamente como un gong cada vez que el portador mata a una criatura.",
    "El objeto atrae a todos los no muertos que se encuentren a distancia lejana (far).",
    "Pierde temporalmente su magia si se sumerge o empapa en agua.",
    "Tienes desventaja en las pruebas de Constitución.",
    "Sientes el impulso irrefrenable de prender fuego a cualquier objeto de pergamino o papel.",
    "Debes beber sangre una vez al día o sufres 1d8 de daño.",
    "El objeto debe devorar 1d10 po al día o pierde su magia hasta ser alimentado.",
    "El objeto desprende un hedor espantoso que dificulta todas tus pruebas de Carisma (hard)."
  ],

  generateUtilityItem(forceBenefitsCount = 1, forceCursesCount = 0) {
    const dType = this.d(20);
    const baseType = this.types[dType - 1];
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

    return {
      nombre: `${baseType} Mágico/a`,
      tipo: baseType,
      bonificador: "Especial",
      rasgo: feature,
      beneficios: chosenBenefits,
      maldiciones: chosenCurses.length > 0 ? chosenCurses : ["Ninguna"],
      rolls: `Tipo: d20:${dType}, Rasgo: d20:${featureRoll}`
    };
  }
};