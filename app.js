const MODES = [
  { id: "addition", title: "Sčítání", mark: "+", note: "Rychlé góly s plusy" },
  { id: "subtraction", title: "Odečítání", mark: "-", note: "Přesné střely s minusy" },
  { id: "multiplication", title: "Násobilka", mark: "x", note: "Trénink malé násobilky" },
  { id: "wordProblems", title: "Slovní úlohy", mark: "📝", note: "Krátké příběhy z tréninku" },
  { id: "geometry", title: "Geometrie", mark: "△", note: "Tvary, jednotky a čas" },
  { id: "english", title: "Angličtina", mark: "EN", note: "Slovíčka pro 2. a 3. třídu" },
  { id: "czech", title: "Český jazyk", mark: "ČJ", note: "Slova, slabiky a i/y" },
  { id: "science", title: "Prvouka", mark: "?", note: "Svět kolem nás" },
  { id: "mix", title: "Mix", mark: "*", note: "Všechno dohromady" }
];

const DIFFICULTIES = [
  { id: "easy", title: "Lehká", note: "2. třída, malé kroky" },
  { id: "medium", title: "Střední", note: "Přechod do 3. třídy" },
  { id: "hard", title: "Těžší", note: "Výzva pro 3. třídu" }
];

const MATCH_LENGTHS = [5, 7, 10];

const SKILLS = [
  { id: "addition", title: "Sčítání", mode: "addition" },
  { id: "subtraction", title: "Odečítání", mode: "subtraction" },
  { id: "multiplication", title: "Násobilka a dělení", mode: "multiplication" },
  { id: "wordProblems", title: "Slovní úlohy", mode: "wordProblems" },
  { id: "geometry", title: "Geometrie a jednotky", mode: "geometry" },
  { id: "english", title: "Angličtina", mode: "english" },
  { id: "czech", title: "Český jazyk", mode: "czech" },
  { id: "science", title: "Prvouka", mode: "science" }
];

const DEFAULT_SHIRT_ID = "academy-shirt";

const DEFAULT_SHIRT = {
  id: DEFAULT_SHIRT_ID,
  type: "shirt",
  name: "Akademický dres",
  text: "Lamiho základní tréninkový dres.",
  colors: ["#ff793f", "#ffffff", "#1864ab"]
};

const KEEPERS = [
  { id: "kuba", name: "Kuba Klidný", note: "Čte střely pomalu a férově.", minStars: 0 },
  { id: "max", name: "Max Skokan", note: "Skáče daleko k tyči.", minStars: 5 },
  { id: "viktor", name: "Viktor Rychlík", note: "Rychlý brankář pro velké zápasy.", minStars: 12 }
];

const CELEBRATIONS = [
  { id: "jump", name: "Výskok radosti", note: "Lami vyskočí a zvedne ruce.", minGoals: 0 },
  { id: "spin", name: "Otočka po gólu", note: "Oslava pro přesné střely.", minGoals: 10 },
  { id: "slide", name: "Skluz po trávě", note: "Finálová oslava před tribunou.", minGoals: 25 }
];

const REWARDS = [
  { id: "first-goal", type: "trophy", name: "První gól", text: "Lami má první trefu ve vitríně.", check: (p) => p.totalGoals >= 1 },
  { id: "streak-3", type: "trophy", name: "Super střela", text: "Tři správně za sebou.", check: (p) => p.bestStreak >= 3 },
  { id: "golden-ball", type: "trophy", name: "Zlatý míč", text: "Pět správně za sebou.", check: (p) => p.bestStreak >= 5 },
  { id: "english-rookie", type: "trophy", name: "Anglický střelec", text: "První úspěšný zápas v angličtině.", check: (p) => p.englishMatches >= 1 },
  { id: "czech-reader", type: "trophy", name: "Kapitán češtiny", text: "První zápas v českém jazyce.", check: (p) => p.czechMatches >= 1 },
  { id: "royal-white-shirt", type: "shirt", name: "Královsky bílý dres", text: "Čistý bílý styl bez loga a znaků.", colors: ["#f8fafc", "#dbeafe", "#f59e0b"], check: (p) => p.totalStars >= 3 },
  { id: "blue-red-shirt", type: "shirt", name: "Modro-červený dres", text: "Pruhovaný stadionový styl pro rychlé křídlo.", colors: ["#1d4ed8", "#b91c1c", "#f8fafc"], check: (p) => p.totalStars >= 8 },
  { id: "sky-shirt", type: "shirt", name: "Nebesky modrý dres", text: "Lehký dres pro přesné přihrávky.", colors: ["#7dd3fc", "#ffffff", "#1e293b"], check: (p) => p.totalGoals >= 18 },
  { id: "black-gold-shirt", type: "shirt", name: "Černo-zlatý dres", text: "Finálový styl pro velké zápasy.", colors: ["#111827", "#facc15", "#ffffff"], check: (p) => p.bestStreak >= 7 },
  { id: "spin-celebration", type: "trophy", name: "Otočka po gólu", text: "Odemčená oslava za 10 gólů.", check: (p) => p.totalGoals >= 10 },
  { id: "slide-celebration", type: "trophy", name: "Skluz po trávě", text: "Odemčená oslava za 25 gólů.", check: (p) => p.totalGoals >= 25 },
  { id: "weekly-cup", type: "trophy", name: "Týdenní pohár", text: "Tři dokončené tréninky v jednom týdnu.", check: (p) => weeklyCompletedCount(p) >= 3 },
  { id: "captain", type: "trophy", name: "Kapitán stadionu", text: "Nasbíráno 30 gólů.", check: (p) => p.totalGoals >= 30 }
];

const SHIRTS = [DEFAULT_SHIRT, ...REWARDS.filter((reward) => reward.type === "shirt")];

const LEVELS = [
  { level: 1, name: "Nováček v akademii", xp: 0 },
  { level: 2, name: "Rychlý střelec", xp: 350 },
  { level: 3, name: "Chytrý záložník", xp: 850 },
  { level: 4, name: "Kouzelný křídelník", xp: 1500 },
  { level: 5, name: "Kapitán stadionu", xp: 2400 }
];

const STADIUMS = [
  { name: "Školní hřiště", stars: 0, note: "První tréninky a radost ze hry." },
  { name: "Městský stadion", stars: 5, note: "Fanoušci už znají Vojtovo jméno." },
  { name: "Slunečný stadion", stars: 12, note: "Větší tribuny a jasnější světla." },
  { name: "Velké finále", stars: 22, note: "Finálová aréna pro kapitána." }
];

const WORDS = [
  ["dog", "pes", "animals", "easy"], ["cat", "kočka", "animals", "easy"], ["bird", "pták", "animals", "easy"],
  ["fish", "ryba", "animals", "easy"], ["horse", "kůň", "animals", "medium"], ["rabbit", "králík", "animals", "medium"],
  ["red", "červená", "colors", "easy"], ["blue", "modrá", "colors", "easy"], ["green", "zelená", "colors", "easy"],
  ["yellow", "žlutá", "colors", "easy"], ["black", "černá", "colors", "medium"], ["white", "bílá", "colors", "medium"],
  ["one", "jedna", "numbers", "easy"], ["two", "dva", "numbers", "easy"], ["three", "tři", "numbers", "easy"],
  ["seven", "sedm", "numbers", "medium"], ["ten", "deset", "numbers", "medium"],
  ["mum", "maminka", "family", "easy"], ["dad", "tatínek", "family", "easy"], ["brother", "bratr", "family", "medium"],
  ["sister", "sestra", "family", "medium"], ["school", "škola", "school", "easy"], ["teacher", "učitel", "school", "medium"],
  ["book", "kniha", "school", "easy"], ["pen", "pero", "school", "easy"], ["pencil", "tužka", "school", "medium"],
  ["apple", "jablko", "food", "easy"], ["banana", "banán", "food", "easy"], ["milk", "mléko", "food", "easy"],
  ["water", "voda", "food", "easy"], ["bread", "chleba", "food", "medium"], ["breakfast", "snídaně", "food", "hard"],
  ["ball", "míč", "toys", "easy"], ["car", "auto", "toys", "easy"], ["train", "vlak", "toys", "medium"],
  ["football", "fotbal", "sport", "medium"], ["goal", "gól", "sport", "medium"], ["team", "tým", "sport", "hard"],
  ["hand", "ruka", "body", "medium"], ["eye", "oko", "body", "medium"], ["head", "hlava", "body", "medium"],
  ["run", "běžet", "verbs", "medium"], ["jump", "skákat", "verbs", "medium"], ["read", "číst", "verbs", "hard"],
  ["write", "psát", "verbs", "hard"]
];

