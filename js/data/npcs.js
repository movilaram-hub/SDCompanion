window.SD_DATA = window.SD_DATA || {};

window.SD_DATA.NPCS = {
  d: function(sides) {
    return Math.floor(Math.random() * sides) + 1;
  },

  pick: function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  },

  nombres: [
    "Kaelen", "Vrena", "Gornak", "Dorothea", "Béla", "István", "Kálmán", "Zoltán",
    "Akin", "Babatunde", "Ebele", "Folami", "Kayode", "Olufemi", "Sipho",
    "Aapo", "Eetu", "Ilmari", "Kalevi", "Tapio", "Väinö", "Mirena", "Aldous", "Garrick", "Alden", "Althea", "Branoc", "Brynn", "Caelum", "Cassia", "Cedric", "Corvus",
    "Dagny", "Dain", "Eldrin", "Elspeth", "Fenrik", "Galen", "Garrick", "Gareth",
    "Gisela", "Greta", "Hadrian", "Hesta", "Ingvar", "Isolde", "Jareth", "Kaelen",
    "Kallan", "Kord", "Leona", "Lilith", "Lucan", "Marek", "Mirena", "Morrigan",
    "Nesta", "Orin", "Osric", "Rhogar", "Rorik", "Rowan", "Selena", "Sigrid",
    "Taran", "Thorgar", "Torvald", "Ulric", "Valeria", "Vesper", "Vrena", "Wulfric",
    "Yvaine", "Zoltan", "Suson", "Ray", "Sus", "Andreu", "Aram", "Mati", "Fire", "Dani", "Alex", "Chals", "Mateu", "Joan", "Pericu", "Paco"
  ],

  // ==========================================
  // TABLAS OFICIALES DE PNJs (NPCs)
  // ==========================================

  // 1. PERFIL BÁSICO
  ascendenciaPnj: function(roll) {
    if (roll <= 4) return "Humano (Human)";
    if (roll <= 6) return "Elfo (Elf)";
    if (roll <= 8) return "Enano (Dwarf)";
    if (roll <= 10) return "Mediano (Halfling)";
    if (roll === 11) return "Semiorco (Half-orc)";
    return "Goblin";
  },

  edadPnj: function(roll) {
    var table = {
      1: "Niño (Child)",
      2: "Adolescente (Adolescent)",
      3: "Adulto (Adult)",
      4: "Adulto (Adult)",
      5: "Mediana edad (Middle-Aged)",
      6: "Mediana edad (Middle-Aged)",
      7: "Anciano (Elderly)",
      8: "Ancestral / Longevo (Ancient)"
    };
    return table[roll] || "Adulto (Adult)";
  },

  alineamientoPnj: function(roll) {
    if (roll <= 3) return "Legal (Lawful)";
    if (roll === 4) return "Neutral";
    return "Caótico (Chaotic)";
  },

  riquezaPnj: function(roll) {
    if (roll === 1) return "Pobre (Poor)";
    if (roll <= 3) return "Estándar (Standard)";
    if (roll <= 5) return "Acomodado / Rico (Wealthy)";
    return "Extravagante / Opulento (Extravagant)";
  },

  // 2. CUALIDADES DEL PNJ (3d20)
  aparienciasPnj: {
    1: "Calvicie incipiente",
    2: "Complexión fornida/robusta",
    3: "Muy alto",
    4: "Lunar atractivo",
    5: "Tuerto (un solo ojo)",
    6: "Pelo trenzado",
    7: "Musculoso",
    8: "Pelo blanco",
    9: "Cicatriz en la cara",
    10: "Complexión esbelta/fina",
    11: "Sudoroso",
    12: "Hoyuelo en la barbilla",
    13: "Frágil / Enclenque",
    14: "Cejas muy pobladas",
    15: "Tatuado",
    16: "Sombrero de ala ancha y caído",
    17: "Diente de oro",
    18: "Seis dedos en una mano",
    19: "Muy bajo de estatura",
    20: "Nariz grande"
  },

  maniasPnj: {
    1: "Escupe con frecuencia",
    2: "Siempre está comiendo",
    3: "Se mueve con rapidez",
    4: "Hace trucos de cartas",
    5: "Reza en voz alta",
    6: "Escribe en un diario",
    7: "Siempre se disculpa",
    8: "Da palmadas en la espalda",
    9: "Se le caen las cosas de las manos",
    10: "Jura y profiere votos solemnes",
    11: "Hace juegos de palabras / chistes",
    12: "Acento exótico/raro",
    13: "Se asusta con extrema facilidad",
    14: "Despistado / Olvidadizo",
    15: "Habla en un susurro/muy bajo",
    16: "Tiene tics nerviosos",
    17: "Se mueve muy despacio",
    18: "Habla a voces/muy alto",
    19: "Camina con chulería/pavoneo",
    20: "Fuma en pipa"
  },

  secretosPnj: {
    1: "Oculta a un fugitivo",
    2: "Le encantan las crías de animales",
    3: "Obsesionado con el fuego",
    4: "Pertenece a una secta religiosa",
    5: "Es un semidemonio",
    6: "Fue aprendiz de mago",
    7: "Roba carteras sin necesidad",
    8: "Tiene una identidad falsa",
    9: "Tiene pánico a las tormentas",
    10: "Tiene branquias funcionales",
    11: "Tiene una enorme deuda de juego",
    12: "Trabaja como contrabandista",
    13: "Es un hombre lobo",
    14: "Puede oler las mentiras",
    15: "Desheredado de una familia rica",
    16: "Enamorado en secreto de un tabernero",
    17: "Desertó del Gremio de Ladrones",
    18: "Es el mejor amigo de un príncipe",
    19: "Aventurero/explorador retirado",
    20: "Oculta un basilisco como mascota"
  },

  // 3. OCUPACIÓN EN CUADRÍCULA (2d4)
  ocupacionesMatriz: [
    ["Sepulturero", "Carpintero", "Erudito / Académico", "Herrero"],
    ["Recaudador de impuestos", "Granjero / Agricultor", "Tabernero", "Mendigo"],
    ["Panadero", "Cocinero", "Marinero", "Carnicero"],
    ["Cerrajero", "Zapatero", "Fraile / Monja", "Mercader"]
  ],

  // ==========================================
  // TABLAS OFICIALES DE AVENTUREROS RIVALES
  // ==========================================
  renombreRivales: {
    1: "Desconocidos (Unknown)",
    2: "Conocidos localmente (Locally known)",
    3: "Conocidos localmente (Locally known)",
    4: "Ampliamente reconocidos (Widely recognized)",
    5: "Ampliamente reconocidos (Widely recognized)",
    6: "Extremadamente famosos (Extravagant/Famous)"
  },

  secretosRivales: function(roll2d6) {
    if (roll2d6 === 2) return "Traicionaron un juramento sagrado";
    if (roll2d6 <= 4) return "Identidades falsas o robadas";
    if (roll2d6 <= 6) return "En deuda con el Gremio de Ladrones";
    if (roll2d6 <= 8) return "Poseen el mapa de un gran tesoro";
    if (roll2d6 <= 11) return "Sufren los efectos de una maldición";
    return "Tienen un patrón / mecenas muy poderoso";
  },

  riquezaRivales: {
    1: "Pobres (Poor)",
    2: "Estándar (Standard)",
    3: "Estándar (Standard)",
    4: "Estándar (Standard)",
    5: "Ricos (Wealthy)",
    6: "Extravagantes / Opulentos (Extravagant)"
  },

  alineamientoRivales: {
    1: "Legal (Lawful)",
    2: "Legal (Lawful)",
    3: "Neutral",
    4: "Neutral",
    5: "Caótico (Chaotic)",
    6: "Caótico (Chaotic)"
  },

  ascendenciaMiembro: function(roll1d12) {
    if (roll1d12 <= 4) return "Humano";
    if (roll1d12 <= 6) return "Elfo";
    if (roll1d12 <= 8) return "Enano";
    if (roll1d12 <= 10) return "Mediano";
    if (roll1d12 === 11) return "Semiorco";
    return "Goblin";
  },

  claseMiembro: {
    1: "Guerrero (Fighter)",
    2: "Clérigo (Priest)",
    3: "Ladrón (Thief)",
    4: "Mago (Wizard)"
  },

  nombresGrupoRivales: {
    1: "Los Guardianes Salvajes (The Savage Wardens)",
    2: "Las Calaveras de Acero (The Steel Skulls)",
    3: "Los Guardianes Gélidos (The Icy Guardians)",
    4: "Los Martillos del Infierno (Hell's Hammers)",
    5: "Los Exploradores Funestos (The Dread Rangers)",
    6: "Los Exploradores Maravillosos (The Marvelous Explorers)",
    7: "La Luna Llameante (The Flaming Moon)",
    8: "Los Lobos Solitarios (The Lone Wolves)",
    9: "Los Saqueadores Nobles (The Noble Delvers)",
    10: "El Alba Imponente (The Mighty Dawn)",
    11: "Los Dracos de Hierro (The Iron Drakes)",
    12: "Los Canallas del Diablo (The Devil's Miscreants)",
    13: "Las Cimitarras Esmeralda (The Emerald Scimitars)",
    14: "La Tormenta Vigilante (The Vigilant Storm)",
    15: "Los Rastreadores Sin Luz (The Lightless Trackers)",
    16: "El Juramento del Bosque (The Forest Oath)",
    17: "Los Centinelas de la Muerte (Death's Sentinels)",
    18: "Los Leones Oscuros (The Dark Lions)",
    19: "Los Caballeros del Trueno (The Thundering Knights)",
    20: "Los Cazadores Divinos (The Divine Hunters)"
  },

  reputacionGrupoRivales: {
    1: "Derrotar a un dragón",
    2: "Especializarse en no-muertos",
    3: "La adoración fanática de un dios",
    4: "Abatir a un ogro de dos cabezas",
    5: "Desaparecer durante un año entero",
    6: "Coleccionar trofeos de monstruos",
    7: "Prender fuego a las tabernas",
    8: "Su vestimenta y atuendo distintivo",
    9: "Su descaro y arrogancia",
    10: "Una expedición completamente desastrosa",
    11: "Coquetear con la magia oscura/maligna",
    12: "Sus admiradores fanáticos y enloquecidos",
    13: "Haber servido en una guerra brutal",
    14: "Enormes deudas de juego",
    15: "Su león domesticado como mascota",
    16: "Sobrevivir a la caída de Korint",
    17: "Encontrar una espada legendaria",
    18: "Espiar a otros grupos de aventureros",
    19: "Derrotar a un poderoso nigromante",
    20: "Reclamar y robar tesoros ajenos"
  },

  tacticasRivales: {
    "Legal (Lawful)": {
      1: "Siempre negocian primero",
      2: "Luchan con honor",
      3: "Nunca usan el sigilo",
      4: "Tienen seguidores leales"
    },
    "Neutral": {
      1: "Exploran e infiltran en sigilo",
      2: "Siguen y rastrean a sus rivales",
      3: "Ocultan y almacenan recursos",
      4: "Compran información"
    },
    "Caótico (Chaotic)": {
      1: "Emboscan a grupos rivales",
      2: "Sacrifican PNJs sin dudar",
      3: "Matan absolutamente todo",
      4: "Atacan a los indefensos"
    }
  },

  // ==========================================
  // TABLAS DE SEGUIDORES (Páramos Aventurados)
  // ==========================================
  calidadesSeguidor: function(roll) {
    if (roll <= 3) return { nivel: "Un lastre", mod: "-1 a sus pruebas", etiquetas: "0 etiquetas (+1 debilidad)" };
    if (roll <= 9) return { nivel: "Razonablemente competente", mod: "+0 a sus pruebas", etiquetas: "1 etiqueta de especialización" };
    if (roll <= 11) return { nivel: "Muy competente", mod: "+1 a sus pruebas", etiquetas: "2 etiquetas de especialización" };
    return { nivel: "Un individuo excepcional", mod: "+2 a sus pruebas", etiquetas: "3 etiquetas de especialización" };
  },

  trasfondosSeguidor: function(roll) {
    var table = {
      1: "Ha tenido una vida de servidumbre u opresión (+1 Lealtad inicial, sumiso)",
      2: "Ha tenido una vida de servidumbre u opresión (+1 Lealtad inicial, sumiso)",
      3: "Pasaron ya sus mejores años (-1 PG máx, +1 Sabiduría/Experiencia)",
      4: "Ha tenido una vida peligrosa (+1 Dado de Daño o arma marcial)",
      5: "Ha tenido una vida peligrosa (+1 Dado de Daño o arma marcial)",
      6: "Común y corriente (Sin modificadores especiales)",
      7: "Común y corriente (Sin modificadores especiales)",
      8: "Común y corriente (Sin modificadores especiales)",
      9: "Común y corriente (Sin modificadores especiales)",
      10: "Ha tenido una vida privilegiada (Exige mejor trato y comida rica)",
      11: "Especialista (+1 etiqueta adicional de oficio o conocimiento)",
      12: "DOBLE"
    };
    return table[roll] || table[6];
  },

  instintosSeguidor: {
    1: "Robar, saquear e incendiar ante la menor oportunidad.",
    2: "Guardar rencor y buscar venganza a espaldas del grupo.",
    3: "Cuestionar el liderazgo o la autoridad abiertamente.",
    4: "Tratar a otros con prepotencia y soberbia.",
    5: "Tratar a otros con prepotencia y soberbia.",
    6: "Actuar de forma impulsiva y temeraria.",
    7: "Actuar de forma impulsiva y temeraria.",
    8: "Ceder a la tentación (bebida, oro, placeres).",
    9: "Ceder a la tentación (bebida, oro, placeres).",
    10: "Holgazanear y eludir el trabajo duro.",
    11: "Holgazanear y eludir el trabajo duro.",
    12: "Evitar el peligro, la primera línea o el castigo a toda costa."
  },

  motivacionesSeguidor: {
    1: "Libertinaje (Comida, bebida, juego, sexo y desmadre en descansos)",
    2: "Venganza (Exige ayuda contra quienes le dañaron en el pasado)",
    3: "Lucro (Pago monetario regular en oro según la prosperidad)",
    4: "Lucro (Pago monetario regular en oro según la prosperidad)",
    5: "Lucro (Pago monetario regular en oro según la prosperidad)",
    6: "Renombre (Reconocimiento público; busca que hablen de sus hazañas)",
    7: "Renombre (Reconocimiento público; busca que hablen de sus hazañas)",
    8: "Gloria (Derrotar en combate a oponentes de gran envergadura)",
    9: "Gloria (Derrotar en combate a oponentes de gran envergadura)",
    10: "Afecto (Palabras amables, tiempo, cercanía y atención sincera)",
    11: "Conocimiento (Secretos, misterios y maravillas del mundo exterior)",
    12: "Bondad (Paliar sufrimiento, ayudar al inocente y deshacer entuertos)"
  },

  combateSeguidor: function(rollPg, rollDmg) {
    var pgText = "Frágil / Blando: 3 PG";
    var pgVal = 3;
    if (rollPg >= 4 && rollPg <= 9) { pgText = "En buena forma: 6 PG"; pgVal = 6; }
    else if (rollPg >= 10) { pgText = "Duro / Resistente: 9 PG"; pgVal = 9; }

    var dmgText = "Poco peligroso: d4";
    if (rollDmg >= 5 && rollDmg <= 10) { dmgText = "Sabe defenderse: d6"; }
    else if (rollDmg >= 11) { dmgText = "Veterano de combate: d8"; }

    return { pgText: pgText, pgVal: pgVal, dmgText: dmgText };
  },

  // ==========================================
  // DISPARADORES DE GENERACIÓN
  // ==========================================

  // 1. GENERAR PNJ GENERAL OFICIAL
  generateNpc: function() {
    var nombre = this.pick(this.nombres);

    // Perfil básico
    var dAsc = this.d(12);
    var dEdad = this.d(8);
    var dAlin = this.d(6);
    var dRiq = this.d(6);

    var asc = this.ascendenciaPnj(dAsc);
    var edad = this.edadPnj(dEdad);
    var alin = this.alineamientoPnj(dAlin);
    var riq = this.riquezaPnj(dRiq);

    // Ocupación en cuadrícula 2d4
    var fila = this.d(4);
    var col = this.d(4);
    var ocupacion = this.ocupacionesMatriz[fila - 1][col - 1];

    // Cualidades 3d20
    var dAp = this.d(20);
    var dMan = this.d(20);
    var dSec = this.d(20);

    var ap = this.aparienciasPnj[dAp];
    var man = this.maniasPnj[dMan];
    var sec = this.secretosPnj[dSec];

    return {
      nombre: `${nombre} (${ocupacion})`,
      perfil: `${asc}, ${edad} | Alineamiento: ${alin} | Riqueza: ${riq}`,
      ocupacion: ocupacion,
      apariencia: ap,
      habito: man,
      secreto: sec,
      rolls: `Perfil: [1d12:${dAsc}, 1d8:${dEdad}, 1d6:${dAlin}, 1d6:${dRiq}] | Ocupación 2d4:[Fila ${fila}, Col ${col}] | Cualidades 3d20:[${dAp}, ${dMan}, ${dSec}]`
    };
  },

  // 2. GENERAR SEGUIDOR (PÁRAMOS AVENTURADOS)
  generateFollower: function() {
    var nombre = this.pick(this.nombres);
    var dCalidad = this.d(12);
    var dTrasfondo = this.d(12);
    var dInstinto = this.d(12);
    var dMotivacion = this.d(12);
    var dPg = this.d(12);
    var dDmg = this.d(12);

    var calidadInfo = this.calidadesSeguidor(dCalidad);
    
    var trasfondoText = this.trasfondosSeguidor(dTrasfondo);
    if (trasfondoText === "DOBLE") {
      var t1 = this.trasfondosSeguidor(this.d(11));
      var t2 = this.trasfondosSeguidor(this.d(11));
      trasfondoText = `Doble trasfondo: 1) ${t1} | 2) ${t2}`;
    }

    var instintoText = this.instintosSeguidor[dInstinto];
    var motivacionText = this.motivacionesSeguidor[dMotivacion];
    var combateInfo = this.combateSeguidor(dPg, dDmg);

    return {
      nombre: `Seguidor: ${nombre}`,
      calidad: `${calidadInfo.nivel} (${calidadInfo.mod})`,
      etiquetas: calidadInfo.etiquetas,
      trasfondo: trasfondoText,
      instinto: instintoText,
      coste: motivacionText,
      combate: `${combateInfo.pgText} | Daño: ${combateInfo.dmgText}`,
      pgVal: combateInfo.pgVal,
      rolls: `1d12: Calidad:[${dCalidad}] Trasf:[${dTrasfondo}] Inst:[${dInstinto}] Coste:[${dMotivacion}] PG:[${dPg}] Daño:[${dDmg}]`
    };
  },

  // 3. GENERAR BANDA DE RIVALES OFICIAL (RIVAL CRAWLERS)
  generateRivals: function() {
    var dNum = this.d(4) + 1; // 1d4 + 1 miembros
    var dRen = this.d(6);
    var dSec = this.d(6) + this.d(6); // 2d6 secreto
    var dRiq = this.d(6);
    var dAlin = this.d(6);

    var renombre = this.renombreRivales[dRen];
    var secreto = this.secretosRivales(dSec);
    var riqueza = this.riquezaRivales[dRiq];
    var alineamiento = this.alineamientoRivales[dAlin];

    // Nombre y Reputación con 2d20 independientes
    var dNombre = this.d(20);
    var dFama = this.d(20);
    var nombreGrupo = this.nombresGrupoRivales[dNombre];
    var famaGrupo = this.reputacionGrupoRivales[dFama];

    // Tácticas por alineamiento (1d4)
    var dTactica = this.d(4);
    var tactica = this.tacticasRivales[alineamiento][dTactica];

    // Generar miembros individuales
    var miembros = [];
    for (var i = 0; i < dNum; i++) {
      var dAsc = this.d(12);
      var dClase = this.d(4);
      var dNivel = this.d(6);

      var asc = this.ascendenciaMiembro(dAsc);
      var clase = this.claseMiembro[dClase];
      var nombreM = this.pick(this.nombres);

      miembros.push(`• <strong>${nombreM}</strong>: ${asc} ${clase} (Nivel ${dNivel})`);
    }

    return {
      nombre: nombreGrupo,
      fama: famaGrupo,
      rasgos: `Renombre: ${renombre} | Riqueza: ${riqueza} | Alineamiento: ${alineamiento}`,
      secreto: secreto,
      tactica: tactica,
      miembros: miembros.join("<br>"),
      rolls: `Grupo: Miembros: 1d4+1:[${dNum}] | Rasgos: [Ren: ${dRen}, Sec: ${dSec}, Riq: ${dRiq}, Alin: ${dAlin}] | 2d20:[Nom: ${dNombre}, Fama: ${dFama}] | Táctica: 1d4:[${dTactica}]`
    };
  }
};