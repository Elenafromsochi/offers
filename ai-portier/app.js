const keys='navDemo|navProcess|navFaq|briefBtn|eyebrow|hero|intro|try|call|heroNote|artLabel|s1|s2|s3|s4|demoEye|demoTitle|demoIntro|channelTitle|channelNote|roleTitle|voiceEye|voiceTitle|voiceNote|chatStatus|disclaimer|processEye|processTitle|rolesTitle|rolesIntro|faqTitle|faqIntro|briefEye|briefTitle|briefIntro|name|position|phone|hotel|openBrief|website|tasks|systems|materials|consent|send|download|sendNote|footer'.split('|');
const texts={ru:[ 'Попробовать','Как это работает','Вопросы','Заполнить бриф ↗','ИИ-ПОРТЬЕ ДЛЯ ОТЕЛЕЙ · НЭЙРУ','Гостеприимство.<br>Даже когда<br><em>город спит.</em>','Голосовой и текстовый помощник, который встречает гостей, отвечает на вопросы и передаёт заявки вашей команде. Круглосуточно.','Попробовать в диалоге ↗','Позвонить ИИ-портье ↗','Ваш сервис продолжается после окончания смены','Добрый вечер. Чем могу помочь?','на связи с вашими гостями','языка интерфейса: RU / EN / 中文','передача обращений команде','от первого вопроса до заявки','01 / ПОЗНАКОМЬТЕСЬ С ПОМОЩНИКОМ','Прежде чем доверить гостей —<br>поговорите сами.','Выберите роль и канал. Пройдите типичный путь гостя в интерактивной демонстрации.','Где начнём разговор?','Здесь — имитация трёх каналов. Реальные подключения согласуются отдельно.','Роль помощника','ПОПРОБУЙТЕ ГОЛОСОМ','Услышьте, как он встречает гостей.','Демолиния из презентации. Звонок по тарифу оператора. Язык и доступность линии уточняются при звонке.','Сценарное демо · отель «Тихий берег»','Демонстрация по сценариям, без генеративной модели. Заявки в отель не отправляются.','02 / ОТ ЗНАНИЙ К СЕРВИСУ','Ваша экспертиза.<br>Его ежедневная работа.','Один отель. Разные задачи.','Примеры ролей для проектирования. Состав разработки закрепляем в предложении.','Всё, что нужно знать<br><em>до запуска.</em>','Возможности из презентации и условия, которые необходимо согласовать.','03 / НАЧНЁМ С ВАШЕГО ОТЕЛЯ','Каким будет<br>ваш ИИ-портье?','Представьтесь и заполните бриф, чтобы определить задачи, источники знаний и интеграции.','Имя','Должность','Телефон','Отель','Перейти к брифу →','Сайт отеля','Задачи, аудитория и языки','Телефония, CRM, PMS и каналы','Материалы, тарифы, правила и ссылки','Согласен передать эти сведения команде НЭЙРУ для обсуждения проекта. Не передаю данные гостей, пароли и ключи.','Подготовить письмо ↗','Скачать бриф','Откроется почтовое приложение с письмом на sales@neuru.ru. Подтвердите отправку в нём.','ИИ-портье для отелей · НЭЙРУ'],en:['Try it','How it works','Questions','Complete the brief ↗','AI CONCIERGE FOR HOTELS · NEURU','Hospitality.<br>Even when<br><em>the city sleeps.</em>','A voice and text assistant that welcomes guests, answers questions and passes enquiries to your team. Around the clock.','Try a conversation ↗','Call the AI concierge ↗','Your service continues after the shift ends','Good evening. How may I help?','here for your guests','interface languages: RU / EN / 中文','enquiries passed to your team','from first question to enquiry','01 / MEET YOUR ASSISTANT','Before you trust it with guests,<br>have a conversation.','Choose a role and channel. Explore a typical guest journey in an interactive demonstration.','Where shall we talk?','These are simulated channel interfaces. Live connections are agreed separately.','Assistant role','TRY THE VOICE','Hear how it welcomes guests.','Demo number from the presentation. Operator call rates apply. Line availability and spoken languages are confirmed on the call.','Scripted demo · Quiet Shore hotel','Scenario-based simulation without a generative model. No enquiries are sent to a hotel.','02 / FROM KNOWLEDGE TO SERVICE','Your expertise.<br>Its everyday work.','One hotel. Different needs.','Suggested roles for scoping. The development scope is confirmed in the proposal.','What to know<br>before launch.','Capabilities described in the presentation and terms to agree before connecting.','03 / START WITH YOUR HOTEL','What could your<br>AI concierge be?','Introduce yourself and complete the brief to define tasks, knowledge sources and integrations.','Name','Job title','Phone','Hotel','Continue to the brief →','Hotel website','Tasks, audience and languages','Telephony, CRM, PMS and channels','Materials, rates, policies and links','I agree to share these details with NEURU to discuss the project. I will not include guest data, passwords or secret keys.','Prepare an email ↗','Download brief','Your email app will open a draft to sales@neuru.ru. Confirm sending there.','AI concierge for hotels · NEURU'],zh:['体验','工作方式','常见问题','填写需求表 ↗','酒店智能礼宾 · NEURU','热情服务。<br>即使<br><em>城市已入眠。</em>','语音和文字助手，迎接宾客、解答问题，并将咨询转交酒店团队，全天候提供服务。','开始对话 ↗','致电智能礼宾 ↗','下班之后，服务依然继续','晚上好，有什么可以帮您？','全天候服务宾客','界面语言：俄 / 英 / 中','将咨询转交团队','从首次咨询到预订申请','01 / 认识您的助手','交给宾客之前，<br>先亲自聊一聊。','选择角色与渠道，体验宾客的典型咨询流程。','选择沟通渠道','此处为三种渠道的模拟界面，实际接入需另行确认。','助手角色','体验语音','听听它如何迎接宾客。','演示号码来自产品资料。通话按运营商资费计费，线路与语音语言以实际接通情况为准。','脚本演示 · 静岸酒店','基于预设场景的演示，未连接生成式模型，不会向酒店发送申请。','02 / 从知识到服务','您的专业知识。<br>它的日常服务。','一家酒店，多种需求。','以下为建议角色，具体开发范围将在方案中确认。','上线之前，<br>您需要知道。','资料中的功能说明，以及接入前需协商的条款。','03 / 从您的酒店开始','您的智能礼宾<br>会是什么样？','请填写联系信息和需求，以便确定任务、知识来源及系统集成。','姓名','职位','电话','酒店','继续填写需求 →','酒店网站','任务、客群与语言','电话、CRM、PMS和渠道','资料、价格、规则和链接','我同意将这些信息提供给NEURU用于项目沟通，不提供宾客数据、密码或密钥。','准备邮件 ↗','下载需求表','将打开邮件应用，收件人为sales@neuru.ru，请在邮件应用中确认发送。','酒店智能礼宾 · NEURU']};
const extra={ru:{roles:['Консьерж','Помощник по бронированию','Сервисный помощник'],desc:['Консультирует о заезде, Wi-Fi, парковке и услугах. Разработка: база знаний, сценарии и передача сложных вопросов сотруднику.','Уточняет даты, гостей и предпочтения. Разработка: сбор заявки и правила передачи. Наличие и подтверждение брони требуют интеграции.','Принимает запросы проживающих. Разработка: категории обращений и маршрутизация. Статусы и уведомления требуют подключения систем.'],prompts:['Во сколько заезд?','Есть парковка?','Хочу забронировать номер'],greet:'Добрый вечер! Я ИИ-портье демонстрационного отеля «Тихий берег». Помогу с заездом, услугами или заявкой на проживание.',answers:['В демонстрационном отеле заезд с 14:00, выезд до 12:00. Ранний заезд согласуется с администратором.','В нашем демосценарии есть парковка. Стоимость и наличие мест нужно уточнить у администратора.','Подскажите даты поездки, количество гостей и предпочтения по номеру. В этом демо наличие и цены не проверяются.','В рабочем помощнике этот вопрос передаётся администратору с контекстом. Здесь можно попробовать вопросы о заезде, парковке и бронировании.'],steps:[['Собираем знания','Номера, тарифы, услуги, правила и частые вопросы.'],['Проектируем диалоги','Роли, языки и правила передачи сотруднику.'],['Соединяем системы','Согласуем телефонию, каналы общения и CRM.'],['Проверяем и запускаем','Тестируем с командой. Сроки и обновления фиксируем до старта.']],check:'Для подготовки:\n✓ Категории номеров и тарифы\n✓ Правила проживания и услуги\n✓ FAQ и примеры диалогов\n✓ Телефония и список систем\n\nФорматы: DOCX, PDF с текстом, XLSX, CSV или ссылки. Доступы — после согласования защищённого способа передачи.',status:'Письмо подготовлено. Подтвердите отправку в почтовом приложении. Доставка не подтверждена; запись в CRM не создана.',placeholder:'Задайте вопрос об отеле…'},en:{roles:['Concierge','Booking assistant','Guest service assistant'],desc:['Answers questions about check-in, Wi-Fi, parking and amenities. Scope: knowledge base, conversations and staff escalation.','Collects dates, guest count and preferences. Scope: enquiry fields and handover rules. Availability and confirmation need integrations.','Receives requests from staying guests. Scope: request categories and routing. Status tracking and notifications need system connections.'],prompts:['When is check-in?','Is parking available?','I want to book a room'],greet:'Good evening! I am the AI concierge of the fictional Quiet Shore hotel. I can help with check-in, services or a booking enquiry.',answers:['At our demo hotel, check-in is from 14:00 and check-out is by 12:00. Early arrival must be agreed with reception.','Parking is included in this demo scenario. Please confirm availability and rates with reception.','What dates, guest count and room preferences do you have? This demo does not check availability or prices.','In a live assistant this question would be passed to reception with context. Try asking about check-in, parking or booking here.'],steps:[['Gather knowledge','Rooms, rates, amenities, policies and frequently asked questions.'],['Design conversations','Roles, languages and staff escalation rules.'],['Connect systems','Agree on telephony, channels and CRM.'],['Test and launch','Test with your team. Confirm timing and updates before launch.']],check:'Prepare:\n✓ Room categories and rates\n✓ Policies and amenities\n✓ FAQ and example conversations\n✓ Telephony and system list\n\nFormats: DOCX, text PDF, XLSX, CSV or links. Access credentials are shared only through an agreed secure method.',status:'Email prepared. Confirm sending in your email app. Delivery is not confirmed; no CRM record was created.',placeholder:'Ask about the hotel…'},zh:{roles:['礼宾助手','预订助手','住客服务助手'],desc:['解答入住、Wi-Fi、停车及设施问题。开发范围：知识库、对话场景及人工转接。','收集日期、人数及房型偏好。开发范围：申请字段与转交规则，房态查询和确认需集成。','接收在住宾客的需求。开发范围：需求分类与分配，状态跟踪和通知需连接系统。'],prompts:['几点入住？','有停车场吗？','我想预订房间'],greet:'晚上好！我是虚构的静岸酒店智能礼宾，可以帮助您了解入住、设施及预订申请。',answers:['演示酒店入住时间为14:00以后，退房时间为12:00以前，提前入住需与前台确认。','此演示场景设有停车场，费用和空位需向前台确认。','请问入住日期、人数及房型偏好是什么？本演示不查询房态和价格。','实际助手会将此问题及对话上下文转交前台，您可以尝试询问入住、停车或预订问题。'],steps:[['收集知识','房型、价格、设施、规则和常见问题。'],['设计对话','角色、语言和转人工规则。'],['连接系统','协商电话、沟通渠道和CRM。'],['测试并上线','与团队一起测试，上线前明确时间及更新流程。']],check:'请准备：\n✓ 房型及价格\n✓ 住宿规则及设施\n✓ 常见问题与对话示例\n✓ 电话及系统清单\n\n格式：DOCX、文字PDF、XLSX、CSV或链接。访问凭证仅通过协商的安全方式提供。',status:'邮件已准备，请在邮件应用中确认发送。未确认送达，未创建CRM记录。',placeholder:'询问酒店相关问题…'}};
const faqs={ru:[['К каким номерам и операторам подключается помощник? Кто предоставляет российский номер?','В презентации заявлена работа с существующей телефонией, но список операторов не приведён. Для русскоязычных клиентов сначала проверяем российский номер отеля, оператора, АТС и возможность переадресации или SIP-подключения. Совместимость подтверждается после проверки. Кто предоставляет новый номер, на кого он оформляется и как переносится — закрепляется в договоре с поставщиком связи. Рекомендуем согласовать оформление номера на юридическое лицо отеля. Демолиния не является номером заказчика.'],['Какие сведения, материалы и доступы нужны для обучения?','Нужны описание отеля, категории и вместимость номеров, тарифы, ограничения, правила оплаты, отмены, заезда и выезда, услуги, контакты, FAQ и типовые диалоги. Укажите языки и правила передачи сотруднику. Форматы: DOCX, PDF с текстом, XLSX/CSV и актуальные ссылки с ответственным и датой обновления. Доступы к телефонии, CRM, PMS и бронированию определяем по выбранным интеграциям. Используйте отдельные учётные записи с минимальными правами. Пароли и ключи не передавайте в форме.'],['Сколько занимает запуск и кто вносит изменения?','Подтверждённого срока запуска в PDF нет. Он зависит от готовности материалов, телефонии, интеграций и тестирования. План и дату согласуем после брифа. По презентации команда НЭЙРУ структурирует знания, настраивает, тестирует и запускает помощника; обновление базы знаний входит в сопровождение. Лимиты изменений и сроки реакции необходимо закрепить в договоре.'],['Какие права получает заказчик? Что происходит при прекращении оплаты?','Условия лицензии, владения настройками, выгрузки и удаления данных в презентации не указаны. До оплаты согласуйте права использования, принадлежность материалов, экспорт базы и настроек, хранение и удаление данных. Отдельно закрепите приостановку помощника, отключение переадресации, сохранение номера и передачу данных при расторжении. Эти условия определяются договором и оформлением номера; сайт их не устанавливает.'],['Какие роли текстовых помощников доступны и что входит в разработку?','Представлены три проектных сценария: консьерж для консультаций, помощник по бронированию для сбора заявок и сервисный помощник для запросов проживающих. Это предлагаемые роли, а не подтверждённый каталог готовых продуктов. Базовый состав для согласования: сценарии, знания, стиль общения, языки, эскалация и тестирование. Интеграции, платежи и подтверждение брони включаются только по смете.'],['На каких площадках уже работают помощники? Что оплачивается отдельно?','Презентация описывает голосовой сценарий и передачу заявок в Битрикс24; в схеме также указаны TravelLine, email, Telegram и WhatsApp. Ссылки и подтверждения действующих текстовых внедрений не предоставлены. Здесь показана имитация каналов. От клиента потребуются список площадок, технические сведения и права администратора после согласования. В предложении для конкретного отеля указана интеграция с Битрикс24; это не подтверждает включение других систем. Платежи оператору, API, сообщения, дополнительные языки и интеграции уточняются в смете.']],en:[['Which numbers and operators are supported? Who supplies a Russian number?','The presentation describes using existing hotel telephony but does not list supported operators. We first assess your Russian number, provider, PBX and forwarding or SIP options. Compatibility requires confirmation. A new number’s supplier, registered owner and portability must be set out in the telecom contract. We suggest discussing registration to the hotel’s legal entity. The demo line is not a customer-owned number.'],['What materials and access are needed?','Provide hotel information, room categories and capacity, rates, restrictions, payment and cancellation policies, arrival and departure rules, amenities, contacts, FAQ and sample conversations. Include languages and escalation rules. Formats: DOCX, text PDF, XLSX/CSV or current links with an owner and update date. Telephony, CRM, PMS and booking access depend on agreed integrations. Use separate accounts with minimal permissions. Do not put passwords or keys in the form.'],['How long does launch take, and who updates it?','The PDF does not confirm a launch timeline. Timing depends on materials, telephony, integrations and testing. Agree milestones after the brief. The presentation assigns knowledge structuring, configuration, testing and launch to NEURU and includes knowledge-base updates in support. Change limits and response times must be agreed in the contract.'],['What rights does the customer receive? What happens if payment stops?','The presentation does not define licensing, ownership of settings, export or deletion terms. Before payment, agree usage rights, ownership of source materials, export of knowledge and configuration, retention and deletion. Also agree service suspension, forwarding removal, number retention and data handover on termination. These are contract terms and are not established by this website.'],['What text assistant roles and development scopes are available?','Three suggested project scenarios appear here: concierge for information, booking assistant for enquiry collection, and guest service assistant for requests. They are proposed roles, not a verified catalogue of ready-made products. Agree conversations, knowledge, tone, languages, escalation and testing. Integrations, payments and booking confirmation require explicit inclusion in the quote.'],['Where are assistants already live, and what costs extra?','The presentation describes a voice scenario with Bitrix24 enquiry handover; its diagram also lists TravelLine, email, Telegram and WhatsApp. Links and evidence of live text deployments were not supplied. This site simulates channels. Customers provide channel details and administrator access after scoping. A specific hotel proposal includes Bitrix24; that does not establish inclusion of other systems. Telecom, API, messaging, extra language and integration costs must be clarified in the quote.']],zh:[['支持哪些号码与运营商？谁提供俄罗斯号码？','资料说明可使用酒店现有电话系统，但未列出运营商。首先需检查俄罗斯号码、运营商、交换机及转接或SIP条件，兼容性需确认。新号码的提供方、登记主体及携号规则须在通信合同中约定，建议讨论登记在酒店法人名下。演示号码不是客户号码。'],['需要哪些资料和访问权限？','请提供酒店介绍、房型容量、价格、限制、付款取消政策、入住退房规则、设施、联系人、常见问题及对话示例，并注明语言和人工转接规则。格式：DOCX、文字PDF、XLSX/CSV或标有负责人及更新日期的链接。电话、CRM、PMS及预订权限按集成范围确定，请使用最小权限的独立账户，不在表单中填写密码或密钥。'],['上线需要多久？谁负责修改？','PDF未确认上线周期，取决于资料、电话、集成和测试。填写需求后协商计划。资料说明NEURU负责知识整理、配置、测试和上线，维护包含知识库更新。修改次数及响应时间应在合同中约定。'],['客户拥有哪些权利？停止付款后如何处理？','资料未说明许可、配置所有权、导出及删除条款。付款前应约定使用权、原始资料归属、知识与配置导出、数据保存及删除。另需明确服务暂停、关闭转接、号码保留和终止后的数据交接，这些由合同及号码登记决定。'],['文字助手有哪些角色？开发包含什么？','此处展示三种建议场景：咨询礼宾、收集预订申请及处理住客需求。这些是项目建议角色，并非已验证的成品目录。需协商对话、知识、风格、语言、人工转接和测试。集成、付款及预订确认仅在报价明确列出后包含。'],['目前在哪些平台运行？哪些费用另计？','资料描述语音场景及向Bitrix24提交申请，流程图还列有TravelLine、邮件、Telegram和WhatsApp。未提供文字助手实际部署链接与证明，本站为渠道模拟。客户需在协商后提供渠道详情及管理员权限。某酒店方案包含Bitrix24，不代表其他系统也包含。通信、API、消息、额外语言与集成费用需在报价中确认。']]};
let lang='zh';const $=id=>document.getElementById(id);function render(){document.documentElement.lang=lang==="zh"?"zh-CN":lang;document.querySelectorAll('[data-t]').forEach(el=>{let val=texts[lang][keys.indexOf(el.dataset.t)];if(['hero','demoTitle','processTitle','faqTitle','briefTitle'].includes(el.dataset.t))el.innerHTML=val;else el.textContent=val});$('faqList').innerHTML=faqs[lang].map(([q,a],i)=>i === 5 ? '' : `<details><summary><span class="faq-icon" aria-hidden="true">${['▦','☎','▱','◷','♙','⚙','▤'][i]}</span><span>${q}</span></summary><p>${a}</p></details>`).join('');const [checklist, formats] = extra[lang].check.split('\n\n');
$('checklist').textContent = checklist;
$('briefFormats').textContent = formats;
$('formStatus').textContent = '';
}
$('language').onchange = event => { lang = event.target.value; render(); };
function briefText(){let f=new FormData($('briefForm'));return 'NEURU / HOTEL BRIEF\n'+['name','position','phone','hotel','website','tasks','systems','materials'].map(k=>texts[lang][keys.indexOf(k)]+': '+(f.get(k)||'—')).join('\n\n')+'\n\nLanguage: '+lang;} $('briefForm').onsubmit=e=>{e.preventDefault();if(!$('extended').hidden){location.href='mailto:sales@neuru.ru?subject='+encodeURIComponent('ИИ-портье / '+$('briefForm').elements.hotel.value)+'&body='+encodeURIComponent(briefText());$('formStatus').textContent=extra[lang].status}};$('download').onclick=()=>{if(!$('briefForm').reportValidity())return;let u=URL.createObjectURL(new Blob(['\ufeff'+briefText()],{type:'text/plain;charset=utf-8'})),a=document.createElement('a');a.href=u;a.download='neuru-hotel-brief.txt';a.click();setTimeout(()=>URL.revokeObjectURL(u),1000)};
const market={
zh:{copy:{eyebrow:'NEURU НЭЙРУ · 面向中国酒店的俄语 AI 礼宾',hero:'俄罗斯宾客想订房？<br><em>24/7 用俄语接待。</em>',intro:'为接待俄罗斯游客的中国酒店打造。宾客用俄语来电或咨询，AI 礼宾介绍房型与入住规则、询问日期和人数，并把预订需求转交给酒店。即使前台在忙，咨询也能继续。',try:'体验俄语预订流程 ↗',call:'拨打俄语演示专线 ↗',order:'为我的酒店申请方案 →',briefBtn:'填写需求表 →',heroNote:'按酒店规则回答 · 复杂问题转交人工',artLabel:'俄语接待 · Добрый вечер!',s1:'全天候接待俄罗斯宾客',s2:'种网站语言：简中 / 俄 / 英',s3:'将预订需求转交酒店团队',s4:'从俄语咨询到酒店确认',nightLabel:'夜间前台 · 在线',demoTitle:'亲自体验一次<br>俄罗斯宾客的预订咨询。',demoIntro:'选择预订助手和沟通渠道，体验入住咨询与收集预订需求。切换至俄语可体验宾客看到的回复。',voiceTitle:'听听俄语礼宾如何接电话。',briefTitle:'准备好为您的酒店<br>启用<em>俄语 AI 礼宾</em>了吗？',briefIntro:'填写酒店及联系方式，告诉我们您接待的俄罗斯客群、现有电话和预订系统。我们将据此讨论接入方式与报价。',openBrief:'填写酒店需求 →',tasks:'俄罗斯客源、接待需求及所需语言',systems:'现有前台号码、电话系统、CRM、PMS 或预订平台'}},
ru:{copy:{eyebrow:'НЭЙРУ · ИИ-ПОРТЬЕ ДЛЯ ОТЕЛЕЙ КИТАЯ',hero:'Гости из России хотят номер?<br><em>Ответьте по-русски 24/7.</em>',intro:'ИИ-портье для китайских отелей. Он принимает звонки и сообщения на русском, рассказывает о номерах, уточняет даты и передаёт запрос на бронирование в отель.',try:'Проверить сценарий бронирования ↗',order:'Запросить решение для отеля →',briefBtn:'Заполнить бриф →',heroNote:'Ответы по правилам отеля · сложные вопросы — сотруднику',artLabel:'Приём гостей на русском',s1:'приём гостей из России',s2:'языка сайта: 中文 / RU / EN',s3:'передача заявок команде отеля',s4:'от запроса до подтверждения',nightLabel:'НОЧНАЯ СТОЙКА · НА СВЯЗИ',briefTitle:'Готовы запустить<br><em>ИИ-портье</em><br>для вашего отеля?',briefIntro:'Укажите контакты, расскажите о гостях из России, телефонии и системе бронирования. По брифу обсудим подключение и стоимость.'}},
en:{copy:{eyebrow:'NEURU НЭЙРУ · AI CONCIERGE FOR HOTELS IN CHINA',hero:'Russian guests want to book?<br><em>Welcome them in Russian, 24/7.</em>',intro:'Built for hotels in China welcoming travellers from Russia. The assistant answers calls and messages in Russian, explains room options, collects dates and passes booking requests to your team.',try:'Try the booking journey ↗',order:'Request a proposal for my hotel →',briefBtn:'Fill out the brief →',heroNote:'Answers from hotel policies · staff handles complex cases',artLabel:'Russian-speaking reception',s1:'support for Russian guests',s2:'website languages: 中文 / RU / EN',s3:'booking requests sent to your team',s4:'from enquiry to hotel confirmation',nightLabel:'NIGHT RECEPTION · ONLINE',briefTitle:'Ready to launch an<br><em>AI concierge</em><br>for your hotel?',briefIntro:'Tell us about your Russian guests, phone setup and reservation system. We can use the brief to scope the connection and quote.'}}
};
const heroCopy = {
  ru: {
    eyebrow: 'НЭЙРУ · ИИ-портье для отелей Китая',
    s1: 'Отвечает за 3 секунды',
    s2: 'Работает 24/7',
    s3: 'Консультирует и бронирует',
    s4: 'Помогает увеличить число бронирований',
    hero: 'Бронируйте номера<br><em>для гостей из России 24/7</em>',
    intro: 'ИИ-портье отвечает по-русски на звонки и сообщения, подбирает номер, рассчитывает цену и бронирует в системе отеля.',
    try: 'Попробовать демочат ↗',
    call: 'Позвонить ИИ-портье ↗',
    heroNote: 'Ответы по правилам отеля. Сложные вопросы — сотруднику.',
    nightLabel: 'СТОЙКА РЕГИСТРАЦИИ · 24/7'
  },
  zh: {
    eyebrow: 'NEURU НЭЙРУ · 面向中国酒店的 AI 礼宾',
    s1: '3 秒响应',
    s2: '全天候服务',
    s3: '解答问题并办理预订',
    s4: '助力提升预订量',
    hero: '全天候用俄语接待<br><em>让俄罗斯宾客直接订房</em>',
    intro: 'AI 礼宾用俄语接听来电、回复消息，查找空房、计算房费，并直接在酒店系统中创建预订。',
    try: '体验聊天演示 ↗',
    call: '拨打演示专线 ↗',
    heroNote: '按酒店规则作答，复杂问题转交工作人员。',
    nightLabel: '酒店前台 · 全天候在线'
  },
  en: {
    eyebrow: 'NEURU НЭЙРУ · AI CONCIERGE FOR HOTELS IN CHINA',
    s1: 'Answers in 3 seconds',
    s2: 'Available 24/7',
    s3: 'Answers questions and books rooms',
    s4: 'Helps increase bookings',
    hero: 'Turn Russian enquiries<br><em>into bookings, 24/7</em>',
    intro: 'The AI concierge answers calls and messages in Russian, finds available rooms, calculates the price and books directly in your hotel system.',
    try: 'Try the demo chat ↗',
    call: 'Call the AI concierge ↗',
    heroNote: 'Answers follow your hotel policies. Complex questions go to staff.',
    nightLabel: 'HOTEL RECEPTION · 24/7'
  }
};
for (const [language, copy] of Object.entries(heroCopy)) {
  Object.assign(market[language].copy, copy);
}
for(const k of Object.keys(market.zh.copy))if(!keys.includes(k))keys.push(k);
for(const [l,m] of Object.entries(market))for(const [k,v] of Object.entries(m.copy))texts[l][keys.indexOf(k)]=v;
faqs.zh.unshift(['能直接完成预订吗？','AI 礼宾全天候用俄语解答并收集入住日期、人数和房型需求。基础流程由酒店确认房态和价格后完成预订。实时查询、自动确认或支付须接入酒店的预订系统并确认实施范围。']);
faqs.ru.unshift(['Помощник подтверждает бронирование самостоятельно?','Базовый сценарий работает 24/7: помощник отвечает по-русски, собирает даты, число гостей и предпочтения. Наличие, цену и бронь подтверждает отель. Автоподтверждение, проверка доступности и оплата требуют согласованной интеграции.']);
faqs.en.unshift(['Can the concierge confirm a booking automatically?','The basic 24/7 workflow answers in Russian and collects dates, guest count and room preferences. The hotel confirms availability, price and booking. Live inventory, automatic confirmation and payments require an agreed integration.']);
faqs.zh[1][1]+=' 中国酒店可以先提交当前总机和接听流程；是否需要新号码或跨境转接，须在技术评估后确认。';
const missedCallCopy = {
  ru: [
    'Цена пропущенного звонка', 'Сколько денег теряет отель', 'на пропущенных звонках?',
    'Средний чек проживания', '18 000 ₽',
    'Один пропущенный звонок в день может стоить отелю одной брони.',
    '540 000 ₽', 'за 30 дней', '6,57 млн ₽', 'за 365 дней',
    'Пример потенциальной выручки, если каждый из этих гостей был готов забронировать номер.',
    'Пропущенный звонок может стоить брони. Гость и выручка могут уйти к конкурентам.',
    'Руководители видят, сколько потратили на рекламу.',
    'А звонок гостя, который уже готов забронировать, может остаться без ответа.'
  ],
  zh: [
    '漏接电话的代价', '漏接宾客来电，', '酒店可能错过多少收入？',
    '平均每笔住宿订单', '18,000 卢布',
    '每天漏接一通电话，酒店就可能少一笔预订。',
    '54 万卢布', '30 天', '657 万卢布', '365 天',
    '此为潜在收入示例，假设每位未接通的宾客都准备订房。',
    '漏接一通电话，可能少一笔订单。宾客和收入可能流向竞争酒店。',
    '管理者看得到广告支出。',
    '但准备订房的宾客打来电话时，可能没有人接听。'
  ],
  en: [
    'The cost of a missed call', 'How much could your hotel lose', 'to missed calls?',
    'Average booking value', 'RUB 18,000',
    'One missed call a day could cost the hotel one booking.',
    'RUB 540,000', 'over 30 days', 'RUB 6.57 million', 'over 365 days',
    'Illustrative potential revenue, assuming each caller was ready to book.',
    'A missed call can cost a booking. The guest and the revenue may go to a competitor.',
    'Hotel managers can see what they spend on advertising.',
    'A guest who is ready to book can still call and get no answer.'
  ]
};
const missedCallStart = keys.length;
keys.push('missedEye', 'missedTitle', 'missedAccent', 'missedAverage', 'missedCheck',
  'missedScenario', 'missedMonthly', 'missedMonthLabel', 'missedAnnual',
  'missedYearLabel', 'missedAssumption', 'missedCaption', 'missedVisibility', 'missedGuest');
