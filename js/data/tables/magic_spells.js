window.SD_DATA = window.SD_DATA || {};

window.SD_DATA.MAGIC_SPELLS = {
  d(sides) {
    return Math.floor(Math.random() * sides) + 1;
  },
  pick(arr) {
    if (!arr || arr.length === 0) return "";
    return arr[Math.floor(Math.random() * arr.length)];
  },

  // ==========================================
  // 1. RASGOS DE PERGAMINOS Y VARITAS (d8)
  // ==========================================
  scrollFeatures: [
    "Marcado al fuego en cuero",
    "Grabado en lámina de cobre",
    "Papiro descolorido",
    "Rollo de pergamino manchado",
    "Tallado en hueso",
    "Cincelado en lajas de piedra",
    "Grabado en cristal / vidrio",
    "Tatuado en piel de dragón"
  ],

  wandFeatures: [
    "Tallada en hueso",
    "Ojo parpadeante en el mango",
    "Metal estelar pulido y elegante",
    "Madera pulida",
    "Obsidiana con puntas de marfil",
    "Chispas eléctricas",
    "Cristal dentado / irregular",
    "Hecha de calaveras diminutas"
  ],

  // ==========================================
  // 2. CATÁLOGO DE CONJUROS POR NIVEL (TIER 1–5)
  // ==========================================
  spellsByTier: {
    1: [
      "Alarma (Alarm)",
      "Manos ardientes (Burning hands)",
      "Hechizar persona (Charm person)",
      "Detectar magia (Detect magic)",
      "Caída de pluma (Feather fall)",
      "Disco flotante (Floating disk)",
      "Retener portal (Hold portal)",
      "Luz (Light)",
      "Armadura de mago (Mage armor)",
      "Proyectil mágico (Magic missile)",
      "Protección contra el mal (Protection from evil)",
      "Sueño (Sleep)"
    ],
    2: [
      "Flecha ácida (Acid arrow)",
      "Alterar el propio aspecto (Alter self)",
      "Detectar pensamientos (Detect thoughts)",
      "Objeto fijo (Fixed object)",
      "Retener persona (Hold person)",
      "Invisibilidad (Invisibility)",
      "Abrir (Knock)",
      "Levitar (Levitate)",
      "Imagen múltiple (Mirror image)",
      "Paso brumoso (Misty step)",
      "Silencio (Silence)",
      "Telaraña (Web)"
    ],
    3: [
      "Animar a los muertos (Animate dead)",
      "Disipar magia (Dispel magic)",
      "Fabricar (Fabricate)",
      "Bola de fuego (Fireball)",
      "Volar (Fly)",
      "Forma gaseosa (Gaseous form)",
      "Ilusión (Illusion)",
      "Rayo (Lightning bolt)",
      "Círculo mágico (Magic circle)",
      "Protección contra la energía (Protection from energy)",
      "Recado (Sending)",
      "Hablar con los muertos (Speak with dead)"
    ],
    4: [
      "Ojo arcano (Arcane eye)",
      "Nube aniquiladora (Cloudkill)",
      "Confusión (Confusion)",
      "Controlar el agua (Control water)",
      "Puerta dimensional (Dimension door)",
      "Adivinación (Divination)",
      "Pasar a través de la pared (Passwall)",
      "Polimorfar (Polymorph)",
      "Esfera elástica (Resilient sphere)",
      "Piel pétrea (Stoneskin)",
      "Telequinesis (Telekinesis)",
      "Muro de fuerza (Wall of force)"
    ],
    5: [
      "Caparazón antimagia (Antimagic shell)",
      "Crear no muerto (Create undead)",
      "Desintegrar (Disintegrate)",
      "Retener monstruo (Hold monster)",
      "Desplazamiento de plano (Plane shift)",
      "Palabra de poder mortal (Power word kill)",
      "Orbe prismático (Prismatic orb)",
      "Escudriñar (Scrying)",
      "Cambio de forma (Shapechange)",
      "Invocar extraplanar (Summon extraplanar)",
      "Teletransporte (Teleport)",
      "Deseo (Wish)"
    ]
  },

  // ==========================================
  // 3. TIRADAS DE NIVEL DE CONJURO (2d6)
  // ==========================================
  rollSpellTier() {
    const total = this.d(6) + this.d(6);
    if (total <= 5) return { tier: 1, roll: total };
    if (total <= 7) return { tier: 2, roll: total };
    if (total <= 9) return { tier: 3, roll: total };
    if (total <= 11) return { tier: 4, roll: total };
    return { tier: 5, roll: total };
  },

  // Obtiene un conjuro al azar de un Tier específico
  getRandomSpell(tier = 1) {
    const list = this.spellsByTier[tier] || this.spellsByTier[1];
    const roll = this.d(12);
    return {
      spell: list[roll - 1],
      roll: roll
    };
  },

  // Resuelve la tabla de origen para Maldiciones/Beneficios de Varita (2d6)
  rollWandModifierSource() {
    const total = this.d(6) + this.d(6);
    if (total <= 6) return { category: "armor", label: "Armadura", roll: total };
    if (total <= 8) return { category: "potion", label: "Poción", roll: total };
    if (total <= 11) return { category: "utility", label: "Utilidad", roll: total };
    return { category: "weapon", label: "Arma", roll: total };
  },

  // ==========================================
  // 4. MÉTODOS GENERADORES
  // ==========================================

  // Generador de Pergamino de Conjuro
  generateScroll(forceTier = null) {
    const tierData = forceTier ? { tier: forceTier, roll: "-" } : this.rollSpellTier();
    const spellData = this.getRandomSpell(tierData.tier);
    const featureRoll = this.d(8);
    const feature = this.scrollFeatures[featureRoll - 1];

    return {
      nombre: `Pergamino: ${spellData.spell}`,
      tipo: "Pergamino (Scroll / Consumible)",
      nivel: `Nivel ${tierData.tier} (Tier ${tierData.tier})`,
      conjuro: spellData.spell,
      rasgo: feature,
      beneficios: [`Permite lanzar el conjuro ${spellData.spell} una sola vez.`],
      maldiciones: ["Consumible de un solo uso."],
      rolls: `Nivel: 2d6:${tierData.roll}, Conjuro: d12:${spellData.roll}, Rasgo: d8:${featureRoll}`
    };
  },

  // Generador de Varita Mágica
  generateWand(forceTier = null, forceCursesCount = 0) {
    const tierData = forceTier ? { tier: forceTier, roll: "-" } : this.rollSpellTier();
    const spellData = this.getRandomSpell(tierData.tier);
    const featureRoll = this.d(8);
    const feature = this.wandFeatures[featureRoll - 1];

    const chosenCurses = [];
    const rollsExtra = [];

    // Si tiene maldiciones, las resuelve consultando las tablas de origen (2d6)
    if (forceCursesCount > 0) {
      for (let i = 0; i < forceCursesCount; i++) {
        const source = this.rollWandModifierSource();
        rollsExtra.push(`Origen Maldición: 2d6:${source.roll} (${source.label})`);

        let curseText = "";
        const r12 = this.d(12);

        if (source.category === "armor" && window.SD_DATA.MAGIC_ARMOR) {
          curseText = window.SD_DATA.MAGIC_ARMOR.curses[r12 - 1];
        } else if (source.category === "potion" && window.SD_DATA.MAGIC_POTIONS) {
          const entry = window.SD_DATA.MAGIC_POTIONS.curseEntries[r12 - 1];
          curseText = entry.resolve(this.d);
        } else if (source.category === "weapon" && window.SD_DATA.MAGIC_WEAPONS) {
          curseText = window.SD_DATA.MAGIC_WEAPONS.curses[r12 - 1];
        } else if (window.SD_DATA.MAGIC_UTILITY) {
          curseText = window.SD_DATA.MAGIC_UTILITY.curses[r12 - 1];
        } else {
          curseText = "Maldición desconocida.";
        }

        chosenCurses.push(curseText);
      }
    }

    return {
      nombre: `Varita de ${spellData.spell}`,
      tipo: "Varita (Wand)",
      nivel: `Nivel ${tierData.tier} (Tier ${tierData.tier})`,
      conjuro: spellData.spell,
      rasgo: feature,
      beneficios: [`Permite canalizar el conjuro ${spellData.spell}.`],
      maldiciones: chosenCurses.length > 0 ? chosenCurses : ["Ninguna"],
      rolls: `Nivel: 2d6:${tierData.roll}, Conjuro: d12:${spellData.roll}, Rasgo: d8:${featureRoll}${rollsExtra.length ? `, ${rollsExtra.join(", ")}` : ""}`
    };
  }
};