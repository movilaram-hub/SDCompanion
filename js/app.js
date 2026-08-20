document.addEventListener("DOMContentLoaded", function() {
  var DATA = window.SD_DATA;
  var COMPONENTS = window.SD_COMPONENTS;

  // 1. PESTAÑAS SUPERIORES
  var tabButtons = document.querySelectorAll(".tab-btn");
  var tabPanes = document.querySelectorAll(".tab-pane");

  tabButtons.forEach(function(btn) {
    btn.addEventListener("click", function() {
      tabButtons.forEach(function(b) { b.classList.remove("active"); });
      tabPanes.forEach(function(p) { p.classList.remove("active"); });
      btn.classList.add("active");
      var targetPane = document.getElementById(btn.dataset.tab);
      if (targetPane) {
        targetPane.classList.add("active");
      }
    });
  });

  // 2. CONSTRUCTOR Y GENERADOR DE TARJETAS
  function createCard(category, tag, title, fieldsDict, targetStageId) {
    var stage = document.getElementById(targetStageId);
    if (!stage) return;

    var card = document.createElement("div");
    card.className = "tactical-card";
    card.dataset.category = category;

    var fieldsHtml = "";
    for (var k in fieldsDict) {
      if (Object.prototype.hasOwnProperty.call(fieldsDict, k)) {
        fieldsHtml += '<div class="card-field">' +
          '<label>' + k + '</label>' +
          '<div class="field-value" contenteditable="true">' + fieldsDict[k] + '</div>' +
        '</div>';
      }
    }

    card.innerHTML = '<div class="card-header">' +
      '<span class="card-type">' + tag + '</span>' +
      '<button class="btn-card-del" title="Eliminar">×</button>' +
    '</div>' +
    '<div class="card-body">' +
      '<div class="card-title" contenteditable="true">' + title + '</div>' +
      fieldsHtml +
    '</div>' +
    '<div class="card-footer">' +
      '<button class="btn btn-pin">📌 Indexar a Pantalla de GM</button>' +
    '</div>';

    card.querySelector(".btn-card-del").addEventListener("click", function() { card.remove(); });
    card.querySelector(".btn-pin").addEventListener("click", function() { pinToGmScreen(card, category); });

    stage.prepend(card);
  }

  function pinToGmScreen(sourceCard, category) {
    var targetCol = document.getElementById("gm-col-" + category);
    if (!targetCol) return;

    var clone = sourceCard.cloneNode(true);
    var footer = clone.querySelector(".card-footer");
    if (footer) footer.remove();

    var delBtn = clone.querySelector(".btn-card-del");
    if (delBtn) delBtn.addEventListener("click", function() { clone.remove(); });

    if (clone.classList.contains("monster-card")) {
      var hpInput = clone.querySelector(".hp-input");
      var btnMinus = clone.querySelector(".btn-hp-minus");
      var btnPlus = clone.querySelector(".btn-hp-plus");

      if (btnMinus && hpInput) {
        btnMinus.addEventListener("click", function() {
          var val = parseInt(hpInput.value, 10) || 0;
          if (val > 0) hpInput.value = val - 1;
          clone.style.opacity = hpInput.value <= 0 ? "0.45" : "1";
          clone.style.filter = hpInput.value <= 0 ? "grayscale(1)" : "none";
        });
      }
      if (btnPlus && hpInput) {
        btnPlus.addEventListener("click", function() {
          var val = parseInt(hpInput.value, 10) || 0;
          hpInput.value = val + 1;
          clone.style.opacity = hpInput.value <= 0 ? "0.45" : "1";
          clone.style.filter = hpInput.value <= 0 ? "grayscale(1)" : "none";
        });
      }
    }

    targetCol.prepend(clone);
  }

  // 3. CARTOGRAFÍA, HITOS Y AVENTURAS
  var btnRegion = document.getElementById("genRegionBtn");
  if (btnRegion) {
    btnRegion.onclick = function() {
      if (!window.SD_DATA || !window.SD_DATA.CARTOGRAPHY) return;
      var reg = window.SD_DATA.CARTOGRAPHY.generateRegion();
      createCard("mundo", "REGIÓN EXPLORADA", reg.name, {
        "Fórmula Sintáctica": reg.template,
        "Terreno Base": reg.terreno,
        "Rasgo / Clima": reg.adjetivo,
        "Elemento Clave": reg.nombreClave,
        "Tiradas": reg.rolls
      }, "cartografia-preview");
    };
  }

  var btnHito = document.getElementById("genHitoBtn");
  if (btnHito) {
    btnHito.onclick = function() {
      if (!window.SD_DATA || !window.SD_DATA.CARTOGRAPHY) return;
      var lug = window.SD_DATA.CARTOGRAPHY.generateLugar();
      createCard("mundo", "HITO / LUGAR DE INTERÉS", lug.name, {
        "Fórmula Sintáctica": lug.template,
        "Estructura / Sitio": lug.lugar,
        "Peculiaridad": lug.adjetivo,
        "Elemento Clave": lug.nombreClave,
        "Tiradas": lug.rolls
      }, "cartografia-preview");
    };
  }

  var btnGancho = document.getElementById("genAventuraGanchoBtn");
  if (btnGancho) {
    btnGancho.onclick = function() {
      if (!window.SD_DATA || !window.SD_DATA.CARTOGRAPHY) return;
      var av = window.SD_DATA.CARTOGRAPHY.generateAventuraGancho();
      createCard("eventos", "GANCHO DE AVENTURA", av.mision, {
        "Emplazamiento": av.lugarAventura,
        "Objetivo Directo": av.objetivo,
        "Contexto / Giro": av.contexto,
        "Tiradas": av.rollsMision + " | " + av.rollsLugar
      }, "cartografia-preview");
    };
  }

  // 4. ASENTAMIENTOS Y SOCIEDAD
  var btnSettlement = document.getElementById("genSettlementBtn");
  if (btnSettlement) {
    btnSettlement.onclick = function() {
      if (!window.SD_DATA || !window.SD_DATA.SETTLEMENTS) return;
      var sizeSelect = document.getElementById("settlementSize");
      var size = sizeSelect ? sizeSelect.value : "pueblo";
      var st = window.SD_DATA.SETTLEMENTS.generateSettlement(size);

      var distritosHtml = st.distritos.map(function(d) {
        var isGov = d.num === st.sedeGovIdx ? " 👑 [SEDE DE GOBIERNO]" : "";
        return "<strong>" + d.num + ". " + d.nombre + isGov + " (Dado " + d.die + "):</strong><br>• " + d.puntos.join("<br>• ");
      }).join("<br><br>");

      createCard("mundo", "ASENTAMIENTO // " + st.tipo, st.nombre, {
        "Alineamiento": st.alineamiento,
        "Distritos & Puntos de Interés": distritosHtml,
        "Tiradas": st.rolls
      }, "asentamientos-preview");
    };
  }

  var btnTavern = document.getElementById("genTavernBtn");
  if (btnTavern) {
    btnTavern.onclick = function() {
      if (!window.SD_DATA || !window.SD_DATA.SETTLEMENTS) return;
      var tierSelect = document.getElementById("tavernTierSelect");
      var tier = tierSelect ? tierSelect.value : "Estandar";
      var tab = window.SD_DATA.SETTLEMENTS.generateTavern(tier);

      createCard("mundo", "TABERNA [" + tab.categoria + "]", tab.nombre, {
        "Famosa por": tab.fama,
        "Menú de Comidas": "• " + tab.menu.join("<br>• "),
        "Carta de Bebidas & Efectos": "• " + tab.bebidas.join("<br>• "),
        "Tiradas": tab.roll
      }, "asentamientos-preview");
    };
  }

  var btnShop = document.getElementById("genShopBtn");
  if (btnShop) {
    btnShop.onclick = function() {
      if (!window.SD_DATA || !window.SD_DATA.SETTLEMENTS) return;
      var tierSelect = document.getElementById("shopTierSelect");
      var tier = tierSelect ? tierSelect.value : "estandar";
      var sh = window.SD_DATA.SETTLEMENTS.generateShop(tier);

      createCard("mundo", "COMERCIO // " + sh.tipo, sh.nombre, {
        "Particularidad": sh.fama,
        "Cliente Presente": sh.cliente,
        "Categoría": sh.categoria,
        "Tiradas": sh.rolls
      }, "asentamientos-preview");
    };
  }

  // 5. MAZMORRAS, SALAS Y TRAMPAS
  var btnDungeonBase = document.getElementById("genDungeonBaseBtn");
  if (btnDungeonBase) {
    btnDungeonBase.onclick = function() {
      if (!window.SD_DATA || !window.SD_DATA.DUNGEONS) return;
      var dg = window.SD_DATA.DUNGEONS.generateDungeonBase();
      createCard("mazmorra", "CIMIENTOS DE MAZMORRA", dg.nombre, {
        "Constructor Original": dg.constructor,
        "Función Primigenia": dg.funcion,
        "Causa de la Ruina": dg.ruina,
        "Escala & Salas": dg.escala,
        "Temas Narrativos Activos": dg.temas,
        "Tiradas": dg.rolls
      }, "mazmorras-preview");
    };
  }

  var btnDungeonRoom = document.getElementById("genDungeonRoomBtn");
  if (btnDungeonRoom) {
    btnDungeonRoom.onclick = function() {
      if (!window.SD_DATA || !window.SD_DATA.DUNGEONS) return;
      var rm = window.SD_DATA.DUNGEONS.generateRoom();
      createCard("mazmorra", rm.titulo, rm.clasificacion, {
        "Tipo de Contenido": rm.contenidoResumen,
        "Detalle de Sala": rm.detalle,
        "Influencia del Tema": rm.temaActivo,
        "Tirada": rm.roll
      }, "mazmorras-preview");
    };
  }

  var btnTrap = document.getElementById("genTrapBtn");
  if (btnTrap) {
    btnTrap.onclick = function() {
      if (!window.SD_DATA || !window.SD_DATA.DUNGEONS) return;
      var tr = window.SD_DATA.DUNGEONS.generateTrap();
      createCard("mazmorra", "TRAMPA MODULAR", tr.nombre, {
        "Mecanismo / Dispositivo": tr.trampa,
        "Disparador / Activador": tr.activador,
        "Daño o Efecto": tr.efecto,
        "Tiradas": tr.rolls
      }, "mazmorras-preview");
    };
  }

  // 6. PNJS, SEGUIDORES Y RIVALES
  var btnNpc = document.getElementById("genNpcBtn");
  if (btnNpc) {
    btnNpc.onclick = function() {
      if (!window.SD_DATA || !window.SD_DATA.NPCS) return;
      var npc = window.SD_DATA.NPCS.generateNpc();
      createCard("mundo", "PERSONAJE NO JUGADOR", npc.nombre, {
        "Perfil Básico": npc.perfil,
        "Ocupación": npc.ocupacion,
        "Apariencia Física": npc.apariencia,
        "Manía / Hábito": npc.habito,
        "Secreto Oculto": npc.secreto,
        "Tiradas": npc.rolls
      }, "npcs-preview");
    };
  }

  var btnFollower = document.getElementById("genFollowerBtn");
  if (btnFollower) {
    btnFollower.onclick = function() {
      if (!window.SD_DATA || !window.SD_DATA.NPCS) return;
      var fol = window.SD_DATA.NPCS.generateFollower();
      createCard("mundo", "SEGUIDOR / CONTRATADO", fol.nombre, {
        "Calidad & Bonificador": fol.calidad,
        "Especialización": fol.etiquetas,
        "Trasfondo": fol.trasfondo,
        "Instinto (Fricción)": fol.instinto,
        "Coste de Lealtad": fol.coste,
        "Combate & Vida": fol.combate,
        "Tiradas": fol.rolls
      }, "npcs-preview");
    };
  }

  var btnRivals = document.getElementById("genRivalsBtn");
  if (btnRivals) {
    btnRivals.onclick = function() {
      if (!window.SD_DATA || !window.SD_DATA.NPCS) return;
      var riv = window.SD_DATA.NPCS.generateRivals();
      createCard("eventos", "BANDA DE RIVALES", riv.nombre, {
        "Famosos por": riv.fama,
        "Rasgos del Grupo": riv.rasgos,
        "Secreto del Grupo": riv.secreto,
        "Táctica Distintiva": riv.tactica,
        "Miembros del Grupo": riv.miembros,
        "Tiradas": riv.rolls
      }, "npcs-preview");
    };
  }

  // 7. ENCUENTROS Y VIAJE
  var btnRumor = document.getElementById("genRumorBtn");
  if (btnRumor) {
    btnRumor.addEventListener("click", function() {
      if (!window.SD_DATA || !window.SD_DATA.RUMORS) return;
      var res = window.SD_DATA.RUMORS.generateRumor();
      createCard("eventos", "RUMOR & SECRETO", "Murmullo Callejero", {
        "Tirada d100": "Resultado: [ " + res.d100 + " ]",
        "Rumor Escuchado": res.rumor,
        "Fuente / Portador": res.fuente,
        "Veracidad (Oculto GM)": "<strong>" + res.veracidad + "</strong> — <span style=\"font-size:0.75rem; color:var(--text-muted);\">" + res.detalleVeracidad + "</span>",
        "Tiradas": res.rolls
      }, "encuentros-preview");
    });
  }

  var btnEncounter = document.getElementById("genEncounterBtn");
  if (btnEncounter) {
    btnEncounter.onclick = function() {
      if (!window.SD_DATA || !window.SD_DATA.ENCOUNTERS) return;
      var biomaSelect = document.getElementById("biomeSelect");
      var chaModSelect = document.getElementById("chaModInput");
      var bioma = biomaSelect ? biomaSelect.value : "dungeon";
      var initialCha = chaModSelect ? (parseInt(chaModSelect.value, 10) || 0) : 0;
      var enc = window.SD_DATA.ENCOUNTERS.generateEncounter(bioma, initialCha);

      var stage = document.getElementById("encuentros-preview");
      if (!stage) return;

      var card = document.createElement("div");
      card.className = "tactical-card";
      card.dataset.category = "eventos";
      var sign = initialCha >= 0 ? "+" + initialCha : "" + initialCha;

      card.innerHTML = '<div class="card-header">' +
        '<span class="card-type">' + enc.titulo + '</span>' +
        '<button class="btn-card-del">×</button>' +
      '</div>' +
      '<div class="card-body">' +
        '<div class="card-title" contenteditable="true">' + enc.criatura + ' (' + enc.nivel + ')</div>' +
        '<div class="card-field"><label>Distancia Inicial (1d6)</label><div class="field-value">' + enc.distancia + '</div></div>' +
        '<div class="card-field"><label>Actividad de la Criatura (2d6)</label><div class="field-value">' + enc.actividad + '</div></div>' +
        '<div class="card-field" style="background: rgba(0,0,0,0.25); padding: 6px; border-radius: 3px; border: 1px solid var(--border-color);">' +
          '<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">' +
            '<label style="color: var(--accent-gold);">Actitud / Reacción Inicial</label>' +
            '<div style="display: flex; align-items: center; gap: 4px; font-size: 0.7rem;">' +
              '<span>Mod. CHA:</span>' +
              '<select class="card-cha-mod" style="padding: 1px 4px; font-size: 0.7rem;">' +
                '<option value="-4"' + (initialCha === -4 ? ' selected' : '') + '>-4</option>' +
                '<option value="-3"' + (initialCha === -3 ? ' selected' : '') + '>-3</option>' +
                '<option value="-2"' + (initialCha === -2 ? ' selected' : '') + '>-2</option>' +
                '<option value="-1"' + (initialCha === -1 ? ' selected' : '') + '>-1</option>' +
                '<option value="0"' + (initialCha === 0 ? ' selected' : '') + '>+0</option>' +
                '<option value="1"' + (initialCha === 1 ? ' selected' : '') + '>+1</option>' +
                '<option value="2"' + (initialCha === 2 ? ' selected' : '') + '>+2</option>' +
                '<option value="3"' + (initialCha === 3 ? ' selected' : '') + '>+3</option>' +
                '<option value="4"' + (initialCha === 4 ? ' selected' : '') + '>+4</option>' +
              '</select>' +
            '</div>' +
          '</div>' +
          '<div class="field-value card-actitud-text" style="font-weight: bold; color: #fff;">' + enc.actitud + '</div>' +
          '<div class="field-value card-tirada-text" style="font-size: 0.65rem; color: var(--text-muted); margin-top: 2px;">Tirada base 2d6: [' + enc.raw2d6 + '] ' + sign + ' CHA = <strong>[' + enc.totalReac + ']</strong></div>' +
        '</div>' +
        '<div class="card-field"><label>Probabilidad de Tesoro (50%)</label><div class="field-value">' + enc.tesoro + '</div></div>' +
      '</div>' +
      '<div class="card-footer"><button class="btn btn-pin">📌 Indexar a Pantalla de GM</button></div>';

      var chaSelect = card.querySelector(".card-cha-mod");
      if (chaSelect) {
        chaSelect.addEventListener("change", function(e) {
          var newCha = parseInt(e.target.value, 10) || 0;
          var newTotal = enc.raw2d6 + newCha;
          var newReac = window.SD_DATA.ENCOUNTERS.getReaccion(newTotal);
          var newSign = newCha >= 0 ? "+" + newCha : "" + newCha;
          card.querySelector(".card-actitud-text").innerHTML = newReac.actitud + " — " + newReac.desc;
          card.querySelector(".card-tirada-text").innerHTML = "Tirada base 2d6: [" + enc.raw2d6 + "] " + newSign + " CHA = <strong>[" + newTotal + "]</strong>";
        });
      }

      var delBtn = card.querySelector(".btn-card-del");
      if (delBtn) delBtn.onclick = function() { card.remove(); };

      var pinBtn = card.querySelector(".btn-pin");
      if (pinBtn) pinBtn.onclick = function() { pinToGmScreen(card, "eventos"); };

      stage.prepend(card);
    };
  }

  var btnSomething = document.getElementById("btnRollSomething");
  if (btnSomething) {
    btnSomething.addEventListener("click", function() {
      var table = window.SD_DATA ? window.SD_DATA.SOMETHING_HAPPENS : null;
      if (!table || !table.entries) return;
      var d100 = Math.floor(Math.random() * 100) + 1;
      var entry = table.entries.find(function(e) { return d100 >= e.min && d100 <= e.max; });
      createCard("eventos", "GIRO INMEDIATO", "¡ALGO SUCEDE!", {
        "Tirada d100": "Resultado: [ " + d100 + " ]",
        "Detalle del Suceso": entry ? entry.desc : "Sin resultado"
      }, "encuentros-preview");
    });
  }

  // 8. PESTAÑA TESOROS & ARTEFACTOS
  var btnTierTreasure = document.getElementById("genTierTreasureBtn");
  if (btnTierTreasure) {
    btnTierTreasure.addEventListener("click", function() {
      var tierSelect = document.getElementById("treasureTierSelect");
      var tier = tierSelect ? tierSelect.value : "0-3";
      var engine = window.SD_DATA ? window.SD_DATA.TREASURE_ENGINE : null;
      if (!engine) return;
      var res = engine.generate(tier);
      var fields = { "Tirada d100": "Resultado: [ " + res.roll + " ]", "Detalle": res.item };
      for (var key in res.extra) {
        if (Object.prototype.hasOwnProperty.call(res.extra, key)) {
          fields[key] = res.extra[key];
        }
      }
      createCard("eventos", res.tierTitle, res.item.split("(")[0], fields, "tesoros-preview");
    });
  }

  var btnFullMagic = document.getElementById("genFullMagicItemBtn");
  if (btnFullMagic) {
    btnFullMagic.addEventListener("click", function() {
      var engine = window.SD_DATA ? window.SD_DATA.TREASURE_ENGINE : null;
      if (!engine) return;
      var item = engine.generateRandomMagicItem();
      if (!item) return;
      var fields = {
        "Tipo": item.tipo,
        "Rasgo": item.rasgo,
        "Beneficio(s)": item.beneficios ? item.beneficios.join(" | ") : "-",
        "Maldición(es)": item.maldiciones ? item.maldiciones.join(" | ") : "Ninguna"
      };
      if (item.bonificador && item.bonificador !== "Especial") fields.Bonificador = item.bonificador;
      if (item.nivel) fields.Nivel = item.nivel;
      if (item.personalidad) fields.Personalidad = item.personalidad;
      createCard("eventos", "OBJETO MÁGICO ALEATORIO", item.nombre, fields, "tesoros-preview");
    });
  }

  var btnSingular = document.getElementById("genSingularMagicItemBtn");
  if (btnSingular) {
    btnSingular.addEventListener("click", function() {
      var engine = window.SD_DATA ? window.SD_DATA.SINGULAR_ITEMS : null;
      if (!engine) return;
      var s = engine.getRandomSingular();
      var fields = { "Descripción": s.desc, "Beneficio": s.beneficio };
      if (s.bono && s.bono !== "-") fields.Bonificador = s.bono;
      if (s.maldicion && s.maldicion !== "Ninguna") fields.Maldición = s.maldicion;
      if (s.personalidad && s.personalidad !== "Sin consciencia") fields.Personalidad = s.personalidad;
      createCard("eventos", "ARTEFACTO SINGULAR", s.nombre, fields, "tesoros-preview");
    });
  }

  var btnWeapon = document.getElementById("genWeaponBtn");
  if (btnWeapon) {
    btnWeapon.addEventListener("click", function() {
      var engine = window.SD_DATA ? window.SD_DATA.MAGIC_WEAPONS : null;
      if (!engine) return;
      var item = engine.generateWeapon();
      createCard("eventos", "ARMA MÁGICA FORJADA", item.nombre, {
        "Tipo": item.tipo,
        "Bonificador": item.bonificador,
        "Rasgo Visual": item.rasgo,
        "Beneficio": item.beneficios.join(" | "),
        "Maldición": item.maldiciones.join(" | "),
        "Tiradas": item.rolls
      }, "tesoros-preview");
    });
  }

  var btnArmor = document.getElementById("genArmorBtn");
  if (btnArmor) {
    btnArmor.addEventListener("click", function() {
      var engine = window.SD_DATA ? window.SD_DATA.MAGIC_ARMOR : null;
      if (!engine) return;
      var item = engine.generateArmor();
      createCard("eventos", "ARMADURA MÁGICA FORJADA", item.nombre, {
        "Tipo": item.tipo,
        "Bonificador": item.bonificador,
        "Rasgo Visual": item.rasgo,
        "Beneficio": item.beneficios.join(" | "),
        "Maldición": item.maldiciones.join(" | "),
        "Tiradas": item.rolls
      }, "tesoros-preview");
    });
  }

  var btnUtil = document.getElementById("genUtilityBtn");
  if (btnUtil) {
    btnUtil.addEventListener("click", function() {
      var engine = window.SD_DATA ? window.SD_DATA.MAGIC_UTILITY : null;
      if (!engine) return;
      var item = engine.generateUtilityItem();
      createCard("eventos", "OBJETO DE UTILIDAD MÁGICO", item.nombre, {
        "Tipo": item.tipo,
        "Rasgo Visual": item.rasgo,
        "Beneficio": item.beneficios.join(" | "),
        "Maldición": item.maldiciones.join(" | "),
        "Tiradas": item.rolls
      }, "tesoros-preview");
    });
  }

  var btnPotion = document.getElementById("genPotionBtn");
  if (btnPotion) {
    btnPotion.addEventListener("click", function() {
      var engine = window.SD_DATA ? window.SD_DATA.MAGIC_POTIONS : null;
      if (!engine) return;
      var item = engine.generatePotion();
      createCard("eventos", "POCIÓN MÁGICA", item.nombre, {
        "Aspecto & Olor": item.rasgo,
        "Beneficio / Efecto": item.beneficios.join(" | "),
        "Maldición / Defecto": item.maldiciones.join(" | "),
        "Tiradas": item.rolls
      }, "tesoros-preview");
    });
  }

  var btnMix = document.getElementById("genMixPotionsBtn");
  if (btnMix) {
    btnMix.addEventListener("click", function() {
      var engine = window.SD_DATA ? window.SD_DATA.MAGIC_POTIONS : null;
      if (!engine) return;
      var res = engine.mixPotions();
      createCard("eventos", "REACCIÓN ALQUÍMICA", res.titulo, {
        "Resultado": res.resultado,
        "Tiradas": res.rolls
      }, "tesoros-preview");
    });
  }

  var btnScroll = document.getElementById("genScrollBtn");
  if (btnScroll) {
    btnScroll.addEventListener("click", function() {
      var engine = window.SD_DATA ? window.SD_DATA.MAGIC_SPELLS : null;
      if (!engine) return;
      var item = engine.generateScroll();
      createCard("eventos", "PERGAMINO DE CONJURO", item.nombre, {
        "Nivel": item.nivel,
        "Conjuro": item.conjuro,
        "Soporte": item.rasgo,
        "Efecto": item.beneficios[0],
        "Tiradas": item.rolls
      }, "tesoros-preview");
    });
  }

  var btnWand = document.getElementById("genWandBtn");
  if (btnWand) {
    btnWand.addEventListener("click", function() {
      var engine = window.SD_DATA ? window.SD_DATA.MAGIC_SPELLS : null;
      if (!engine) return;
      var item = engine.generateWand();
      createCard("eventos", "VARITA MÁGICA", item.nombre, {
        "Nivel": item.nivel,
        "Conjuro": item.conjuro,
        "Rasgo": item.rasgo,
        "Uso": item.beneficios[0],
        "Maldición": item.maldiciones.join(" | "),
        "Tiradas": item.rolls
      }, "tesoros-preview");
    });
  }

  var btnGem = document.getElementById("genGemBtn");
  if (btnGem) {
    btnGem.addEventListener("click", function() {
      var engine = window.SD_DATA ? window.SD_DATA.MUNDANE_TABLES : null;
      if (!engine) return;
      var gem = engine.generateGem();
      createCard("eventos", "GEMA PRECIOSA", gem.nombre, {
        "Valor": gem.valor,
        "Es Gigante": gem.esGigante,
        "Rasgo Único": gem.rasgoUnico,
        "Tiradas": gem.rolls
      }, "tesoros-preview");
    });
  }

  var btnLuxury = document.getElementById("genLuxuryBtn");
  if (btnLuxury) {
    btnLuxury.addEventListener("click", function() {
      var engine = window.SD_DATA ? window.SD_DATA.MUNDANE_TABLES : null;
      if (!engine) return;
      var luxury = engine.generateLuxuryItem();
      createCard("eventos", "OBJETO DE LUJO / ARTE", luxury.nombre, {
        "Característica": luxury.caracteristica,
        "Objeto Base": luxury.objeto,
        "Rasgo Único": luxury.rasgoUnico,
        "Tiradas": luxury.rolls
      }, "tesoros-preview");
    });
  }

  var btnBoon = document.getElementById("genBoonBtn");
  if (btnBoon) {
    btnBoon.addEventListener("click", function() {
      var engine = window.SD_DATA ? window.SD_DATA.MUNDANE_TABLES : null;
      if (!engine) return;
      var boon = engine.generateBoon();
      var fields = {};
      if (boon.nombre) fields.Nombre = boon.nombre;
      if (boon.detalle) fields.Detalle = boon.detalle;
      if (boon.efecto) fields.Efecto = boon.efecto;
      if (boon.rolls) fields.Tiradas = boon.rolls;
      createCard("eventos", "DON // " + boon.tipo.toUpperCase(), boon.nombre || boon.tipo, fields, "tesoros-preview");
    });
  }

  // 9. ORÁCULO & SOLODARK
  function getOracle() {
    if (window.SD_DATA && window.SD_DATA.ORACLE) return window.SD_DATA.ORACLE;
    if (window.SD_ORACLE) return window.SD_ORACLE;

    // Respaldo interno directo
    return {
      d: function(s) { return Math.floor(Math.random() * s) + 1; },
      dungeonNamesCol1_ES: ["Ciudadela", "Pecio / Naufragio", "Ruinas", "Capilla", "Biblioteca", "Tumba / Fosa", "Fortaleza", "Laboratorio", "Abadía", "Prisión", "Sepulcro", "Fragua", "Barranco", "Monasterio", "Aguja / Espira", "Guarida / Escondite", "Castillo", "Túneles", "Salas", "Torre", "Granja / Asentamiento", "Ciudad Subterránea", "Nido / Nidal", "Bóvedas / Cámaras", "Observatorio", "Manicomio / Asilo", "Sepulcro", "Túmulo", "Palacio", "Torreón", "Cavernas", "Santuario / Sagrario", "Jardín", "Templo", "Laberinto", "Reducto / Bastión", "Pirámide", "Sanctasanctórum", "Minas", "Cubil", "Madriguera", "Fosas", "Gruta", "Profundidades", "Fortín / Baluarte", "Mansión", "Galerías", "Monolito", "Criptas", "Mazmorra"],
      dungeonNamesCol2_ES: ["Encantado/a", "Olvidado/a", "Deshonrado/a", "Bárbaro/a", "Monstruoso/a", "Caído/a", "Maldito/a", "Encadenado/a", "Venenoso/a", "Ciclópeo/a", "del Cielo", "Helado/a", "Ardiente", "Ladrón/ona", "Cristalino/a", "de Otro Mundo", "Asolado/a", "Celestial", "Dracónico/a", "Etéreo/a", "Profanado/a", "Reptiliano/a", "Metálico/a", "Insectoide", "Elemental", "Arácnido/a", "Demoníaco/a", "Fúngico/a", "Dorado/a", "Feérico/a", "del Relámpago", "Piscino/a", "Corrupto/a", "Virtuoso/a", "del Fango", "de la Noche", "Oculto/a", "Prohibido/a", "Reluciente", "de Cristal", "Radiante", "Demente", "Salvaje", "Perdido/a", "Majestuoso/a", "Antediluviano/a", "Profetizado/a", "Velado/a", "Cósmico/a", "Legendario/a"],
      dungeonNamesCol3_ES: ["Ídolo", "Traidor", "Rey", "Elefante", "Dios", "Culto", "Caballero", "Héroe", "Piratas", "Espíritu", "Hermanas", "Espada", "Bestia", "Ancestrales", "Perdidos", "Parias", "Marinero", "No-muerto", "Mago", "Tesoro", "Momia", "Usurpador", "Santo/a", "Mecanismo", "Hermanos", "Señor", "Descendiente", "Abominación", "Ermitaño", "Señor de la Guerra", "Cazador", "Gremio", "Vampiro", "Filósofo", "Guerreros", "Reina", "Gema", "Secreto", "Emperador", "Arma", "Hechicero", "Corona", "Ancestro", "Runas", "Árbol", "Asesino", "Reliquia", "Bendición", "Ritual", "Soberano Supremo"],
      dungeonNamesCol1: ["Citadel", "Wreck", "Ruins", "Chapel", "Library", "Grave", "Fortress", "Laboratory", "Abbey", "Prison", "Tomb", "Forge", "Ravine", "Monastery", "Spire", "Hideout", "Castle", "Tunnels", "Halls", "Tower", "Steading", "Undercity", "Aerie", "Vaults", "Observatory", "Asylum", "Sepulcher", "Barrow", "Palace", "Keep", "Caverns", "Fane", "Garden", "Temple", "Maze", "Redoubt", "Pyramid", "Sanctum", "Mines", "Lair", "Den", "Pits", "Grotto", "Depths", "Stronghold", "Manse", "Warrens", "Monolith", "Crypts", "Dungeon"],
      dungeonNamesCol2: ["Haunted", "Forgotten", "Disgraced", "Barbaric", "Monstrous", "Fallen", "Cursed", "Bound", "Poisonous", "Cyclopean", "Sky", "Frozen", "Burning", "Thieving", "Crystalline", "Otherworldly", "Blighted", "Celestial", "Draconic", "Ethereal", "Desecrated", "Reptilian", "Metallic", "Insectoid", "Elemental", "Arachnid", "Demonic", "Fungal", "Golden", "Fey", "Lightning", "Piscine", "Corrupt", "Righteous", "Mud", "Night", "Hidden", "Forbidden", "Shimmering", "Glass", "Radiant", "Mad", "Wild", "Lost", "Majestic", "Antediluvian", "Prophesied", "Shrouded", "Cosmic", "Legendary"],
      dungeonNamesCol3: ["Idol", "Betrayer", "King", "Elephant", "God", "Cult", "Knight", "Hero", "Pirates", "Spirit", "Sisters", "Sword", "Beast", "Ancients", "Lost", "Outcasts", "Sailor", "Undead", "Mage", "Hoard", "Mummy", "Usurper", "Saint", "Mechanism", "Brothers", "Lord", "Descendant", "Abomination", "Hermit", "Warlord", "Hunter", "Guild", "Vampire", "Philosopher", "Warriors", "Queen", "Gem", "Secret", "Emperor", "Weapon", "Sorcerer", "Crown", "Ancestor", "Runes", "Tree", "Assassin", "Relic", "Blessing", "Ritual", "Overlord"],
      promptsVerbs: ["Detener (Stop)", "Contar / Narrar (Tell)", "Confiar (Trust)", "Prevenir (Prevent)", "Entregar (Deliver)", "Desmantelar (Dismantle)", "Crear (Create)", "Resistir (Resist)", "Imbuir (Imbue)", "Trabar Amistad (Befriend)", "Infiltrarse (Sneak)", "Discrepar (Disagree)", "Iluminar (Illuminate)", "Reunir / Montar (Assemble)", "Liberar (Free)", "Combinar (Combine)", "Interrumpir (Disrupt)", "Exigir (Demand)", "Obstruir (Obstruct)", "Empujar (Push)", "Llegar (Arrive)", "Ralentizar (Slow)", "Superar (Overcome)", "Bloquear (Block)", "Consumir (Consume)", "Perseguir (Pursue)", "Recompensar (Reward)", "Expandir (Expand)", "Desperdiciar (Waste)", "Capturar (Capture)", "Debilitar (Weaken)", "Revelar (Reveal)", "Investigar (Investigate)", "Prohibir (Forbid)", "Comenzar (Start)", "Sorprender (Surprise)", "Soportar (Endure)", "Tirar / Arrastrar (Pull)", "Desatar (Unleash)", "Evitar (Avoid)", "Avanzar (Advance)", "Acordar (Agree)", "Entregar (Deliver)", "Vincular (Link)", "Entorpecer (Hinder)", "Retener (Withhold)", "Perder (Lose)", "Evolucionar (Evolve)", "Fortificar (Fortify)", "Castigar (Punish)", "Prender / Encender (Ignite)", "Despertar (Awaken)", "Desafiar (Defy)", "Ocultar (Conceal)", "Invitar (Invite)", "Romper (Break)", "Permitir (Allow)", "Abrir (Open)", "Repeler (Repel)", "Activar (Activate)", "Reunir (Gather)", "Dar (Give)", "Revertir (Reverse)", "Advertir (Warn)", "Confrontar (Confront)", "Traicionar (Betray)", "Asegurar (Secure)", "Oscurecer (Darken)", "Huir (Flee)", "Ganar (Win)", "Dispersar (Scatter)", "Contener (Contain)", "Ayudar (Assist)", "Tomar (Take)", "Cuestionar (Question)", "Soltar (Drop)", "Aceptar (Accept)", "Sacrificar (Sacrifice)", "Drenar (Drain)", "Insinuar (Hint)", "Errar / Pifiar (Fumble)", "Caer (Fall)", "Ascender (Ascend)", "Proteger (Protect)", "Escapar (Escape)", "Derrotar (Defeat)", "Reparar (Mend)", "Adquirir (Acquire)", "Guiar (Guide)", "Engañar (Mislead)", "Desterrar (Banish)", "Mantener (Uphold)", "Construir (Build)", "Cambiar (Change)", "Revocar (Revoke)", "Buscar (Seek)", "Destruir (Destroy)", "Descubrir (Uncover)", "Descansar (Rest)", "Liberar (Release)"],
      promptsNouns: ["Fallo / Culpa (Fault)", "Vida (Life)", "Batalla (Battle)", "Mentira (Lie)", "Vicio (Vice)", "Memoria (Memory)", "Carga (Burden)", "Traición (Treachery)", "Juicio / Prueba (Trial)", "Riesgo (Risk)", "Prosperidad (Prosperity)", "Tiempo (Time)", "Conflicto (Conflict)", "Luz (Light)", "Lo Antinatural (Unnatural)", "Información (Information)", "Esperanza (Hope)", "Viaje (Journey)", "Lo Mundano (Mundane)", "Peligro (Hazard)", "Familia (Family)", "Obstáculo (Obstacle)", "Duda (Doubt)", "Libertad (Freedom)", "Debilidad (Weakness)", "Lo Desconocido (Unknown)", "Gloria (Glory)", "Amigo (Friend)", "Descubrimiento (Discovery)", "Pista / Ventaja (Lead)", "Tormenta (Storm)", "Enemigo (Enemy)", "Integridad (Integrity)", "Ciencia / Saber (Science)", "Recurso / Bien (Asset)", "Crimen (Crime)", "Sabiduría (Wisdom)", "Justicia (Justice)", "Lucha / Discordia (Strife)", "Asco / Repulsión (Disgust)", "Peligro (Danger)", "Equilibrio (Balance)", "Naturaleza (Nature)", "Caos (Chaos)", "Emboscada (Ambush)", "Riqueza (Wealth)", "Pensamiento (Thought)", "Oscuridad (Dark)", "Conexión (Connection)", "Puerta (Door)", "Miedo (Fear)", "Brujería (Sorcery)", "Honor (Honor)", "Espíritu (Spirit)", "Confianza (Trust)", "Pérdida (Loss)", "Fracaso (Failure)", "Peligro (Peril)", "Plan (Plan)", "Truco / Trampa (Trick)", "Mente (Mind)", "Dolor (Pain)", "Victoria (Victory)", "Muerte (Death)", "Control (Control)", "Conocimiento (Knowledge)", "Secreto (Secret)", "Bondad (Kindness)", "Exploración (Exploration)", "Sorpresa (Surprise)", "Magia (Magic)", "Animal (Animal)", "Camino (Way)", "Esencia (Essence)", "Sueño (Dream)", "Ira (Anger)", "Visión (Vision)", "Seguridad (Safety)", "Resultado (Result)", "Lugar (Place)", "Senda / Camino (Path)", "Sustento (Nourishment)", "Robo (Theft)", "Decadencia (Decay)", "Verdad (Truth)", "Gente (People)", "Ayuda (Help)", "Equipo (Gear)", "Idea (Idea)", "Orden (Order)", "Éxito (Success)", "Barrera (Barrier)", "Meta / Objetivo (Goal)", "Suerte (Luck)", "Identidad (Identity)", "Daño (Harm)", "Tierras Salvajes (Wilderness)", "Motivo (Motive)", "Refugio (Shelter)", "Poder (Power)"],
      checkOracle: function(odds, question) {
        var currentOdds = odds || "even";
        var currentQuestion = question || "Pregunta al Oráculo";
        var d1 = this.d(20);
        var d2 = this.d(20);
        var finalRoll = d1;
        var rollDetails = "d20: [" + d1 + "]";
        if (currentOdds === "unlikely") {
          finalRoll = Math.min(d1, d2);
          rollDetails = "Desventaja (Poco probable): [" + d1 + ", " + d2 + "] -> " + finalRoll;
        } else if (currentOdds === "likely") {
          finalRoll = Math.max(d1, d2);
          rollDetails = "Ventaja (Probable): [" + d1 + ", " + d2 + "] -> " + finalRoll;
        } else {
          rollDetails = "Tirada Normal (50/50): [" + d1 + "]";
        }
        var answer = (finalRoll === 10) ? "¡GIRO INESPERADO! (TWIST)" : ((finalRoll >= 11) ? "SÍ" : "NO");
        var isTwist = (finalRoll === 10);
        var isCritical = (finalRoll === 1 || finalRoll === 20);
        var isOdd = (finalRoll % 2 !== 0 && finalRoll !== 1);
        var nuance = "";
        if (isCritical) {
          nuance = (finalRoll === 20) ? "¡Éxito Crítico! SÍ, y de forma inmejorable." : "¡Pifia Crítica! NO, y de la peor forma posible.";
        } else if (isOdd) {
          nuance = "Número impar (" + finalRoll + "): Tiene un matiz ('" + answer + ", pero...'). Modifica la situación sin anular el resultado.";
        }
        var promptAttached = isTwist ? this.generatePrompt() : null;
        return {
          pregunta: currentQuestion, respuesta: answer, tirada: finalRoll,
          detallesTirada: rollDetails, esGiro: isTwist, matiz: nuance, estimuloGiro: promptAttached
        };
      },
      generatePrompt: function() {
        var rV = this.d(100);
        var rN = this.d(100);
        return {
          texto: this.promptsVerbs[rV - 1] + " + " + this.promptsNouns[rN - 1],
          verbo: this.promptsVerbs[rV - 1], sustantivo: this.promptsNouns[rN - 1],
          rolls: "d100 (Verbo): [" + rV + "], d100 (Sustantivo): [" + rN + "]"
        };
      },
      generateDungeonName: function() {
        var r1 = this.d(50);
        var r2 = this.d(50);
        var r3 = this.d(50);
        return {
          nombre: this.dungeonNamesCol1_ES[r1 - 1] + " " + this.dungeonNamesCol2_ES[r2 - 1] + " de(l) " + this.dungeonNamesCol3_ES[r3 - 1],
          nombreIngles: this.dungeonNamesCol1[r1 - 1] + " of the " + this.dungeonNamesCol2[r2 - 1] + " " + this.dungeonNamesCol3[r3 - 1],
          rolls: "d50:[" + r1 + "], d50:[" + r2 + "], d50:[" + r3 + "]"
        };
      }
    };
  }

  var btnOracle = document.getElementById("btnRollOracle");
  if (btnOracle) {
    btnOracle.addEventListener("click", function() {
      var qInput = document.getElementById("oracleQuestionInput");
      var oddsSelect = document.getElementById("oracleOddsSelect");
      var question = qInput ? qInput.value.trim() : "";
      var odds = oddsSelect ? oddsSelect.value : "even";

      var engine = getOracle();
      var res = engine.checkOracle(odds, question);
      var fields = {
        "Pregunta Formulada": "<em>«" + res.pregunta + "»</em>",
        "Tirada d20": res.detallesTirada
      };
      if (res.matiz) fields.Matiz = res.matiz;
      if (res.esGiro && res.estimuloGiro) {
        fields.Giro = "<strong>" + res.estimuloGiro.texto + "</strong> (" + res.estimuloGiro.rolls + ")";
      }
      createCard("eventos", "ORÁCULO SOLODARK", res.respuesta, fields, "oraculo-preview");
    });
  }

  var btnPrompt = document.getElementById("btnRollPrompt");
  if (btnPrompt) {
    btnPrompt.addEventListener("click", function() {
      var engine = getOracle();
      var pr = engine.generatePrompt();
      createCard("eventos", "ESTÍMULO / IDEA", pr.texto, {
        "Acción (Verbo)": pr.verbo,
        "Tema (Sustantivo)": pr.sustantivo,
        "Tiradas": pr.rolls
      }, "oraculo-preview");
    });
  }

  var btnDName = document.getElementById("btnRollDungeonName");
  if (btnDName) {
    btnDName.addEventListener("click", function() {
      var engine = getOracle();
      var dg = engine.generateDungeonName();
      createCard("mazmorra", "NOMBRE DE MAZMORRA", dg.nombre, {
        "Título Original (EN)": dg.nombreIngles,
        "Tiradas": dg.rolls
      }, "oraculo-preview");
    });
  }

  // 10. BUSCADOR DE MONSTRUOS
  var monsterInput = document.getElementById("monsterSearchInput");
  var monsterResults = document.getElementById("monsterSearchResults");

  function renderMonsterSearch() {
    if (!monsterInput || !monsterResults) return;
    var q = monsterInput.value.toLowerCase().trim();
    monsterResults.innerHTML = "";

    var list = (window.SD_DATA && window.SD_DATA.MONSTERS) ? window.SD_DATA.MONSTERS : [];
    var matches = list.filter(function(m) { return m.name && m.name.toLowerCase().indexOf(q) !== -1; });

    matches.forEach(function(m) {
      var row = document.createElement("div");
      row.className = "monster-item-row";
      row.innerHTML = "<div>" +
        "<strong style=\"color: #fff;\">" + m.name + "</strong>" +
        "<div style=\"font-size:0.75rem; color:var(--accent-gold); font-family:var(--font-mono);\">NV " + m.nv + " | CA " + m.ca + " | PG " + m.pg + "</div>" +
      "</div>" +
      "<button class=\"btn btn-action\">📌 Indexar a Combate</button>";

      row.querySelector("button").addEventListener("click", function() {
        if (COMPONENTS && COMPONENTS.renderMonsterCard) {
          var mCard = COMPONENTS.renderMonsterCard(m, true);
          pinToGmScreen(mCard, "combate");
        }
      });
      monsterResults.appendChild(row);
    });
  }

  if (monsterInput) {
    monsterInput.addEventListener("input", renderMonsterSearch);
    renderMonsterSearch();
  }

  // 11. RELOJES DE PROGRESO Y PELIGRO
  var clockForm = document.getElementById("clockCreateForm");
  var btnAddProgress = document.getElementById("btnAddProgressBtn");
  var btnAddDanger = document.getElementById("btnAddDangerBtn");
  var btnCancelClockForm = document.getElementById("btnCancelClockForm");
  var btnCancelClockFormSecondary = document.getElementById("btnCancelClockFormSecondary");
  var titleIn = document.getElementById("newClockTitle");
  var descriptionIn = document.getElementById("newClockDescription");
  var completionMessageIn = document.getElementById("newClockCompletionMessage");
  var segsIn = document.getElementById("newClockSegments");
  var clockFormType = document.getElementById("clockFormType");
  var clockFormTitle = document.getElementById("clockFormTitle");
  var btnCreateClock = document.getElementById("btnCreateClock");

  function closeClockForm() {
    if (!clockForm) return;
    clockForm.hidden = true;
    clockForm.reset();
  }

  function openClockForm(type) {
    if (!clockForm) return;
    var isProgress = type === "progress";
    clockForm.dataset.type = isProgress ? "progress" : "danger";
    clockFormType.textContent = isProgress ? "RELOJ DE PROGRESO" : "RELOJ DE PELIGRO";
    clockFormTitle.textContent = isProgress ? "Configura el progreso" : "Configura el peligro";
    btnCreateClock.textContent = isProgress ? "Crear progreso" : "Crear peligro";
    btnCreateClock.className = "btn " + (isProgress ? "btn-action" : "btn-danger");
    clockForm.hidden = false;
    if (titleIn) titleIn.focus();
  }

  if (btnAddProgress) btnAddProgress.addEventListener("click", function() { openClockForm("progress"); });
  if (btnAddDanger) btnAddDanger.addEventListener("click", function() { openClockForm("danger"); });
  if (btnCancelClockForm) btnCancelClockForm.addEventListener("click", closeClockForm);
  if (btnCancelClockFormSecondary) btnCancelClockFormSecondary.addEventListener("click", closeClockForm);

  if (clockForm) {
    clockForm.addEventListener("submit", function(event) {
      event.preventDefault();
      if (!titleIn || !descriptionIn || !completionMessageIn || !segsIn || !COMPONENTS || !COMPONENTS.createThreatClock) return;

      var clock = COMPONENTS.createThreatClock(
        titleIn.value.trim(),
        descriptionIn.value.trim(),
        completionMessageIn.value.trim(),
        parseInt(segsIn.value, 10),
        clockForm.dataset.type
      );
      var container = document.getElementById("threatClocksContainer");
      if (container) container.prepend(clock);
      closeClockForm();
    });
  }

  var clockCompletionOverlay = document.getElementById("clockCompletionOverlay");
  var clockCompletionContext = document.getElementById("clockCompletionContext");
  var clockCompletionHeading = document.getElementById("clockCompletionHeading");
  var clockCompletionMessage = document.getElementById("clockCompletionMessage");
  var btnCloseClockCompletion = document.getElementById("btnCloseClockCompletion");

  function closeClockCompletionOverlay() {
    if (clockCompletionOverlay) clockCompletionOverlay.hidden = true;
  }

  document.addEventListener("clock:completed", function(event) {
    if (!clockCompletionOverlay || !event.detail) return;
    var isProgress = event.detail.type === "progress";
    clockCompletionOverlay.dataset.type = isProgress ? "progress" : "danger";
    if (clockCompletionContext) clockCompletionContext.textContent = event.detail.title;
    if (clockCompletionHeading) clockCompletionHeading.textContent = isProgress ? "¡MISIÓN COMPLETADA!" : "¡FRACASO!";
    if (clockCompletionMessage) clockCompletionMessage.textContent = event.detail.message;
    clockCompletionOverlay.hidden = false;
    if (btnCloseClockCompletion) btnCloseClockCompletion.focus();
  });

  if (btnCloseClockCompletion) btnCloseClockCompletion.addEventListener("click", closeClockCompletionOverlay);
  if (clockCompletionOverlay) {
    clockCompletionOverlay.addEventListener("click", function(event) {
      if (event.target === clockCompletionOverlay) closeClockCompletionOverlay();
    });
  }

  // 11b. HERRAMIENTAS DE MESA: DADOS Y ANTORCHA
  var diceOverlay = document.getElementById("diceOverlay");
  var torchOverlay = document.getElementById("torchOverlay");
  var torchAlertOverlay = document.getElementById("torchAlertOverlay");
  var torchHeaderStatus = document.getElementById("torchHeaderStatus");
  var torchHeaderCountdown = document.getElementById("torchHeaderCountdown");
  var torchState = { endAt: null, duration: 0, warnedFive: false, warnedOne: false };
  var torchTicker = null;
  var activeToolOverlay = null;
  var alertTimer = null;
  var diceRoller = null;

  function getTopOpenTool() {
    var overlays = [torchAlertOverlay, torchOverlay, diceOverlay];
    for (var index = 0; index < overlays.length; index += 1) {
      if (overlays[index] && !overlays[index].hidden) return overlays[index];
    }
    return null;
  }
  function openTool(overlay) {
    if (!overlay) return;
    overlay.returnFocus = document.activeElement;
    overlay.hidden = false;
    activeToolOverlay = overlay;
    var focusTarget = overlay.querySelector("button:not([data-close-tool])");
    if (focusTarget) focusTarget.focus();
  }
  function closeTool(overlay) {
    if (!overlay) return;
    var returnFocus = overlay.returnFocus;
    overlay.hidden = true;
    activeToolOverlay = getTopOpenTool();
    if (returnFocus && typeof returnFocus.focus === "function") returnFocus.focus();
  }
  if (document.getElementById("btnDiceTool")) document.getElementById("btnDiceTool").onclick = function() { openTool(diceOverlay); };
  if (document.getElementById("btnTorchTool")) document.getElementById("btnTorchTool").onclick = function() { openTool(torchOverlay); };
  document.querySelectorAll("[data-close-tool]").forEach(function(btn) {
    btn.addEventListener("click", function() { closeTool(document.getElementById(btn.dataset.closeTool)); });
  });
  [diceOverlay, torchOverlay, torchAlertOverlay].forEach(function(overlay) {
    if (overlay) overlay.addEventListener("click", function(event) {
      if (event.target === overlay && overlay !== torchAlertOverlay) closeTool(overlay);
    });
  });
  document.addEventListener("keydown", function(event) {
    if (!activeToolOverlay || activeToolOverlay.hidden) return;
    if (event.key === "Escape") {
      event.preventDefault();
      if (activeToolOverlay === torchAlertOverlay) {
        dismissTorchAlert();
      } else {
        closeTool(activeToolOverlay);
      }
      return;
    }
    if (event.key === "Tab") {
      var focusable = activeToolOverlay.querySelectorAll(
        'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable.length) return;
      var first = focusable[0];
      var last = focusable[focusable.length - 1];
      if (event.shiftKey && (document.activeElement === first || !activeToolOverlay.contains(document.activeElement))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (document.activeElement === last || !activeToolOverlay.contains(document.activeElement))) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  var dieChoices = document.querySelectorAll(".die-choice");
  var diceHistory = [];

  function renderDiceHistory() {
    var list = document.getElementById("diceHistoryList");
    var emptyState = document.getElementById("diceHistoryEmpty");
    if (!list || !emptyState) return;
    list.innerHTML = "";
    emptyState.hidden = diceHistory.length > 0;

    diceHistory.forEach(function(entry) {
      var item = document.createElement("li");
      item.className = entry.outcome ? "dice-history-item " + entry.outcome : "dice-history-item";
      item.textContent = "d" + entry.sides + " · " + entry.display;
      list.appendChild(item);
    });
  }

  function addDiceHistory(sides, finalValue, outcome) {
    var display = String(finalValue);
    if (outcome === "fumble") display = "☠ 1 ☠";
    if (outcome === "critical") display = "★ 20 ★";
    diceHistory.unshift({ sides: sides, display: display, outcome: outcome });
    diceHistory = diceHistory.slice(0, 10);
    renderDiceHistory();
  }

  dieChoices.forEach(function(button) {
    button.addEventListener("click", function() {
      var sides = parseInt(button.dataset.sides, 10);
      var result = document.getElementById("diceResult");
      var value = document.getElementById("diceResultValue");
      var label = document.getElementById("diceResultLabel");
      if (!result || !value || !label) return;
      if (diceRoller) clearInterval(diceRoller);
      dieChoices.forEach(function(choice) { choice.disabled = true; });
      result.className = "dice-result rolling";
      result.setAttribute("aria-busy", "true");
      label.textContent = "TIRANDO d" + sides;
      var ticks = 0;
      diceRoller = setInterval(function() {
        value.textContent = String(Math.floor(Math.random() * sides) + 1);
        ticks += 1;
        if (ticks >= 12) {
          clearInterval(diceRoller);
          diceRoller = null;
          var finalValue = Math.floor(Math.random() * sides) + 1;
          value.textContent = String(finalValue);
          result.className = "dice-result";
          result.setAttribute("aria-busy", "false");
          label.textContent = "RESULTADO d" + sides;
          var outcome = "";
          if (sides === 20 && finalValue === 1) {
            result.classList.add("fumble");
            value.textContent = "☠ 1 ☠";
            label.textContent = "PIFIA";
            outcome = "fumble";
          } else if (sides === 20 && finalValue === 20) {
            result.classList.add("critical");
            value.textContent = "★ 20 ★";
            label.textContent = "CRÍTICO";
            outcome = "critical";
          }
          addDiceHistory(sides, finalValue, outcome);
          dieChoices.forEach(function(choice) { choice.disabled = false; });
        }
      }, 65);
    });
  });

  function formatTorchTime(ms) {
    var total = Math.max(0, Math.ceil(ms / 1000));
    return String(Math.floor(total / 60)).padStart(2, "0") + ":" + String(total % 60).padStart(2, "0");
  }
  function dismissTorchAlert() {
    clearTimeout(alertTimer);
    closeTool(torchAlertOverlay);
  }
  function showTorchAlert(heading, message, duration, stage) {
    var headingEl = document.getElementById("torchAlertHeading");
    var messageEl = document.getElementById("torchAlertMessage");
    var dismissButton = document.getElementById("btnDismissTorchAlert");
    if (headingEl) headingEl.textContent = heading;
    if (messageEl) messageEl.textContent = message;
    if (torchAlertOverlay) {
      torchAlertOverlay.dataset.stage = stage || "warning";
      torchAlertOverlay.returnFocus = document.activeElement;
      torchAlertOverlay.hidden = false;
      activeToolOverlay = torchAlertOverlay;
      if (dismissButton) dismissButton.focus();
    }
    clearTimeout(alertTimer);
    alertTimer = setTimeout(dismissTorchAlert, duration || 6000);
  }
  function clearTorch() {
    torchState = { endAt: null, duration: 0, warnedFive: false, warnedOne: false };
    document.body.classList.remove("torch-final-minute");
    if (torchHeaderStatus) torchHeaderStatus.hidden = true;
    if (torchTicker) { clearInterval(torchTicker); torchTicker = null; }
  }
  function renderTorch() {
    if (!torchState.endAt) return;
    var remaining = torchState.endAt - Date.now();
    if (remaining <= 0) {
      clearTorch();
      showTorchAlert("LA OSCURIDAD OS RODEA", "La llama se ha extinguido. El camino queda a oscuras.", 8000, "darkness");
      return;
    }
    if (torchHeaderStatus) torchHeaderStatus.hidden = false;
    if (torchHeaderCountdown) torchHeaderCountdown.textContent = formatTorchTime(remaining);
    if (remaining <= 60000) {
      document.body.classList.add("torch-final-minute");
      if (!torchState.warnedOne) {
        torchState.warnedOne = true;
        showTorchAlert("¡PELIGRO! ÚLTIMO MINUTO", "La antorcha agoniza. La oscuridad llega en menos de un minuto.", 5000, "danger");
      }
    } else {
      document.body.classList.remove("torch-final-minute");
      if (remaining <= 300000 && !torchState.warnedFive) {
        torchState.warnedFive = true;
        showTorchAlert("LA LLAMA VACILA", "Quedan cinco minutos o menos de luz.", 5000, "warning");
      }
    }
  }
  function startTorch(minutes, endAt) {
    document.body.classList.remove("torch-final-minute");
    torchState = { endAt: endAt || Date.now() + minutes * 60000, duration: minutes, warnedFive: false, warnedOne: false };
    if (torchState.endAt - Date.now() <= 300000) torchState.warnedFive = true;
    if (torchState.endAt - Date.now() <= 60000) torchState.warnedOne = true;
    clearInterval(torchTicker);
    torchTicker = setInterval(renderTorch, 500);
    renderTorch();
  }
  document.querySelectorAll(".torch-duration").forEach(function(button) {
    button.addEventListener("click", function() {
      startTorch(parseInt(button.dataset.minutes, 10));
      closeTool(torchOverlay);
    });
  });
  var btnExtinguishTorch = document.getElementById("btnExtinguishTorch");
  if (btnExtinguishTorch) btnExtinguishTorch.addEventListener("click", clearTorch);
  var btnDismissTorchAlert = document.getElementById("btnDismissTorchAlert");
  if (btnDismissTorchAlert) btnDismissTorchAlert.addEventListener("click", dismissTorchAlert);
  if (torchState.endAt) renderTorch();

  // 12. PASO DEL TIEMPO DE AVENTURA
  var adventureTimeTracker = document.getElementById("adventureTimeTracker");
  var adventureTimeSegments = document.querySelectorAll(".adventure-time-segment");
  var adventureTimeProgress = document.getElementById("adventureTimeProgress");
  var adventureDayCount = document.getElementById("adventureDayCount");

  function normalizeTimeValue(value, maximum) {
    var parsed = parseInt(value, 10);
    if (isNaN(parsed)) return 0;
    return Math.max(0, Math.min(parsed, maximum));
  }

  function renderAdventureTime(filled, days) {
    if (!adventureTimeTracker) return;
    var totalSegments = adventureTimeSegments.length;
    var normalizedFilled = normalizeTimeValue(filled, totalSegments - 1);
    var normalizedDays = normalizeTimeValue(days, 999);
    adventureTimeTracker.dataset.filled = String(normalizedFilled);
    adventureTimeTracker.dataset.days = String(normalizedDays);

    adventureTimeSegments.forEach(function(segment, index) {
      segment.classList.toggle("filled", index < normalizedFilled);
    });

    if (adventureTimeProgress) adventureTimeProgress.textContent = normalizedFilled + " / " + totalSegments;
    if (adventureDayCount) adventureDayCount.value = String(normalizedDays).padStart(3, "0");
  }

  function getAdventureTimeState() {
    if (!adventureTimeTracker) return { filled: 0, days: 0 };
    return {
      filled: normalizeTimeValue(adventureTimeTracker.dataset.filled, adventureTimeSegments.length - 1),
      days: normalizeTimeValue(adventureTimeTracker.dataset.days, 999)
    };
  }

  function setAdventureTimeState(state) {
    var safeState = state || {};
    renderAdventureTime(safeState.filled, safeState.days);
  }

  if (adventureTimeTracker) {
    renderAdventureTime(0, 0);
    adventureTimeSegments.forEach(function(segment, index) {
      segment.addEventListener("click", function() {
        var state = getAdventureTimeState();
        var nextFilled = (index + 1 === state.filled) ? index : index + 1;

        if (nextFilled === adventureTimeSegments.length) {
          renderAdventureTime(0, Math.min(state.days + 1, 999));
          return;
        }

        renderAdventureTime(nextFilled, state.days);
      });
    });
  }

  // 13. LIMPIEZA Y PURGADO
  document.querySelectorAll(".btn-clear-col").forEach(function(btn) {
    btn.addEventListener("click", function(e) {
      var colCards = e.target.closest(".gm-column").querySelector(".column-cards");
      if (colCards) colCards.innerHTML = "";
    });
  });

  var btnReset = document.getElementById("btnResetSession");
  if (btnReset) {
    btnReset.addEventListener("click", function() {
      if (confirm("¿Vaciar todo el contenido de la Pantalla de GM, los relojes activos y el contador de tiempo?")) {
        document.querySelectorAll(".column-cards").forEach(function(c) { c.innerHTML = ""; });
        var clkCont = document.getElementById("threatClocksContainer");
        if (clkCont) clkCont.innerHTML = "";
        setAdventureTimeState({ filled: 0, days: 0 });
        clearTorch();
        if (torchAlertOverlay) torchAlertOverlay.hidden = true;
      }
    });
  }

  // 14. GUARDAR / CARGAR JSON
  var btnSave = document.getElementById("btnSaveJson");
  if (btnSave) {
    btnSave.addEventListener("click", function() {
      var sessionTitleElem = document.getElementById("sessionTitle");
      var gmGrid = document.querySelector(".gm-screen-grid");
      var clkContainer = document.getElementById("threatClocksContainer");

      var sessionData = {
        title: sessionTitleElem ? sessionTitleElem.value : "Sesión",
        screenHtml: gmGrid ? gmGrid.innerHTML : "",
        clocksHtml: clkContainer ? clkContainer.innerHTML : "",
        adventureTime: getAdventureTimeState(),
        torchTimer: torchState.endAt ? {
          endAt: torchState.endAt,
          duration: torchState.duration,
          warnedFive: torchState.warnedFive,
          warnedOne: torchState.warnedOne
        } : null
      };
      var blob = new Blob([JSON.stringify(sessionData, null, 2)], { type: "application/json" });
      var url = URL.createObjectURL(blob);
      var a = document.createElement("a");
      a.href = url;
      a.download = (sessionData.title.replace(/[^a-z0-9]/gi, "_").toLowerCase()) + "_session.json";
      a.click();
    });
  }

  var btnLoadTrigger = document.getElementById("btnLoadJsonTrigger");
  var loadInput = document.getElementById("loadJsonInput");

  if (btnLoadTrigger && loadInput) {
    btnLoadTrigger.addEventListener("click", function() { loadInput.click(); });
    loadInput.addEventListener("change", function(e) {
      var file = e.target.files[0];
      if (!file) return;
      var reader = new FileReader();
      reader.onload = function(evt) {
        try {
          var data = JSON.parse(evt.target.result);
          var sessionTitleElem = document.getElementById("sessionTitle");
          var gmGrid = document.querySelector(".gm-screen-grid");
          var clkContainer = document.getElementById("threatClocksContainer");

          if (data.title && sessionTitleElem) sessionTitleElem.value = data.title;
          if (data.screenHtml && gmGrid) gmGrid.innerHTML = data.screenHtml;
          if (data.clocksHtml && clkContainer) clkContainer.innerHTML = data.clocksHtml;
            setAdventureTimeState(data.adventureTime);
          clearTorch();
          if (data.torchTimer && Number(data.torchTimer.endAt) > Date.now()) {
            startTorch(Number(data.torchTimer.duration) || 30, Number(data.torchTimer.endAt));
            torchState.warnedFive = Boolean(data.torchTimer.warnedFive);
            torchState.warnedOne = Boolean(data.torchTimer.warnedOne);
            renderTorch();
          }

          document.querySelectorAll(".btn-card-del").forEach(function(b) {
            b.onclick = function() { b.closest(".tactical-card").remove(); };
          });
          document.querySelectorAll(".threat-clock-item").forEach(function(clock) {
            if (COMPONENTS && COMPONENTS.bindThreatClock) COMPONENTS.bindThreatClock(clock);
          });
        } catch (err) {
          alert("Error al parsear el archivo JSON.");
        }
      };
      reader.readAsText(file);
    });
  }
});