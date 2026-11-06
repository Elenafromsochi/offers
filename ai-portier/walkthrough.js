const tourCopy = {
  ru: {
    subtitle: 'Интерактивная демонстрация',
    titles: ['Посмотрите, как ИИ-портье работает в вашем отеле','Что умеет ИИ-портье?','Позвоните ИИ-портье','Как создаётся ИИ-портье?','Получите план внедрения'],
    stages: ['Тип объекта','Диалоги','LIVE ТЕСТ','Внедрение','Заполнить бриф'],
    types: ['Отель','Апарт-отель','Глэмпинг','Загородный клуб','База отдыха','Гостиничный комплекс'],
    rooms: ['Номер «Стандарт»','Апартаменты с кухней','Панорамный шатёр','Коттедж','Домик у озера','Номер «Делюкс»'],
    topics: ['Отвечает на сообщения','Подбирает номера','Оформляет бронь','Вопросы о проживании','Поздний выезд','Парковка и услуги'],
    intro: 'Выберите тип объекта, чтобы увидеть подходящие примеры.',
    note: 'Сценарии и цены приведены для примера. Реальная бронь в демо не создаётся.',
    guest: 'Гость', ai: 'ИИ-портье НЭЙРУ',
    next: ['','К демолинии →','К внедрению →','Заполнить бриф →',''],
    back: '← Назад', brief: 'Заполнить бриф →', chat: 'Задать свой вопрос ↗',
    voice: 'Попробуйте уточнить свободные даты, стоимость, условия заезда или парковку.',
    plan: ["От вас — информация", "Дальше — всё делаем мы"],
    planItems: [["Категории номеров", "Тарифы", "Правила заезда и выезда", "Онлайн-регистрация", "Парковка и метро", "Услуги", "Длительное проживание", "Частые вопросы"], ["Структурируем базу знаний", "Обучаем ИИ", "Пишем сценарии", "Подключаем телефонию", "Настраиваем интеграцию с Битрикс24 по согласованию", "Тестируем", "Запускаем"]],
    planNote: "Ваша команда продолжает работать в обычном режиме.",
    finish: 'Расскажите о вашем объекте и системе бронирования в брифе.',
    scripts: [
      ['Здравствуйте! Можно узнать про проживание на выходных?', 'Здравствуйте! Подскажите даты поездки и количество гостей.'],
      ['Нас двое, хотим остановиться на две ночи.', (room, rate) => `Есть вариант: ${room}. Цена — ${rate} ¥ за ночь, ${rate * 2} ¥ за две ночи.`],
      ['Подходит. Можно забронировать?', (room, rate) => `Демобронь: ${room}, 2 гостя, 2 ночи. Итого ${rate * 2} ¥. В подключённой системе отеля ИИ-портье оформит бронь после вашего подтверждения.`],
      ['Можно ли приехать с собакой?', 'В этом примере размещение с питомцем согласуется заранее. Уточните породу и вес, и я проверю условия.'],
      ['Можно выехать после 12:00?', 'В примере поздний выезд возможен при наличии свободного номера. Подскажите, до какого часа вы хотите остаться.'],
      ['Есть парковка? Можно заказать трансфер?', 'В примере есть парковка. Для запроса трансфера укажите время прибытия и количество пассажиров.']
    ]
  },
  en: {
    subtitle: 'Interactive demonstration',
    titles: ['See the AI concierge in action','What can the AI concierge do?','Call the AI concierge','How is the AI concierge set up?','Request a rollout plan'],
    stages: ['Property','Conversations','LIVE TEST','Implementation','Fill out the brief'],
    types: ['Hotel','Aparthotel','Glamping','Country club','Holiday park','Hotel complex'],
    rooms: ['Standard room','Apartment with kitchen','Panoramic tent','Cottage','Lakeside cabin','Deluxe room'],
    topics: ['Answers messages','Finds rooms','Handles bookings','Stay questions','Late check-out','Parking and services'],
    intro: 'Choose a property type to see examples tailored to it.',
    note: 'These are sample conversations and prices. The demo does not create a real booking.',
    guest: 'Guest', ai: 'NEURU AI concierge',
    next: ['','Go to the demo line →','Go to implementation →','Fill out the brief →',''],
    back: '← Back', brief: 'Complete the brief →', chat: 'Ask your own question ↗',
    voice: 'Try asking about available dates, prices, check-in or parking.',
    plan: ["What we need from you", "What we handle"],
    planItems: [["Room categories", "Rates", "Check-in and checkout rules", "Online check-in", "Parking and metro", "Services", "Long stays", "Frequently asked questions"], ["Organize the knowledge base", "Train the AI", "Write scripts", "Connect phone service", "Set up Bitrix24 integration as agreed", "Test", "Launch"]],
    planNote: "Your team continues working as usual.",
    finish: 'Tell us about your property and booking system in the brief.',
    scripts: [
      ['Hello! Can I ask about staying this weekend?', 'Of course. What dates are you planning, and how many guests?'],
      ['Two guests for two nights.', (room, rate) => `There’s a ${room.toLowerCase()} available at ¥${rate} per night, or ¥${rate * 2} for two nights.`],
      ['That works. Can I book it?', (room, rate) => `Demo booking: ${room}, 2 guests, 2 nights, ¥${rate * 2} total. With a connected hotel system, the AI concierge creates the reservation once you confirm.`],
      ['Can I bring my dog?', 'In this example, pets need prior approval. Tell me the breed and weight so I can check the policy.'],
      ['Can I check out after noon?', 'In this example, late check-out is subject to availability. What time would you like to leave?'],
      ['Is there parking? Can I get a transfer?', 'This example includes parking. For a transfer request, share your arrival time and passenger count.']
    ]
  },
  zh: {
    subtitle: '互动演示',
    titles: ['看看 AI 礼宾如何服务您的酒店','AI 礼宾能做什么？','拨打 AI 礼宾演示专线','AI 礼宾如何上线？','申请实施方案'],
    stages: ['住宿类型','对话示例','实时测试','实施流程','填写需求表'],
    types: ['酒店','公寓式酒店','豪华露营地','乡村俱乐部','度假村','酒店综合体'],
    rooms: ['标准客房','带厨房的公寓','全景帐篷','独栋小屋','湖畔木屋','豪华客房'],
    topics: ['回复消息','查找空房','办理预订','住宿问题','延迟退房','停车与服务'],
    intro: '选择住宿类型，查看适合您的对话示例。',
    note: '对话和价格仅供演示，演示不会创建真实订单。',
    guest: '宾客', ai: 'NEURU AI 礼宾',
    next: ['','体验演示电话 →','查看实施流程 →','填写需求表 →',''],
    back: '← 返回', brief: '填写需求表 →', chat: '输入自己的问题 ↗',
    voice: '您可以尝试询问可订日期、房价、入住条件或停车。演示专线使用俄语。',
    plan: ["您提供酒店资料", "我们负责实施"],
    planItems: [["房型", "房价", "入住和退房规则", "在线登记", "停车与地铁", "酒店服务", "长住", "常见问题"], ["整理知识库", "训练 AI", "编写对话流程", "接入电话系统", "按约定对接 Bitrix24", "测试", "上线"]],
    planNote: "您的团队可照常工作。",
    finish: '请在需求表中介绍您的住宿设施与预订系统。',
    scripts: [
      ['您好，我想了解周末住宿。','您好！请问入住日期和人数是多少？'],
      ['两个人，住两晚。',(room, rate) => `可订房型：${room}。每晚 ${rate} 元，两晚共 ${rate * 2} 元。`],
      ['合适，可以预订吗？',(room, rate) => `演示订单：${room}，2 位宾客，2 晚，共 ${rate * 2} 元。接入酒店系统后，AI 礼宾会在您确认后创建订单。`],
      ['可以带狗入住吗？','本示例需提前确认宠物入住。请提供品种与体重，以便核实条件。'],
      ['可以中午十二点后退房吗？','本示例可根据房态安排延迟退房。请问您希望几点离店？'],
      ['有停车位吗？可以预约接送吗？','本示例提供停车位。如需预约接送，请告知抵达时间和乘客人数。']
    ]
  }
};

