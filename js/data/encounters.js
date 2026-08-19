window.SD_DATA = window.SD_DATA || {};

window.SD_DATA.ENCOUNTERS = {
  d: function(sides) {
    return Math.floor(Math.random() * sides) + 1;
  },

  pick: function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  },

  // 1. DISTANCIA INICIAL (1d6)
  getDistancia: function(roll) {
    if (roll === 1) {
      return { tipo: "Cerrada (Close)", desc: "A 5 pies / cuerpo a cuerpo inmediato." };
    } else if (roll <= 4) {
      return { tipo: "Cercana (Near)", desc: "Hasta 30 pies (al alcance de 1 movimiento)." };
    } else {
      return { tipo: "Lejana (Far)", desc: "Más de 30 pies (dentro o al límite del haz de luz)." };
    }
  },

  // 2. ACTIVIDAD DE LA CRIATURA (2d6)
  getActividad: function(roll2d6) {
    if (roll2d6 <= 4) return "Cazando / Rastreando (Hunting) - Alerta y en movimiento";
    if (roll2d6 <= 6) return "Comiendo / Devorando (Eating) - Distraída con su presa/ración";
    if (roll2d6 <= 8) return "Construyendo / Anidando (Building/nesting) - Ruidosa y ocupada";
    if (roll2d6 <= 10) return "Socializando / Jugando (Socializing/playing) - Desprevenida";
    if (roll2d6 === 11) return "Haciendo guardia / Vigilando (Guarding) - Máxima percepción y alerta";
    return "Durmiendo / Descansando (Sleeping) - Vulnerable a ser sorprendida";
  },

  // 3. REACCIÓN Y ACTITUD (2d6 + Carisma)
  getReaccion: function(total) {
    if (total <= 6) return { actitud: "Hostil (Hostile)", desc: "Ataca de inmediato o se prepara para la emboscada." };
    if (total <= 8) return { actitud: "Suspicaz (Suspicious)", desc: "Cautelosa, tensa, a la defensiva; exige explicaciones." };
    if (total === 9) return { actitud: "Neutral (Neutral)", desc: "Indiferente, dispuesta a ignorar al grupo si no la molestan." };
    if (total <= 11) return { actitud: "Curiosa (Curious)", desc: "Intrigada, dispuesta a observar, parlamentar o comerciar." };
    return { actitud: "Amistosa (Friendly)", desc: "Acogedora, servicial o dispuesta a colaborar/ayudar." };
  },

  // 4. PROBABILIDAD DE BOTÍN (50%)
  getTesoroChance: function(tierLevel) {
    var roll = this.d(2); // 1 = Sin tesoro, 2 = Con tesoro (50%)
    if (roll === 1) {
      return "Ninguno (La criatura no porta objetos de valor)";
    } else {
      var tier = "0–3";
      if (tierLevel >= 10) tier = "10+";
      else if (tierLevel >= 7) tier = "7–9";
      else if (tierLevel >= 4) tier = "4–6";
      return `💰 <strong>¡Porta Tesoro!</strong> Tirar en la tabla: <strong>Tesoro Niveles ${tier}</strong>`;
    }
  },

  // TABLAS DE CRIATURAS POR BIOMA / ENTORNO
  biomas: {
    dungeon: [
      { name: "1d4 Esqueletos armados con cimitarras oxidadas", nv: 1 },
      { name: "1d6 Goblins con arcos cortos y dagas melladas", nv: 1 },
      { name: "1 Necrófago royendo un fémur en una esquina", nv: 2 },
      { name: "1 Ciempiés gigante albino trepando por el muro", nv: 1 },
      { name: "1 Cubo gelatinoso barriendo el pasillo", nv: 3 },
      { name: "1d4 Sombras hambrientas de fuerza vital", nv: 2 },
      { name: "1 Trol furioso arrastrando un garrote de piedra", nv: 5 },
      { name: "1 Basilisco de ojos glaucos en su guarida de piedra", nv: 5 }
    ],
    cave: [
      { name: "2d6 Murciélagos gigantes colgados del techo", nv: 1 },
      { name: "1d4 Arañas gigantes tejiendo una trampa de red", nv: 2 },
      { name: "1 Oso cavernario territorial", nv: 4 },
      { name: "1d3 Trogloditas con jabalinas envenenadas", nv: 2 },
      { name: "1 Otyugh devorando basura en un charco de lodo", nv: 4 }
    ],
    forest: [
      { name: "1d6 Lobos grises hambrientos en manada", nv: 1 },
      { name: "1d4 Bandidos armados con ballestas", nv: 1 },
      { name: "1 Oso pardo gigante marcando su territorio", nv: 3 },
      { name: "1 Dríade susurrando desde un árbol centenario", nv: 3 },
      { name: "1 Mantícora sobrevolando las copas de los árboles", nv: 5 }
    ],
    swamp: [
      { name: "1d4 Hombres lagarto armados con tridentes", nv: 2 },
      { name: "1d3 Sanguijuelas gigantes sumergidas en el barro", nv: 1 },
      { name: "1 Fuego fatuo intentando guiar al grupo a arenas movedizas", nv: 2 },
      { name: "1 Hidra de múltiples cabezas descansando en juncos", nv: 6 },
      { name: "1 Bruja de ciénaga elaborando un ungüento", nv: 4 }
    ],
    mountain: [
      { name: "1d4 Harpyas cantando desde los riscos", nv: 3 },
      { name: "1 Águila gigante territorial en pleno vuelo", nv: 3 },
      { name: "1d2 Gigantes de las colinas arrojando peñascos", nv: 6 },
      { name: "1 Draco / Wyvern acechando desde una cornisa", nv: 6 }
    ],
    slums: [
      { name: "1d4 Rateros del Gremio de Ladrones coordinando un asalto", nv: 1 },
      { name: "1d6 Matones borrachos buscando pelea de taberna", nv: 1 },
      { name: "1 Cultista encapuchado huyendo con una reliquia robada", nv: 2 },
      { name: "Patrulla de 1d4 Guardias de la ciudad corruptos", nv: 2 }
    ]
  },

  giros: [
    "El suelo cruje y cede 2 metros bajo vuestros pies.",
    "La antorcha parpadea violentamente y se extingue sin previo aviso.",
    "Un aullido desgarrador resuena tras vosotros en el corredor.",
    "Un penetrante olor a ozono anuncia la apertura de una grieta planar inestable.",
    "El mecanismo de una losa se activa y una reja de hierro sella vuestra retaguardia.",
    "Un eco fantasmal repite exactamente las últimas palabras pronunciadas por el grupo."
  ],

  rumores: [
    "Dicen que las catacumbas del nivel 2 albergan la corona intacta del último rey de Myrkhos.",
    "Nadie que cruce la ciénaga de noche vuelve con su sombra proyectada en el suelo.",
    "La guardia de la puerta sur acepta sobornos con cualquier gema de más de 10 po.",
    "El boticario del muelle paga buen oro en mano por glándulas frescas de basilisco.",
    "Un grupo rival de aventureros fue visto ayer descendiendo con sogas hacia la sima olvidada."
  ],

  // ==========================================
  // DISPARADOR PRINCIPAL DE ENCUENTRO
  // ==========================================
  generateEncounter: function(biomaKey, chaMod) {
    var biomaList = this.biomas[biomaKey] || this.biomas.dungeon;
    var criatura = this.pick(biomaList);

    var dDist = this.d(6);
    var dAct = this.d(6) + this.d(6);
    var dReacBase = this.d(6) + this.d(6);
    var modCarisma = parseInt(chaMod) || 0;
    var dReacTotal = dReacBase + modCarisma;

    var distInfo = this.getDistancia(dDist);
    var actInfo = this.getActividad(dAct);
    var reacInfo = this.getReaccion(dReacTotal);
    var tesoroInfo = this.getTesoroChance(criatura.nv);

    return {
      titulo: `ENCUENTRO // ${biomaKey.toUpperCase()}`,
      criatura: criatura.name,
      nivel: `Nivel ${criatura.nv}`,
      distancia: `${distInfo.tipo} (${distInfo.desc})`,
      actividad: actInfo,
      actitud: `${reacInfo.actitud} — ${reacInfo.desc}`,
      tesoro: tesoroInfo,
      rolls: `Distancia 1d6:[${dDist}] | Actividad 2d6:[${dAct}] | Reacción 2d6:[${dReacBase}] + CAR(${modCarisma}) = [${dReacTotal}]`
    };
  }
};