const ENGLISH_QUESTIONS = [
  q("english", "easy", "Co znamená hello?", ["ahoj", "sbohem", "prosím", "děkuji"], "ahoj", "Hello znamená ahoj."),
  q("english", "easy", "Co znamená thank you?", ["děkuji", "ahoj", "pes", "škola"], "děkuji", "Thank you znamená děkuji."),
  q("english", "easy", "Jak řekneš anglicky ahoj?", ["hello", "red", "book", "milk"], "hello", "Ahoj je anglicky hello."),
  q("english", "easy", "Vyber správně poskládanou větu: Já mám míč.", ["I have a ball.", "Have I ball a.", "I ball have a.", "A ball I have."], "I have a ball.", "Správně je I have a ball."),
  q("english", "easy", "Co odpovíš na Hello?", ["Hello!", "Blue.", "Seven.", "Dog."], "Hello!", "Na pozdrav Hello odpovíme třeba Hello!"),
  q("english", "easy", "Doplň: I have a ___.", ["ball", "blue", "jump", "seven"], "ball", "Do věty patří věc: I have a ball."),
  q("english", "easy", "Vyber dvojici, která k sobě patří.", ["dog - pes", "red - pes", "school - mléko", "cat - modrá"], "dog - pes", "Dog znamená pes."),
  q("english", "easy", "Co odpovíš na Thank you?", ["You're welcome.", "I am red.", "Dog.", "Seven."], "You're welcome.", "Na Thank you můžeme odpovědět You're welcome."),
  q("english", "easy", "Vyber správně: Jsem Vojta.", ["I am Vojta.", "I have Vojta.", "I see Vojta.", "I like Vojta."], "I am Vojta.", "Jsem Vojta je I am Vojta."),
  q("english", "medium", "Co znamená I am Vojta?", ["Jsem Vojta.", "Mám Vojtu.", "Vidím Vojtu.", "Ahoj Vojto."], "Jsem Vojta.", "I am Vojta znamená Jsem Vojta."),
  q("english", "medium", "Co znamená I have a ball?", ["Mám míč.", "Jím jablko.", "Čtu knihu.", "Vidím psa."], "Mám míč.", "I have a ball znamená Mám míč."),
  q("english", "medium", "Vyber správný překlad: Mám psa.", ["I have a dog.", "I am a dog.", "I see red.", "I read a book."], "I have a dog.", "Mám psa je anglicky I have a dog."),
  q("english", "medium", "Vyber správně poskládanou větu: Já vidím kočku.", ["I see a cat.", "See I cat a.", "I cat see a.", "A see I cat."], "I see a cat.", "Správně je I see a cat."),
  q("english", "medium", "Co odpovíš na How are you?", ["I'm fine.", "It is red.", "I have seven.", "This is a pen."], "I'm fine.", "Na How are you? můžeme odpovědět I'm fine."),
  q("english", "medium", "Doplň: I like ___.", ["football", "yellow", "seven", "teacher"], "football", "I like football znamená Mám rád fotbal."),
  q("english", "medium", "Vyber správný pokyn.", ["Touch your head!", "Eat your book!", "Read your foot!", "Drink your chair!"], "Touch your head!", "Touch your head znamená Dotkni se hlavy."),
  q("english", "medium", "Vyber správně množné číslo: one dog, two ___.", ["dogs", "dog", "doges", "doggy"], "dogs", "U pravidelného množného čísla přidáme s: dogs."),
  q("english", "hard", "Co znamená Can you jump?", ["Umíš skákat?", "Umíš číst?", "Máš míč?", "Jsi učitel?"], "Umíš skákat?", "Can you jump? znamená Umíš skákat?"),
  q("english", "hard", "Vyber správný překlad: Rád hraju fotbal.", ["I like football.", "I have football.", "I am football.", "I read football."], "I like football.", "Rád hraju fotbal lze jednoduše říct I like football."),
  q("english", "hard", "Vyber správně poskládanou otázku.", ["Can you jump?", "You can jump?", "Jump you can?", "Can jump you?"], "Can you jump?", "Otázka začíná Can: Can you jump?"),
  q("english", "hard", "Mini situace: Potkáš kamaráda. Co řekneš?", ["Hello!", "I am a chair.", "It is milk.", "Seven dogs."], "Hello!", "Při setkání se hodí Hello!"),
  q("english", "hard", "Co znamená I can run and jump?", ["Umím běhat a skákat.", "Mám červený míč.", "Čtu a píšu.", "Jím a piju."], "Umím běhat a skákat.", "I can run and jump znamená Umím běhat a skákat."),
  q("english", "hard", "Vyber správně: Mám rád jablka.", ["I like apples.", "I likes apple.", "I have apple red.", "I am apples."], "I like apples.", "Mám rád jablka je I like apples.")
];

const SCIENCE_QUESTIONS = [
  q("science", "easy", "Kolik má pes nohou?", ["2", "4", "6", "8"], "4", "Pes má čtyři nohy."),
  q("science", "easy", "Které roční období je po zimě?", ["léto", "jaro", "podzim", "zima"], "jaro", "Po zimě přichází jaro."),
  q("science", "easy", "Čím dýcháme?", ["očima", "plícemi", "rukama", "koleny"], "plícemi", "Dýcháme plícemi."),
  q("science", "easy", "Kde se učíme a máme třídu?", ["v obchodě", "ve škole", "v lese", "na nádraží"], "ve škole", "Učíme se ve škole."),
  q("science", "easy", "Které pravidlo platí při přecházení silnice?", ["běžet bez koukání", "rozhlédnout se", "zavřít oči", "stát uprostřed"], "rozhlédnout se", "Před přecházením se rozhlédneme."),
  q("science", "easy", "Kolik měsíců má jeden rok?", ["7", "10", "12", "24"], "12", "Rok má 12 měsíců."),
  q("science", "easy", "Který člen rodiny je rodič?", ["maminka", "spolužák", "soused", "trenér"], "maminka", "Maminka je rodič."),
  q("science", "medium", "Co potřebuje rostlina k růstu?", ["vodu a světlo", "míč", "sešit", "boty"], "vodu a světlo", "Rostlina potřebuje vodu a světlo."),
  q("science", "medium", "Která část těla nám pomáhá vidět?", ["ucho", "oko", "nos", "ruka"], "oko", "Vidíme očima."),
  q("science", "medium", "Které zvíře dává mléko?", ["kachna", "kráva", "ryba", "pták"], "kráva", "Kráva nám dává mléko."),
  q("science", "medium", "Který dopravní prostředek jezdí po kolejích?", ["vlak", "loď", "letadlo", "kolo"], "vlak", "Po kolejích jezdí vlak."),
  q("science", "medium", "Která světová strana je na mapě obvykle nahoře?", ["jih", "sever", "východ", "západ"], "sever", "Na mapě bývá nahoře sever."),
  q("science", "medium", "Co patří do živé přírody?", ["kámen", "strom", "lavice", "silnice"], "strom", "Strom roste, patří do živé přírody."),
  q("science", "medium", "Kdo pomáhá při požáru?", ["hasiči", "pekař", "knihovník", "fotbalista"], "hasiči", "Při požáru pomáhají hasiči."),
  q("science", "medium", "Jak se jmenuje stát, ve kterém žijeme?", ["Česká republika", "Itálie", "Polsko", "Španělsko"], "Česká republika", "Žijeme v České republice."),
  q("science", "hard", "Proč si myjeme ruce?", ["aby byly špinavé", "kvůli bacilům", "aby nerostly", "kvůli barvě"], "kvůli bacilům", "Ruce si myjeme, abychom odstranili bacily."),
  q("science", "hard", "Které zvíře žije ve vodě?", ["kůň", "ryba", "kráva", "slepice"], "ryba", "Ryba žije ve vodě."),
  q("science", "hard", "Co ukazuje mapa?", ["jen pohádky", "místa a cesty", "jen jídlo", "jen počasí"], "místa a cesty", "Mapa ukazuje místa, cesty a krajinu."),
  q("science", "hard", "Která krajina má hodně stromů?", ["les", "parkoviště", "náměstí", "křižovatka"], "les", "Les má hodně stromů."),
  q("science", "hard", "Co je minulost?", ["co se teprve stane", "co se už stalo", "pravá strana", "část těla"], "co se už stalo", "Minulost je to, co se už stalo."),
  q("science", "hard", "Které telefonní číslo voláme při nebezpečí v EU?", ["112", "1500", "333", "800"], "112", "Číslo 112 je tísňová linka.")
];

const GEOMETRY_QUESTIONS = [
  q("geometry", "easy", "Kolik stran má trojúhelník?", ["2", "3", "4", "5"], "3", "Trojúhelník má tři strany."),
  q("geometry", "easy", "Který tvar má čtyři stejně dlouhé strany?", ["kruh", "čtverec", "trojúhelník", "ovál"], "čtverec", "Čtverec má čtyři stejně dlouhé strany."),
  q("geometry", "easy", "Kolik centimetrů má 1 metr?", ["10", "50", "100", "1000"], "100", "1 metr má 100 centimetrů."),
  q("geometry", "easy", "Kolik minut má 1 hodina?", ["30", "45", "60", "100"], "60", "1 hodina má 60 minut."),
  q("geometry", "medium", "Úsečka má délku 5 cm a druhá 3 cm. Kolik cm mají dohromady?", ["7", "8", "9", "10"], "8", "5 cm + 3 cm = 8 cm."),
  q("geometry", "medium", "Obdélník má délky stran 4 cm a 2 cm. Jaký má obvod?", ["6 cm", "8 cm", "12 cm", "16 cm"], "12 cm", "Obvod je 4 + 2 + 4 + 2 = 12 cm."),
  q("geometry", "medium", "Který útvar nemá žádný roh?", ["čtverec", "trojúhelník", "kruh", "obdélník"], "kruh", "Kruh nemá žádný roh."),
  q("geometry", "medium", "Kolik milimetrů má 1 centimetr?", ["5", "10", "100", "1000"], "10", "1 centimetr má 10 milimetrů."),
  q("geometry", "hard", "Čtverec má stranu 6 cm. Jaký má obvod?", ["12 cm", "18 cm", "24 cm", "36 cm"], "24 cm", "Obvod čtverce je 6 + 6 + 6 + 6 = 24 cm."),
  q("geometry", "hard", "Která čára má začátek, ale pokračuje dál?", ["úsečka", "polopřímka", "kruh", "bod"], "polopřímka", "Polopřímka má začátek a pokračuje dál."),
  q("geometry", "hard", "Kolik metrů je 1 kilometr?", ["10", "100", "1000", "10 000"], "1000", "1 kilometr má 1000 metrů."),
  q("geometry", "hard", "Vzor je 5, 10, 15, 20, ?. Které číslo chybí?", ["21", "24", "25", "30"], "25", "Přičítáme vždy 5, další číslo je 25.")
];

