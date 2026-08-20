window.SD_DATA = window.SD_DATA || {};

window.SD_DATA.DUNGEONS = {
  d: function(sides) {
    return Math.floor(Math.random() * sides) + 1;
  },

  pick: function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  },

  // 3.1 CIMIENTOS DE LA MAZMORRA (3d12)
  constructores: {
    1: "Civilización antigua / Precursora",
    2: "Culto fanático / Secta",
    3: "Imperio humano extinto",
    4: "Clan enano subterráneo",
    5: "Enclave élfico ancestral",
    6: "Arcanista / Archimago solitario",
    7: "Señor de la guerra tiránico",
    8: "Gremio de ladrones / Forajidos",
    9: "Entidad planar / Demonio",
    10: "Sociedad secreta de sabios",
    11: "Gigantes o titanes",
    12: "Fenómeno natural o excavación monstruosa"
  },

  funciones: {
    1: "Templo / Lugar sagrado",
    2: "Tumba / Panteón dinástico",
    3: "Fortaleza militar / Puesto de avanzada",
    4: "Mina / Complejo de extracción",
    5: "Refugio / Asentamiento secreto",
    6: "Laboratorio / Taller arcano",
    7: "Prisión / Mazmorra de castigo",
    8: "Almacén / Alijo del tesoro",
    9: "Portal / Nexo de poder",
    10: "Biblioteca / Archivo prohibido",
    11: "Residencia colosal / Palacio",
    12: "Guarida de bestias / Colmena"
  },

  ruinas: {
    1: "Cataclismo natural / Terremoto",
    2: "Invasión monstruosa / Horda",
    3: "Maldición / Desastre arcano",
    4: "Plaga / Enfermedad erradicadora",
    5: "Guerra civil / Traición interna",
    6: "Agotamiento de recursos",
    7: "Monstruo despertado en el fondo",
    8: "Brecha planar / Corrupción",
    9: "Intervención divina / Castigo",
    10: "Colapso estructural / Inundación",
    11: "Abandono ritual voluntario",
    12: "Furia salvaje / Devorado por el tiempo"
  },

  // 3.3 NATURALEZA DE LOS TEMAS (1d12)
  temasMundanos: {
    1: "Descomposición / Deterioro",
    2: "Tortura y agonía",
    3: "Locura creciente",
    4: "Desesperación («Todo está perdido»)",
    5: "Noble sacrificio recordado",
    6: "Furia salvaje y sangre",
    7: "Avaricia y saqueo",
    8: "Asedio y defensa rota",
    9: "Fanatismo religioso",
    10: "Traición fratricida",
    11: "Soledad y olvido",
    12: "Hambre insaciable"
  },

  temasInusuales: {
    1: "Veneno y ponzoña",
    2: "Trampas mecánicas letales",
    3: "Crecimiento fúngico descontrolado",
    4: "Bestias mutadas",
    5: "Culto a las sombras",
    6: "Niebla helada perenne",
    7: "Aguas estancadas corruptas",
    8: "Ecos y susurros fantasmales",
    9: "Peste o plaga latente",
    10: "Tumbas profanadas",
    11: "Rastro de fuego abrasador",
    12: "Presencia feérica embaucadora"
  },

  temasExtraordinarios: {
    1: "Portal planar activo",
    2: "Realidad distorsionada / Anomalía",
    3: "Presencia divina latente",
    4: "Magia temporal / Ecos del pasado",
    5: "Fuego fatuo devorador",
    6: "Drenaje arcano ambiental",
    7: "Mente colmena",
    8: "Geometría no euclidiana",
    9: "Entidad estelar dormida",
    10: "Silencio mágico absoluto",
    11: "Levitación e ingravidez",
    12: "Caos elemental puro"
  },

  // 3.5 TABLA DE TRAMPAS OFICIALES (3d12)
  tablaTrampas: {
    tipos: {
      1: "Ballesta",
      2: "Lluvia de agujas",
      3: "Gas tóxico",
      4: "Red con púas",
      5: "Roca rodante",
      6: "Cuchilla cortante",
      7: "Foso con estacas",
      8: "Jabalina",
      9: "Glifo mágico",
      10: "Ráfaga de fuego",
      11: "Bloque que cae",
      12: "Estatua maldita"
    },
    activadores: {
      1: "Alambre de tropiezo",
      2: "Placa de presión",
      3: "Abrir una puerta",
      4: "Interruptor o botón",
      5: "Peldaño falso en escalera",
      6: "Romper un haz de luz",
      7: "Tirar de una palanca",
      8: "Cerrar una puerta",
      9: "Pronunciar una palabra",
      10: "Gancho en un hilo",
      11: "Retirar un objeto",
      12: "Lanzar un conjuro"
    },
    efectos: {
      1: "1d6 de daño",
      2: "1d6 de daño / Sueño (CD 11 CON)",
      3: "1d6 de daño / Paralizar (CD 11 CON)",
      4: "1d6 de daño / Cegar (CD 11 CON)",
      5: "2d8 de daño contundente",
      6: "2d8 de daño / Sueño (CD 13 CON)",
      7: "2d8 de daño / Paralizar (CD 13 CON)",
      8: "2d8 de daño / Confusión (CD 13 SAB)",
      9: "3d10 de daño arcano",
      10: "3d10 de daño / Paralizar (CD 15 CON)",
      11: "3d10 de daño / Inconsciente (CD 15 CON)",
      12: "3d10 de daño / Petrificar (CD 15 CON)"
    }
  },

  descubrimientos: [
    "Inscripción en relieve con una pista secreta",
    "Cofre oculto tras un panel falso",
    "Fuente con agua de propiedades curativas (1d6 PG)",
    "Cadáver de un aventurero con una ganzúa de plata",
    "Altar dedicado a una deidad olvidada",
    "Mural que muestra el mapa parcial del nivel inferior"
  ],

  // ==========================================
  // DISPARADORES DE GENERACIÓN
  // ==========================================

  // 1. CIMIENTOS Y COMPLEJO
  generateDungeonBase: function() {
    var dConst = this.d(12);
    var dFunc = this.d(12);
    var dRuina = this.d(12);

    var constructor = this.constructores[dConst];
    var funcion = this.funciones[dFunc];
    var ruina = this.ruinas[dRuina];

    var dEscala = this.d(12);
    var tamaño = "";
    var numTemas = 1;
    var numSalas = 0;
    var formulaSalas = "";

    if (dEscala <= 3) {
      tamaño = "Pequeña";
      numTemas = this.d(2);
      numSalas = 5 + this.d(3);
      formulaSalas = "6 a 8 áreas";
    } else if (dEscala <= 9) {
      tamaño = "Mediana";
      numTemas = 3;
      numSalas = this.d(6) + this.d(6) + 4;
      formulaSalas = numSalas + " áreas (2d6+4)";
    } else if (dEscala <= 11) {
      tamaño = "Grande";
      numTemas = 4;
      numSalas = this.d(6) + this.d(6) + this.d(6) + 6;
      formulaSalas = numSalas + " áreas (3d6+6)";
    } else {
      tamaño = "Enorme";
      numTemas = 5;
      numSalas = this.d(6) + this.d(6) + this.d(6) + this.d(6) + 10;
      formulaSalas = numSalas + " áreas (4d6+10)";
    }

    var temasSeleccionados = [];
    for (var i = 0; i < numTemas; i++) {
      var dTipoTema = this.d(12);
      var dElemento = this.d(12);
      var temaNombre = "";
      var tipoCat = "";

      if (dTipoTema <= 5) {
        tipoCat = "Mundano";
        temaNombre = this.temasMundanos[dElemento];
      } else if (dTipoTema <= 9) {
        tipoCat = "Inusual";
        temaNombre = this.temasInusuales[dElemento];
      } else {
        tipoCat = "Extraordinario";
        temaNombre = this.temasExtraordinarios[dElemento];
      }
      temasSeleccionados.push("• [" + tipoCat + "] " + temaNombre + " (1d12:[" + dElemento + "])");
    }

    return {
      nombre: "Mazmorra: " + funcion,
      constructor: constructor,
      funcion: funcion,
      ruina: ruina,
      escala: tamaño + " // " + formulaSalas,
      temas: temasSeleccionados.join("<br>"),
      rolls: "Cimientos 3d12: [" + dConst + ", " + dFunc + ", " + dRuina + "] | Escala 1d12: [" + dEscala + "]"
    };
  },

  // 2. SONDEAR SALA (1d12)
  generateRoom: function() {
    var d12 = this.d(12);
    var clasificacion = "";
    var contenido = "";
    var tieneTema = false;
    var esUnica = false;

    if (d12 === 1) {
      clasificacion = "Común (Sin tema)"; contenido = "Vacía";
    } else if (d12 === 2) {
      clasificacion = "Común (Sin tema)"; contenido = "Peligro";
    } else if (d12 <= 4) {
      clasificacion = "Común (Sin tema)"; contenido = "Descubrimiento + Peligro";
    } else if (d12 <= 6) {
      clasificacion = "Común (Sin tema)"; contenido = "Descubrimiento";
    } else if (d12 === 7) {
      clasificacion = "Común (Con tema activo)"; contenido = "Peligro"; tieneTema = true;
    } else if (d12 === 8) {
      clasificacion = "Común (Con tema activo)"; contenido = "Descubrimiento + Peligro"; tieneTema = true;
    } else if (d12 === 9) {
      clasificacion = "Común (Con tema activo)"; contenido = "Descubrimiento"; tieneTema = true;
    } else if (d12 === 10) {
      clasificacion = "⭐ ÚNICA (Con tema activo)"; contenido = "Peligro"; tieneTema = true; esUnica = true;
    } else if (d12 === 11) {
      clasificacion = "⭐ ÚNICA (Con tema activo)"; contenido = "Descubrimiento + Peligro"; tieneTema = true; esUnica = true;
    } else {
      clasificacion = "⭐ ÚNICA (Con tema activo)"; contenido = "Descubrimiento"; tieneTema = true; esUnica = true;
    }

    // Resolver detalles del contenido conectando con la tabla de trampas o descubrimientos
    var detalleContenido = "";
    if (contenido === "Vacía") {
      detalleContenido = "Polvo, escombros y silencio. Sin amenazas inmediatas.";
    } else if (contenido === "Peligro") {
      var tr = this.generateTrap();
      detalleContenido = "⚠️ <strong>Peligro / Trampa:</strong> " + tr.trampa + " activada por " + tr.activador.toLowerCase() + " (" + tr.efecto + ").";
    } else if (contenido === "Descubrimiento") {
      detalleContenido = "✨ <strong>Descubrimiento:</strong> " + this.pick(this.descubrimientos);
    } else {
      var tr2 = this.generateTrap();
      detalleContenido = "✨ <strong>Descubrimiento:</strong> " + this.pick(this.descubrimientos) + "<br>⚠️ <strong>Peligro / Trampa:</strong> " + tr2.trampa + " activada por " + tr2.activador.toLowerCase() + " (" + tr2.efecto + ").";
    }

    return {
      titulo: esUnica ? "ÁREA SINGULAR / CÁMARA MAYOR" : "SALA EXPLORADA",
      clasificacion: clasificacion,
      contenidoResumen: contenido,
      detalle: detalleContenido,
      temaActivo: tieneTema ? "Aplica el tema dominante de la mazmorra" : "Ninguno (Entorno genérico)",
      roll: "Sondeo 1d12: [" + d12 + "]"
    };
  },

  // 3. GENERADOR DE TRAMPAS MODULARES (3d12)
  generateTrap: function() {
    var dTipo = this.d(12);
    var dAct = this.d(12);
    var dEf = this.d(12);

    var trampa = this.tablaTrampas.tipos[dTipo];
    var activador = this.tablaTrampas.activadores[dAct];
    var efecto = this.tablaTrampas.efectos[dEf];

    return {
      nombre: "Trampa de " + trampa,
      trampa: trampa,
      activador: activador,
      efecto: efecto,
      rolls: "3d12 Trampa: [Tipo: " + dTipo + ", Activador: " + dAct + ", Efecto: " + dEf + "]"
    };
  }
};