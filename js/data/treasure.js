window.SD_DATA = window.SD_DATA || {};

window.SD_DATA.TREASURE_ENGINE = {
  d(sides) {
    return Math.floor(Math.random() * sides) + 1;
  },
  pick(arr) {
    if (!arr || arr.length === 0) return "";
    return arr[Math.floor(Math.random() * arr.length)];
  },

  // ==========================================
  // 1. TABLAS DE TESORO POR ESCALÓN DE NIVEL (d100)
  // ==========================================
  tables: {
    "0-3": [
      { min: 1, max: 1, desc: "Tenedor de estaño doblado (1 pc)" },
      { min: 2, max: 3, desc: "Antorcha embarrada (2 pc)" },
      { min: 4, max: 5, desc: "Bolsa con guijarros lisos (2 pc)" },
      { min: 6, max: 7, desc: "10 pc en una faltriquera grasienta" },
      { min: 8, max: 9, desc: "Farol oxidado con los cristales rotos (1 po)" },
      { min: 10, max: 11, desc: "Diente de plata (1 po)" },
      { min: 12, max: 13, desc: "Daga mellada y sin filo (1 po)" },
      { min: 14, max: 15, desc: "Dos viales de cristal vacíos (6 po)" },
      { min: 16, max: 17, desc: "60 pp en una bota podrida" },
      { min: 18, max: 19, desc: "Espejo de mano agrietado (8 po)" },
      { min: 20, max: 21, desc: "Gran hacha desportillada (9 po)" },
      { min: 22, max: 23, desc: "10 po en una caja de madera mohosa" },
      { min: 24, max: 25, desc: "Esquirla de esmeralda (10 po)" },
      { min: 26, max: 27, desc: "Gargantilla de bronce con piedras semipreciosas (10 po)" },
      { min: 28, max: 29, desc: "Copa de plata con bordes desgastados (10 po)" },
      { min: 30, max: 31, desc: "Poción de Curación (Nivel 0–3: 1d6 PG) (10 po)" },
      { min: 32, max: 33, desc: "Frasco con aceite de rosa mosqueta perfumado (10 po)" },
      { min: 34, max: 35, desc: "Alabarda de desfile con hoja dorada (12 po)" },
      { min: 36, max: 37, desc: "Broche de marfil tallado como un halcón (15 po)" },
      { min: 38, max: 39, desc: "Daga ceremonial con pomo de cuarzo (15 po)" },
      { min: 40, max: 41, desc: "15 po en una bolsa bordada" },
      { min: 42, max: 43, desc: "Perla pequeña con ligero fulgor (20 po)" },
      { min: 44, max: 45, desc: "Escudo grabado con el emblema de una orden perdida (20 po)" },
      { min: 46, max: 47, desc: "Túnica de seda con ribetes dorados (20 po)" },
      { min: 48, max: 49, desc: "Joya de jaspe tallada como un escarabajo (20 po)" },
      { min: 50, max: 53, desc: "Espada larga con empuñadura de plata (20 po)" },
      { min: 54, max: 55, desc: "Reloj de bolsillo de latón en funcionamiento (25 po)" },
      { min: 56, max: 57, desc: "Cáliz de oro con filigrana en espiral (25 po)" },
      { min: 58, max: 59, desc: "Lingote de plata pura (25 po)" },
      { min: 60, max: 61, desc: "25 po en un cofre de cobre con candado" },
      { min: 62, max: 63, desc: "Capa ligera y cálida tejida con seda de araña (25 po)" },
      { min: 64, max: 65, desc: "Juego de piezas de mesa talladas en marfil fino (25 po)" },
      { min: 66, max: 67, desc: "Cota de malla a medio forjar/terminar (30 po)" },
      { min: 68, max: 69, desc: "Trío emparejado de martillos de guerra (10 po cada uno)" },
      { min: 70, max: 71, desc: "Fragmento de zafiro (30 po)" },
      { min: 72, max: 73, desc: "Brújula de latón que apunta a la magia cercana (30 po)" },
      { min: 74, max: 75, desc: "Estatuilla de jade verde pulido (30 po)" },
      { min: 76, max: 77, desc: "30 po en una arqueta forrada de terciopelo" },
      { min: 78, max: 79, desc: "Anillo de sello de oro con un zafiro (40 po)" },
      { min: 80, max: 81, desc: "Bolsa de polvos alquímicos luminiscentes (40 po)" },
      { min: 82, max: 83, desc: "Cota de malla de excelente factura (60 po)" },
      { min: 84, max: 85, desc: "Esmeralda agrietada (60 po)" },
      { min: 86, max: 87, desc: "Dos perlas lustrosas (40 po cada una)" },
      { min: 88, max: 89, desc: "Pergamino de conjuro de nivel 1 (Tier 1) (80 po)" },
      { min: 90, max: 91, desc: "Poción de Invisibilidad (80 po)" },
      { min: 92, max: 93, desc: "Arma Mágica Aleatoria +1 (Generar con el motor)", isMagicItem: true, itemType: "weapon", bonusForce: "+1" },
      { min: 94, max: 95, desc: "Armadura Mágica Aleatoria +1 (Generar con el motor)", isMagicItem: true, itemType: "armor", bonusForce: "+1" },
      { min: 96, max: 97, desc: "Objeto de Utilidad Mágico (Generar con el motor)", isMagicItem: true, itemType: "utility" },
      { min: 98, max: 99, desc: "Varita de Protección (Wand of Warding) (100 po)", isSingular: true, singularName: "Varita de Protección" },
      { min: 100, max: 100, desc: "Objeto Mágico Singular Legendario (Tirar objeto)", isSingularRandom: true }
    ],
    "4-6": [
      { min: 1, max: 1, desc: "3 pc sueltas por el suelo" },
      { min: 2, max: 3, desc: "Anillo de madera tallado con entrelazados (5 pc)" },
      { min: 4, max: 5, desc: "Llave pesada de hierro (1 pp)" },
      { min: 6, max: 7, desc: "Escudo de madera reforzado con bandas de acero (10 po)" },
      { min: 8, max: 9, desc: "Collar con un ancla de oro (10 po)" },
      { min: 10, max: 11, desc: "Bolsa con 20 canicas de cristal (5 pp cada una)" },
      { min: 12, max: 13, desc: "Espadón con filo de sierra (12 po)" },
      { min: 14, max: 15, desc: "Tres jabalinas con punta de plata (4 po cada una)" },
      { min: 16, max: 17, desc: "Saco de especias raras y exóticas (15 po)" },
      { min: 18, max: 19, desc: "Pipa de caoba con incrustaciones de marfil (25 po)" },
      { min: 20, max: 21, desc: "Juego de dados de hueso pulido (25 po)" },
      { min: 22, max: 23, desc: "Frasco de cobre grabado con la figura de un búho (30 po)" },
      { min: 24, max: 25, desc: "Parche para el ojo hecho de cuero de ala de murciélago (30 po)" },
      { min: 26, max: 27, desc: "Bandolera de cuero con 10 botellas azules (3 po cada una)" },
      { min: 28, max: 29, desc: "Pequeño óleo con el retrato de una elfa (35 po)" },
      { min: 30, max: 31, desc: "Perla opalescente (40 po)" },
      { min: 32, max: 33, desc: "Martillo de guerra ceremonial rematado en oro (40 po)" },
      { min: 34, max: 35, desc: "Anillo de plata con una esmeralda en miniatura (40 po)" },
      { min: 36, max: 37, desc: "Tapiz de un unicornio en un claro del bosque (45 po)" },
      { min: 38, max: 39, desc: "Muñeco articulado de dragón mecánico de forja goblin (45 po)" },
      { min: 40, max: 41, desc: "Cota de malla incompleta / a medio montar (50 po)" },
      { min: 42, max: 43, desc: "Maza con símbolos sagrados incrustados en oro (50 po)" },
      { min: 44, max: 45, desc: "Jarrón delicado y ancestral de manufactura mirkosiana (50 po)" },
      { min: 46, max: 47, desc: "Incienso raro con aroma que repele a los no-muertos (50 po)" },
      { min: 48, max: 49, desc: "Pezuña de minotauro con una herradura de oro macizo (50 po)" },
      { min: 50, max: 53, desc: "Espada larga con una perla ígnea engarzada en el pomo (50 po)" },
      { min: 54, max: 55, desc: "Estatuilla de cristal verde de Memnon (50 po)" },
      { min: 56, max: 57, desc: "Símbolo sagrado carmesí de Ramlaat con un pequeño rubí (55 po)" },
      { min: 58, max: 59, desc: "Seis velas negras grabadas con runas doradas (10 po cada una)" },
      { min: 60, max: 61, desc: "Cota de malla de excelente factura enana (60 po)" },
      { min: 62, max: 63, desc: "Ballesta de hueso de dragón tallada como un dragón rugiendo (60 po)" },
      { min: 64, max: 65, desc: "Armadura de placas incompleta / a medio montar (65 po)" },
      { min: 66, max: 67, desc: "Fragmento de meteorito magnético e iridiscente (70 po)" },
      { min: 68, max: 69, desc: "Espejo de cuerpo entero enmarcado en oro (70 po)" },
      { min: 70, max: 71, desc: "Gran escarabajo verde preservado en ámbar puro (75 po)" },
      { min: 72, max: 73, desc: "Laúd tallado en madera de hierro con herrajes de oro (75 po)" },
      { min: 74, max: 75, desc: "Colmillo de marfil tallado con ángeles combatiendo demonios (80 po)" },
      { min: 76, max: 77, desc: "Escudo de mitral con incrustaciones de pequeñas perlas azules (80 po)" },
      { min: 78, max: 79, desc: "Dos huevos de grifo intactos (40 po cada uno)" },
      { min: 80, max: 81, desc: "Armadura de placas de acero ennegrecido (130 po)" },
      { min: 82, max: 83, desc: "Pergamino de conjuro de nivel 2 (2nd-tier) (140 po)" },
      { min: 84, max: 85, desc: "Poción de Curación (cura 2d6 puntos de golpe) (150 po)" },
      { min: 86, max: 87, desc: "Pergamino de conjuro de nivel 3 (3rd-tier) (200 po)" },
      { min: 88, max: 89, desc: "Poción de Vuelo (200 po)" },
      { min: 90, max: 91, desc: "Poción de Fuerza de Gigante (200 po)" },
      { min: 92, max: 93, desc: "Varita mágica, conjuro de nivel 3 (con 1 maldición) (250 po)", isMagicItem: true, itemType: "utility", forceCurses: 1 },
      { min: 94, max: 95, desc: "Anillo de Caída de Pluma (Ring of Feather Falling) (250 po)", isSingular: true, singularName: "Anillo de Caída de Pluma" },
      { min: 96, max: 97, desc: "Armadura mágica +2 (con 1 beneficio y 1 maldición) (300 po)", isMagicItem: true, itemType: "armor", bonusForce: "+2", forceCurses: 1 },
      { min: 98, max: 99, desc: "Engranaje de Kythera (Kytherian Cog) (300 po)", isSingular: true, singularName: "Engranaje de Kythera" },
      { min: 100, max: 100, desc: "Arma mágica +2 (con 1 beneficio y 1 maldición) (500 po)", isMagicItem: true, itemType: "weapon", bonusForce: "+2", forceCurses: 1 }
    ],
    "7-9": [
      { min: 1, max: 1, desc: "Fragmentos de cristal roto (2 pc)" },
      { min: 2, max: 3, desc: "Par de botas enfangadas (5 pp)" },
      { min: 4, max: 5, desc: "Faltriquera de cuero podrido con 12 pp" },
      { min: 6, max: 7, desc: "Espadón de acero pavonado / azulado (15 po)" },
      { min: 8, max: 9, desc: "Espejo alto y estrecho con marco de bronce (20 po)" },
      { min: 10, max: 11, desc: "Pareja de espadas bastardas con pomos en forma de grifo (20 po)" },
      { min: 12, max: 13, desc: "Estatuilla de plata y oro de un arquero elfo (25 po)" },
      { min: 14, max: 15, desc: "Esmilodonte disecado (30 po)" },
      { min: 16, max: 17, desc: "Collar con camafeo del perfil de un humano (30 po)" },
      { min: 18, max: 19, desc: "Jarra de cuerno de marfil tallada con enanos bebiendo (35 po)" },
      { min: 20, max: 21, desc: "Arco largo de madera de hierro grabado con hojas plateadas (35 po)" },
      { min: 22, max: 23, desc: "Tablero de ajedrez de caoba con piezas de plata (40 po)" },
      { min: 24, max: 25, desc: "Escudo de mitral pulido hasta reflejar como un espejo (45 po)" },
      { min: 26, max: 27, desc: "Cuerno de unicornio en espiral e iridiscente (50 po)" },
      { min: 28, max: 29, desc: "Huevo de basilisco en una bolsa de seda (55 po)" },
      { min: 30, max: 31, desc: "Símbolo sagrado de oro de Madeera con una gran perla (60 po)" },
      { min: 32, max: 33, desc: "Máscara de dragón rojo con filigranas de oro (65 po)" },
      { min: 34, max: 35, desc: "Incensario de oro con figuras esqueléticas encapuchadas (70 po)" },
      { min: 36, max: 37, desc: "Gran estatua de mármol de un ángel acorazado (70 po)" },
      { min: 38, max: 39, desc: "Cota de malla con varias hileras de eslabones de oro (75 po)" },
      { min: 40, max: 41, desc: "Nidada de tres huevos verdes de cocatriz (25 po cada uno)" },
      { min: 42, max: 43, desc: "Cofre de roble con cerradura lleno hasta el borde con 80 po" },
      { min: 44, max: 45, desc: "Túnica de seda azul bordada con lunas plateadas (80 po)" },
      { min: 46, max: 47, desc: "Perla gigante y radiante (80 po)" },
      { min: 48, max: 49, desc: "Farol fabricado con intrincadas vidrieras de colores (80 po)" },
      { min: 50, max: 53, desc: "Pitón articulada de tamaño natural hecha de oro pulido (80 po)" },
      { min: 54, max: 55, desc: "Retrato al óleo de un bardo célebre (85 po)" },
      { min: 56, max: 57, desc: "Trozo de meteorito esculpido como un ídolo con tentáculos (85 po)" },
      { min: 58, max: 59, desc: "Sobretodo de seda negra bordado con un león de oro (90 po)" },
      { min: 60, max: 61, desc: "Dos perlas lustrosas dentro de un cofre de plata (90 po)" },
      { min: 62, max: 63, desc: "Yelmo dorado adornado con plumas de roc (95 po)" },
      { min: 64, max: 65, desc: "Bestiario ilustrado a mano con criaturas muy raras (95 po)" },
      { min: 66, max: 67, desc: "Cría de draco/wyvern preservada dentro de un bloque de ámbar (110 po)" },
      { min: 68, max: 69, desc: "Colgante con tres perlas relucientes (120 po)" },
      { min: 70, max: 71, desc: "Estatua de obsidiana de tamaño natural de un caballo al galope (120 po)" },
      { min: 72, max: 73, desc: "Esmeralda facetada y centelleante (120 po)" },
      { min: 74, max: 75, desc: "Poción de Curación (restaura 3d8 puntos de golpe) (200 po)" },
      { min: 76, max: 77, desc: "Poción de Polimorfismo (Polymorph) (200 po)" },
      { min: 78, max: 79, desc: "Varita mágica, conjuro de nivel 3 (3rd-tier) (250 po)", isMagicItem: true, itemType: "utility" },
      { min: 80, max: 81, desc: "Pergamino de conjuro de nivel 4 (4th-tier) (260 po)" },
      { min: 82, max: 83, desc: "Bola de Cristal (Crystal Ball) (260 po)", isSingular: true, singularName: "Bola de Cristal" },
      { min: 84, max: 85, desc: "Varita mágica, conjuro de nivel 4 (con 1 defecto) (300 po)", isMagicItem: true, itemType: "utility", forceCurses: 1 },
      { min: 86, max: 87, desc: "Vara Inamovible (Immovable Rod) (300 po)", isSingular: true, singularName: "Vara Inamovible" },
      { min: 88, max: 89, desc: "Armadura mágica +2 (con 1 beneficio) (300 po)", isMagicItem: true, itemType: "armor", bonusForce: "+2" },
      { min: 90, max: 91, desc: "Armadura mágica de mitral +2 (con 1 beneficio y 1 virtud) (320 po)", isMagicItem: true, itemType: "armor", bonusForce: "+2", forceVirtue: true },
      { min: 92, max: 93, desc: "Ídolo de escorpión: otorga 1 bendición de Picadura de la Muerte (320 po)", isBoon: true, boonName: "Picadura de la muerte (Death's Sting)" },
      { min: 94, max: 95, desc: "Círculo de nigromancia: otorga 1 bendición de Paso Fantasmal (350 po)", isBoon: true, boonName: "Paso fantasmal (Ghostwalk)" },
      { min: 96, max: 97, desc: "Estatua de búho: otorga 1 bendición de Ojo Arcano (350 po)", isBoon: true, boonName: "Ojo arcano (Arcane Eye)" },
      { min: 98, max: 99, desc: "Arma mágica +2 (con 1 beneficio y 1 defecto) (500 po)", isMagicItem: true, itemType: "weapon", bonusForce: "+2", forceCurses: 1 },
      { min: 100, max: 100, desc: "Arma mágica +3 (con 1 beneficio y 1 virtud) (900 po)", isMagicItem: true, itemType: "weapon", bonusForce: "+3", forceVirtue: true }
    ],
    "10+": [
      { min: 1, max: 1, desc: "Tres platos de plata deslustrados (5 pp cada uno)" },
      { min: 2, max: 3, desc: "Estatuilla de esteatita de Gede con la cabeza partida (3 po)" },
      { min: 4, max: 5, desc: "Barril medio vacío de hidromiel enana (5 po)" },
      { min: 6, max: 7, desc: "Cota de malla dañada que necesita reparación urgente (50 po)" },
      { min: 8, max: 9, desc: "Cinco espadones ceremoniales emparejados (12 po cada uno)" },
      { min: 10, max: 11, desc: "Esmeralda desportillada por la mitad de su valor (60 po)" },
      { min: 12, max: 13, desc: "Anillo de oro con una gran perla negra (65 po)" },
      { min: 14, max: 15, desc: "Cota de malla carmesí con escudo a juego (70 po)" },
      { min: 16, max: 17, desc: "Perla gigante entre las fauces de un murciélago bañado en oro (100 po)" },
      { min: 18, max: 19, desc: "Vidriera que representa a Santa Terragnis contra un dragón (110 po)" },
      { min: 20, max: 21, desc: "Trono de mármol con una perla gigante en el reposacabezas (115 po)" },
      { min: 22, max: 23, desc: "Daga con una esmeralda engarzada en el pomo (120 po)" },
      { min: 24, max: 25, desc: "Trío de perlas con tonalidades azules y violetas (40 po cada una)" },
      { min: 26, max: 27, desc: "Armadura de placas moldeada con el aspecto de un minotauro (130 po)" },
      { min: 28, max: 29, desc: "Armadura de placas azul con grabados de olas rompiendo (130 po)" },
      { min: 30, max: 31, desc: "Escultura de jade de un hombre elefante meditando (140 po)" },
      { min: 32, max: 33, desc: "Laúd magistral del luthier más famoso del reino (140 po)" },
      { min: 34, max: 35, desc: "Gran hacha de hueso de dragón con un rubí en el pomo (220 po)" },
      { min: 36, max: 37, desc: "Escarabajo de oro salpicado de esmeraldas en miniatura (220 po)" },
      { min: 38, max: 39, desc: "Cofre rebosante con 230 po" },
      { min: 40, max: 41, desc: "Bastón plateado rematado por una garra que sostiene un rubí (220 po)" },
      { min: 42, max: 43, desc: "El único retrato conservado de un rey ancestral (240 po)" },
      { min: 44, max: 45, desc: "Colgante de oro con un rubí en talla lágrima (240 po)" },
      { min: 46, max: 47, desc: "Esmeralda gigante en forma de huevo (240 po)" },
      { min: 48, max: 49, desc: "Túnica de seda con cuatro perlas a modo de botones (240 po)" },
      { min: 50, max: 53, desc: "Calavera de plata con un rubí en la cuenca ocular (240 po)" },
      { min: 54, max: 55, desc: "Cota de malla élfica de mitral (240 po)" },
      { min: 56, max: 57, desc: "Caracola gigante opalizada con incrustaciones de plata (250 po)" },
      { min: 58, max: 59, desc: "Sarcófago de oro grabado con inscripciones en un idioma perdido (250 po)" },
      { min: 60, max: 61, desc: "Trozo de meteorito fundido alrededor de un rubí (250 po)" },
      { min: 62, max: 63, desc: "Pergamino de conjuro de nivel 4 (4th-tier) (260 po)" },
      { min: 64, max: 65, desc: "Bolsa de terciopelo que guarda un zafiro lustroso (280 po)" },
      { min: 66, max: 67, desc: "Dragón adulto disecado en tamaño real (360 po)" },
      { min: 68, max: 69, desc: "Torques de plata con un zafiro y dos perlas (360 po)" },
      { min: 70, max: 71, desc: "Diamante deslumbrante e impecable (360 po)" },
      { min: 72, max: 73, desc: "Poción de Curación (restaura 4d10 puntos de golpe) (360 po)" },
      { min: 74, max: 75, desc: "Pergamino de conjuro de nivel 5 (5th-tier) (360 po)" },
      { min: 76, max: 77, desc: "Poción de Extirpación (Potion of Extirpation) (360 po)", isSingular: true, singularName: "Poción de Extirpación" },
      { min: 78, max: 79, desc: "Varita mágica, conjuro de nivel 5 (con 1 virtud y 1 defecto) (360 po)", isMagicItem: true, itemType: "utility", forceCurses: 1, forceVirtue: true },
      { min: 80, max: 81, desc: "Diamante gigante: lanza deseo (wish) una sola vez con éxito garantizado (720 po)", isSingular: true, singularName: "Deseo" },
      { min: 82, max: 83, desc: "Agujero Portátil (Portable Hole) (720 po)", isSingular: true, singularName: "Agujero Portátil" },
      { min: 84, max: 85, desc: "Ídolo de oro con ojos de rubí: otorga 3 bendiciones de Piel Demoníaca (840 po)", isBoon: true, boonName: "Piel demoníaca (Demonskin)" },
      { min: 86, max: 87, desc: "Pergamino de la Alianza: otorga 3 bendiciones de Halo Divino (840 po)", isBoon: true, boonName: "Halo divino (Divine Halo)" },
      { min: 88, max: 89, desc: "Cubo de la Perfección de Brak (Brak's Cube of Perfection) (840 po)", isSingular: true, singularName: "Cubo de la Perfección de Brak" },
      { min: 90, max: 91, desc: "Alfombra Voladora ricamente tejida (Flying Carpet) (840 po)", isSingular: true, singularName: "Alfombra Voladora" },
      { min: 92, max: 93, desc: "Armadura mágica de mitral +3 (con 1 beneficio y 1 virtud) (900 po)", isMagicItem: true, itemType: "armor", bonusForce: "+3", forceVirtue: true },
      { min: 94, max: 95, desc: "Arma mágica +3 (con 2 beneficios) (900 po)", isMagicItem: true, itemType: "weapon", bonusForce: "+3", forceBenefits: 2 },
      { min: 96, max: 97, desc: "El temible Cuchillo de Bruja de Obsidiana (Obsidian Witchknife) (1.200 po)", isSingular: true, singularName: "Cuchillo de Bruja de Obsidiana" },
      { min: 98, max: 99, desc: "La sagrada Armadura de Santa Terragnis (1.200 po)", isSingular: true, singularName: "Armadura de Santa Terragnis" },
      { min: 100, max: 100, desc: "El poderoso Bastón de Ord (Staff of Ord) (1.200 po)", isSingular: true, singularName: "Bastón de Ord" }
    ]
  },

  // ==========================================
  // 2. ORQUESTADOR PRINCIPAL DE TIRADA DE TESORO
  // ==========================================
  generate(tier) {
    const list = this.tables[tier] || this.tables["0-3"];
    const d100 = this.d(100);
    const itemObj = list.find(e => d100 >= e.min && d100 <= e.max) || list[0];

    const res = {
      roll: d100,
      tierTitle: `TESORO // NIVELES ${tier}`,
      item: itemObj.desc,
      extra: {}
    };

    // Caso 1: Objeto Mágico Procedural (Arma, Armadura o Utilidad)
    if (itemObj.isMagicItem) {
      const bCount = itemObj.forceBenefits || 1;
      const cCount = itemObj.forceCurses || 0;
      let generated = null;

      if (itemObj.itemType === "weapon" && window.SD_DATA.MAGIC_WEAPONS) {
        generated = window.SD_DATA.MAGIC_WEAPONS.generateWeapon(itemObj.bonusForce, bCount, cCount);
      } else if (itemObj.itemType === "armor" && window.SD_DATA.MAGIC_ARMOR) {
        generated = window.SD_DATA.MAGIC_ARMOR.generateArmor(itemObj.bonusForce, bCount, cCount);
      } else if (window.SD_DATA.MAGIC_UTILITY) {
        generated = window.SD_DATA.MAGIC_UTILITY.generateUtilityItem(bCount, cCount);
      }

      if (generated) {
        res.item = generated.nombre;
        res.extra["Tipo & Bonificador"] = `${generated.tipo} (${generated.bonificador})`;
        res.extra["Rasgo Visual"] = generated.rasgo;
        res.extra["Beneficio(s)"] = generated.beneficios.join(" ");
        if (generated.maldiciones[0] !== "Ninguna") {
          res.extra["Maldición(es)"] = generated.maldiciones.join(" ");
        }

        // Si la tabla indicaba que poseía Virtud o Consciencia
        if (itemObj.forceVirtue && window.SD_DATA.MAGIC_PERSONALITY) {
          const pers = window.SD_DATA.MAGIC_PERSONALITY.generatePersonality(1, 0);
          res.extra["Personalidad Consciente"] = `${pers.alineamiento} - ${pers.rasgoTemperamento}. Virtud: ${pers.virtudes.join(" ")}`;
        }
      }
    }
    // Caso 2: Objeto Mágico Singular / Artefacto predefinido
    else if (itemObj.isSingular || itemObj.isSingularRandom) {
      let singular = null;
      if (window.SD_DATA.SINGULAR_ITEMS) {
        singular = itemObj.isSingular 
          ? window.SD_DATA.SINGULAR_ITEMS.findSingularByName(itemObj.singularName)
          : window.SD_DATA.SINGULAR_ITEMS.getRandomSingular();
      }

      if (singular) {
        res.item = singular.nombre;
        res.extra.Descripción = singular.desc;
        if (singular.bono && singular.bono !== "-") res.extra.Bonificador = singular.bono;
        res.extra.Beneficio = singular.beneficio;
        if (singular.maldicion && singular.maldicion !== "Ninguna") res.extra.Maldición = singular.maldicion;
        if (singular.personalidad && singular.personalidad !== "Sin consciencia") res.extra.Personalidad = singular.personalidad;
      }
    }
    // Caso 3: Don / Bendición concedida
    else if (itemObj.isBoon && window.SD_DATA.MUNDANE_TABLES) {
      const bFound = window.SD_DATA.MUNDANE_TABLES.blessings.find(b => b.name.includes(itemObj.boonName)) || window.SD_DATA.MUNDANE_TABLES.blessings[0];
      res.extra.Efecto = bFound.desc;
    }

    return res;
  },

  // ==========================================
  // 3. GENERADOR DE OBJETO MÁGICO ALEATORIO COMPLETO (Reglas Shadowdark)
  // ==========================================
  generateRandomMagicItem() {
    // 1. Tipo (d6)
    const typeRoll = this.d(6);
    const types = ["armor", "potion", "scroll", "utility", "wand", "weapon"];
    const chosenType = types[typeRoll - 1];

    // 2. Cualidades: Beneficios y Maldiciones (2d6)
    const qualRoll = this.d(6) + this.d(6);
    let benefitsCount = 1;
    let cursesCount = 0;

    if (qualRoll <= 3) {
      benefitsCount = 0; cursesCount = 1;
    } else if (qualRoll <= 7) {
      benefitsCount = 1; cursesCount = 1;
    } else if (qualRoll <= 11) {
      benefitsCount = 1; cursesCount = 0;
    } else {
      benefitsCount = 2; cursesCount = 0;
    }

    // 3. Generar según categoría
    let item = null;
    if (chosenType === "armor" && window.SD_DATA.MAGIC_ARMOR) {
      item = window.SD_DATA.MAGIC_ARMOR.generateArmor(null, Math.max(1, benefitsCount), cursesCount);
    } else if (chosenType === "weapon" && window.SD_DATA.MAGIC_WEAPONS) {
      item = window.SD_DATA.MAGIC_WEAPONS.generateWeapon(null, Math.max(1, benefitsCount), cursesCount);
    } else if (chosenType === "utility" && window.SD_DATA.MAGIC_UTILITY) {
      item = window.SD_DATA.MAGIC_UTILITY.generateUtilityItem(Math.max(1, benefitsCount), cursesCount);
    } else if (chosenType === "potion" && window.SD_DATA.MAGIC_POTIONS) {
      item = window.SD_DATA.MAGIC_POTIONS.generatePotion(Math.max(1, benefitsCount), cursesCount);
    } else if (chosenType === "scroll" && window.SD_DATA.MAGIC_SPELLS) {
      item = window.SD_DATA.MAGIC_SPELLS.generateScroll();
    } else if (chosenType === "wand" && window.SD_DATA.MAGIC_SPELLS) {
      item = window.SD_DATA.MAGIC_SPELLS.generateWand(null, cursesCount);
    }

    // 4. Chequeo de Personalidad para objetos no consumibles
    if (item && chosenType !== "potion" && chosenType !== "scroll" && window.SD_DATA.MAGIC_PERSONALITY) {
      const pers = window.SD_DATA.MAGIC_PERSONALITY.generatePersonality();
      if (pers.esConsciente) {
        item.personalidad = `${pers.alineamiento} (${pers.rasgoTemperamento}). Virtudes: ${pers.virtudes.join(", ")}. Defectos: ${pers.defectos.join(", ")}`;
      }
    }

    return item;
  },

  // Alias para mantener compatibilidad con botones existentes
  getRandomSingular() {
    if (window.SD_DATA.SINGULAR_ITEMS) {
      return window.SD_DATA.SINGULAR_ITEMS.getRandomSingular();
    }
    return null;
  }
};