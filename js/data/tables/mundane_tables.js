window.SD_DATA = window.SD_DATA || {};

window.SD_DATA.MUNDANE_TABLES = {
  // --- MÉTODOS AUXILIARES ---
  d(sides) {
    return Math.floor(Math.random() * sides) + 1;
  },

  pick(arr) {
    if (!arr || arr.length === 0) return "";
    return arr[Math.floor(Math.random() * arr.length)];
  },

  // ==========================================
  // 1. PIEDRAS PRECIOSAS (GEMAS) & RASGO ÚNICO
  // ==========================================
  gemTypes: [
    { name: "Perla (Pearl)", value: 40 },
    { name: "Esmeralda (Emerald)", value: 120 },
    { name: "Rubí (Ruby)", value: 200 },
    { name: "Zafiro (Sapphire)", value: 280 },
    { name: "Diamante (Diamond)", value: 360 }
  ],

  // Rasgo Único (d20)
  gemFeatures: [
    "Falsificación",
    "Deforme",
    "Mal construido",
    "Con imperfecciones",
    "Desgastado por el uso",
    "Reluciente / Impecable",
    "Marcas de mordiscos",
    "Quemado",
    "Polvoriento",
    "Cubierto de barro seco",
    "Marca de artista poco común",
    "Reparado",
    "Mellado / Desconchado",
    "Manchas de sangre seca",
    "Material inusual",
    "Frágil",
    "Oxidado / Podrido",
    "Repintado / Pintado encima",
    "Grabado con iniciales",
    "Histórico / Famoso"
  ],

  // ==========================================
  // 2. OBJETOS DE LUJO (LUXURY ITEMS)
  // Característica (d20) + Objeto (d20 con subtirada 1d4)
  // ==========================================
  luxuryFeatures: [
    "Dorado/a",                                                    // 1
    "De cobre grabado",                                            // 2
    "Con escamas de dragón",                                       // 3
    "Bañado/a en oro",                                             // 4
    "Tallado/a en hueso",                                          // 5
    "Engarzado/a en ámbar",                                        // 6
    "Pintura de",                                                  // 7
    "De plata",                                                    // 8
    "De jade",                                                     // 9
    "Tapiz de",                                                    // 10
    "De mármol blanco",                                            // 11
    "De marfil",                                                   // 12
    "De cristal",                                                  // 13
    "Dorado/a",                                                    // 14
    "De hueso de dragón",                                          // 15
    "Reliquia sagrada",                                            // 16
    "De meteorito",                                                // 17
    "De obra maestra",                                             // 18
    "Envuelto/a en seda",                                          // 19
    "De vidriera"                                                  // 20
  ],

  luxuryObjects: [
    { text: "Figura humanoide a tamaño real" },                                                          // 1
    { text: "Trofeo", sub: ["Colmillo", "Cuerno", "Colmillo/Garra", "Calavera"] },                      // 2
    { text: "Altar", sub: ["Memnon", "Ord", "Madeera", "Madeera"] },                                    // 3 (1: Memnon, 2: Ord, 3-4: Madeera)
    { text: "Estatuilla", sub: ["Zorro", "Gato", "Perro", "Búho"] },                                     // 4
    { text: "Mobiliario", sub: ["Cofre", "Mesa", "Arqueta/Caja de seguridad", "Silla"] },              // 5
    { text: "Icono", sub: ["Caos", "Neutralidad", "Ley", "Ley"] },                                      // 6 (1: Caos, 2: Neutralidad, 3-4: Ley)
    { text: "Busto", sub: ["Dios", "Gobernante", "Héroe", "Bardo"] },                                   // 7
    { text: "Huevo", sub: ["Dragón", "Basilisco", "Grifo", "Grifo"] },                                  // 8 (1: Dragón, 2: Basilisco, 3-4: Grifo)
    { text: "Joya", sub: ["Amuleto de la suerte (charm)", "Amuleto", "Guardapelo", "Sello/Anillo de sello"] }, // 9
    { text: "Máscara", sub: ["Cuervo", "Bufón", "Ladrón", "Dios"] },                                   // 10
    { text: "Recipiente", sub: ["Espejo", "Jarrón", "Vasija de cerámica", "Jarra/Aguamanil"] },        // 11
    { text: "Vajilla", sub: ["Cáliz", "Plato", "Cubertería", "Jarra"] },                                // 12
    { text: "Ornamento", sub: ["Tiara/Diadema", "Anillo", "Cadena", "Torque"] },                         // 13
    { text: "Botella", sub: ["Vino", "Grog", "Hidromiel", "Cerveza"] },                                 // 14
    { text: "Artículo de escriba", sub: ["Portapergaminos", "Portapergaminos", "Tintero", "Pluma"] },   // 15 (1-2: Portapergaminos, 3: Tintero, 4: Pluma)
    { text: "Pieza de armadura", sub: ["Escudo", "Yelmo", "Brazales", "Grebas"] },                      // 16
    { text: "Instrumento musical", sub: ["Laúd", "Viola", "Arpa", "Flauta"] },                         // 17
    { text: "Contenedor funerario", sub: ["Urna", "Ataúd", "Féretro/Andas", "Sarcófago"] },             // 18
    { text: "Regalía", sub: ["Corona", "Cetro", "Orbe", "Trono"] },                                      // 19
    { text: "Figura de insecto", sub: ["Escarabajo", "Escarabajo", "Mariposa", "Araña"] }               // 20 (1-2: Escarabajo, 3: Mariposa, 4: Araña)
  ],

  // ==========================================
  // 3. DONES (BOONS)
  // ==========================================

  // Juramentos (d8)
  oaths: [
    "El duque te conseguirá una audiencia con la reina.",
    "La Guardia de la Ciudad perdonará un delito que hayas cometido.",
    "Una dríade te protegerá mientras estés en su arboleda.",
    "Un miembro del Gremio de Ladrones te dará acceso a la cámara de gemas.",
    "Un unicornio curará una herida grave o una aflicción.",
    "Un maestro forjador enano te fabricará una espada espectacular.",
    "Un barón te concederá el título de caballero o alguacil.",
    "El Círculo de Magos te teletransportará mágicamente a cualquier lugar."
  ],

  // Secretos (d12 compuesto: Detalle 1 + Detalle 2)
  secrets: {
    firstHalf: [
      "El Nombre Verdadero de",
      "Quien manipula a",
      "El asesino de",
      "El impostor de",
      "El horrible plan de",
      "La ubicación secreta de",
      "El/la amado/a de",
      "Pruebas de los crímenes de",
      "El tesoro acumulado de",
      "La debilidad de",
      "La identidad secreta de",
      "Quien chantajea a"
    ],
    secondHalf: [
      "El rey",
      "Un poderoso demonio",
      "Un maestro de la espada legendario",
      "El líder de la iglesia",
      "Un poderoso hechicero",
      "Un grupo de aventureros rival",
      "El líder del Gremio de Ladrones",
      "Un reverenciado caballero de Santa Terragnis",
      "Un famoso cazador de dragones",
      "Los líderes del asentamiento",
      "Una temible reina liche",
      "Un PNJ muy querido"
    ]
  },

  // Bendiciones (d12)
  blessings: [
    { name: "Visión espectral (Wraithsight)", desc: "Puedes ver criaturas invisibles y ocultas." },
    { name: "Nueve vidas (Nine Lives)", desc: "Las próximas nueve veces que caigas a 0 PG, recuperas 1 PG." },
    { name: "Piel demoníaca (Demonskin)", desc: "Eres inmune al daño por fuego." },
    { name: "Paso de araña (Spiderwalk)", desc: "Puedes trepar por paredes y superficies verticales." },
    { name: "Beso del pueblo del mar (Merfolk's Kiss)", desc: "Puedes respirar bajo el agua como si fuera aire." },
    { name: "Bendición de Gede (Gede's Blessing)", desc: "Puedes hablar con los animales y entenderlos." },
    { name: "Ojo arcano (Arcane Eye)", desc: "Tres veces al día, ventaja para lanzar un conjuro." },
    { name: "Marca de Shune (Shune's Mark)", desc: "Cuando matas a una criatura, te curas 1d6 puntos de golpe." },
    { name: "Paso fantasmal (Ghostwalk)", desc: "Una vez al día, te vuelves incorpóreo durante 1d4 asaltos." },
    { name: "Picadura de la muerte (Death's Sting)", desc: "Eres inmune a los efectos del veneno." },
    { name: "Rito de furia (Rite of Rage)", desc: "Una vez al día, infliges el doble de daño." },
    { name: "Halo divino (Divine Halo)", desc: "Los conjuros hostiles dirigidos a ti tienen dificultad CD 15 para ser lanzados." }
  ],

  // ==========================================
  // 4. MÉTODOS GENERADORES
  // ==========================================

  // Generador de Gema (con opción de ser Gigante y Rasgo Único)
  generateGem(forceGiant = false) {
    const baseGem = this.pick(this.gemTypes);
    const isGiant = forceGiant || (this.d(6) === 6); // 1 en 6 de ser gigante si no se fuerza
    const finalValue = isGiant ? (baseGem.value * 2) : baseGem.value;
    const featureRoll = this.d(20);
    const feature = this.gemFeatures[featureRoll - 1];

    const title = isGiant ? `Gema Gigante: ${baseGem.name}` : baseGem.name;

    return {
      nombre: title,
      valor: `${finalValue} po`,
      esGigante: isGiant ? "Sí (Valor x2)" : "No",
      rasgoUnico: feature,
      rolls: `d20:${featureRoll}`
    };
  },

  // Generador de Objeto de Lujo
  generateLuxuryItem() {
    const dFeature = this.d(20);
    const dObject = this.d(20);
    const featureText = this.luxuryFeatures[dFeature - 1];
    const objectEntry = this.luxuryObjects[dObject - 1];

    let objectDesc = objectEntry.text;
    let dSub = null;

    if (objectEntry.sub) {
      dSub = this.d(4);
      const subSelection = objectEntry.sub[dSub - 1];
      objectDesc = `${objectEntry.text} (${subSelection})`;
    }

    const itemFinal = `${featureText} ${objectDesc}`;
    const rollsText = dSub ? `d20:${dFeature}, d20:${dObject}, d4:${dSub}` : `d20:${dFeature}, d20:${dObject}`;

    return {
      nombre: itemFinal,
      caracteristica: featureText,
      objeto: objectDesc,
      rasgoUnico: this.pick(this.gemFeatures), // Los objetos de lujo también usan la tabla de rasgo único
      rolls: rollsText
    };
  },

  // Generador de Juramento
  generateOath() {
    const roll = this.d(8);
    return {
      tipo: "Juramento (Oath)",
      detalle: this.oaths[roll - 1],
      rolls: `d8:${roll}`
    };
  },

  // Generador de Secreto
  generateSecret() {
    const d1 = this.d(12);
    const d2 = this.d(12);
    const part1 = this.secrets.firstHalf[d1 - 1];
    const part2 = this.secrets.secondHalf[d2 - 1];

    return {
      tipo: "Secreto (Secret)",
      detalle: `${part1} ${part2}`,
      parte1: part1,
      parte2: part2,
      rolls: `d12:${d1}, d12:${d2}`
    };
  },

  // Generador de Bendición
  generateBlessing() {
    const roll = this.d(12);
    const blessing = this.blessings[roll - 1];

    return {
      tipo: "Bendición (Blessing)",
      nombre: blessing.name,
      efecto: blessing.desc,
      rolls: `d12:${roll}`
    };
  },

  // Generador General de Don (Boon)
  generateBoon() {
    const rollType = this.d(3);
    if (rollType === 1) return this.generateOath();
    if (rollType === 2) return this.generateSecret();
    return this.generateBlessing();
  }
};