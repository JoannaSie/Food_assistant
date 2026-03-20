const monthNames = [
  'styczeń',
  'luty',
  'marzec',
  'kwiecień',
  'maj',
  'czerwiec',
  'lipiec',
  'sierpień',
  'wrzesień',
  'październik',
  'listopad',
  'grudzień',
];

const phaseMeta = {
  menstrual: {
    name: 'menstrualna',
    guidance:
      'W fazie menstrualnej stawiam na produkty bogate w żelazo, foliany, witaminę C i rozgrzewające zupy, aby wspierać regenerację i ograniczać stan zapalny.',
    priorities: ['buraki', 'natka pietruszki', 'jarmuż', 'śledź lub pstrąg', 'indyk'],
  },
  follicular: {
    name: 'folikularna',
    guidance:
      'W fazie folikularnej najlepiej sprawdzają się lżejsze, świeże posiłki z dużą ilością błonnika, zielonych warzyw i fermentowanych dodatków.',
    priorities: ['kiszonki', 'zielone warzywa', 'pstrąg', 'orzechy włoskie'],
  },
  ovulatory: {
    name: 'owulacyjna',
    guidance:
      'W fazie owulacyjnej polecam lekkie dania, sporo antyoksydantów i warzyw o wysokiej zawartości wody, aby wspierać metabolizm estrogenów.',
    priorities: ['brokuł', 'rzodkiewka', 'sałaty', 'lekka ryba'],
  },
  luteal: {
    name: 'lutealna',
    guidance:
      'W fazie lutealnej warto zwiększyć podaż magnezu, witaminy B6, błonnika i sycących węglowodanów złożonych, by łagodzić PMS i wahania apetytu.',
    priorities: ['kasze', 'orzechy laskowe', 'strączki', 'indyk'],
  },
};

const seasonalProduce = {
  0: { fruits: [], vegetables: ['buraki', 'marchew', 'seler korzeniowy'], nuts: ['orzechy włoskie', 'orzechy laskowe', 'migdały'], meat: ['indyk', 'kurczak zagrodowy'], fish: ['pstrąg', 'śledź'] },
  1: { fruits: [], vegetables: ['buraki', 'por', 'seler korzeniowy'], nuts: ['orzechy włoskie', 'orzechy laskowe', 'migdały'], meat: ['indyk', 'kurczak zagrodowy'], fish: ['pstrąg', 'śledź'] },
  2: { fruits: [], vegetables: ['buraki', 'por', 'jarmuż'], nuts: ['orzechy włoskie', 'orzechy laskowe', 'migdały'], meat: ['indyk', 'kurczak zagrodowy'], fish: ['pstrąg', 'śledź'] },
  3: { fruits: [], vegetables: ['szpinak', 'rzodkiewka', 'szczypiorek'], nuts: ['orzechy włoskie', 'orzechy laskowe', 'migdały'], meat: ['indyk', 'kurczak zagrodowy'], fish: ['pstrąg', 'śledź'] },
  4: { fruits: ['rabarbar'], vegetables: ['szparagi', 'sałata masłowa', 'rzodkiewka'], nuts: ['orzechy włoskie', 'migdały', 'orzechy laskowe'], meat: ['indyk', 'kurczak zagrodowy'], fish: ['pstrąg', 'śledź'] },
  5: { fruits: ['truskawki', 'rabarbar', 'czereśnie'], vegetables: ['bób', 'kalafior', 'młoda marchew'], nuts: ['orzechy włoskie', 'migdały', 'orzechy laskowe'], meat: ['indyk', 'kurczak zagrodowy'], fish: ['pstrąg', 'śledź'] },
  6: { fruits: ['maliny', 'porzeczki', 'borówki'], vegetables: ['cukinia', 'pomidory', 'ogórki gruntowe'], nuts: ['orzechy włoskie', 'migdały', 'orzechy laskowe'], meat: ['indyk', 'kurczak zagrodowy'], fish: ['pstrąg', 'śledź'] },
  7: { fruits: ['śliwki', 'jabłka', 'jeżyny'], vegetables: ['papryka', 'pomidory', 'fasolka szparagowa'], nuts: ['orzechy włoskie', 'migdały', 'orzechy laskowe'], meat: ['indyk', 'kurczak zagrodowy'], fish: ['pstrąg', 'śledź'] },
  8: { fruits: ['jabłka', 'gruszki', 'śliwki'], vegetables: ['dynia', 'buraki', 'brokuł'], nuts: ['orzechy włoskie', 'orzechy laskowe', 'migdały'], meat: ['indyk', 'kurczak zagrodowy'], fish: ['pstrąg', 'śledź'] },
  9: { fruits: ['jabłka', 'gruszki', 'śliwki'], vegetables: ['dynia', 'buraki', 'jarmuż'], nuts: ['orzechy włoskie', 'orzechy laskowe', 'migdały'], meat: ['indyk', 'kurczak zagrodowy'], fish: ['pstrąg', 'śledź'] },
  10: { fruits: ['jabłka', 'gruszki'], vegetables: ['buraki', 'kapusta', 'jarmuż'], nuts: ['orzechy włoskie', 'orzechy laskowe', 'migdały'], meat: ['indyk', 'kurczak zagrodowy'], fish: ['pstrąg', 'śledź'] },
  11: { fruits: [], vegetables: ['buraki', 'kapusta', 'seler korzeniowy'], nuts: ['orzechy włoskie', 'orzechy laskowe', 'migdały'], meat: ['indyk', 'kurczak zagrodowy'], fish: ['pstrąg', 'śledź'] },
};

