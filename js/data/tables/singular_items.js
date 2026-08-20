window.SD_DATA = window.SD_DATA || {};

window.SD_DATA.SINGULAR_ITEMS = {
  d(sides) {
    return Math.floor(Math.random() * sides) + 1;
  },
  pick(arr) {
    if (!arr || arr.length === 0) return "";
    return arr[Math.floor(Math.random() * arr.length)];
  },

  // ==========================================
  // CATÁLOGO COMPLETO DE OBJETOS SINGULARES
  // ==========================================
  items: [
    {
      nombre: "Destrero de Alabastro (Alabaster Destrier)",
      desc: "Una estatuilla suave y perlada de un caballo a la carrera.",
      bono: "-",
      beneficio: "1 vez al día, puedes pronunciar la palabra de mando para transformar la estatuilla en un pegaso que acepta jinetes legales o neutrales. Permanece en esta forma durante 1 hora.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Amuleto del Secreto (Amulet of Secrecy)",
      desc: "Un colgante pesado y plano con la talla de un ojo cerrado.",
      bono: "-",
      beneficio: "Mientras lo lleves puesto, no puedes ser detectado por magia de adivinación (como el conjuro escudriñamiento o una Bola de Cristal).",
      maldicion: "Tienes constantemente la sensación angustiosa de que te están observando.",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Amuleto de la Vitalidad (Amulet of Vitality)",
      desc: "Un amuleto de oro con una lágrima de rubí rojo en el centro.",
      bono: "-",
      beneficio: "Tu puntuación de Constitución pasa a ser 18 (+4) mientras lleves puesto el amuleto.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Armadura de Santa Terragnis (Armor of Saint Terragnis)",
      desc: "Armadura de placas dorada grabada de pies a cabeza con ángeles guerreros.",
      bono: "Placas +3 (Solo devotos Legales de Santa Terragnis)",
      beneficio: "Los conjuros hostiles dirigidos contra ti requieren una tirada de DC 18 para ser lanzados con éxito. 1 vez al mes, puedes invocar un Avatar de Santa Terragnis (trátalo como un arcángel) para que luche a tu lado durante 10 asaltos.",
      maldicion: "Ninguna",
      personalidad: "Legal (Venerable y Sagrada)"
    },
    {
      nombre: "Armadura del Oni (Armor of the Oni)",
      desc: "Armadura de placas negra hecha de paneles de madera de hierro lacada. La visera del yelmo es el rostro de un oni gruñendo.",
      bono: "Placas +1",
      beneficio: "Puedes hablar y entender el idioma Diabólico. Tus ataques cuerpo a cuerpo infligen +1 de daño.",
      maldicion: "Tienes desventaja en tiradas de ataque y pruebas de lanzamiento contra demonios.",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Saco de Tejones (Bag of Badgers)",
      desc: "Un saco gris y deshilachado cubierto de pelo áspero y blanco.",
      bono: "-",
      beneficio: "1 vez al día, puedes meter la mano dentro y sacar un tejón enfurecido. Puedes arrojarlo hasta una distancia cercana (near). El tejón ataca a la criatura más próxima durante 3 asaltos antes de marcharse correteando.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Bolsa de Devoración (Bag of Devouring)",
      desc: "Una faltriquera de cuero desgastada con cordones ajustados.",
      bono: "-",
      beneficio: "Ninguno.",
      maldicion: "Esta bolsa devora y destruye por completo cualquier objeto introducido en su interior en 1d6 asaltos.",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Bolsa de Contención (Bag of Holding)",
      desc: "Una faltriquera de cuero desgastada con cordones ajustados.",
      bono: "-",
      beneficio: "Contiene un espacio interdimensional en su interior con capacidad para hasta 10 espacios de equipo (gear slots).",
      maldicion: "Introducir esta bolsa dentro de otra Bolsa de Contención o en un Agujero Portátil destruye ambos objetos y todo lo que contengan de forma instantánea.",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Cuenta de Fuerza (Bead of Force)",
      desc: "Una canica de cristal con un suave anillo de luz azul brillando en su interior.",
      bono: "-",
      beneficio: "Puedes arrojarla contra un objetivo a distancia cercana (near). Si impactas, el objetivo queda atrapado en el interior del conjuro esfera elástica.",
      maldicion: "Consumible de un solo uso",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Hoja de la Venganza (Blade of Vengeance)",
      desc: "Una hoja gris con un rubí en talla diamante en el pomo. Silba cortante al blandirse.",
      bono: "Espada bastarda +2 (No usable por no-muertos)",
      beneficio: "Tienes ventaja en los ataques contra criaturas no-muertas. Puedes usar la espada para lanzar expulsar no-muertos 1 vez al día (con bonificador de +4).",
      maldicion: "Ninguna",
      personalidad: "Legal. Severa y desconfiada. Forjada para frenar a los Reyes Brujos. Exige que sean destruidos."
    },
    {
      nombre: "Botas de Danza (Boots of Dancing)",
      desc: "Botas finas y flexibles de piel de oveja.",
      bono: "-",
      beneficio: "Ninguno.",
      maldicion: "En cuanto te las calzas, comienzas a bailar y hacer cabriolas sin control. Te mueves en direcciones aleatorias cada turno y debes superar una tirada de DES DC 15 para poder quitártelas.",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Botas de Flotación (Boots of Hovering)",
      desc: "Botas de cuero marrón pulidas y relucientes con alas plateadas en los talones.",
      bono: "-",
      beneficio: "Puedes caminar sobre superficies insustanciales durante 1 turno cada vez. Te hundes o caes si terminas tu turno sobre dicha superficie.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Botas del Gato (Boots of the Cat)",
      desc: "Botas grises de piel de cierva tan suaves y finas como zapatillas.",
      bono: "-",
      beneficio: "Puedes saltar hasta una distancia cercana (near) partiendo desde parado. Tus pruebas para moverte en silencio son siempre Fáciles (DC 9).",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Brazales de Arquería (Bracers of Archery)",
      desc: "Brazales de cuero grabados con halcones en pleno vuelo.",
      bono: "-",
      beneficio: "Infliges +1 de daño con armas a distancia.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Brazales de Defensa (Bracers of Defense)",
      desc: "Brazales de acero cincelados con runas enanas de protección.",
      bono: "-",
      beneficio: "Obtienes un bonificador de +1 a tu Clase de Armadura (CA).",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Libro de Erratas Mágicas de Brak (Brak's Book of Mispells)",
      desc: "Un tomo encuadernado en piel de rata con una runa brillante y mellada.",
      bono: "-",
      beneficio: "Contiene pergaminos de flecha ácida, bola de fuego y sueño.",
      maldicion: "Si un mago intenta lanzar o aprender un conjuro de estos pergaminos y tiene éxito, el objetivo del conjuro pasa a ser el propio lanzador.",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Cubo de la Perfección de Brak (Brak's Cube of Perfection)",
      desc: "Un cubo diminuto con ilustraciones de goblins en cada cara que representan la trascendencia física o mental.",
      bono: "-",
      beneficio: "Tira 1d6: la característica correspondiente aumenta de forma permanente a 18 (+4) (1. FUE, 2. DES, 3. CON, 4. INT, 5. SAB, 6. CAR). Tras usarse, el cubo se teletransporta a un lugar aleatorio del multiverso.",
      maldicion: "Consumible de un solo uso",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Tiara de la Sabiduría (Circlet of Wisdom)",
      desc: "Una fina tiara de plata engastada con una resplandeciente perla azul.",
      bono: "-",
      beneficio: "Tu puntuación de Sabiduría pasa a ser 18 (+4) mientras la lleves puesta.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Capa de los Elfos (Cloak of Elvenkind)",
      desc: "Una capa amplia con capucha que cambia de tonalidad para mimetizarse con el entorno.",
      bono: "-",
      beneficio: "Tus tiradas para esconderte son siempre Fáciles (DC 9). 1 vez al día, puedes volverte invisible durante 5 asaltos (la invisibilidad termina si atacas o lanzas un conjuro).",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Capa del Murciélago (Cloak of the Bat)",
      desc: "Una capa de cuero negro con dobladillo andrajoso y capucha con orejas puntiagudas.",
      bono: "-",
      beneficio: "Puedes volar a distancia cercana como tu movimiento si estás en una zona en penumbra o sombras.",
      maldicion: "Cada vez que vueles con ella, tira 1d20. Con un 1 natural, tú y tu equipo os transformáis en un murciélago durante 3 asaltos.",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Bola de Cristal (Crystal Ball)",
      desc: "Un orbe de cristal pulcro con visiones en remolino en su interior.",
      bono: "-",
      beneficio: "Solo los magos pueden usarla. Permite lanzar el conjuro escudriñamiento.",
      maldicion: "Si fallas la prueba de lanzamiento, deja de funcionar durante 24 horas.",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Daga del Héroe Goblin (Dagger of the Goblin Hero)",
      desc: "Una daga curva con una muesca de media luna en la base de la hoja.",
      bono: "Daga +1",
      beneficio: "Puedes hablar Goblin. Todos los seres goblinoides reaccionan ante ti con una actitud amistosa.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Huevo de Cocatriz (Egg of the Cockatrice)",
      desc: "Un huevo azul y duro del tamaño de un coco y pesado como una roca.",
      bono: "-",
      beneficio: "1 vez por semana, puedes pronunciar una palabra de mando para que eclosione una cocatriz que obedecerá tus órdenes durante 5 asaltos antes de marcharse volando. El huevo se recompone solo a lo largo de una semana.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Alfombra Voladora (Flying Carpet)",
      desc: "Una alfombra roja ricamente tejida con borlas doradas.",
      bono: "-",
      beneficio: "Capacidad para dos jinetes (uno actúa de conductor). Vuela el doble de distancia cercana en el turno del conductor.",
      maldicion: "Ninguna",
      personalidad: "Neutral. Juguetona y traviesa. Le encanta visitar nuevos lugares y se vuelve inquieta si no viaja con frecuencia."
    },
    {
      nombre: "Guanteletes del Poderío (Gauntlets of Might)",
      desc: "Pesados guanteletes de bronce con grabados de gigantes titánicos.",
      bono: "-",
      beneficio: "Tu puntuación de Fuerza pasa a ser 18 (+4) mientras los lleves puestos.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Lámpara del Genio (Genie Lamp)",
      desc: "Una lámpara de aceite de latón desgastada.",
      bono: "-",
      beneficio: "Frotar la lámpara hace surgir al djinni (50%) o al efrit (50%) que mora en su interior. Un djinni concede al invocador un conjuro de deseo antes de desaparecer. Un efrit hace lo mismo, pero solo tras ser derrotado en combate.",
      maldicion: "Consumible / Invocación de prueba",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Guantes de Agilidad (Gloves of Agility)",
      desc: "Guantes de cuero fino que parecen fundirse con las manos de quien los lleva.",
      bono: "-",
      beneficio: "Tu puntuación de Destreza pasa a ser 18 (+4) mientras los lleves puestos.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Bomba Goblin (Goblin Bomb)",
      desc: "Una rata disecada rellena con una carga explosiva y una mecha.",
      bono: "-",
      beneficio: "Puedes prender la mecha y arrojarla a distancia cercana (near). Explota en 1d4 asaltos, infligiendo 2d8 de daño a todo lo que esté a distancia cercana.",
      maldicion: "Consumible de un solo uso",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Gran Hacha de la Horda (Greataxe of the Horde)",
      desc: "Un hacha mellada tallada a partir de un pesado hueso de dragón.",
      bono: "Gran hacha +2",
      beneficio: "1 vez al día, puedes convertir un impacto normal con esta arma en un impacto crítico.",
      maldicion: "Cada vez que tus PG caigan por debajo de la mitad, haz una tirada de CAR DC 12; si fallas, entras en furia de batalla durante 1d4 asaltos y debes atacar a la criatura más cercana.",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Sombrero del Intelecto (Hat of Intellect)",
      desc: "Un sombrero puntiagudo y flexible de ala ancha.",
      bono: "-",
      beneficio: "Tu puntuación de Inteligencia pasa a ser 18 (+4) mientras lo lleves puesto.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Sombrero del Sabueso (Hat of the Hound)",
      desc: "Un sombrero bombín redondeado y elegante.",
      bono: "-",
      beneficio: "Puedes transformarte en un mastín cada día durante un total de hasta 10 asaltos. Tu ropa y pertenencias se transforman contigo.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Yelmo de Telepatía (Helm of Mind Reading)",
      desc: "Un yelmo tallado con surcos cerebrales, protector de cuello espinal y tentáculos de pulpo.",
      bono: "-",
      beneficio: "Puedes lanzar el conjuro detectar pensamientos 3 veces al día (con bonificador de +4).",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Yelmo Cornudo de Ramlaat (Horned Helm of Ramlaat)",
      desc: "Un yelmo manchado de sangre fabricado con el cráneo de un carnero.",
      bono: "Yelmo (+1 CA)",
      beneficio: "Otorga +1 a la Clase de Armadura. Tienes ventaja en cualquier prueba para derribar criaturas u objetos.",
      maldicion: "Sientes el impulso compulsivo de dar cabezazos a objetos frágiles y delicados.",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Reloj de Arena de las Arenas Negras (Hourglass of the Black Sands)",
      desc: "Un reloj de arena ancestral por el que fluye arena de obsidiana.",
      bono: "-",
      beneficio: "1 vez al día, puedes girar el reloj al lanzar un conjuro. Los efectos del conjuro duran 1d4 asaltos adicionales.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Vara Inamovible (Immovable Rod)",
      desc: "Una barra corta de hierro con un botón en un extremo.",
      bono: "-",
      beneficio: "Al pulsar el botón, la vara queda fija en el espacio (soporta hasta 2.500 kg / 5.000 lbs). Pulsar el botón de nuevo anula el efecto.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Joya de Barbalt (Jewel of Barbalt)",
      desc: "Un rubí del tamaño de un coco tallado con mil facetas.",
      bono: "-",
      beneficio: "Obtienes un éxito crítico con resultados de 18–20.",
      maldicion: "Obtienes una pifia crítica con resultados de 1–3.",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Engranaje de Kythera (Kytherian Cog)",
      desc: "Una rueda dentada del tamaño de una moneda pulida con brillo plateado.",
      bono: "-",
      beneficio: "Comienzas cada sesión de juego con una ficha de suerte (luck token).",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Arco Largo de los Reyes Elfos (Longbow of the Elven Kings)",
      desc: "Un arco largo de curvatura pronunciada con refuerzos de cornamenta de ciervo.",
      bono: "Arco largo +1",
      beneficio: "Tienes ventaja en los ataques realizados con este arco contra aberraciones antinaturales y seres extraplanares.",
      maldicion: "Ninguna",
      personalidad: "Neutral. Orgulloso y atemporal. Considera que salvaguardar el orden natural es el deber supremo. Exige buscar y aniquilar a todas las aberraciones."
    },
    {
      nombre: "Tinta Mágica (Magic Ink)",
      desc: "Un tintero con tinta negra brillante que desaparece según se seca.",
      bono: "-",
      beneficio: "La escritura es invisible en frío y solo se revela al calentarse cerca de una fuente de calor intenso. Contiene cantidad para 1d4 usos.",
      maldicion: "Consumible limitado",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Jabalina Flamígera de Memnon (Memnon's Blazing Javelin)",
      desc: "Jabalina dorada que parpadea transformándose brevemente en un relámpago.",
      bono: "Jabalina +1 (pasa a +3 con el conjunto de Memnon). Solo para seres Caóticos.",
      beneficio: "Siempre regresa a tu mano tras ser arrojada. 1 vez al día, al lanzarla, se transforma en un rayo como el conjuro rayo relampagueante (sin necesidad de prueba de lanzamiento).",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Espada Discordante de Memnon (Memnon's Discordant Blade)",
      desc: "Espadón de hoja espinada y roja que desprende chispas al blandirse.",
      bono: "Espadón +1 (pasa a +3 con el conjunto de Memnon). Solo para seres Caóticos.",
      beneficio: "1 vez al día, puedes desintegrar por completo a una criatura de nivel 9 o inferior a la que dañes con la hoja (la víctima puede superar una tirada de CON DC 18 para sufrir 3d8 de daño en su lugar).",
      maldicion: "No puedes deshacerte de ella a menos que te derroten en combate. Cada día que no mates a una criatura de nivel 2 o superior, pierdes 1d6 PG (solo los recuperas al matar a un ser de nivel 2+ con la espada).",
      personalidad: "Caótica (Sanguinaria)"
    },
    {
      nombre: "Armadura Entrópica de Memnon (Memnon's Entropic Armor)",
      desc: "Armadura de placas azul oscuro con grabados de rayos dorados y gemas rojas dispuestas como llamas.",
      bono: "Armadura de placas +1 (pasa a +3 con el conjunto de Memnon). Solo para seres Caóticos.",
      beneficio: "1 vez al día, pronuncias su palabra de mando: hasta tu siguiente turno, todas las armas no mágicas que te golpeen se destruyen reducidas a polvo al instante y no sufres daño.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Espejo de las Fechorías (Mirror of Mischief)",
      desc: "Espejo de cuerpo entero enmarcado por garras de demonios plateados y sonrientes.",
      bono: "-",
      beneficio: "Ninguno.",
      maldicion: "La primera vez que un humanoide se mira en él, crea un duplicado malvado idéntico (salvo por su equipo, que es mundano). La copia sale al exterior, puede vivir indefinidamente e intenta sembrar el caos en la vida del original.",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Cota de Malla Tejida en la Luna (Moonwrought Chainmail)",
      desc: "Cota de malla luminosa tan ligera como una camisa de seda.",
      bono: "Cota de malla de mitral +1",
      beneficio: "1 vez al día, pronuncias su palabra de mando para ganar un bonificador de +1 a tu siguiente prueba de lanzamiento o ataque a distancia.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Collar del Encanto (Necklace of Charm)",
      desc: "Cadena de oro en espina de pez que reluce con sutil belleza.",
      bono: "-",
      beneficio: "Tu puntuación de Carisma pasa a ser 18 (+4) mientras lo lleves puesto.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Maza Necrótica del Marchitamiento (Necrotic Mace of Withering)",
      desc: "Maza de hierro forjado rematada con un cráneo que grita y supura icor negro.",
      bono: "Maza +1 (Solo clérigos Caóticos)",
      beneficio: "Permite convertir los conjuros de curar heridas que lances en magia dañina que inflige tanto daño como el que habría curado.",
      maldicion: "Si la usas para invertir un curar heridas, sufres pesadillas esa noche: debes superar SAB DC 12 en tu próximo descanso o no obtendrás beneficios de él.",
      personalidad: "Caótica (Maligna)"
    },
    {
      nombre: "Armadura del Manto Nocturno (Nightcloak Armor)",
      desc: "Cueros negros mate encantados para intensificar las sombras.",
      bono: "Armadura de cuero +1",
      beneficio: "1 vez al día, puedes superar automáticamente una prueba de Destreza para esconderte.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Cuchillo de Bruja de Obsidiana (Obsidian Witchknife)",
      desc: "Hoja reluciente de obsidiana que desprende volutas de humo negro.",
      bono: "Daga +2 (No usable por seres Legales)",
      beneficio: "Al lanzar un conjuro sosteniendo la daga, puedes herirte con ella: suma el daño recibido a tu tirada de prueba de lanzamiento.",
      maldicion: "Ninguna",
      personalidad: "Caótica"
    },
    {
      nombre: "Destrero de Ónice (Onyx Destrier)",
      desc: "Estatuilla pulida de ébano de un caballo al galope.",
      bono: "-",
      beneficio: "1 vez al día, pronuncias la palabra de mando para transformarla en una pesadilla (nightmare) que acepta jinetes neutrales o caóticos durante 1 hora.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Armadura Ofidia (Ophidian Armor)",
      desc: "Cuero suave y brillante de escamas esmeralda moteadas.",
      bono: "Armadura de cuero +1",
      beneficio: "Tienes ventaja en las tiradas para resistir los efectos del veneno.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Perla de Poder (Pearl of Power)",
      desc: "Perla opalescente de gran tamaño con un fulgor interno.",
      bono: "-",
      beneficio: "1 vez al día, recuperas la capacidad de lanzar un conjuro que hubieses perdido (no funciona si se perdió por una pifia crítica).",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Pipa de las Colinas Onduladas (Pipe of the Rolling Hills)",
      desc: "Pipa larga y curvada con aroma a clavo y resina.",
      bono: "-",
      beneficio: "Hasta tres veces al día, recuperas 1d4 PG al fumar en ella.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Flauta de las Cloacas (Pipes of the Sewers)",
      desc: "Flauta de pan de latón desgastado con siete tubos.",
      bono: "-",
      beneficio: "1 vez al día, tocas la flauta para invocar 2d6 ratas gigantes que obedecen durante 1d6 asaltos antes de huir.",
      maldicion: "Si dejas de tocar mientras las ratas sigan presentes, se vuelven hostiles y te atacan.",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Agujero Portátil (Portable Hole)",
      desc: "Pieza cuadrada de terciopelo negro que se despliega formando un círculo.",
      bono: "-",
      beneficio: "Se abre en una superficie plana creando un foso de 1,8 m de ancho y 1,8 m de profundidad con 20 espacios de equipo de capacidad. Se cierra al plegar la tela.",
      maldicion: "Introducirlo dentro de una Bolsa de Contención o en otro Agujero Portátil destruye ambos objetos y su contenido.",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Poción de Extirpación (Potion of Extirpation)",
      desc: "Sustancia acre y alquitranada en un frasco de hierro con tapón de plomo.",
      bono: "-",
      beneficio: "Al verterla sobre un objeto o criatura (de hasta tamaño cercano), el objetivo es borrado por completo de la realidad; solo un conjuro de deseo puede revertirlo.",
      maldicion: "Consumible de un solo uso",
      personalidad: "Caótica. Protesta ruidosamente durante su uso y nunca está de acuerdo con el objetivo elegido para ser extirpado."
    },
    {
      nombre: "Poción de Vuelo (Potion of Flying)",
      desc: "Líquido brillante con burbujas que estallan como diminutas estrellas.",
      bono: "-",
      beneficio: "Vuelas a distancia cercana durante 10 asaltos.",
      maldicion: "Consumible de un solo uso",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Poción del Olvido (Potion of Forgetfulness)",
      desc: "Brebaje rosado que gira en remolino en sentido antihorario.",
      bono: "-",
      beneficio: "Si un ser inteligente la bebe, olvida permanentemente un recuerdo a elección de quien se la administró.",
      maldicion: "Consumible de un solo uso",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Poción de Fuerza de Gigante (Potion of Giant Strength)",
      desc: "Tarro de barro que contiene un lodo espeso de hojas verdes.",
      bono: "-",
      beneficio: "Tu Fuerza pasa a ser 18 (+4) e infliges el doble de daño (x2) en ataques cuerpo a cuerpo durante 10 asaltos.",
      maldicion: "Consumible de un solo uso",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Poción de Curación (Potion of Healing)",
      desc: "Botella de cristal con un líquido efervescente de sabor limón-vainilla.",
      bono: "-",
      beneficio: "Quien la beba recupera puntos de golpe según su nivel (0-3: 1d6 PG, 4-6: 2d8 PG, 7-9: 3d10 PG, 10+: 4d12 PG).",
      maldicion: "Consumible de un solo uso",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Poción de Invisibilidad (Potion of Invisibility)",
      desc: "Vial transparente aparentemente vacío, pero con líquido que chapotea en su interior.",
      bono: "-",
      beneficio: "Te vuelves invisible durante 10 asaltos (o hasta que ataques o lances un conjuro).",
      maldicion: "Consumible de un solo uso",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Poción de Hazañas Legendarias (Potion of Legendary Deeds)",
      desc: "Elixir dorado que resuena con un suave acorde celestial.",
      bono: "-",
      beneficio: "Al beberla, subes inmediatamente un nivel de personaje y tu total de PX se reinicia a cero.",
      maldicion: "Consumible de un solo uso",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Poción de Polimorfismo (Potion of Polymorph)",
      desc: "Frasco lavanda con un tritón encurtido flotando en líquido transparente.",
      bono: "-",
      beneficio: "Lanza sobre ti el conjuro polimorfismo con una duración de 1 hora (en lugar de 10 asaltos).",
      maldicion: "Consumible de un solo uso",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Poción de Vitalidad (Potion of Vitality)",
      desc: "Elixir carmesí que late rítmicamente como un corazón.",
      bono: "-",
      beneficio: "Tira el dado de PG de tu clase; ganas esa cantidad de PG máximos de forma permanente.",
      maldicion: "Si bebes más de una en toda tu vida, debes superar CON DC 18 cada vez adicional o mueres en el acto.",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Anillo de Caída de Pluma (Ring of Feather Falling)",
      desc: "Anillo perlado tallado con la forma de una pluma de búho.",
      bono: "-",
      beneficio: "1 vez al día, lanza caída de pluma sobre ti cuando caes.",
      maldicion: "Ninguna",
      personalidad: "Neutral. Miedo atroz a las alturas. Ulula telepáticamente como un búho advirtiendo que te alejes del borde de riscos y pozos."
    },
    {
      nombre: "Anillo de Bolas de Fuego (Ring of Fireballs)",
      desc: "Aro de bronce con garras que sostienen una esfera roja de cristal.",
      bono: "-",
      beneficio: "Puedes arrancar la esfera y arrojarla hasta distancia lejana (far), desatando una bola de fuego en el punto de impacto. La esfera vuelve a crecer tras completar un descanso.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Anillo de Invisibilidad (Ring of Invisibility)",
      desc: "Banda simple de oro pulida con un brillo cálido.",
      bono: "-",
      beneficio: "1 vez al día, lanza el conjuro invisibilidad sobre ti.",
      maldicion: "Probabilidad acumulativa del 1% en cada descanso de sufrir pesadillas apocalípticas y no obtener beneficios por descansar (se reinicia al 1% tras activarse).",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Anillo de Ramlaat (Ring of Ramlaat)",
      desc: "Anillo de hueso tallado como un cráneo de carnero con luces rojas en las cuencas.",
      bono: "-",
      beneficio: "1 vez al día, entras en furia durante 5 asaltos infligiendo el doble de daño. Durante la furia no puedes lanzar conjuros y los ataques cuerpo a cuerpo enemigos contra ti tienen ventaja.",
      maldicion: "Ninguna",
      personalidad: "Caótica. Agresivo e hiperconfiado. Incita constantemente al combate."
    },
    {
      nombre: "Túnica del Archimago (Robe of the Archmage)",
      desc: "Túnica de seda roja con manto dorado, mangas bordadas con lunas y ojos de oro.",
      bono: "Túnica de Archimago",
      beneficio: "Solo para magos con el título de Archimago. Tu CA sin armadura pasa a ser 15 + mod. Destreza. Elige tres conjuros conocidos: su DC de lanzamiento es siempre 11. Tienes ventaja al lanzar desintegrar.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Túnica del Druida (Robe of the Druid)",
      desc: "Túnica de terciopelo verde con capucha bordada con hojas de plata y enredaderas.",
      bono: "Túnica de Druida",
      beneficio: "Solo para magos con el título de Druida. Tu CA sin armadura pasa a ser 15 + mod. Destreza. Dos veces al día recuperas un conjuro perdido. Ventaja al lanzar cambio de forma y su duración pasa a ser de 1 hora (en lugar de concentración).",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Túnica del Hechicero (Robe of the Sorcerer)",
      desc: "Túnica de cuero negro con capucha sombría y broches de garra con cadenas de mitral.",
      bono: "Túnica de Hechicero",
      beneficio: "Solo para magos con el título de Hechicero. Tu CA sin armadura pasa a ser 15 + mod. Destreza. Al lanzar conjuros que hagan daño, suma tu modificador de Inteligencia al total. Ventaja al lanzar palabra de poder mortal.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Escarabajo de Protección (Scarab of Protection)",
      desc: "Broche de un escarabajo cornudo bañado en oro puro.",
      bono: "-",
      beneficio: "Si mueres, realiza una prueba de CON DC 18: si la superas, quedas inconsciente en lugar de muerto.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Cimitarra de la Luna de Ceniza (Scimitar of the Ash Moon)",
      desc: "Hoja ancha y curvada con la cabeza de un efrit en el pomo de bronce.",
      bono: "Espadón +3",
      beneficio: "En un impacto crítico, el objetivo es decapitado (muere instantáneamente si la decapitación es letal para su anatomía).",
      maldicion: "Ninguna",
      personalidad: "Caótica"
    },
    {
      nombre: "Escudo del Cruzado (Shield of the Crusader)",
      desc: "Escudo de lágrima pesado con una cruz carmesí desgastada pintada en el frente.",
      bono: "Escudo +1 (Solo devotos Legales)",
      beneficio: "1 vez al día, pronuncias una plegaria para envolver el escudo en llamas sagradas, ganando +2 a tu CA durante 3 asaltos.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Escudo del León (Shield of the Lion)",
      desc: "Escudo tallado con el rostro de un león rugiente de melena ondeante.",
      bono: "Escudo +1",
      beneficio: "1 vez al día, ordenas al león que cobre vida y ruja: todos los enemigos a distancia cercana deben superar de inmediato un chequeo de moral.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Escudo del Rey Brujo (Shield of the Witch-King)",
      desc: "Triángulo dentado de acero negro con placas acorazadas espinosas.",
      bono: "Escudo +2 (Solo para seres Caóticos)",
      beneficio: "Sufres la mitad de daño de criaturas no-muertas.",
      maldicion: "Si caes a 0 PG, el espíritu de Ix-Natheer bloquea la magia de curación que recibas. Si mueres, Ix-Natheer posee tu cadáver.",
      personalidad: "Caótica. Animado por el espíritu del Rey Brujo Ix-Natheer. Busca traicionar a su portador para adueñarse de su cuerpo y regresar a la no-vida."
    },
    {
      nombre: "Espada Corta del Ladrón (Shortsword of the Thief)",
      desc: "Hoja gris y corta repleta de muescas y cicatrices de combate.",
      bono: "Espada corta +1 (+2 si la empuña un mediano o ladrón)",
      beneficio: "1 vez al día, recuperas de inmediato una ficha de suerte recién gastada.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Maza Plateada de la Cólera (Silver Mace of Wrath)",
      desc: "Maza de plata deslustrada con siete aletas en forma de media luna.",
      bono: "Maza +1",
      beneficio: "Inflige el doble de daño contra criaturas con licantropía.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Esfera de Aniquilación (Sphere of Annihilation)",
      desc: "Un vacío esférico levitante de 1 metro de diámetro de pura oscuridad.",
      bono: "-",
      beneficio: "Destruye instantáneamente toda la materia que toca. Un ser inteligente puede moverla a distancia cercana superando una tirada de INT DC 18 (o tirada enfrentada de INT con ventaja para magos si varios compiten por su control). Si entra en el espacio de una criatura, el controlador hace una tirada de ataque con +7: si impacta, la criatura es desintegrada.",
      maldicion: "Peligro extremo para el portador si pierde el control.",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Catalejo de Visión Verdadera (Spyglass of True Sight)",
      desc: "Lente telescópica de latón grabada con runas arcanas.",
      bono: "-",
      beneficio: "Mirar a través de él permite ver criaturas y objetos invisibles.",
      maldicion: "Sientes la necesidad compulsiva de mirarlo todo a través del catalejo.",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Bastón de Curación (Staff of Healing)",
      desc: "Vara nudosa de roble con un grueso nudo en un extremo.",
      bono: "Bastón +1",
      beneficio: "1 vez al día, puedes tocar a una criatura para curarle 1d6 PG.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Bastón de Ord (Staff of Ord)",
      desc: "Bastón estilizado de mitral que resuena con poder arcano, rematado con un ojo que mira hacia arriba.",
      bono: "Bastón +3 (Solo magos)",
      beneficio: "Funciona como varita de puerta dimensional, bola de fuego, envío de mensaje y telequinesis (no se destruye con un 1 natural). Los conjuros hostiles contra ti son DC 18 para ser lanzados.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Bastón de la Cobra (Staff of the Cobra)",
      desc: "Cetro curvado rematado por una cabeza de cobra abierta con ojos de rubí.",
      bono: "Bastón +1",
      beneficio: "Las serpientes son amistosas hacia ti. 1 vez al día, puedes lanzarlo al suelo para convertirlo durante 5 asaltos en una serpiente gigante bajo tu control mental (revierte a bastón si cae a 0 PG).",
      maldicion: "Desventaja en ataques y conjuros hostiles contra serpientes.",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Espada de los Ancestros (Sword of the Ancients)",
      desc: "Hoja mellada y oxidada con empuñadura de cuero engrasado.",
      bono: "Espada larga +2",
      beneficio: "Es indestructible y puede cortar cualquier material. El dueño puede convocarla directamente a su mano si se encuentra en el mismo plano.",
      maldicion: "Ninguna",
      personalidad: "Legal (Ancestral)"
    },
    {
      nombre: "El Mecanismo de Kythera (The Kytherian Mechanism)",
      desc: "Imponente plataforma de latón repleta de engranajes con herrumbre verdiazul.",
      bono: "-",
      beneficio: "No funciona hasta que se le inserten sus siete Engranajes de Kythera perdidos. Una vez activo, permite anular/deshacer un suceso histórico a elección del operador. Tras ello, los siete engranajes se dispersan mágicamente por el mundo.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "La Maldición Infernal (The Malediction Infernal)",
      desc: "Tomo encuadernado en cuero negro con un rostro demoníaco sonriente en relieve.",
      bono: "-",
      beneficio: "Un ser Caótico que lo lea sube 1 nivel y aprende el idioma Diabólico. Un ser no caótico debe superar SAB DC 18 o pierde 1 nivel. Tras leerse, el libro se teletransporta lejos.",
      maldicion: "Letal para seres no caóticos.",
      personalidad: "Caótica (Diabólica)"
    },
    {
      nombre: "Espada Tres Veces Bendita (Thrice-Blessed Sword)",
      desc: "Espada de pomo dorado ungida con lágrimas benditas, incienso y oraciones.",
      bono: "Espada larga +3 (Solo clérigos Legales Templarios o sup.)",
      beneficio: "Inflige el doble de daño contra demonios, diablos y no-muertos.",
      maldicion: "Ninguna",
      personalidad: "Legal. Virtuosa e ingenua. Se niega a atacar a devotos de dioses legales y exige dar a cada enemigo la oportunidad de convertirse antes de matarlo."
    },
    {
      nombre: "Tomo Mordanticus (Tome Mordanticus)",
      desc: "Bestiario ilustrado a mano con los seres y personajes más insignes del multiverso.",
      bono: "-",
      beneficio: "Al leerlo, aprendes tres Nombres Verdaderos a tu elección. Tu propio Nombre Verdadero queda escrito en sus páginas.",
      maldicion: "Ninguna",
      personalidad: "Neutral. Pedante y quisquilloso. Intenta escapar constantemente y puede comunicarse telepáticamente a distancia cercana con cualquier ser."
    },
    {
      nombre: "Tomo de Gehemna (Tome of Gehemna)",
      desc: "Volumen rojizo con cierres metálicos y un ojo dorado en la portada.",
      bono: "-",
      beneficio: "Cada día aparece en su interior un pergamino de mago al azar, sustituyendo al del día anterior.",
      maldicion: "Ninguna",
      personalidad: "Neutral. Instructivo y técnico. Monologa sobre sutilezas mágicas y opina sobre la técnica de cualquier mago."
    },
    {
      nombre: "Tomo de Hadebe (Tome of Hadebe)",
      desc: "Libro chapado en latón con páginas de láminas de cobre grabado.",
      bono: "-",
      beneficio: "Contiene un pergamino de manos ardientes, uno de bola de fuego y uno de orbe prismático.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Tridente de los Mares (Trident of the Seas)",
      desc: "Arpón de mitral de tres puntas engastado con perlas.",
      bono: "Lanza +2",
      beneficio: "Puedes respirar bajo el agua y hablar con criaturas marinas. 1 vez al día, lanzas controlar el agua con un bonificador de +4.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Nombre Verdadero (True Name)",
      desc: "El nombre secreto e irrepetible asignado a un ser en El Pacto.",
      bono: "-",
      beneficio: "Tienes ventaja en todas las tiradas de ataque y pruebas de lanzamiento contra una criatura cuyo Nombre Verdadero pronuncies.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Varita de la No-Vida (Wand of Unlife)",
      desc: "Dedo huesudo y nudoso de un trol de pantano sumergido en fluido de embalsamar.",
      bono: "Varita de No-Vida",
      beneficio: "Contiene los conjuros animar a los muertos y crear no-muerto.",
      maldicion: "Cada vez que lanzas un conjuro con ella, pierdes 1d4 de Constitución temporalmente hasta descansar. Si tu Constitución llega a 0, mueres y te conviertes en un zombi.",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Varita de Protección (Wand of Warding)",
      desc: "Vara fina y pesada de hierro oscuro cincelada con runas en espiral.",
      bono: "Varita de Protección",
      beneficio: "Contiene los conjuros disipar magia y protección contra energía.",
      maldicion: "Cada vez que fallas una prueba de lanzamiento con ella, pierdes el acceso a un conjuro conocido al azar hasta completar un descanso.",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Cuerno de Guerra de los Ángeles (War Horn of the Angels)",
      desc: "Cuerno de buey opalescente rematado con una boquilla de oro.",
      bono: "Solo seres Legales",
      beneficio: "1 vez al día, lo haces sonar para lanzar reprender impíos (+4 a la tirada). Demonios y diablos tienen desventaja en su tirada opuesta de Carisma.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Martillo de Guerra de los Señores Enanos (Warhammer of the Dwarf Lords)",
      desc: "Martillo macizo con mango robusto y correa de lanzamiento que emite un tono barítono al girar.",
      bono: "Martillo de guerra +1 (+2 si lo empuña un enano)",
      beneficio: "Tiene la propiedad arrojadiza a distancia cercana y regresa solo a la mano tras lanzarse. Inflige el doble de daño contra gigantes.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Pozo de los Muchos Mundos (Well of Many Worlds)",
      desc: "Círculo de tela oscura que parece abrir un túnel en la superficie donde se coloca.",
      bono: "-",
      beneficio: "Se despliega en una superficie plana formando un pozo de 1,8 m de diámetro. Las criaturas pueden saltar dentro (1 vez al día) para ser transportadas a un plano de existencia aleatorio.",
      maldicion: "Peligro de transporte planar aleatorio.",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Malla Espectral (Wraith Chain)",
      desc: "Camisa de cota de malla de eslabones de mitral negro que arrastra una capa de sombras vivas.",
      bono: "Cota de malla de mitral +1",
      beneficio: "1 vez al día, puedes hacer que un ataque que te impacte falle automáticamente.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    }
  ],

  // ==========================================
  // MÉTODOS DE BÚSQUEDA Y GENERACIÓN
  // ==========================================
  getRandomSingular() {
    return this.pick(this.items);
  },

  findSingularByName(namePart) {
    if (!namePart) return this.getRandomSingular();
    const lower = namePart.toLowerCase();
    const found = this.items.find(i => i.nombre.toLowerCase().includes(lower));
    return found || this.getRandomSingular();
  }
};