const tourMetrics = {
  ru: [['24/7','Без перерывов и выходных'],['3 сек','Скорость ответа гостю'],['122','Отеля уже внедрили'],['+34%','Рост прямых бронирований'],['−40%','Экономия на персонале'],['90+','Языков понимает ИИ-портье']],
  en: [['24/7','Around-the-clock service'],['3 sec','Response time'],['122','Hotels have adopted it'],['+34%','Growth in direct bookings'],['−40%','Staffing cost savings'],['90+','Languages understood']],
  zh: [['24/7','全天候服务'],['3 秒','宾客咨询响应时间'],['122','家酒店已部署'],['+34%','直接预订增长'],['−40%','人员成本节省'],['90+','可理解的语言']]
};

const propertyIcons = ['🏨','🏢','⛺','🌲','🏡','🏙️'];
const topicIcons = ['💬','🛏️','📋','🐾','🌙','🅿️'];
let tourStep = 0;
let tourProperty = 0;
let tourTopic = 0;
const tour = document.getElementById('walkthrough');
const tileObserver = new IntersectionObserver(entries => {
  for (const entry of entries) {
    entry.target.classList.toggle('tour-properties-visible', entry.isIntersecting);
  }
});

const dialogueCopy = {
  ru: {
    own:'Задать свой вопрос', send:'Отправить', live:'К LIVE ТЕСТУ →',
    welcome:'Здравствуйте! Подскажу про номера, цены, завтрак, заезд, питомцев, парковку и условия бронирования. Что хотите узнать?',
    missing:'В базе демоотеля нет ответа на этот вопрос. Могу подсказать цены номеров, условия заезда, парковки и проживания с питомцами.',
    follow:[
      ['С 21 по 23 июня, нас двое.','Спасибо! Могу показать свободные варианты и посчитать стоимость на две ночи.'],
      ['Завтрак входит в стоимость?','Да, в этом демотарифе завтрак включён.'],
      ['Подтверждаю даты и стоимость.','Готово. В этом сценарии подтверждение появилось бы в системе отеля.'],
      ['Справка о вакцинации есть.','Отлично. Укажите при бронировании, что приедете с питомцем.'],
      ['До 15:00, пожалуйста.','В примере выезд до 15:00 можно добавить при наличии свободного номера.'],
      ['Две машины на три ночи.','Для расчёта нужно шесть машино-суток. Уточним наличие мест на ваши даты.']
    ],
    facts:['Завтрак подают с 07:00 до 10:00. В демонстрационном тарифе он включён.','Wi-Fi бесплатный в номерах и в холле.','Заезд с 14:00, выезд до 12:00. Ранний заезд и поздний выезд зависят от наличия номеров.','Проживание с питомцами согласуется заранее. Укажите породу и вес.','У демоотеля есть парковка. Для проверки мест нужны даты и количество машин.','Для трансфера сообщите время прибытия и количество пассажиров.']
  },
  en: {
    own:'Ask your own question', send:'Send', live:'GO TO LIVE TEST →',
    welcome:'Ask about breakfast, Wi-Fi, check-in, pets, parking or transfers.',
    missing:'The demo hotel’s knowledge base has no answer to that question. Try breakfast, Wi-Fi or stay policies.',
    follow:[
      ['June 21–23, two guests.','Thanks. I can show available options and calculate the total for two nights.'],
      ['Is breakfast included?','Yes, breakfast is included in this sample rate.'],
      ['I confirm the dates and price.','Done. In this scenario the confirmation would appear in the hotel system.'],
      ['I have the vaccination record.','Great. Please mention that you’re bringing a pet when you book.'],
      ['Until 3 p.m., please.','In this example, check-out at 3 p.m. can be added subject to availability.'],
      ['Two cars for three nights.','That’s six parking days in total. We’ll check availability for your dates.']
    ],
    facts:['Breakfast is served from 07:00 to 10:00 and is included in the demo rate.','Wi-Fi is free in guest rooms and the lobby.','Check-in starts at 14:00 and check-out is by 12:00. Early check-in and late check-out are subject to availability.','Pets require prior approval. Please specify breed and weight.','The demo hotel has parking. Provide your dates and number of cars to check availability.','For transfers, share your arrival time and passenger count.']
  },
  zh: {
    own:'提出自己的问题', send:'发送', live:'进入电话实测 →',
    welcome:'可以询问早餐、Wi-Fi、入住、宠物、停车或接送服务。',
    missing:'演示酒店的知识库中没有这个问题的答案。请尝试询问早餐、Wi-Fi 或住宿规则。',
    follow:[
      ['6 月 21 日至 23 日，两位。','谢谢。我可以为您查看可订房型并计算两晚总价。'],
      ['房价包含早餐吗？','是的，本演示房价含早餐。'],
      ['我确认日期和费用。','完成。在此演示场景中，确认信息会显示在酒店系统中。'],
      ['我有疫苗证明。','好的，请在预订时注明携带宠物。'],
      ['请延迟到下午三点。','本示例可视房态安排下午三点退房。'],
      ['两辆车，停三晚。','合计六个车位日。我们将查询您所选日期的空位。']
    ],
    facts:['早餐供应时间为 07:00 至 10:00，演示房价含早餐。','客房及大堂提供免费 Wi-Fi。','14:00 后入住，12:00 前退房。提前入住和延迟退房取决于房态。','携带宠物需提前确认，请提供品种及体重。','演示酒店提供停车位，请提供日期及车辆数量以查询空位。','如需接送，请提供抵达时间及乘客人数。']
  }
};
const screenshotDialogues = [
  [
    'Здравствуйте, хотел уточнить по номерам на следующие выходные',
    'Добрый день! Конечно, помогу. На какие даты планируете заезд?',
    '21–23 июня, нас будет двое',
    'На эти даты доступен Делюкс с видом на парк — 5 200 ₽/ночь, и Стандарт — 3 400 ₽. Завтрак включён. Какой предпочтительнее?',
    'Делюкс. А можно ранний заезд?',
    'Ранний заезд с 10:00 — 800 ₽ разово. После 14:00 — бесплатно. Оформить предварительную бронь?'
  ],
  [
    'Нас четверо — я, жена и двое детей 6 и 9 лет',
    'Рекомендую семейный номер 38 м² — две двуспальные кровати, детский уголок. Дети до 12 лет бесплатно. Когда приедете?',
    'Конец июля, примерно с 28-го',
    'На 28–31 июля семейный номер доступен — 6 800 ₽/ночь, завтрак включён. Забронируем?'
  ],
  [
    'Хочу забронировать номер. Что нужно?',
    'Назовите имя, телефон и даты — создам бронь и вышлю подтверждение на почту. Предоплата 20%, остаток при заезде.',
    'Иванов Сергей, телефон 9161234567',
    'Отлично, Сергей! На какие даты планируете заезд и сколько гостей?',
    'С 15 по 18 августа, двое взрослых',
    'Бронь #7842 создана. Предоплата 1 040 ₽ — по ссылке в письме. Если нужно изменить — звоните!'
  ],
  [
    'Можно к вам с собакой? Золотистый ретривер, 28 кг',
    'Принимаем питомцев до 30 кг в корпусе Б, номера 201–218. Доплата 700 ₽/сутки. Нужна справка о вакцинации.',
    'Справка есть. Как бронировать?',
    'При бронировании укажите «с питомцем» — автоматически назначу подходящий номер. Чем ещё могу вам помочь?'
  ],
  [
    'Можно остаться до 15:00 в день выезда?',
    'Конечно! Поздний выезд до 15:00 — 900 ₽, до 17:00 — 1 800 ₽. Добавить к брони #7842?',
    'Да, до 15 пожалуйста',
    'Готово. Поздний выезд до 15:00 добавлен. +900 ₽ при выезде. Приятного отдыха!'
  ],
  [
    'У вас есть парковка? Едем на двух машинах',
    'Крытая охраняемая парковка — 200 ₽/сутки за машину. Сколько ночей планируете?',
    'Три ночи, два места',
    'Два места на 3 ночи — 1 200 ₽, зарезервировал. Нужно ещё что-то: трансфер, ужин, SPA?'
  ]
];

