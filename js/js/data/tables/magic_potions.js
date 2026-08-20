window.SD_DATA = window.SD_DATA || {};

window.SD_DATA.MAGIC_POTIONS = {
  d(sides) {
    return Math.floor(Math.random() * sides) + 1;
  },
  pick(arr) {
    if (!arr || arr.length === 0) return "";
    return arr[Math.floor(Math.random() * arr.length)];
  },

  // ==========================================
  // 1. RASGOS VISUALES / SENSORIALES (3 x d8)
  // ==========================================
  featuresCol1: [
    "Picante",
    "Clara como el agua",
    "Azul profundo",
    "Olor cítrico",
    "Sulfuroso",
    "Con gas / Efervescente",
    "Gélido",
    "Rojo sangre"
  ],

  featuresCol2: [
    "Araña en vinagre en su interior",
    "Vapores verdes",
    "Estrellas y luna diminutas",
    "Copos/virutas de oro en el líquido",
    "Vórtice arremolinado",
    "Silbido tenue",
    "Tintinea y tiembla",
    "Ojo en su interior"
  ],

  featuresCol3: [
    "Burbujeante",
    "Franjas/vetas moradas",
    "Llamas en la superficie",
    "Olor floral",
    "Calavera en la botella",
    "Caliente / Cálido",
    "Molar grande en su interior",
    "Destellos rosas en estrella"
  ],

  // ==========================================
  // 2. BENEFICIOS DE LA POCIÓN (d12)
  // ==========================================
  benefitEntries: [
    {
      id: 1,
      name: "Inmunidad Elemental",
      resolve: (d) => {
        const sub = d(4);
        const types = ["Fuego", "Frío", "Electricidad", "Veneno"];
        return `Inmune durante 5 asaltos a: ${types[sub - 1]} (d4:${sub}).`;
      }
    },
    {
      id: 2,
      name: "Curación",
      resolve: (d) => {
        const sub = d(4);
        const amounts = ["1d4 PG", "2d6 PG", "3d8 PG", "4d10 PG"];
        return `Cura ${amounts[sub - 1]} (d4:${sub}).`;
      }
    },
    {
      id: 3,
      name: "Telepatía",
      resolve: () => "Lee la mente de todas las criaturas a distancia cercana (near) durante 1 hora."
    },
    {
      id: 4,
      name: "Vuelo",
      resolve: () => "Vuela a distancia cercana (near) durante 5 asaltos."
    },
    {
      id: 5,
      name: "Velocidad Asombrosa",
      resolve: () => "Durante 5 asaltos, muévete a distancia lejana (far) en tu turno y realiza una acción igualmente."
    },
    {
      id: 6,
      name: "Invisibilidad",
      resolve: () => "Te vuelves invisible durante 5 asaltos."
    },
    {
      id: 7,
      name: "Adaptación Acuática",
      resolve: () => "Respira bajo el agua y conoce el idioma merrano (Merran) durante 1 hora."
    },
    {
      id: 8,
      name: "Poderío Físico",
      resolve: () => "Una característica se convierte en 18 (+4) durante 5 asaltos."
    },
    {
      id: 9,
      name: "Forma Gaseosa",
      resolve: () => "Conviértete en un gas morado volador durante 5 asaltos."
    },
    {
      id: 10,
      name: "Panacea",
      resolve: () => "Cura cualquier enfermedad o aflicción que afecte al bebedor."
    },
    {
      id: 11,
      name: "Habla Animal",
      resolve: () => "Habla con los animales y entiéndelos durante 1 hora."
    },
    {
      id: 12,
      name: "Invulnerabilidad",
      resolve: () => "Eres inmune a todo daño durante 5 asaltos."
    }
  ],

  // ==========================================
  // 3. MALDICIONES DE LA POCIÓN (d12)
  // ==========================================
  curseEntries: [
    {
      id: 1,
      resolve: () => "Prueba de SAB CD 15 o atacas a la criatura más cercana durante 3 asaltos."
    },
    {
      id: 2,
      resolve: () => "Te conviertes en un tritón/salamandra (newt) de 1 PG durante 3 asaltos."
    },
    {
      id: 3,
      resolve: () => "Una característica se convierte en 3 (-4) durante 1 hora."
    },
    {
      id: 4,
      resolve: () => "Prueba de CON CD 15 o recibes 2d10 de daño."
    },
    {
      id: 5,
      resolve: () => "Olvidas todos los idiomas que conoces durante 1 hora."
    },
    {
      id: 6,
      resolve: () => "Reduces a la mitad de tu tamaño y tienes desventaja en los ataques durante 5 asaltos."
    },
    {
      id: 7,
      resolve: () => "Cantas a pleno pulmón durante 3 asaltos."
    },
    {
      id: 8,
      resolve: () => "Te vuelves magnético para todo el metal cercano (near) a ti durante 1 hora."
    },
    {
      id: 9,
      resolve: () => "Sientes el impulso irrefrenable de saltar a cualquier foso/hoyo que veas durante 1 hora."
    },
    {
      id: 10,
      resolve: () => "Prueba de CON CD 15 o quedas ciego durante 5 asaltos."
    },
    {
      id: 11,
      resolve: () => "Eres el origen de un conjuro de caparazón antimagia (antimagic shell) durante 1 hora."
    },
    {
      id: 12,
      resolve: (d) => {
        const sub = d(4);
        const parts = (sub <= 2) ? "brazos (d4:1-2)" : "piernas (d4:3-4)";
        return `Dos extremidades se petrifican durante 5 asaltos: ${parts}.`;
      }
    }
  ],

  // ==========================================
  // 4. MEZCLAR POCIONES (d12: Efecto 1 & Efecto 2)
  // ==========================================
  mixingTable: [
    {
      min: 1, max: 1,
      efecto1: "Quien la bebe flota 2 asaltos.",
      efecto2: "Vapores tóxicos: CON CD 12 o 1d4 de daño."
    },
    {
      min: 2, max: 2,
      efecto1: "Adquiere personalidad: 1 virtud.",
      efecto2: "Pierde todas las maldiciones."
    },
    {
      min: 3, max: 3,
      efecto1: "Se vuelve totalmente inerte.",
      efecto2: "Adquiere personalidad: 1 defecto."
    },
    {
      min: 4, max: 4,
      efecto1: "Vuelve a tirar 2 beneficios nuevos.",
      efecto2: "Quien la bebe es invisible 2 asaltos."
    },
    {
      min: 5, max: 5,
      efecto1: "Los efectos de la maldición se reducen a la mitad.",
      efecto2: "Duplica los efectos de un beneficio."
    },
    {
      min: 6, max: 6,
      efecto1: "Adquiere 1 maldición adicional.",
      efecto2: "Explota: DES CD 12 o 1d6 de daño."
    },
    {
      min: 7, max: 7,
      efecto1: "Quien la bebe olvida 1 idioma.",
      efecto2: "Adquiere personalidad: 1 virtud."
    },
    {
      min: 8, max: 8,
      efecto1: "Adquiere 1 beneficio adicional.",
      efecto2: "Los efectos de los beneficios se reducen a la mitad."
    },
    {
      min: 9, max: 9,
      efecto1: "Adquiere personalidad: 1 defecto.",
      efecto2: "Duplica los efectos de una maldición."
    },
    {
      min: 10, max: 10,
      efecto1: "Todos los efectos se invierten.",
      efecto2: "Quien la bebe: CON CD 12 o 1d8 de daño."
    },
    {
      min: 11, max: 11,
      efecto1: "Pierde todos los beneficios.",
      efecto2: "Quien la bebe: -1 a una característica aleatoria."
    },
    {
      min: 12, max: 12,
      efecto1: "Quien la bebe: +1 a una característica aleatoria.",
      efecto2: "1 efecto aleatorio se vuelve permanente."
    }
  ],

  // ==========================================
  // 5. MÉTODOS GENERADORES
  // ==========================================

  // Genera el aspecto combinando las 3 columnas
  generateAppearance() {
    const r1 = this.d(8);
    const r2 = this.d(8);
    const r3 = this.d(8);

    const f1 = this.featuresCol1[r1 - 1];
    const f2 = this.featuresCol2[r2 - 1];
    const f3 = this.featuresCol3[r3 - 1];

    return {
      text: `${f1}, ${f2}, ${f3}`,
      rolls: `d8:${r1}, d8:${r2}, d8:${r3}`
    };
  },

  // Generador de Poción Mágica Completa
  generatePotion(forceBenefitsCount = 1, forceCursesCount = 0) {
    const app = this.generateAppearance();

    const chosenBenefits = [];
    const bRolls = [];
    for (let i = 0; i < forceBenefitsCount; i++) {
      const r = this.d(12);
      bRolls.push(r);
      const entry = this.benefitEntries[r - 1];
      chosenBenefits.push(entry.resolve(this.d));
    }

    const chosenCurses = [];
    const cRolls = [];
    for (let i = 0; i < forceCursesCount; i++) {
      const r = this.d(12);
      cRolls.push(r);
      const entry = this.curseEntries[r - 1];
      chosenCurses.push(entry.resolve(this.d));
    }

    return {
      nombre: "Poción Mágica",
      tipo: "Poción (Consumible)",
      rasgo: app.text,
      beneficios: chosenBenefits,
      maldiciones: chosenCurses.length > 0 ? chosenCurses : ["Ninguna"],
      rolls: `Rasgos: [${app.rolls}], Beneficios: d12:[${bRolls.join(",")}]${cRolls.length ? `, Maldiciones: d12:[${cRolls.join(",")}]` : ""}`
    };
  },

  // Generador de Resultado al Mezclar 2 Pociones
  mixPotions() {
    const roll = this.d(12);
    const result = this.mixingTable[roll - 1];
    const chooseSide = this.d(2); // 1 o 2

    return {
      titulo: "Mezcla Alquímica de Pociones",
      resultado: chooseSide === 1 ? result.efecto1 : result.efecto2,
      opcion1: result.efecto1,
      opcion2: result.efecto2,
      rolls: `d12:${roll}, d2:${chooseSide}`
    };
  }
};