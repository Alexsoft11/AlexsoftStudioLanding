export type Language = 'en' | 'ru' | 'uz';

export const translations = {
  en: {
    nav: { works: 'PORTFOLIO', process: 'PROCESS', pricing: 'SOLUTIONS', touch: 'CONTACT' },
    hero: { badge: 'Software that scales your business', titleLine1: 'DIGITAL', titleLine2: 'POWER.', sub: 'We don\'t just write code. We build intelligent systems that increase sales, automate routine work, and give you a competitive edge in the Uzbekistan market.', cta: 'BOOK A CONSULTATION', scroll: 'See Our Impact' },
    process: {
      title: 'HOW WE', subtitle: 'WORK.',
      s1: { title: 'Strategy', desc: 'We study your business processes to find where you lose money and how technology can fix it.' },
      s2: { title: 'Design', desc: 'Premium interface that makes your brand look expensive and builds trust with customers.' },
      s3: { title: 'AI Build', desc: 'Developing the core logic using fast modern technologies and integrating smart AI tools.' },
      s4: { title: 'Growth', desc: 'Launching the system and monitoring performance to ensure your ROI is positive.' }
    },
    projects: { 
      title: 'OUR', subtitle: 'IMPACT.', view: 'Explore Case',
      close: 'Close',
      challengesTitle: 'Business Objectives',
      stackTitle: 'Tools & Tech',
      aiBadge: 'AI Power',
      aiBenefitTitle: 'AI Advantage (Human Words)',
      businessValueTitle: 'Result for Business',
      priceTitle: 'Investment range',
      p1: { 
        title: 'Billz Retail', 
        cat: 'Retail Management', 
        desc: 'Global system managing sales for $1B+ volume.', 
        fullDesc: 'A powerful brain for retail businesses. It manages thousands of products, employees, and customers in one simple window. No more manual excel sheets or inventory mess.',
        aiBenefit: 'The system "predicts" future sales. It tells the owner exactly which items will be popular next month so they don\'t waste money on dead stock.',
        businessValue: '24% reduction in lost sales and complete elimination of human errors in accounting.',
        price: '$12,000 - $45,000+',
        challenges: ['Instant sync between 500+ stores', 'Work without internet (Offline mode)', 'Automatic tax reporting (Uzbekistan laws)'],
        tags: ['Fast Backend', 'Retail AI', 'Cloud Infrastructure'] 
      },
      p2: { 
        title: 'Express24', 
        cat: 'Delivery Super-App', 
        desc: 'Leading food & grocery delivery ecosystem.', 
        fullDesc: 'Complex logistics platform connecting thousands of restaurants, couriers, and hungry customers in real-time. Designed to handle massive crowds without slowing down.',
        aiBenefit: 'Smart dispatcher. AI calculates the fastest route for couriers considering Tashkent traffic, ensuring food arrives hot.',
        businessValue: 'Reduced average delivery time by 12 minutes and increased courier efficiency by 30%.',
        price: '$25,000 - $85,000+',
        challenges: ['Handling 10,000 orders per hour', 'Real-time courier GPS tracking', 'Secure payment processing'],
        tags: ['Logistics AI', 'Mobile App', 'Real-time Data'] 
      },
      p3: { 
        title: 'IMZO 3D', 
        cat: 'Industrial Configurator', 
        desc: 'Virtual 3D tool for window manufacturing.', 
        fullDesc: 'No more manual sketches or misunderstandings. Customers can "build" their dream windows in 3D, and the factory receives exact technical drawings automatically.',
        aiBenefit: 'Visual AI detects if measurements are realistic, preventing expensive mistakes before production starts.',
        businessValue: 'Sales team productivity increased 3x. Customers buy faster because they see exactly what they get.',
        price: '$8,000 - $30,000+',
        challenges: ['Realistic 3D in mobile browsers', 'Automatic factory cost calculation', 'Direct connection to production machines'],
        tags: ['3D Visualization', 'Manufacturing Tech', 'Web Graphics'] 
      },
      p4: { 
        title: 'Zamon Pay', 
        cat: 'FinTech Solution', 
        desc: 'Modern mobile banking and payment system.', 
        fullDesc: 'A safe and fast way for people to manage money, pay bills, and get micro-loans in seconds. Focus on banking-grade security.',
        aiBenefit: 'Security Guard. AI monitors transactions and blocks fraud attempts instantly, protecting your customers\' money.',
        businessValue: '99.99% system uptime and high trust rating from the Central Bank of Uzbekistan.',
        price: '$40,000 - $150,000+',
        challenges: ['Bank-grade security level', 'Integration with Uzcard/Humo', 'Micro-loan scoring system'],
        tags: ['FinTech', 'Anti-Fraud AI', 'Mobile Banking'] 
      },
      p5: { 
        title: 'MedCheck Pro', 
        cat: 'MedTech Ecosystem', 
        desc: 'Digital clinic management and patient records.', 
        fullDesc: 'Digitize your entire clinic. From doctor schedules to digital patient history. No more paper files or long queues.',
        aiBenefit: 'Diagnostic Helper. AI scans medical records to find risks and suggests the best specialists to the patient automatically.',
        businessValue: 'Patient turnover increased by 45%. Clinic admin work reduced by 70%.',
        price: '$15,000 - $55,000+',
        challenges: ['Data privacy (HIPAA standards)', 'Integration with lab equipment', 'Easy interface for elderly doctors'],
        tags: ['Health AI', 'CRM', 'Data Privacy'] 
      },
      p6: { 
        title: 'Tashkent Logistics', 
        cat: 'Fleet & Cargo Control', 
        desc: 'Freight management for large truck fleets.', 
        fullDesc: 'Full control over your cargo. Know where every truck is, how much fuel is used, and predict when cargo will arrive.',
        aiBenefit: 'Maintenance Predictor. AI warns you when a truck engine might fail before it actually breaks, saving thousands in repairs.',
        businessValue: 'Fuel costs reduced by 18%. Zero cargo loss incidents reported.',
        price: '$18,000 - $65,000+',
        challenges: ['IoT sensor integration', 'International border delay tracking', 'Driver behavior monitoring'],
        tags: ['IoT', 'Supply Chain AI', 'Fleet Management'] 
      }
    },
    pricing: {
      title: 'BUSINESS', subtitle: 'SOLUTIONS.',
      landing: { name: 'Selling Landing 2.0', price: 'from $1,500', features: ['High-Conversion UI', 'Psychological Sales Triggers', 'Built-in AI Analytics', 'Sub-second Loading Speed'] },
      shop: { name: 'E-Commerce Elite', price: 'from $4,500', features: ['Full 1C / ERP Sync', 'Smart Search & Filters', 'Automated Stock Updates', 'Premium Checkout Flow'] },
      kitchen: { name: 'Kitchen & Burgers', price: 'from $5,000', features: ['Order Management App', 'Kitchen Display System (KDS)', 'Real-time Inventory Control', 'Staff KPI Dashboards'] },
      enterprise: { name: 'Custom AI Core', price: 'from $15,000', features: ['Custom LLM Integration', 'Automation of Routine Jobs', 'Bank-Grade Security Layer', '24/7 Priority Maintenance'] }
    },
    ai: { 
      placeholder: 'How can we help your business?', 
      welcome: 'Hello! I am Alexsoft Studio assistant. Tell me about your business, and I will suggest the best technology for your growth.',
      error: 'My systems are busy. Please call us directly.'
    },
    calculator: {
      badge: 'Interactive Tool',
      title: 'Build your',
      titleAccent: 'Estimate.',
      sub: 'Select your requirements to see a preliminary calculation. Once submitted, our experts will analyze your request and provide a precise commercial proposal.',
      steps: {
        s1: 'Nature',
        s2: 'Platforms',
        s3: 'Logic',
        s4: 'Power',
        s5: 'Summary'
      },
      types: {
        landing: 'Landing Page',
        ecommerce: 'E-Commerce',
        saas: 'SaaS / ERP',
        ai: 'AI Custom Core'
      },
      platforms: {
        web: 'Web Application',
        mobile: 'Mobile App (iOS/Android)',
        desktop: 'Desktop App'
      },
      complexities: {
        simple: 'Standard (Clean UI, core features)',
        medium: 'Advanced (Custom UI/UX, business logic)',
        complex: 'Enterprise (High-load, complex architecture)'
      },
      features: {
        auth: 'Pro Auth System',
        ai_chat: 'AI Chatbot Integration',
        crm: 'Built-in CRM',
        payment: 'Payment Gateway',
        analytics: 'BI Analytics'
      },
      final: {
        title: 'Finalizing your request',
        quote: 'Live Quote',
        projectValue: 'Project Value',
        formName: 'Your Name',
        formContact: 'Phone or Telegram username',
        cta: 'Send Inquiry',
        submitting: 'Sending...',
        successTitle: 'Success!',
        successSub: 'Your inquiry has been sent directly to our CEO\'s Telegram. We will reach out to you within 24 hours.',
        reset: 'Reset Calculator',
        back: 'Back',
        next: 'Next Step',
        finish: 'Finish Quote',
        natureTitle: 'Select Project Nature',
        deploymentTitle: 'Deployment & Access',
        complexityTitle: 'Logic Complexity',
        featuresTitle: 'Premium features'
      }
    },
    cta: { title: 'LETS BUILD YOUR', highlight: 'DIGITAL EMPIRE.', sub: 'TASHKENT / UZBEKISTAN' },
    contact: { title: 'READY TO', highlight: 'GROW?', github: 'GITHUB', privacy: 'PRIVACY', rights: 'ALEXSOFTSTUDIO — PREMIER TECH PARTNER.', terms: 'TERMS', career: 'CAREER' }
  },
  ru: {
    nav: { works: 'ПОРТФОЛИО', process: 'ПРОЦЕСС', pricing: 'РЕШЕНИЯ', touch: 'КОНТАКТЫ' },
    hero: { badge: 'Софт, который масштабирует ваш бизнес', titleLine1: 'ЦИФРОВАЯ', titleLine2: 'МОЩЬ.', sub: 'Мы не просто пишем код. Мы создаем интеллектуальные системы, которые увеличивают продажи, автоматизируют рутину и дают вам преимущество на рынке Узбекистана.', cta: 'ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ', scroll: 'Наши результаты' },
    process: {
      title: 'КАК МЫ', subtitle: 'РАБОТАЕМ.',
      s1: { title: 'Стратегия', desc: 'Изучаем ваши бизнес-процессы, чтобы найти точки потери денег и возможности для роста.' },
      s2: { title: 'Дизайн', desc: 'Премиальный интерфейс, который делает ваш бренд дорогим в глазах клиента и вызывает доверие.' },
      s3: { title: 'AI Разработка', desc: 'Создаем ядро системы на базе быстрейших технологий с внедрением умного ИИ.' },
      s4: { title: 'Запуск и Рост', desc: 'Внедряем систему, обучаем персонал и следим, чтобы инвестиции приносили прибыль.' }
    },
    projects: { 
      title: 'НАШИ', subtitle: 'КЕЙСЫ.', view: 'Смотреть детали',
      close: 'Закрыть',
      challengesTitle: 'Задачи бизнеса',
      stackTitle: 'Технологии',
      aiBadge: 'Сила ИИ',
      aiBenefitTitle: 'Преимущество ИИ (Простыми словами)',
      businessValueTitle: 'Результат для бизнеса',
      priceTitle: 'Диапазон инвестиций',
      p1: { 
        title: 'Billz Retail', 
        cat: 'Управление Ритейлом', 
        desc: 'Глобальная система для управления продажами на $1B+.', 
        fullDesc: 'Центральный мозг для ритейл-бизнеса. Управляет тысячами товаров, сотрудников и клиентов в одном окне. Забудьте о хаосе в остатках и ручных таблицах.',
        aiBenefit: 'Система "предсказывает" будущие продажи. Она говорит владельцу, какие товары будут популярны в следующем месяце, чтобы не тратить деньги на лишние закупки.',
        businessValue: 'Снижение упущенной выгоды на 24% и полное исключение ошибок персонала в учете.',
        price: '$12,000 - $45,000+',
        challenges: ['Синхронизация 500+ магазинов', 'Работа без интернета (Оффлайн режим)', 'Авто-отчетность в налоговую (ГНК)'],
        tags: ['Быстрый бэкенд', 'Ритейл ИИ', 'Облачная защита'] 
      },
      p2: { 
        title: 'Express24', 
        cat: 'Super-App Доставки', 
        desc: 'Крупнейшая экосистема доставки еды и товаров.', 
        fullDesc: 'Сложная логистическая платформа, соединяющая тысячи ресторанов, курьеров и клиентов в реальном времени. Работает стабильно даже при огромном наплыве заказов.',
        aiBenefit: 'Умный диспетчер. ИИ рассчитывает самый быстрый маршрут для курьера с учетом пробок Ташкента, чтобы еда приехала горячей.',
        businessValue: 'Сокращение времени доставки на 12 минут и рост эффективности курьеров на 30%.',
        price: '$25,000 - $85,000+',
        challenges: ['Нагрузка 10,000 заказов в час', 'Слежение за курьерами на карте', 'Безопасные платежи'],
        tags: ['Логистика ИИ', 'Мобильное приложение', 'Real-time данные'] 
      },
      p3: { 
        title: 'IMZO 3D', 
        cat: 'Промышленный Конфигуратор', 
        desc: 'Виртуальный 3D инструмент для производства окон.', 
        fullDesc: 'Забудьте о ручных чертежах и ошибках замерщиков. Клиенты сами "собирают" окна в 3D, а завод мгновенно получает точные технические схемы для станков.',
        aiBenefit: 'Визуальный ИИ проверяет замеры на ошибки: если клиент указал нереальные данные, система сразу исправит их.',
        businessValue: 'Продуктивность отдела продаж выросла в 3 раза. Клиенты покупают быстрее, видя конечный результат.',
        price: '$8,000 - $30,000+',
        challenges: ['Фотореалистичное 3D в браузере', 'Авто-расчет себестоимости для завода', 'Простой интерфейс для сложных товаров'],
        tags: ['3D Визуализация', 'Manufacturing Tech', 'Web Graphics'] 
      },
      p4: { 
        title: 'Zamon Pay', 
        cat: 'Финтех Решение', 
        desc: 'Современный мобильный банк и платежная система.', 
        fullDesc: 'Безопасный способ управлять деньгами, оплачивать счета и получать микрозаймы за секунды. Упор на банковский уровень защиты.',
        aiBenefit: 'Цифровой охранник. ИИ мониторит транзакции и мгновенно блокирует попытки мошенничества, защищая деньги клиентов.',
        businessValue: '99.99% стабильность системы и высокий уровень доверия клиентов.',
        price: '$40,000 - $150,000+',
        challenges: ['Банковская безопасность данных', 'Интеграция с Uzcard/Humo', 'Скоринг система для займов'],
        tags: ['Финтех', 'Anti-Fraud ИИ', 'Банковское ПО'] 
      },
      p5: { 
        title: 'MedCheck Pro', 
        cat: 'MedTech Экосистема', 
        desc: 'Цифровая клиника и медкарты пациентов.', 
        fullDesc: 'Оцифруйте вашу клинику. От записи пациентов до истории болезни. Больше никаких бумажных карточек и очередей.',
        aiBenefit: 'Помощник врача. ИИ сканирует медкарту пациента, находит риски и автоматически предлагает лучших специалистов.',
        businessValue: 'Пропускная способность клиники выросла на 45%. Работа админов сокращена в 3 раза.',
        price: '$15,000 - $55,000+',
        challenges: ['Защита данных пациентов', 'Интеграция с лаб-оборудованием', 'Интуитивный интерфейс для врачей'],
        tags: ['Медицинский ИИ', 'CRM', 'Конфиденциальность'] 
      },
      p6: { 
        title: 'Tashkent Logistics', 
        cat: 'Логистика и Грузоперевозки', 
        desc: 'Управление парком грузовых автомобилей.', 
        fullDesc: 'Полный контроль над перевозками. Знайте, где каждая машина, сколько топлива тратится и когда груз будет у клиента.',
        aiBenefit: 'Предсказатель поломок. ИИ предупреждает, когда мотор машины может выйти из строя, экономя тысячи на ремонте.',
        businessValue: 'Затраты на топливо снижены на 18%. Ноль случаев потери груза.',
        price: '$18,000 - $65,000+',
        challenges: ['Интеграция IoT датчиков', 'Трекинг задержек на границах', 'Контроль поведения водителей'],
        tags: ['IoT', 'Логистика ИИ', 'Fleet Management'] 
      }
    },
    pricing: {
      title: 'ГОТОВЫЕ', subtitle: 'РЕШЕНИЯ.',
      landing: { name: 'Умный Landing 2.0', price: 'от $1,500', features: ['Психологические триггеры продаж', 'Высокая конверсия (в 2-3 раза выше)', 'Встроенная ИИ-аналитика поведения', 'Загрузка быстрее 1 секунды'] },
      shop: { name: 'Online Магазин Elite', price: 'от $4,500', features: ['Полная синхронизация с 1С / ERP', 'Умный поиск и авто-подбор товаров', 'Автоматический учет остатков', 'Прием всех видов оплат (Payme/Click)'] },
      kitchen: { name: 'Автоматизация Кухни', price: 'от $5,000', features: ['Система заказов (Бургерные/Кафе)', 'Кухонный монитор (KDS)', 'Точный учет продуктов и списаний', 'Аналитика эффективности персонала'] },
      enterprise: { name: 'Кастомная AI Система', price: 'от $15,000', features: ['Интеграция собственных ИИ-моделей', 'Автоматизация рутинных задач отдела', 'Банковский уровень безопасности', 'Приоритетная поддержка 24/7'] }
    },
    ai: { 
      placeholder: 'Чем мы можем помочь вашему бизнесу?', 
      welcome: 'Здравствуйте! Я ассистент Alexsoft Studio. Расскажите о вашем бизнесе, и я предложу лучшие технологии для вашего роста.',
      error: 'Наши системы заняты. Пожалуйста, позвоните нам напрямую.'
    },
    calculator: {
      badge: 'Интерактивный инструмент',
      title: 'Соберите свой',
      titleAccent: 'Бюджет.',
      sub: 'Выберите параметры, чтобы увидеть предварительный расчет. После отправки наши эксперты проанализируют ваш запрос и подготовят точное коммерческое предложение.',
      steps: {
        s1: 'Тип',
        s2: 'Платформы',
        s3: 'Логика',
        s4: 'Фишки',
        s5: 'Итог'
      },
      types: {
        landing: 'Landing Page',
        ecommerce: 'E-Commerce',
        saas: 'SaaS / ERP',
        ai: 'AI Custom Core'
      },
      platforms: {
        web: 'Web-приложение',
        mobile: 'Мобильное приложение',
        desktop: 'Desktop софт'
      },
      complexities: {
        simple: 'Стандарт (Чистый UI, базовые функции)',
        medium: 'Продвинутый (Индивидуальный дизайн, бизнес-логика)',
        complex: 'Enterprise (Высоконагруженные системы, архитектура)'
      },
      features: {
        auth: 'Pro система авторизации',
        ai_chat: 'Интеграция AI чат-бота',
        crm: 'Встроенная CRM',
        payment: 'Платежный шлюз',
        analytics: 'BI Аналитика'
      },
      final: {
        title: 'Завершение запроса',
        quote: 'Предварительный расчет',
        projectValue: 'Ценность проекта',
        formName: 'Ваше имя',
        formContact: 'Телефон или Telegram',
        cta: 'Отправить заявку',
        submitting: 'Отправка...',
        successTitle: 'Успешно!',
        successSub: 'Ваш запрос отправлен напрямую нашему CEO в Telegram. Мы свяжемся с вами в течение 24 часов.',
        reset: 'Сбросить калькулятор',
        back: 'Назад',
        next: 'Далее',
        finish: 'Итоговая цена',
        natureTitle: 'Выберите тип проекта',
        deploymentTitle: 'Среда и доступ',
        complexityTitle: 'Сложность логики',
        featuresTitle: 'Дополнительные возможности'
      }
    },
    cta: { title: 'ПОСТРОИМ ВАШУ', highlight: 'ЦИФРОВУЮ ИМПЕРИЮ.', sub: 'ТАШКЕНТ / УЗБЕКИСТАН' },
    contact: { title: 'ГОТОВЫ К', highlight: 'РОСТУ?', github: 'GITHUB', privacy: 'ПРИВАТНОСТЬ', rights: 'ALEXSOFTSTUDIO — ВАШ ТЕХНОЛОГИЧЕСКИЙ ПАРТНЕР.', terms: 'УСЛОВИЯ', career: 'КАРЬЕРА' }
  },
  uz: {
    nav: { works: 'PORTFOLIO', process: 'JARAYON', pricing: 'YECHIMLAR', touch: 'ALOQA' },
    hero: { badge: 'Biznesingizni kengaytiruvchi dasturiy ta\'minot', titleLine1: 'RAQAMLI', titleLine2: 'QUVVAT.', sub: 'Biz shunchaki kod yozmaymiz. Biz savdoni oshiradigan, rutin ishni avtomatlashtiradigan va O\'zbekiston bozorida ustunlik beradigan aqlli tizimlar quramiz.', cta: 'KONSULTATSIYA OLISH', scroll: 'Natijalarimiz' },
    process: {
      title: 'ISH', subtitle: 'TARTIBI.',
      s1: { title: 'Strategiya', desc: 'Pul yo\'qotayottingizni va texnologiya yordamida o\'sish imkoniyatlarini o\'rganamiz.' },
      s2: { title: 'Dizayn', desc: 'Brendingizni qimmat va ishonchli ko\'rsatadigan premium interfeys yaratamiz.' },
      s3: { title: 'AI Ishlab chiqish', desc: 'Eng tezkor texnologiyalar va aqlli sun\'iy intellekt asosida tizimni quramiz.' },
      s4: { title: 'Ishga tushirish', desc: 'Tizimni joriy qilamiz, xodimlarni o\'qitamiz va investitsiya foyda keltirishini nazorat qilamiz.' }
    },
    projects: { 
      title: 'BIZNING', subtitle: 'LOYIHALAR.', view: 'Batafsil',
      close: 'Yopish',
      challengesTitle: 'Biznes vazifalari',
      stackTitle: 'Texnologiyalar',
      aiBadge: 'AI Quvvati',
      aiBenefitTitle: 'AI Afzalligi (Sodda tilda)',
      businessValueTitle: 'Biznes uchun natija',
      priceTitle: 'Investitsiya diapazoni',
      p1: { 
        title: 'Billz Retail', 
        cat: 'Chakana Savdo Boshqaruvi', 
        desc: '$1B+ aylanmaga ega savdo boshqaruvi tizimi.', 
        fullDesc: 'Chakana savdo biznesi uchun markaziy miya. Minglab mahsulotlar, xodimlar va mijozlarni bitta oynada boshqaradi. Excel jadvallari va qoldiqdagi tartibsizliklarni unuting.',
        aiBenefit: 'Tizim kelajakdagi savdolarni bashorat qiladi. U egasiga keyingi oyda qaysi mahsulotlar ommabop bo\'lishini aytadi, shunda ortiqcha xaridga pul sarflanmaydi.',
        businessValue: 'Yo\'qotilgan foyda 24% ga kamaydi va hisob-kitobdagi inson xatolari butunlay yo\'qoldi.',
        price: '$12,000 - $45,000+',
        challenges: ['500+ do\'konlarni sinxronlash', 'Internetsiz ishlash (Offline rejim)', 'Soliq hisobotlarini avtomatlashtirish (GNK)'],
        tags: ['Tezkor Backend', 'Retail AI', 'Bulutli xavfsizlik'] 
      },
      p2: { 
        title: 'Express24', 
        cat: 'Yetkazib berish Super-App', 
        desc: 'Oziq-ovqat va tovarlar yetkazib berish ekotizimi.', 
        fullDesc: 'Minglab restoranlar, kuryerlar va mijozlarni real vaqtda bog\'laydigan murakkab logistika platformasi. Katta yuklamalarda ham qotmasdan ishlaydi.',
        aiBenefit: 'Aqlli dispetcher. AI kuryer uchun Toshkent tirbandligini hisobga olgan holda eng tezkor yo\'nalishni chizadi.',
        businessValue: 'Yetkazib berish vaqti 12 daqiqaga qisqardi va kuryerlar samaradorligi 30% ga oshdi.',
        price: '$25,000 - $85,000+',
        challenges: ['Soatiga 10,000 buyurtma yuklamasi', 'Kuryerlarni xaritada kuzatish', 'Xavfsiz to\'lovlar'],
        tags: ['Logistika AI', 'Mobil ilova', 'Real-time ma\'molotlar'] 
      },
      p3: { 
        title: 'IMZO 3D', 
        cat: 'Sanoat Konfiguratori', 
        desc: 'Oyna ishlab chiqarish uchun virtual 3D asbob.', 
        fullDesc: 'Qo\'lda chizilgan chizmalarni va xatolarni unuting. Mijozlar 3D formatda yig\'adilar, zavod esa avtomatik tayyor texnik chizmalarni oladi.',
        aiBenefit: 'Vizual AI o\'lchovlardagi xatolarni tekshiradi: agar mijoz noto\'g\'ri ma\'lumot kiritsa, tizim ularni darhol tuzatadi.',
        businessValue: 'Sotuv bo\'limi unumdorligi 3 baravar oshdi. Mijozlar yakuniy natijani ko\'rib tezroq xarid qiladilar.',
        price: '$8,000 - $30,000+',
        challenges: ['Brauzerda realistik 3D', 'Zavod uchun tannarxni avtomat hisoblash', 'Murakkab tovarlar uchun sodda interfeys'],
        tags: ['3D Vizualizatsiya', 'Manufacturing Tech', 'Web Graphics'] 
      },
      p4: { 
        title: 'Zamon Pay', 
        cat: 'Fintex Yechimi', 
        desc: 'Zamonaviy mobile bank va to\'lov tizimi.', 
        fullDesc: 'Pulni boshqarish, hisoblarni to\'lash va bir necha soniya ichida mikroqarzlar olishning xavfsiz usuli. Bank darajasidagi xavfsizlikka ega.',
        aiBenefit: 'Raqamli qo\'riqchi. AI tranzaksiyalarni kuzatadi va firibgarlik urinishlarini darhol to\'xtatadi, mijozlar pulini himoya qiladi.',
        businessValue: '99.99% tizim barqarorligi va mijozlarning yuqori ishonch darajasi.',
        price: '$40,000 - $150,000+',
        challenges: ['Bank darajasidagi xavfsizlik', 'Uzcard/Humo integratsiyasi', 'Qarzlar uchun skoring tizimi'],
        tags: ['Fintex', 'Anti-Fraud AI', 'Bank dasturi'] 
      },
      p5: { 
        title: 'MedCheck Pro', 
        cat: 'MedTex Ekotizimi', 
        desc: 'Raqamli klinika va bemorlar kartochkalari.', 
        fullDesc: 'Klinikangizni raqamlashtiring. Qog\'oz kartochkalar va navbatlarni unuting. Shifokor jadvalidan tortib to\'lovlargacha bitta tizimda.',
        aiBenefit: 'Shifokor yordamchisi. AI bemor tarixini o\'rganadi, xavflarni aniqlaydi va kerakli mutaxassisni avtomatik tavsiya qiladi.',
        businessValue: 'Klinika samaradorligi 45% ga oshdi. Adminlar ishi 3 marta kamaydi.',
        price: '$15,000 - $55,000+',
        challenges: ['Bemorlar ma\'lumotlari himoyasi', 'Lab-uskunalar bilan integratsiya', 'Shifokorlar uchun oson interfeys'],
        tags: ['Med AI', 'CRM', 'Xavfsizlik'] 
      },
      p6: { 
        title: 'Tashkent Logistics', 
        cat: 'Logistika va Yuk tashish', 
        desc: 'Katta yuk mashinalari parkini boshqarish.', 
        fullDesc: 'Yuk tashish ustidan to\'liq nazorat. Har bir mashina qayerda ekanligini, qancha yoqilg\'i sarflayotganini va yuk qachon yetib borishini biling.',
        aiBenefit: 'Buzilishlarni bashorat qilish. AI motor qachon buzilishi mumkinligini oldindan aytadi va minglab dollar tejaydi.',
        businessValue: 'Yoqilg\'i sarfi 18% ga kamaydi. Yuk yo\'qolishi holatlari nolga tushdi.',
        price: '$18,000 - $65,000+',
        challenges: ['IoT datchiklar integratsiyasi', 'Chegaralardagi kechikishlar trekingi', 'Haydovchilar nazorati'],
        tags: ['IoT', 'Supply Chain AI', 'Fleet Control'] 
      }
    },
    pricing: {
      title: 'AQLLI', subtitle: 'YECHIMLAR.',
      landing: { name: 'Smart Landing 2.0', price: '$1,500 dan', features: ['Sotuvchi psixologik triggerlar', 'Konversiyani oshirish (2-3 baravar)', 'ИИ-аналитика (foydalanuvchi xulqi)', '1 sekunddan tez yuklanish'] },
      shop: { name: 'Onlayn Do\'kon Elite', price: '$4,500 dan', features: ['1C / ERP bilan to\'liq sinxronlash', 'Aqlli qidiruv va mahsulot tanlash', 'Qoldiqlarni avtomatik nazorat qilish', 'Premium to\'lov tizimlari integratsiyasi'] },
      kitchen: { name: 'Burger & Oshxona', price: '$5,000 dan', features: ['Buyurtmalarni boshqarish ilovasi', 'Oshxona monitori (KDS)', 'Mahsulotlar va xom-ashyo hisobi', 'Xodimlar KPI tahlili'] },
      enterprise: { name: 'Maxsus AI Tizim', price: '$15,000 dan', features: ['Custom LLM (ИИ-miya) integratsiyasi', 'Rutin ishlarni avtomatlashtirish', 'Bank darajasidagi xavfsizlik', '24/7 Prioritet yordam'] }
    },
    ai: { 
      placeholder: 'Biznesingizga qanday yordam bera olamiz?', 
      welcome: 'Assalomu alaykum! Men Alexsoft Studio yordamchisiman. Biznesingiz haqida gapirib bering, men o\'sishingiz uchun eng yaxshi texnologiyalarni taklif qilaman.',
      error: 'Tizimlarimiz band. Iltimos, bizga qo\'ng\'iroq qiling.'
    },
    calculator: {
      badge: 'Interaktiv vosita',
      title: 'Byudjetingizni',
      titleAccent: 'Hioblang.',
      sub: 'Dastlabki hisob-kitobni ko\'rish uchun talablaringizni tanlang. Yuborilgandan so\'ng, mutaxassislarimiz so\'rovingizni tahlil qiladi va aniq tijorat taklifini taqdim etadi.',
      steps: {
        s1: 'Turi',
        s2: 'Platformalar',
        s3: 'Mantiq',
        s4: 'Imkoniyatlar',
        s5: 'Xulosa'
      },
      types: {
        landing: 'Landing Page',
        ecommerce: 'E-Commerce',
        saas: 'SaaS / ERP',
        ai: 'AI Custom Core'
      },
      platforms: {
        web: 'Veb-ilova',
        mobile: 'Mobil ilova (iOS/Android)',
        desktop: 'Desktop dastur'
      },
      complexities: {
        simple: 'Standart (Toza dizayn, asosiy funksiyalar)',
        medium: 'Kengaytirilgan (Maxsus dizayn, biznes mantiq)',
        complex: 'Enterprise (Yuqori yuklama, murakkab arxitektura)'
      },
      features: {
        auth: 'Pro avtorizatsiya tizimi',
        ai_chat: 'AI Chatbot integratsiyasi',
        crm: 'Ichki CRM tizimi',
        payment: 'To\'lov shlyuzi',
        analytics: 'BI Analitika'
      },
      final: {
        title: 'So\'rovni yakunlash',
        quote: 'Dastlabki hisob',
        projectValue: 'Loyiha qiymati',
        formName: 'Ismingiz',
        formContact: 'Telefon yoki Telegram link',
        cta: 'So\'rov yuborish',
        submitting: 'Yuborilmoqda...',
        successTitle: 'Muvaffaqiyatli!',
        successSub: 'Sizning so\'rovingiz to\'g\'ridan-to\'g\'ri bizning CEO Telegramiga yuborildi. 24 soat ichida siz bilan bog\'lanamiz.',
        reset: 'Qayta hisoblash',
        back: 'Orqaga',
        next: 'Keyingi qadam',
        finish: 'Yakuniy hisob',
        natureTitle: 'Loyiha turini tanlang',
        deploymentTitle: 'Muhit va kirish',
        complexityTitle: 'Mantiq murakkabligi',
        featuresTitle: 'Qo\'shimcha imkoniyatlar'
      }
    },
    cta: { title: 'RAQAMLI', highlight: 'IMPERIYANGIZNI QURAMIZ.', sub: 'TOSHKENT / O\'ZBEKISTON' },
    contact: { title: 'O\'SISHGA', highlight: 'TAYYORMISIZ?', github: 'GITHUB', privacy: 'MAXFIYLIK', rights: 'ALEXSOFTSTUDIO — SIZNING TEXNOLOGIK HAMKORINGIZ.', terms: 'SHARTLAR', career: 'KARYERA' }
  }
};