const hotelKnowledge = [
  [/завтрак|breakfast|早餐/i,'В показанных тарифах завтрак уже входит в стоимость проживания. Отдельная цена завтрака в базе демоотеля не указана.','Breakfast is included in the listed room rates. The demo hotel does not list a separate breakfast price.','所列房价已包含早餐，演示酒店资料未注明单独购买早餐的价格。'],
  [/ранн.{0,12}(?:заезд|въезд)|до 14|early.{0,8}check|提前入住/i,'Ранний заезд с 10:00 стоит 800 ₽ разово. После 14:00 заезд бесплатный.','Early check-in from 10:00 costs RUB 800 once. Check-in after 14:00 is free.','10:00 起提前入住一次收费 800 卢布，14:00 后入住免费。'],
  [/выезд|выех|остаться|check[\s-]?out|退房/i,'Поздний выезд до 15:00 стоит 900 ₽, до 17:00 — 1 800 ₽.','Late check-out costs RUB 900 until 15:00 or RUB 1,800 until 17:00.','延迟退房至 15:00 收费 900 卢布，至 17:00 收费 1,800 卢布。'],
  [/заезд|засел|check[\s-]?in|入住/i,'Стандартный заезд после 14:00. Ранний заезд с 10:00 — 800 ₽.','Standard check-in is after 14:00. Early check-in from 10:00 costs RUB 800.','标准入住时间为 14:00 后，10:00 起提前入住收费 800 卢布。'],
  [/питом|собак|кошк|ретривер|вакцин|животн|\b(?:pets?|dogs?|cats?)\b|宠物|狗|疫苗/i,'Принимаем питомцев до 30 кг в корпусе Б (номера 201–218). Доплата 700 ₽ за сутки, нужна справка о вакцинации. Укажите питомца при бронировании.','Pets up to 30 kg are allowed in Building B, rooms 201–218, for RUB 700 per day. A vaccination record is required. Mention your pet when booking.','B 栋 201–218 号客房接待不超过 30 公斤的宠物，每天 700 卢布，需提供疫苗证明。预订时请注明携带宠物。'],
  [/парков|машин|автостоян|parking|\bcars?\b|停车/i,'Крытая охраняемая парковка стоит 200 ₽ за машину в сутки.','Covered, guarded parking costs RUB 200 per car per day.','有顶棚的安保停车场每辆车每天 200 卢布。'],
  [/семейн|дет[иея]|реб[её]н|четвер|family|children|家庭|儿童/i,'Семейный номер 38 м² с двумя двуспальными кроватями и детским уголком. Дети до 12 лет размещаются бесплатно. Пример тарифа на 28–31 июля — 6 800 ₽ за ночь с завтраком.','The 38 m² family room has two double beds and a children’s corner. Children under 12 stay free. The sample July 28–31 rate is RUB 6,800 per night with breakfast.','38 平方米家庭房配有两张双人床和儿童角。12 岁以下儿童免费。7 月 28–31 日示例房价为每晚 6,800 卢布，含早餐。'],
  [/номер|делюкс|стандарт|тариф|\brooms?\b|deluxe|客房|房型|房价/i,'В примере на 21–23 июня Стандарт стоит 3 400 ₽ за ночь, Делюкс с видом на парк — 5 200 ₽ за ночь. Завтрак включён.','Sample rates for June 21–23 are RUB 3,400 per night for Standard and RUB 5,200 for Park View Deluxe, with breakfast.','6 月 21–23 日示例价格：标准房每晚 3,400 卢布，公园景豪华房每晚 5,200 卢布，含早餐。'],
  [/предоплат|оплат|брони|депозит|deposit|payment|book|预订|付款|押金/i,'Для бронирования нужны имя, телефон и даты. Предоплата составляет 20%, остаток вносится при заезде. В демочате бронь не создаётся.','To book, provide a name, phone number and dates. The deposit is 20%, with the balance due at check-in. The demo chat does not create reservations.','预订需要姓名、电话和日期。预付 20%，余款入住时支付。演示聊天不会创建真实预订。'],
  [/трансфер|ужин|спа|transfer|dinner|spa|接送|晚餐/i,'В материалах демоотеля упомянуты трансфер, ужин и SPA. Цены и часы работы не указаны.','The demo hotel lists transfers, dinner and spa services. Prices and hours are not specified.','演示酒店资料提及接送、晚餐及 SPA 服务，未注明价格及营业时间。'],
  [/wi[\s-]?fi|вай.?фай|интернет|网络/i,'В материалах демоотеля нет информации о Wi-Fi.','Wi-Fi information is not listed in the demo hotel materials.','演示酒店资料未注明 Wi-Fi 信息。']
];