for (const [language, labels] of Object.entries(missedCallCopy)) {
  labels.forEach((label, index) => { texts[language][missedCallStart + index] = label; });
}
const lossCopy = {
  ru: ['Математика потерь', 'Во сколько обходятся пропущенные звонки?', 'потенциальной выручки за 30 дней', '1 в день', 'пропущенных обращений', '30 за месяц', '↑ Введите среднюю стоимость брони', 'Расчёт показывает потенциальную выручку, если каждый пропущенный звонок мог стать бронью. Укажите стоимость всего проживания по одной брони. Валюта используется без пересчёта курса.', 'Введите сумму от 0 до 999 999 999.', 'Валюта'],
  zh: ['漏接损失测算', '漏接电话可能让酒店损失多少？', '30 天的潜在收入', '每天 1 通', '漏接电话', '每月 30 通', '↑ 输入平均每笔住宿订单金额', '测算假设每通未接电话都可能带来一笔预订。请输入一笔订单的全程住宿费用。选择币种不会换算汇率。', '请输入 0 至 999,999,999 之间的金额。', '币种'],
  en: ['The cost of missed calls', 'How much could missed calls cost your hotel?', 'in potential revenue over 30 days', '1 per day', 'missed enquiries', '30 per month', '↑ Enter your average booking value', 'The estimate assumes each missed call could have become a booking. Enter the total cost of one stay. Changing the currency does not convert the amount.', 'Enter an amount from 0 to 999,999,999.', 'Currency']
};
const lossKeys = ['lossEye', 'lossTitle', 'lossPeriod', 'lossDaily', 'lossDailyLabel', 'lossMonthly', 'lossRateLabel', 'lossAssumption', 'lossError', 'lossCurrencyLabel'];
const lossStart = keys.length;
keys.push(...lossKeys);
for (const [language, labels] of Object.entries(lossCopy)) {
  labels.forEach((label, index) => { texts[language][lossStart + index] = label; });
}

