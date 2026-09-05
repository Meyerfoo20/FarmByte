
      const $ = (s) => document.querySelector(s);

      const ICONS = {
        home: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
        learn: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
        shop: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
        coin: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v10"/><path d="M15 9.5a2.5 2.5 0 0 0-5 0c0 2 5 2 5 4a2.5 2.5 0 0 1-5 0"/></svg>`,
        eye: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
        eyeOff: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`,
        play: `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,
        plus: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
        sprout: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 20h10"/><path d="M12 20v-8"/><path d="M12 12c-3-2.5-6-2.5-8 0 0 4 4 6 8 6"/><path d="M12 12c3-2.5 6-2.5 8 0 0 4-4 6-8 6"/></svg>`,
        tomato: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="13" r="8"/><path d="M12 5v3"/><path d="M9 5c1 1 2 1 3 0s2 1 3 0"/></svg>`,
        basket: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10h16l-1.5 10h-13Z"/><path d="M8 10V6a4 4 0 0 1 8 0v4"/></svg>`,
        water: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>`,
        cow: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a7 7 0 0 0-7 7v4a5 5 0 0 0 5 5h4a5 5 0 0 0 5-5v-4a7 7 0 0 0-7-7z"/><circle cx="9" cy="11" r="1"/><circle cx="15" cy="11" r="1"/><path d="M10 16h4"/></svg>`,
        castle: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M19 21V11l-2-2V4h-2v3h-2V4h-2v3H9V4H7v5L5 11v10"/><path d="M9 21v-5a3 3 0 0 1 6 0v5"/></svg>`,
        check: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
        
        // SKINS
        skinFarmer: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
        skinCowboy: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
        skinWizard: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 4V2"/><path d="M15 16v-2"/><path d="M8 9h2"/><path d="M20 9h2"/><path d="M17.8 5.2l-1.4 1.4"/><path d="M13.6 9.4l-1.4 1.4"/><path d="M2 22l10-10"/></svg>`,
        skinNinja: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
        skinRobot: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="15" x2="8" y2="17"/><line x1="16" y1="15" x2="16" y2="17"/></svg>`,
        skinAstronaut: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-3.05 11a22.35 22.35 0 0 1-3.95 2z"/></svg>`,
        skinKing: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z"/><path d="M5 20h14"/></svg>`
      };

      // Fyll fasta ikoner i gränssnittet
      $("#navHomeIcon").innerHTML = ICONS.home;
      $("#navLearnIcon").innerHTML = ICONS.learn;
      $("#navShopIcon").innerHTML = ICONS.shop;
      $("#coinIconHeader").innerHTML = ICONS.coin;
      $("#playIcon").innerHTML = ICONS.play;
      $("#hintBtnIcon").innerHTML = ICONS.eye;

      // Skins med ikoner
      const SKINS = [
        { id: "farmer", name: "Klassisk Bonde", icon: ICONS.skinFarmer, price: 0 },
        { id: "cowboy", name: "Cowboy", icon: ICONS.skinCowboy, price: 10 },
        { id: "wizard", name: "Trollkarl", icon: ICONS.skinWizard, price: 20 },
        { id: "ninja", name: "Ninja", icon: ICONS.skinNinja, price: 30 },
        { id: "robot", name: "Robot", icon: ICONS.skinRobot, price: 40 },
        { id: "astronaut", name: "Astronaut", icon: ICONS.skinAstronaut, price: 50 },
        { id: "king", name: "Kung", icon: ICONS.skinKing, price: 60 }
      ];

      // Alla 8 uppdrag
      const QUESTS = [
        {
          id: 0,
          eyebrow: "UPPDRAG 01 · GRUNDEN",
          title: "Döp din gård med Java",
          desc: "En riktig bonde börjar med ett namn. Skriv Java-kod som sparar gårdens namn i en String-variabel och skriver ut det.",
          file: "FarmName.java",
          template: `public class FarmName {\n  public static void main(String[] args) {\n    // Skriv din kod här\n    \n  }\n}`,
          hintDesc: "Du behöver skapa en textvariabel med <code>String</code> och därefter skriva ut den till konsolen.",
          hintExample: "Detta ska ingå i koden:<br>1. <code>String gardsNamn = \"...\";</code><br>2. <code>System.out.println(gardsNamn);</code>",
          validate: (code) => /String\s+\w+\s*=/.test(code) && /System\.out\.println\s*\(/.test(code),
          successMsg: 'Snyggt! Din gård har nu döpts!'
        },
        {
          id: 1,
          eyebrow: "UPPDRAG 02 · DATATYPER",
          title: "Plantera dina frön",
          desc: "Nu ska vi så frön i jorden (max 6 platser)! Skapa en int-variabel med värdet 6 och skriv ut den i konsolen.",
          file: "PlantSeeds.java",
          template: `public class PlantSeeds {\n  public static void main(String[] args) {\n    // Skriv din kod här\n    \n  }\n}`,
          hintDesc: "Du behöver skapa en heltalsvariabel med <code>int</code> satt till <code>6</code> och skriva ut den.",
          hintExample: "Detta ska ingå i koden:<br>1. <code>int fron = 6;</code><br>2. <code>System.out.println(fron);</code>",
          validate: (code) => /int\s+\w+\s*=\s*6/.test(code) && /System\.out\.println\s*\(/.test(code),
          successMsg: 'Bra jobbat! Fröna har planterats i jorden!'
        },
        {
          id: 2,
          eyebrow: "UPPDRAG 03 · BOOLEAN & CONDITIONS",
          title: "Vattna fröna",
          desc: "Fröna behöver vatten för att växa till saftiga tomater. Skapa en boolean satt till `true` och skriv ut den.",
          file: "WaterFarm.java",
          template: `public class WaterFarm {\n  public static void main(String[] args) {\n    // Skriv din kod här\n    \n  }\n}`,
          hintDesc: "Du behöver skapa en sant/falskt-variabel med <code>boolean</code> satt till <code>true</code> och skriva ut den.",
          hintExample: "Detta ska ingå i koden:<br>1. <code>boolean isWatered = true;</code><br>2. <code>System.out.println(isWatered);</code>",
          validate: (code) => /boolean\s+\w+\s*=\s*true/.test(code) && /System\.out\.println\s*\(/.test(code),
          successMsg: 'Härligt! Fröna drack vattnet och växte till tomater!'
        },
        {
          id: 3,
          eyebrow: "UPPDRAG 04 · LOOPS",
          title: "Skörda tomaterna",
          desc: "Dags för skörd! Skriv en for-loop som räknar från 1 till 6 och anropar println för varje tomat.",
          file: "HarvestTomatoes.java",
          template: `public class HarvestTomatoes {\n  public static void main(String[] args) {\n    // Skriv din kod här\n    \n  }\n}`,
          hintDesc: "Du behöver en <code>for</code>-loop som startar på 1, kör så länge räknaren är <code><= 6</code>, och skriver ut ett meddelande.",
          hintExample: "Detta ska ingå i koden:<br>1. <code>for (int i = 1; i <= 6; i++) {</code><br>2. <code>System.out.println(\"...\");</code><br>3. <code>}</code>",
          validate: (code) => /for\s*\(\s*int\s+\w+\s*=\s*1\s*;\s*\w+\s*<=\s*6/.test(code) && /System\.out\.println\s*\(/.test(code),
          successMsg: 'Fantastiskt! Du har skördat alla tomater!'
        },
        {
          id: 4,
          eyebrow: "UPPDRAG 05 · ARRAYER",
          title: "Grönsaksförrådet",
          desc: "Bygg ett lager för dina grödor! Skapa en String-array med tre grödor (\"Morot\", \"Tomat\", \"Majs\") och skriv ut den första grödan i konsolen.",
          file: "CropStorage.java",
          template: `public class CropStorage {\n  public static void main(String[] args) {\n    // Skriv din kod här\n    \n  }\n}`,
          hintDesc: "Du behöver skapa en matris av texter med <code>String[]</code> och kommatecken mellan värdena, samt skriva ut index <code>[0]</code>.",
          hintExample: "Detta ska ingå i koden:<br>1. <code>String[] grodor = {\"Morot\", \"Tomat\", \"Majs\"};</code><br>2. <code>System.out.println(grodor[0]);</code>",
          validate: (code) => /String\s*\[\s*\]\s+\w+\s*=\s*\{.*"Morot".*"Tomat".*"Majs".*\}/s.test(code) && /System\.out\.println\s*\(\s*\w+\s*\[\s*0\s*\]\s*\)/.test(code),
          successMsg: 'Ladan är färdigbyggd och grönsakerna är sorterade!'
        },
        {
          id: 5,
          eyebrow: "UPPDRAG 06 · METODER",
          title: "Automatisera bevattningen",
          desc: "Effektivisera arbetet! Skapa en metod `vattnaAker()` utanför main som skriver ut ett meddelande, och anropa metoden inuti `main`.",
          file: "WateringSystem.java",
          template: `public class WateringSystem {\n  // Skapa din metod här\n  \n  public static void main(String[] args) {\n    // Anropa din metod här\n    \n  }\n}`,
          hintDesc: "Du behöver skapa en <code>public static void vattnaAker()</code> metod i klassen som innehåller en <code>System.out.println()</code>, och sedan anropa <code>vattnaAker();</code> från main.",
          hintExample: "Detta ska ingå i koden:<br>1. <code>public static void vattnaAker() { System.out.println(\"...\"); }</code><br>2. Inne i main: <code>vattnaAker();</code>",
          validate: (code) => /public\s+static\s+void\s+vattnaAker\s*\(\s*\)\s*\{/.test(code) && /vattnaAker\s*\(\s*\)\s*;/.test(code) && /System\.out\.println\s*\(/.test(code),
          successMsg: 'Vattenspridaren är igång! Åkern bevattnas automatiskt!'
        },
        {
          id: 6,
          eyebrow: "UPPDRAG 07 · KLASSER OCH OBJEKT",
          title: "Köp din första ko",
          desc: "Skapa ett nytt djur på gården! I klassen `Ko` finns redan variabeln `namn`. Skapa ett `Ko`-objekt med `new`, tilldela ett namn och skriv ut det.",
          file: "FarmCow.java",
          template: `class Ko {\n  String namn;\n}\n\npublic class FarmCow {\n  public static void main(String[] args) {\n    // Skriv din kod här\n    \n  }\n}`,
          hintDesc: "Du behöver skapa en instans av klassen Ko med <code>new Ko()</code>, sätta dess egenskap <code>.namn</code>, och skriva ut namnet.",
          hintExample: "Detta ska ingå i koden:<br>1. <code>Ko minKo = new Ko();</code><br>2. <code>minKo.namn = \"Berta\";</code><br>3. <code>System.out.println(minKo.namn);</code>",
          validate: (code) => /Ko\s+\w+\s*=\s*new\s+Ko\s*\(\s*\)/.test(code) && /\.\s*namn\s*=/.test(code) && /System\.out\.println\s*\(/.test(code),
          successMsg: 'Muuuu! Kossan flyttade in i sin nya hage!'
        },
        {
          id: 7,
          eyebrow: "UPPDRAG 08 · WHILE-LOOPAR & EKONOMI",
          title: "Sälj skörden på torget",
          desc: "Tjäna guldmynt! Skapa variabeln `guldmynt` satt till 0. Skriv en `while`-loop som ökar `guldmynt` med 10 tills du har nått minst 50, och skriv sedan ut slutsumman.",
          file: "MarketSale.java",
          template: `public class MarketSale {\n  public static void main(String[] args) {\n    // Skriv din kod här\n    \n  }\n}`,
          hintDesc: "Du behöver en variabel <code>int guldmynt = 0;</code>, en <code>while (guldmynt < 50)</code> loop som ökar värdet med <code>guldmynt += 10;</code>, och slutligen en <code>System.out.println(guldmynt);</code> efter loopen.",
          hintExample: "Detta ska ingå i koden:<br>1. <code>int guldmynt = 0;</code><br>2. <code>while (guldmynt < 50) { guldmynt += 10; }</code><br>3. <code>System.out.println(guldmynt);</code>",
          validate: (code) => /int\s+guldmynt\s*=\s*0/.test(code) && /while\s*\(\s*guldmynt\s*<\s*50\s*\)/.test(code) && /guldmynt\s*(\+=|\=guldmynt\+)\s*10/.test(code) && /System\.out\.println\s*\(/.test(code),
          successMsg: 'Klirr i kassan! Du sålde allt och marknadsståndet är öppet!'
        }
      ];

      let authMode = "signup";
      let playerRaw = localStorage.getItem("farmbyte-player");
      let player = playerRaw ? JSON.parse(playerRaw) : null;

      if (!player) {
        player = {
          name: "Bonde",
          currentQuest: 0,
          farmcoins: 0,
          equippedSkin: "farmer",
          unlockedSkins: ["farmer"]
        };
      }

      if (typeof player.farmcoins !== "number") player.farmcoins = 0;
      if (!player.equippedSkin) player.equippedSkin = "farmer";
      if (!player.unlockedSkins) player.unlockedSkins = ["farmer"];

      let modal = $("#modalBack");

      function openAuth(mode) {
        authMode = mode;
        $("#signupTab").classList.toggle("active", mode === "signup");
        $("#loginTab").classList.toggle("active", mode === "login");
        $("#nameField").classList.toggle("hidden", mode === "login");
        $("#nameInput").required = mode === "signup";
        $("#modalTitle").textContent =
          mode === "signup" ? "Välkommen, kodbonde." : "Kul att se dig igen.";
        $("#modalIntro").textContent =
          mode === "signup"
            ? "Skapa ditt konto och plantera din första rad Java."
            : "Logga in för att fortsätta din Java-resa.";
        $("#submitAuth").textContent =
          mode === "signup" ? "Skapa min gård →" : "Logga in på gården →";
        modal.classList.remove("hidden");
      }

      function renderShop() {
        const shopGrid = $("#shopGrid");
        shopGrid.innerHTML = "";

        SKINS.forEach((skin) => {
          const isUnlocked = player.unlockedSkins.includes(skin.id);
          const isEquipped = player.equippedSkin === skin.id;

          const card = document.createElement("div");
          card.className = "shop-card";

          let btnHtml = "";
          if (isEquipped) {
            btnHtml = `<button class="active-btn" disabled>Aktiv</button>`;
          } else if (isUnlocked) {
            btnHtml = `<button class="equip-btn" onclick="equipSkin('${skin.id}')">Använd</button>`;
          } else {
            const canAfford = player.farmcoins >= skin.price;
            btnHtml = `<button class="buy-btn" ${canAfford ? "" : "disabled"} onclick="buySkin('${skin.id}', ${skin.price})">Köp (${skin.price} ${ICONS.coin})</button>`;
          }

          card.innerHTML = `
            <div class="skin-icon">${skin.icon}</div>
            <h4>${skin.name}</h4>
            <p>${skin.price === 0 ? "Gratis" : skin.price + " Farmcoins"}</p>
            ${btnHtml}
          `;
          shopGrid.appendChild(card);
        });
      }

      window.buySkin = (id, price) => {
        if (player.farmcoins >= price && !player.unlockedSkins.includes(id)) {
          player.farmcoins -= price;
          player.unlockedSkins.push(id);
          player.equippedSkin = id;
          localStorage.setItem("farmbyte-player", JSON.stringify(player));
          updateUI();
        }
      };

      window.equipSkin = (id) => {
        player.equippedSkin = id;
        localStorage.setItem("farmbyte-player", JSON.stringify(player));
        updateUI();
      };

      function updateUI() {
        const questIdx = typeof player.currentQuest === "number" ? player.currentQuest : 0;
        const currentQuestData = QUESTS[Math.min(questIdx, QUESTS.length - 1)];

        const activeSkinObj = SKINS.find((s) => s.id === player.equippedSkin) || SKINS[0];

        $("#sideName").textContent = player.name;
        $("#sideAvatar").innerHTML = activeSkinObj.icon;
        $("#greetingName").textContent = player.name;
        $("#topCoinCount").textContent = player.farmcoins;

        const displayLevel = Math.min(questIdx + 1, QUESTS.length);
        $("#levelNum").textContent = displayLevel < 10 ? "0" + displayLevel : displayLevel;
        $("#levelTitle").textContent = "Nivå " + displayLevel;
        $("#sideLevelText").textContent = `Nivå ${displayLevel} · Uppdrag ${displayLevel}`;
        
        const progressPercent = (questIdx / QUESTS.length) * 100;
        $("#levelBar").style.width = Math.max(progressPercent, 10) + "%";

        const fields = $("#farmFields");
        fields.innerHTML = "";
        
        let plotIcon = ICONS.plus;
        let isEmpty = true;

        if (questIdx === 0 || questIdx === 1) {
          plotIcon = ICONS.plus;
          isEmpty = true;
        } else if (questIdx === 2) {
          plotIcon = ICONS.sprout;
          isEmpty = false;
        } else if (questIdx === 3) {
          plotIcon = ICONS.tomato;
          isEmpty = false;
        } else if (questIdx === 4) {
          plotIcon = ICONS.basket;
          isEmpty = false;
        } else if (questIdx === 5) {
          plotIcon = ICONS.water;
          isEmpty = false;
        } else if (questIdx === 6) {
          plotIcon = ICONS.cow;
          isEmpty = false;
        } else if (questIdx === 7) {
          plotIcon = ICONS.coin;
          isEmpty = false;
        } else if (questIdx >= 8) {
          plotIcon = ICONS.castle;
          isEmpty = false;
        }

        for (let i = 0; i < 6; i++) {
          const div = document.createElement("div");
          div.className = `plot ${isEmpty ? "empty" : ""}`;
          div.innerHTML = plotIcon;
          fields.appendChild(div);
        }

        if (questIdx < QUESTS.length) {
          $("#questEyebrow").textContent = currentQuestData.eyebrow;
          $("#questTitle").textContent = currentQuestData.title;
          $("#questDescription").textContent = currentQuestData.desc;
          $("#questButton").innerHTML = `Börja lektionen <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`;
          $("#questButton").disabled = false;
        } else {
          $("#questEyebrow").textContent = "ALLA UPPDRAG KLARA";
          $("#questTitle").textContent = "Mästarkodbonde!";
          $("#questDescription").textContent = "Du har klarat alla 8 uppdrag i Java. Din gård är nu en fulländad högteknologisk mönstergård!";
          $("#questButton").innerHTML = `Gården är fulländad ${ICONS.check}`;
          $("#questButton").disabled = true;
        }

        const lessonList = $("#lessonList");
        lessonList.innerHTML = "";
        QUESTS.forEach((q, idx) => {
          const isComplete = idx < questIdx;
          const isCurrent = idx === questIdx;
          
          const item = document.createElement("div");
          item.className = `lesson ${isComplete ? "complete" : isCurrent ? "unlocked" : ""}`;
          item.innerHTML = `
            <div class="lesson-num">${isComplete ? ICONS.check : idx + 1}</div>
            <div>
              <b>${q.title}</b>
              <small>${q.eyebrow}</small>
            </div>
            <span class="lesson-status">${isComplete ? "Klar" : isCurrent ? "På tur" : "Låst"}</span>
          `;
          lessonList.appendChild(item);
        });

        $("#lessonProgress").textContent = `${Math.min(questIdx, QUESTS.length)} av ${QUESTS.length} klara`;

        if (questIdx < QUESTS.length) {
          $("#challengeEyebrow").textContent = currentQuestData.eyebrow;
          $("#challengeTitle").textContent = currentQuestData.title;
          $("#challengeDescription").textContent = currentQuestData.desc;
          $("#challengeFile").textContent = currentQuestData.file;
          $("#hintDescription").innerHTML = currentQuestData.hintDesc;
          $("#hintExample").innerHTML = currentQuestData.hintExample;
          
          $("#hintContent").classList.add("hidden");
          $("#hintBtnIcon").innerHTML = ICONS.eye;
          $("#hintBtnText").textContent = "Visa hint";

          if (!$("#codeInput").dataset.loadedFor || $("#codeInput").dataset.loadedFor != questIdx) {
            $("#codeInput").value = currentQuestData.template;
            $("#codeInput").dataset.loadedFor = questIdx;
          }
        }

        renderShop();
      }

      function enterApp() {
        $("#lobby").classList.add("hidden");
        $("#app").classList.remove("hidden");
        updateUI();
      }

      $("#openSignup").onclick = () => openAuth("signup");
      $("#openLogin").onclick = () => openAuth("login");
      $("#closeModal").onclick = () => modal.classList.add("hidden");
      modal.onclick = (e) => {
        if (e.target === modal) modal.classList.add("hidden");
      };

      $("#signupTab").onclick = () => openAuth("signup");
      $("#loginTab").onclick = () => openAuth("login");

      $("#authForm").onsubmit = (e) => {
        e.preventDefault();
        if (authMode === "signup") {
          player.name = $("#nameInput").value.trim() || "Bonde";
        }
        localStorage.setItem("farmbyte-player", JSON.stringify(player));
        modal.classList.add("hidden");
        enterApp();
      };

      function showView(v) {
        $("#dashboardView").style.display = v === "dashboard" ? "block" : "none";
        $("#challengeView").style.display = v === "challenge" ? "block" : "none";
        $("#shopView").style.display = v === "shop" ? "block" : "none";
        
        let viewLabel = "MIN GÅRD";
        if (v === "challenge") viewLabel = "LÄR DIG JAVA";
        if (v === "shop") viewLabel = "BUTIK";

        $("#crumbText").innerHTML = `FARMBYTE <span style="margin: 0 7px">/</span> ${viewLabel}`;

        document.querySelectorAll("[data-view]").forEach((b) => {
          b.classList.toggle("active", b.dataset.view === v);
        });
      }

      document.querySelectorAll("[data-view]").forEach((b) => {
        b.onclick = () => showView(b.dataset.view);
      });

      // Hantera visa/dölj hint med ikoner
      $("#toggleHintBtn").onclick = () => {
        const hintContent = $("#hintContent");
        const isHidden = hintContent.classList.contains("hidden");
        if (isHidden) {
          hintContent.classList.remove("hidden");
          $("#hintBtnIcon").innerHTML = ICONS.eyeOff;
          $("#hintBtnText").textContent = "Dölj hint";
        } else {
          hintContent.classList.add("hidden");
          $("#hintBtnIcon").innerHTML = ICONS.eye;
          $("#hintBtnText").textContent = "Visa hint";
        }
      };

      $("#runCode").onclick = () => {
        const questIdx = player.currentQuest || 0;
        if (questIdx >= QUESTS.length) return;

        const currentQuest = QUESTS[questIdx];
        const code = $("#codeInput").value;
        const feedback = $("#feedback");

        const isCorrect = currentQuest.validate(code);

        feedback.className = "feedback " + (isCorrect ? "success" : "error");
        
        if (isCorrect) {
          player.farmcoins = (player.farmcoins || 0) + 10;
          player.currentQuest += 1;
          
          feedback.textContent = currentQuest.successMsg + " (+10 Farmcoins)";
          localStorage.setItem("farmbyte-player", JSON.stringify(player));
          
          setTimeout(() => {
            feedback.style.display = "none";
            updateUI();
            showView("dashboard");
          }, 1200);
        } else {
          feedback.textContent = "Koden stämmer inte helt ännu. Kolla ledtråden till höger och försök igen!";
        }
      };

      if (localStorage.getItem("farmbyte-player")) {
        enterApp();
      }
    