let previousHotelTopics = [];
function answerHotelQuestion(question, language) {
  const column = {ru: 1, en: 2, zh: 3}[language];
  const normalized = question.normalize('NFKC').toLowerCase().replace(/ё/g, 'е');
  const followUp = /сколько|стоим|цен[ауые]|дорого|доплат|бесплат|включ|услови|во сколько|до скольки|how much|price|cost|free|included|what time|多少|费用|免费|几点/i.test(normalized);
  const directTopics = hotelKnowledge.filter(([pattern]) => pattern.test(normalized));
  if (directTopics.length) previousHotelTopics = directTopics;
  const topics = directTopics.length ? directTopics : followUp ? previousHotelTopics : [];
  if (!topics.length && followUp) {
    return {
      ru: 'Уточните, пожалуйста, стоимость чего вас интересует: номера, завтрака, парковки или другой услуги?',
      en: 'What would you like a price for: a room, breakfast, parking or another service?',
      zh: '您想了解哪项费用？客房、早餐、停车，还是其他服务？'
    }[language];
  }
  return topics.map(row => row[column]).join(' ') || dialogueCopy[language].missing;
}

let dialogueRun = 0;

function addTourMessage(log, speaker, message, guest = false) {
  const bubble = document.createElement('div');
  bubble.className = guest ? 'tour-message guest' : 'tour-message';
  const label = document.createElement('small');
  label.textContent = speaker;
  bubble.append(label, document.createTextNode(message));
  log.append(bubble);
  log.scrollTop = log.scrollHeight;
}

