const pricing = document.getElementById('pricing');
const rub = value => new Intl.NumberFormat(lang, { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 }).format(value);
const priceCopy = {
  ru: ['Стоимость', 'Голосовой ИИ-портье', 'Текстовый ИИ-портье', 'Разовое внедрение', 'Ежемесячная оплата', '1 000 минут в месяц. Расширенный пакет — по запросу.', 'По запросу', 'Калькулятор внедрения', 'Количество номеров', 'Выберите формат', 'Голос', 'Текст', 'Голос + текст', 'Рассчитать', 'Внимание! При принятии решения в течение 3 дней — скидка 20% на внедрение.', 'Со скидкой', 'До 30 номеров', '31–100 номеров', '101–300 номеров', 'Более 300 номеров', 'База знаний, сценарии, телефония, интеграция с PMS, тестирование, запуск и обучение администраторов.', 'База знаний, сайт, Telegram, ВКонтакте, Авито, интеграция с PMS, тестирование, запуск и обучение администраторов.'],
  en: ['Pricing', 'Voice AI concierge', 'Text AI concierge', 'One-time setup', 'Monthly fee', '1,000 minutes per month. Larger plans on request.', 'On request', 'Setup calculator', 'Number of rooms', 'Choose a format', 'Voice', 'Text', 'Voice + text', 'Calculate', 'Decide within 3 days to get 20% off setup.', 'With discount', 'Up to 30 rooms', '31–100 rooms', '101–300 rooms', 'Over 300 rooms', 'Knowledge base, scripts, telephony, PMS integration, testing, launch and staff training.', 'Knowledge base, website, Telegram, VK, Avito, PMS integration, testing, launch and staff training.'],
  zh: ['价格', '语音 AI 礼宾', '文字 AI 礼宾', '一次性实施费', '月费', '每月含 1,000 分钟。扩展套餐请咨询。', '请咨询', '实施费用计算器', '客房数量', '选择服务形式', '语音', '文字', '语音 + 文字', '计算', '请注意！3 天内确认，可享一次性实施费八折优惠。', '优惠价', '30 间及以下', '31–100 间', '101–300 间', '超过 300 间', '包括知识库、对话流程、电话系统、PMS 集成、测试、上线及员工培训。', '包括知识库、网站、Telegram、VK、Avito、PMS 集成、测试、上线及员工培训。']
};
const voiceTiers = [119000, 149000, 199000];
const textSetup = 79000;
const voiceMonthly = 20000;
const textMonthly = 15000;
let quoteTimer;
let quote = null;

function renderPricing() {
  const t = priceCopy[lang];
  const roomCount = pricing.querySelector('[name=rooms]')?.value ?? '30';
  const format = pricing.querySelector('[name=format]')?.value ?? 'voice';
  pricing.innerHTML = `<section class="section price-section" aria-labelledby="price-title">
    <h2 id="price-title">${t[0]}</h2>
    <div class="price-grid">
      <article><h3>${t[1]}</h3><b>${t[3]}</b><dl>${[...voiceTiers, null].map((cost, i) => `<div><dt>${t[16+i]}</dt><dd>${cost === null ? t[6] : rub(cost)}</dd></div>`).join('')}</dl><p>${t[20]}</p><p><b>${t[4]} · ${rub(voiceMonthly)}</b><br>${t[5]}</p></article>
      <article><h3>${t[2]}</h3><p><b>${t[3]} · ${rub(textSetup)}</b></p><p>${t[21]}</p><p><b>${t[4]} · ${rub(textMonthly)}</b></p></article>
    </div>
  </section>
  <section class="section price-section" aria-labelledby="quote-title">
    <h2 id="quote-title">${t[7]}</h2>
    <form class="quote-form">
      <label>${t[8]}<input name="rooms" type="number" min="1" max="999999" step="1" required></label>
      <label>${t[9]}<select name="format"><option value="voice">${t[10]}</option><option value="text">${t[11]}</option><option value="both">${t[12]}</option></select></label>
      <button class="button">${t[13]}</button>
    </form>
    <div class="quote-result" aria-live="polite"></div>
  </section>`;
  const form = pricing.querySelector('form');
  form.elements.rooms.value = roomCount;
  form.elements.format.value = format;
  form.addEventListener('input', () => {
    clearTimeout(quoteTimer);
    quote = null;
    showQuote();
  });
  form.addEventListener('submit', event => {
    event.preventDefault();
    clearTimeout(quoteTimer);
    const rooms = form.elements.rooms.valueAsNumber;
    const selection = form.elements.format.value;
    const voice = selection !== 'text';
    const chat = selection !== 'voice';
    const tier = rooms <= 30 ? 0 : rooms <= 100 ? 1 : 2;
    quote = {
      setup: voice && rooms > 300 ? null : (voice ? voiceTiers[tier] : 0) + (chat ? textSetup : 0),
      monthly: (voice ? voiceMonthly : 0) + (chat ? textMonthly : 0),
      discounted: false
    };
    showQuote();
    quoteTimer = setTimeout(() => {
      quote.discounted = true;
      showQuote();
    }, 5000);
  });
  showQuote();
}

function showQuote() {
  const result = pricing.querySelector('.quote-result');
  if (!quote) { result.replaceChildren(); return; }
  const t = priceCopy[lang];
  const amount = quote.setup === null ? t[6] : quote.discounted
    ? `<del>${rub(quote.setup)}</del> <strong>${rub(quote.setup * .8)}</strong>`
    : `<strong>${rub(quote.setup)}</strong>`;
  result.innerHTML = `${quote.discounted ? `<p class="quote-promo">${t[14]}</p>` : ''}<dl><div><dt>${t[3]}</dt><dd>${amount}</dd></div><div><dt>${t[4]}</dt><dd><strong>${rub(quote.monthly)}</strong></dd></div></dl>`;
}
document.getElementById('language').addEventListener('change', renderPricing);
renderPricing();