const CZECH_QUESTIONS = [
  q("czech", "easy", "Které slovo začíná na písmeno M?", ["máma", "pes", "auto", "kolo"], "máma", "Slovo máma začíná na M."),
  q("czech", "easy", "Kolik slabik má slovo kočka?", ["1", "2", "3", "4"], "2", "Koč-ka má dvě slabiky."),
  q("czech", "easy", "Vyber slovo se dvěma slabikami.", ["les", "škola", "vlak", "dům"], "škola", "Ško-la má dvě slabiky."),
  q("czech", "easy", "Které slovo je napsané správně?", ["pes", "pez", "bes", "pec"], "pes", "Správně píšeme pes."),
  q("czech", "easy", "Doplň správně: ž_rafa", ["i", "y", "í", "ý"], "i", "Po měkkém ž píšeme i: žirafa."),
  q("czech", "easy", "Doplň správně: r_ba", ["i", "y", "í", "ý"], "y", "Po tvrdém r obvykle píšeme y: ryba."),
  q("czech", "easy", "Doplň správně: k_ň", ["u", "ú", "ů", "ou"], "ů", "Uprostřed slova bývá ů: kůň."),
  q("czech", "easy", "Doplň správně: _terý", ["u", "ú", "ů", "ou"], "ú", "Na začátku slova píšeme ú: úterý."),
  q("czech", "easy", "Kolik slov má věta: Lami kopl míč.", ["2", "3", "4", "5"], "3", "Věta má tři slova: Lami, kopl, míč."),
  q("czech", "easy", "Které slovo je jméno osoby?", ["Vojta", "lavice", "míč", "běží"], "Vojta", "Vojta je jméno osoby."),
  q("czech", "easy", "Které slovo se rýmuje se slovem míč?", ["klíč", "brána", "pes", "škola"], "klíč", "Míč a klíč se rýmují."),
  q("czech", "easy", "Vyber správně poskládanou větu.", ["Lami kopl míč.", "Míč Lami kopl.", "Kopl míč Lami.", "Lami míč."], "Lami kopl míč.", "Věta Lami kopl míč dává smysl a má tečku."),
  q("czech", "easy", "Najdi vetřelce: pes, kočka, míč, kůň.", ["pes", "kočka", "míč", "kůň"], "míč", "Pes, kočka a kůň jsou zvířata. Míč je věc."),
  q("czech", "easy", "Oprav začátek věty: vojta běží.", ["Vojta běží.", "vojta běží.", "Vojta běží", "vojta Běží."], "Vojta běží.", "Věta začíná velkým písmenem a končí tečkou."),
  q("czech", "medium", "Doplň správně: m_lý pes", ["a", "e", "i", "o"], "a", "Správně je malý pes."),
  q("czech", "medium", "Které slovo je podstatné jméno?", ["běží", "modrý", "lavice", "rychle"], "lavice", "Lavice je název věci, tedy podstatné jméno."),
  q("czech", "medium", "Které slovo je sloveso?", ["skáče", "veselý", "míč", "škola"], "skáče", "Sloveso říká, co někdo dělá. Skáče je sloveso."),
  q("czech", "medium", "Vyber správné rozdělení na slabiky.", ["la-vi-ce", "lav-ice", "l-a-vice", "lavi-ce"], "la-vi-ce", "Slovo lavice dělíme la-vi-ce."),
  q("czech", "medium", "Doplň správně: ž_žala", ["i", "y", "í", "ý"], "í", "Po měkkém ž píšeme í: žížala."),
  q("czech", "medium", "Doplň správně: ch_ba", ["i", "y", "í", "ý"], "y", "Po tvrdém ch píšeme y: chyba."),
  q("czech", "medium", "Doplň správně: Lami _kočil pro míč.", ["s", "z"], "s", "Správně je skočil, protože jde o pohyb skokem."),
  q("czech", "medium", "Doplň správně: Vojta _vedl ruku.", ["s", "z"], "z", "Správně je zvedl."),
  q("czech", "medium", "Vyber správnou větu.", ["Vojta zkopl míč.", "Vojta skopl míč.", "Vojta skopl branku.", "Vojta zkopl domů."], "Vojta skopl míč.", "Správně je skopl míč, tedy kopl dolů nebo pryč."),
  q("czech", "medium", "Doplň správně: d_vka běží.", ["i", "y", "í", "ý"], "í", "Správně je dívka."),
  q("czech", "medium", "Které slovo je opačné ke slovu malý?", ["velký", "rychlý", "kulatý", "zelený"], "velký", "Opačné slovo k malý je velký."),
  q("czech", "medium", "Vyber větu oznamovací.", ["Kde je míč?", "Lami běží.", "Kopej!", "Hurá!"], "Lami běží.", "Věta oznamovací něco oznamuje."),
  q("czech", "medium", "Jaké znaménko patří za otázku?", [".", "?", "!", ","], "?", "Za otázku píšeme otazník."),
  q("czech", "medium", "Které slovo je nadřazené pro pes, kočka, kůň?", ["zvířata", "barvy", "hračky", "jídlo"], "zvířata", "Pes, kočka a kůň jsou zvířata."),
  q("czech", "medium", "Ve větě „Rychlý Lami běží.“ najdi sloveso.", ["Rychlý", "Lami", "běží", "věta"], "běží", "Sloveso říká, co někdo dělá. Lami běží."),
  q("czech", "medium", "Ve větě „Rychlý Lami běží.“ najdi přídavné jméno.", ["Rychlý", "Lami", "běží", "míč"], "Rychlý", "Přídavné jméno říká jaký. Rychlý Lami."),
  q("czech", "medium", "Vyber správné pořadí příběhu.", ["Lami běží. Lami kopne. Padl gól.", "Padl gól. Lami běží. Lami kopne.", "Lami kopne. Padl gól. Lami běží.", "Lami spí. Padl gól. Lami běží."], "Lami běží. Lami kopne. Padl gól.", "Nejdřív běží, potom kopne, potom padne gól."),
  q("czech", "medium", "Najdi slovo podobného významu ke slovu rychlý.", ["svižný", "pomalý", "malý", "kulatý"], "svižný", "Rychlý a svižný mají podobný význam."),
  q("czech", "medium", "Oprav chybu ve větě.", ["Vojta kopl míč.", "vojta kopl míč.", "Vojta kopl míč", "Vojta kopl Míč."], "Vojta kopl míč.", "Jméno začíná velkým písmenem a věta končí tečkou."),
  q("czech", "hard", "Doplň správně: Vojta má čisté zub_.", ["i", "y", "í", "ý"], "y", "Správně je zuby, protože zub je tvrdé souhláskové slovo."),
  q("czech", "hard", "Která věta začíná velkým písmenem a končí tečkou?", ["lami běží.", "Lami běží", "Lami běží.", "lami běží"], "Lami běží.", "Věta začíná velkým písmenem a končí tečkou."),
  q("czech", "hard", "Které slovo je přídavné jméno?", ["brána", "rychlý", "kopnout", "Lami"], "rychlý", "Přídavné jméno říká, jaký někdo nebo něco je."),
  q("czech", "hard", "Doplň správně: Na hřišti běhal_ děti.", ["i", "y", "a", "o"], "y", "Správně je běhaly děti."),
  q("czech", "hard", "Vyber vyjmenované slovo po B.", ["být", "bít", "bílek", "bílý"], "být", "Být je vyjmenované slovo po B."),
  q("czech", "hard", "Doplň správně: Vojta chce b_t brankářem.", ["i", "y", "í", "ý"], "ý", "Správně je být, vyjmenované slovo po B."),
  q("czech", "hard", "Doplň správně: Lami trefil m_č.", ["i", "y", "í", "ý"], "í", "Správně je míč, píšeme í."),
  q("czech", "hard", "Vyber vyjmenované slovo po L.", ["lyže", "lípa", "list", "lístek"], "lyže", "Lyže patří mezi vyjmenovaná slova po L."),
  q("czech", "hard", "Doplň správně: V zimě pojedeme na l_že.", ["i", "y", "í", "ý"], "y", "Správně je lyže, vyjmenované slovo po L."),
  q("czech", "hard", "Vyber vyjmenované slovo po M.", ["myš", "míč", "miska", "mít"], "myš", "Myš patří mezi vyjmenovaná slova po M."),
  q("czech", "hard", "Doplň správně: Na hřišti běžela m_š.", ["i", "y", "í", "ý"], "y", "Správně je myš, vyjmenované slovo po M."),
  q("czech", "hard", "Vyber vyjmenované slovo po P.", ["pyl", "pila", "písek", "pít"], "pyl", "Pyl patří mezi vyjmenovaná slova po P."),
  q("czech", "hard", "Doplň správně: Včela nese p_l.", ["i", "y", "í", "ý"], "y", "Správně je pyl, vyjmenované slovo po P."),
  q("czech", "hard", "Vyber vyjmenované slovo po S.", ["sýr", "síla", "sítko", "sípá"], "sýr", "Sýr patří mezi vyjmenovaná slova po S."),
  q("czech", "hard", "Doplň správně: Vojta jí s_r.", ["i", "y", "í", "ý"], "ý", "Správně je sýr, vyjmenované slovo po S."),
  q("czech", "hard", "Vyber vyjmenované slovo po V.", ["vysoký", "víno", "vidět", "vítr"], "vysoký", "Vysoký patří mezi vyjmenovaná slova po V."),
  q("czech", "hard", "Doplň správně: Brána je v_soká.", ["i", "y", "í", "ý"], "y", "Správně je vysoká, příbuzné k vyjmenovanému slovu vysoký."),
  q("czech", "hard", "Vyber vyjmenované slovo po Z.", ["jazyk", "zítra", "zima", "zisk"], "jazyk", "Jazyk patří mezi vyjmenovaná slova po Z."),
  q("czech", "hard", "Doplň správně: Český jaz_k.", ["i", "y", "í", "ý"], "y", "Správně je jazyk, vyjmenované slovo po Z."),
  q("czech", "hard", "Co znamená slovo vír?", ["točící se voda nebo vzduch", "noční pták", "část ruky", "druh sýra"], "točící se voda nebo vzduch", "Vír je točící se voda nebo vzduch. Výr je pták."),
  q("czech", "hard", "Doplň správně: Nad lesem letěl v_r.", ["i", "y", "í", "ý"], "ý", "Správně je výr, protože výr je pták."),
  q("czech", "hard", "Vyber větu rozkazovací.", ["Přihraj míč!", "Kde je míč?", "Lami běží.", "Padl gól."], "Přihraj míč!", "Rozkazovací věta může končit vykřičníkem."),
  q("czech", "hard", "Ve větě „Vojta nahrál Lamimu.“ najdi podstatné jméno.", ["Vojta", "nahrál", "Lamimu", "věta"], "Vojta", "Vojta je název osoby, tedy podstatné jméno."),
  q("czech", "hard", "Vyber nejlepší nadpis krátkého příběhu: Lami běžel. Kopl míč. Padl gól.", ["Lamiho gól", "Ztracená kniha", "Výlet do lesa", "Mléko a chleba"], "Lamiho gól", "Příběh je o Lamiho gólu."),
  q("czech", "hard", "Která dvojice jsou protiklady?", ["rychlý - pomalý", "míč - brána", "pes - kočka", "škola - třída"], "rychlý - pomalý", "Rychlý a pomalý jsou protiklady.")
];