const recipes = {
  soups: [
    {
      title: 'Krem z brokułów',
      description: 'Szybka, prosta zupa krem na bazie brokułu, cebuli i czosnku.',
      link: 'https://aniagotuje.pl/przepis/krem-z-brokulow',
      tags: ['brokuł', 'lekka', 'zielone warzywa', 'ovulatory', 'follicular'],
      why: {
        default: 'Brokuł i czosnek dostarczają związków przeciwzapalnych, a lekka forma kremu dobrze wpisuje się w codzienną dietę.',
        menstrual: 'Brokuł i cebula wspierają regenerację dzięki witaminie C i związkom siarkowym, a ciepła zupa jest łagodna dla organizmu.',
        follicular: 'Lekki krem z zielonych warzyw dobrze pasuje do fazy folikularnej, kiedy zwykle sprawdzają się świeższe i mniej obciążające posiłki.',
        ovulatory: 'To bardzo dobry wybór na fazę owulacyjną, bo jest lekkostrawny i opiera się na warzywach krzyżowych wspierających metabolizm estrogenów.',
        luteal: 'Krem daje sytość bez ciężkości, a brokuł i czosnek wspierają kontrolę stanu zapalnego w fazie lutealnej.',
      },
    },
    {
      title: 'Zupa krem z ziemniaków',
      description: 'Kremowa zupa z ziemniaków i pora, dobra na chłodniejsze miesiące.',
      link: 'https://aniagotuje.pl/przepis/zupa-krem-z-ziemniakow',
      tags: ['por', 'sycąca', 'luteal', 'menstrual'],
      why: {
        default: 'Por i ziemniaki są łatwo dostępne w Polsce, a dodatek czosnku i oliwy sprzyja spokojniejszemu trawieniu.',
        menstrual: 'Rozgrzewająca konsystencja i proste składniki pomagają, gdy w fazie menstrualnej lepiej tolerowane są łagodniejsze posiłki.',
        follicular: 'To bardziej bazowa zupa, którą warto uzupełnić pestkami lub natką dla większej świeżości i wartości odżywczej.',
        ovulatory: 'Sprawdzi się jako delikatniejszy posiłek, jeśli dodasz więcej ziół i nie przesadzisz z ciężkimi dodatkami.',
        luteal: 'Ziemniaki i por zwiększają sytość, co bywa pomocne w fazie lutealnej, gdy rośnie apetyt.',
      },
    },
    {
      title: 'Zupa krem z ciecierzycy',
      description: 'Pożywny krem z ciecierzycy z przyprawami i wysoką zawartością błonnika.',
      link: 'https://aniagotuje.pl/przepis/zupa-krem-z-ciecierzycy',
      tags: ['strączki', 'błonnik', 'luteal', 'follicular'],
      why: {
        default: 'Ciecierzyca wspiera stabilizację glikemii i sytość, co jest ważne w diecie przeciwzapalnej.',
        menstrual: 'Strączki dostarczają żelaza niehemowego i błonnika, a ciepły krem dobrze pasuje do fazy menstrualnej.',
        follicular: 'Białko roślinne i błonnik dobrze wspierają fazę folikularną, gdy zwykle rośnie tolerancja na bardziej różnorodne posiłki.',
        ovulatory: 'To dobra opcja, jeśli porcja pozostaje umiarkowana i zestawisz ją z lekką surówką lub ziołami.',
        luteal: 'Błonnik, magnez i sycący charakter tej zupy pomagają ograniczyć napady głodu w fazie lutealnej.',
      },
    },
  ],
  mains: [
    {
      title: 'Dorsz pieczony',
      description: 'Prosty pieczony dorsz z czosnkiem, cytryną i warzywami.',
      link: 'https://aniagotuje.pl/przepis/dorsz-pieczony',
      tags: ['ryba', 'lekka', 'ovulatory', 'follicular'],
      why: {
        default: 'Pieczona ryba z warzywami to jedno z bardziej przeciwzapalnych, prostych dań obiadowych.',
        menstrual: 'Dorsz dostarcza lekkostrawnego białka, a warzywa i cytryna wspierają lepsze wykorzystanie składników odżywczych.',
        follicular: 'To lekkie danie wspiera fazę folikularną dzięki dużej ilości warzyw i niewielkiemu obciążeniu przewodu pokarmowego.',
        ovulatory: 'Na fazę owulacyjną to szczególnie trafny wybór, bo danie jest lekkie, bogate w warzywa i nieprzetworzone.',
        luteal: 'Dorsz pomaga utrzymać wysoką podaż białka bez nadmiaru ciężkiego tłuszczu, co jest korzystne przy wahaniach apetytu.',
      },
    },
    {
      title: 'Udziec z indyka pieczony',
      description: 'Soczysta pieczeń z indyka z prostą marynatą z czosnku i przypraw.',
      link: 'https://aniagotuje.pl/przepis/udziec-z-indyka-pieczony',
      tags: ['indyk', 'żelazo', 'menstrual', 'luteal'],
      why: {
        default: 'Indyk to dobre źródło białka i żelaza, a pieczenie ogranicza potrzebę intensywnego smażenia.',
        menstrual: 'Indyk dobrze wpisuje się w fazę menstrualną, bo dostarcza białka, żelaza i witamin z grupy B potrzebnych do regeneracji.',
        follicular: 'Chude mięso z indyka może być dobrym filarem obiadu, zwłaszcza podane z sezonowymi warzywami i kaszą.',
        ovulatory: 'W fazie owulacyjnej warto podać mniejszą porcję z dużą ilością sałaty lub pieczonych warzyw.',
        luteal: 'Indyk dostarcza białka i witaminy B6, które są szczególnie przydatne w fazie lutealnej.',
      },
    },
    {
      title: 'Pierś z kurczaka pieczona z warzywami',
      description: 'Łatwy obiad z piekarnika z filetem z kurczaka i warzywami.',
      link: 'https://aniagotuje.pl/przepis/piers-z-kurczaka-pieczona-z-warzywami',
      tags: ['kurczak', 'warzywa', 'follicular', 'ovulatory'],
      why: {
        default: 'Pieczenie ogranicza ilość tłuszczu utlenionego, a warzywa zwiększają podaż błonnika i antyoksydantów.',
        menstrual: 'To prosty posiłek, który można wzbogacić burakami lub natką, aby lepiej odpowiadał potrzebom tej fazy.',
        follicular: 'W fazie folikularnej dobrze działają proste, lżejsze obiady z dużą ilością warzyw i chudym białkiem.',
        ovulatory: 'Kurczak z warzywami to lekkie, mało przetworzone danie dobre na dni, gdy najlepiej służą świeższe smaki.',
        luteal: 'Danie daje sytość i białko, a dodatek warzyw pomaga utrzymać stabilniejszą glikemię w fazie lutealnej.',
      },
    },
  ],
  salads: [
    {
      title: 'Sałatka z buraków',
      description: 'Klasyczna sałatka z buraków z jabłkiem i ogórkiem kiszonym.',
      link: 'https://aniagotuje.pl/przepis/salatka-z-burakow',
      tags: ['buraki', 'kiszonki', 'menstrual'],
      why: {
        default: 'Buraki, jabłko i kiszony ogórek to prosty, przeciwzapalny zestaw dobrze znany w polskiej kuchni.',
        menstrual: 'Buraki i natka jako dodatek wspierają fazę menstrualną dzięki zawartości folianów i produktów tradycyjnie stosowanych w okresie osłabienia.',
        follicular: 'To dobra baza, jeśli ograniczysz cięższe dodatki i postawisz na wersję z olejem oraz kiszonką.',
        ovulatory: 'Sałatka może działać jako lekki dodatek, zwłaszcza gdy połączysz ją z rybą lub zielonymi warzywami.',
        luteal: 'Buraki i kiszonki wspierają mikrobiotę oraz regularność posiłków, co jest przydatne w fazie lutealnej.',
      },
    },
    {
      title: 'Sałatka z ciecierzycy i buraka',
      description: 'Sycąca sałatka z burakiem i ciecierzycą, dobra na lunch.',
      link: 'https://aniagotuje.pl/przepis/salatka-z-ciecierzycy-i-buraka',
      tags: ['buraki', 'strączki', 'luteal', 'menstrual'],
      why: {
        default: 'Łączy błonnik, białko roślinne i polskie warzywa korzeniowe, co sprzyja diecie przeciwzapalnej.',
        menstrual: 'Buraki i strączki wzmacniają zawartość żelaza oraz folianów, co dobrze wspiera fazę menstrualną.',
        follicular: 'To sycąca, ale nadal świeża opcja, jeśli chcesz zwiększyć udział roślin strączkowych w diecie.',
        ovulatory: 'Najlepiej sprawdzi się jako mniejsza porcja lub dodatek do lekkiego obiadu, aby zachować lekkość jadłospisu.',
        luteal: 'Ciecierzyca pomaga zwiększyć sytość i stabilność glikemii, co jest szczególnie korzystne w fazie lutealnej.',
      },
    },
    {
      title: 'Sałatka z kurczakiem i jarmużem',
      description: 'Kolorowa sałatka z jarmużem, kurczakiem i jajkami przepiórczymi.',
      link: 'https://aniagotuje.pl/przepis/salatka-z-kurczakiem-i-jarmuzem',
      tags: ['jarmuż', 'białko', 'follicular', 'ovulatory'],
      why: {
        default: 'Jarmuż jest bogaty w antyoksydanty, a kurczak dodaje sycącego białka bez dużej ilości przetworzenia.',
        menstrual: 'Jarmuż wspiera podaż folianów i witaminy C, a kurczak poprawia sytość w dniach osłabienia.',
        follicular: 'To bardzo dobry wybór na fazę folikularną, bo daje świeżość, zieleninę i dobrze zbilansowane białko.',
        ovulatory: 'Lekka, chrupiąca i bogata w zielone warzywa sałatka dobrze wpisuje się w potrzeby fazy owulacyjnej.',
        luteal: 'Białko i błonnik pomagają ograniczyć głód, a jarmuż dostarcza magnezu i antyoksydantów.',
      },
    },
  ],
};