function updateLossEstimate() {
  const input = $('lossRate');
  const currency = $('lossCurrency');
  const amount = input.value.trim().replace(/[\s\u00a0\u202f]/g, '');
  const normalized = /^\d{1,3}(?:,\d{3})+(?:\.\d{1,2})?$/.test(amount)
    ? amount.replaceAll(',', '')
    : amount.replace(',', '.');
  const rate = Number(normalized);
  const valid = /^\d+(?:\.\d{1,2})?$/.test(normalized) && rate <= 999999999;
  const calls = $('lossCalls');
  const validCalls = calls.value !== '' && calls.validity.valid;
  $('lossMonthlyCount').textContent = validCalls ? new Intl.NumberFormat(lang).format(Number(calls.value) * 30) : '—';
  currency.setAttribute('aria-label', lossCopy[lang][9]);
  input.setAttribute('aria-invalid', String(Boolean(amount) && !valid));
  $('lossError').hidden = !amount || valid;
  $('lossResult').textContent = valid && validCalls
    ? new Intl.NumberFormat(lang, { style: 'currency', currency: currency.value, minimumFractionDigits: 0, maximumFractionDigits: 2 }).format(rate * 30 * Number(calls.value))
    : '—';
}
$('lossRate').addEventListener('input', updateLossEstimate);
$('lossCurrency').addEventListener('change', updateLossEstimate);
$('language').addEventListener('change', () => queueMicrotask(updateLossEstimate));
updateLossEstimate();
const scenarioCopy = {
  ru: {
    timeEye: 'Разница во времени',
    timeMoscow: 'Москва', timeChina: 'Китай · следующий день',
    timeTitle: 'В Москве ещё вечер. В Китае уже ночь.',
    timeBefore: 'Гость не дождался ответа',
    timeProblem: 'В 21:00 по Москве гость звонит в отель в Китае, чтобы забронировать номер. Там уже 02:00. Он слышит длинные гудки, кладёт трубку и открывает страницу другого отеля.',
    timeAfter: 'С ИИ-портье',
    timeBenefit1: 'Сразу отвечает на звонок по-русски',
    timeBenefit2: 'Уточняет даты и подбирает свободный номер',
    timeBenefit3: 'Называет полную стоимость проживания',
    timeBenefit4: 'Оформляет бронь в подключённой системе отеля',
    timeOutcome: 'Гость звонит, когда удобно ему. ИИ-портье принимает брони круглосуточно.',
    barrierEye: '05 · Ситуация 2 / Языковой барьер',
    barrierTag: 'На стойке нет русскоговорящего сотрудника',
    barrierTitle: 'Свободный номер есть. Но как', barrierAccent: 'объяснить, какой нужен?',
    barrierBefore: 'Гость пытается объясниться',
    barrierProblem: 'Гость пишет по-русски: «Нужен номер на троих. Можно поставить дополнительную кровать?» Он смотрит на машинный перевод и не может понять, входит ли кровать в цену и подходит ли номер для троих.',
    barrierSolution: 'Гость видит ясный ответ по-русски: какие номера свободны, где можно поставить дополнительную кровать и сколько стоит всё проживание. Если он позвонит, то услышит тот же ответ. Он спокойно выбирает вариант, а ИИ-портье оформляет бронь в подключённой системе отеля.',
    barrierOutcome: 'Гость спрашивает по-русски. Отель получает бронь в своей системе.'
  },
  zh: {
    timeEye: '时差', timeMoscow: '莫斯科', timeChina: '中国 · 次日',
    timeTitle: '莫斯科还是傍晚，中国已是深夜。',
    timeBefore: '宾客没有等到回复',
    timeProblem: '莫斯科时间晚上九点，宾客致电中国酒店订房。此时中国已是凌晨两点。听到电话响了很久没人接，宾客挂断电话，打开另一家酒店的网页。',
    timeAfter: '有了 AI 礼宾',
    timeBenefit1: '立即用俄语接听电话',
    timeBenefit2: '确认日期并查找空房',
    timeBenefit3: '告知住宿总价',
    timeBenefit4: '在已接入的酒店系统中创建预订',
    timeOutcome: '宾客可在方便时来电，AI 礼宾全天候受理预订。',
    barrierEye: '05 · 场景二 / 语言障碍', barrierTag: '前台没有会说俄语的员工',
    barrierTitle: '酒店有空房，', barrierAccent: '宾客怎样说清想订哪种？',
    barrierBefore: '宾客试着说清需求',
    barrierProblem: '宾客用俄语留言：“我们有三个人，可以加床吗？”看了机器翻译，宾客仍不确定这个房型能否住三个人，也不知道加床是否包含在房价里。',
    barrierSolution: '宾客看到清楚的俄语回复，包括可订房型、哪些房间可以加床，以及住宿总价。打电话也能听到同样的答案。宾客安心选好房间，AI 礼宾在已接入的酒店系统中创建预订。',
    barrierOutcome: '宾客用俄语咨询，酒店在自己的系统里收到预订。'
  },
  en: {
    timeEye: 'Time difference', timeMoscow: 'Moscow', timeChina: 'China · next day',
    timeTitle: 'It’s evening in Moscow and already night in China.',
    timeBefore: 'The guest gives up waiting',
    timeProblem: 'At 9 p.m. in Moscow, a guest calls a hotel in China to book a room. It’s already 2 a.m. there. The guest hears the phone ring, hangs up and opens another hotel’s website.',
    timeAfter: 'With the AI concierge',
    timeBenefit1: 'Answers the call in Russian right away',
    timeBenefit2: 'Checks dates and finds an available room',
    timeBenefit3: 'Quotes the total cost of the stay',
    timeBenefit4: 'Books in the connected hotel system',
    timeOutcome: 'Guests call when it suits them. The AI concierge takes bookings around the clock.',
    barrierEye: '05 · Scenario 2 / Language barrier', barrierTag: 'No Russian-speaking staff at reception',
    barrierTitle: 'A room is available.', barrierAccent: 'How does the guest explain what they need?',
    barrierBefore: 'The guest tries to explain',
    barrierProblem: 'The guest writes in Russian: “We need a room for three. Can we add an extra bed?” They look at the machine translation and still can’t tell whether the room fits three or whether the bed is included in the price.',
    barrierSolution: 'The guest sees a clear reply in Russian with the available rooms, extra-bed options and total cost. If they call, they hear the same answer. They can choose a room with confidence, and the AI concierge books it in the connected hotel system.',
    barrierOutcome: 'The guest asks in Russian. The hotel gets the booking in its own system.'
  }
};
for (const key of Object.keys(scenarioCopy.ru)) {
  const index = keys.push(key) - 1;
  for (const [language, copy] of Object.entries(scenarioCopy)) {
    texts[language][index] = copy[key];
  }
}

