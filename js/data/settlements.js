window.SD_DATA = window.SD_DATA || {};

window.SD_DATA.SETTLEMENTS = {
  d: function(sides) {
    return Math.floor(Math.random() * sides) + 1;
  },

  pick: function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  },

  // 1. NOMBRES DE ASENTAMIENTO (1d8)
  nombres: {
    aldea: [
      "Fuerte de Bruga (Bruga's Hold)", "Última Guardia (Lastwatch)", "Aguaclara / Aguamala (Darkwater)",
      "Ostlin", "Caída de Árbol (Treefall)", "Vorn", "Colinarce (Hillshire)", "Refugio Nocturno (Nighthaven)"
    ],
    pueblo: [
      "Valleclaro (Fairhollow)", "Torreón de Ivan (Ivan's Keep)", "Galina", "Farolbrillante (Brightlantern)",
      "Cresta de Corvin (Corvin's Crest)", "Puentedehierro (Ironbridge)", "Skalvin", "Toresk"
    ],
    ciudad: [
      "Doraine", "Meridia", "Puerta del Rey (King's Gate)", "Myrkhos",
      "Rularn", "Ordos", "Thane", "Rahgbat"
    ],
    metropolis: [
      "Gran Myrkhos", "Metrópolis de Doraine", "Bastión de Rularn", "Ordos la Magnífica",
      "Thane de las Siete Torres", "Meridia Mayor", "Nueva Rahgbat", "Ciudad Imperial de la Puerta"
    ]
  },

  // 2. DISTRITOS Y PUNTOS DE INTERÉS
  distritosNombres: {
    1: "Suburbios / Bajos fondos (Slums)",
    2: "Distrito Bajo (Low)",
    3: "Distrito Artesanal (Artisan)",
    4: "Mercado (Market)",
    5: "Distrito Alto (High)",
    6: "Distrito del Templo",
    7: "Distrito Universitario (University)",
    8: "Distrito del Castillo"
  },

  puntosInteresPorDistrito: {
    1: { 1: "Pensión de mala muerte", 2: "Taberna pobre", 3: "Taberna pobre", 4: "Guarida criminal", 5: "Tienda pobre", 6: "Choza de brujo/bruja" },
    2: { 1: "Cementerio", 2: "Taberna pobre", 3: "Taberna pobre", 4: "Tienda pobre", 5: "Tienda estándar", 6: "Almacenes / Tinglados" },
    3: { 1: "Picota y cepos", 2: "Templo modesto", 3: "Templo modesto", 4: "Taberna estándar", 5: "Taberna estándar", 6: "Tienda rica" },
    4: { 1: "Adivino / Clarividente", 2: "Bienes raros y exóticos", 3: "Bienes raros y exóticos", 4: "Bienes raros y exóticos", 5: "Boticario", 6: "Mercado negro ilícito" },
    5: { 1: "Sede gremial (Guildhouse)", 2: "Taberna rica", 3: "Taberna rica", 4: "Mansión señorial", 5: "Tienda rica", 6: "Puesto de la guardia" },
    6: { 1: "Templo en ruinas", 2: "Capilla de deidad menor", 3: "Capilla de deidad menor", 4: "Santuario prohibido", 5: "Templo de dios mayor", 6: "Lugar santo venerado" },
    7: { 1: "Biblioteca", 2: "Sala de conferencias / Aulas", 3: "Sala de conferencias / Aulas", 4: "Taberna estándar", 5: "Taberna estándar", 6: "Torre de mago" },
    8: { 1: "Casa de baños reales", 2: "Guarnición de la guardia", 3: "Guarnición de la guardia", 4: "Teatro o coliseo", 5: "Teatro o coliseo", 6: "Castillo real" }
  },

  // 3. TABERNAS DESACOPLADAS (1d20 Nombre + 1d20 Fama)
  tabernasNombres: {
    1: "La Rata Carmesí (The Crimson Rat)",
    2: "La Moza Danzante (The Dancing Wench)",
    3: "El Perro y el Farol (The Dog & Lantern)",
    4: "La Anguila Oxidada (The Rusty Eel)",
    5: "El Cáliz del Demonio (The Demon's Goblet)",
    6: "El Tridente Cantarín (The Singing Trident)",
    7: "El Jabalí y la Vela (The Boar & Candle)",
    8: "La Daga de Plata (The Silver Dagger)",
    9: "La Rueda Mugrienta (The Filthy Wheel)",
    10: "El Cerdo del Capitán (The Captain's Pig)",
    11: "La Serpiente Alegre (The Jolly Snake)",
    12: "El Camello Sabio (The Wise Camel)",
    13: "Capa y Dragón (Cloak & Dragon)",
    14: "El Hacha Real (The Royal Axe)",
    15: "La Campana Dorada (The Gilded Bell)",
    16: "La Espada y el Jarro (The Blade & Tankard)",
    17: "El Escudo Borracho (The Drunken Shield)",
    18: "Copa y Cuchilla (Cup & Blade)",
    19: "El Yunque Enjoyado (The Jeweled Anvil)",
    20: "La Rana y el Bardo (The Frog & Bard)"
  },

  tabernasFamas: {
    1: "Juego clandestino de altas apuestas",
    2: "Venta ilícita de venenos",
    3: "Clientes y patrones magos",
    4: "Rituales de sectarios en el sótano",
    5: "Comida y bebidas exóticas y raras",
    6: "Concursos de baile",
    7: "Peleas brutales y sangrientas",
    8: "Túneles antiguos en la bodega",
    9: "Matones a sueldo disponibles",
    10: "Espías del Gremio de Ladrones",
    11: "Hostilidad hacia lanzadores de conjuros",
    12: "Clientela habitual de la guardia de la ciudad",
    13: "Fosos de combate clandestinos",
    14: "Actuaciones de bardos legendarios",
    15: "Reuniones de traición y conspiración",
    16: "Prohibición absoluta de portar armas",
    17: "Hostilidad abierta hacia los forasteros",
    18: "Colección de taxidermia exótica",
    19: "Clientela de piratas y contrabandistas",
    20: "Concursos de beber hasta caerse"
  },

  menuPobre: [
    "Repollo hervido (1d4 pc)", "Dátiles y aceitunas (1d4 pc)", "Guiso de cabra (1d4 pc)", "Huevos encurtidos (1d4 pc)",
    "Pan y queso (1d4 pc)", "Caldo sustancioso (1d4 pc)", "Empanada de carne (1d4 pc)", "Brocheta de champiñones (1d4 pc)",
    "Pichón asado (1d4 pc)", "Pan plano con ajo (1d4 pc)", "Muslo de pavo (1d4 pc)", "Rata en un palo (1d4 pc)"
  ],
  menuEstandar: [
    "Filete de caimán (1d6 pp)", "Jamón al romero (1d6 pp)", "Pez flagelador crudo (1d6 pp)", "Venado sellado al fuego (1d6 pp)",
    "Avestruz a la manteca (1d6 pp)", "Curry picante de ternera (1d6 pp)", "Ancas de rana saladas (1d6 pp)", "Caracoles a las finas hierbas (1d6 pp)",
    "Anguila tigre a la parrilla (1d6 pp)", "Jabalí asado al espetón (1d6 pp)", "Cuello de pato al azafrán (1d6 pp)", "Pudín carmesí (1d6 pp)"
  ],
  menuRico: [
    "Ojos fritos de basilisco (1d8 po)", "Filete de serpiente gigante (1d8 po)", "Huevos de grifo (1d8 po)", "Escarabajos confitados (1d8 po)",
    "Huesos horneados de trol (1d8 po)", "Alitas de cocatriz (1d8 po)", "Gusanos de seda crujientes (1d8 po)", "Murciélago aguijón asado (1d8 po)",
    "Cola de langosta gigante (1d8 po)", "Lengua de draco/wyvern (1d8 po)", "Algas aulladoras (1d8 po)", "Jarretes de dragón (1d8 po)"
  ],

  bebidas: {
    1: "Grog de percebes (1 pc) - Tirada de CON DC 9 o ceguera durante 1 hora",
    2: "Aguachirle adulterada (3 pc) - Tóxica, -1 a CON durante 1 hora",
    3: "Vino avinagrado (5 pc) - Dientes púrpura, -1 a CAR durante 1 hora",
    4: "Cerveza rancia (5 pc) - Entorpece sentidos, -1 a SAB durante 1 hora",
    5: "Aguardiente puro (1 pp) - Quema, elimina 1 efecto negativo de otra bebida",
    6: "Cerveza de la casa (2 pp) - Fresca y pura, la 1ª jarra es gratis",
    7: "Hidromiel de otoño (3 pp) - Floral, duplica el efecto de la sig. bebida",
    8: "Vino de verano mediano (5 pp) - Espumoso, +1 a CAR durante 1 hora",
    9: "Brandy élfico (5 pp) - Especiado, +1 a INT durante 1 hora",
    10: "Cerveza dorada enana (5 pp) - Helada, recupera 1d4 PG por jarra",
    11: "Vino real añejo (2 po) - Suave y selecto, +1 a SAB durante 1 hora",
    12: "Whisky Van Dinkle (20 po/sorbo) - Solo 5 botellas destiladas, +1 PX"
  },

  // 4. TIENDAS DESACOPLADAS (1d20 Nombre + 1d20 Fama)
  tiendasPorRiqueza: {
    pobre: [
      "Panadería inmunda", "Equipo de aventura usado", "Recolector de cadáveres",
      "Casa de empeños / Perista", "Prestamista / Usurero", "Recolector de estiércol",
      "Tenería / Curtiduría", "Cirujano de callejón", "Cazador de ratas",
      "Pescadero", "Garito de juego", "Fumadero de drogas / opio"
    ],
    estandar: [
      "Cervecero / Destilador", "Carnicero", "Sastre", "Herrero común",
      "Equipo de aventurero", "Trabajador del cuero", "Carpintero de barcos",
      "Cantero / Picapedrero", "Heraldo / Pregonero", "Ganado y bestias de tiro"
    ],
    rica: [
      "Sastre de alta costura", "Soplador de vidrio", "Joyero", "Boticario",
      "Artista / Pintor", "Escriba / Copista", "Salón gremial (Guildhall)",
      "Orfebre", "Maestro herrero", "Antigüedades y curiosidades"
    ]
  },

  tiendasNombres: {
    1: "Fink e Hijos (Fink & Sons)",
    2: "El Sapo Imperial (Imperial Toad)",
    3: "El Martillo Robusto (The Stout Hammer)",
    4: "Mercancías de Rose (Rose's Commodities)",
    5: "Las Hijas del Rey (The King's Daughters)",
    6: "Zorro y Enseres (Fox & Sundries)",
    7: "Castillo Noble (Noble Castle)",
    8: "Galas de Sylvia (Sylvia's Finery)",
    9: "Curiosidades del Alba (Sunrise Oddments)",
    10: "El Escarabajo de la Esquina (The Corner Beetle)",
    11: "Almacén de Grigor (Grigor's Storehouse)",
    12: "Torreón Real (Royal Keep)",
    13: "Corona y Monedas (Crown & Coins)",
    14: "El Fogón de Ralina (Ralina's Hearth)",
    15: "La Rueda de la Aldea (The Village Wheel)",
    16: "Mercancías Doradas (Golden Wares)",
    17: "Bota y Mercado (Boot & Market)",
    18: "El Farol de Marvolo (Marvolo's Lantern)",
    19: "Los Víveres Alegres (The Merry Vendibles)",
    20: "Los Cepos de Jade (The Jade Stocks)"
  },

  tiendasFamas: {
    1: "Dueño anciano y muy querido",
    2: "Comprar cualquier cosa de valor",
    3: "Cobrar un sobreprecio a los forasteros",
    4: "Tapadera del Gremio de Ladrones",
    5: "La gata de la tienda, Crumpet",
    6: "Se necesita contraseña para entrar",
    7: "Cerveza gratis con cada compra",
    8: "Guardaespaldas fuertemente armados",
    9: "Pagar oro excelente por objetos raros",
    10: "Sala secreta tras una estantería",
    11: "Perista de bienes robados e ilícitos",
    12: "Hacen sonar un gong con cada venta",
    13: "Bienes procedentes de tierras lejanas",
    14: "Artículos defectuosos y baratos",
    15: "Acusar a los clientes de ser ladrones",
    16: "Todo su género está teñido de azul",
    17: "El loro parlante del dueño",
    18: "Famosa estatua de bronce de un diablillo",
    19: "Estar encantada / embrujada",
    20: "Grave plaga de roedores agresivos"
  },

  clientesMatriz: [
    ["Mago estrafalario", "1d10 niños", "Vieja bruja con risotadas", "Enano ruidoso"],
    ["Elfo nervioso", "Matón sospechoso", "Guardia de la ciudad", "1d4 clérigos"],
    ["Goblin pirata", "Mago encapuchado", "Caballero semiorco", "Hombre borracho"],
    ["Niño con mirada fija", "Aventureros rivales", "Mediano taciturno", "Ladronzuelo / Carterista"]
  ],

  // ==========================================
  // DISPARADORES DE GENERACIÓN
  // ==========================================
  generateSettlement: function(tipoParam) {
    var sizeKey = tipoParam ? tipoParam.toLowerCase() : "pueblo";
    if (sizeKey.indexOf("aldea") !== -1) sizeKey = "aldea";
    else if (sizeKey.indexOf("metrop") !== -1) sizeKey = "metropolis";
    else if (sizeKey.indexOf("ciudad") !== -1) sizeKey = "ciudad";
    else sizeKey = "pueblo";

    var d8Name = this.d(8);
    var listaNombres = this.nombres[sizeKey] || this.nombres.pueblo;
    var nombreAsentamiento = listaNombres[d8Name - 1];

    var diceCount = 4;
    var diceSides = 4;
    var labelSize = "Pueblo (4d4)";

    if (sizeKey === "aldea") {
      diceCount = 3; diceSides = 4; labelSize = "Aldea (3d4)";
    } else if (sizeKey === "ciudad") {
      diceCount = 6; diceSides = 6; labelSize = "Gran Ciudad (6d6)";
    } else if (sizeKey === "metropolis") {
      diceCount = 8; diceSides = 8; labelSize = "Metrópolis (8d8)";
    }

    var d6Align = this.d(6);
    var alineamiento = "Legal (Lawful)";
    if (d6Align >= 4 && d6Align <= 5) alineamiento = "Neutral";
    else if (d6Align === 6) alineamiento = "⚠️ Caótico (Zona de riesgo constante)";

    var distritosGenerados = [];
    var highestDie = -1;
    var govDistrictIndex = 0;

    for (var i = 0; i < diceCount; i++) {
      var dieVal = this.d(diceSides);
      if (dieVal > highestDie) {
        highestDie = dieVal;
        govDistrictIndex = i;
      }

      var numPoi = this.d(4);
      var pois = [];
      var poiTable = this.puntosInteresPorDistrito[dieVal] || this.puntosInteresPorDistrito[1];

      for (var p = 0; p < numPoi; p++) {
        var d6Poi = this.d(6);
        pois.push(poiTable[d6Poi]);
      }

      distritosGenerados.push({
        num: i + 1,
        die: dieVal,
        nombre: this.distritosNombres[dieVal] || ("Distrito " + dieVal),
        puntos: pois
      });
    }

    return {
      nombre: nombreAsentamiento,
      tipo: labelSize,
      alineamiento: alineamiento,
      sedeGovIdx: govDistrictIndex + 1,
      distritos: distritosGenerados,
      rolls: "Nombre: 1d8:[" + d8Name + "] | Alineamiento: 1d6:[" + d6Align + "]"
    };
  },

  // GENERADOR DE TABERNAS CON 2d20 INDEPENDIENTES
  generateTavern: function(tipoRiqueza) {
    var d20Nombre = this.d(20);
    var d20Fama = this.d(20);

    var nombreTab = this.tabernasNombres[d20Nombre];
    var famaTab = this.tabernasFamas[d20Fama];

    var menu = [];
    var bebidasList = [];
    var categoria = tipoRiqueza || "Estandar";

    if (categoria === "Pobre") {
      for (var i = 0; i < 3; i++) menu.push(this.pick(this.menuPobre));
      for (var j = 0; j < 2; j++) bebidasList.push(this.bebidas[this.d(6)]);
    } else if (categoria === "Rica") {
      menu.push(this.pick(this.menuEstandar));
      menu.push(this.pick(this.menuRico));
      menu.push(this.pick(this.menuRico));
      for (var k = 0; k < 3; k++) {
        var bRoll = Math.min(12, this.d(6) + this.d(6));
        bebidasList.push(this.bebidas[bRoll]);
      }
    } else {
      menu.push(this.pick(this.menuPobre));
      menu.push(this.pick(this.menuEstandar));
      menu.push(this.pick(this.menuEstandar));
      for (var l = 0; l < 3; l++) bebidasList.push(this.bebidas[this.d(12)]);
    }

    return {
      nombre: nombreTab,
      fama: famaTab,
      categoria: categoria,
      menu: menu,
      bebidas: bebidasList,
      rolls: "2d20 Taberna: [Nombre: " + d20Nombre + ", Fama: " + d20Fama + "]"
    };
  },

  // GENERADOR DE TIENDAS CON 2d20 INDEPENDIENTES
  generateShop: function(tipoRiqueza) {
    var categoria = tipoRiqueza || "estandar";
    var d20Nombre = this.d(20);
    var d20Fama = this.d(20);

    var nombreShop = this.tiendasNombres[d20Nombre];
    var famaShop = this.tiendasFamas[d20Fama];

    var listaTipos = this.tiendasPorRiqueza[categoria.toLowerCase()] || this.tiendasPorRiqueza.estandar;
    var tipoGiro = this.pick(listaTipos);

    // Cliente interesante (2d4 Matriz)
    var fila = this.d(4);
    var col = this.d(4);
    var cliente = this.clientesMatriz[fila - 1][col - 1];

    return {
      nombre: nombreShop,
      tipo: tipoGiro,
      fama: famaShop,
      cliente: cliente,
      categoria: categoria.toUpperCase(),
      rolls: "2d20 Tienda: [Nombre: " + d20Nombre + ", Particularidad: " + d20Fama + "] | Cliente: 2d4:[Fila " + fila + ", Col " + col + "]"
    };
  }
};