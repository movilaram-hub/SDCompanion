window.SD_DATA = window.SD_DATA || {};

window.SD_DATA.MAGIC_PERSONALITY = {
  d(sides) {
    return Math.floor(Math.random() * sides) + 1;
  },
  pick(arr) {
    if (!arr || arr.length === 0) return "";
    return arr[Math.floor(Math.random() * arr.length)];
  },

  // ==========================================
  // 1. TIRADA DE PERSONALIDAD (2d6)
  // ==========================================
  rollPersonalityCheck() {
    const roll = this.d(6) + this.d(6);
    if (roll <= 3) {
      return { hasPersonality: true, virtues: 0, flaws: 1, roll: roll, label: "0 Virtudes / 1 Defecto" };
    }
    if (roll <= 9) {
      return { hasPersonality: false, virtues: 0, flaws: 0, roll: roll, label: "Sin Consciencia" };
    }
    if (roll <= 11) {
      return { hasPersonality: true, virtues: 1, flaws: 1, roll: roll, label: "1 Virtud / 1 Defecto" };
    }
    return { hasPersonality: true, virtues: 1, flaws: 0, roll: roll, label: "1 Virtud / 0 Defectos" };
  },

  // ==========================================
  // 2. VIRTUDES DEL OBJETO (d20 con subtiradas 1d4)
  // ==========================================
  virtueEntries: [
    { id: 1, resolve: () => "Insiste en proteger a las personas y criaturas que le agradan." },
    { id: 2, resolve: () => "Advierte a su portador si presiente un peligro inminente." },
    { id: 3, resolve: () => "Traduce con gusto el idioma primordial (Primordial) para su portador." },
    { id: 4, resolve: () => "Percibe criaturas ocultas a distancia cercana (near), pero no su ubicación exacta." },
    {
      id: 5,
      resolve: (d) => {
        const sub = d(4);
        const favors = ["unicornio (d4:1-2)", "unicornio (d4:1-2)", "dragón (d4:3)", "noble (d4:4)"];
        return `Le debe un favor un: ${favors[sub - 1]}.`;
      }
    },
    { id: 6, resolve: () => "Inspira el respeto de los seguidores de un dios." },
    { id: 7, resolve: () => "Ocasionalmente recuerda historia antigua de gran utilidad." },
    { id: 8, resolve: () => "Proporciona sueños placenteros y buen descanso a su portador." },
    { id: 9, resolve: () => "Asesora a su portador sobre qué decir exactamente en cada situación." },
    { id: 10, resolve: () => "A veces proporciona consejos estratégicos útiles." },
    { id: 11, resolve: () => "Ocasionalmente nota detalles importantes que a otros se les han pasado por alto." },
    { id: 12, resolve: () => "Intenta mediar en desacuerdos entre objetos conscientes." },
    {
      id: 13,
      resolve: (d) => {
        const sub = d(4);
        const animals = ["perros", "caballos", "gatos", "pájaros"];
        return `Presencia tranquilizadora para: ${animals[sub - 1]} (d4:${sub}).`;
      }
    },
    { id: 14, resolve: () => "Posee un sentido del olfato extremadamente agudo." },
    { id: 15, resolve: () => "Conoce la dirección del curso de agua corriente más cercano." },
    { id: 16, resolve: () => "Legal (Lawful): intimida a criaturas caóticas." },
    { id: 17, resolve: () => "Neutral (Neutral): intimida tanto a criaturas legales como caóticas." },
    { id: 18, resolve: () => "Caótico (Chaotic): intimida a criaturas legales." },
    { id: 19, resolve: () => "Posee profecías auténticas, pero no está seguro de su significado." },
    {
      id: 20,
      resolve: (d) => {
        const sub = d(4);
        const undo = ["mal", "mentira", "conjuro", "alianza"];
        return `Puede deshacer un/a gran: ${undo[sub - 1]} (d4:${sub}).`;
      }
    }
  ],

  // ==========================================
  // 3. DEFECTOS DEL OBJETO (d20 con subtiradas 1d4)
  // ==========================================
  flawEntries: [
    {
      id: 1,
      resolve: (d) => {
        const sub = d(4);
        const fears = ["la oscuridad", "las alimañas", "las alturas", "el agua"];
        return `Tiene miedo a: ${fears[sub - 1]} (d4:${sub}).`;
      }
    },
    { id: 2, resolve: () => "Prefería a un dueño anterior y siempre está haciendo comparaciones." },
    { id: 3, resolve: () => "Parlotea mientras su portador intenta concentrarse." },
    {
      id: 4,
      resolve: (d) => {
        const sub = d(4);
        const races = ["los elfos", "los enanos", "los humanos", "los trasgos/goblins"];
        return `Le desagradan: ${races[sub - 1]} (d4:${sub}).`;
      }
    },
    { id: 5, resolve: () => "Intenta meter a su portador en peleas para «tener algo que hacer»." },
    { id: 6, resolve: () => "No quiere separarse de su portador bajo ningún concepto." },
    {
      id: 7,
      resolve: (d) => {
        const sub = d(4);
        const opposes = ["el juego/apuestas", "las juergas", "el sigilo", "el robo"];
        return `Se opone a: ${opposes[sub - 1]} (d4:${sub}).`;
      }
    },
    { id: 8, resolve: () => "Acusa a todo el mundo de mentir; tiene razón de vez en cuando." },
    {
      id: 9,
      resolve: (d) => {
        const sub = d(4);
        const noHurt = ["legales (d4:1-2)", "legales (d4:1-2)", "neutrales (d4:3)", "caóticas (d4:4)"];
        return `No dañará a criaturas: ${noHurt[sub - 1]}.`;
      }
    },
    { id: 10, resolve: () => "Cree que su portador es un peón en su plan apocalíptico." },
    { id: 11, resolve: () => "Intenta escapar constantemente de su portador actual." },
    { id: 12, resolve: () => "Exige que su portador cumpla los estrictos rituales de su dios." },
    { id: 13, resolve: () => "Insiste en reunirse con su creador, vivo o muerto." },
    { id: 14, resolve: () => "No soporta a otros objetos mágicos conscientes." },
    { id: 15, resolve: () => "Se niega a ser utilizado para tareas «sin importancia» o «aburridas»." },
    { id: 16, resolve: () => "Se vuelve mágicamente inerte a propósito cuando se enfada con su portador." },
    { id: 17, resolve: () => "Insiste en ser limpiado meticulosamente todos los días." },
    { id: 18, resolve: () => "Le encanta el color morado y desprecia todos los demás colores." },
    {
      id: 19,
      resolve: (d) => {
        const sub = d(4);
        const opposesAction = ["negociar (d4:1)", "pelear (d4:2-3)", "pelear (d4:2-3)", "planificar (d4:4)"];
        return `Se opone a: ${opposesAction[sub - 1]}.`;
      }
    },
    { id: 20, resolve: () => "Finge conocer información que en realidad no sabe." }
  ],

  // ==========================================
  // 4. RASGO DE PERSONALIDAD (MATRIZ d4, d4)
  // ==========================================
  personalityTraitsMatrix: [
    ["Imperioso / Déspota (Imperious)", "Educado / Cortés (Polite)", "Puritano (Puritanical)", "Encantador (Charming)"],
    ["Ansioso (Anxious)", "Recto / Virtuoso (Righteous)", "Crítico / Juzgador (Critical)", "Teatral / Dramático (Theatrical)"],
    ["Mandón (Bossy)", "Noble (Noble)", "Codicioso / Avaro (Greedy)", "Protector (Protective)"],
    ["Impulsivo (Impulsive)", "Valiente (Brave)", "Cruel / Mordaz (Vicious)", "Leal (Loyal)"]
  ],

  // Alineamientos
  alignments: ["Legal (Lawful)", "Neutral (Neutral)", "Caótico (Chaotic)"],

  // ==========================================
  // 5. GENERADOR DE NOMBRES / IDEAS (3 x d20)
  // ==========================================
  nameGenPrefix: [
    "Carmesí (The Crimson)", "Cenizo/a (The Ashen)", "De Ortival (Ortival's)", "Del Destino / Maldito/a (The Doom)",
    "Del Crepúsculo (The Twilight)", "Astral (The Astral)", "De Krull (Krull's)", "Voraz / Cruel (The Vicious)",
    "De Memnon (Memnon's)", "Bendito/a (The Blessed)", "Infernal (The Infernal)", "De Madeera (Madeera's)",
    "Susurrante (The Whispering)", "Impío/a (The Unholy)", "De Shune (Shune's)", "Perdido/a (The Lost)",
    "De Ord (Ord's)", "Justo/a / Justiciero/a (The Righteous)", "Demoníaco/a (The Demonic)", "Primordial (The Primordial)"
  ],
  nameGenCore: [
    "Hoja / Filo (Blade)", "Emplasto / Cataplasma (Poultice)", "Rito (Rite)", "Hacha (Axe)",
    "Martillo (Hammer)", "Varita (Wand)", "Capa (Cape)", "Tomo (Tome)",
    "Letanía (Litany)", "Bastón (Staff)", "Pergamino (Scroll)", "Calavera (Skull)",
    "Arco (Bow)", "Espada (Sword)", "Escudo (Shield)", "Daga (Dagger)",
    "Armadura (Armor)", "Orbe (Orb)", "Ojo (Eye)", "Elixir (Elixir)"
  ],
  nameGenSuffix: [
    "de la Muerte Atronadora", "de las Eras", "del Archimago", "de la Destrucción",
    "de Brak", "del Poder", "del Pacto", "de las Tierras Salvajes",
    "de la Horda", "de Sangre", "del Tiempo", "de la Reina Liche",
    "de los Ancianos", "de la Locura", "de la Marchitez", "de la Aniquilación",
    "del Dragón", "de los Resucitados", "de la Furia Elemental", "de los Espíritus"
  ],

  // ==========================================
  // 6. MÉTODOS GENERADORES
  // ==========================================

  // Genera un nombre evocador completo
  generateItemNameIdea() {
    const r1 = this.d(20);
    const r2 = this.d(20);
    const r3 = this.d(20);

    const prefix = this.nameGenPrefix[r1 - 1];
    const core = this.nameGenCore[r2 - 1];
    const suffix = this.nameGenSuffix[r3 - 1];

    return {
      nombreCompleto: `${prefix} ${core} ${suffix}`,
      rolls: `d20:${r1}, d20:${r2}, d20:${r3}`
    };
  },

  // Genera la consciencia y personalidad del objeto
  generatePersonality(forceVirtues = null, forceFlaws = null) {
    let virtuesCount = forceVirtues;
    let flawsCount = forceFlaws;
    let checkInfo = "Personalidad Forzada";

    if (virtuesCount === null && flawsCount === null) {
      const check = this.rollPersonalityCheck();
      checkInfo = `Chequeo 2d6:${check.roll} (${check.label})`;
      if (!check.hasPersonality) {
        return {
          esConsciente: false,
          descripcion: "Objeto inanimado común (Sin consciencia)",
          rolls: checkInfo
        };
      }
      virtuesCount = check.virtues;
      flawsCount = check.flaws;
    }

    // Rasgo de personalidad d4, d4
    const rRow = this.d(4);
    const rCol = this.d(4);
    const trait = this.personalityTraitsMatrix[rRow - 1][rCol - 1];

    // Alineamiento y Comunicación
    const alignment = this.pick(this.alignments);

    // Virtudes
    const virtuesList = [];
    const vRolls = [];
    for (let i = 0; i < virtuesCount; i++) {
      const r = this.d(20);
      vRolls.push(r);
      virtuesList.push(this.virtueEntries[r - 1].resolve(this.d));
    }

    // Defectos
    const flawsList = [];
    const fRolls = [];
    for (let i = 0; i < flawsCount; i++) {
      const r = this.d(20);
      fRolls.push(r);
      flawsList.push(this.flawEntries[r - 1].resolve(this.d));
    }

    return {
      esConsciente: true,
      alineamiento: alignment,
      rasgoTemperamento: trait,
      comunicacion: "Telepática con el portador (Prueba enfrentada CAR +2 para resistirse)",
      virtudes: virtuesList.length > 0 ? virtuesList : ["Ninguna"],
      defectos: flawsList.length > 0 ? flawsList : ["Ninguno"],
      rolls: `${checkInfo}, Temperamento: d4:${rRow}/d4:${rCol}${vRolls.length ? `, Virtudes: d20:[${vRolls.join(",")}]` : ""}${fRolls.length ? `, Defectos: d20:[${fRolls.join(",")}]` : ""}`
    };
  }
};