Object.assign(faqs.ru, {
  "0": [
    "ИИ-портье подтверждает бронирование самостоятельно?",
    "ИИ-портье отвечает на звонки и сообщения на сайте и в мессенджерах отеля, запрашивает даты и количество гостей, подбирает доступные номера, рассчитывает стоимость проживания и бронирует напрямую в гостиничной системе отеля при наличии интеграции."
  ],
  "1": [
    "К каким номерам и операторам подключается ИИ-портье? Кто предоставляет российский номер?",
    "Российский номер предоставляет в аренду компания НЭЙРУ на период работы ИИ-портье."
  ],
  "2": [
    "Какие сведения, материалы и доступы нужны для обучения?",
    "Нужны описание отеля, категории и вместимость номеров, тарифы, ограничения, правила оплаты, отмены, заезда и выезда, услуги, контакты, FAQ и типовые диалоги. Если эта информация есть в системе бронирования, ИИ-портье берёт данные оттуда при наличии интеграции. Форматы: DOCX, PDF с текстом, XLSX/CSV. При необходимости делаем интеграции с CRM и PMS."
  ],
  "3": [
    "Сколько занимает запуск и кто вносит изменения?",
    "Срок запуска ИИ-портье — <strong>30 дней</strong>. Команда НЭЙРУ готовит базу знаний, настраивает сценарии общения, подключает согласованные системы и тестирует ИИ-портье перед запуском.\n\nПосле запуска команда НЭЙРУ обновляет базу знаний в рамках ежемесячной техподдержки. Отель вносит изменения в свою PMS или передаёт НЭЙРУ актуальные сведения о тарифах, услугах и правилах проживания. Команда НЭЙРУ вносит согласованные изменения."
  ],
  "4": [
    "Какие права получает заказчик? Что происходит при прекращении оплаты?",
    "В течение оплаченного периода отель получает право пользоваться ИИ-портье в согласованной конфигурации, включая настроенные сценарии и базу знаний. Исходные материалы, которые отель передаёт для настройки ИИ-портье, остаются у правообладателей. НЭЙРУ использует эти материалы для настройки и сопровождения ИИ-портье.\n\nЕсли отель не продлевает оплату, по окончании оплаченного периода аренда российского номера прекращается, а ИИ-портье перестаёт принимать звонки и обрабатывать обращения.\n\nНЭЙРУ сохраняет ИИ-портье и его настройки <strong>90 дней с даты остановки</strong>. Срок хранения может быть продлён по согласованию с НЭЙРУ до его истечения. Пока ИИ-портье и его настройки хранятся, отель может возобновить работу ИИ-портье, оплатив услугу и согласовав повторный запуск. Возможность повторного подключения того же номера уточняется отдельно.\n\nЕсли работа ИИ-портье не возобновлена до окончания срока хранения, ИИ-портье и его настройки удаляются без возможности восстановления. <strong>Для запуска после удаления потребуется заново настроить ИИ-портье.</strong> Порядок выгрузки, хранения и удаления истории обращений и данных гостей согласуется отдельно."
  ],
  "6": [
    "На каких площадках уже работают ИИ-портье? Что оплачивается отдельно?",
    "ИИ-портье работает на сайте отеля, в Telegram, ВКонтакте и на Авито.\n\nДля автоматического бронирования можно подключить CRM и внутреннюю систему управления отеля."
  ]
});
Object.assign(faqs.en, {
  0: ['Can the AI concierge confirm a booking automatically?', 'It answers calls and messages on the hotel website and messaging channels, asks for dates and guest count, finds available rooms, calculates the total and books directly in the hotel system when integrated.'],
  1: ['Which numbers and operators can be connected? Who supplies the Russian number?', 'NEURU rents out a Russian phone number for the period the AI concierge is in service.'],
  2: ['What information, materials and access are needed?', 'Provide the hotel description, room categories and capacities, rates, restrictions, payment and cancellation terms, arrival and departure rules, services, contacts, FAQs and sample conversations. With integration, the AI concierge can use this information from the booking system. Formats: DOCX, text PDF and XLSX/CSV. CRM and PMS integrations are available as needed.'],
  3: ['How long does launch take, and who makes changes?', 'Launch takes <strong>30 days</strong>. NEURU prepares the knowledge base and conversation flows, connects the agreed systems and tests the AI concierge.\n\nAfter launch, NEURU updates the knowledge base as part of monthly support. The hotel updates its PMS or sends current rates, services and policies to NEURU for agreed changes.'],
  4: ['What rights does the hotel get, and what happens if payment stops?', 'During the paid period, the hotel may use the agreed AI concierge configuration, including the conversation flows and knowledge base. Original materials remain with their rights holders. NEURU uses them for setup and support.\n\nIf payment is not renewed, the Russian number rental ends and the concierge stops handling calls and messages at the end of the paid period.\n\nNEURU keeps the concierge and its settings for <strong>90 days after shutdown</strong>. An extension can be agreed before expiry. During retention, service can resume after payment and agreement on the restart. Reuse of the same number is subject to confirmation.\n\nAfter expiry, the concierge and settings are permanently deleted. <strong>A new setup is required to restart.</strong> Export, retention and deletion of conversation history and guest data are agreed separately.'],
  6: ['Which platforms are supported? What is charged separately?', 'The AI concierge works on hotel websites, Telegram, VK and Avito. CRM and the hotel management system can be integrated for automatic bookings.']
});
Object.assign(faqs.zh, {
  0: ['AI 礼宾能独立确认预订吗？', 'AI 礼宾接听电话并回复酒店网站及即时通讯渠道的消息，询问日期和人数，筛选空房并计算住宿总价。完成集成后，可直接在酒店系统内创建预订。'],
  1: ['可接入哪些号码和运营商？谁提供俄罗斯号码？', 'NEURU 在 AI 礼宾服务期间提供俄罗斯号码租赁。'],
  2: ['训练需要哪些资料和权限？', '请提供酒店介绍、房型和入住人数上限、价格、限制、付款和取消规则、入住和退房规则、服务、联系方式、常见问题和示例对话。完成集成后，AI 礼宾可从预订系统读取已有资料。支持 DOCX、文本 PDF 和 XLSX/CSV，可按需集成 CRM 和 PMS。'],
  3: ['上线需要多久？由谁更新？', '上线周期为 <strong>30 天</strong>。NEURU 整理知识库、设置对话流程、接入约定的系统并在上线前测试。\n\n上线后，NEURU 在每月技术支持中更新知识库。酒店可在 PMS 内修改，或将最新价格、服务和住宿规则交给 NEURU，由其实施约定的更新。'],
  4: ['酒店获得哪些权利？停止付费后会怎样？', '在付费期内，酒店有权使用约定配置的 AI 礼宾，包括对话流程和知识库。原始资料仍归权利人所有，NEURU 将其用于配置和维护。\n\n如不续费，付费期结束后俄罗斯号码租赁终止，AI 礼宾停止处理来电和消息。\n\nNEURU 自停用之日起保留 AI 礼宾及其配置 <strong>90 天</strong>。可在到期前协商延长。保留期间可在付款并确认重启安排后恢复服务。能否接回原号码需另行确认。\n\n保留期结束后，AI 礼宾及其配置将永久删除。<strong>再次上线需要重新配置。</strong>咨询记录和宾客数据的导出、保留和删除另行约定。'],
  6: ['AI 礼宾在哪些平台运行？哪些项目单独收费？', 'AI 礼宾可用于酒店网站、Telegram、VK 和 Avito。如需自动预订，可接入酒店 CRM 和内部管理系统。']
});

render();

for (const [key, labels] of Object.entries({
  heroEstimate: { ru: 'Рассчитать потери →', en: 'Estimate missed revenue →', zh: '估算潜在损失 →' },
  lossCallsLabel: { ru: 'Пропущенных звонков в день', en: 'Missed calls per day', zh: '每日未接来电数' }
})) {
  const index = keys.push(key) - 1;
  for (const [language, label] of Object.entries(labels)) texts[language][index] = label;
}

function updateMissedEstimate() {
  const input = $('missedRate');
  const format = new Intl.NumberFormat(lang, { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 });
  for (const [id, days] of [['missedMonthly', 30], ['missedAnnual', 365]]) {
    $(id).textContent = input.value && input.validity.valid ? format.format(Number(input.value) * days) : '—';
  }
}
$('missedRate').addEventListener('input', updateMissedEstimate);
$('lossCalls').addEventListener('input', updateLossEstimate);
$('language').addEventListener('change', updateMissedEstimate);
render();
updateMissedEstimate();
