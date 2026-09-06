const $ = (s) => document.querySelector(s);

const ICONS = {
  home: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  learn: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  shop: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
  coin: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v10"/><path d="M15 9.5a2.5 2.5 0 0 0-5 0c0 2 5 2 5 4a2.5 2.5 0 0 1-5 0"/></svg>`,
  eye: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
  eyeOff: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`,
  play: `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,
  check: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`
};

$("#navHomeIcon").innerHTML = ICONS.home;
$("#navLearnIcon").innerHTML = ICONS.learn;
$("#navShopIcon").innerHTML = ICONS.shop;
$("#coinIconHeader").innerHTML = ICONS.coin;
$("#playIcon").innerHTML = ICONS.play;
$("#hintBtnIcon").innerHTML = ICONS.eye;

const SKINS = [
  { id: "farmer", name: "Klassisk Bonde", image: "farmers/farmer1.png", price: 0 },
  { id: "cowboy", name: "Cowboy", image: "farmers/farmer2.png", price: 10 },
  { id: "wizard", name: "Trollkarl", image: "farmers/farmer3.png", price: 20 },
  { id: "ninja", name: "Ninja", image: "farmers/farmer4.png", price: 30 },
  { id: "robot", name: "Robot", image: "farmers/farmer5.png", price: 40 },
  { id: "astronaut", name: "Astronaut", image: "farmers/farmer6.png", price: 50 },
  { id: "king", name: "Kung", image: "farmers/farmer7.png", price: 60 }
];

// 10 uppdrag med unika animationer för respektive slot när de låses upp
const QUESTS = [
  {
    id: 0,
    slotTitle: "Välkomsthälsning",
    animHtml: `<div style="display:flex; align-items:center; gap:4px"><span style="font-size:1.5rem" class="anim-pulse">👋</span></div>`,
    eyebrow: "UPPDRAG 01 · UTSKRIFT",
    title: "Välkommen till gården",
    desc: "Lär dig skriva ut din första rad kod! Använd System.out.println för att skriva ut meddelandet \"Välkommen!\".",
    file: "Welcome.java",
    template: `public class Welcome {\n  public static void main(String[] args) {\n    // Skriv din utskrift här\n    \n  }\n}`,
    hintDesc: "Använd <code>System.out.println(\"...\");</code> för att skriva ut text i konsolen.",
    hintExample: "Exempel:<br><code>System.out.println(\"Välkommen!\");</code>",
    validate: (code) => /System\.out\.println\s*\(\s*"Välkommen!"\s*\)/.test(code),
    successMsg: 'Snyggt! Din första utskrift i Java fungerade!'
  },
  {
    id: 1,
    slotTitle: "Namnskylt",
    animHtml: `<span class="anim-sway" style="font-size: 2rem">🪧</span>`,
    eyebrow: "UPPDRAG 02 · STRING-VARIABEL",
    title: "Döp din gård",
    desc: "Skapa en String-variabel som heter gardsNamn med valfritt namn och skriv ut den med System.out.println.",
    file: "FarmName.java",
    template: `public class FarmName {\n  public static void main(String[] args) {\n    // Skapa variabel och skriv ut\n    \n  }\n}`,
    hintDesc: "Skapa en textvariabel med <code>String gardsNamn = \"...\";</code> och skriv ut den med <code>System.out.println(gardsNamn);</code>.",
    hintExample: "Kodstruktur:<br><code>String gardsNamn = \"Solgården\";</code><br><code>System.out.println(gardsNamn);</code>",
    validate: (code) => /String\s+gardsNamn\s*=/.test(code) && /System\.out\.println\s*\(\s*gardsNamn\s*\)/.test(code),
    successMsg: 'Gården har nu fått ett officiellt namn!'
  },
  {
    id: 2,
    slotTitle: "Kohage",
    animHtml: `<div style="display:flex; gap:6px"><span class="anim-cow" style="font-size: 1.5rem">🐄</span><span class="anim-cow" style="font-size: 1.3rem; animation-delay: 0.6s">🐄</span></div>`,
    eyebrow: "UPPDRAG 03 · INT-VARIABEL",
    title: "Räkna korna",
    desc: "Skapa en heltalsvariabel (int) som heter antalKor och sätt den till 5. Skriv sedan ut den.",
    file: "CountCows.java",
    template: `public class CountCows {\n  public static void main(String[] args) {\n    // Skriv din kod här\n    \n  }\n}`,
    hintDesc: "Använd datatypen <code>int</code> för heltal och skriv sedan ut variabeln.",
    hintExample: "Kodstruktur:<br><code>int antalKor = 5;</code><br><code>System.out.println(antalKor);</code>",
    validate: (code) => /int\s+antalKor\s*=\s*5/.test(code) && /System\.out\.println\s*\(\s*antalKor\s*\)/.test(code),
    successMsg: 'Korna är räknade och införda i boken!'
  },
  {
    id: 3,
    slotTitle: "Mejeri",
    animHtml: `<span class="anim-bounce" style="font-size: 2rem">🥛</span>`,
    eyebrow: "UPPDRAG 04 · DOUBLE-VARIABEL",
    title: "Sätt pris på mjölken",
    desc: "Decimaltal sparas med double. Skapa en variabel double mjolkPris = 14.5; och skriv ut den.",
    file: "MilkPrice.java",
    template: `public class MilkPrice {\n  public static void main(String[] args) {\n    // Skriv din kod här\n    \n  }\n}`,
    hintDesc: "Skapa en decimaltalsvariabel med <code>double</code> och skriv ut den.",
    hintExample: "Kodstruktur:<br><code>double mjolkPris = 14.5;</code><br><code>System.out.println(mjolkPris);</code>",
    validate: (code) => /double\s+mjolkPris\s*=\s*14\.5/.test(code) && /System\.out\.println\s*\(\s*mjolkPris\s*\)/.test(code),
    successMsg: 'Mjölkpriset är inskrivet i butiken!'
  },
  {
    id: 4,
    slotTitle: "Låst grind",
    animHtml: `<span class="anim-pulse" style="font-size: 2rem">🔒</span>`,
    eyebrow: "UPPDRAG 05 · BOOLEAN-VARIABEL",
    title: "Är grinden stängd?",
    desc: "En boolean kan vara true eller false. Skapa variabeln boolean isClosed = true; och skriv ut den.",
    file: "GateStatus.java",
    template: `public class GateStatus {\n  public static void main(String[] args) {\n    // Skriv din kod här\n    \n  }\n}`,
    hintDesc: "Skapa en ja/nej-variabel med <code>boolean</code> satt till <code>true</code> och skriv ut den.",
    hintExample: "Kodstruktur:<br><code>boolean isClosed = true;</code><br><code>System.out.println(isClosed);</code>",
    validate: (code) => /boolean\s+isClosed\s*=\s*true/.test(code) && /System\.out\.println\s*\(\s*isClosed\s*\)/.test(code),
    successMsg: 'Grinden är tryggt låst!'
  },
  {
    id: 5,
    slotTitle: "Morotsland",
    animHtml: `<div style="display:flex; gap:3px"><span class="anim-bounce" style="font-size: 1.4rem">🥕</span><span class="anim-bounce" style="font-size: 1.4rem; animation-delay: 0.3s">🥕</span><span class="anim-bounce" style="font-size: 1.4rem; animation-delay: 0.6s">🥕</span></div>`,
    eyebrow: "UPPDRAG 06 · ENKEL IF-SATS",
    title: "Kolla morotslagret",
    desc: "Skapa int morotter = 10;. Skriv en if-sats som kollar om morotter > 0 och skriv ut \"Det finns morötter!\" i if-blocket.",
    file: "CheckCarrots.java",
    template: `public class CheckCarrots {\n  public static void main(String[] args) {\n    // Skriv din kod här\n    \n  }\n}`,
    hintDesc: "Använd <code>if (morotter > 0) { ... }</code> för att villkorligt skriva ut meddelandet.",
    hintExample: "Kodstruktur:<br><code>int morotter = 10;</code><br><code>if (morotter > 0) {</code><br>&nbsp;&nbsp;<code>System.out.println(\"Det finns morötter!\");</code><br><code>}</code>",
    validate: (code) => /int\s+morotter\s*=\s*10/.test(code) && /if\s*\(\s*morotter\s*>\s*0\s*\)/.test(code) && /System\.out\.println\s*\(\s*"Det finns morötter!"\s*\)/.test(code),
    successMsg: 'Morotslagret är kontrollräknat!'
  },
  {
    id: 6,
    slotTitle: "Regnbrunn",
    animHtml: `<span class="anim-rain" style="font-size: 2rem">🌧️</span>`,
    eyebrow: "UPPDRAG 07 · IF / ELSE",
    title: "Ska vi vattna?",
    desc: "Skapa boolean regnar = true;. Skriv en if-else-sats: om regnar är true skriv ut \"Vänta\", annars skriv ut \"Vattna!\".",
    file: "WaterCheck.java",
    template: `public class WaterCheck {\n  public static void main(String[] args) {\n    // Skriv din kod här\n    \n  }\n}`,
    hintDesc: "Använd <code>if (regnar) { ... } else { ... }</code>.",
    hintExample: "Kodstruktur:<br><code>boolean regnar = true;</code><br><code>if (regnar) {</code><br>&nbsp;&nbsp;<code>System.out.println(\"Vänta\");</code><br><code>} else {</code><br>&nbsp;&nbsp;<code>System.out.println(\"Vattna!\");</code><br><code>}</code>",
    validate: (code) => /boolean\s+regnar\s*=\s*true/.test(code) && /if\s*\(\s*regnar\s*\)/.test(code) && /else/.test(code) && /System\.out\.println/.test(code),
    successMsg: 'Smart beslut! Du sparar på vattnet när det regnar!'
  },
  {
    id: 7,
    slotTitle: "Traktorgarage",
    animHtml: `<span class="anim-tractor" style="font-size: 2.2rem">🚜</span>`,
    eyebrow: "UPPDRAG 08 · IF / ELSE MED JÄMFÖRELSE",
    title: "Kolla traktorbränslet",
    desc: "Skapa int bensin = 5;. Skriv en if-else-sats: Om bensin < 10 skriv ut \"Tanka!\", annars skriv ut \"Kör vidare!\".",
    file: "TractorFuel.java",
    template: `public class TractorFuel {\n  public static void main(String[] args) {\n    // Skriv din kod här\n    \n  }\n}`,
    hintDesc: "Använd jämförelseoperatorn <code><</code> i din <code>if</code>-sats.",
    hintExample: "Kodstruktur:<br><code>int bensin = 5;</code><br><code>if (bensin < 10) {</code><br>&nbsp;&nbsp;<code>System.out.println(\"Tanka!\");</code><br><code>} else {</code><br>&nbsp;&nbsp;<code>System.out.println(\"Kör vidare!\");</code><br><code>}</code>",
    validate: (code) => /int\s+bensin\s*=\s*5/.test(code) && /if\s*\(\s*bensin\s*<\s*10\s*\)/.test(code) && /else/.test(code),
    successMsg: 'Traktorn blev tankad i tid!'
  },
  {
    id: 8,
    slotTitle: "Äggsortering",
    animHtml: `<div style="display:flex; align-items:center; gap:2px"><span class="anim-bounce" style="font-size: 1.4rem">🐔</span><span class="anim-pulse" style="font-size: 1.1rem">🥚</span></div>`,
    eyebrow: "UPPDRAG 09 · IF / ELSE IF / ELSE",
    title: "Sortera äggen",
    desc: "Skapa int agg = 0;. Om agg == 0 skriv ut \"Inga ägg\", else if agg < 5 skriv ut \"Få ägg\", else skriv ut \"Många ägg\".",
    file: "EggSorter.java",
    template: `public class EggSorter {\n  public static void main(String[] args) {\n    // Skriv din kod här\n    \n  }\n}`,
    hintDesc: "Bygg en kedja med <code>if</code>, <code>else if</code> och <code>else</code>.",
    hintExample: "Kodstruktur:<br><code>int agg = 0;</code><br><code>if (agg == 0) { System.out.println(\"Inga ägg\"); }</code><br><code>else if (agg < 5) { System.out.println(\"Få ägg\"); }</code><br><code>else { System.out.println(\"Många ägg\"); }</code>",
    validate: (code) => /int\s+agg\s*=\s*0/.test(code) && /if\s*\(\s*agg\s*==\s*0\s*\)/.test(code) && /else\s+if\s*\(\s*agg\s*<\s*5\s*\)/.test(code) && /else/.test(code),
    successMsg: 'Äggsorteringen fungerar perfekt!'
  },
  {
    id: 9,
    slotTitle: "Tomatskörd",
    animHtml: `<div style="display:flex; gap:2px"><span class="anim-pulse" style="font-size: 1.3rem">🍅</span><span class="anim-pulse" style="font-size: 1.3rem; animation-delay: 0.3s">🍅</span><span class="anim-pulse" style="font-size: 1.3rem; animation-delay: 0.6s">🍅</span></div>`,
    eyebrow: "UPPDRAG 10 · ENKEL LOOP",
    title: "Skörda 5 tomater",
    desc: "Sista uppdraget! Skriv en enkel for-loop som räknar från 1 till 5 och skriver ut räknaren i konsolen.",
    file: "HarvestLoop.java",
    template: `public class HarvestLoop {\n  public static void main(String[] args) {\n    // Skriv din for-loop här\n    \n  }\n}`,
    hintDesc: "En <code>for</code>-loop ställs upp så här: <code>for (int i = 1; i <= 5; i++)</code>. Skriv ut <code>i</code> i loopen.",
    hintExample: "Kodstruktur:<br><code>for (int i = 1; i <= 5; i++) {</code><br>&nbsp;&nbsp;<code>System.out.println(i);</code><br><code>}</code>",
    validate: (code) => /for\s*\(\s*int\s+\w+\s*=\s*1\s*;\s*\w+\s*<=\s*5\s*;\s*\w+\+\+\s*\)/.test(code) && /System\.out\.println\s*\(/.test(code),
    successMsg: 'Grymt jobbat! Du har skördat alla 5 tomater och klarat grundkursen!'
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

// Funktion för att öppna profilbildspopupen när man klickar på en bild i butiken
window.openFarmerPreview = (image, name) => {
  let previewModal = $("#farmerPreviewModal");
  if (!previewModal) {
    previewModal = document.createElement("div");
    previewModal.id = "farmerPreviewModal";
    previewModal.className = "modal-overlay hidden";
    previewModal.innerHTML = `
      <img id="farmerPreviewImg" class="farmer-preview-img" src="" alt="" />
    `;
    document.body.appendChild(previewModal);

    // Stängs om du klickar var som helst utom på själva bilden
    previewModal.onclick = (e) => {
      if (e.target !== $("#farmerPreviewImg")) {
        closeFarmerPreview();
      }
    };
  }

  $("#farmerPreviewImg").src = image;
  $("#farmerPreviewImg").alt = name;
  previewModal.classList.remove("hidden");
};

window.closeFarmerPreview = () => {
  const previewModal = $("#farmerPreviewModal");
  if (previewModal) previewModal.classList.add("hidden");
};


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
      <div class="skin-icon" onclick="openFarmerPreview('${skin.image}', '${skin.name}')" title="Klicka för större bild">
        <img src="${skin.image}" alt="${skin.name}" />
      </div>
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
  $("#sideAvatar").innerHTML = `<img src="${activeSkinObj.image}" alt="${activeSkinObj.name}" />`;
  $("#greetingName").textContent = player.name;
  $("#topCoinCount").textContent = player.farmcoins;

  const displayLevel = Math.min(questIdx + 1, QUESTS.length);
  $("#levelNum").textContent = displayLevel < 10 ? "0" + displayLevel : displayLevel;
  $("#levelTitle").textContent = "Nivå " + displayLevel;
  $("#sideLevelText").textContent = `Nivå ${displayLevel} · Uppdrag ${displayLevel}`;
  
  const progressPercent = (questIdx / QUESTS.length) * 100;
  $("#levelBar").style.width = Math.max(progressPercent, 10) + "%";

  const fields = $("#farmFields");
  fields.className = "fields";
  fields.innerHTML = "";

  for (let i = 0; i < QUESTS.length; i++) {
    const slot = document.createElement("div");
    const isUnlocked = i < questIdx;
    const isCurrent = i === questIdx;

    if (isUnlocked) {
      slot.className = "farm-slot unlocked";
      slot.innerHTML = `
        <div style="font-size: 0.65rem; color: #2ecc71; font-weight: 700; position: absolute; top: 5px; left: 8px;">SLOT ${i + 1}</div>
        <div style="margin-top: 10px">${QUESTS[i].animHtml}</div>
        <div style="font-size: 0.72rem; color: #a0aec0; margin-top: 4px; font-weight: 600;">${QUESTS[i].slotTitle}</div>
      `;
    } else if (isCurrent) {
      slot.className = "farm-slot current";
      slot.innerHTML = `
        <div style="font-size: 0.65rem; color: #f1c40f; font-weight: 700; position: absolute; top: 5px; left: 8px;">SLOT ${i + 1}</div>
        <div class="anim-pulse" style="font-size: 1.8rem; margin-top: 8px">🌱</div>
        <div style="font-size: 0.72rem; color: #f1c40f; margin-top: 4px; font-weight: 600;">Pågår...</div>
      `;
    } else {
      slot.className = "farm-slot locked";
      slot.innerHTML = `
        <div style="font-size: 0.65rem; color: #718096; font-weight: 700; position: absolute; top: 5px; left: 8px;">SLOT ${i + 1}</div>
        <div style="font-size: 1.5rem; margin-top: 8px; opacity: 0.5">🔒</div>
        <div style="font-size: 0.72rem; color: #718096; margin-top: 4px;">Låst</div>
      `;
    }

    fields.appendChild(slot);
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
    $("#questDescription").textContent = "Du har klarat alla 10 grundläggande uppdrag i Java! Din gård är nu helt uppbyggd.";
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

  const feedback = $("#feedback");
  if (feedback) {
    feedback.style.display = "none";
  }
}

document.querySelectorAll("[data-view]").forEach((b) => {
  b.onclick = () => showView(b.dataset.view);
});

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

  feedback.style.display = "block";

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
    }, 1500);
  } else {
    feedback.textContent = "Koden stämmer inte helt ännu. Kolla ledtråden till höger och försök igen!";
  }
};

if (localStorage.getItem("farmbyte-player")) {
  enterApp();
}