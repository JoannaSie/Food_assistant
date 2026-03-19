const monthOptions = [
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

const phaseOptions = [
  {
    value: 'menstrual',
    label: 'Menstrual / menstruacyjna',
    focus: 'Większe wsparcie dla żelaza, nawodnienia i rozgrzewających posiłków.',
  },
  {
    value: 'follicular',
    label: 'Follicular / folikularna',
    focus: 'Świeże, odżywcze składniki wspierające energię i regenerację.',
  },
  {
    value: 'ovulatory',
    label: 'Ovulatory / owulacyjna',
    focus: 'Lżejsze, świeże posiłki bogate w antyoksydanty i błonnik.',
  },
  {
    value: 'luteal',
    label: 'Luteal / lutealna',
    focus: 'Stabilizacja energii, magnez, witamina B6 i bardziej sycące dania.',
  },
];

const basePrompt = `Act as a nutritionist, seasonal food expert, and Polish cuisine specialist.

Context:
- User location: Poland (Central Europe climate)
- Current month: {{CURRENT_MONTH}}
- Goal: anti-inflammatory diet adapted to menstrual cycle phase
- Cycle phase: {{CYCLE_PHASE}} (options: menstrual, follicular, ovulatory, luteal)
- Prefer local, seasonal, minimally processed foods

Tasks:

1. Recommend seasonal LOCAL products available in Poland right now:
   - 3 fruits (only if truly seasonal; otherwise say "no strong local seasonal fruits")
   - 3 vegetables
   - nuts (2–3 types)
   - meat (1–2 best anti-inflammatory options)
   - fish (1–2 best options, prioritize fatty fish if possible)

2. Ensure all recommendations:
   - are consistent with anti-inflammatory diet principles
   - match the given cycle phase (e.g. iron-rich for menstrual phase, lighter foods for ovulatory, etc.)
   - prioritize foods commonly available in Polish markets

3. Provide 9 recipes total from https://aniagotuje.pl:
   - 3 soups
   - 3 main dishes
   - 3 salads

Rules for recipes:
- Use only recipes that realistically match the recommended seasonal ingredients
- Prefer simpler recipes (not overly complex)
- Include:
   - recipe title (in Polish)
   - short description (1 sentence)
   - direct link
   - why it fits anti-inflammatory diet + cycle phase

4. Output format (STRICT):

## Seasonal products
Fruits:
- ...
Vegetables:
- ...
Nuts:
- ...
Meat:
- ...
Fish:
- ...

## Soups (3)
1. Title
   - Description:
   - Link:
   - Why it's suitable:

## Main dishes (3)
...

## Salads (3)
...

5. If seasonal availability is limited (e.g. winter/early spring), explicitly say so and adjust recommendations accordingly.

6. Do NOT hallucinate recipes. Only include real recipes from aniagotuje.pl.

Be concise but informative.`;

const monthSelect = document.querySelector('#monthSelect');
const phaseSelect = document.querySelector('#phaseSelect');
const phaseFocus = document.querySelector('#phaseFocus');
const summaryText = document.querySelector('#summaryText');
const promptOutput = document.querySelector('#promptOutput');
const copyButton = document.querySelector('#copyButton');
const copyStatus = document.querySelector('#copyStatus');

function fillSelect(select, options, currentValue, mapper) {
  options.forEach((option) => {
    const optionElement = document.createElement('option');
    const mapped = mapper(option);
    optionElement.value = mapped.value;
    optionElement.textContent = mapped.label;
    optionElement.selected = mapped.value === currentValue;
    select.appendChild(optionElement);
  });
}

function getPrompt(month, phase) {
  return basePrompt.replace('{{CURRENT_MONTH}}', month).replace('{{CYCLE_PHASE}}', phase);
}

function render() {
  const selectedMonth = monthSelect.value;
  const selectedPhase = phaseOptions.find((phase) => phase.value === phaseSelect.value) ?? phaseOptions[0];

  phaseFocus.textContent = selectedPhase.focus;
  summaryText.textContent = `${selectedMonth} · ${selectedPhase.value}`;
  promptOutput.textContent = getPrompt(selectedMonth, selectedPhase.value);
}

async function copyPrompt() {
  try {
    await navigator.clipboard.writeText(promptOutput.textContent);
    copyStatus.textContent = 'Prompt został skopiowany do schowka.';
  } catch (error) {
    copyStatus.textContent = 'Nie udało się skopiować prompta. Skopiuj go ręcznie z panelu po prawej.';
  }
}

const currentMonth = monthOptions[new Date().getMonth()];
fillSelect(monthSelect, monthOptions, currentMonth, (value) => ({ value, label: value }));
fillSelect(phaseSelect, phaseOptions, 'follicular', (value) => ({ value: value.value, label: value.label }));

monthSelect.addEventListener('change', render);
phaseSelect.addEventListener('change', render);
copyButton.addEventListener('click', copyPrompt);

render();