const state = {
  screen: "start",
  playerName: "Vojta",
  mode: "addition",
  difficulty: "easy",
  matchLength: 5,
  focusSkill: null,
  specialMode: null,
  selectedKeeper: "kuba",
  selectedCelebration: "jump",
  currentRound: 0,
  question: null,
  questions: [],
  selectedAnswer: null,
  isLocked: false,
  shot: "",
  score: 0,
  goals: 0,
  correct: 0,
  wrong: 0,
  streak: 0,
  bestStreak: 0,
  stars: 0,
  feedback: null,
  newRewards: [],
  usedQuestionKeys: [],
  commentary: "Lami si rovná míč na značku.",
  progress: loadProgress()
};

function q(category, difficulty, question, options, correctAnswer, explanation) {
  return { category, difficulty, question, options, correctAnswer, explanation };
}

function loadProgress() {
  const fallback = {
    xp: 0,
    totalStars: 0,
    totalGoals: 0,
    bestStreak: 0,
    englishMatches: 0,
    czechMatches: 0,
    rewards: [],
    selectedShirt: DEFAULT_SHIRT_ID,
    selectedCelebration: "jump",
    dailyChallenge: null,
    weeklyCup: { week: currentWeekKey(), completed: 0 },
    championships: {},
    skills: {}
  };
  try {
    const saved = JSON.parse(localStorage.getItem("lami-progress"));
    return {
      ...fallback,
      ...saved,
      skills: { ...fallback.skills, ...(saved?.skills || {}) }
    };
  } catch {
    return fallback;
  }
}

function saveProgress() {
  localStorage.setItem("lami-progress", JSON.stringify(state.progress));
}

function render() {
  const app = document.querySelector("#app");
  if (state.screen === "start") app.innerHTML = startScreen();
  if (state.screen === "setup") app.innerHTML = setupScreen();
  if (state.screen === "match") app.innerHTML = matchScreen();
  if (state.screen === "end") app.innerHTML = endScreen();
  if (state.screen === "trophies") app.innerHTML = trophiesScreen();
  if (state.screen === "championships") app.innerHTML = championshipsScreen();
  bindEvents();
}

function shell(content, actions = "") {
  const level = getLevel();
  return `
    <section class="screen">
      <header class="topbar">
        <div class="brand">
          <div class="brand-mark">L</div>
          <div>
            <h1>Lamiho Fotbalová Škola</h1>
            <p>Level ${level.level}: ${level.name}</p>
          </div>
        </div>
        <div class="score-row">
          <span class="score-pill">Góly celkem: ${state.progress.totalGoals}</span>
          <span class="score-pill">Hvězdy: ${state.progress.totalStars}</span>
        </div>
        ${actions}
      </header>
      ${content}
    </section>
  `;
}

function startScreen() {
  return shell(`
    <section class="hero">
      <div class="hero-copy">
        <h2>Ahoj Vojto, jde se na bránu!</h2>
        <p>Lami, kouzelný křídelník, dneska trénuje počítání, češtinu, angličtinu a prvouku. Každá otázka je jedna střela.</p>
        <div class="hero-actions">
          <button class="primary-button" data-action="setup">Hrát zápas</button>
          <button class="ghost-button" data-action="weakness">Procvičit slabiny</button>
          <button class="ghost-button" data-action="daily">Denní výzva</button>
          <button class="ghost-button" data-action="championships">Mistrovství</button>
          <button class="ghost-button" data-action="trophies">Moje trofeje</button>
        </div>
      </div>
      ${fieldMarkup()}
    </section>
    <section class="panel">
      <h2>Album dovedností</h2>
      <div class="skill-grid">
        ${SKILLS.map(skillCard).join("")}
      </div>
    </section>
    <section class="panel">
      <h2>Dnešní výzva</h2>
      ${dailyChallengeCard()}
    </section>
  `);
}

function setupScreen() {
  return shell(`
    <section class="panel">
      <h2>Vyber trénink</h2>
      <div class="select-grid">
        ${MODES.map((mode) => `
          <button class="choice-button ${state.mode === mode.id ? "selected" : ""}" data-mode="${mode.id}">
            <strong>${mode.mark} ${mode.title}</strong>
            <span>${mode.note}</span>
          </button>
        `).join("")}
      </div>
    </section>
    <section class="panel">
      <h2>Soupeř v bráně</h2>
      <div class="select-grid">
        ${KEEPERS.map(keeperCard).join("")}
      </div>
    </section>
    <section class="panel">
      <h2>Obtížnost</h2>
      <div class="select-grid">
        ${DIFFICULTIES.map((difficulty) => `
          <button class="choice-button ${state.difficulty === difficulty.id ? "selected" : ""}" data-difficulty="${difficulty.id}">
            <strong>${difficulty.title}</strong>
            <span>${difficulty.note}</span>
          </button>
        `).join("")}
      </div>
      <div class="chips">
        ${MATCH_LENGTHS.map((length) => `
          <button class="chip ${state.matchLength === length ? "active" : ""}" data-length="${length}">${length} střel</button>
        `).join("")}
      </div>
      <div class="hero-actions" style="margin-top:16px">
        <button class="primary-button" data-action="start">Začít zápas</button>
        <button class="ghost-button" data-action="home">Zpět</button>
      </div>
    </section>
  `);
}

function matchScreen() {
  const progress = ((state.currentRound + 1) / state.matchLength) * 100;
  const categoryTitle = modeTitle(state.question.category);
  return shell(`
    <section class="match-layout">
      ${fieldMarkup(state.shot)}
      <aside class="panel question-panel">
        <div class="commentary">${state.commentary}</div>
        <div class="progress-track"><div class="progress-fill" style="width:${progress}%"></div></div>
        <p class="round-label">Střela ${state.currentRound + 1} z ${state.matchLength} • ${categoryTitle} • ${currentKeeper().name}</p>
        <h2 class="question">${state.question.question}</h2>
        <div class="answers">
          ${state.question.options.map((option) => answerButton(option)).join("")}
        </div>
        ${state.feedback ? feedbackMarkup() : ""}
        <div class="match-actions">
          ${state.feedback ? `<button class="primary-button" data-action="next">Další střela</button>` : ""}
          <button class="ghost-button" data-action="setup">Změnit oblast</button>
          <button class="ghost-button" data-action="home">Domů</button>
        </div>
      </aside>
    </section>
  `, `
    <div class="score-row">
      <span class="score-pill">Skóre: ${state.score}</span>
      <span class="score-pill">Góly: ${state.goals}</span>
      <span class="score-pill">Série: ${state.streak}</span>
      <button class="ghost-button top-action" data-action="home">Domů</button>
    </div>
  `);
}

