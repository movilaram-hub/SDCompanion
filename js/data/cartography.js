window.SD_DATA = window.SD_DATA || {};

window.SD_DATA.CARTOGRAPHY = {
  d: function(sides) {
    return Math.floor(Math.random() * sides) + 1;
  },

  pick: function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  },

  nombresPropios: [
    "Árpád", "Béla", "Géza", "István", "Kálmán", "László", "Zoltán",
    "Akin", "Babatunde", "Ebele", "Folami", "Kayode", "Olufemi", "Sipho",
    "Aapo", "Eetu", "Ilmari", "Kalevi", "Onni", "Tapio", "Väinö", "Viljami"
  ],

  // 1.2 ELEMENTOS DE REGIÓN (1d100)
  elementosRegion: function(roll) {
    var table = {
      1: { t: "Arenas", a: "Yermo", n: "PROPIO" }, 2: { t: "Arenas", a: "Yermo", n: "PROPIO" },
      3: { t: "Bahía", a: "Abrupto", n: "Bruja" }, 4: { t: "Bahía", a: "Abrupto", n: "Bruja" },
      5: { t: "Bajío", a: "Amarillo", n: "Calavera" }, 6: { t: "Bajío", a: "Amarillo", n: "Calavera" },
      7: { t: "Bosque", a: "Ardiente", n: "Ceniza" }, 8: { t: "Bosque", a: "Ardiente", n: "Ceniza" },
      9: { t: "Brezal", a: "Árido", n: "Cielo" }, 10: { t: "Brezal", a: "Árido", n: "Cielo" },
      11: { t: "Canal", a: "Azul", n: "Demonio" }, 12: { t: "Canal", a: "Azul", n: "Demonio" },
      13: { t: "Cañada", a: "Bendito", n: "Desesperación" }, 14: { t: "Cañada", a: "Bendito", n: "Desesperación" },
      15: { t: "Cañón", a: "Blanco", n: "Desolación" }, 16: { t: "Cañón", a: "Blanco", n: "Desolación" },
      17: { t: "Cerros", a: "Borroso", n: "Destino" }, 18: { t: "Cerros", a: "Borroso", n: "Destino" },
      19: { t: "Ciénaga", a: "Brillante", n: "Dios" }, 20: { t: "Ciénaga", a: "Brillante", n: "Dios" },
      21: { t: "Colinas", a: "Brumoso", n: "Dragón" }, 22: { t: "Colinas", a: "Brumoso", n: "Dragón" },
      23: { t: "Cumbres", a: "Caído", n: "Esperanza" }, 24: { t: "Cumbres", a: "Caído", n: "Esperanza" },
      25: { t: "Desierto", a: "Clara", n: "Espina" }, 26: { t: "Desierto", a: "Clara", n: "Espina" },
      27: { t: "Dunas", a: "Doradas", n: "Fantasma" }, 28: { t: "Dunas", a: "Doradas", n: "Fantasma" },
      29: { t: "Erial", a: "Eterno", n: "Fuego" }, 30: { t: "Erial", a: "Eterno", n: "Fuego" },
      31: { t: "Escarpe", a: "Fragoso", n: "Furia" }, 32: { t: "Escarpe", a: "Fragoso", n: "Furia" },
      33: { t: "Estepa", a: "Frío", n: "Gigante" }, 34: { t: "Estepa", a: "Frío", n: "Gigante" },
      35: { t: "Fangal", a: "Funesto", n: "Honor" }, 36: { t: "Fangal", a: "Funesto", n: "Honor" },
      37: { t: "Fosa", a: "Furtivo", n: "Horror" }, 38: { t: "Fosa", a: "Furtivo", n: "Horror" },
      39: { t: "Franja", a: "Helado", n: "Hueso" }, 40: { t: "Franja", a: "Helado", n: "Hueso" },
      41: { t: "Iceberg", a: "Infinito", n: "Humo" }, 42: { t: "Iceberg", a: "Infinito", n: "Humo" },
      43: { t: "Jungla", a: "Inquieto", n: "Infierno" }, 44: { t: "Jungla", a: "Inquieto", n: "Infierno" },
      45: { t: "Ladera", a: "Largo", n: "Lluvia" }, 46: { t: "Ladera", a: "Largo", n: "Lluvia" },
      47: { t: "Lago", a: "Lejano", n: "Luz" }, 48: { t: "Lago", a: "Lejano", n: "Luz" },
      49: { t: "Lamedal", a: "Letal", n: "Maldición" }, 50: { t: "Lamedal", a: "Letal", n: "Maldición" },
      51: { t: "Llanos", a: "Letal", n: "Miedo" }, 52: { t: "Llanos", a: "Letal", n: "Miedo" },
      53: { t: "Llanuras", a: "Maldito", n: "Muerte" }, 54: { t: "Llanuras", a: "Maldito", n: "Muerte" },
      55: { t: "Mar", a: "Malvado", n: "Muerto" }, 56: { t: "Mar", a: "Malvado", n: "Muerto" },
      57: { t: "Marca", a: "Marchito", n: "Niebla" }, 58: { t: "Marca", a: "Marchito", n: "Niebla" },
      59: { t: "Marisma", a: "Mortal", n: "Oro" }, 60: { t: "Marisma", a: "Mortal", n: "Oro" },
      61: { t: "Marjal", a: "Muerto", n: "Oscuridad" }, 62: { t: "Marjal", a: "Muerto", n: "Oscuridad" },
      63: { t: "Matorral", a: "Negro", n: "Paraíso" }, 64: { t: "Matorral", a: "Negro", n: "Paraíso" },
      65: { t: "Meseta", a: "Olvidado", n: "Peligro" }, 66: { t: "Meseta", a: "Olvidado", n: "Peligro" },
      67: { t: "Montaña", a: "Oscuro", n: "Pesadumbre" }, 68: { t: "Montaña", a: "Oscuro", n: "Pesadumbre" },
      69: { t: "Monte", a: "Pardo", n: "Plata" }, 70: { t: "Monte", a: "Pardo", n: "Plata" },
      71: { t: "Muro", a: "Peligroso", n: "Refugio" }, 72: { t: "Muro", a: "Peligroso", n: "Refugio" },
      73: { t: "Pantano", a: "Pétrea", n: "Reina" }, 74: { t: "Pantano", a: "Pétrea", n: "Reina" },
      75: { t: "Paraje", a: "Plateado", n: "Rey" }, 76: { t: "Paraje", a: "Plateado", n: "Rey" },
      77: { t: "Páramo", a: "Púrpura", n: "Salvador" }, 78: { t: "Páramo", a: "Púrpura", n: "Salvador" },
      79: { t: "Picos", a: "Rajada", n: "Señor" }, 80: { t: "Picos", a: "Rajada", n: "Señor" },
      81: { t: "Pradera", a: "Regio", n: "Serpiente" }, 82: { t: "Pradera", a: "Regio", n: "Serpiente" },
      83: { t: "Prado", a: "Rojizo", n: "Sol" }, 84: { t: "Prado", a: "Rojizo", n: "Sol" },
      85: { t: "Risco", a: "Rojo", n: "Sombra" }, 86: { t: "Risco", a: "Rojo", n: "Sombra" },
      87: { t: "Rivera", a: "Roto", n: "Tormenta" }, 88: { t: "Rivera", a: "Roto", n: "Tormenta" },
      89: { t: "Sabana", a: "Sagrado", n: "Traidor" }, 90: { t: "Sabana", a: "Sagrado", n: "Traidor" },
      91: { t: "Sierra", a: "Salvaje", n: "Tristeza" }, 92: { t: "Sierra", a: "Salvaje", n: "Tristeza" },
      93: { t: "Soto", a: "Sombrío", n: "Trol" }, 94: { t: "Soto", a: "Sombrío", n: "Trol" },
      95: { t: "Soto", a: "Temible", n: "Trueno" }, 96: { t: "Soto", a: "Temible", n: "Trueno" },
      97: { t: "Valle", a: "Triste", n: "Victoria" }, 98: { t: "Valle", a: "Triste", n: "Victoria" },
      99: { t: "Yermo", a: "Verde", n: "Vida" }, 100: { t: "Yermo", a: "Verde", n: "Vida" }
    };
    return table[roll] || table[1];
  },

  // 1.4 ELEMENTOS DE LUGAR (1d100)
  elementosLugar: function(roll) {
    var table = {
      1: { l: "Abismo", a: "Agudo", n: "PROPIO" }, 2: { l: "Abismo", a: "Agudo", n: "PROPIO" },
      3: { l: "Agujero", a: "Ajado", n: "Agua" }, 4: { l: "Agujero", a: "Ajado", n: "Agua" },
      5: { l: "Alcázar", a: "Alto", n: "Almas" }, 6: { l: "Alcázar", a: "Alto", n: "Almas" },
      7: { l: "Aldea", a: "Antiguo", n: "Barro" }, 8: { l: "Aldea", a: "Antiguo", n: "Barro" },
      9: { l: "Anillo", a: "Ardiente", n: "Brazo" }, 10: { l: "Anillo", a: "Ardiente", n: "Brazo" },
      11: { l: "Árbol", a: "Aullante", n: "Bruja" }, 12: { l: "Árbol", a: "Aullante", n: "Bruja" },
      13: { l: "Arroyo", a: "Azul", n: "Caballero" }, 14: { l: "Arroyo", a: "Azul", n: "Caballero" },
      15: { l: "Barrera", a: "Bajo", n: "Cabeza" }, 16: { l: "Barrera", a: "Bajo", n: "Cabeza" },
      17: { l: "Bosque", a: "Blanco", n: "Cadáver" }, 18: { l: "Bosque", a: "Blanco", n: "Cadáver" },
      19: { l: "Cabaña", a: "Brillante", n: "Calavera" }, 20: { l: "Cabaña", a: "Brillante", n: "Calavera" },
      21: { l: "Caldero", a: "Caído", n: "Ceniza" }, 22: { l: "Caldero", a: "Caído", n: "Ceniza" },
      23: { l: "Camino", a: "Cercano", n: "Corazón" }, 24: { l: "Camino", a: "Cercano", n: "Corazón" },
      25: { l: "Campo", a: "Cobrizo", n: "Cristal" }, 26: { l: "Campo", a: "Cobrizo", n: "Cristal" },
      27: { l: "Capilla", a: "Dentado", n: "Daga" }, 28: { l: "Capilla", a: "Dentado", n: "Daga" },
      29: { l: "Cascada", a: "Dorado", n: "Dedo" }, 30: { l: "Cascada", a: "Dorado", n: "Dedo" },
      31: { l: "Ciénaga", a: "Eterno", n: "Demonio" }, 32: { l: "Ciénaga", a: "Eterno", n: "Demonio" },
      33: { l: "Círculo", a: "Flotante", n: "Diablo" }, 34: { l: "Círculo", a: "Flotante", n: "Diablo" },
      35: { l: "Ciudad", a: "Helado", n: "Dios" }, 36: { l: "Ciudad", a: "Helado", n: "Dios" },
      37: { l: "Ciudad", a: "Hierro", n: "Espada" }, 38: { l: "Ciudad", a: "Hierro", n: "Espada" },
      39: { l: "Colina", a: "Hundido", n: "Esperanza" }, 40: { l: "Colina", a: "Hundido", n: "Esperanza" },
      41: { l: "Cráter", a: "Ilustre", n: "Espíritu" }, 42: { l: "Cráter", a: "Ilustre", n: "Espíritu" },
      43: { l: "Cresta", a: "Inmundo", n: "Fango" }, 44: { l: "Cresta", a: "Inmundo", n: "Fango" },
      45: { l: "Cripta", a: "Irreal", n: "Fantasma" }, 46: { l: "Cripta", a: "Irreal", n: "Fantasma" },
      47: { l: "Cruce", a: "Leal", n: "Fuego" }, 48: { l: "Cruce", a: "Leal", n: "Fuego" },
      49: { l: "Cubil", a: "Lejano", n: "Gigante" }, 50: { l: "Cubil", a: "Lejano", n: "Gigante" },
      51: { l: "Cuesta", a: "Majado", n: "Goblin" }, 52: { l: "Cuesta", a: "Majado", n: "Goblin" },
      53: { l: "Cueva", a: "Maldito", n: "Guerrero" }, 54: { l: "Cueva", a: "Maldito", n: "Guerrero" },
      55: { l: "Espira", a: "Maligno", n: "Héroe" }, 56: { l: "Espira", a: "Maligno", n: "Héroe" },
      57: { l: "Foso", a: "Muerto", n: "Hollín" }, 58: { l: "Foso", a: "Muerto", n: "Hollín" },
      59: { l: "Fuerte", a: "Nefando", n: "Humo" }, 60: { l: "Fuerte", a: "Nefando", n: "Humo" },
      61: { l: "Lago", a: "Negro", n: "Ladrón" }, 62: { l: "Lago", a: "Negro", n: "Ladrón" },
      63: { l: "Montaña", a: "Nublado", n: "Lanza" }, 64: { l: "Montaña", a: "Nublado", n: "Lanza" },
      65: { l: "Muro", a: "Oculto", n: "Mago" }, 66: { l: "Muro", a: "Oculto", n: "Mago" },
      67: { l: "Paso", a: "Oscuro", n: "Maldición" }, 68: { l: "Paso", a: "Oscuro", n: "Maldición" },
      69: { l: "Piedra", a: "Pardo", n: "Mano" }, 70: { l: "Piedra", a: "Pardo", n: "Mano" },
      71: { l: "Playa", a: "Partido", n: "Marinero" }, 72: { l: "Playa", a: "Partido", n: "Marinero" },
      73: { l: "Prado", a: "Perdido", n: "Miedo" }, 74: { l: "Prado", a: "Perdido", n: "Miedo" },
      75: { l: "Puerta", a: "Plateado", n: "Muerte" }, 76: { l: "Puerta", a: "Plateado", n: "Muerte" },
      77: { l: "Puesto", a: "Rocoso", n: "Niño" }, 78: { l: "Puesto", a: "Rocoso", n: "Niño" },
      79: { l: "Refugio", a: "Roja", n: "Ojo" }, 80: { l: "Refugio", a: "Roja", n: "Ojo" },
      81: { l: "Roca", a: "Roto", n: "Oro" }, 82: { l: "Roca", a: "Roto", n: "Oro" },
      83: { l: "Ruina", a: "Salvaje", n: "Pie" }, 84: { l: "Ruina", a: "Salvaje", n: "Pie" },
      85: { l: "Templo", a: "Sinuoso", n: "Piedra" }, 86: { l: "Templo", a: "Sinuoso", n: "Piedra" },
      87: { l: "Torre", a: "Solitario", n: "Plata" }, 88: { l: "Torre", a: "Solitario", n: "Plata" },
      89: { l: "Trono", a: "Sombrío", n: "Reina" }, 90: { l: "Trono", a: "Sombrío", n: "Reina" },
      91: { l: "Tumba", a: "Temible", n: "Rey" }, 92: { l: "Tumba", a: "Temible", n: "Rey" },
      93: { l: "Valla", a: "Terrible", n: "Sacerdote" }, 94: { l: "Valla", a: "Terrible", n: "Sacerdote" },
      95: { l: "Valle", a: "Turulato", n: "Sangre" }, 96: { l: "Valle", a: "Turulato", n: "Sangre" },
      97: { l: "Zanja", a: "Velado", n: "Trol" }, 98: { l: "Zanja", a: "Velado", n: "Trol" },
      99: { l: "Zarzal", a: "Voluble", n: "Villano" }, 100: { l: "Zarzal", a: "Voluble", n: "Villano" }
    };
    return table[roll] || table[1];
  },

  // ==========================================
  // TABLAS OFICIALES D20 DE AVENTURAS
  // ==========================================
  tablaAventuras: {
    acciones: {
      1: "Rescatar", 2: "Encontrar", 3: "Destruir", 4: "Infiltrarse en",
      5: "Burlar / Esquivar", 6: "Devolver", 7: "Derrotar", 8: "Espiar",
      9: "Sobornar", 10: "Entregar", 11: "Escapar de", 12: "Encarcelar",
      13: "Detener", 14: "Hacerse amigo de", 15: "Pacificar / Calmar",
      16: "Persuadir", 17: "Robar", 18: "Escoltar", 19: "Desterrar / Expulsar", 20: "Liberar"
    },
    objetivos: {
      1: "el Cáliz / la Copa", 2: "al Prisionero", 3: "la Espada", 4: "la Cámara acorazada",
      5: "el Culto", 6: "el Espíritu", 7: "al Asesino", 8: "al Demonio",
      9: "al Noble", 10: "al Cazador", 11: "el Rehén", 12: "al Ladrón",
      13: "al Espía", 14: "el Hombre lobo", 15: "la Reliquia", 16: "al Sumo sacerdote",
      17: "al Mercader", 18: "a la Bruja", 19: "el Ritual", 20: "al Vampiro"
    },
    contextos: {
      1: "del mago maligno", 2: "que acecha en los yermos", 3: "en el fondo del río",
      4: "en las alcantarillas de la ciudad", 5: "bajo los túmulos funerarios",
      6: "del héroe caído", 7: "en la biblioteca mágica", 8: "en la corte del rey",
      9: "del linaje ancestral", 10: "en la torre del hechicero",
      11: "en el Bosque Sombrío (Murkwood)", 12: "que se oculta en los suburbios",
      13: "del señor enano", 14: "en la tumba mohosa", 15: "de los caballeros reales",
      16: "que sacrifica inocentes", 17: "en las catacumbas", 18: "que chantajea al barón",
      19: "en el Gremio de Ladrones", 20: "que asesina a los lugareños"
    }
  },

  tablaLugarAventuras: {
    tipos: {
      1: "Minas de", 2: "Abadía de", 3: "Torre de", 4: "Cuevas de",
      5: "Túmulo de", 6: "Madrigueras de", 7: "Cripta de", 8: "Monasterio de",
      9: "Ruina de", 10: "Túneles de", 11: "Ciudadela de", 12: "Tumba de",
      13: "Castillo de", 14: "Templo de", 15: "Fortaleza de", 16: "Isla de",
      17: "Torreón de", 18: "Mazmorra de", 19: "Necrópolis de", 20: "Santuario de"
    },
    descriptores: {
      1: "la Llama", 2: "el Fantasma", 3: "la Oscuridad", 4: "el Pico",
      5: "las Tierras Fronterizas", 6: "el Rey", 7: "el Crepúsculo", 8: "las Profundidades",
      9: "la Joya", 10: "el Dios", 11: "las Tierras", 12: "la Tormenta",
      13: "el Pantano", 14: "el Barranco", 15: "el Valle", 16: "la Horda",
      17: "la Calavera", 18: "la Reina", 19: "los Yermos", 20: "el Héroe"
    },
    temas: {
      1: "Maldita", 2: "Susurrante", 3: "Sangrante", 4: "Velado / Encapuchado",
      5: "Perdidas", 6: "Muerto", 7: "del Bosque Profundo", 8: "Caídas",
      9: "del Aparecido / Renacido", 10: "Congelado", 11: "Relucientes / Brillantes",
      12: "del Caos", 13: "Abandonado", 14: "Marchito / Asolado", 15: "Olvidado",
      16: "Durmiente", 17: "Salvaje", 18: "Impía", 19: "Encantados", 20: "Inmortal"
    }
  },

  // ==========================================
  // DISPARADORES DE GENERACIÓN
  // ==========================================
  generateRegion: function() {
    var d12 = this.d(12);
    var rollT = this.d(100);
    var rollA = this.d(100);
    var rollN = this.d(100);

    var T = this.elementosRegion(rollT).t;
    var A = this.elementosRegion(rollA).a;
    var N = this.elementosRegion(rollN).n;
    if (N === "PROPIO") { N = this.pick(this.nombresPropios); }

    var masculinos = ["Rey", "Demonio", "Dragón", "Dios", "Fuego", "Honor", "Horror", "Humo", "Infierno", "Miedo", "Muerto", "Oro", "Paraíso", "Peligro", "Plata", "Refugio", "Salvador", "Señor", "Sol", "Traidor", "Trol", "Trueno"];
    var art = (masculinos.indexOf(N) !== -1) ? "del" : "de la";

    var finalName = "";
    var formula = "";

    if (d12 <= 4) {
      finalName = A + " " + T;
      formula = "[Adjetivo] [Terreno]";
    } else if (d12 <= 6) {
      finalName = T + " " + art + " " + N;
      formula = "[Terreno] de(l) [Nombre]";
    } else if (d12 <= 8) {
      finalName = "El " + T + " " + A;
      formula = "El [Terreno] [Adjetivo]";
    } else if (d12 <= 10) {
      finalName = N + " " + T;
      formula = "[Nombre] [Terreno]";
    } else if (d12 === 11) {
      finalName = T + " " + A + " de " + N;
      formula = "[Terreno] [Adjetivo] de [Nombre]";
    } else {
      finalName = A + " " + T + " " + art + " " + N;
      formula = "[Adjetivo] [Terreno] de(l) [Nombre]";
    }

    return {
      name: finalName,
      template: formula,
      terreno: T,
      adjetivo: A,
      nombreClave: N,
      rolls: "1d12:[" + d12 + "] | T:[" + rollT + "] A:[" + rollA + "] N:[" + rollN + "]"
    };
  },

  generateLugar: function() {
    var d12 = this.d(12);
    var rollL = this.d(100);
    var rollA = this.d(100);
    var rollN = this.d(100);

    var L = this.elementosLugar(rollL).l;
    var A = this.elementosLugar(rollA).a;
    var N = this.elementosLugar(rollN).n;
    if (N === "PROPIO") { N = this.pick(this.nombresPropios); }

    var masculinos = ["Agua", "Barro", "Brazo", "Caballero", "Cadáver", "Corazón", "Cristal", "Dedo", "Demonio", "Diablo", "Dios", "Espíritu", "Fango", "Fantasma", "Fuego", "Gigante", "Goblin", "Guerrero", "Héroe", "Hollín", "Humo", "Ladrón", "Mago", "Marinero", "Miedo", "Niño", "Ojo", "Oro", "Pie", "Rey", "Sacerdote", "Trol", "Villano"];
    var art = (masculinos.indexOf(N) !== -1) ? "del" : "de la";

    var finalName = "";
    var formula = "";

    if (d12 <= 4) {
      finalName = "El " + L;
      formula = "El [Lugar]";
    } else if (d12 <= 6) {
      finalName = "El " + L + " " + A;
      formula = "El [Lugar] [Adjetivo]";
    } else if (d12 <= 8) {
      finalName = "El " + L + " " + art + " " + N;
      formula = "El [Lugar] de(l) [Nombre]";
    } else if (d12 <= 10) {
      finalName = L + " de " + N;
      formula = "[Lugar] de [Nombre]";
    } else if (d12 === 11) {
      finalName = L + " de " + A;
      formula = "[Lugar] de [Adjetivo]";
    } else {
      finalName = "El " + N + " " + A;
      formula = "El [Nombre] [Adjetivo]";
    }

    return {
      name: finalName,
      template: formula,
      lugar: L,
      adjetivo: A,
      nombreClave: N,
      rolls: "1d12:[" + d12 + "] | L:[" + rollL + "] A:[" + rollA + "] N:[" + rollN + "]"
    };
  },

  // 1.5 GENERADOR DE AVENTURA COMPLETO (3d20 + 3d20)
  generateAventuraGancho: function() {
    // 3d20 de Gancho
    var dAccion = this.d(20);
    var dObjetivo = this.d(20);
    var dContexto = this.d(20);

    var accion = this.tablaAventuras.acciones[dAccion];
    var objetivo = this.tablaAventuras.objetivos[dObjetivo];
    var contexto = this.tablaAventuras.contextos[dContexto];

    var misionTitulo = accion + " " + objetivo;

    // 3d20 de Nombre de Lugar
    var dTipo = this.d(20);
    var dDesc = this.d(20);
    var dTema = this.d(20);

    var tipoLugar = this.tablaLugarAventuras.tipos[dTipo];
    var desc = this.tablaLugarAventuras.descriptores[dDesc];
    var tema = this.tablaLugarAventuras.temas[dTema];

    // Ajuste de preposiciones: "Minas de" + "la Llama" + "Maldita" -> "Minas de la Llama Maldita"
    var nombreLugar = tipoLugar + " " + desc + " " + tema;

    return {
      mision: misionTitulo,
      lugarAventura: nombreLugar,
      accion: accion,
      objetivo: objetivo,
      contexto: contexto,
      rollsMision: "3d20 Gancho: [" + dAccion + ", " + dObjetivo + ", " + dContexto + "]",
      rollsLugar: "3d20 Lugar: [" + dTipo + ", " + dDesc + ", " + dTema + "]"
    };
  }
};