async function playTourDialogue(messages, copy) {
  const run = dialogueRun;
  const log = tour.querySelector('.tour-log');
  for (const [index, message] of messages.entries()) {
    if (index && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
      await new Promise(resolve => setTimeout(resolve, index % 2 ? 750 : 480));
    }
    if (run !== dialogueRun) return;
    addTourMessage(log, index % 2 ? copy.ai : copy.guest, message, index % 2 === 0);
  }
}

tour.addEventListener('submit', event => {
  if (!event.target.matches('.tour-question')) return;
  event.preventDefault();
  const input = event.target.elements.question;
  const question = input.value.trim();
  if (!question) return;
  const copy = tourCopy[lang];
  const knowledge = dialogueCopy[lang];
  const log = tour.querySelector('.tour-log');
  addTourMessage(log, copy.guest, question, true);
  addTourMessage(log, copy.ai, answerHotelQuestion(question, lang));
  input.value = '';
  input.focus();
});

function renderTour() {
  dialogueRun += 1;
  let messages;
  const knowledge = dialogueCopy[lang];
  const copy = tourCopy[lang];
  const stepNavigation = copy.stages.map((stage, index) => index === 4
    ? `<a href="#brief">${index + 1} · ${stage}</a>`
    : `<button type="button" data-step="${index}" ${index === tourStep ? 'aria-current="step"' : ''}>${index + 1} · ${stage}</button>`).join('');
  previousHotelTopics = [];
  const heading = `<div class="tour-heading ${tourStep === 0 ? 'tour-cover' : ''}">${tourStep < 2 ? `<p class="tour-pill">${tourStep + 1} / 5 · ${copy.stages[tourStep]}</p>` : ''}<h2 id="walk-title" tabindex="-1">${copy.titles[tourStep]}</h2></div>`;
  let content;
  if (tourStep === 0) {
    const metrics = tourMetrics[lang].map(([value, label]) => `<li><strong>${value}</strong><span>${label}</span></li>`).join('');
    content = `<ul class="tour-metrics">${metrics}</ul><p class="tour-center">${copy.intro}</p><div class="tour-properties">${copy.types.map((type, index) => `<button type="button" data-property="${index}" style="--tile-delay:${index * 950}ms"><span aria-hidden="true">${propertyIcons[index]}</span>${type}</button>`).join('')}</div>`;
  } else if (tourStep === 1) {
    const topics = [...copy.topics, knowledge.own];
    const custom = tourTopic === copy.topics.length;
    if (!custom && lang === 'ru') {
      messages = screenshotDialogues[tourTopic];
    } else if (!custom) {
      const [question, response] = copy.scripts[tourTopic];
      const answer = typeof response === 'function' ? response(copy.rooms[tourProperty], 380 + tourProperty * 70) : response;
      messages = [question, answer, ...knowledge.follow[tourTopic]];
    }
    const questionForm = custom ? `<form class="tour-question"><input name="question" aria-label="${knowledge.own}" placeholder="${knowledge.own}" required maxlength="500"><button class="button" type="submit">${knowledge.send}</button></form>` : '';
    content = `<div class="tour-dialog"><div class="tour-topics">${topics.map((topic, index) => `<button type="button" data-topic="${index}" style="--tile-delay:${index * 950}ms" aria-pressed="${index === tourTopic}"><span aria-hidden="true">${topicIcons[index] || '✎'}</span> ${topic}</button>`).join('')}</div><div class="tour-conversation"><strong>${copy.ai} · ${copy.types[tourProperty]}</strong><div class="tour-log" role="log" aria-live="polite"></div>${questionForm}<p class="muted">${copy.note}</p></div></div>`;
  } else if (tourStep === 2) {
    const live = {
      ru: ['Проверьте ИИ-портье в реальном времени', 'Во время звонка можно', 'ИИ-портье отвечает на звонки даже ночью и в часы пик. При подключении к PMS он проверяет наличие номеров и оформляет бронь.', 'Подобрать номер', 'Уточнить даты и предпочтения', 'Узнать стоимость', 'Спросить о тарифах и акциях', 'Уточнить условия заезда', 'Спросить о парковке и других услугах', 'Пройти сценарий бронирования', 'Узнать, как бронь попадает в PMS'],
      en: ['Try the AI concierge in real time', 'During the call you can', 'The AI concierge answers calls overnight and during peak hours. With a PMS connection, it checks room availability and creates reservations.', 'Find a room', 'Share dates and preferences', 'Check prices', 'Ask about rates and offers', 'Check arrival options', 'Ask about parking and other services', 'Try the booking flow', 'See how reservations reach your PMS'],
      zh: ['实时体验 AI 礼宾', '通话中可以', 'AI 礼宾在夜间和高峰时段也能接听电话。接入酒店管理系统后，可以查询空房并创建预订。演示专线使用俄语。', '挑选客房', '说明日期和偏好', '查询价格', '了解房价及优惠', '了解入住条件', '询问停车和其他服务', '体验预订流程', '了解预订如何进入酒店管理系统']
    }[lang];
    const icons = ['🛏️', '💰', '🚗', '📅'];
    const features = icons.map((icon, index) => `<li><span aria-hidden="true">${icon}</span><div><strong>${live[3 + index * 2]}</strong><br>${live[4 + index * 2]}</div></li>`).join('');
    content = `<p class="tour-live-intro">${live[2]}</p><div class="tour-voice"><a class="tour-phone" href="tel:+74950670211" aria-label="${copy.titles[2]} +7 495 067-02-11"><small>NEURU · AI CONCIERGE</small><strong>+7 (495) 067-02-11</strong><span aria-hidden="true">☎</span></a><div class="tour-live-details"><h3>${live[0]}</h3><p>${live[1]}</p><ul>${features}</ul></div></div>`;

  } else {
    content = `<div class="tour-plan">${copy.plan.map((title, index) => `<article><h3>${title}</h3><ul>${copy.planItems[index].map((item, itemIndex) => `<li style="--plan-delay:${(itemIndex + (index ? copy.planItems[0].length : 0)) * 650}ms">${item}</li>`).join('')}</ul></article>`).join('')}</div><p class="tour-plan-note">${copy.planNote}</p>`;
  }

  const back = tourStep > 0 ? `<button class="secondary" type="button" data-step="${tourStep - 1}">${copy.back}</button>` : '';
  const next = tourStep === 3 ? `<a class="button" href="#brief">${copy.next[3]}</a>` : tourStep > 0 ? `<button class="button" type="button" data-step="${tourStep + 1}">${tourStep === 1 ? knowledge.live : copy.next[tourStep]}</button>` : '';
  tileObserver.disconnect();
  tour.innerHTML = `<p class="tour-subtitle">${copy.subtitle}</p><div class="tour-steps">${stepNavigation}</div>` + heading + content + `<div class="tour-actions">${back}${next}</div>`;
  const plan = tour.querySelector('.tour-plan');
  if (plan) tileObserver.observe(plan);
  const properties = tour.querySelector('.tour-properties');
  if (properties) tileObserver.observe(properties);
  const topics = tour.querySelector('.tour-topics');
  if (topics) {
    tileObserver.observe(topics);
    if (messages) playTourDialogue(messages, copy);
    else addTourMessage(tour.querySelector('.tour-log'), copy.ai, knowledge.welcome);
  }
}

tour.addEventListener('click', event => {
  const button = event.target.closest('button');
  if (!button) return;
  if (button.dataset.topic !== undefined) {
    tourTopic = Number(button.dataset.topic);
    renderTour();
    const field = tour.querySelector('.tour-question input');
    (field || tour.querySelector(`[data-topic="${tourTopic}"]`)).focus();
    return;
  }
  if (button.dataset.property !== undefined) {
    tourProperty = Number(button.dataset.property);
    tourTopic = 0;
    tourStep = 1;
  } else if (button.dataset.step !== undefined) {
    tourStep = Number(button.dataset.step);
  } else {
    return;
  }
  renderTour();
  document.getElementById('walk-title').focus();
});
document.getElementById('language').addEventListener('change', () => queueMicrotask(renderTour));
renderTour();