function fieldMarkup(shot = "") {
  const streakClass = state.streak >= 3 ? " hot-crowd" : "";
  const fieldClass = shot ? `field ${shot}${streakClass}` : `field${streakClass}`;
  return `
    <div class="${fieldClass}" aria-hidden="true">
      <div class="stadium-roof"></div>
      <div class="floodlights left"><span></span><span></span><span></span></div>
      <div class="floodlights right"><span></span><span></span><span></span></div>
      <div class="stadium-ribbon">
        <span>LAMI</span>
        <span>VOJTO</span>
        <span>TRÉNINK</span>
        <span>GÓLY</span>
      </div>
      <div class="stands">
        ${Array.from({ length: 36 }, (_, index) => `<span style="--i:${index}"></span>`).join("")}
      </div>
      <div class="flags">
        ${Array.from({ length: 7 }, (_, index) => `<span style="--i:${index}"></span>`).join("")}
      </div>
      <div class="ad-boards">
        <span>MATIKA</span>
        <span>ČEŠTINA</span>
        <span>ENGLISH</span>
        <span>PRVOUKA</span>
      </div>
      <div class="goal"></div>
      <div class="score-flash">${shot === "goal-shot" ? "GÓL!" : shot === "save-shot" ? "CHYCENO" : ""}</div>
      <div class="keeper keeper-${currentKeeper().id}"></div>
      <div class="player celebration-${currentCelebration().id}" style="${playerShirtStyle()}"><div class="arms"></div><div class="legs"></div></div>
      <div class="flight-path"><span></span><span></span><span></span></div>
      <div class="ball ${shot}"><span></span></div>
      <div class="confetti">
        ${Array.from({ length: 18 }, (_, index) => `<span style="--i:${index}"></span>`).join("")}
      </div>
    </div>
  `;
}

function answerButton(option) {
  const answerClass = state.feedback && sameAnswer(option, state.question.correctAnswer) ? "correct" :
    state.feedback && sameAnswer(option, state.selectedAnswer) ? "wrong" : "";
  return `<button class="answer-button ${answerClass}" data-answer="${escapeAttr(option)}" ${state.isLocked ? "disabled" : ""}>${option}</button>`;
}

function feedbackMarkup() {
  return `
    <div class="feedback ${state.feedback.type}">
      <h3>${state.feedback.title}</h3>
      <div>${state.feedback.message}</div>
    </div>
  `;
}

function endScreen() {
  return shell(`
    <section class="panel">
      <h2>Skvělý zápas, Vojto!</h2>
      <div class="stars">${"★".repeat(state.stars)}${"☆".repeat(3 - state.stars)}</div>
      <p><strong>${state.goals} gólů z ${state.matchLength}</strong>, nejlepší série ${state.bestStreak}, skóre ${state.score}.</p>
      <p>${endMessage()}</p>
      ${specialResultMarkup()}
      <h3>Dovednosti po zápase</h3>
      <div class="skill-grid compact">
        ${SKILLS.map(skillCard).join("")}
      </div>
      ${state.newRewards.length ? `<h3>Nová odměna</h3><div class="trophy-grid">${state.newRewards.map((reward) => rewardCard(reward)).join("")}</div>` : ""}
      <div class="hero-actions" style="margin-top:16px">
        <button class="primary-button" data-action="setup">Hrát znovu</button>
        <button class="ghost-button" data-action="weakness">Procvičit slabiny</button>
        <button class="ghost-button" data-action="championships">Mistrovství</button>
        <button class="ghost-button" data-action="trophies">Trofeje a stadiony</button>
        <button class="ghost-button" data-action="home">Domů</button>
      </div>
    </section>
  `);
}

function trophiesScreen() {
  return shell(`
    <section class="panel">
      <h2>Vojtovy trofeje</h2>
      <p class="mini">Dresy jsou originální herní styly inspirované fotbalovou atmosférou, bez klubových log, erbů a sponzorů.</p>
      <div class="trophy-grid">
        ${REWARDS.map((reward) => rewardCard(reward, !state.progress.rewards.includes(reward.id))).join("")}
      </div>
    </section>
    <section class="panel">
      <h2>Dresovna</h2>
      <div class="trophy-grid">
        ${SHIRTS.map(shirtCard).join("")}
      </div>
    </section>
    <section class="panel">
      <h2>Oslavy gólů</h2>
      <div class="trophy-grid">
        ${CELEBRATIONS.map(celebrationCard).join("")}
      </div>
    </section>
    <section class="panel">
      <h2>Mapa stadionů</h2>
      <div class="stadiums">
        ${STADIUMS.map((stadium, index) => {
          const unlocked = state.progress.totalStars >= stadium.stars;
          const active = index === currentStadiumIndex();
          return `<div class="stadium ${unlocked ? "current" : ""} ${active ? "active-stadium" : ""}">
            <span>${stadium.name}<small>${stadium.note}</small></span>
            <span>${unlocked ? active ? "Aktuální" : "Odemčeno" : `${stadium.stars} hvězd`}</span>
          </div>`;
        }).join("")}
      </div>
      <div class="hero-actions" style="margin-top:16px">
        <button class="primary-button" data-action="setup">Hrát zápas</button>
        <button class="ghost-button" data-action="home">Domů</button>
      </div>
    </section>
  `);
}

function championshipsScreen() {
  return shell(`
    <section class="panel">
      <h2>Mistrovství témat</h2>
      <p class="mini">Mini turnaj má 5 střel. Stačí hrát krátce a v klidu.</p>
      <div class="select-grid">
        ${SKILLS.map(championshipCard).join("")}
      </div>
      <div class="hero-actions" style="margin-top:16px">
        <button class="ghost-button" data-action="home">Domů</button>
      </div>
    </section>
  `);
}

function rewardCard(reward, locked = false) {
  return `<div class="trophy ${locked ? "locked" : ""}">
    ${reward.type === "shirt" ? shirtMarkup(reward, locked) : `<div class="trophy-icon">${locked ? "?" : "★"}</div>`}
    <strong>${locked ? "Zamčeno" : reward.name}</strong>
    <p class="mini">${locked ? "Trénuj dál a odemkne se." : reward.text}</p>
  </div>`;
}

function shirtMarkup(reward, locked = false) {
  const colors = locked ? ["#cbd5e1", "#e2e8f0", "#94a3b8"] : reward.colors;
  return `<div class="shirt-preview" style="--c1:${colors[0]};--c2:${colors[1]};--c3:${colors[2]}"><span></span></div>`;
}

function shirtCard(shirt) {
  const unlocked = isShirtUnlocked(shirt);
  const selected = state.progress.selectedShirt === shirt.id;
  return `<button class="trophy shirt-card ${!unlocked ? "locked" : ""} ${selected ? "selected-shirt" : ""}" data-shirt="${shirt.id}" ${!unlocked ? "disabled" : ""}>
    ${shirtMarkup(shirt, !unlocked)}
    <strong>${unlocked ? shirt.name : "Zamčeno"}</strong>
    <p class="mini">${unlocked ? selected ? "Lami ho má právě na sobě." : "Klikni a Lami si ho oblékne." : shirt.text}</p>
  </button>`;
}

function celebrationCard(celebration) {
  const unlocked = isCelebrationUnlocked(celebration);
  const selected = state.progress.selectedCelebration === celebration.id;
  return `<button class="trophy celebration-card ${!unlocked ? "locked" : ""} ${selected ? "selected-shirt" : ""}" data-celebration="${celebration.id}" ${!unlocked ? "disabled" : ""}>
    <div class="trophy-icon">${unlocked ? "★" : "?"}</div>
    <strong>${unlocked ? celebration.name : "Zamčeno"}</strong>
    <p class="mini">${unlocked ? selected ? "Lami ji právě slaví." : celebration.note : `${celebration.minGoals} gólů k odemčení.`}</p>
  </button>`;
}

function keeperCard(keeper) {
  const unlocked = state.progress.totalStars >= keeper.minStars;
  const selected = state.selectedKeeper === keeper.id;
  return `<button class="choice-button ${selected ? "selected" : ""}" data-keeper="${keeper.id}" ${!unlocked ? "disabled" : ""}>
    <strong>${keeper.name}</strong>
    <span>${unlocked ? keeper.note : `${keeper.minStars} hvězd k odemčení`}</span>
  </button>`;
}

function championshipCard(skill) {
  const record = state.progress.championships[skill.id] || { bestStars: 0, played: 0 };
  return `<button class="choice-button" data-championship="${skill.id}">
    <strong>${skill.title}</strong>
    <span>Nejlepší: ${record.bestStars}/3 hvězdy • hráno ${record.played || 0}x</span>
  </button>`;
}

function dailyChallengeCard() {
  const challenge = getDailyChallenge();
  const done = challenge.done;
  return `<div class="daily-card ${done ? "done" : ""}">
    <strong>${done ? "Hotovo pro dnešek" : challenge.title}</strong>
    <p class="mini">${done ? "Výzva splněna. Krátká pauza je taky trénink." : challenge.note}</p>
    <button class="${done ? "ghost-button" : "primary-button"}" data-action="daily" ${done ? "disabled" : ""}>${done ? "Splněno" : "Hrát denní výzvu"}</button>
  </div>`;
}

