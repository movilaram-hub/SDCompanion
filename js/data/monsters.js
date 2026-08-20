window.SD_DATA = window.SD_DATA || {};

window.SD_DATA.MONSTERS = [
  {
    name: "ABOLETE (ABOLETH)",
    desc: "Enorme pez gato antediluviano cubierto de mucosidad y tentáculos. Odian a todos los seres inteligentes.",
    ca: 16, pg: 39, mv: "cercano (nadar)", nv: 8, al: "C",
    f: "+4", d: "-1", c: "+3", i: "+4", s: "+2", ca_mod: "+2",
    atq: "2 tentáculos (cercano) +5 (1d8 + maldición) o 1 cola +5 (3d6)",
    traits: [
      { name: "Maldición", text: "CD 15 CON o el objetivo sufre una maldición mágica, convirtiéndose en un profundo a lo largo de 2d10 días." },
      { name: "Esclavizar", text: "En lugar de atacar, una criatura a distancia lejana CD 15 SAB o el abolete la controla durante 1d4 asaltos." },
      { name: "Telepático", text: "Lee los pensamientos de todas las criaturas a distancia lejana." }
    ]
  },
  {
    name: "ACÓLITO (ACOLYTE)",
    desc: "Un aprendiz religioso que conoce ritos y rituales básicos.",
    ca: 12, pg: 4, mv: "cercano", nv: 1, al: "L",
    f: "+1", d: "-1", c: "+0", i: "-1", s: "+2", ca_mod: "+0",
    atq: "1 maza +1 (1d6) o 1 conjuro +2",
    traits: [
      { name: "Toque Sanador (Conjuro SAB)", text: "CD 11. Cura a una criatura a distancia cercana (close) 1d4 PG." }
    ]
  },
  {
    name: "ARCÁNGEL (ARCHANGEL)",
    desc: "La esfera suprema de los ángeles. Un ser radiante con una corona de fuego, alas níveas, armadura dorada y un espadón llameante.",
    ca: 18, pg: 76, mv: "doble cercano (volar)", nv: 16, al: "L",
    f: "+5", d: "+2", c: "+4", i: "+4", s: "+5", ca_mod: "+5",
    atq: "3 espadones llameantes +10 (2d12)",
    traits: [
      { name: "Armadura", text: "Placas +3." },
      { name: "Mando", text: "CD 18 CAR para resistir una orden de un arcángel." },
      { name: "Corona de Fuego", text: "Los conjuros hostiles dirigidos al arcángel son extremos (CD 18) de lanzar." }
    ]
  },
  {
    name: "ÁNGEL PRINCIPI (ANGEL, PRINCIPI)",
    desc: "Humanos serenos esculpidos en alabastro con orbes dorados por ojos. Gobiernan sobre los domini.",
    ca: 16, pg: 53, mv: "doble cercano (volar)", nv: 11, al: "L",
    f: "+4", d: "+2", c: "+4", i: "+4", s: "+4", ca_mod: "+4",
    atq: "3 espadas bastardas de plata +9 (1d10)",
    traits: [
      { name: "Armadura", text: "Placas +1." },
      { name: "Aura de Luz Lunar", text: "Los conjuros hostiles dirigidos al principi tienen CD 15 para ser lanzados." },
      { name: "Visión Verdadera", text: "Puede ver todas las criaturas y objetos invisibles." }
    ]
  },
  {
    name: "ÁNGEL DOMINI (ANGEL, DOMINI)",
    desc: "Humanos alados e impecables que brillan con la luz del sol bronceada. Señores de los serafines.",
    ca: 17, pg: 42, mv: "cercano (volar)", nv: 9, al: "L",
    f: "+4", d: "+1", c: "+2", i: "+3", s: "+4", ca_mod: "+4",
    atq: "3 espadas bastardas +7 (1d8) o 1 cuerno",
    traits: [
      { name: "Armadura", text: "Placas + escudo." },
      { name: "Cuerno", text: "Todos los enemigos a distancia cercana CD 15 CAR o quedan paralizados 1d4 asaltos." }
    ]
  },
  {
    name: "ÁNGEL SERAFÍN (ANGEL, SERAPH)",
    desc: "Humanoides hermosos y luminosos con alas de plumas blancas. La esfera más común que camina entre mortales.",
    ca: 14, pg: 14, mv: "cercano (volar)", nv: 3, al: "L",
    f: "+3", d: "+1", c: "+1", i: "+2", s: "+3", ca_mod: "+3",
    atq: "2 espadas largas +3 (1d8)",
    traits: [
      { name: "Armadura", text: "Cota de malla." },
      { name: "Bendición", text: "3/día, toca a un objetivo para otorgarle una ficha de suerte." }
    ]
  },
  {
    name: "ARMADURA ANIMADA (ANIMATED ARMOR)",
    desc: "Una vieja armadura animada mágicamente por un espíritu vengativo.",
    ca: 15, pg: 11, mv: "cercano", nv: 2, al: "C",
    f: "+3", d: "-1", c: "+2", i: "-1", s: "+1", ca_mod: "+0",
    atq: "1 espada larga +3 (1d8)",
    traits: [
      { name: "Estatua", text: "Al permanecer inmóvil, parece exactamente una armadura normal." }
    ]
  },
  {
    name: "ANKHEG",
    desc: "Insectos del tamaño de un caballo, de color marrón rojizo. Excavan enormes galerías subterráneas en el lecho de roca.",
    ca: 14, pg: 14, mv: "cercano (excavar)", nv: 3, al: "N",
    f: "+2", d: "+2", c: "+1", i: "-2", s: "+1", ca_mod: "-2",
    atq: "1 mordisco +4 (1d6) o 1 rociada de ácido (cercano) +4 (2d6)",
    traits: []
  },
  {
    name: "SIMIO (APE)",
    desc: "Simios omnívoros que chillan y habitan en las copas de los árboles.",
    ca: 12, pg: 10, mv: "cercano (trepar)", nv: 2, al: "N",
    f: "+2", d: "+2", c: "+1", i: "-2", s: "+1", ca_mod: "+0",
    atq: "1 puñetazo +2 (1d6) o 1 roca (lejano) +2 (1d4)",
    traits: []
  },
  {
    name: "SIMIO DE LAS NIEVES (SNOW APE)",
    desc: "Gorilas carnívoros de pelo blanco que acechan en las altas montañas y habitan en cavernas.",
    ca: 13, pg: 19, mv: "cercano (trepar)", nv: 4, al: "N",
    f: "+3", d: "+1", c: "+1", i: "-2", s: "+1", ca_mod: "+0",
    atq: "2 puñetazos +4 (1d6) o 1 roca (lejano) +4 (2d6)",
    traits: [
      { name: "Pelaje Grueso", text: "Inmune al frío." }
    ]
  },
  {
    name: "APRENDIZ (APPRENTICE)",
    desc: "Un mago encapuchado con un grimorio delgado recién encuadernado.",
    ca: 11, pg: 3, mv: "cercano", nv: 1, al: "N",
    f: "-1", d: "+1", c: "-1", i: "+2", s: "+0", ca_mod: "+0",
    atq: "1 daga (contacto/cercano) +1 (1d4) o 1 conjuro +2",
    traits: [
      { name: "Ofuscar (Conjuro INT)", text: "CD 11. Concentración. Un objetivo a distancia cercana de NV 2 o menor queda estupefacto durante la duración." },
      { name: "Proyectil Mágico (Conjuro INT)", text: "CD 11. 1d4 de daño a un objetivo a distancia lejana." }
    ]
  },
  {
    name: "ARCHIMAGO (ARCHMAGE)",
    desc: "Un veterano lanzador de conjuros que crepita con poder arcano.",
    ca: 12, pg: 44, mv: "cercano", nv: 10, al: "L",
    f: "-1", d: "+2", c: "-1", i: "+4", s: "+2", ca_mod: "+1",
    atq: "2 conjuros +7",
    traits: [
      { name: "Rayo Mortal (Conjuro INT)", text: "CD 15. Un objetivo de NV 9 o inferior a distancia cercana CD 15 CON o cae a 0 PG." },
      { name: "Debilitar (Conjuro INT)", text: "CD 14. Concentración. Un objetivo a distancia cercana queda estupefacto durante la duración." },
      { name: "Deflagración Ígnea (Conjuro INT)", text: "CD 14. 4d6 de daño a todos dentro de un cubo de tamaño cercano situado a distancia lejana." },
      { name: "Flotar (Conjuro INT)", text: "Personal. CD 14. Vuela a doble distancia cercana durante 5 asaltos." },
      { name: "Piel de Mitral (Conjuro INT)", text: "Personal. CD 14. Su CA pasa a ser 18 durante 5 asaltos." },
      { name: "Paso del Vacío (Conjuro INT)", text: "Personal y hasta 4 objetivos voluntarios. CD 15. Teletransporte hasta a 100 millas." }
    ]
  },
  {
    name: "ASESINO (ASSASSIN)",
    desc: "Un asesino sigiloso con capa negra que acecha desde las sombras.",
    ca: 15, pg: 38, mv: "cercano (trepar)", nv: 8, al: "C",
    f: "+2", d: "+4", c: "+2", i: "+2", s: "+3", ca_mod: "+3",
    atq: "2 dagas envenenadas (contacto/cercano) +6 (2d4)",
    traits: [
      { name: "Armadura", text: "Cuero." },
      { name: "Ejecutar", text: "Inflige x3 de daño contra objetivos sorprendidos." }
    ]
  },
  {
    name: "AZER",
    desc: "Enanos de piel bronceada y metálica con llamas en lugar de cabello. Talentosos herreros.",
    ca: 15, pg: 15, mv: "cercano", nv: 3, al: "L",
    f: "+3", d: "+0", c: "+2", i: "+0", s: "+0", ca_mod: "+0",
    atq: "2 martillos de guerra llameantes +3 (1d10, prende inflamables) o 1 ballesta (lejano) +0 (1d6)",
    traits: [
      { name: "Inmune", text: "Inmune al fuego." }
    ]
  },
  {
    name: "TEJÓN (BADGER)",
    desc: "Excavadores feroces y provistos de garras, con rayas blancas y negras en la cara.",
    ca: 11, pg: 5, mv: "cercano (excavar)", nv: 1, al: "N",
    f: "+2", d: "+0", c: "+1", i: "-3", s: "+1", ca_mod: "-2",
    atq: "2 garras +2 (1d4)",
    traits: [
      { name: "Furia", text: "1/día, inmune a tiradas de moral y +1d4 al daño durante 3 asaltos." }
    ]
  },
  {
    name: "BANDIDO (BANDIT)",
    desc: "Pícaro curtido vestido con cueros raídos y capa con capucha.",
    ca: 13, pg: 4, mv: "cercano", nv: 1, al: "C",
    f: "+1", d: "+0", c: "+0", i: "-1", s: "+0", ca_mod: "-1",
    atq: "1 garrote +1 (1d4) o 1 arco corto (lejano) +0 (1d4)",
    traits: [
      { name: "Armadura", text: "Cuero + escudo." },
      { name: "Emboscada", text: "Inflige un dado adicional de daño cuando no ha sido detectado." }
    ]
  },
  {
    name: "BASILISCO (BASILISK)",
    desc: "Lagartos enormes y musculosos con seis patas y piel gris y dura.",
    ca: 14, pg: 25, mv: "cercano", nv: 5, al: "N",
    f: "+3", d: "+1", c: "+3", i: "-3", s: "+1", ca_mod: "-3",
    atq: "2 mordiscos +4 (2d6 + petrificación)",
    traits: [
      { name: "Petrificación", text: "Cualquier criatura que toque al basilisco o cruce su mirada, CD 15 CON o queda petrificada." }
    ]
  },
  {
    name: "MURCIÉLAGO GIGANTE (GIANT BAT)",
    desc: "Mamífero volador coriáceo del tamaño de un águila con apetito por la carne.",
    ca: 12, pg: 9, mv: "cercano (volar)", nv: 2, al: "N",
    f: "-1", d: "+2", c: "+0", i: "-3", s: "+1", ca_mod: "-3",
    atq: "1 mordisco +2 (1d6)",
    traits: []
  },
  {
    name: "ENJAMBRE DE MURCIÉLAGOS (BAT SWARM)",
    desc: "Una nube arremolinada de chillones y sanguinarios murciélagos.",
    ca: 12, pg: 18, mv: "cercano (volar)", nv: 4, al: "N",
    f: "-3", d: "+2", c: "+0", i: "-3", s: "+1", ca_mod: "-3",
    atq: "3 mordiscos +2 (1d6)",
    traits: []
  },
  {
    name: "OSO PARDO (BROWN BEAR)",
    desc: "Un bruto descomunal y bamboleante con garras tan largas como un dedo.",
    ca: 13, pg: 25, mv: "cercano (trepar)", nv: 5, al: "N",
    f: "+4", d: "+1", c: "+3", i: "-2", s: "+1", ca_mod: "-2",
    atq: "2 garras +4 (1d8)",
    traits: [
      { name: "Aplastamiento", text: "Inflige un dado adicional de daño si impacta al mismo objetivo con ambas garras." }
    ]
  },
  {
    name: "OSO POLAR (POLAR BEAR)",
    desc: "Un poderoso oso blanco adaptado a entornos árticos gélidos.",
    ca: 13, pg: 34, mv: "cercano (trepar)", nv: 7, al: "N",
    f: "+4", d: "+1", c: "+3", i: "-2", s: "+1", ca_mod: "-2",
    atq: "2 garras +6 (2d6)",
    traits: [
      { name: "Aplastamiento", text: "Inflige un dado adicional de daño si impacta al mismo objetivo con ambas garras." },
      { name: "Pelaje Grueso", text: "Inmune al frío." }
    ]
  },
  {
    name: "HOMBRE BESTIA (BEASTMAN)",
    desc: "Un homínido cavernario con pelo desgreñado y lanza con punta de piedra.",
    ca: 12, pg: 5, mv: "cercano", nv: 1, al: "C",
    f: "+2", d: "+1", c: "+1", i: "-2", s: "+1", ca_mod: "-1",
    atq: "1 lanza (contacto/cercano) +2 (1d6 + 1)",
    traits: [
      { name: "Armadura", text: "Cuero." },
      { name: "Brutal", text: "+1 al daño con armas cuerpo a cuerpo (incluido)." }
    ]
  },
  {
    name: "BERSÉRKER (BERSERKER)",
    desc: "Guerreros aulladores sumidos en una cólera de combate desenfrenada.",
    ca: 12, pg: 10, mv: "cercano", nv: 2, al: "N",
    f: "+2", d: "+1", c: "+1", i: "+0", s: "+1", ca_mod: "+0",
    atq: "1 gran hacha +2 (1d10) o 1 lanza (contacto/cercano) +2 (1d6)",
    traits: [
      { name: "Armadura", text: "Cuero." },
      { name: "Furia", text: "1/día, inmune a tiradas de moral y +1d4 al daño durante 3 asaltos." }
    ]
  },
  {
    name: "PUDIN NEGRO (BLACK PUDDING)",
    desc: "Una masa gelatinosa negra, gélida y rezumante.",
    ca: 9, pg: 30, mv: "cercano (trepar)", nv: 6, al: "N",
    f: "+2", d: "-1", c: "+3", i: "-4", s: "-3", ca_mod: "-4",
    atq: "3 tentáculos +4 (2d6)",
    traits: [
      { name: "Inmune", text: "Solo puede recibir daño de fuego." },
      { name: "Corrosivo", text: "La madera o el metal que toque el limo se disuelven con un resultado de 1-3 en 1d6." }
    ]
  },
  {
    name: "JABALÍ (BOAR)",
    desc: "Cerdo salvaje y agresivo de pelo áspero y rojizo con colmillos amarillentos.",
    ca: 12, pg: 14, mv: "cercano", nv: 3, al: "N",
    f: "+3", d: "+0", c: "+1", i: "-2", s: "+1", ca_mod: "-2",
    atq: "2 colmillos +3 (1d6)",
    traits: [
      { name: "Cornada", text: "Inflige un dado adicional de daño si impacta al mismo objetivo con ambos colmillos." }
    ]
  },
  {
    name: "DEVORADOR DE CEREBROS (BRAIN EATER)",
    desc: "Humanoides escuálidos de piel púrpura con cabeza de calamar y cuatro tentáculos faciales. Viven en complejas sociedades subterráneas y devoran cerebros humanoides.",
    ca: 14, pg: 36, mv: "cercano", nv: 8, al: "C",
    f: "+2", d: "+3", c: "+0", i: "+4", s: "+2", ca_mod: "+4",
    atq: "4 tentáculos +5 (1d8 + enganche) o 1 descarga mental o 1 control mental",
    traits: [
      { name: "Armadura", text: "Cuero." },
      { name: "Oír Pensamientos", text: "Puede oír los pensamientos superficiales de todas las criaturas inteligentes a distancia cercana." },
      { name: "Enganche", text: "Los tentáculos se adhieren a los objetivos impactados, acertando automáticamente en el siguiente asalto (CD 12 FUE para retirar 1d4 tentáculos). Si los cuatro permanecen enganchados al mismo objetivo durante 1 asalto completo, su cerebro es arrancado y devorado." },
      { name: "Descarga Mental", text: "Cubo de tamaño cercano que se extiende desde el devorador de cerebros. CD 15 INT o 3d6 de daño y paralizado 1d4 asaltos." },
      { name: "Control Mental", text: "Un objetivo a distancia cercana CD 15 CAR o el devorador de cerebros lo controla durante 1d4 asaltos." }
    ]
  },
  {
    name: "BUGBEAR / OSO TRASGO (BUGBEAR)",
    desc: "Goblinoides brutales con orejas de murciélago cubiertos de pelaje marrón.",
    ca: 13, pg: 14, mv: "cercano", nv: 3, al: "C",
    f: "+3", d: "+0", c: "+1", i: "-1", s: "+0", ca_mod: "-2",
    atq: "2 mazas con púas +3 (1d6)",
    traits: [
      { name: "Armadura", text: "Cuero + escudo." },
      { name: "Sigiloso", text: "Ventaja en tiradas para moverse en sigilo y esconderse." }
    ]
  },
  {
    name: "BULETTE / TIBURÓN TERRESTRE (BULETTE)",
    desc: "Lagarto corpulento del tamaño de un tiburón con un caparazón acerado en forma de punta de flecha y unas fauces descomunales.",
    ca: 17, pg: 40, mv: "cercano (excavar)", nv: 8, al: "N",
    f: "+5", d: "+1", c: "+4", i: "-3", s: "+1", ca_mod: "-2",
    atq: "3 mordiscos +5 (2d6) o 1 salto",
    traits: [
      { name: "Salto", text: "Salta hasta una distancia cercana de altura y doble cercana de longitud, realizando después 2 ataques de mordisco." }
    ]
  },
  {
    name: "CAMELLO (CAMEL)",
    desc: "Bestias del desierto de pelaje canela y temperamento hosco.",
    ca: 10, pg: 12, mv: "doble cercano", nv: 2, al: "N",
    f: "+3", d: "+0", c: "+3", i: "-2", s: "+1", ca_mod: "-3",
    atq: "1 pezuña +3 (1d6) o 1 escupitajo (cercano) +0 (1d4)",
    traits: []
  },
  {
    name: "BRUTO CAVERNARIO (CAVE BRUTE)",
    desc: "Bestia insectoide descomunal con largas mandíbulas, cuatro ojos y brazos gruesos cubiertos de cerdas.",
    ca: 14, pg: 28, mv: "cercano (excavar)", nv: 6, al: "N",
    f: "+4", d: "+1", c: "+1", i: "-3", s: "+1", ca_mod: "-3",
    atq: "2 garras +5 (1d8) y 1 mandíbula +5 (1d10)",
    traits: [
      { name: "Desconcertar", text: "Las criaturas a distancia cercana que vean sus ojos deben superar CD 12 CAR al inicio de su turno o quedan aturdidas y sin acción." }
    ]
  },
  {
    name: "REPTADOR CAVERNARIO (CAVE CREEPER)",
    desc: "Ciempiés verdes y chasqueantes del tamaño de caballos. Sus tentáculos prensiles están impregnados de un veneno paralizante.",
    ca: 12, pg: 18, mv: "cercano (trepar)", nv: 4, al: "N",
    f: "+2", d: "+2", c: "+0", i: "-3", s: "+1", ca_mod: "-3",
    atq: "1 mordisco +3 (1d6) y 1 tentáculos +3 (1d8 + toxina)",
    traits: [
      { name: "Toxina", text: "CD 12 CON o queda paralizado durante 1d4 asaltos." }
    ]
  },
  {
    name: "CENTAURO (CENTAUR)",
    desc: "Seres gregarios con el torso de un humano y el cuerpo inferior de un caballo.",
    ca: 12, pg: 14, mv: "doble cercano", nv: 3, al: "N",
    f: "+2", d: "+1", c: "+1", i: "+0", s: "+2", ca_mod: "+1",
    atq: "2 lanzas (contacto/cercano) +2 (1d6) o 1 arco largo (lejano) +1 (1d8)",
    traits: [
      { name: "Armadura", text: "Cuero." }
    ]
  },
  {
    name: "CIEMPIÉS GIGANTE (CENTIPEDE, GIANT)",
    desc: "Ciempiés de color rojo sangre con aspecto plumoso del tamaño de un brazo humano. Su mordedura inocula un veneno abrasador que provoca calambres.",
    ca: 11, pg: 4, mv: "cercano (trepar)", nv: 1, al: "N",
    f: "-3", d: "+1", c: "+0", i: "-4", s: "-3", ca_mod: "-4",
    atq: "1 mordisco +1 (1d4 + veneno)",
    traits: [
      { name: "Veneno", text: "CD 12 CON o queda paralizado durante 1d4 asaltos." }
    ]
  },
  {
    name: "ENJAMBRE DE CIEMPÍES (CENTIPEDE, SWARM)",
    desc: "Una masa reptante de ciempiés sinuosos y ondulantes.",
    ca: 11, pg: 18, mv: "cercano (trepar)", nv: 4, al: "N",
    f: "-3", d: "+1", c: "+0", i: "-4", s: "-3", ca_mod: "-4",
    atq: "3 mordiscos +1 (1d4 + veneno)",
    traits: [
      { name: "Veneno", text: "CD 12 CON o queda paralizado durante 1d4 asaltos." }
    ]
  },
  {
    name: "QUIMERA (CHIMERA)",
    desc: "Monstruosa bestia con cuerpo mitad cabra y mitad león, amplias alas de dragón y las cabezas de una cabra, un león y un dragón.",
    ca: 16, pg: 49, mv: "doble cercano (volar)", nv: 10, al: "C",
    f: "+5", d: "+4", c: "+4", i: "-3", s: "+2", ca_mod: "-1",
    atq: "4 desgarres +7 (2d8) y 1 aliento de fuego",
    traits: [
      { name: "Aliento de Fuego", text: "Llena un cubo de tamaño cercano adyacente a la quimera. CD 15 DES o 4d6 de daño." }
    ]
  },
  {
    name: "CHUUL",
    desc: "Crustáceos insectoides de color marrón del tamaño de un caballo, provistos de tentáculos y pinzas.",
    ca: 15, pg: 25, mv: "cercano (nadar)", nv: 5, al: "C",
    f: "+3", d: "-1", c: "+3", i: "-1", s: "+1", ca_mod: "-2",
    atq: "2 pinzas +4 (1d8 + presa)",
    traits: [
      { name: "Presa", text: "CD 15 FUE o queda atrapado en la pinza. CD 15 FUE en su turno para liberarse." }
    ]
  },
  {
    name: "MANTO / ACECHADOR (CLOAKER)",
    desc: "Una mantarraya de color azul medianoche con cola ósea y fauces en forma de media luna sobre el vientre. Vuela rápidamente por cavernas profundas y sin luz.",
    ca: 13, pg: 28, mv: "cercano (volar)", nv: 6, al: "C",
    f: "+2", d: "+3", c: "+1", i: "+1", s: "+1", ca_mod: "+0",
    atq: "3 azotes +4 (1d8) o 1 chillido",
    traits: [
      { name: "Fantasmas", text: "1/día, en lugar de atacar. Crea 3 duplicados ilusorios que desaparecen al recibir daño. Determina al azar si un ataque impacta al manto o a las ilusiones." },
      { name: "Chillido", text: "Enemigos a doble distancia cercana CD 15 SAB o sufren desventaja en ataques y pruebas durante 1d4 asaltos." }
    ]
  },
  {
    name: "COCATRIZ (COCKATRICE)",
    desc: "Híbrido de lagarto y gallo en muda con una cresta afilada de color carmesí.",
    ca: 11, pg: 14, mv: "cercano (volar)", nv: 3, al: "N",
    f: "-2", d: "+1", c: "+1", i: "-3", s: "+1", ca_mod: "-3",
    atq: "1 mordisco +1 (1d4 + petrificación)",
    traits: [
      { name: "Petrificar", text: "CD 12 CON o queda petrificado permanentemente." }
    ]
  },
  {
    name: "COATLICUE / COUATL",
    desc: "Serpiente del tamaño de un humano con escamas de joyas y una corona de plumas iridiscentes.",
    ca: 16, pg: 42, mv: "cercano (volar)", nv: 9, al: "L",
    f: "+2", d: "+3", c: "+2", i: "+4", s: "+4", ca_mod: "+5",
    atq: "3 mordiscos +6 (2d6 + veneno)",
    traits: [
      { name: "Cambiar de Forma", text: "En lugar de atacar, se transforma en cualquier criatura de tamaño similar." },
      { name: "Veneno", text: "CD 15 CON o cae en un sueño profundo y natural durante 1d8 horas." },
      { name: "Restaurar", text: "En lugar de atacar, toca a una criatura para eliminar una maldición, aflicción o sanar 3d8 PG." }
    ]
  },
  {
    name: "CANGREJO GIGANTE (CRAB, GIANT)",
    desc: "Un cangrejo acorazado del tamaño de un carromato con dos pinzas demoledoras.",
    ca: 15, pg: 24, mv: "cercano (nadar)", nv: 5, al: "N",
    f: "+3", d: "+0", c: "+2", i: "-3", s: "+0", ca_mod: "-3",
    atq: "2 pinzas +4 (1d8 + aplastamiento)",
    traits: [
      { name: "Aplastamiento", text: "CD 15 FUE o el objetivo recibe 1d8 de daño adicional." }
    ]
  },
  {
    name: "COCODRILO (CROCODILE)",
    desc: "Reptiles escamosos y corpulentos con patas cortas y colas largas y azotadoras.",
    ca: 14, pg: 20, mv: "cercano (nadar)", nv: 4, al: "N",
    f: "+3", d: "+1", c: "+2", i: "-2", s: "+1", ca_mod: "-2",
    atq: "2 mordiscos +3 (1d8)",
    traits: []
  },
  {
    name: "CULTISTA (CULTIST)",
    desc: "Un fanático encapuchado de mirada desorbitada que entona guturales plegarias a un dios oscuro.",
    ca: 14, pg: 9, mv: "cercano", nv: 2, al: "C",
    f: "+1", d: "-1", c: "+0", i: "-1", s: "+2", ca_mod: "+0",
    atq: "1 espada larga +1 (1d8) o 1 conjuro +2",
    traits: [
      { name: "Armadura", text: "Cota de malla + escudo." },
      { name: "Sin Miedo", text: "Inmune a tiradas de moral." },
      { name: "Toque Mortal (Conjuro SAB)", text: "CD 12. 2d4 de daño a una criatura a distancia de contacto (close)." }
    ]
  },
  {
    name: "CÍCLOPE (CYCLOPS)",
    desc: "Gigantes solitarios de un solo ojo de 6 metros de altura. Llevan una vida sencilla en tierras de cultivo remotas.",
    ca: 11, pg: 38, mv: "doble cercano", nv: 8, al: "C",
    f: "+5", d: "+0", c: "+2", i: "-1", s: "-2", ca_mod: "+0",
    atq: "2 grandes garrotes +7 (2d8) o 1 roca (lejano) +5 (1d12)",
    traits: [
      { name: "Armadura", text: "Cuero." }
    ]
  },
  {
    name: "MANTO OSCURO (DARKMANTLE)",
    desc: "Pulpo negro flotante con hileras de ojos rojos y una falda palmeada de tentáculos.",
    ca: 13, pg: 4, mv: "cercano (volar)", nv: 1, al: "N",
    f: "-2", d: "+3", c: "+0", i: "-3", s: "+0", ca_mod: "-3",
    atq: "1 mordisco +3 (1d4) o 1 oscuridad",
    traits: [
      { name: "Oscuridad", text: "Apaga todas las fuentes de luz a distancia cercana." }
    ]
  },
  {
    name: "PROFUNDO (DEEP ONE)",
    desc: "Hombres-pez anfibios y sectarios con ojos saltones. Acechan en aguas profundas y cavernas sin sol.",
    ca: 13, pg: 10, mv: "cercano (nadar)", nv: 2, al: "C",
    f: "+2", d: "+1", c: "+1", i: "-2", s: "+0", ca_mod: "-2",
    atq: "2 lanzas (contacto/cercano) +2 (1d6)",
    traits: [
      { name: "Ceguera Solar", text: "Queda cegado bajo luz brillante." }
    ]
  },
  {
    name: "DEMONIO BALOR (DEMON, BALOR)",
    desc: "Bestias aladas colosales y cornudas envueltas en las llamas del mismísimo infierno. Sus mandobles y látigos parten la roca.",
    ca: 19, pg: 77, mv: "doble cercano (volar)", nv: 16, al: "C",
    f: "+6", d: "+2", c: "+5", i: "+4", s: "+3", ca_mod: "+4",
    atq: "3 mandobles +10 (2d12 + fuego infernal) y 1 látigo de fuego (cercano) +10 (2d6 + presa)",
    traits: [
      { name: "Inmune", text: "Inmune al fuego. Solo recibe daño de fuentes mágicas." },
      { name: "Presa", text: "CD 18 FUE o el objetivo queda atado por el látigo sufriendo 2d6 de daño por asalto retenido (CD 18 FUE en su turno para liberarse). En lugar del ataque de látigo, puede arrojar a una criatura apresada a doble distancia cercana." },
      { name: "Fuego Infernal", text: "CD 18 DES o sufre 2d8 de daño por asalto hasta que las llamas sean extinguidas." }
    ]
  },
  {
    name: "DEMONIO DRETCH (DEMON, DRETCH)",
    desc: "Demonios verdes con cara de cerdo, garras gruesas y un hedor aceitoso.",
    ca: 12, pg: 11, mv: "cercano", nv: 2, al: "C",
    f: "+2", d: "+0", c: "+2", i: "-2", s: "-1", ca_mod: "-3",
    atq: "1 garra +2 (1d6) o 1 gas",
    traits: [
      { name: "Gas", text: "Todos los seres a distancia cercana CD 12 CON o quedan cegados durante 1d4 asaltos." }
    ]
  },
  {
    name: "DEMONIO GLABREZU (DEMON, GLABREZU)",
    desc: "Criaturas bípedas con cabeza de caballo y colmillos que poseen cuatro brazos: dos marchitos y dos rematados en pinzas descomunales.",
    ca: 15, pg: 40, mv: "cercano", nv: 8, al: "C",
    f: "+4", d: "+1", c: "+4", i: "+3", s: "+2", ca_mod: "+2",
    atq: "2 pinzas +7 (2d8 + aplastamiento)",
    traits: [
      { name: "Aplastamiento", text: "CD 15 FUE o el objetivo recibe 2d8 de daño adicional." }
    ]
  },
  {
    name: "DEMONIO MARILITH (DEMON, MARILITH)",
    desc: "Mujeres sibilantes y acorazadas con seis brazos y cuerpo inferior de serpiente gigante, blandiendo seis espadas.",
    ca: 17, pg: 44, mv: "cercano (trepar)", nv: 9, al: "C",
    f: "+5", d: "+4", c: "+3", i: "+3", s: "+3", ca_mod: "+4",
    atq: "6 espadas largas +7 (1d8)",
    traits: [
      { name: "Armadura", text: "Placas." },
      { name: "Parada", text: "Puede renunciar a 2 ataques de espada larga en el siguiente asalto para desviar un ataque cuerpo a cuerpo que fuera a impactarle." }
    ]
  },
  {
    name: "DEMONIO VROCK (DEMON, VROCK)",
    desc: "Buitres inmundos del tamaño de carromatos con cuatro extremidades, piel azul medianoche y un sarpullido de plumas sarnosas.",
    ca: 14, pg: 24, mv: "cercano (volar)", nv: 5, al: "C",
    f: "+2", d: "+2", c: "+2", i: "-1", s: "+1", ca_mod: "+0",
    atq: "2 garras +4 (1d8) o 1 chillido",
    traits: [
      { name: "Niebla de Carroña", text: "Cada vez que recibe daño, 3 en 1d6 de liberar una nube de carroña en un cubo cercano centrado en el vrock. Todos los enemigos CD 15 CON o sufren vómitos violentos durante 1d4 asaltos." },
      { name: "Chillido", text: "Todos los enemigos a doble distancia cercana CD 12 SAB o sufren desventaja en pruebas y ataques durante 1d4 asaltos." }
    ]
  },
  {
    name: "ARCHIDIABLO (ARCHDEVIL)",
    desc: "Un humano cornudo de belleza sobrecogedora con ojos rojos ardientes y un halo de siete estrellas negras. De sus omóplatos brota sangre.",
    ca: 19, pg: 76, mv: "lejano (teletransporte)", nv: 16, al: "C",
    f: "+5", d: "+4", c: "+4", i: "+5", s: "+4", ca_mod: "+7",
    atq: "4 cetros de hierro +10 (3d10) o 1 atadura de alma",
    traits: [
      { name: "Inmune", text: "Inmune al fuego. Solo recibe daño de fuentes mágicas." },
      { name: "Corona de Oscuridad", text: "Refleja contra el lanzador cualquier conjuro hostil cuya prueba de lanzamiento sea menor de 20." },
      { name: "Atadura de Alma", text: "Todos los objetivos a distancia cercana CD 20 CAR o caen bajo el control del archidiablo durante 1d4 asaltos (CD 20 CAR en cada turno para terminar el efecto)." }
    ]
  },
  {
    name: "DIABLO ESPINADO (DEVIL, BARBED)",
    desc: "Engendros desgarbados y moteados de verde repletos de espinas ganchudas.",
    ca: 13, pg: 14, mv: "cercano", nv: 3, al: "C",
    f: "+2", d: "+3", c: "+1", i: "+1", s: "+1", ca_mod: "+1",
    atq: "2 espinas (cercano) +3 (1d6 + espina clavada) o 1 deflagración ígnea (lejano) +3 (1d8)",
    traits: [
      { name: "Espina Clavada", text: "Cada espina se clava causando 1d4 de daño por asalto (CD 12 FUE en su turno para extraerla)." }
    ]
  },
  {
    name: "DIABLO SÚCUBO / ÍNCUBO (DEVIL, CUBI)",
    desc: "Humanoides cautivadores con alas de murciélago y un encanto diabólico irresistible.",
    ca: 14, pg: 29, mv: "cercano (volar)", nv: 6, al: "C",
    f: "+2", d: "+4", c: "+2", i: "+3", s: "+2", ca_mod: "+5",
    atq: "1 beso +4 (1d6 + drenaje) o 1 hechizo",
    traits: [
      { name: "Cambiar de Forma", text: "En lugar de atacar, se transforma en cualquier humanoide de tamaño similar." },
      { name: "Hechizar", text: "Un humanoide a distancia cercana CD 15 CAR o queda embelesado por 1d6 horas." },
      { name: "Drenaje", text: "Inflige 1d6 de daño temporal a Sabiduría. Si se reduce a 0 SAB, su alma queda jurada a un archidiablo." }
    ]
  },
  {
    name: "DIABLO ERINIA (DEVIL, ERINYES)",
    desc: "Seres resplandecientes con alas de cuervo vestidos con armaduras negras pulidas y yelmos con cuernos curvos.",
    ca: 17, pg: 43, mv: "doble cercano (volar)", nv: 9, al: "C",
    f: "+4", d: "+4", c: "+3", i: "+4", s: "+4", ca_mod: "+5",
    atq: "3 mandobles +8 (1d12) o 2 arcos largos (lejano) +8 (1d8 + veneno)",
    traits: [
      { name: "Armadura", text: "Placas +1." },
      { name: "Veneno", text: "CD 15 CON o los ojos del objetivo se vuelven negros azabache y ataca a sus aliados durante 1d4 asaltos (CD 15 SAB en su turno para terminar el efecto)." }
    ]
  },
  {
    name: "DIABLO CORNUDO (DEVIL, HORNED)",
    desc: "Engendros infernales del tamaño de ogros con escamas de hierro, pesados cuernos de carnero, colas azotadoras y alas coriáceas.",
    ca: 16, pg: 35, mv: "doble cercano (volar)", nv: 7, al: "C",
    f: "+5", d: "+2", c: "+4", i: "+2", s: "+1", ca_mod: "+2",
    atq: "2 tridentes ardientes (cercano) +7 (2d6) o 1 deflagración ígnea (lejano) +4 (2d8)",
    traits: [
      { name: "Piel de Hierro", text: "Recibe la mitad de daño de armas no mágicas." }
    ]
  },
  {
    name: "DIABLILLO / IMP (DEVIL, IMP)",
    desc: "Pequeños diablos rojos del tamaño de un gato con alas y cola sobredimensionadas, cuernos diminutos y actitud cobarde.",
    ca: 13, pg: 9, mv: "cercano (volar)", nv: 2, al: "C",
    f: "-2", d: "+3", c: "+0", i: "+1", s: "+0", ca_mod: "+2",
    atq: "1 aguijón +3 (1d4 + veneno)",
    traits: [
      { name: "Inmune", text: "Inmune al fuego." },
      { name: "Contrato", text: "Puede conceder dones y patronazgo en nombre de un archidiablo a cambio de un alma. Ventaja en tiradas de Carisma relacionadas." },
      { name: "Veneno", text: "CD 12 CON o cae en un sueño agitado durante 1d4 horas." }
    ]
  },
  {
    name: "BRAQUIOSAURIO (BRACHIOSAURUS)",
    desc: "Colosales herbívoros de cuello largo. Lentos y pacíficos.",
    ca: 13, pg: 57, mv: "doble cercano", nv: 12, al: "N",
    f: "+6", d: "-1", c: "+3", i: "-3", s: "+1", ca_mod: "-3",
    atq: "3 pisotones +7 (2d10)",
    traits: []
  },
  {
    name: "PLESIOSAURIO (PLESIOSAURUS)",
    desc: "Reptiles acuáticos del tamaño de elefantes con aletas planas y fauces alargadas repletas de dientes.",
    ca: 13, pg: 30, mv: "doble cercano (nadar)", nv: 6, al: "N",
    f: "+4", d: "+3", c: "+3", i: "-3", s: "+1", ca_mod: "-3",
    atq: "2 mordiscos +5 (2d8)",
    traits: []
  },
  {
    name: "PTERODÁCTILO (PTERODACTYL)",
    desc: "Bestias de pico alargado con anchas alas triangulares, suficientemente grandes para cargar con un humano.",
    ca: 14, pg: 20, mv: "doble cercano (volar)", nv: 4, al: "N",
    f: "+2", d: "+4", c: "+2", i: "-2", s: "+1", ca_mod: "-3",
    atq: "2 picos +4 (1d8 + presa)",
    traits: [
      { name: "Presa", text: "CD 15 FUE o queda atrapado (CD 15 FUE en su turno para liberarse)." }
    ]
  },
  {
    name: "TRICERATOPS",
    desc: "Herbívoros pesados con una ancha gola ósea craneal y tres cuernos afilados.",
    ca: 17, pg: 35, mv: "cercano", nv: 7, al: "N",
    f: "+4", d: "-1", c: "+4", i: "-3", s: "+1", ca_mod: "-3",
    atq: "2 cuernos +6 (1d10) o 1 carga",
    traits: [
      { name: "Carga", text: "Se mueve hasta el doble de distancia cercana en línea recta y realiza 1 ataque de cuernos. Si impacta, inflige x3 de daño." }
    ]
  },
  {
    name: "TIRANOSAURIO (TYRANNOSAURUS)",
    desc: "Imponente reptil bípedo con cabeza, mandíbulas y cuello titánicos.",
    ca: 13, pg: 44, mv: "doble cercano", nv: 9, al: "N",
    f: "+5", d: "+1", c: "+4", i: "-3", s: "+1", ca_mod: "-3",
    atq: "3 mordiscos +8 (2d12)",
    traits: []
  },
  {
    name: "VELOCIRRAPTOR (VELOCIRAPTOR)",
    desc: "Raptores rápidos del tamaño de un pavo provistos de garras letales en las patas. Cazadores en manada.",
    ca: 13, pg: 10, mv: "doble cercano", nv: 2, al: "N",
    f: "-1", d: "+3", c: "+1", i: "-2", s: "+1", ca_mod: "-3",
    atq: "1 garra +3 (1d6)",
    traits: [
      { name: "Astuto", text: "+1d4 de daño cuando ataca con sorpresa." }
    ]
  },
  {
    name: "DJINNI / GENIO (DJINNI)",
    desc: "Humanoides joviales de color azul celeste hechos de aire y vientos turbulentos. Imbuidos de poderosa magia.",
    ca: 14, pg: 48, mv: "doble cercano (volar)", nv: 10, al: "N",
    f: "+4", d: "+4", c: "+3", i: "+4", s: "+3", ca_mod: "+3",
    atq: "3 cimitarras +7 (1d12) o 1 torbellino",
    traits: [
      { name: "Inmune", text: "Solo recibe daño de fuentes mágicas." },
      { name: "Torbellino", text: "Se transforma en un tornado azotador. Todos los enemigos a distancia cercana CD 18 DES o son arrojados 2d100 pies en una dirección aleatoria." },
      { name: "Deseo", text: "Puede lanzar el conjuro deseo una vez por semana para un mortal sin necesidad de prueba de lanzamiento." }
    ]
  },
  {
    name: "DOPPELGÄNGER",
    desc: "Humanoides grises y sin rasgos definidos que disfrutan sembrando la confusión y el caos.",
    ca: 12, pg: 20, mv: "cercano", nv: 4, al: "C",
    f: "+1", d: "+2", c: "+2", i: "+1", s: "+0", ca_mod: "+4",
    atq: "1 daga (contacto/cercano) +2 (1d4)",
    traits: [
      { name: "Cambiar de Forma", text: "En lugar de atacar, se transforma en cualquier humanoide de tamaño similar." },
      { name: "Telepatía", text: "Puede escuchar en secreto los pensamientos superficiales de todos los humanoides a distancia cercana." }
    ]
  },
  {
    name: "DRAGÓN DEL DESIERTO (DRAGON, DESERT)",
    desc: "El olor a ozono precede a este dragón. Sus deslumbrantes escamas de latón y lapislázuli brillan bajo el sol abrasador.",
    ca: 17, pg: 61, mv: "doble cercano (volar)", nv: 13, al: "L",
    f: "+5", d: "+3", c: "+3", i: "+4", s: "+5", ca_mod: "+5",
    atq: "3 desgarres +9 (2d10) o 1 aliento de relámpagos",
    traits: [
      { name: "Sangre de Tormenta", text: "Inmune a la electricidad." },
      { name: "Aliento de Relámpagos", text: "Línea recta de 5 pies de ancho que se extiende a doble distancia cercana. CD 15 DES o 4d8 de daño (desventaja si lleva armadura metálica)." },
      { name: "Espejismo", text: "1/día, en lugar de atacar. Crea 3 duplicados ilusorios que desaparecen al recibir daño. Determina al azar si un ataque impacta al dragón o a las ilusiones." }
    ]
  },
  {
    name: "DRAGÓN DE FUEGO (DRAGON, FIRE)",
    desc: "Escamas de color rojo sangre cubren la piel de este colosal sierpe volcánico. Llamas vivas arden en su garganta.",
    ca: 18, pg: 80, mv: "doble cercano (volar)", nv: 17, al: "C",
    f: "+6", d: "+5", c: "+4", i: "+4", s: "+4", ca_mod: "+5",
    atq: "4 desgarres +11 (2d12) o 1 aliento de fuego",
    traits: [
      { name: "Sangre Ígnea", text: "Inmune al fuego." },
      { name: "Aliento de Fuego", text: "Llena un cubo de doble distancia cercana que se extiende desde el dragón. CD 15 DES o 6d10 de daño." }
    ]
  },
  {
    name: "DRAGÓN DEL BOSQUE (DRAGON, FOREST)",
    desc: "El olor a tierra húmeda sigue a este dragón. Sus escamas de jade están cubiertas de espinas ganchudas.",
    ca: 16, pg: 58, mv: "doble cercano (volar)", nv: 12, al: "N",
    f: "+4", d: "+3", c: "+4", i: "+3", s: "+3", ca_mod: "+4",
    atq: "3 desgarres +8 (2d8) o 1 aliento venenoso",
    traits: [
      { name: "Animar Plantas", text: "1/día, en lugar de atacar. Enredaderas apresan a todos los enemigos a doble distancia cercana del dragón. CD 15 DES o quedan inmovilizados durante 1d4 asaltos." },
      { name: "Aliento Venenoso", text: "Llena un cubo de tamaño cercano adyacente al dragón. CD 15 CON o 3d8 de daño." }
    ]
  },
  {
    name: "DRAGÓN DE ESCRACHA (DRAGON, FROST)",
    desc: "Hielo prismático cubre los cuernos, espinas y alas de este dragón perlado. Nubes de vapor sisean desde sus mandíbulas cubiertas de escarcha.",
    ca: 17, pg: 68, mv: "doble cercano (volar)", nv: 14, al: "N",
    f: "+4", d: "+3", c: "+5", i: "+3", s: "+4", ca_mod: "+3",
    atq: "4 desgarres +9 (2d10) o 1 aliento de hielo",
    traits: [
      { name: "Sangre Gélida", text: "Inmune al frío." },
      { name: "Aliento de Hielo", text: "Llena un cubo de doble distancia cercana que se extiende desde el dragón. CD 15 DES o 4d8 de daño y queda congelado durante 1 asalto." }
    ]
  },
  {
    name: "DRAGÓN MARINO (DRAGON, SEA)",
    desc: "Una cálida brisa marina envuelve a este sierpe anfibio de escamas doradas. Una barba de zarcillos cubre su hocico y una melena azul ondea por su cuello.",
    ca: 17, pg: 76, mv: "doble cercano (volar, nadar)", nv: 16, al: "L",
    f: "+5", d: "+6", c: "+4", i: "+4", s: "+5", ca_mod: "+5",
    atq: "4 desgarres +10 (2d10) o 1 aliento de vapor o 1 tromba de agua",
    traits: [
      { name: "Aliento de Vapor", text: "Llena un cubo de doble distancia cercana que se extiende desde el dragón. CD 15 DES o 4d12 de daño." },
      { name: "Tromba de Agua", text: "Llena un cubo de tamaño cercano situado a distancia lejana. CD 15 FUE o las criaturas atrapadas son arrojadas 2d100 pies en una dirección aleatoria." }
    ]
  },
  {
    name: "DRAGÓN DEL PANTANO (DRAGON, SWAMP)",
    desc: "Esta bestia negra y sin alas se desliza con sigilo entre ciénagas húmedas y pestilentes.",
    ca: 16, pg: 58, mv: "doble cercano (excavar, nadar)", nv: 12, al: "C",
    f: "+5", d: "+3", c: "+4", i: "+4", s: "+3", ca_mod: "+3",
    atq: "3 desgarres +8 (2d10) o 1 aliento de niebla tóxica",
    traits: [
      { name: "Aliento de Niebla Tóxica", text: "Llena un cubo de tamaño cercano adyacente al dragón. CD 15 CON o 2d10 de daño y queda cegado durante 1 asalto." }
    ]
  },
  {
    name: "DROW / ELFO OSCURO (DROW)",
    desc: "Elfo grácil y sombrío que acecha en las profundidades y se abalanza como una araña.",
    ca: 16, pg: 9, mv: "cercano", nv: 2, al: "C",
    f: "+0", d: "+3", c: "+0", i: "+1", s: "+1", ca_mod: "+1",
    atq: "1 dardo envenenado (cercano) +3 (1d4 + veneno) o 1 espada larga +1 (1d8)",
    traits: [
      { name: "Armadura", text: "Cota de malla de mitral." },
      { name: "Veneno", text: "CD 15 CON o cae dormido." },
      { name: "Ceguera Solar", text: "Queda cegado bajo luz brillante." }
    ]
  },
  {
    name: "DRIDER / DROW ARAÑA (DROW, DRIDER)",
    desc: "Una monstruosidad abominable con cuerpo inferior de araña gigante y torso superior de drow.",
    ca: 16, pg: 29, mv: "cercano (trepar)", nv: 6, al: "C",
    f: "+3", d: "+3", c: "+2", i: "+2", s: "+2", ca_mod: "+0",
    atq: "3 espadas largas +3 (1d8) o 2 arcos largos (lejano) +3 (1d8 + veneno)",
    traits: [
      { name: "Armadura", text: "Cota de malla de mitral." },
      { name: "Veneno", text: "CD 15 CON o queda paralizado durante 1d4 asaltos." },
      { name: "Ceguera Solar", text: "Queda cegado bajo luz brillante." }
    ]
  },
  {
    name: "SACERDOTISA DROW (DROW, PRIESTESS)",
    desc: "Una imponente hembra drow con una corona de telarañas metálicas y una mirada despótica.",
    ca: 16, pg: 28, mv: "cercano", nv: 6, al: "C",
    f: "+2", d: "+3", c: "+1", i: "+3", s: "+4", ca_mod: "+3",
    atq: "3 látigos serpiente (cercano) +4 (1d8 + veneno) o 1 conjuro +4",
    traits: [
      { name: "Armadura", text: "Cota de malla de mitral." },
      { name: "Veneno", text: "CD 15 CON o queda paralizado durante 1d4 asaltos." },
      { name: "Ceguera Solar", text: "Queda cegado bajo luz brillante." },
      { name: "Extinguir (Conjuro SAB)", text: "CD 12. Apaga todas las fuentes de luz (incluso mágicas) a distancia cercana." },
      { name: "Convocar Arañas (Conjuro SAB)", text: "CD 14. Invoca 2d4 arañas gigantes leales que aparecen a distancia cercana y permanecen durante 5 asaltos." },
      { name: "Telaraña (Conjuro SAB)", text: "CD 13. Cubo de telarañas de tamaño cercano a distancia lejana inmoviliza a los atrapados durante 5 asaltos (CD 15 FUE en su turno para liberarse)." }
    ]
  },
  {
    name: "DRUIDA (DRUID)",
    desc: "Un sabio de las tierras salvajes que sostiene un bastón nudoso y viste una capa de musgo viridiana.",
    ca: 11, pg: 31, mv: "cercano", nv: 7, al: "N",
    f: "+0", d: "+1", c: "+0", i: "+4", s: "+3", ca_mod: "+0",
    atq: "1 bastón +0 (1d4) o 2 conjuros +5",
    traits: [
      { name: "Piel de Roble (Conjuro INT)", text: "Personal. CD 13. Su CA pasa a ser 15 durante 5 asaltos." },
      { name: "Conjurar Llamas (Conjuro INT)", text: "CD 12. Un objetivo a distancia lejana recibe 2d6 de daño." },
      { name: "Imbuir (Conjuro INT)", text: "Personal. CD 13. El bastón se convierte en un arma mágica +3 durante 10 asaltos." },
      { name: "Convocar Oso (Conjuro INT)", text: "CD 14. Invoca un oso pardo leal que aparece a distancia cercana y permanece durante 5 asaltos." },
      { name: "Golpe de Trueno (Conjuro INT)", text: "CD 13. Llena un cubo de tamaño cercano adyacente al druida; las criaturas atrapadas son arrojadas 2d20 pies en una dirección aleatoria." }
    ]
  },
  {
    name: "DRÍADE (DRYAD)",
    desc: "Un hada esquiva de piel esmeralda cubierta de hojas, vinculada espiritualmente a su árbol protector.",
    ca: 13, pg: 19, mv: "cercano", nv: 4, al: "N",
    f: "-1", d: "+2", c: "+1", i: "+1", s: "+3", ca_mod: "+4",
    atq: "1 bastón -1 (1d4) o 1 hechizo",
    traits: [
      { name: "Hechizar", text: "A distancia cercana, una criatura CD 14 CAR o traba una amistad inquebrantable durante 1d8 días." },
      { name: "Fundirse", text: "Puede adentrarse y fundirse con el árbol al que está vinculada." }
    ]
  },
  {
    name: "DUERGAR / ENANO GRIS (DUERGAR)",
    desc: "Enanos codiciosos de piel grisácea, calvas pulidas y barbas blancas que habitan en sombrías fortalezas subterráneas.",
    ca: 15, pg: 12, mv: "cercano", nv: 2, al: "C",
    f: "+2", d: "+0", c: "+3", i: "+0", s: "-1", ca_mod: "-1",
    atq: "1 pico de guerra +2 (1d6)",
    traits: [
      { name: "Armadura", text: "Cota de malla + escudo." },
      { name: "Agrandar", text: "1/día, +1d6 al daño en ataques cuerpo a cuerpo y ventaja en pruebas de Fuerza durante 3 asaltos." },
      { name: "Invisibilidad", text: "1/día, se vuelve invisible durante 3 asaltos (termina si ataca)." },
      { name: "Ceguera Solar", text: "Queda cegado bajo luz brillante." }
    ]
  },
  {
    name: "ESCARABAJO PELOTERO GIGANTE (DUNG BEETLE, GIANT)",
    desc: "Un escarabajo pesado del tamaño de un barril con un característico cuerno en forma de T.",
    ca: 13, pg: 10, mv: "cercano", nv: 2, al: "N",
    f: "+1", d: "-1", c: "+1", i: "-3", s: "-1", ca_mod: "-3",
    atq: "1 cuerno +1 (1d4 + empujón)",
    traits: [
      { name: "Empujón", text: "CD 9 FUE o el objetivo es empujado a distancia de contacto (close) y cae derribado." }
    ]
  },
  {
    name: "EFRIT / EFREETI",
    desc: "Humanoides imponentes de color rojo sangre forjados a partir de lava y ceniza, con cuernos negros y sonrisa feroz.",
    ca: 15, pg: 43, mv: "cercano (volar)", nv: 9, al: "C",
    f: "+5", d: "+2", c: "+3", i: "+3", s: "+2", ca_mod: "+3",
    atq: "3 cimitarras +8 (2d10) o 2 rayos de fuego (lejano) +5 (2d6)",
    traits: [
      { name: "Inmune", text: "Solo recibe daño de fuentes mágicas. Inmune al fuego." },
      { name: "Muro de Fuego", text: "1/día, cortina de fuego de 6 metros de altura y doble distancia cercana de largo. Tocarlo inflige 4d8 de daño. Dura 2d4 asaltos." },
      { name: "Deseo", text: "Lanza deseo una vez por semana para un mortal sin necesidad de prueba de lanzamiento." }
    ]
  },
  {
    name: "ELEMENTAL DE AIRE MENOR (AIR ELEMENTAL, LESSER)",
    desc: "Un tornado aullante de vientos violentos.",
    ca: 16, pg: 26, mv: "doble cercano (volar)", nv: 6, al: "N",
    f: "+3", d: "+5", c: "+2", i: "-2", s: "+1", ca_mod: "-2",
    atq: "3 embates +7 (2d6) o 1 torbellino",
    traits: [
      { name: "Inmune", text: "Solo recibe daño de fuentes mágicas." },
      { name: "Torbellino", text: "Todas las criaturas a distancia de contacto (close) CD 15 DES o son arrojadas 2d20 pies en una dirección aleatoria." }
    ]
  },
  {
    name: "ELEMENTAL DE AIRE MAYOR (AIR ELEMENTAL, GREATER)",
    desc: "Un colosal huracán de destrucción y vientos feroces.",
    ca: 16, pg: 40, mv: "doble cercano (volar)", nv: 9, al: "N",
    f: "+3", d: "+5", c: "+2", i: "-2", s: "+1", ca_mod: "-2",
    atq: "3 embates +7 (3d6) o 1 torbellino",
    traits: [
      { name: "Inmune", text: "Solo recibe daño de fuentes mágicas." },
      { name: "Torbellino", text: "Todas las criaturas a distancia de contacto (close) CD 15 DES o son arrojadas 2d20 pies en una dirección aleatoria." }
    ]
  },
  {
    name: "ELEMENTAL DE TIERRA MENOR (EARTH ELEMENTAL, LESSER)",
    desc: "Un pilar atronador de roca viva y tierra compacta.",
    ca: 17, pg: 28, mv: "cercano (excavar)", nv: 6, al: "N",
    f: "+5", d: "+0", c: "+4", i: "-2", s: "+1", ca_mod: "-2",
    atq: "3 embates +7 (2d8) o 1 avalancha",
    traits: [
      { name: "Inmune", text: "Solo recibe daño de fuentes mágicas." },
      { name: "Avalancha", text: "Todas las criaturas a distancia de contacto (close) CD 15 FUE o quedan sepultadas bajo montículos de tierra durante 1d4 asaltos." }
    ]
  },
  {
    name: "ELEMENTAL DE TIERRA MAYOR (EARTH ELEMENTAL, GREATER)",
    desc: "Un monolito titánico de peñascos que hace temblar el suelo.",
    ca: 17, pg: 42, mv: "cercano (excavar)", nv: 9, al: "N",
    f: "+5", d: "+0", c: "+4", i: "-2", s: "+1", ca_mod: "-2",
    atq: "3 embates +7 (3d8) o 1 avalancha",
    traits: [
      { name: "Inmune", text: "Solo recibe daño de fuentes mágicas." },
      { name: "Avalancha", text: "Todas las criaturas a distancia de contacto (close) CD 15 FUE o quedan sepultadas bajo montículos de tierra durante 1d4 asaltos." }
    ]
  },
  {
    name: "ELEMENTAL DE FUEGO MENOR (FIRE ELEMENTAL, LESSER)",
    desc: "Una columna rugiente de llamas incandescentes.",
    ca: 15, pg: 26, mv: "cercano (volar)", nv: 6, al: "N",
    f: "+4", d: "+3", c: "+3", i: "-2", s: "+1", ca_mod: "-2",
    atq: "3 embates +6 (2d10) o 1 infierno",
    traits: [
      { name: "Inmune", text: "Solo recibe daño de fuentes mágicas. Inmune al fuego." },
      { name: "Infierno", text: "Todas las criaturas a distancia cercana CD 15 DES o reciben 3d8 de daño." }
    ]
  },
  {
    name: "ELEMENTAL DE FUEGO MAYOR (FIRE ELEMENTAL, GREATER)",
    desc: "Un vórtice abrasador de llamas infernales que funde todo a su paso.",
    ca: 15, pg: 41, mv: "cercano (volar)", nv: 9, al: "N",
    f: "+4", d: "+3", c: "+3", i: "-2", s: "+1", ca_mod: "-2",
    atq: "3 embates +6 (3d10) o 1 infierno",
    traits: [
      { name: "Inmune", text: "Solo recibe daño de fuentes mágicas. Inmune al fuego." },
      { name: "Infierno", text: "Todas las criaturas a distancia cercana CD 15 DES o reciben 3d8 de daño." }
    ]
  },
  {
    name: "ELEMENTAL DE AGUA MENOR (WATER ELEMENTAL, LESSER)",
    desc: "Un impetuoso vórtice de agua torrencial.",
    ca: 15, pg: 25, mv: "doble cercano (nadar)", nv: 6, al: "N",
    f: "+4", d: "+2", c: "+2", i: "-2", s: "+1", ca_mod: "-2",
    atq: "3 embates +6 (2d6) o 1 remolino",
    traits: [
      { name: "Inmune", text: "Solo recibe daño de fuentes mágicas." },
      { name: "Remolino", text: "Todas las criaturas a distancia de contacto (close) CD 15 FUE o quedan inmovilizadas dentro del elemental (se trata como estar sumergido bajo el agua). CD 15 FUE en su turno para escapar." }
    ]
  },
  {
    name: "ELEMENTAL DE AGUA MAYOR (WATER ELEMENTAL, GREATER)",
    desc: "Una marea viva y demoledora capaz de engullir embarcaciones.",
    ca: 15, pg: 39, mv: "doble cercano (nadar)", nv: 9, al: "N",
    f: "+4", d: "+2", c: "+2", i: "-2", s: "+1", ca_mod: "-2",
    atq: "3 embates +6 (3d6) o 1 remolino",
    traits: [
      { name: "Inmune", text: "Solo recibe daño de fuentes mágicas." },
      { name: "Remolino", text: "Todas las criaturas a distancia de contacto (close) CD 15 FUE o quedan inmovilizadas dentro del elemental (se trata como estar sumergido bajo el agua). CD 15 FUE en su turno para escapar." }
    ]
  },
  {
    name: "ELEFANTE (ELEPHANT)",
    desc: "Mamífero colosal de piel dura, grandes orejas y trompa musculosa.",
    ca: 14, pg: 34, mv: "cercano", nv: 7, al: "N",
    f: "+5", d: "+0", c: "+3", i: "-2", s: "+1", ca_mod: "+0",
    atq: "2 colmillos +6 (1d8)",
    traits: [
      { name: "Carga", text: "Se mueve hasta el doble de distancia cercana en línea recta y realiza 1 ataque de colmillos. Si impacta, inflige x3 de daño." }
    ]
  },
  {
    name: "ELFO (ELF)",
    desc: "Ser feérico etéreo e inmortal imbuido de magia ancestral.",
    ca: 13, pg: 9, mv: "cercano", nv: 2, al: "L",
    f: "+0", d: "+3", c: "+0", i: "+1", s: "+1", ca_mod: "+1",
    atq: "1 arco largo (lejano) +3 (1d8) o 1 espada larga +1 (1d8)",
    traits: [
      { name: "Sangre Feérica", text: "Ventaja en pruebas de Destreza mientras se encuentre en la naturaleza salvaje." }
    ]
  },
  {
    name: "ETTERCAP / HOMBRE ARAÑA (ETTERCAP)",
    desc: "Hombre-araña bípedo de ocho ojos, patas delgadas y pelaje morado.",
    ca: 12, pg: 14, mv: "cercano (trepar)", nv: 3, al: "C",
    f: "+0", d: "+2", c: "+1", i: "+0", s: "+0", ca_mod: "-1",
    atq: "2 mordiscos +2 (1d6) o 1 telaraña venenosa (cercano) +2",
    traits: [
      { name: "Telaraña Venenosa", text: "Un objetivo queda atrapado e inmovilizado sufriendo 1d4 de daño por asalto (CD 12 DES en su turno para liberarse)." }
    ]
  },
  {
    name: "HADA (FAIRY)",
    desc: "Gente feérica diminuta con alas batientes de mariposa o polilla.",
    ca: 13, pg: 4, mv: "cercano (volar)", nv: 1, al: "N",
    f: "-2", d: "+3", c: "+0", i: "+1", s: "+0", ca_mod: "+1",
    atq: "1 aguja +3 (1 + veneno)",
    traits: [
      { name: "Veneno", text: "CD 12 CON o cae en un sueño profundo durante 1d4 horas." }
    ]
  },
  {
    name: "RANA GIGANTE (FROG, GIANT)",
    desc: "Anfibios del tamaño de un humano de piel verrugosa y lengua larga y pegajosa.",
    ca: 12, pg: 10, mv: "cercano (nadar)", nv: 2, al: "N",
    f: "+2", d: "+2", c: "+1", i: "-3", s: "+0", ca_mod: "-3",
    atq: "1 lengua y 1 mordisco +2 (1d6)",
    traits: [
      { name: "Lengua", text: "Una criatura a distancia cercana CD 12 DES o es arrastrada a distancia de contacto (close)." }
    ]
  },
  {
    name: "GÁRGOLA (GARGOYLE)",
    desc: "Engendros alados y burlones con aspecto de estatua de piedra que pueden permanecer completamente inmóviles durante eras.",
    ca: 16, pg: 20, mv: "cercano (volar)", nv: 4, al: "C",
    f: "+3", d: "+1", c: "+2", i: "+0", s: "+1", ca_mod: "-1",
    atq: "2 garras +3 (1d6)",
    traits: [
      { name: "Inmune", text: "Solo recibe daño de fuentes mágicas." }
    ]
  },
  {
    name: "CUBO GELATINOSO (GELATINOUS CUBE)",
    desc: "Un cubo translúcido de limo cáustico que barre silenciosamente los pasillos de las mazmorras.",
    ca: 11, pg: 24, mv: "cercano", nv: 5, al: "N",
    f: "+3", d: "+1", c: "+2", i: "-4", s: "+1", ca_mod: "-4",
    atq: "1 toque +4 (1d8 + toxina + engullir)",
    traits: [
      { name: "Engullir", text: "CD 12 FUE o queda atrapado dentro del cubo. El ataque de toque acierta automáticamente a los objetivos engullidos cada asalto. CD 12 FUE en su turno para escapar (falla automáticamente si está paralizado)." },
      { name: "Gomoso", text: "Recibe la mitad de daño de armas punzantes / perforantes." },
      { name: "Toxina", text: "CD 15 CON o queda paralizado durante 1d4 asaltos." }
    ]
  },
  {
    name: "GHAST / LÉMUR MAYOR (GHAST)",
    desc: "Necrófagos superiores que conservan la inteligencia que poseían en vida.",
    ca: 11, pg: 20, mv: "cercano", nv: 4, al: "C",
    f: "+3", d: "+1", c: "+2", i: "+0", s: "+0", ca_mod: "+2",
    atq: "2 garras +4 (1d8 + parálisis)",
    traits: [
      { name: "No-muerto", text: "Inmune a tiradas de moral." },
      { name: "Hedor a Carroña", text: "Las criaturas vivas deben superar CD 12 CON la primera vez que se encuentren a distancia cercana o sufren desventaja en ataques y lanzamientos de conjuros durante 5 asaltos." },
      { name: "Parálisis", text: "CD 12 CON o queda paralizado durante 1d4 asaltos." }
    ]
  },
  {
    name: "FANTASMA (GHOST)",
    desc: "Un espíritu trémulo cuyo rostro se retuerce de ira, rabia o tristeza eterna.",
    ca: 13, pg: 27, mv: "cercano (volar)", nv: 6, al: "C",
    f: "-2", d: "+3", c: "+0", i: "+0", s: "+0", ca_mod: "+4",
    atq: "2 toques mortales +5 (1d8 + drenaje de vida) o 1 posesión",
    traits: [
      { name: "No-muerto Mayor", text: "Inmune a tiradas de moral. Solo recibe daño de armas de plata o fuentes mágicas." },
      { name: "Drenaje de Vida", text: "1d4 de daño a Constitución. Muerte instantánea si se reduce a 0 CON." },
      { name: "Posesión", text: "Un objetivo a distancia de contacto (close). Prueba enfrentada de Carisma; si el fantasma gana, habita el cuerpo del objetivo y controla todas sus acciones durante 2d4 asaltos." }
    ]
  },
  {
    name: "GHOUL / LÉMUR (GHOUL)",
    desc: "No-muertos babeantes de piel grisácea con lenguas azotadoras y rostros planos y reptilianos.",
    ca: 11, pg: 11, mv: "cercano", nv: 2, al: "C",
    f: "+2", d: "+1", c: "+2", i: "-3", s: "-1", ca_mod: "+0",
    atq: "1 garra +2 (1d6 + parálisis)",
    traits: [
      { name: "No-muerto", text: "Inmune a tiradas de moral." },
      { name: "Parálisis", text: "CD 12 CON o queda paralizado durante 1d4 asaltos." }
    ]
  },
  {
    name: "GIGANTE DE LAS NUBES (GIANT, CLOUD)",
    desc: "Gigantes esbeltos y angulosos de cabello azul grisáceo y túnicas de seda que habitan en castillos sobre las cumbres.",
    ca: 15, pg: 48, mv: "doble cercano", nv: 10, al: "N",
    f: "+5", d: "+4", c: "+3", i: "+3", s: "+3", ca_mod: "+3",
    atq: "3 luceros del alba +9 (2d10)",
    traits: [
      { name: "Armadura", text: "Cuero." },
      { name: "Alerta", text: "Ventaja en pruebas para detectar criaturas que intenten esconderse o moverse en sigilo." }
    ]
  },
  {
    name: "GIGANTE DE FUEGO (GIANT, FIRE)",
    desc: "Gigantes musculosos de piel cobriza y pelo rojo envueltos en pesadas armaduras de placas tachonadas de bronce.",
    ca: 15, pg: 44, mv: "doble cercano", nv: 9, al: "C",
    f: "+6", d: "+0", c: "+4", i: "+1", s: "+2", ca_mod: "+1",
    atq: "3 mandobles +9 (2d12)",
    traits: [
      { name: "Armadura", text: "Placas." },
      { name: "Sangre Ígnea", text: "Inmune al fuego." }
    ]
  },
  {
    name: "GIGANTE DE ESCRACHA (GIANT, FROST)",
    desc: "Guerreros de piel azulada y trenzas nórdicas que hacen sonar sus cuernos de guerra durante sus asaltos a los asentamientos.",
    ca: 14, pg: 44, mv: "doble cercano", nv: 9, al: "C",
    f: "+5", d: "+1", c: "+4", i: "+2", s: "+3", ca_mod: "+2",
    atq: "3 grandes hachas +8 (2d10)",
    traits: [
      { name: "Armadura", text: "Cota de malla." },
      { name: "Sangre Gélida", text: "Inmune al frío." }
    ]
  },
  {
    name: "GIGANTE CABRÍO (GIANT, GOAT)",
    desc: "Gigantes salvajes de las tierras altas con patas y cuernos de cabra y pupilas horizontales.",
    ca: 12, pg: 39, mv: "doble cercano (trepar)", nv: 8, al: "C",
    f: "+4", d: "+1", c: "+3", i: "-2", s: "+0", ca_mod: "-2",
    atq: "2 grandes garrotes +7 (2d8) o 1 peñasco (lejano) +7 (2d10)",
    traits: [
      { name: "Armadura", text: "Cuero." }
    ]
  },
  {
    name: "GIGANTE DE LAS COLINAS (GIANT, HILL)",
    desc: "Moles carnosas de piel coriácea y frentes anchas. Crueles, toscos y estúpidos.",
    ca: 11, pg: 34, mv: "doble cercano", nv: 7, al: "C",
    f: "+4", d: "+0", c: "+3", i: "-2", s: "-2", ca_mod: "-2",
    atq: "2 grandes garrotes +6 (2d8) o 1 peñasco (lejano) +6 (2d10)",
    traits: [
      { name: "Armadura", text: "Cuero." }
    ]
  },
  {
    name: "GIGANTE DE PIEDRA (GIANT, STONE)",
    desc: "Gigantes esbeltos y fibrosos de piel pétrea y ojos profundos, capaces de permanecer inmóviles durante días.",
    ca: 17, pg: 40, mv: "doble cercano", nv: 8, al: "N",
    f: "+4", d: "+2", c: "+4", i: "+1", s: "+1", ca_mod: "-1",
    atq: "2 grandes garrotes +7 (2d8) o 1 peñasco (lejano) +7 (2d10)",
    traits: [
      { name: "Piel Pétrea", text: "Recibe la mitad de daño de armas cortantes y perforantes." }
    ]
  },
  {
    name: "GIGANTE DE LAS TORMENTAS (GIANT, STORM)",
    desc: "Titanes regios de piel verde marina, cabellos blancos ondeantes y voces de trueno. Respiran bajo el agua.",
    ca: 15, pg: 58, mv: "doble cercano (nadar)", nv: 12, al: "L",
    f: "+6", d: "+2", c: "+4", i: "+3", s: "+4", ca_mod: "+4",
    atq: "3 mandobles +10 (2d12) o 1 rayo",
    traits: [
      { name: "Armadura", text: "Cota de malla de mitral." },
      { name: "Sangre de Tormenta", text: "Inmune a la electricidad." },
      { name: "Rayo", text: "3/día, línea de 5 pies de ancho que se extiende a distancia lejana. Todas las criaturas en la línea CD 15 DES o reciben 5d10 de daño (desventaja en la prueba si están en el agua)." }
    ]
  },
  {
    name: "GLADIADOR (GLADIATOR)",
    desc: "Guerreros veteranos curtidos en sangrientos combates de arena a muerte.",
    ca: 16, pg: 15, mv: "cercano", nv: 3, al: "N",
    f: "+2", d: "+1", c: "+2", i: "+0", s: "+0", ca_mod: "+1",
    atq: "2 espadas largas +3 (1d8) o 1 lanza (contacto/cercano) +3 (1d6)",
    traits: [
      { name: "Armadura", text: "Cota de malla + escudo." }
    ]
  },
  {
    name: "BOCÓN BALBUCEANTE (GIBBERING MOUTHER)",
    desc: "Una masa reptante de cieno repleta de ojos acuosos y decenas de bocas sin labios que chillan sin cesar.",
    ca: 8, pg: 21, mv: "cercano (trepar, nadar)", nv: 4, al: "N",
    f: "+2", d: "-2", c: "+3", i: "-3", s: "+0", ca_mod: "-3",
    atq: "2 mordiscos +3 (1d8 + enganche)",
    traits: [
      { name: "Balbuceo", text: "Las criaturas a distancia cercana deben superar CD 12 SAB en su turno o realizan una acción al azar (1d8): 1-3. No hace nada, 4-5. Se mueve en dirección aleatoria, 6-7. Ataca a la criatura más cercana, 8. Huye aterrorizado." },
      { name: "Enganche", text: "Se adhiere al objetivo mordido; los mordiscos aciertan automáticamente en el siguiente asalto (CD 12 FUE en su turno para arrancárselo)." }
    ]
  },
  {
    name: "GNOLL",
    desc: "Hombres-hiena bárbaros y oportunistas que merodean en grandes manadas.",
    ca: 12, pg: 10, mv: "cercano", nv: 2, al: "C",
    f: "+1", d: "+1", c: "+1", i: "-1", s: "+0", ca_mod: "-1",
    atq: "1 lanza (contacto/cercano) +1 (1d6) o 1 arco largo (lejano) +1 (1d8)",
    traits: [
      { name: "Armadura", text: "Cuero." },
      { name: "Furia", text: "1/día, inmune a tiradas de moral y +1d4 al daño durante 3 asaltos." }
    ]
  },
  {
    name: "GNOMO DE LAS PROFUNDIDADES / SVIRFNEBLIN (GNOME, DEEP)",
    desc: "Feéricos de piel gris y pelo blanco del tamaño de medianos que buscan gemas y extraña flora cavernaria.",
    ca: 14, pg: 14, mv: "cercano", nv: 3, al: "L",
    f: "+2", d: "+1", c: "+1", i: "+1", s: "+1", ca_mod: "+1",
    atq: "1 pico +3 (1d6) o 1 dardo (cercano) +2 (1d4)",
    traits: [
      { name: "Armadura", text: "Cuero + escudo." },
      { name: "Fundirse con la Piedra", text: "2/día, solo bajo tierra. Se vuelve invisible durante 3 asaltos." }
    ]
  },
  {
    name: "GOBLIN / TRASGO (GOBLIN)",
    desc: "Pequeño humanoide implume de piel verdosa y orejas puntiagudas.",
    ca: 11, pg: 5, mv: "cercano", nv: 1, al: "C",
    f: "+0", d: "+1", c: "+1", i: "-1", s: "-1", ca_mod: "-2",
    atq: "1 garrote +0 (1d4) o 1 arco corto (lejano) +1 (1d4)",
    traits: [
      { name: "Sentidos Agudos", text: "No puede ser sorprendido." }
    ]
  },
  {
    name: "JEFE GOBLIN (GOBLIN, BOSS)",
    desc: "Un trasgo cubierto de cicatrices, músculos nudosos y una tosca corona de hierro.",
    ca: 14, pg: 20, mv: "cercano", nv: 4, al: "C",
    f: "+2", d: "+1", c: "+2", i: "-1", s: "+0", ca_mod: "+1",
    atq: "1 lanza (contacto/cercano) +3 (1d6)",
    traits: [
      { name: "Armadura", text: "Cota de malla." },
      { name: "Sentidos Agudos", text: "No puede ser sorprendido." }
    ]
  },
  {
    name: "CHAMÁN GOBLIN (GOBLIN, SHAMAN)",
    desc: "Un trasgo oscilante que entona cánticos grotescos con collares de dientes y una túnica de pellejos de rata mohosos.",
    ca: 12, pg: 19, mv: "cercano", nv: 4, al: "C",
    f: "+0", d: "+1", c: "+1", i: "+0", s: "+2", ca_mod: "+1",
    atq: "1 bastón +0 (1d4) o 1 conjuro +3",
    traits: [
      { name: "Armadura", text: "Cuero." },
      { name: "Sentidos Agudos", text: "No puede ser sorprendido." },
      { name: "Mente de Insecto (Conjuro SAB)", text: "CD 13. A distancia cercana, la Inteligencia del objetivo se reduce a 1 durante 1d4 asaltos." },
      { name: "Correteo (Conjuro SAB)", text: "Personal. CD 12. Trepa como una araña durante 5 asaltos." },
      { name: "Bomba Pestilente (Conjuro SAB)", text: "CD 12. Un objetivo a distancia lejana recibe 2d4 de daño y CD 12 CON o sufre desventaja en su siguiente prueba o ataque." }
    ]
  },
  {
    name: "GÓLEM DE ARCILLA (GOLEM, CLAY)",
    desc: "Un humanoide imponente y sin rostro modelado en arcilla reluciente.",
    ca: 14, pg: 40, mv: "cercano", nv: 8, al: "N",
    f: "+4", d: "+0", c: "+4", i: "-2", s: "+0", ca_mod: "-2",
    atq: "3 embates +6 (1d8)",
    traits: [
      { name: "Constructor / Gólem", text: "Inmune al daño de fuego, frío, electricidad y fuentes no mágicas. El ácido le sana." },
      { name: "Maldición", text: "El daño infligido por sus embates solo puede curarse mediante un clérigo de nivel 5 o superior." }
    ]
  },
  {
    name: "GÓLEM DE CARNE (GOLEM, FLESH)",
    desc: "Una espantosa monstruosidad armada a partir de cadáveres cosidos.",
    ca: 9, pg: 35, mv: "cercano", nv: 7, al: "N",
    f: "+4", d: "-1", c: "+4", i: "-1", s: "+1", ca_mod: "-3",
    atq: "3 embates +6 (1d8)",
    traits: [
      { name: "Constructor / Gólem", text: "Inmune al daño de fuego, frío y fuentes no mágicas. La electricidad le sana." },
      { name: "Bersérker", text: "Cuando se encuentra a 20 PG o menos, gana +1 ataque de embate adicional y sus embates infligen el doble de daño." }
    ]
  },
  {
    name: "GÓLEM DE HIERRO (GOLEM, IRON)",
    desc: "Una pesada mole de hierro acorazada que chirría y desprende chispas a cada paso.",
    ca: 19, pg: 49, mv: "cercano", nv: 10, al: "N",
    f: "+5", d: "-1", c: "+4", i: "-2", s: "+0", ca_mod: "-2",
    atq: "3 embates +8 (2d8) o 1 aliento venenoso",
    traits: [
      { name: "Constructor / Gólem", text: "Inmune al daño de frío y fuentes no mágicas. El fuego le sana." },
      { name: "Aliento Venenoso", text: "Todas las criaturas a distancia cercana CD 15 CON o reciben 8d6 de daño." }
    ]
  },
  {
    name: "GÓLEM DE PIEDRA (GOLEM, STONE)",
    desc: "Una pesada estatua de anchas extremidades cuyos pasos hacen temblar la tierra.",
    ca: 18, pg: 40, mv: "cercano", nv: 8, al: "N",
    f: "+4", d: "-1", c: "+4", i: "-2", s: "+0", ca_mod: "-2",
    atq: "3 embates +6 (1d10) y 1 lentitud",
    traits: [
      { name: "Constructor / Gólem", text: "Inmune al daño de fuego, frío, electricidad y fuentes no mágicas." },
      { name: "Lentitud", text: "A distancia lejana, un objetivo CD 15 CON o su velocidad se reduce a la mitad durante 1d4 asaltos." }
    ]
  },
  {
    name: "GÓRGONA (GORGON)",
    desc: "Un toro resoplante hecho enteramente de placas de hierro. Una nube de niebla verde emana de sus fosas nasales.",
    ca: 18, pg: 33, mv: "doble cercano", nv: 7, al: "C",
    f: "+4", d: "+0", c: "+2", i: "-3", s: "+1", ca_mod: "-3",
    atq: "2 cornadas +6 (2d8) o 1 carga o 1 niebla petrificante",
    traits: [
      { name: "Carga", text: "Se mueve hasta doble distancia cercana en línea recta y realiza 1 ataque de cornada. Si impacta, inflige x3 de daño." },
      { name: "Aliento Petrificante", text: "Llena un cubo de tamaño cercano adyacente a la górgona. CD 15 CON o queda petrificado permanentemente (las górgonas son inmunes)." }
    ]
  },
  {
    name: "GORILA (GORILLA)",
    desc: "Simios imponentes y poderosos que habitan en la jungla.",
    ca: 12, pg: 20, mv: "cercano (trepar)", nv: 4, al: "N",
    f: "+4", d: "+2", c: "+2", i: "-1", s: "+1", ca_mod: "-1",
    atq: "2 desgarres +5 (2d6)",
    traits: []
  },
  {
    name: "LIMO GRIS (GRAY OOZE)",
    desc: "Charcos resbaladizos y densos del color de la piedra.",
    ca: 11, pg: 9, mv: "cercano (trepar)", nv: 2, al: "N",
    f: "+1", d: "+1", c: "+0", i: "-4", s: "-3", ca_mod: "-4",
    atq: "1 tentáculo +2 (1d6)",
    traits: [
      { name: "Inmune", text: "Inmune al daño de ácido, frío o fuego." },
      { name: "Corrosivo", text: "El metal no mágico que toque el limo se disuelve con un resultado de 1-3 en 1d6." }
    ]
  },
  {
    name: "GRICK",
    desc: "Un enorme gusano con cuatro tentáculos provistos de ventosas y un pico afilado y chasqueante.",
    ca: 14, pg: 19, mv: "cercano (trepar)", nv: 4, al: "N",
    f: "+3", d: "+2", c: "+1", i: "-3", s: "+1", ca_mod: "-3",
    atq: "1 pico +3 (1d8) y 1 tentáculo +3 (1d6 + presa)",
    traits: [
      { name: "Camuflaje", text: "Difícil de ver en terrenos cavernosos o rocosos." },
      { name: "Presa", text: "El objetivo queda inmovilizado. Prueba de CD 15 Fuerza en su turno para liberarse." }
    ]
  },
  {
    name: "GRIFO (GRIFFON)",
    desc: "Cazadores alados con cabeza de águila y cuerpo de león. Su presa predilecta son los caballos.",
    ca: 12, pg: 19, mv: "doble cercano (volar)", nv: 4, al: "N",
    f: "+4", d: "+2", c: "+1", i: "-3", s: "+1", ca_mod: "-1",
    atq: "2 desgarres +4 (1d10)",
    traits: []
  },
  {
    name: "GRIMLOW",
    desc: "Un mamífero alto de cuerpo ovalado. Unas fauces gigantescas en forma de media luna se ocultan en su vientre bajo su pelaje gris.",
    ca: 12, pg: 43, mv: "cercano", nv: 9, al: "N",
    f: "+4", d: "+2", c: "+3", i: "-3", s: "+1", ca_mod: "-2",
    atq: "1 agarre y 3 mordiscos +6 (2d8)",
    traits: [
      { name: "Agarre", text: "Un objetivo a distancia cercana CD 15 FUE o queda envuelto por la lengua del grimlow y arrastrado a su boca. Los ataques de mordisco aciertan automáticamente al objetivo agarrado. Solo puede agarrar a 1 objetivo a la vez. CD 15 FUE en su turno para liberarse." }
    ]
  },
  {
    name: "GUARDIA (GUARD)",
    desc: "Un centinela equipado con armas y armadura resistentes.",
    ca: 15, pg: 4, mv: "cercano", nv: 1, al: "L",
    f: "+1", d: "+0", c: "+0", i: "+0", s: "+1", ca_mod: "+0",
    atq: "1 lanza (contacto/cercano) +1 (1d6) o 1 espada larga +1 (1d8)",
    traits: [
      { name: "Armadura", text: "Cota de malla + escudo." }
    ]
  },
  {
    name: "BRUJA NOCTURNA (HAG, NIGHT)",
    desc: "Una mujer encorvada de piel púrpura con cabello blanco fibroso y una boca repleta de dientes de hierro.",
    ca: 14, pg: 37, mv: "cercano", nv: 8, al: "C",
    f: "+4", d: "+2", c: "+1", i: "+2", s: "+3", ca_mod: "+3",
    atq: "2 mordiscos +6 (1d10) y 1 ceguera",
    traits: [
      { name: "Ceguera", text: "Un objetivo a distancia cercana CD 15 CAR o queda ciego durante 1d4 días." },
      { name: "Cambiar de Forma", text: "Cambia instantáneamente de aspecto para parecer cualquier otro humanoide." }
    ]
  },
  {
    name: "BRUJA MARINA (HAG, SEA)",
    desc: "Una mujer de rostro hundido y piel verdosa, con cabello de algas y carne purulenta que habita en grutas oceánicas.",
    ca: 15, pg: 28, mv: "cercano (nadar)", nv: 6, al: "C",
    f: "+2", d: "+3", c: "+1", i: "+1", s: "+2", ca_mod: "+2",
    atq: "2 garras +4 (1d8)",
    traits: [
      { name: "Cambiar de Forma", text: "Cambia instantáneamente de aspecto para parecer cualquier otro humanoide." },
      { name: "Aterrorizar", text: "Una criatura que vea por primera vez su forma verdadera CD 15 CAR o sufre desventaja en ataques durante 1d4 asaltos." }
    ]
  },
  {
    name: "BRUJA DE LA MARISMA (HAG, WEALD)",
    desc: "Ojos oscuros como noches sin luna, piel de madera podrida y cabello formado por enredos de raíces y enredaderas.",
    ca: 14, pg: 28, mv: "cercano", nv: 6, al: "C",
    f: "+3", d: "+2", c: "+1", i: "+1", s: "+2", ca_mod: "+3",
    atq: "2 garras +4 (1d8) o 1 beber dolor",
    traits: [
      { name: "Beber Dolor", text: "A distancia cercana. CD 12 CAR para infligir 2d4 de daño a una criatura; la bruja recupera esa misma cantidad de PG." },
      { name: "Cambiar de Forma", text: "Cambia instantáneamente de aspecto para parecer cualquier otro humanoide." }
    ]
  },
  {
    name: "HARPÍA (HARPY)",
    desc: "Mujeres aladas monstruosas con cuerpo inferior de buitre que entonan un canto hipnótico.",
    ca: 13, pg: 14, mv: "cercano (volar)", nv: 3, al: "C",
    f: "+1", d: "+3", c: "+1", i: "+0", s: "+0", ca_mod: "+1",
    atq: "2 garras +3 (1d6) o 1 canto",
    traits: [
      { name: "Canto", text: "Enemigos que puedan escucharla a doble distancia cercana CD 12 CAR o quedan aturdidos y son atraídos hacia la harpía durante 1d4 asaltos (inmunes durante 1 día si superan la prueba)." }
    ]
  },
  {
    name: "SABUESO DEL INFIERNO (HELL HOUND)",
    desc: "Loberos negros con ojos rojos como brasas y mandíbulas que gotean fuego vivo.",
    ca: 13, pg: 19, mv: "doble cercano", nv: 4, al: "C",
    f: "+2", d: "+1", c: "+1", i: "-2", s: "+1", ca_mod: "-3",
    atq: "2 mordiscos +4 (1d8) o 1 aliento de fuego",
    traits: [
      { name: "Inmune", text: "Inmune al fuego." },
      { name: "Aliento de Fuego", text: "Llena un cubo de tamaño cercano adyacente al sabueso. CD 15 DES o 3d8 de daño (no se puede volver a usar durante 1d4 asaltos)." }
    ]
  },
  {
    name: "HIPOGRIFO (HIPPOGRIFF)",
    desc: "Criaturas aladas feroces con el cuerpo inferior de un caballo y la parte superior de un águila gigante.",
    ca: 13, pg: 14, mv: "doble cercano (volar)", nv: 3, al: "N",
    f: "+3", d: "+3", c: "+1", i: "-3", s: "+1", ca_mod: "-2",
    atq: "2 desgarres +3 (1d8)",
    traits: []
  },
  {
    name: "HIPOPÓTAMO (HIPPOPOTAMUS)",
    desc: "Bestias de río agresivas y corpulentas del tamaño de vacas, de cuerpos redondeados y morros bulbosos.",
    ca: 12, pg: 24, mv: "cercano (nadar)", nv: 5, al: "N",
    f: "+4", d: "+0", c: "+2", i: "-3", s: "+0", ca_mod: "-3",
    atq: "2 mordiscos +4 (1d10)",
    traits: [
      { name: "Robusto", text: "Ventaja en pruebas de Fuerza para apresar o arrastrar a otras criaturas." }
    ]
  },
  {
    name: "HOBGOBLIN",
    desc: "Un trasgo alto y robusto de piel rojiza. Estricto, marcial y disciplinado.",
    ca: 15, pg: 10, mv: "cercano", nv: 2, al: "C",
    f: "+3", d: "+0", c: "+1", i: "+2", s: "+1", ca_mod: "+1",
    atq: "1 espada larga +3 (1d8) o 1 arco largo (lejano) +0 (1d8)",
    traits: [
      { name: "Armadura", text: "Cota de malla + escudo." },
      { name: "Falange", text: "+1 a los ataques y a la CA cuando se encuentra a distancia de contacto (close) de un hobgoblin aliado." }
    ]
  },
  {
    name: "CABALLO (HORSE)",
    desc: "Animales de manada veloces y poderosos que recorren las llanuras abiertas.",
    ca: 11, pg: 11, mv: "doble cercano", nv: 2, al: "N",
    f: "+3", d: "+1", c: "+2", i: "-3", s: "+1", ca_mod: "-2",
    atq: "1 pezuñas +3 (1d6)",
    traits: []
  },
  {
    name: "HIDRA (HYDRA)",
    desc: "Un reptil anfibio titánico con un racimo de cabezas de serpiente que se retuercen sobre largos cuellos.",
    ca: 15, pg: 10, mv: "cercano (nadar)", nv: 2, al: "N",
    f: "+5", d: "+1", c: "+2", i: "-2", s: "+1", ca_mod: "-2",
    atq: "1 mordisco (cercano) +6 (1d8)",
    traits: [
      { name: "Cabezas Múltiples", text: "Elige cuántas cabezas tiene la hidra. Cada una es de NV 2, CA 15, y puede hacer 1 ataque de mordisco. Una cabeza decapitada brota en dos nuevas al inicio del turno de la hidra salvo que sea cauterizada previamente con fuego o ácido. Trata el NV de la hidra como la suma de todas sus cabezas." }
    ]
  },
  {
    name: "ACECHADOR INVISIBLE (INVISIBLE STALKER)",
    desc: "Criaturas inteligentes compuestas de aire en movimiento continuo, atadas a la voluntad de hechiceros por su rastreo infalible.",
    ca: 13, pg: 29, mv: "cercano (volar)", nv: 6, al: "N",
    f: "+2", d: "+3", c: "+2", i: "+2", s: "+1", ca_mod: "+0",
    atq: "3 aporreos +4 (1d6)",
    traits: [
      { name: "Atado", text: "Una contingencia mundana secreta (como el roce de una pluma) disuelve de inmediato su servidumbre mágica." },
      { name: "Invisible", text: "Naturalmente invisible de forma permanente." },
      { name: "Rastreo", text: "Siempre percibe la dirección exacta en la que se encuentra su presa designada." }
    ]
  },
  {
    name: "MEDUSA MARINA (JELLYFISH)",
    desc: "Medusas de agua salada del tamaño de una mano con tentáculos urticantes.",
    ca: 11, pg: 1, mv: "contacto (nadar)", nv: 0, al: "N",
    f: "-4", d: "+1", c: "+0", i: "-4", s: "+1", ca_mod: "-4",
    atq: "1 picadura +1 (1 + toxina)",
    traits: [
      { name: "Toxina", text: "CD 9 CON o queda paralizado durante 1d4 asaltos." }
    ]
  },
  {
    name: "CABALLERO (KNIGHT)",
    desc: "Un noble guerrero enfundado en armadura de placas reluciente con el sobretodo de su orden de caballería.",
    ca: 17, pg: 14, mv: "cercano", nv: 3, al: "L",
    f: "+3", d: "+0", c: "+1", i: "+0", s: "+0", ca_mod: "+1",
    atq: "2 espadas bastardas +3 (1d8)",
    traits: [
      { name: "Armadura", text: "Placas + escudo." },
      { name: "Juramento", text: "3/día, ventaja en una tirada realizada en servicio directo de su orden de caballería." }
    ]
  },
  {
    name: "KOBOLD",
    desc: "Pequeños lagartos humanoides subterráneos con hocico similar al de un cánido.",
    ca: 13, pg: 1, mv: "cercano", nv: 0, al: "C",
    f: "-2", d: "+2", c: "+0", i: "-1", s: "+0", ca_mod: "-1",
    atq: "1 lanza (contacto/cercano) +0 (1d6)",
    traits: [
      { name: "Armadura", text: "Cuero." },
      { name: "Esquiva", text: "1/día, un ataque que fuera a impactarle falla en su lugar." }
    ]
  },
  {
    name: "HECHICERO KOBOLD (KOBOLD, SORCERER)",
    desc: "Un perro-lagarto escamoso pintado con rayas multicolores que agita un fémur ensartado con cuentas y plumas.",
    ca: 13, pg: 13, mv: "cercano", nv: 3, al: "C",
    f: "-2", d: "+2", c: "+0", i: "-1", s: "+1", ca_mod: "+2",
    atq: "1 garrote +1 (1d4) o 1 conjuro +2",
    traits: [
      { name: "Armadura", text: "Cuero." },
      { name: "Esquiva", text: "1/día, un ataque que fuera a impactarle falla en su lugar." },
      { name: "Aguijón de Escorpión (Conjuro CAR)", text: "CD 11. Distancia cercana, un objetivo. 1d6 de daño y el objetivo sufre desventaja en su siguiente tirada de ataque o prueba." },
      { name: "Enjambre de Arañas (Conjuro CAR)", text: "CD 12. Un enjambre de arañas aparece a distancia cercana y permanece durante 1d4 asaltos siguiendo las órdenes del hechicero." }
    ]
  },
  {
    name: "KRAKEN",
    desc: "Leviatán tentacular primordial del tamaño de un galeón de guerra que mora en las profundidades abisales y sin luz.",
    ca: 18, pg: 80, mv: "doble cercano (nadar)", nv: 17, al: "C",
    f: "+6", d: "+3", c: "+4", i: "+4", s: "+3", ca_mod: "+4",
    atq: "4 tentáculos (cercano) +9 (2d12) o 1 tormenta o 1d4 relámpagos",
    traits: [
      { name: "Inmune", text: "Inmune a la electricidad." },
      { name: "Triturar", text: "Los ataques de tentáculo infligen el doble de daño contra estructuras y objetos." },
      { name: "Relámpago", text: "Línea recta de 5 pies de ancho que se extiende a distancia lejana. CD 15 DES o 6d6 de daño." },
      { name: "Tormenta", text: "El mar se vuelve violentamente turbulento en un radio de 1 milla alrededor del kraken durante 2d4 asaltos. Los navíos tienen 1 en 6 de zozobrar cada asalto." }
    ]
  },
  {
    name: "SANGUIJUELA GIGANTE (LEECH, GIANT)",
    desc: "Una babosa negra y brillante bebedora de sangre del tamaño de un gato.",
    ca: 9, pg: 10, mv: "cercano (nadar)", nv: 2, al: "N",
    f: "+1", d: "-1", c: "+1", i: "-3", s: "-1", ca_mod: "-3",
    atq: "1 mordisco +1 (1d4 + adherirse)",
    traits: [
      { name: "Adherirse", text: "Se fija al objetivo; el mordisco acierta automáticamente en el siguiente asalto (CD 12 FUE en su turno para arrancarla)." }
    ]
  },
  {
    name: "LEPRECHAUN",
    desc: "Feéricos traviesos vestidos de verde que disfrutan engañando a los humanos con falsas promesas de oro.",
    ca: 13, pg: 19, mv: "cercano", nv: 4, al: "N",
    f: "+1", d: "+3", c: "+1", i: "+2", s: "+1", ca_mod: "+3",
    atq: "1 conjuro +4",
    traits: [
      { name: "Alerta", text: "No puede ser sorprendido." },
      { name: "Resbaladizo", text: "Los conjuros hostiles dirigidos al leprechaun son CD 15 para ser lanzados." },
      { name: "Oro de Tontos (Conjuro CAR)", text: "CD 12. Distancia de contacto (close). Un objeto pequeño o grupo de objetos se convierte en monedas de oro o plata durante 1 día." },
      { name: "Ilusión (Conjuro CAR)", text: "CD 11. Crea una convincente ilusión visual o auditiva a distancia cercana. Dura hasta ser disipada." },
      { name: "Invisibilidad (Conjuro CAR)", text: "Personal. CD 12. Se vuelve invisible durante 2d4 asaltos." }
    ]
  },
  {
    name: "LICHE (LICH)",
    desc: "Un hechicero no-muerto de inmenso poder envuelto en ropajes de seda mohosa con luces de pantano ardiendo en sus cuencas oculares.",
    ca: 16, pg: 62, mv: "cercano", nv: 13, al: "C",
    f: "+3", d: "+1", c: "+4", i: "+4", s: "+3", ca_mod: "+3",
    atq: "2 toques +6 (2d8 + parálisis) y 2 conjuros +7",
    traits: [
      { name: "No-muerto Supremo", text: "Inmune a tiradas de moral. Solo recibe daño de fuentes mágicas." },
      { name: "Filacteria", text: "No puede ser destruido permanentemente mientras su receptáculo espiritual (un objeto) permanezca intacto." },
      { name: "Parálisis", text: "CD 15 CON o queda paralizado durante 1d4 asaltos." },
      { name: "Vuelo (Conjuro INT)", text: "Personal. CD 13. Vuela a doble distancia cercana durante 5 asaltos." },
      { name: "Nulidad (Conjuro INT)", text: "Personal. CD 14. Los conjuros hostiles contra el liche requieren CD 18 para lanzarse. Dura 1d4 asaltos." },
      { name: "Salto de Sombras (Conjuro INT)", text: "Personal. CD 14. Se teletransporta hasta a 100 millas." },
      { name: "Sello del Destino (Conjuro INT)", text: "CD 15. Un objetivo de NV 9 o inferior a distancia cercana CD 15 CON o cae a 0 PG." },
      { name: "Marchitar (Conjuro INT)", text: "CD 14. 4d8 de daño a los enemigos dentro de un cubo cercano centrado en el liche." }
    ]
  },
  {
    name: "LEÓN (LION)",
    desc: "Grandes felinos leonados que cazan en llanuras abiertas.",
    ca: 12, pg: 15, mv: "cercano", nv: 3, al: "N",
    f: "+4", d: "+2", c: "+2", i: "-3", s: "+1", ca_mod: "-3",
    atq: "2 desgarres +4 (1d8)",
    traits: []
  },
  {
    name: "HOMBRE LAGARTO (LIZARDFOLK)",
    desc: "Humanoides crocodilianos de rostros escamosos, garras y colas que habitan en pantanos y ríos.",
    ca: 14, pg: 11, mv: "cercano (nadar)", nv: 2, al: "C",
    f: "+1", d: "+1", c: "+2", i: "-1", s: "+1", ca_mod: "-2",
    atq: "1 lanza (contacto/cercano) +2 (1d6)",
    traits: [
      { name: "Armadura", text: "Cuero + escudo." }
    ]
  },
  {
    name: "MAGO (MAGE)",
    desc: "Hechicero adiestrado que suele pertenecer a una orden o cónclave arcano.",
    ca: 11, pg: 27, mv: "cercano", nv: 6, al: "L",
    f: "-1", d: "+1", c: "+0", i: "+3", s: "+1", ca_mod: "+0",
    atq: "1 conjuro +5",
    traits: [
      { name: "Armadura Arcana (Conjuro INT)", text: "Personal. CD 12. Su CA pasa a ser 16 durante 2d4 asaltos." },
      { name: "Ráfaga (Conjuro INT)", text: "CD 12. Distancia lejana, un objetivo recibe 2d6 de daño." },
      { name: "Cancelar (Conjuro INT)", text: "CD 13. Disipa un conjuro que afecte a un objetivo a distancia cercana." },
      { name: "Levitar (Conjuro INT)", text: "CD 12. Distancia de contacto. Concentración. Flota a distancia cercana durante la duración (solo movimiento vertical)." },
      { name: "Atadura (Conjuro INT)", text: "CD 13. Concentración. Un objetivo humanoide a distancia cercana queda paralizado durante la duración." }
    ]
  },
  {
    name: "MAMUT (MAMMOTH)",
    desc: "Elefantes lanudos colosales con colmillos curvados que rozan el suelo.",
    ca: 15, pg: 44, mv: "cercano", nv: 9, al: "N",
    f: "+5", d: "+0", c: "+4", i: "-2", s: "+1", ca_mod: "+0",
    atq: "2 colmillos +7 (1d12)",
    traits: [
      { name: "Pelaje Lanudo", text: "Inmune al frío." },
      { name: "Carga", text: "Se mueve hasta el doble de distancia cercana en línea recta y realiza 1 ataque de colmillos. Si impacta, inflige x3 de daño." }
    ]
  },
  {
    name: "MANTARRAYA GIGANTE (MANTA RAY, GIANT)",
    desc: "Mantarrayas del tamaño de una barcaza que planean majestuosamente bajo el agua. Mansas e inteligentes.",
    ca: 13, pg: 37, mv: "doble cercano (nadar)", nv: 8, al: "N",
    f: "+3", d: "+3", c: "+1", i: "-2", s: "+1", ca_mod: "-3",
    atq: "2 aguijones +5 (1d12 + veneno)",
    traits: [
      { name: "Veneno", text: "CD 15 CON o cae a 0 PG en 1d4 asaltos." }
    ]
  },
  {
    name: "MANTÍCORA (MANTICORE)",
    desc: "Leones con rostro humano, alas de murciélago y cola con púas crueles que adoran devorar carne fresca.",
    ca: 14, pg: 29, mv: "doble cercano (volar)", nv: 6, al: "C",
    f: "+4", d: "+2", c: "+2", i: "-2", s: "+1", ca_mod: "-2",
    atq: "2 desgarres +6 (2d6) o 2 púas caudales (lejano) +4 (1d8)",
    traits: [
      { name: "Púas", text: "Posee 4d6 púas caudales que se regeneran cada día." }
    ]
  },
  {
    name: "MASTÍN (MASTIFF)",
    desc: "Perros guardianes musculosos y leales a su amo o manada.",
    ca: 11, pg: 4, mv: "cercano", nv: 1, al: "N",
    f: "+1", d: "+1", c: "+0", i: "-2", s: "+1", ca_mod: "-2",
    atq: "1 mordisco +1 (1d6)",
    traits: []
  },
  {
    name: "MEDUSA",
    desc: "Mujeres inmortales de piel escamosa y una corona de serpientes vivas en lugar de cabello.",
    ca: 14, pg: 38, mv: "cercano", nv: 8, al: "C",
    f: "+2", d: "+1", c: "+2", i: "+2", s: "+3", ca_mod: "+4",
    atq: "1 mordisco de serpiente +6 (1d6 + veneno)",
    traits: [
      { name: "Linaje Divino", text: "Los conjuros hostiles dirigidos a la medusa son CD 15 para ser lanzados." },
      { name: "Petrificar", text: "Cualquier criatura (incluida la medusa) que la mire directamente a los ojos, CD 15 CON o queda petrificada." },
      { name: "Veneno", text: "CD 15 CON o cae inmediatamente a 0 PG." }
    ]
  },
  {
    name: "MERFOLK / TRITÓN (MERFOLK)",
    desc: "Habitantes marinos con torso humano y cola de pez.",
    ca: 11, pg: 9, mv: "cercano (nadar)", nv: 2, al: "L",
    f: "+1", d: "+1", c: "+0", i: "+0", s: "+1", ca_mod: "+1",
    atq: "1 lanza (contacto/cercano) +2 (1d6)",
    traits: []
  },
  {
    name: "MÍMICO (MIMIC)",
    desc: "Depredadores amorfos que adoptan la forma exacta de objetos inanimados como cofres o puertas.",
    ca: 12, pg: 23, mv: "cercano", nv: 5, al: "N",
    f: "+2", d: "+0", c: "+1", i: "-2", s: "+0", ca_mod: "-3",
    atq: "2 mordiscos +5 (1d8 + adhesivo)",
    traits: [
      { name: "Adhesivo", text: "CD 15 FUE o queda adherido al mímico; los mordiscos aciertan automáticamente en asaltos sucesivos (CD 15 FUE en su turno para liberarse)." }
    ]
  },
  {
    name: "MINOTAURO (MINOTAUR)",
    desc: "Hombres-toro feroces de pesados cuernos que habitan en laberintos subterráneos.",
    ca: 14, pg: 34, mv: "cercano", nv: 7, al: "C",
    f: "+4", d: "+1", c: "+3", i: "+1", s: "+2", ca_mod: "+1",
    atq: "2 grandes hachas +6 (1d10) y 1 cuernos +6 (1d12)",
    traits: [
      { name: "Armadura", text: "Cota de malla." },
      { name: "Carga", text: "En lugar de atacar, se mueve hasta el doble de distancia cercana en línea recta y realiza 1 ataque de cuernos infligiendo x2 de daño si impacta." }
    ]
  },
  {
    name: "ALCE (MOOSE)",
    desc: "Un enorme herbívoro de pelaje marrón y astas pesadas y aplanadas.",
    ca: 11, pg: 19, mv: "doble cercano", nv: 4, al: "N",
    f: "+3", d: "+0", c: "+1", i: "-2", s: "+0", ca_mod: "-2",
    atq: "2 astas +3 (1d6)",
    traits: []
  },
  {
    name: "MORDANTICUS EL DESPELLEJADO (MORDANTICUS THE FLAYED)",
    desc: "Un liche-momia desollado coronado por nueve gemas brillantes. Antaño líder de la orden mágica de Gehemna, ahora sirve como consejero inmortal.",
    ca: 17, pg: 89, mv: "cercano", nv: 19, al: "N",
    f: "+4", d: "+4", c: "+4", i: "+5", s: "+4", ca_mod: "+5",
    atq: "1 toque de podredumbre +8 (1d10 + necrosis) y 3 conjuros +8",
    traits: [
      { name: "No-muerto Legendario", text: "Inmune a tiradas de moral. Solo recibe daño de fuentes mágicas. Los conjuros hostiles contra él requieren CD 18 para ser lanzados." },
      { name: "Corona de Gehemna", text: "3/día, hace fallar automáticamente un conjuro lanzado a distancia lejana." },
      { name: "Necrosis", text: "CD 15 CON o cae a 0 PG. Los conjuros curativos sobre el afectado requieren CD 15 mientras dure la necrosis." },
      { name: "Filacteria", text: "No puede ser destruido permanentemente mientras su diamante contenedor permanezca intacto." },
      { name: "Absorber (Conjuro INT)", text: "CD 13. Distancia cercana. El objetivo pierde un conjuro aleatorio hasta descansar y Mordanticus recupera uno del mismo nivel o inferior." },
      { name: "Desterrar (Conjuro INT)", text: "CD 14. Todas las criaturas extradimensionales a distancia cercana CD 15 CAR o son devueltas a sus planos de origen." },
      { name: "Atadura (Conjuro INT)", text: "CD 12. Un humanoide a distancia lejana queda paralizado durante 1d4 asaltos." },
      { name: "Deflagración (Conjuro INT)", text: "CD 14. Una criatura a distancia cercana recibe 5d8 de daño." },
      { name: "Cambio de Fase (Conjuro INT)", text: "Personal. CD 13. Se teletransporta hasta a 1 milla." },
      { name: "Nombre Verdadero (Conjuro INT)", text: "CD 15. Distancia cercana. Aprende el Nombre Verdadero del objetivo." }
    ]
  },
  {
    name: "MOMIA (MUMMY)",
    desc: "Zombi desecado envuelto en lino ritual, creado mediante complejos procesos de embalsamamiento reservados a reyes y héroes.",
    ca: 13, pg: 47, mv: "cercano", nv: 10, al: "C",
    f: "+3", d: "+0", c: "+2", i: "+3", s: "+2", ca_mod: "+3",
    atq: "3 toques de podredumbre +8 (1d10 + necrosis)",
    traits: [
      { name: "No-muerto Supremo", text: "Inmune a tiradas de moral. Solo recibe daño de fuentes mágicas o fuego." },
      { name: "Desecado", text: "Sufre x2 de daño por fuego." },
      { name: "Necrosis", text: "CD 15 CON o cae a 0 PG. Los conjuros curativos requieren CD 15 mientras el objetivo sufra necrosis." }
    ]
  },
  {
    name: "HOMBRE HONGO (MUSHROOMFOLK)",
    desc: "Humanoides esponjosos y alargados con sombreros de seta en la cabeza que habitan en la penumbra.",
    ca: 13, pg: 15, mv: "cercano", nv: 3, al: "N",
    f: "+2", d: "-1", c: "+2", i: "+0", s: "+1", ca_mod: "+0",
    atq: "2 embates +2 (1d6)",
    traits: [
      { name: "Ceguera Solar", text: "Queda cegado bajo luz brillante." },
      { name: "Telepático", text: "Se comunica mentalmente con seres a doble distancia cercana." }
    ]
  },
  {
    name: "NAGA",
    desc: "Cobras hechiceras de tres metros de altura. Antaño dominaron el mundo y ahora viven amargadas y recluidas.",
    ca: 16, pg: 43, mv: "cercano (trepar)", nv: 9, al: "C",
    f: "+4", d: "+1", c: "+3", i: "+2", s: "+2", ca_mod: "+4",
    atq: "2 mordiscos +7 (2d6 + veneno) y 1 conjuro +7",
    traits: [
      { name: "Veneno", text: "CD 15 CON o queda paralizado durante 1d4 asaltos." },
      { name: "Agonía (Conjuro CAR)", text: "CD 14. Un objetivo a distancia cercana recibe 3d8 de daño." },
      { name: "Hipnotizar (Conjuro CAR)", text: "CD 13. Concentración. Un objetivo a distancia cercana que la mire queda estupefacto e indefenso durante la duración." },
      { name: "Susurros (Conjuro CAR)", text: "CD 12. Los conjuros hostiles dirigidos contra un objetivo a distancia cercana son CD 9 durante 1d4 asaltos." }
    ]
  },
  {
    name: "NAGA ÓSEA (NAGA, BONE)",
    desc: "El armazón esquelético reanimado de una naga mediante oscura nigromancia.",
    ca: 13, pg: 31, mv: "cercano (excavar, trepar)", nv: 6, al: "C",
    f: "+3", d: "+2", c: "+4", i: "-3", s: "+0", ca_mod: "+4",
    atq: "2 mordiscos +5 (2d6)",
    traits: [
      { name: "No-muerto Mayor", text: "Inmune a tiradas de moral. Solo recibe daño de plata o fuentes mágicas." }
    ]
  },
  {
    name: "PESADILLA (NIGHTMARE)",
    desc: "Caballos de guerra negros como la pez con crines, ojos y pezuñas de fuego infernal.",
    ca: 13, pg: 29, mv: "doble cercano (volar)", nv: 6, al: "C",
    f: "+3", d: "+3", c: "+2", i: "-1", s: "+1", ca_mod: "-2",
    atq: "2 pezuñas +5 (1d8)",
    traits: [
      { name: "Inmune", text: "Tanto la pesadilla como su jinete son inmunes al fuego." }
    ]
  },
  {
    name: "OBE-IXX DE AZARUMME (OBE-IXX OF AZARUMME)",
    desc: "La ur-vampira ancestral enfundada en armadura de quitina de escorpión translúcida. La sed de sangre hecha carne.",
    ca: 18, pg: 76, mv: "cercano (trepar, volar)", nv: 16, al: "C",
    f: "+5", d: "+3", c: "+4", i: "+3", s: "+4", ca_mod: "+5",
    atq: "4 mandobles (cercano) +11 (1d12 + 2 + mordisco lunar) y 1 mordisco +9 (1d8 + drenaje de sangre) y 1 hechizo",
    traits: [
      { name: "Armadura", text: "Placas +3." },
      { name: "No-muerto Legendario", text: "Inmune a tiradas de moral. Solo recibe daño de fuentes mágicas. Los conjuros hostiles contra ella requieren CD 18 para lanzarse." },
      { name: "Drenaje de Sangre", text: "Obe-Ixx se cura 2d8 PG y el objetivo pierde 1d6 CON. Al llegar a 0 CON muere y se alza como vampiro o engendro leal." },
      { name: "Hechizar", text: "Un humanoide a distancia cercana que la vea CD 15 CAR o queda bajo su control durante 1d4 días." },
      { name: "Propiedades de Mordisco Lunar", text: "Mandoble +2 arrojadizo que regresa solo. Los conjuros para curar el daño que inflige requieren CD 15." },
      { name: "Cambiar de Forma", text: "En lugar de atacar, se transforma en murciélago gigante, lobo huargo o vuelve a su forma original." },
      { name: "Ur-Vampiro", text: "Debe dormir en su sarcófago al menos una vez por ciclo lunar o pierde 2d8 PG diarios incurables. Recibe 3d8 de daño por asalto bajo luz solar directa. Solo muere si a 0 PG se le clava en el corazón una estaca tallada en madera de la jungla de Tal-Yool." }
    ]
  },
  {
    name: "GELATINA OCRE (OCHRE JELLY)",
    desc: "Un charco anaranjado de fango trémulo y devorador.",
    ca: 9, pg: 20, mv: "cercano (trepar)", nv: 4, al: "N",
    f: "+2", d: "-1", c: "+2", i: "-4", s: "-3", ca_mod: "-4",
    atq: "2 tentáculos +3 (1d6)",
    traits: [
      { name: "División", text: "Si recibe daño cortante, se divide en dos limos más pequeños dividiendo sus PG restantes entre ambos (hasta cuatro divisiones)." }
    ]
  },
  {
    name: "PULPO GIGANTE (OCTOPUS, GIANT)",
    desc: "Cefalópodos del tamaño de esquifes marinos con tentáculos prensiles.",
    ca: 13, pg: 23, mv: "cercano (nadar)", nv: 5, al: "N",
    f: "+3", d: "+3", c: "+1", i: "-2", s: "+1", ca_mod: "-3",
    atq: "2 tentáculos (cercano) +4 (1d8 + presa)",
    traits: [
      { name: "Presa", text: "CD 15 FUE o queda inmovilizado; el tentáculo impacta automáticamente cada asalto (CD 15 FUE en su turno para liberarse)." },
      { name: "Tinta", text: "En lugar de atacar, expulsa una nube de tinta que ciega a todos a distancia cercana durante 1d4 asaltos." }
    ]
  },
  {
    name: "OGRO (OGRE)",
    desc: "Un bruto descomunal, lerdo y pesado armado con un garrote tosco que a menudo lidera a trasgos u orcos.",
    ca: 9, pg: 30, mv: "cercano", nv: 6, al: "C",
    f: "+4", d: "-1", c: "+3", i: "-2", s: "-2", ca_mod: "-2",
    atq: "2 grandes garrotes +6 (2d6)",
    traits: []
  },
  {
    name: "ONI",
    desc: "Demonios ogro hechiceros de piel azulada, cabello blanco y ojos amarillos.",
    ca: 11, pg: 33, mv: "cercano", nv: 7, al: "C",
    f: "+5", d: "+1", c: "+2", i: "+2", s: "+1", ca_mod: "+3",
    atq: "1 guja (cercano) +6 (1d10) o 1 conjuro +5",
    traits: [
      { name: "Cambiar de Forma", text: "En lugar de atacar, se transforma en cualquier humanoide o vuelve a su forma natural." },
      { name: "Desvanecer (Conjuro CAR)", text: "Personal. CD 13. Se vuelve invisible durante 1d4 asaltos." },
      { name: "Helada Infernal (Conjuro CAR)", text: "CD 13. Todos dentro de un cubo cercano que emana del oni reciben 3d6 de daño." },
      { name: "Niebla (Conjuro CAR)", text: "Personal. CD 13. Se convierte en niebla que vuela a doble distancia cercana durante 2d4 asaltos." }
    ]
  },
  {
    name: "ORCO (ORC)",
    desc: "Humanoides altos y provistos de colmillos, de piel grisácea y orejas puntiagudas.",
    ca: 15, pg: 4, mv: "cercano", nv: 1, al: "C",
    f: "+2", d: "+0", c: "+0", i: "-1", s: "+0", ca_mod: "-1",
    atq: "1 gran hacha +2 (1d8)",
    traits: [
      { name: "Armadura", text: "Cota de malla + escudo." },
      { name: "Furia", text: "1/día, inmune a tiradas de moral y +1d4 al daño durante 3 asaltos." }
    ]
  },
  {
    name: "CAUDILLO ORCO (ORC, CHIEFTAIN)",
    desc: "Un orco imponente cuyo cuerpo está cubierto de cicatrices de guerra cruzadas.",
    ca: 14, pg: 19, mv: "cercano", nv: 4, al: "C",
    f: "+2", d: "+1", c: "+1", i: "-1", s: "+0", ca_mod: "-1",
    atq: "2 grandes hachas +4 (1d10)",
    traits: [
      { name: "Armadura", text: "Cota de malla." },
      { name: "Furia", text: "1/día, inmune a tiradas de moral y +1d4 al daño durante 3 asaltos." }
    ]
  },
  {
    name: "OTYUGH",
    desc: "Bestias achaparradas de tres patas con tentáculos espinosos y fauces enormes, atraídas por la podredumbre y la inmundicia.",
    ca: 13, pg: 35, mv: "cercano", nv: 7, al: "N",
    f: "+4", d: "-1", c: "+4", i: "-2", s: "+0", ca_mod: "-3",
    atq: "2 tentáculos +5 (1d8) y 1 mordisco +5 (1d10 + enfermedad)",
    traits: [
      { name: "Enfermedad", text: "CD 15 CON o queda infectado. CD 15 CON cada día o pierde 1d6 PG que no se pueden curar hasta que se supere la prueba." }
    ]
  },
  {
    name: "LIMO PRIMORDIAL (PRIMORDIAL SLIME)",
    desc: "Una masa de limo transparente que emite pulsos enfermizos de luz violeta.",
    ca: 9, pg: 30, mv: "cercano (trepar)", nv: 6, al: "C",
    f: "+3", d: "+2", c: "+3", i: "-4", s: "-3", ca_mod: "-4",
    atq: "2 tentáculos +4 (1d10 + disolver)",
    traits: [
      { name: "Inmune", text: "Solo recibe daño de fuego." },
      { name: "Disolver", text: "Una pieza aleatoria de equipo no mágico portada por el objetivo es destruida." }
    ]
  },
  {
    name: "CAMINANTE DE ESCARCHA (RIME WALKER)",
    desc: "Seres con forma humana formados a partir de hielo espacial negro, con ojos que son dos luces blancas parpadeantes.",
    ca: 16, pg: 43, mv: "cercano (volar)", nv: 9, al: "C",
    f: "+4", d: "+4", c: "+3", i: "+2", s: "+2", ca_mod: "+2",
    atq: "4 garras +8 (1d12)",
    traits: [
      { name: "Inmune", text: "Inmune al frío." },
      { name: "Aura Gélida", text: "Los enemigos a distancia cercana deben superar CD 12 CON al inicio de su turno o pierden su acción." }
    ]
  },
  {
    name: "ENGENDRO DEL VACÍO (VOID SPAWN)",
    desc: "Extremidades semejantes a guadañas surgen de un bulbo púrpura del tamaño de un ogro. Su mitad inferior es un nido de tentáculos.",
    ca: 13, pg: 34, mv: "cercano (volar)", nv: 7, al: "C",
    f: "+4", d: "+1", c: "+3", i: "+0", s: "+1", ca_mod: "-1",
    atq: "2 guadañas +6 (1d10) y 1 tentáculos (1d12 + toxina)",
    traits: [
      { name: "Inmune", text: "Inmune al frío." },
      { name: "Toxina", text: "CD 12 CON o queda paralizado durante 1d4 asaltos." }
    ]
  },
  {
    name: "ARAÑA DEL VACÍO (VOID SPIDER)",
    desc: "Arácnidos pálidos del tamaño de caballos capaces de volverse fantasmales e intangibles.",
    ca: 13, pg: 23, mv: "cercano (trepar)", nv: 5, al: "C",
    f: "+3", d: "+3", c: "+1", i: "-1", s: "+1", ca_mod: "-2",
    atq: "2 mordiscos +4 (1d8 + veneno)",
    traits: [
      { name: "Inmune", text: "Inmune al frío." },
      { name: "Desplazamiento de Fase", text: "Una vez por asalto, puede pasar a ser corpórea o incorpórea." },
      { name: "Veneno", text: "CD 12 CON o cae a 0 PG en 1d4 asaltos." }
    ]
  },
  {
    name: "OSOLECHUZA / OSOCHUZA (OWLBEAR)",
    desc: "Osos huraños y agresivos con ojos, pico y plumas de lechuza.",
    ca: 13, pg: 30, mv: "cercano (trepar)", nv: 6, al: "N",
    f: "+4", d: "+1", c: "+3", i: "-2", s: "+2", ca_mod: "-3",
    atq: "2 garras +5 (1d10)",
    traits: [
      { name: "Aplastamiento", text: "Inflige un dado de daño adicional si impacta al mismo objetivo con ambas garras." }
    ]
  },
  {
    name: "PANTERA (PANTHER)",
    desc: "Grandes felinos ágiles de pelaje negro azulado. Cazadores sigilosos.",
    ca: 14, pg: 14, mv: "cercano (trepar)", nv: 3, al: "N",
    f: "+3", d: "+4", c: "+1", i: "-2", s: "+1", ca_mod: "-3",
    atq: "2 desgarres +3 (1d6)",
    traits: []
  },
  {
    name: "CAMPESINO (PEASANT)",
    desc: "Un plebeyo común vestido con ropas desgastadas.",
    ca: 10, pg: 4, mv: "cercano", nv: 1, al: "L",
    f: "+0", d: "+0", c: "+0", i: "+0", s: "+0", ca_mod: "+0",
    atq: "1 garrote +0 (1d4)",
    traits: []
  },
  {
    name: "PEGASO (PEGASUS)",
    desc: "Caballos alados de porte noble y pelaje blanco perlado.",
    ca: 12, pg: 15, mv: "doble cercano (volar)", nv: 3, al: "N",
    f: "+3", d: "+2", c: "+2", i: "-3", s: "+1", ca_mod: "+0",
    atq: "2 pezuñas +3 (1d6)",
    traits: []
  },
  {
    name: "FÉNIX (PHOENIX)",
    desc: "Enormes águilas compuestas de fuego abrasador. Inteligentes e imbuidas de magia inmortal.",
    ca: 16, pg: 60, mv: "doble cercano (volar)", nv: 13, al: "L",
    f: "+3", d: "+4", c: "+2", i: "+3", s: "+3", ca_mod: "+3",
    atq: "4 desgarres +8 (2d12)",
    traits: [
      { name: "Inmune", text: "Inmune al fuego. Solo recibe daño de fuentes mágicas." },
      { name: "Explosión", text: "Al morir, las criaturas a doble distancia cercana CD 18 DES o reciben 10d6 de daño." },
      { name: "Aura Ardiente", text: "Las criaturas a distancia cercana al inicio de su turno CD 15 CON o reciben 2d6 de daño." },
      { name: "Renacer", text: "Tras morir deja un huevo al rojo vivo del cual eclosiona de nuevo en 1d4 días." }
    ]
  },
  {
    name: "ENJAMBRE DE PIRAÑAS (PIRANHA, SWARM)",
    desc: "Un banco de peces plateados y aplanados armados con colmillos despiadados.",
    ca: 12, pg: 13, mv: "cercano (nadar)", nv: 3, al: "N",
    f: "-2", d: "+2", c: "+0", i: "-3", s: "+0", ca_mod: "-3",
    atq: "2 mordiscos +2 (1d6)",
    traits: [
      { name: "Salvajismo", text: "Ventaja en ataques contra criaturas que se encuentren por debajo de la mitad de sus PG máximos." }
    ]
  },
  {
    name: "PIRATA (PIRATE)",
    desc: "Rufianes de alta mar cuya vida se centra en asaltar y acumular tesoros.",
    ca: 12, pg: 4, mv: "cercano", nv: 1, al: "C",
    f: "+1", d: "+1", c: "+0", i: "+0", s: "+0", ca_mod: "+0",
    atq: "1 alfanje / sable +1 (1d6) o 1 daga (contacto/cercano) +1 (1d4)",
    traits: [
      { name: "Armadura", text: "Cuero." }
    ]
  },
  {
    name: "CLÉRIGO / SACERDOTE (PRIEST)",
    desc: "Un miembro respetado del clero que guía ritos y rituales sagrados.",
    ca: 15, pg: 23, mv: "cercano", nv: 5, al: "L",
    f: "+1", d: "+0", c: "+1", i: "+0", s: "+2", ca_mod: "+1",
    atq: "2 mazas +3 (1d6) o 1 conjuro +3",
    traits: [
      { name: "Armadura", text: "Cota de malla + escudo." },
      { name: "Ungir (Conjuro SAB)", text: "CD 12. Contacto. Un arma o armadura se convierte en versión mágica +2 durante 10 asaltos." },
      { name: "Toque Sanador (Conjuro SAB)", text: "CD 11. Cura 2d4 PG a una criatura a distancia de contacto." },
      { name: "Llama Sagrada (Conjuro SAB)", text: "Personal. CD 13. Sus armas se encienden en llamas mágicas e infligen +1d6 de daño adicional durante 5 asaltos." },
      { name: "Reprensión (Conjuro SAB)", text: "CD 13. Concentración. Las criaturas caóticas no pueden atacar al clérigo ni acercarse a distancia cercana mientras dure el efecto." }
    ]
  },
  {
    name: "GUSANO PÚRPURA (PURPLE WORM)",
    desc: "Un descomunal gusano tan alto como la torre de un castillo, cubierto de quitina púrpura y con unas fauces circulares giratorias.",
    ca: 18, pg: 57, mv: "doble cercano (excavar)", nv: 12, al: "N",
    f: "+5", d: "+1", c: "+3", i: "-3", s: "+1", ca_mod: "-3",
    atq: "2 mordiscos +9 (2d12 + engullir) y 1 aguijón (1d10 + veneno)",
    traits: [
      { name: "Veneno", text: "CD 15 CON o cae a 0 PG." },
      { name: "Engullir", text: "Con un 18-20 natural en el ataque, el objetivo es engullido. Oscuridad total en el interior y 2d10 de daño por asalto. El gusano regurgita a todos los engullidos si recibe al menos 20 de daño en un solo asalto en el interior de su estómago." }
    ]
  },
  {
    name: "RAKSHASA",
    desc: "Ilusionistas demoníacos cuya verdadera forma es la de un gran felino humanoide con las palmas de las manos invertidas hacia atrás.",
    ca: 16, pg: 39, mv: "cercano", nv: 8, al: "C",
    f: "+1", d: "+3", c: "+3", i: "+3", s: "+3", ca_mod: "+4",
    atq: "2 garras +6 (1d8)",
    traits: [
      { name: "Inmune", text: "Solo recibe daño de fuentes mágicas. Inmune a conjuros hostiles de nivel 3 o inferior." },
      { name: "Mesmerismo", text: "Puede leer la mente de todas las criaturas a distancia cercana y adoptar instantáneamente la apariencia ilusoria de cualquier humanoide." },
      { name: "Debilidad", text: "Un virote de ballesta bajo los efectos del conjuro arma sagrada mata al rakshasa en el acto." }
    ]
  },
  {
    name: "RATA (RAT)",
    desc: "Roedores desgarbados y portadores de plagas que infestan las profundidades subterráneas.",
    ca: 10, pg: 1, mv: "cercano", nv: 0, al: "N",
    f: "-3", d: "+0", c: "+1", i: "-3", s: "+1", ca_mod: "-3",
    atq: "1 mordisco +0 (1 + enfermedad)",
    traits: [
      { name: "Enfermedad", text: "CD 9 CON o sufre 1d4 de daño a CON (no puede sanar mientras esté enfermo). Repite la prueba una vez al día; termina al tener éxito. Muere a 0 CON." }
    ]
  },
  {
    name: "RATA GIGANTE (RAT, GIANT)",
    desc: "Ratas astutas del tamaño de gatos con pelaje sarnoso y colas semejantes a gusanos.",
    ca: 11, pg: 5, mv: "cercano", nv: 1, al: "N",
    f: "-2", d: "+1", c: "+1", i: "-2", s: "+1", ca_mod: "-2",
    atq: "1 mordisco +1 (1d4 + enfermedad)",
    traits: [
      { name: "Enfermedad", text: "CD 12 CON o sufre 1d4 de daño a CON (no puede sanar mientras esté enfermo). Repite la prueba una vez al día; termina al tener éxito. Muere a 0 CON." }
    ]
  },
  {
    name: "RATA TEMIBLE (RAT, DIRE)",
    desc: "Ratas salvajes del tamaño de niños con crestas óseas en el cráneo y el lomo.",
    ca: 12, pg: 10, mv: "cercano", nv: 2, al: "N",
    f: "+1", d: "+2", c: "+1", i: "-2", s: "+1", ca_mod: "-2",
    atq: "1 mordisco +2 (1d6 + enfermedad)",
    traits: [
      { name: "Enfermedad", text: "CD 12 CON o sufre 1d4 de daño a CON (no puede sanar mientras esté enfermo). Repite la prueba una vez al día; termina al tener éxito. Muere a 0 CON." }
    ]
  },
  {
    name: "ENJAMBRE DE RATAS (RAT, SWARM)",
    desc: "Una marea chillona y envolvente de ratas que muerden y arañan frenéticamente.",
    ca: 10, pg: 28, mv: "cercano", nv: 6, al: "N",
    f: "-3", d: "+0", c: "+1", i: "-3", s: "+1", ca_mod: "-3",
    atq: "4 mordiscos +0 (1 + enfermedad)",
    traits: [
      { name: "Enfermedad", text: "CD 9 CON o sufre 1d4 de daño a CON (no puede sanar mientras esté enfermo). Repite la prueba una vez al día; termina al tener éxito. Muere a 0 CON." }
    ]
  },
  {
    name: "RATHGAMNON",
    desc: "Un león blanco perlado de 6 metros de altura con alas plumosas. Es el sirviente más poderoso de Madeera del Pacto; sus ojos ciegos observan las profundidades del tiempo y el espacio.",
    ca: 17, pg: 89, mv: "doble cercano (volar)", nv: 19, al: "L",
    f: "+5", d: "+3", c: "+4", i: "+5", s: "+6", ca_mod: "+5",
    atq: "2 desgarres (cercano) +9 (2d10) y 2 conjuros +8",
    traits: [
      { name: "Legendario", text: "Solo recibe daño de fuentes mágicas. Los conjuros hostiles contra Rathgamnon requieren CD 18 para ser lanzados." },
      { name: "Rugido", text: "En lugar de atacar, todas las criaturas que puedan escucharlo a distancia lejana CD 18 CAR o quedan ciegas y mudas durante 1d4 días." },
      { name: "Abjurar (Conjuro SAB)", text: "Personal. CD 13. Disipa cualquier efecto mágico hostil que le afecte." },
      { name: "Abolir (Conjuro SAB)", text: "CD 13. Un objetivo a distancia lejana recibe 5d8 de daño." },
      { name: "Anclar (Conjuro SAB)", text: "CD 14. Un objetivo a distancia lejana CD 18 FUE o queda atado y anclado por cadenas de runas doradas durante 1d4 asaltos." },
      { name: "Portal (Conjuro SAB)", text: "CD 14. Abre un portal a distancia cercana hacia cualquier ubicación de cualquier plano durante 1d6 asaltos." },
      { name: "Presagio (Conjuro SAB)", text: "CD 14. Dura 2d4 asaltos. Un objetivo a distancia cercana tiene ventaja o desventaja en todas sus tiradas de ataque y pruebas." },
      { name: "Detener el Tiempo (Conjuro SAB)", text: "Personal. CD 15. El tiempo se congela para todos excepto Rathgamnon durante 1d4 asaltos. Todo lo sucedido durante la congelación se resuelve simultáneamente al terminar el conjuro." }
    ]
  },
  {
    name: "DESPOJADOR / CABALLERO NEGRO (REAVER)",
    desc: "Un caballero siniestro embutido en armadura ennegrecida repleta de crueles púas y pinchos.",
    ca: 17, pg: 28, mv: "cercano", nv: 6, al: "C",
    f: "+3", d: "+0", c: "+1", i: "+0", s: "+0", ca_mod: "+2",
    atq: "3 espadas bastardas +4 (1d8 + 2)",
    traits: [
      { name: "Armadura", text: "Placas + escudo." },
      { name: "Sed de Sangre", text: "+2 al daño con armas cuerpo a cuerpo (incluido)." }
    ]
  },
  {
    name: "REMORHAZ",
    desc: "Ciempiés colosales de color azul con capuchas en el cuello y espinas dorsales al rojo vivo que habitan en regiones glaciares.",
    ca: 16, pg: 47, mv: "cercano (excavar)", nv: 10, al: "N",
    f: "+5", d: "+1", c: "+2", i: "-3", s: "+1", ca_mod: "-3",
    atq: "3 mordiscos +7 (2d6 + engullir)",
    traits: [
      { name: "Inmune", text: "Inmune al frío y al fuego." },
      { name: "Fundir", text: "Los objetos de metal no mágicos que toquen al remorhaz se funden con un resultado de 1-3 en 1d6." },
      { name: "Engullir", text: "Con un 18-20 natural en el ataque, el objetivo es engullido. Oscuridad total en el interior y 2d10 de daño por asalto. Regurgita a todos si recibe al menos 20 de daño en un solo asalto en el interior de su estómago." }
    ]
  },
  {
    name: "RINOCERONTE (RHINOCEROS)",
    desc: "Pesados cuadrúpedos de piel grisácea con un imponente cuerno sobre el morro. Habitan en pastizales y sabanas.",
    ca: 14, pg: 25, mv: "cercano", nv: 5, al: "N",
    f: "+4", d: "-1", c: "+3", i: "-3", s: "+0", ca_mod: "-3",
    atq: "2 cuernos +4 (1d8)",
    traits: [
      { name: "Carga", text: "Se mueve hasta el doble de distancia cercana en línea recta y realiza 1 ataque de cuerno. Si impacta, inflige x3 de daño." }
    ]
  },
  {
    name: "ROC",
    desc: "Aves rapaces gigantescas del tamaño de dragones que anidan en las cumbres montañosas más inaccesibles.",
    ca: 15, pg: 69, mv: "doble cercano (volar)", nv: 15, al: "N",
    f: "+5", d: "+3", c: "+2", i: "-2", s: "+2", ca_mod: "-2",
    atq: "4 desgarres +9 (2d10 + presa)",
    traits: [
      { name: "Presa", text: "CD 18 FUE o el objetivo queda apresado (CD 18 FUE en su turno para liberarse)." }
    ]
  },
  {
    name: "ROPER / ESTRANGULADOR DE CAVERNA (ROPER)",
    desc: "Monstruosidades voraces que semejan estalagmitas o rocas de caverna cuando mantienen su único ojo y fauces cerrados.",
    ca: 14, pg: 31, mv: "contacto (trepar)", nv: 6, al: "N",
    f: "+3", d: "-2", c: "+4", i: "-1", s: "+2", ca_mod: "+1",
    atq: "4 tentáculos (doble cercano) +4 (1d6 + presa) y 1 mordisco +4 (2d8)",
    traits: [
      { name: "Inmune", text: "Solo recibe daño de fuentes mágicas." },
      { name: "Presa", text: "CD 15 FUE o el objetivo queda atrapado; el tentáculo impacta automáticamente en el siguiente asalto (CD 15 FUE en su turno para liberarse)." },
      { name: "Arrastrar", text: "En lugar de un ataque de tentáculo, arrastra a un objetivo apresado una distancia cercana hacia sí." },
      { name: "Tentáculos", text: "Tiene 4 tentáculos en total (CA 18 cada uno). 4+ de daño a un tentáculo lo corta." }
    ]
  },
  {
    name: "FLOR DE LA PODREDUMBRE (ROT FLOWER)",
    desc: "Flores carnívoras del tamaño de un humano que despiden un nauseabundo olor a carroña.",
    ca: 9, pg: 10, mv: "ninguno", nv: 2, al: "N",
    f: "+1", d: "-3", c: "+1", i: "-4", s: "-3", ca_mod: "-4",
    atq: "1 mordisco +1 (1d4 + toxina)",
    traits: [
      { name: "Toxina", text: "CD 12 CON o queda inconsciente durante 1d4 asaltos." }
    ]
  },
  {
    name: "MONSTRUO DEL ÓXIDO (RUST MONSTER)",
    desc: "Un insectoide de color pardo del tamaño de un lobo con dos largas antenas plumosas. Se alimenta devorando metal.",
    ca: 13, pg: 19, mv: "cercano (trepar)", nv: 4, al: "N",
    f: "+2", d: "+3", c: "+1", i: "-3", s: "+1", ca_mod: "-3",
    atq: "2 garras +3 (1d6)",
    traits: [
      { name: "Corrosivo", text: "El metal que toque al monstruo del óxido se destruye con un resultado de 1-3 en 1d6." }
    ]
  },
  {
    name: "SAHUAGIN",
    desc: "Humanoides de piel verde marina, extremidades palmeadas y dientes de tiburón. Cazadores submarinos implacables.",
    ca: 14, pg: 9, mv: "cercano (nadar)", nv: 2, al: "C",
    f: "+1", d: "+1", c: "+0", i: "-1", s: "+0", ca_mod: "-1",
    atq: "2 tridentes (cercano) +1 (1d6)",
    traits: [
      { name: "Armadura", text: "Cuero + escudo." },
      { name: "Semi-Anfibio", text: "Debe sumergirse en agua al menos una vez cada 4 horas o empieza a asfixiarse." }
    ]
  },
  {
    name: "SALAMANDRA (SALAMANDER)",
    desc: "Hombres-lagarto de color ígneo con largas colas y crestas llameantes a lo largo del lomo.",
    ca: 13, pg: 24, mv: "cercano", nv: 5, al: "C",
    f: "+2", d: "+0", c: "+2", i: "-1", s: "+1", ca_mod: "-1",
    atq: "2 lanzas llameantes (contacto/cercano) +4 (1d6, prende inflamables) o 1 arco largo de hierro (lejano) +2 (1d8)",
    traits: [
      { name: "Inmune", text: "Inmune al fuego." },
      { name: "Aura de Calor", text: "Las criaturas a distancia de contacto CD 12 CON en su turno o reciben 1d8 de daño." }
    ]
  },
  {
    name: "ENJAMBRE DE ESCARABAJOS (SCARAB, SWARM)",
    desc: "Una nube chasqueante de escarabajos ovalados de caparazón iridiscente.",
    ca: 13, pg: 14, mv: "cercano (volar)", nv: 3, al: "N",
    f: "-1", d: "+3", c: "+1", i: "-3", s: "+0", ca_mod: "-3",
    atq: "2 mordiscos +3 (1d6)",
    traits: []
  },
  {
    name: "ESPANTAPÁJAROS (SCARECROW)",
    desc: "Ropajes raídos y una cabeza de arpillera rellena de paja, poseída por un espíritu malévolo.",
    ca: 12, pg: 15, mv: "cercano", nv: 3, al: "C",
    f: "+2", d: "+2", c: "+2", i: "+0", s: "+0", ca_mod: "+2",
    atq: "2 garras +2 (1d6) o 1 chillido",
    traits: [
      { name: "Chillido", text: "Las criaturas que lo escuchen a doble distancia cercana CD 12 CAR o quedan paralizadas durante 1d4 asaltos." }
    ]
  },
  {
    name: "ESCORPIÓN (SCORPION)",
    desc: "Arácnidos del desierto provistos de pinzas y un aguijón curvo en la cola.",
    ca: 11, pg: 1, mv: "cercano (trepar)", nv: 0, al: "N",
    f: "-4", d: "+1", c: "+0", i: "-4", s: "+0", ca_mod: "-4",
    atq: "1 aguijón +1 (1 + veneno)",
    traits: [
      { name: "Veneno", text: "CD 9 CON o cae a 0 PG." }
    ]
  },
  {
    name: "ESCORPIÓN GIGANTE (SCORPION, GIANT)",
    desc: "Escorpiones acorazados de quitina gruesa del tamaño de camellos.",
    ca: 14, pg: 13, mv: "cercano (trepar)", nv: 3, al: "N",
    f: "+2", d: "+2", c: "+0", i: "-4", s: "+0", ca_mod: "-4",
    atq: "1 pinza +2 (1d6 + presa) y 1 aguijón +2 (1d4 + veneno)",
    traits: [
      { name: "Presa", text: "CD 12 FUE o el objetivo queda apresado (CD 12 FUE en su turno para liberarse)." },
      { name: "Veneno", text: "CD 12 CON o cae a 0 PG." }
    ]
  },
  {
    name: "SOMBRA (SHADOW)",
    desc: "Sombras conscientes y ondulantes con una vaga silueta humanoide que se deslizan en silencio.",
    ca: 12, pg: 15, mv: "cercano (volar)", nv: 3, al: "C",
    f: "-4", d: "+2", c: "+2", i: "-2", s: "+0", ca_mod: "-1",
    atq: "2 toques +2 (1d4 + drenaje)",
    traits: [
      { name: "Drenaje de Fuerza", text: "CD 12 CON o la Fuerza del objetivo se reduce en 1. A 0 FUE, el objetivo muere y se transforma en una sombra." }
    ]
  },
  {
    name: "TÚMULO RODANTE (SHAMBLING MOUND)",
    desc: "Masas fétidas de vegetación cenagosa animadas por el impacto de un relámpago.",
    ca: 14, pg: 20, mv: "cercano", nv: 4, al: "N",
    f: "+3", d: "-2", c: "+2", i: "-3", s: "+0", ca_mod: "-3",
    atq: "2 embates +3 (1d6 + engullir)",
    traits: [
      { name: "Inmune", text: "Inmune al fuego. La electricidad le sana." },
      { name: "Engullir", text: "Si un objetivo es impactado por ambos embates en el mismo asalto, queda atrapado en el interior de su cuerpo y se asfixia en 2d4 asaltos (CD 15 FUE en su turno para escapar)." }
    ]
  },
  {
    name: "TIBURÓN (SHARK)",
    desc: "Depredador alfa marino, rápido y sanguinario, de cuerpo gris hidrodinámico.",
    ca: 11, pg: 15, mv: "cercano (nadar)", nv: 3, al: "N",
    f: "+3", d: "+1", c: "+2", i: "-3", s: "+1", ca_mod: "-3",
    atq: "1 mordisco +3 (1d10)",
    traits: []
  },
  {
    name: "MEGALODÓN (SHARK, MEGALODON)",
    desc: "Tiburones primordiales del tamaño de ballenas gigantes.",
    ca: 13, pg: 38, mv: "doble cercano (nadar)", nv: 8, al: "N",
    f: "+5", d: "+1", c: "+2", i: "-3", s: "+1", ca_mod: "-3",
    atq: "3 mordiscos +7 (2d8)",
    traits: [
      { name: "Sin Miedo", text: "Inmune a tiradas de moral." }
    ]
  },
  {
    name: "SIRENA (SIREN)",
    desc: "Feéricos funestos con alas de paloma y escamas iridiscentes cuyo canto cautiva y hechiza a los mortales.",
    ca: 12, pg: 18, mv: "cercano (nadar, volar)", nv: 4, al: "C",
    f: "+0", d: "+2", c: "+0", i: "+2", s: "+2", ca_mod: "+4",
    atq: "2 garras +2 (1d6) o 1 canto",
    traits: [
      { name: "Canto", text: "Los enemigos que puedan escucharla a doble distancia cercana CD 15 CAR o quedan paralizados durante 1d4 asaltos (inmunes durante 1 día si superan la prueba)." }
    ]
  },
  {
    name: "ESQUELETO (SKELETON)",
    desc: "Un esqueleto humanoide de huesos blanqueados con dos puntos rojos brillantes en las cuencas oculares.",
    ca: 13, pg: 11, mv: "cercano", nv: 2, al: "C",
    f: "+1", d: "+0", c: "+2", i: "-2", s: "+0", ca_mod: "-1",
    atq: "1 espada corta +1 (1d6) o 1 arco corto (lejano) +0 (1d4)",
    traits: [
      { name: "Armadura", text: "Cota de malla." },
      { name: "No-muerto", text: "Inmune a tiradas de moral." }
    ]
  },
  {
    name: "ESMILODONTE / DIENTES DE SABLE (SMILODON)",
    desc: "Tigres prehistóricos provistos de largos colmillos curvados como dagas.",
    ca: 12, pg: 14, mv: "cercano", nv: 3, al: "N",
    f: "+3", d: "+2", c: "+1", i: "-3", s: "+1", ca_mod: "-3",
    atq: "2 mordiscos +3 (1d6)",
    traits: []
  },
  {
    name: "COBRA (SNAKE, COBRA)",
    desc: "Serpiente ondulante con capucha cervical ensanchada y veneno letal.",
    ca: 12, pg: 4, mv: "cercano", nv: 1, al: "N",
    f: "-3", d: "+2", c: "+0", i: "-3", s: "+0", ca_mod: "-3",
    atq: "1 mordisco +2 (1 + veneno)",
    traits: [
      { name: "Veneno", text: "CD 18 CON o cae a 0 PG con un contador de muerte fijado en 1." }
    ]
  },
  {
    name: "SERPIENTE GIGANTE (SNAKE, GIANT)",
    desc: "Un enorme ofidio moteado capaz de engullir una res entera.",
    ca: 12, pg: 23, mv: "cercano (trepar)", nv: 5, al: "N",
    f: "+3", d: "+2", c: "+1", i: "-2", s: "+0", ca_mod: "-2",
    atq: "2 mordiscos +4 (1d6) y 1 constricción (cercano)",
    traits: [
      { name: "Constricción", text: "Prueba enfrentada de Fuerza para mantener al objetivo inmovilizado durante un asalto." }
    ]
  },
  {
    name: "ENJAMBRE DE SERPIENTES (SNAKE, SWARM)",
    desc: "Una marea viva de serpientes que serpentean y fluyen rápidamente por el suelo.",
    ca: 12, pg: 19, mv: "cercano", nv: 4, al: "N",
    f: "-3", d: "+2", c: "+1", i: "-3", s: "+0", ca_mod: "-3",
    atq: "3 mordiscos +2 (1d4 + veneno)",
    traits: [
      { name: "Veneno", text: "CD 12 CON o cae a 0 PG en 1d4 asaltos." }
    ]
  },
  {
    name: "SOLDADO (SOLDIER)",
    desc: "Un infante armado e instruido en tácticas de combate militar en formación.",
    ca: 15, pg: 10, mv: "cercano", nv: 2, al: "L",
    f: "+1", d: "+0", c: "+1", i: "+0", s: "+0", ca_mod: "+0",
    atq: "1 espada larga +2 (1d8) o 1 ballesta (lejano) +1 (1d6)",
    traits: [
      { name: "Armadura", text: "Cota de malla + escudo." }
    ]
  },
  {
    name: "ESFINGE (SPHINX)",
    desc: "Un oráculo leonino alado que puede escrutar el tiempo y el espacio, y que suele expresarse mediante enigmas y acertijos.",
    ca: 16, pg: 42, mv: "doble cercano (volar)", nv: 9, al: "L",
    f: "+4", d: "+1", c: "+2", i: "+4", s: "+4", ca_mod: "+3",
    atq: "3 garras +7 (1d10) o 2 conjuros +5",
    traits: [
      { name: "Rugido", text: "En lugar de atacar, todas las criaturas que puedan escucharla a distancia lejana CD 18 CAR o quedan paralizadas durante 1d4 asaltos." },
      { name: "Portal (Conjuro SAB)", text: "CD 14. Abre un portal a distancia cercana hacia cualquier punto de cualquier plano durante 1d6 asaltos." },
      { name: "Presagios (Conjuro SAB)", text: "Personal. CD 12. Ventaja en todas sus acciones durante 1d4 asaltos." },
      { name: "Acertijo (Conjuro SAB)", text: "CD 12. Un objetivo a distancia lejana CD 15 INT o queda estupefacto durante 1d4 asaltos." },
      { name: "Doblar el Tiempo (Conjuro SAB)", text: "CD 14. Un objetivo a distancia cercana queda congelado en el tiempo durante 1d4 asaltos." },
      { name: "Deshacer (Conjuro SAB)", text: "CD 13. Un objetivo a distancia lejana recibe 3d8 de daño." }
    ]
  },
  {
    name: "ARAÑA (SPIDER)",
    desc: "Arácnidos silenciosos tejedores de telarañas cuyo veneno disuelve la carne.",
    ca: 11, pg: 1, mv: "cercano (trepar)", nv: 0, al: "N",
    f: "-4", d: "+1", c: "+0", i: "-4", s: "+0", ca_mod: "-4",
    atq: "1 mordisco +1 (1 + veneno)",
    traits: [
      { name: "Veneno", text: "CD 9 CON o recibe 1d4 de daño." }
    ]
  },
  {
    name: "ARAÑA GIGANTE (SPIDER, GIANT)",
    desc: "Arácnido de abdomen bulboso y ocho patas delgadas que acecha en árboles o cuevas para emboscar presas.",
    ca: 13, pg: 13, mv: "cercano (trepar)", nv: 3, al: "N",
    f: "+2", d: "+3", c: "+0", i: "-2", s: "+1", ca_mod: "-2",
    atq: "1 mordisco +3 (1d4 + veneno)",
    traits: [
      { name: "Veneno", text: "CD 12 CON o queda paralizado durante 1d4 horas." }
    ]
  },
  {
    name: "ENJAMBRE DE ARAÑAS (SPIDER, SWARM)",
    desc: "Una alfombra viva y trepadora de arañas que se dispersa rápidamente.",
    ca: 13, pg: 9, mv: "cercano (trepar)", nv: 2, al: "N",
    f: "-1", d: "+3", c: "+0", i: "-3", s: "+1", ca_mod: "-3",
    atq: "1 mordisco +3 (1d4 + veneno)",
    traits: [
      { name: "Veneno", text: "CD 12 CON o queda paralizado durante 1d4 asaltos." }
    ]
  },
  {
    name: "MURCIÉLAGO AGUIJÓN (STINGBAT)",
    desc: "Un híbrido veloz de insecto y murciélago de color naranja con cuatro alas y un pico similar a una aguja.",
    ca: 12, pg: 4, mv: "cercano (volar)", nv: 1, al: "N",
    f: "-2", d: "+2", c: "+0", i: "-2", s: "+0", ca_mod: "-2",
    atq: "1 pico +2 (1d4 + drenaje de sangre)",
    traits: [
      { name: "Drenaje de Sangre", text: "Se adhiere al objetivo picado acertando automáticamente en el siguiente asalto (CD 9 FUE en su turno para retirarlo)." }
    ]
  },
  {
    name: "ESTRANGULADOR (STRANGLER)",
    desc: "Criatura demacrada de piel grisácea con cuatro extremidades largas y correosas rematadas en garras con ventosas.",
    ca: 12, pg: 14, mv: "cercano (trepar)", nv: 3, al: "C",
    f: "-2", d: "+2", c: "+1", i: "-2", s: "+0", ca_mod: "-2",
    atq: "2 garras +2 (1d6)",
    traits: [
      { name: "Sigiloso", text: "Ventaja en pruebas de Destreza para ocultarse y moverse en silencio." },
      { name: "Estrangular", text: "Inflige x2 de daño contra criaturas sorprendidas." }
    ]
  },
  {
    name: "EL ORÁCULO DE DIEZ OJOS (THE TEN-EYED ORACLE)",
    desc: "Una masa flotante de piel gomosa incrustada de percebes. Sus diez pedúnculos oculares se retuercen como serpientes y una cicatriz circular ciega su gran ojo central sobre unas fauces sin labios.",
    ca: 17, pg: 85, mv: "cercano (volar)", nv: 18, al: "C",
    f: "+4", d: "+5", c: "+4", i: "+5", s: "+4", ca_mod: "+4",
    atq: "2d4 rayos de pedúnculo ocular",
    traits: [
      { name: "Legendario", text: "Solo recibe daño de fuentes mágicas. Los conjuros hostiles dirigidos contra él requieren CD 18 para lanzarse." },
      { name: "Rayos Oculares", text: "Cada rayo se dispara 1 vez por asalto contra una criatura u objeto de hasta 1.000 libras (máximo 4 rayos al mismo objetivo). 1. Hechizo: CD 15 CAR o se convierte en aliado 1d4 asaltos. 2. Retener: CD 15 FUE o paralizado 1d4 asaltos. 3. Sueño: CD 15 SAB o dormido 1d4 asaltos. 4. Polimorfia: CD 15 INT o transformado en alimaña 1d4 asaltos. 5. Cancelar: CD 15 DES o terminan todos los efectos mágicos en el objetivo. 6. Confusión: CD 15 SAB o ataca a un aliado al azar a distancia cercana. 7. Telequinesis: CD 15 FUE o levita al objetivo hasta doble distancia cercana. 8. Desintegrar: CD 15 DES o 5d8 daño (objeto destruido). 9. Petrificar: CD 15 CON o petrificado. 10. Muerte: CD 15 CON o cae a 0 PG con contador de muerte en 1." }
    ]
  },
  {
    name: "EL TARRASCA (THE TARRASQUE)",
    desc: "Un descomunal reptil cuadrúpedo con mandíbulas de cocodrilo, escamas de ámbar y un caparazón espinoso duro como el diamante. Se alza como una montaña capaz de tragar aldeas enteras.",
    ca: 22, pg: 140, mv: "triple cercano (excavar, nadar)", nv: 30, al: "N",
    f: "+7", d: "+2", c: "+5", i: "-3", s: "+1", ca_mod: "-3",
    atq: "4 azotes (cercano) +13 (3d10 + cercenar) y 1 mordisco (cercano) +13 (5d10 + cercenar + engullir)",
    traits: [
      { name: "Legendario", text: "Solo recibe daño de fuentes mágicas. Los conjuros hostiles dirigidos contra él requieren CD 18 para lanzarse." },
      { name: "Morador Profundo", text: "Inmune al fuego y al frío. Anfibio." },
      { name: "Muerte Permanente", text: "No puede morir permanentemente a menos que se le lance el conjuro deseo mientras se encuentra a 0 PG." },
      { name: "Arrasar", text: "En lugar de atacar, se mueve a distancia lejana en línea recta y realiza un ataque de mordisco (si impacta, inflige triple daño)." },
      { name: "Caparazón Reflectante", text: "Inmune a rayos, descargas o proyectiles de energía mágica (1 en 6 de probabilidad de reflejarlos hacia su lanzador)." },
      { name: "Regeneración", text: "Recupera 4d10 PG perdidos al inicio de su turno." },
      { name: "Cercenar", text: "Con un resultado natural de 18+ en la tirada de ataque, cercena un miembro aleatorio: 1d6 (1. Cabeza, 2-4. Brazo, 5-6. Pierna)." },
      { name: "Engullir", text: "CD 18 FUE o el objetivo es engullido entero. Oscuridad total en el interior y 4d10 de daño por asalto. El tarrasca regurgita a todos los engullidos si recibe al menos 30 de daño en un solo asalto en el interior de su estómago." }
    ]
  },
  {
    name: "EL MERCADER ERRANTE (THE WANDERING MERCHANT)",
    desc: "Un risueño comerciante humano de mediana edad con bigote encerado, camisa blanca y delantal de cuero, cargado con una mochila colosal repleta de maravillas.",
    ca: 16, pg: 71, mv: "cercano", nv: 15, al: "L",
    f: "+3", d: "+3", c: "+4", i: "+3", s: "+4", ca_mod: "+5",
    atq: "4 espadas bastardas vorpalinas +3 +9 (1d10 + decapitar)",
    traits: [
      { name: "Armadura", text: "Cota de malla de mitral." },
      { name: "Legendario", text: "Solo recibe daño de fuentes mágicas. Los conjuros hostiles dirigidos contra él requieren CD 18 para lanzarse." },
      { name: "Amuleto de Rahm-Hotep", text: "En lugar de atacar, se teletransporta a un lugar aleatorio del multiverso." },
      { name: "Bolsa Sin Fondo", text: "Contiene 200 espacios de inventario en bolsillos interdimensionales y pesa como una mochila normal. Puede convocarla chasqueando los dedos." },
      { name: "Dados de la Verdad", text: "Un juego de tres dados de seis caras cuyas tiradas no pueden ser alteradas mágica ni mundanamente." },
      { name: "Decapitar", text: "Con un 18-20 natural en la tirada de ataque, decapita al objetivo." },
      { name: "Ajuste de Cuentas", text: "Cualquiera que robe al mercader sufre una maldición: en 2d8 días se convierte en una cocatriz (solo se anula con deseo o devolviendo lo robado)." },
      { name: "Tierras Extrañas", text: "No sufre ningún efecto adverso del entorno natural a menos que lo desee." }
    ]
  },
  {
    name: "LADRÓN / ASALTANTE (THIEF)",
    desc: "Un ladrón sigiloso embozado en una capa negra.",
    ca: 13, pg: 13, mv: "cercano", nv: 3, al: "N",
    f: "+0", d: "+2", c: "+0", i: "+0", s: "+0", ca_mod: "+1",
    atq: "1 daga (contacto/cercano) +2 (1d4) o 1 espada corta +0 (1d6)",
    traits: [
      { name: "Armadura", text: "Cuero." },
      { name: "Sigiloso", text: "Ventaja en pruebas de Destreza para moverse en silencio y esconderse." },
      { name: "Apuñalamiento", text: "Inflige x2 de daño contra criaturas sorprendidas." }
    ]
  },
  {
    name: "MATÓN / RUFIÁN (THUG)",
    desc: "Un pendenciero tosco y amoratado acostumbrado a la violencia callejera.",
    ca: 13, pg: 4, mv: "cercano", nv: 1, al: "C",
    f: "+1", d: "+0", c: "+0", i: "-1", s: "+1", ca_mod: "-1",
    atq: "1 espada corta +1 (1d6)",
    traits: [
      { name: "Armadura", text: "Cuero + escudo." }
    ]
  },
  {
    name: "ARBURÓN / ENT (TREANT)",
    desc: "Árboles animados pacíficos de paso lento, ojos afables y voces profundas que protegen el corazón de los bosques.",
    ca: 14, pg: 38, mv: "cercano", nv: 8, al: "N",
    f: "+4", d: "-1", c: "+2", i: "+2", s: "+3", ca_mod: "+1",
    atq: "3 embates +8 (1d10) o 1 roca (lejano) +8 (2d12)",
    traits: [
      { name: "Animar Árbol", text: "2/día. En lugar de atacar, un árbol a distancia cercana despierta como un arburón aliado (sin esta habilidad) durante 1 día." }
    ]
  },
  {
    name: "TROL (TROLL)",
    desc: "Gigantes desgarbados de piel verdosa verrugosa y furia territorial implacable. Habitan en ciénagas y espesuras.",
    ca: 12, pg: 24, mv: "cercano", nv: 5, al: "C",
    f: "+3", d: "+2", c: "+2", i: "-1", s: "+0", ca_mod: "-1",
    atq: "2 garras +4 (1d6) y 1 mordisco +4 (1d10)",
    traits: [
      { name: "Regeneración", text: "Recupera 2d6 PG al comienzo de su turno a menos que sus heridas sean cauterizadas con fuego o ácido." }
    ]
  },
  {
    name: "TROL DE ESCARCHA (TROLL, FROST)",
    desc: "Troles cubiertos de escarcha de piel azulada y ojos oscuros como pedernal que acechan en tundras y bosques boreales.",
    ca: 13, pg: 34, mv: "cercano", nv: 7, al: "C",
    f: "+3", d: "+2", c: "+3", i: "-1", s: "+0", ca_mod: "-1",
    atq: "2 garras +5 (1d8) y 1 mordisco +5 (1d12)",
    traits: [
      { name: "Inmune", text: "Inmune al frío y al fuego." },
      { name: "Regeneración", text: "Recupera 2d6 PG en su turno a menos que sus heridas sean cauterizadas con ácido." }
    ]
  },
  {
    name: "UNICORNIO (UNICORN)",
    desc: "Un majestuoso caballo plateado de crines ondeantes y un único cuerno en espiral.",
    ca: 12, pg: 20, mv: "doble cercano", nv: 4, al: "L",
    f: "+3", d: "+2", c: "+2", i: "+1", s: "+2", ca_mod: "+3",
    atq: "1 pezuñas +3 (1d6)",
    traits: [
      { name: "Cuerno Sanador", text: "Un toque de su cuerno cura 2d6 PG o elimina una maldición o enfermedad." }
    ]
  },
  {
    name: "VAMPIRO (VAMPIRE)",
    desc: "No-muertos pálidos bebedores de sangre de supremo poder y perversidad. Detestan la luz solar y protegen celosamente sus ataúdes.",
    ca: 15, pg: 52, mv: "cercano (trepar)", nv: 11, al: "C",
    f: "+4", d: "+3", c: "+3", i: "+1", s: "+3", ca_mod: "+4",
    atq: "3 mordiscos +7 (1d8 + drenaje de sangre) o 1 hechizo",
    traits: [
      { name: "No-muerto Supremo", text: "Inmune a tiradas de moral. Solo recibe daño de fuentes mágicas." },
      { name: "Drenaje de Sangre", text: "El vampiro recupera 2d6 PG y el objetivo pierde 1d4 CON. A 0 CON, el objetivo muere y se alza como vampiro o engendro leal." },
      { name: "Hechizar", text: "Un humanoide a distancia cercana que lo vea CD 15 CAR o queda bajo su control durante 1d4 días." },
      { name: "Cambiar de Forma", text: "En lugar de atacar, se transforma en murciélago, lobo o vuelve a su forma natural." },
      { name: "Vampiro", text: "Debe dormir en su ataúd a diario o pierde 2d6 PG diarios incurables. Recibe 3d8 de daño por asalto bajo luz solar directa. Solo muere si se le clava una estaca de madera en el corazón mientras se encuentra a 0 PG." }
    ]
  },
  {
    name: "ENGENDRO VAMPÍRICO (VAMPIRE SPAWN)",
    desc: "Vampiros menores y salvajes nacidos de la mordedura de sus señores. Sanguinarios y crueles.",
    ca: 13, pg: 25, mv: "cercano (trepar)", nv: 5, al: "C",
    f: "+3", d: "+2", c: "+3", i: "-1", s: "+1", ca_mod: "+2",
    atq: "2 mordiscos +4 (1d8 + drenaje de sangre)",
    traits: [
      { name: "Armadura", text: "Cuero." },
      { name: "No-muerto Mayor", text: "Inmune a tiradas de moral. Solo recibe daño de plata o fuentes mágicas." },
      { name: "Drenaje de Sangre", text: "El engendro recupera 2d6 PG y el objetivo pierde 1d4 CON. A 0 CON, el objetivo muere y se alza como engendro vampírico aliado." },
      { name: "Vampiro", text: "Debe dormir en un ataúd a diario o pierde 2d6 PG diarios incurables. Recibe 3d8 de daño por asalto bajo luz solar directa. Solo muere si se le clava una estaca de madera en el corazón mientras se encuentra a 0 PG." }
    ]
  },
  {
    name: "HONGO VIOLETA (VIOLET FUNGUS)",
    desc: "Hongos reptantes del tamaño de un niño con sombreros de color púrpura neón cuyas raíces azotan y descomponen la carne viva.",
    ca: 7, pg: 9, mv: "contacto (close)", nv: 2, al: "N",
    f: "-3", d: "-2", c: "+0", i: "-4", s: "-3", ca_mod: "-4",
    atq: "2 zarcillos (cercano) +0 (1d4)",
    traits: []
  },
  {
    name: "VIPERIANO (VIPERIAN)",
    desc: "Gente serpiente ágil con capuchas de cobra y escamas verde esmeralda que habitan entre las ruinas de su imperio caído.",
    ca: 13, pg: 13, mv: "cercano", nv: 3, al: "C",
    f: "+1", d: "+1", c: "+0", i: "+0", s: "+1", ca_mod: "+0",
    atq: "2 cimitarras +2 (1d6) o 1 jabalina (contacto/lejano) +2 (1d4)",
    traits: []
  },
  {
    name: "VIPERIANO OFIDIO (VIPERIAN OPHID)",
    desc: "El cuerpo de una anaconda gigante fusionado con un torso humanoide y una gran cabeza de serpiente, engalanado con torques de oro y piedras lunares.",
    ca: 14, pg: 28, mv: "cercano (trepar)", nv: 6, al: "C",
    f: "+4", d: "+2", c: "+1", i: "+1", s: "+1", ca_mod: "+1",
    atq: "3 bracamartes / alfanjes +5 (1d10) o 2 arcos largos (lejano) +3 (1d8)",
    traits: [
      { name: "Inmune", text: "Solo recibe daño de fuentes mágicas." }
    ]
  },
  {
    name: "MAGO VIPERIANO (VIPERIAN WIZARD)",
    desc: "Viperianos delgados de escamas teñidas de negro vestidos con túnicas de seda y joyas serpentinas de plata.",
    ca: 13, pg: 37, mv: "cercano", nv: 8, al: "C",
    f: "+0", d: "+1", c: "+0", i: "+3", s: "+1", ca_mod: "+1",
    atq: "1 daga (contacto/cercano) +2 (1d4) o 2 conjuros +5",
    traits: [
      { name: "Siseo (Conjuro INT)", text: "CD 12. Disipa un conjuro activo a distancia lejana." },
      { name: "Convocar Cobra (Conjuro INT)", text: "CD 13. Invoca 1d4 cobras leales que aparecen a distancia cercana durante 1d4 asaltos." },
      { name: "Veneno (Conjuro INT)", text: "CD 12. Un objetivo a distancia lejana recibe 2d8 de daño." },
      { name: "Susurros (Conjuro INT)", text: "CD 14. Concentración. Todos los enemigos a distancia cercana sufren desventaja en pruebas de lanzamiento durante la duración." }
    ]
  },
  {
    name: "BUITRE (VULTURE)",
    desc: "Aves carroñeras de plumaje negro, lomo encorvado y cabeza calva.",
    ca: 10, pg: 5, mv: "cercano (volar)", nv: 1, al: "N",
    f: "+1", d: "+0", c: "+1", i: "-3", s: "+1", ca_mod: "-3",
    atq: "1 desgarro +1 (1d4)",
    traits: [
      { name: "Rastreador de Carroña", text: "Puede rastrear carne muerta con total precisión en un radio de una milla." }
    ]
  },
  {
    name: "AVISPA GIGANTE (WASP, GIANT)",
    desc: "Avispas del tamaño de un humano con abdómenes brillantes listados en amarillo y negro.",
    ca: 13, pg: 9, mv: "cercano (volar)", nv: 2, al: "N",
    f: "+1", d: "+3", c: "+0", i: "-3", s: "+0", ca_mod: "-3",
    atq: "1 aguijón +3 (1d6 + veneno)",
    traits: [
      { name: "Veneno", text: "CD 9 CON o cae a 0 PG." }
    ]
  },
  {
    name: "HOMBRE RATA / LICÁNTROPO RATA (WERERAT)",
    desc: "Un humanoide escurridizo con cabeza de rata y pelaje sarnoso.",
    ca: 13, pg: 14, mv: "cercano (trepar)", nv: 3, al: "C",
    f: "+1", d: "+2", c: "+1", i: "-1", s: "+1", ca_mod: "-1",
    atq: "2 mordiscos +2 (1d6)",
    traits: [
      { name: "Armadura", text: "Cuero." },
      { name: "Inmune", text: "Solo recibe daño de plata o fuentes mágicas." },
      { name: "Licantropía", text: "Si una criatura sufre 12 o más puntos de daño del mismo hombre rata, contrae la licantropía." }
    ]
  },
  {
    name: "HOMBRE LOBO / LICÁNTROPO LOBO (WEREWOLF)",
    desc: "Un humanoide bípedo con cabeza de lobo cubierto de espeso pelaje pardo.",
    ca: 12, pg: 20, mv: "doble cercano", nv: 4, al: "C",
    f: "+3", d: "+2", c: "+2", i: "+0", s: "+1", ca_mod: "+0",
    atq: "2 desgarres +3 (1d6)",
    traits: [
      { name: "Inmune", text: "Solo recibe daño de plata o fuentes mágicas." },
      { name: "Licantropía", text: "Si una criatura sufre 12 o más puntos de daño del mismo hombre lobo, contrae la licantropía." }
    ]
  },
  {
    name: "TUMBERO / TUMULARIO (WIGHT)",
    desc: "Un guerrero no-muerto acorazado de piel pálida dotado de una siniestra inteligencia táctica.",
    ca: 14, pg: 15, mv: "cercano", nv: 3, al: "C",
    f: "+3", d: "+1", c: "+2", i: "+1", s: "+0", ca_mod: "+3",
    atq: "1 espada bastarda +3 (1d10) y 1 drenaje de vida +3",
    traits: [
      { name: "Armadura", text: "Cota de malla." },
      { name: "No-muerto Mayor", text: "Inmune a tiradas de moral. Solo recibe daño de plata o fuentes mágicas." },
      { name: "Drenaje de Vida", text: "1d4 de daño a Constitución. Muerte instantánea si se reduce a 0 CON." }
    ]
  },
  {
    name: "FUEGO FATUO (WILL-O'-WISP)",
    desc: "Una titilante luz de pantano animada por un espíritu malévolo que guía a los viajeros hacia trampas y pozos mortales.",
    ca: 13, pg: 10, mv: "cercano (volar)", nv: 2, al: "C",
    f: "-3", d: "+3", c: "+1", i: "-1", s: "-1", ca_mod: "-2",
    atq: "1 drenaje de vida +3",
    traits: [
      { name: "Drenaje de Vida", text: "1d4 de daño a Constitución. Muerte instantánea si se reduce a 0 CON." }
    ]
  },
  {
    name: "LOBO (WOLF)",
    desc: "Cánido de gran tamaño con pelaje gris, ojos amarillentos y fauces babeantes.",
    ca: 12, pg: 10, mv: "doble cercano", nv: 2, al: "N",
    f: "+2", d: "+2", c: "+1", i: "-2", s: "+1", ca_mod: "+0",
    atq: "1 mordisco +2 (1d6)",
    traits: [
      { name: "Cazador en Manada", text: "Inflige +1 de daño mientras tenga a un aliado a distancia de contacto (close)." }
    ]
  },
  {
    name: "LOBO HUARGO / DIRE WOLF (WOLF, DIRE)",
    desc: "Un lobo colosal con espinas de hueso negro a lo largo del arco supraciliar y el lomo.",
    ca: 12, pg: 19, mv: "doble cercano", nv: 4, al: "N",
    f: "+3", d: "+2", c: "+1", i: "-1", s: "+1", ca_mod: "+0",
    atq: "2 mordiscos +4 (1d8)",
    traits: [
      { name: "Cazador en Manada", text: "Inflige +1 de daño mientras esté junto a un aliado." }
    ]
  },
  {
    name: "LOBO INVERNAL (WOLF, WINTER)",
    desc: "Lobos de pelaje blanco y penetrantes ojos azules procedentes de los reinos feéricos del invierno eterno.",
    ca: 12, pg: 23, mv: "doble cercano", nv: 5, al: "C",
    f: "+3", d: "+2", c: "+1", i: "+0", s: "+1", ca_mod: "+0",
    atq: "2 mordiscos +4 (1d6) o 1 aliento de escarcha",
    traits: [
      { name: "Inmune", text: "Inmune al frío." },
      { name: "Aliento de Escarcha", text: "Llena un cubo de tamaño cercano adyacente al lobo. CD 15 DES o 3d8 de daño (no se puede volver a usar durante 1d4 asaltos)." }
    ]
  },
  {
    name: "HUARGO (WORG)",
    desc: "Lobos con rostro de murciélago que hablan trasgo y a menudo sirven como monturas de guerra para los goblinoides.",
    ca: 11, pg: 14, mv: "doble cercano", nv: 3, al: "C",
    f: "+2", d: "+1", c: "+1", i: "-2", s: "+1", ca_mod: "-2",
    atq: "1 mordisco +3 (1d6)",
    traits: []
  },
  {
    name: "ESPECTRO / APARICIÓN (WRAITH)",
    desc: "Un espíritu sombrío que hierve de ira y malicia. Su presencia inquieta a los animales.",
    ca: 14, pg: 36, mv: "cercano (volar)", nv: 8, al: "C",
    f: "-4", d: "+4", c: "+0", i: "+0", s: "+0", ca_mod: "+3",
    atq: "3 toques mortales +6 (1d10 + drenaje de vida)",
    traits: [
      { name: "No-muerto Mayor", text: "Inmune a tiradas de moral. Solo recibe daño de armas de plata o fuentes mágicas." },
      { name: "Incorpóreo", text: "En lugar de atacar, pasa a ser corpóreo o incorpóreo." },
      { name: "Drenaje de Vida", text: "1d4 de daño a Constitución. Muerte instantánea si se reduce a 0 CON." }
    ]
  },
  {
    name: "GUIVANO / VIVERN (WYVERN)",
    desc: "Parientes de los dragones provistos de un gran aguijón caudal, piel moteada de lagarto y alas coriáceas.",
    ca: 15, pg: 37, mv: "doble cercano (volar)", nv: 8, al: "N",
    f: "+4", d: "+2", c: "+1", i: "-3", s: "+1", ca_mod: "-3",
    atq: "2 desgarres +6 (1d8) y 1 aguijón +6 (1d6 + veneno)",
    traits: [
      { name: "Veneno", text: "CD 15 CON o recibe 2d10 de daño." }
    ]
  },
  {
    name: "ZOMBI (ZOMBIE)",
    desc: "Cadáveres tambaleantes en descomposición que cazan en hordas.",
    ca: 8, pg: 11, mv: "cercano", nv: 2, al: "C",
    f: "+2", d: "-2", c: "+2", i: "-2", s: "-2", ca_mod: "-3",
    atq: "1 embate +2 (1d6)",
    traits: [
      { name: "No-muerto", text: "Inmune a tiradas de moral." },
      { name: "Implacable", text: "Si el zombi es reducido a 0 PG por una fuente no mágica, CD 15 CON para quedar a 1 PG en su lugar." }
    ]
  }
];