const monthSelect = document.querySelector('#month');
const phaseSelect = document.querySelector('#phase');
const resultEl = document.querySelector('#result');
const generateBtn = document.querySelector('#generate');
const copyBtn = document.querySelector('#copy');

monthNames.forEach((name, index) => {
  const option = document.createElement('option');
  option.value = String(index);
  option.textContent = name.charAt(0).toUpperCase() + name.slice(1);
  monthSelect.append(option);
});

monthSelect.value = String(new Date().getMonth());

function buildSection(title, items, phaseKey) {
  return [`## ${title}`, ...items.map((item, index) => {
    const why = item.why[phaseKey] || item.why.default;
    return `${index + 1}. ${item.title}\n   - Description: ${item.description}\n   - Link: ${item.link}\n   - Why it's suitable: ${why}`;
  })].join('\n');
}

function generateContent() {
  const monthIndex = Number(monthSelect.value);
  const phaseKey = phaseSelect.value;
  const produce = seasonalProduce[monthIndex];
  const phase = phaseMeta[phaseKey];
  const monthName = monthNames[monthIndex];
  const fruitLines = produce.fruits.length ? produce.fruits.map((item) => `- ${item}`) : ['- no strong local seasonal fruits'];
  const limitedAvailability = produce.fruits.length === 0 || monthIndex <= 3 || monthIndex >= 10;

  const intro = [
    `Miesiąc: ${monthName}.`,
    `Faza cyklu: ${phase.name}.`,
    phase.guidance,
    limitedAvailability
      ? 'Seasonal availability is limited in Poland right now, so recommendations lean on stored root vegetables, hardy greens and simple pantry staples.'
      : 'Seasonal availability is relatively good right now, so recommendations prioritize fresh produce from Polish markets.',
  ].join(' ');

  const markdown = [
    intro,
    '',
    '## Seasonal products',
    'Fruits:',
    ...fruitLines,
    'Vegetables:',
    ...produce.vegetables.map((item) => `- ${item}`),
    'Nuts:',
    ...produce.nuts.map((item) => `- ${item}`),
    'Meat:',
    ...produce.meat.map((item) => `- ${item}`),
    'Fish:',
    ...produce.fish.map((item) => `- ${item}`),
    '',
    buildSection('Soups (3)', recipes.soups, phaseKey),
    '',
    buildSection('Main dishes (3)', recipes.mains, phaseKey),
    '',
    buildSection('Salads (3)', recipes.salads, phaseKey),
    '',
    `Priorytety dla fazy ${phase.name}: ${phase.priorities.join(', ')}.`,
  ].join('\n');

  resultEl.textContent = markdown;
}

generateBtn.addEventListener('click', generateContent);
copyBtn.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(resultEl.textContent);
    copyBtn.textContent = 'Skopiowano';
    setTimeout(() => {
      copyBtn.textContent = 'Kopiuj w formacie Markdown';
    }, 1800);
  } catch {
    copyBtn.textContent = 'Nie udało się skopiować';
    setTimeout(() => {
      copyBtn.textContent = 'Kopiuj w formacie Markdown';
    }, 1800);
  }
});

generateContent();