function skillCard(skill) {
  const stats = skillStats(skill.id);
  return `<div class="skill-card">
    <strong>${skill.title}</strong>
    <div class="skill-bar"><span style="width:${stats.percent}%"></span></div>
    <p class="mini">${stats.correct}/${stats.total || 0} správně • ${stats.label}</p>
  </div>`;
}

function bindEvents() {
  document.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", () => handleAction(button.dataset.action));
  });
  document.querySelectorAll("[data-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      state.mode = button.dataset.mode;
      render();
    });
  });
  document.querySelectorAll("[data-difficulty]").forEach((button) => {
    button.addEventListener("click", () => {
      state.difficulty = button.dataset.difficulty;
      render();
    });
  });
  document.querySelectorAll("[data-length]").forEach((button) => {
    button.addEventListener("click", () => {
      state.matchLength = Number(button.dataset.length);
      render();
    });
  });
  document.querySelectorAll("[data-answer]").forEach((button) => {
    button.addEventListener("click", () => checkAnswer(parseAnswer(button.dataset.answer)));
  });
  document.querySelectorAll("[data-shirt]").forEach((button) => {
    button.addEventListener("click", () => {
      state.progress.selectedShirt = button.dataset.shirt;
      saveProgress();
      render();
    });
  });
  document.querySelectorAll("[data-celebration]").forEach((button) => {
    button.addEventListener("click", () => {
      state.progress.selectedCelebration = button.dataset.celebration;
      saveProgress();
      render();
    });
  });
  document.querySelectorAll("[data-keeper]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedKeeper = button.dataset.keeper;
      render();
    });
  });
  document.querySelectorAll("[data-championship]").forEach((button) => {
    button.addEventListener("click", () => startChampionship(button.dataset.championship));
  });
}

function handleAction(action) {
  if (action === "home") state.screen = "start";
  if (action === "setup") {
    state.specialMode = null;
    state.focusSkill = null;
    state.screen = "setup";
  }
  if (action === "trophies") state.screen = "trophies";
  if (action === "championships") state.screen = "championships";
  if (action === "weakness") {
    startWeaknessTraining();
    return;
  }
  if (action === "daily") {
    startDailyChallenge();
    return;
  }
  if (action === "start") {
    state.specialMode = null;
    state.focusSkill = null;
    startGame();
    return;
  }
  if (action === "next") {
    nextRound();
    return;
  }
  render();
}

function startGame() {
  state.currentRound = 0;
  state.score = 0;
  state.goals = 0;
  state.correct = 0;
  state.wrong = 0;
  state.streak = 0;
  state.bestStreak = 0;
  state.stars = 0;
  state.feedback = null;
  state.selectedAnswer = null;
  state.isLocked = false;
  state.shot = "";
  state.newRewards = [];
  state.usedQuestionKeys = [];
  const selectedFocusSkill = state.focusSkill;
  state.commentary = pickCommentary("start");
  state.focusSkill = selectedFocusSkill;
  if (state.focusSkill) {
    state.commentary = `Trénink slabin: ${skillById(state.focusSkill).title}. Lami ti kryje záda.`;
  }
  state.questions = prepareMatchQuestions(state.mode, state.difficulty, state.matchLength);
  state.question = state.questions[0];
  state.screen = "match";
  render();
}

function startWeaknessTraining() {
  const weakSkill = weakestSkill();
  state.mode = weakSkill.mode;
  state.difficulty = "medium";
  state.matchLength = 5;
  state.focusSkill = weakSkill.id;
  state.specialMode = "weakness";
  state.commentary = `Trénink slabin: ${weakSkill.title}. Lami ti kryje záda.`;
  startGame();
}

function startDailyChallenge() {
  const challenge = getDailyChallenge();
  if (challenge.done) return;
  state.mode = challenge.mode;
  state.difficulty = challenge.difficulty;
  state.matchLength = 5;
  state.focusSkill = null;
  state.specialMode = "daily";
  state.commentary = challenge.title;
  startGame();
}

function startChampionship(skillId) {
  const skill = skillById(skillId);
  state.mode = skill.mode;
  state.difficulty = "medium";
  state.matchLength = 5;
  state.focusSkill = skill.id;
  state.specialMode = "championship";
  state.commentary = `Mistrovství: ${skill.title}. Hraje se na 5 střel.`;
  startGame();
}

function generateQuestion(mode, difficulty) {
  const selectedMode = mode === "mix" ? randomItem(["addition", "subtraction", "multiplication", "wordProblems", "geometry", "english", "czech", "science"]) : mode;
  if (selectedMode === "addition") return generateAdditionModeQuestion(difficulty);
  if (selectedMode === "subtraction") return generateSubtractionModeQuestion(difficulty);
  if (selectedMode === "multiplication") return generateMultiplicationModeQuestion(difficulty);
  if (selectedMode === "wordProblems") return generateWordProblemModeQuestion(difficulty);
  if (selectedMode === "geometry") return generateGeometry(difficulty);
  if (selectedMode === "english") return generateEnglish(difficulty);
  if (selectedMode === "czech") return generateCzech(difficulty);
  return generateScience(difficulty);
}

function prepareMatchQuestions(mode, difficulty, matchLength) {
  const questions = [];
  let guard = 0;
  while (questions.length < matchLength && guard < 120) {
    const question = generateQuestion(mode, difficulty);
    const key = questionKey(question);
    if (!state.usedQuestionKeys.includes(key)) {
      state.usedQuestionKeys.push(key);
      questions.push(question);
    }
    guard += 1;
  }
  while (questions.length < matchLength) questions.push(generateQuestion(mode, difficulty));
  return questions;
}

function generateAdditionModeQuestion(difficulty) {
  const generators = difficulty === "easy"
    ? [generateAddition, generateAddition, wordAdditionProblem]
    : [generateAddition, generateAdditionWithParentheses, wordAdditionProblem];
  return randomItem(generators)(difficulty);
}

function generateSubtractionModeQuestion(difficulty) {
  const generators = difficulty === "easy"
    ? [generateSubtraction, generateSubtraction, wordSubtractionProblem]
    : [generateSubtraction, generateAdditionWithParentheses, generateSubtractionWithParentheses, wordSubtractionProblem];
  return randomItem(generators)(difficulty);
}

function generateMultiplicationModeQuestion(difficulty) {
  const generators = difficulty === "easy"
    ? [generateMultiplication, generateMultiplication, generateDivision, wordMultiplicationProblem]
    : [generateMultiplication, generateDivision, generateMultiplyDivideMix, wordMultiplicationProblem, wordDivisionProblem];
  return randomItem(generators)(difficulty);
}

function generateWordProblemModeQuestion(difficulty) {
  const generators = difficulty === "easy"
    ? [wordAdditionProblem, wordSubtractionProblem, wordMultiplicationProblem]
    : [wordAdditionProblem, wordSubtractionProblem, wordMultiplicationProblem, wordDivisionProblem];
  const question = randomItem(generators)(difficulty);
  return { ...question, category: "wordProblems" };
}

function generateAddition(difficulty) {
  const ranges = { easy: [1, 20], medium: [10, 50], hard: [20, 100] };
  const [min, max] = ranges[difficulty];
  const a = rand(min, Math.floor(max * 0.65));
  const b = rand(1, max - a);
  const correct = a + b;
  return q("addition", difficulty, `${a} + ${b} = ?`, numberOptions(correct, difficulty), correct, `${a} + ${b} = ${correct}.`);
}

function generateAdditionWithParentheses(difficulty) {
  const limits = {
    easy: { total: 30, innerMax: 18, outsideMax: 12 },
    medium: { total: 70, innerMax: 45, outsideMax: 25 },
    hard: { total: 100, innerMax: 85, outsideMax: 35 }
  };
  const limit = limits[difficulty];
  const pattern = randomItem(["sub-plus", "plus-sub"]);
  if (pattern === "sub-plus") {
    const a = rand(10, limit.innerMax);
    const b = rand(1, Math.min(a - 1, Math.floor(limit.innerMax / 2)));
    const inner = a - b;
    const c = rand(1, Math.min(limit.outsideMax, limit.total - inner));
    const correct = inner + c;
    return q(
      "addition",
      difficulty,
      `(${a} - ${b}) + ${c} = ?`,
      numberOptions(correct, difficulty),
      correct,
      `Nejdřív závorka: ${a} - ${b} = ${inner}. Potom ${inner} + ${c} = ${correct}.`
    );
  }

  const b = rand(5, limit.outsideMax);
  const c = rand(1, b - 1);
  const inner = b - c;
  const a = rand(10, Math.max(15, limit.total - inner));
  const correct = a + inner;
  return q(
    "addition",
    difficulty,
    `${a} + (${b} - ${c}) = ?`,
    numberOptions(correct, difficulty),
    correct,
    `Nejdřív závorka: ${b} - ${c} = ${inner}. Potom ${a} + ${inner} = ${correct}.`
  );
}

function generateSubtraction(difficulty) {
  const ranges = { easy: [5, 20], medium: [20, 60], hard: [40, 100] };
  const [min, max] = ranges[difficulty];
  const a = rand(min, max);
  const b = rand(1, a - 1);
  const correct = a - b;
  return q("subtraction", difficulty, `${a} - ${b} = ?`, numberOptions(correct, difficulty), correct, `${a} - ${b} = ${correct}.`);
}

function generateSubtractionWithParentheses(difficulty) {
  const limits = {
    easy: { max: 30 },
    medium: { max: 70 },
    hard: { max: 100 }
  };
  const max = limits[difficulty].max;
  const a = rand(Math.floor(max / 2), max);
  const b = rand(8, Math.min(35, a));
  const c = rand(1, b - 1);
  const inner = b - c;
  const correct = a - inner;
  return q(
    "subtraction",
    difficulty,
    `${a} - (${b} - ${c}) = ?`,
    numberOptions(correct, difficulty),
    correct,
    `Nejdřív závorka: ${b} - ${c} = ${inner}. Potom ${a} - ${inner} = ${correct}.`
  );
}

function generateMultiplication(difficulty) {
  const pools = { easy: [1, 2, 5, 10], medium: [2, 3, 4, 5, 6, 10], hard: [2, 3, 4, 5, 6, 7, 8, 9, 10] };
  const a = randomItem(pools[difficulty]);
  const b = rand(1, 10);
  const correct = a * b;
  return q("multiplication", difficulty, `${a} x ${b} = ?`, numberOptions(correct, difficulty), correct, `${a} x ${b} = ${correct}.`);
}

function generateDivision(difficulty) {
  const divisors = {
    easy: [2, 5, 10],
    medium: [2, 3, 4, 5, 6, 10],
    hard: [2, 3, 4, 5, 6, 7, 8, 9, 10]
  };
  const divisor = randomItem(divisors[difficulty]);
  const quotientMax = difficulty === "easy" ? 10 : 12;
  const quotient = rand(1, quotientMax);
  const dividend = divisor * quotient;
  return q(
    "multiplication",
    difficulty,
    `${dividend} : ${divisor} = ?`,
    numberOptions(quotient, difficulty),
    quotient,
    `${dividend} : ${divisor} = ${quotient}, protože ${quotient} x ${divisor} = ${dividend}.`
  );
}

function generateMultiplyDivideMix(difficulty) {
  const factors = {
    easy: [2, 5, 10],
    medium: [2, 3, 4, 5, 6, 10],
    hard: [2, 3, 4, 5, 6, 7, 8, 9, 10]
  };
  const a = randomItem(factors[difficulty]);
  const b = rand(1, difficulty === "hard" ? 10 : 8);
  const product = a * b;
  const correct = product / a;
  return q(
    "multiplication",
    difficulty,
    `(${a} x ${b}) : ${a} = ?`,
    numberOptions(correct, difficulty),
    correct,
    `Nejdřív ${a} x ${b} = ${product}. Potom ${product} : ${a} = ${correct}.`
  );
}

function wordAdditionProblem(difficulty) {
  const max = difficulty === "easy" ? 20 : difficulty === "medium" ? 60 : 100;
  const a = rand(4, Math.floor(max * 0.6));
  const b = rand(2, max - a);
  const correct = a + b;
  return q(
    "addition",
    difficulty,
    `Lami dal v tréninku ${a} gólů a Vojta přidal ${b}. Kolik gólů dali dohromady?`,
    numberOptions(correct, difficulty),
    correct,
    `${a} + ${b} = ${correct}. Počet gólů dohromady: ${correct}.`
  );
}

function wordSubtractionProblem(difficulty) {
  const max = difficulty === "easy" ? 20 : difficulty === "medium" ? 60 : 100;
  const total = rand(8, max);
  const used = rand(2, total - 1);
  const correct = total - used;
  return q(
    "subtraction",
    difficulty,
    `V koši bylo ${total} míčů. Vojta vystřelil ${used}. Kolik míčů zůstalo v koši?`,
    numberOptions(correct, difficulty),
    correct,
    `${total} - ${used} = ${correct}. Zůstalo: ${correct}.`
  );
}

function wordMultiplicationProblem(difficulty) {
  const factors = difficulty === "easy" ? [2, 5, 10] : difficulty === "medium" ? [2, 3, 4, 5, 6, 10] : [2, 3, 4, 5, 6, 7, 8, 9, 10];
  const bags = rand(2, difficulty === "easy" ? 5 : 9);
  const pieces = randomItem(factors);
  const correct = bags * pieces;
  return q(
    "multiplication",
    difficulty,
    `Počet sáčků: ${bags}. Počet kartiček v jednom sáčku: ${pieces}. Kolik kartiček je to celkem?`,
    numberOptions(correct, difficulty),
    correct,
    `${bags} x ${pieces} = ${correct}. Celkový počet kartiček: ${correct}.`
  );
}

function wordDivisionProblem(difficulty) {
  const divisors = difficulty === "easy" ? [2, 5, 10] : difficulty === "medium" ? [2, 3, 4, 5, 6, 10] : [2, 3, 4, 5, 6, 7, 8, 9, 10];
  const children = randomItem(divisors);
  const each = rand(2, difficulty === "hard" ? 10 : 8);
  const total = children * each;
  return q(
    "multiplication",
    difficulty,
    `Vojta rozdělil ${total} kartiček do ${children} stejných hromádek. Kolik vyjde na jednu hromádku?`,
    numberOptions(each, difficulty),
    each,
    `${total} : ${children} = ${each}. Na jednu hromádku vyjde ${each}.`
  );
}

function generateEnglish(difficulty) {
  if (Math.random() < 0.8) return generateEnglishPhrase(difficulty);
  const allowed = difficulty === "easy" ? ["easy"] : difficulty === "medium" ? ["easy", "medium"] : ["easy", "medium", "hard"];
  const words = WORDS.filter((word) => allowed.includes(word[3]));
  const word = randomItem(words);
  const askCzech = Math.random() > 0.5;
  const pool = words.filter((item) => item[2] === word[2]);
  const question = askCzech ? `Jak se anglicky řekne ${word[1]}?` : `Co znamená ${word[0]}?`;
  const correct = askCzech ? word[0] : word[1];
  const categoryOptions = pool.map((item) => askCzech ? item[0] : item[1]);
  const fallbackOptions = words.map((item) => askCzech ? item[0] : item[1]);
  const options = textOptions(correct, categoryOptions, fallbackOptions);
  const explanation = askCzech ? `${capitalize(word[1])} se anglicky řekne ${word[0]}.` : `${capitalize(word[0])} znamená ${word[1]}.`;
  return q("english", difficulty, question, options, correct, explanation);
}

function generateEnglishPhrase(difficulty) {
  const allowed = difficulty === "easy" ? ["easy"] : difficulty === "medium" ? ["easy", "medium"] : ["easy", "medium", "hard"];
  return randomItem(ENGLISH_QUESTIONS.filter((item) => allowed.includes(item.difficulty)));
}

function generateScience(difficulty) {
  const allowed = difficulty === "easy" ? ["easy"] : difficulty === "medium" ? ["easy", "medium"] : ["easy", "medium", "hard"];
  return randomItem(SCIENCE_QUESTIONS.filter((item) => allowed.includes(item.difficulty)));
}

function generateGeometry(difficulty) {
  const allowed = difficulty === "easy" ? ["easy"] : difficulty === "medium" ? ["easy", "medium"] : ["easy", "medium", "hard"];
  return randomItem(GEOMETRY_QUESTIONS.filter((item) => allowed.includes(item.difficulty)));
}

function generateCzech(difficulty) {
  const allowed = difficulty === "easy" ? ["easy"] : difficulty === "medium" ? ["easy", "medium"] : ["easy", "medium", "hard"];
  const pool = CZECH_QUESTIONS.filter((item) => allowed.includes(item.difficulty));
  const languageTasks = pool.filter((item) =>
    item.question.includes("větu") ||
    item.question.includes("větě") ||
    item.question.includes("příběh") ||
    item.question.includes("vetřelce") ||
    item.question.includes("sloveso") ||
    item.question.includes("přídavné") ||
    item.question.includes("nadřazené") ||
    item.question.includes("protiklady") ||
    item.question.includes("Oprav")
  );
  return Math.random() < 0.6 && languageTasks.length ? randomItem(languageTasks) : randomItem(pool);
}

function checkAnswer(answer) {
  if (state.isLocked) return;
  const correct = sameAnswer(answer, state.question.correctAnswer);
  state.isLocked = true;
  state.selectedAnswer = answer;
  state.shot = correct ? "goal-shot" : "save-shot";
  updateScore(correct);
  updateSkillProgress(state.question.category, correct);
  state.feedback = correct ? {
    type: "success",
    title: "Góóól!",
    message: randomItem([
      "Parádní střela, Vojto!",
      "Lami trefil míč přesně k tyči!",
      "Stadion tleská!",
      "Tohle byla chytrá odpověď!",
      "Lami roztočil vítěznou oslavu!"
    ])
  } : {
    type: "encouragement",
    title: "Nevadí, další střela čeká!",
    message: state.question.explanation
  };
  state.commentary = pickCommentary(correct ? "goal" : "save");
  render();
}

function updateScore(correct) {
  if (correct) {
    state.goals += 1;
    state.correct += 1;
    state.streak += 1;
    state.bestStreak = Math.max(state.bestStreak, state.streak);
    state.score += 100;
    if (state.streak === 3) state.score += 50;
    if (state.streak === 5) state.score += 100;
    if (state.streak === 7) state.score += 150;
  } else {
    state.wrong += 1;
    state.streak = 0;
    state.score += 10;
  }
}

function nextRound() {
  state.currentRound += 1;
  if (state.currentRound >= state.matchLength) {
    endMatch();
    return;
  }
  state.question = state.questions[state.currentRound];
  state.feedback = null;
  state.selectedAnswer = null;
  state.isLocked = false;
  state.shot = "";
  state.commentary = pickCommentary("next");
  render();
}

function endMatch() {
  state.score += 50;
  state.stars = calculateStars();
  state.progress.totalGoals += state.goals;
  state.progress.totalStars += state.stars;
  state.progress.xp += state.score;
  state.progress.bestStreak = Math.max(state.progress.bestStreak, state.bestStreak);
  if (state.mode === "english") state.progress.englishMatches += 1;
  if (state.mode === "czech") state.progress.czechMatches += 1;
  completeSpecialModes();
  state.newRewards = unlockRewards();
  saveProgress();
  state.screen = "end";
  render();
}

function completeSpecialModes() {
  registerWeeklyTraining();
  if (state.specialMode === "daily") {
    const challenge = getDailyChallenge();
    state.progress.dailyChallenge = {
      key: challenge.key,
      done: true,
      stars: state.stars
    };
  }
  if (state.specialMode === "championship" && state.focusSkill) {
    const current = state.progress.championships[state.focusSkill] || { bestStars: 0, played: 0 };
    current.played += 1;
    current.bestStars = Math.max(current.bestStars, state.stars);
    state.progress.championships[state.focusSkill] = current;
  }
}

function calculateStars() {
  const ratio = state.correct / state.matchLength;
  if (ratio >= 0.8) return 3;
  if (ratio >= 0.5) return 2;
  return 1;
}

function unlockRewards() {
  const unlocked = [];
  REWARDS.forEach((reward) => {
    if (!state.progress.rewards.includes(reward.id) && reward.check(state.progress)) {
      state.progress.rewards.push(reward.id);
      unlocked.push(reward);
    }
  });
  return unlocked;
}

function updateSkillProgress(category, correct) {
  const skill = skillForCategory(category);
  const current = state.progress.skills[skill.id] || { correct: 0, total: 0 };
  current.total += 1;
  if (correct) current.correct += 1;
  state.progress.skills[skill.id] = current;
}

function skillForCategory(category) {
  return SKILLS.find((skill) => skill.mode === category) || SKILLS[0];
}

function skillById(id) {
  return SKILLS.find((skill) => skill.id === id) || SKILLS[0];
}

function skillStats(skillId) {
  const stats = state.progress.skills[skillId] || { correct: 0, total: 0 };
  const percent = stats.total ? Math.round((stats.correct / stats.total) * 100) : 0;
  const label = stats.total === 0 ? "čeká na první střelu" : percent >= 80 ? "forma jako kapitán" : percent >= 55 ? "dobrý trénink" : "chce to pár střel";
  return { ...stats, percent, label };
}

function weakestSkill() {
  return SKILLS
    .map((skill) => ({ ...skill, stats: skillStats(skill.id) }))
    .sort((a, b) => {
      const aScore = a.stats.total === 0 ? 45 : a.stats.percent;
      const bScore = b.stats.total === 0 ? 45 : b.stats.percent;
      return aScore - bScore || b.stats.total - a.stats.total;
    })[0];
}

function isShirtUnlocked(shirt) {
  return shirt.id === DEFAULT_SHIRT_ID || state.progress.rewards.includes(shirt.id);
}

function isCelebrationUnlocked(celebration) {
  return state.progress.totalGoals >= celebration.minGoals;
}

function currentShirt() {
  const selected = SHIRTS.find((shirt) => shirt.id === state.progress.selectedShirt);
  return selected && isShirtUnlocked(selected) ? selected : DEFAULT_SHIRT;
}

function currentCelebration() {
  const selected = CELEBRATIONS.find((celebration) => celebration.id === state.progress.selectedCelebration);
  return selected && isCelebrationUnlocked(selected) ? selected : CELEBRATIONS[0];
}

function currentKeeper() {
  const selected = KEEPERS.find((keeper) => keeper.id === state.selectedKeeper);
  return selected || KEEPERS[0];
}

function playerShirtStyle() {
  const colors = currentShirt().colors;
  return `--shirt-a:${colors[0]};--shirt-b:${colors[1]};--shirt-c:${colors[2]};`;
}

function currentStadiumIndex() {
  return STADIUMS.reduce((best, stadium, index) => state.progress.totalStars >= stadium.stars ? index : best, 0);
}

function getDailyChallenge() {
  const key = currentDateKey();
  const mode = SKILLS[key.split("-").reduce((sum, part) => sum + Number(part), 0) % SKILLS.length].mode;
  const title = `Denní výzva: 5 střel - ${modeTitle(mode)}`;
  return {
    key,
    title,
    note: "Krátký dnešní trénink bez spěchu.",
    mode,
    difficulty: "medium",
    done: state.progress.dailyChallenge?.key === key && state.progress.dailyChallenge?.done
  };
}

function registerWeeklyTraining() {
  const week = currentWeekKey();
  if (state.progress.weeklyCup.week !== week) {
    state.progress.weeklyCup = { week, completed: 0 };
  }
  state.progress.weeklyCup.completed += 1;
}

function weeklyCompletedCount(progress = state.progress) {
  return progress.weeklyCup?.week === currentWeekKey() ? progress.weeklyCup.completed || 0 : 0;
}

function currentDateKey() {
  return new Date().toISOString().slice(0, 10);
}

function currentWeekKey() {
  const date = new Date();
  const firstDay = new Date(date.getFullYear(), 0, 1);
  const dayOffset = Math.floor((date - firstDay) / 86400000);
  return `${date.getFullYear()}-${Math.ceil((dayOffset + firstDay.getDay() + 1) / 7)}`;
}

function specialResultMarkup() {
  const parts = [];
  if (state.specialMode === "daily") {
    parts.push(`<div class="special-result">Denní výzva splněna. Získané hvězdy: ${state.stars}/3.</div>`);
  }
  if (state.specialMode === "championship" && state.focusSkill) {
    parts.push(`<div class="special-result">Mistrovství ${skillById(state.focusSkill).title}: ${state.stars}/3 hvězdy.</div>`);
  }
  const weekly = weeklyCompletedCount();
  parts.push(`<div class="special-result">Týdenní pohár: ${Math.min(weekly, 3)}/3 tréninky tento týden.</div>`);
  return parts.join("");
}

function pickCommentary(type) {
  const lines = {
    start: [
      "Lami si rovná míč na značku.",
      "Fanoušci jsou připraveni, Vojto.",
      "Krátký rozběh, chytrá hlava, přesná střela."
    ],
    next: [
      "Další střela čeká.",
      "Lami zvedá hlavu a čte hru.",
      "Vojto, v klidu. Přesnost je víc než rychlost."
    ],
    goal: [
      "Komentátor: To byla parádní trefa!",
      "Tribuny vstávají, Lami slaví.",
      "Výborně, tahle odpověď sedla k tyči."
    ],
    save: [
      "Brankář skočil správně, ale další pokus čeká.",
      "Tohle je trénink, nevadí. Lami už chystá další míč.",
      "Dobrá snaha. Teď už víme správné řešení."
    ]
  };
  return randomItem(lines[type]);
}

function getLevel() {
  return LEVELS.reduce((best, level) => state.progress.xp >= level.xp ? level : best, LEVELS[0]);
}

function modeTitle(mode) {
  return MODES.find((item) => item.id === mode)?.title || "Trénink";
}

function questionKey(question) {
  return `${question.category}:${question.question}:${question.correctAnswer}`;
}

function endMessage() {
  if (state.stars === 3) return "Lami posílá velký potlesk. Tohle byl výborný výkon!";
  if (state.stars === 2) return "Hezký zápas. Je vidět, že trénink funguje.";
  return "Zápas je hotový a každý pokus se počítá. Další střela může být gólová.";
}

function numberOptions(correct, difficulty) {
  const spread = difficulty === "easy" ? 5 : difficulty === "medium" ? 8 : 12;
  const values = new Set([correct]);
  while (values.size < 4) {
    const next = Math.max(0, correct + rand(-spread, spread));
    values.add(next);
  }
  return shuffle([...values]);
}

function textOptions(correct, pool, fallbackPool = []) {
  const values = new Set([correct]);
  const uniquePool = [...new Set(pool)].filter(Boolean);
  const uniqueFallbackPool = [...new Set(fallbackPool)].filter(Boolean);
  while (values.size < Math.min(4, uniquePool.length)) values.add(randomItem(uniquePool));
  while (values.size < 4 && uniqueFallbackPool.length > 0) values.add(randomItem(uniqueFallbackPool));
  return shuffle([...values]);
}

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(items) {
  return items
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((item) => item.value);
}

function escapeAttr(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll('"', "&quot;");
}

function parseAnswer(value) {
  const number = Number(value);
  return Number.isNaN(number) || value.trim() === "" ? value : number;
}

function sameAnswer(a, b) {
  return String(a) === String(b);
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

render();
