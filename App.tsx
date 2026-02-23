
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
  ArrowUpRight, Zap, Target, Code2, Menu, X, 
  ExternalLink, MapPin, Sparkles, Send, Bot, User,
  Database, Layout, Cpu, Smartphone, ShieldCheck, CheckCircle2,
  Layers, Rocket, Briefcase, Search, PenTool, Terminal, Play,
  ChevronRight, Globe, BrainCircuit, BarChart3, Clock, TrendingUp,
  Wallet, Activity, Truck, HeartPulse, ShoppingCart, UtensilsCrossed, Store
} from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import GrainOverlay from './components/GrainOverlay';
import PremiumBackground from './components/PremiumBackground';
import { cn } from './lib/utils';

type Language = 'en' | 'ru' | 'uz';

interface ProjectData {
  id: string;
  title: string;
  cat: string;
  desc: string;
  fullDesc: string;
  aiBenefit: string;
  businessValue: string;
  price: string;
  challenges: string[];
  tags: string[];
  image: string;
  link?: string;
}

const translations = {
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
    cta: { title: 'ПОСТРОИМ ВАШУ', highlight: 'ЦИФРОВУЮ ИМПЕРИЮ.', sub: 'ТАШКЕНТ / УЗБЕКИСТАН' },
    contact: { title: 'ГОТОВЫ К', highlight: 'РОСТУ?', github: 'GITHUB', privacy: 'ПРИВАТНОСТЬ', rights: 'ALEXSOFTSTUDIO — ВАШ ТЕХНОЛОГИЧЕСКИЙ ПАРТНЕР.', terms: 'УСЛОВИЯ', career: 'КАРЬЕРА' }
  },
  uz: {
    nav: { works: 'PORTFOLIO', process: 'JARAYON', pricing: 'YECHIMLAR', touch: 'ALOQA' },
    hero: { badge: 'Biznesingizni kengaytiruvchi dasturiy ta\'minot', titleLine1: 'RAQAMLI', titleLine2: 'QUVVAT.', sub: 'Biz shunchaki kod yozmaymiz. Biz savdoni oshiradigan, rutin ishni avtomatlashtiradigan va O\'zbekiston bozorida ustunlik beradigan aqlli tizimlar quramiz.', cta: 'KONSULTATSIYA OLISH', scroll: 'Natijalarimiz' },
    process: {
      title: 'ISH', subtitle: 'TARTIBI.',
      s1: { title: 'Strategiya', desc: 'Pul yo\'qotayotgan nuqtalaringizni va texnologiya yordamida o\'sish imkoniyatlarini o\'rganamiz.' },
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
    cta: { title: 'RAQAMLI', highlight: 'IMPERIYANGIZNI QURAMIZ.', sub: 'TOSHKENT / O\'ZBEKISTON' },
    contact: { title: 'O\'SISHGA', highlight: 'TAYYORMISIZ?', github: 'GITHUB', privacy: 'MAXFIYLIK', rights: 'ALEXSOFTSTUDIO — SIZNING TEXNOLOGIK HAMKORINGIZ.', terms: 'SHARTLAR', career: 'KARYERA' }
  }
};

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const ProjectModal = ({ project, onClose, t }: { project: ProjectData | null, onClose: () => void, t: any }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10"
      >
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#080808]/95 backdrop-blur-xl"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-6xl max-h-[90vh] bg-zinc-900/50 border border-white/10 rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row shadow-2xl"
        >
          <button 
            onClick={onClose} 
            className="absolute top-6 right-6 z-50 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white border border-white/10"
          >
            <X size={20} />
          </button>

          <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden relative">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 md:hidden" />
          </div>

          <div className="flex-1 p-8 md:p-16 overflow-y-auto bg-gradient-to-br from-zinc-900/50 to-black/50">
            <div className="mb-10">
               <span className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.3em] mb-4 block">{project.cat}</span>
               <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter leading-none">{project.title}</h2>
               <p className="text-zinc-300 text-lg md:text-xl leading-relaxed font-light mb-8">{project.fullDesc}</p>
               
               <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                    <h5 className="text-[10px] font-bold uppercase text-zinc-500 mb-1">{t.projects.priceTitle}</h5>
                    <p className="text-blue-500 font-mono text-lg font-bold">{project.price}</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                    <h5 className="text-[10px] font-bold uppercase text-zinc-500 mb-1">{t.projects.aiBadge}</h5>
                    <p className="text-zinc-200 font-bold uppercase text-xs">Integrated & Active</p>
                  </div>
               </div>

               <div className="p-6 rounded-2xl bg-blue-600/10 border border-blue-500/20 mb-10">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3 flex items-center gap-2">
                    <BrainCircuit size={16} /> {t.projects.aiBenefitTitle}
                  </h4>
                  <p className="text-zinc-200 text-sm leading-relaxed">{project.aiBenefit}</p>
               </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6 flex items-center gap-2">
                  <TrendingUp size={14} className="text-blue-500" /> {t.projects.businessValueTitle}
                </h4>
                <p className="text-zinc-400 text-sm leading-relaxed">{project.businessValue}</p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6 flex items-center gap-2">
                  <Target size={14} className="text-blue-500" /> {t.projects.challengesTitle}
                </h4>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, i) => (
                    <li key={i} className="flex gap-3 text-zinc-500 text-sm">
                      <CheckCircle2 size={14} className="text-blue-600 flex-shrink-0 mt-0.5" />
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-16 flex flex-wrap gap-4 border-t border-white/5 pt-10">
               <motion.a 
                whileHover={{ scale: 1.02 }}
                href="tel:+998911530202"
                className="flex items-center gap-2 px-10 py-5 rounded-xl bg-white text-black text-xs font-bold uppercase tracking-widest"
               >
                 Request Similar Solution <ArrowUpRight size={16} />
               </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const AIChat = ({ isOpen, onClose, t }: { isOpen: boolean, onClose: () => void, t: any }) => {
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', content: string }[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{ role: 'assistant', content: t.ai.welcome }]);
    }
  }, [t.ai.welcome, messages.length]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: `You are the Alexsoft Studio Business Consultant AI. 
          Alexsoft Studio builds high-end software in Uzbekistan.
          Tone: Sophisticated, business-focused, professional.
          Key values: Automation, AI-driven profit increase, market-leading quality.
          Our projects: Billz, Express24, IMZO, Zamon Pay, MedCheck, Tashkent Logistics.
          Pricing: Landing pages from $1,500, SaaS from $5,000, Enterprise AI from $15,000.
          Speak clearly, explain technology in terms of ROI and business growth.`,
        }
      });

      const aiText = response.text || t.ai.error;
      setMessages(prev => [...prev, { role: 'assistant', content: aiText }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'assistant', content: t.ai.error }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-24 right-6 md:right-8 z-[110] w-[calc(100vw-3rem)] md:w-96 h-[500px] bg-[#0c0c0c]/90 border border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-2xl"
        >
          <div className="p-5 border-b border-white/5 flex justify-between items-center bg-white/5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                <Sparkles size={16} className="text-white" />
              </div>
              <h4 className="text-xs font-bold tracking-widest uppercase">Alexsoft Business AI</h4>
            </div>
            <button onClick={onClose} className="text-zinc-500 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4">
            {messages.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: m.role === 'user' ? 10 : -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={cn("flex gap-3 max-w-[85%]", m.role === 'user' ? "ml-auto flex-row-reverse" : "")}
              >
                <div className={cn("w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-white", m.role === 'assistant' ? "bg-zinc-800" : "bg-blue-600")}>
                  {m.role === 'assistant' ? <Bot size={12} /> : <User size={12} />}
                </div>
                <div className={cn("p-4 rounded-2xl text-[13px] leading-relaxed", m.role === 'assistant' ? "bg-white/5 text-zinc-300 border border-white/5" : "bg-blue-600 text-white shadow-lg")}>
                  {m.content}
                </div>
              </motion.div>
            ))}
            {isLoading && (
              <div className="flex gap-3 items-center text-zinc-500">
                <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center"><Bot size={12} /></div>
                <span className="text-[10px] animate-pulse tracking-widest uppercase font-bold">Consulting...</span>
              </div>
            )}
          </div>

          <div className="p-4 bg-white/5 border-t border-white/5">
            <div className="relative">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder={t.ai.placeholder}
                className="w-full bg-[#151515] border border-white/10 rounded-xl py-3 pl-4 pr-12 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-blue-600 transition-colors"
              />
              <button onClick={handleSend} disabled={!input.trim() || isLoading} className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center disabled:opacity-50 hover:bg-blue-500 transition-colors">
                <Send size={14} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Header = ({ lang, setLang, t }: { lang: Language, setLang: (l: Language) => void, t: any }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={cn("fixed top-0 w-full z-50 transition-all duration-500", isScrolled ? "bg-[#080808]/90 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent py-8")}>
        <div className="max-w-screen-xl mx-auto px-6 flex justify-between items-center">
          <div className="text-sm font-black tracking-[0.3em] uppercase flex items-center gap-1 group cursor-default">
            <span>ALEXSOFT</span><span className="text-blue-500 group-hover:text-white transition-colors">STUDIO</span>
          </div>
          
          <div className="hidden lg:flex items-center gap-10">
            <div className="flex bg-white/5 border border-white/10 rounded-full p-0.5">
              {(['en', 'ru', 'uz'] as Language[]).map((l) => (
                <button key={l} onClick={() => setLang(l)} className={cn("px-3 py-1 rounded-full text-[9px] font-bold uppercase transition-all relative", lang === l ? "text-white" : "text-zinc-500")}>
                  {lang === l && <motion.div layoutId="activeLang" className="absolute inset-0 bg-blue-600 rounded-full -z-10 shadow-[0_0_10px_rgba(37,99,235,0.4)]" />}
                  {l}
                </button>
              ))}
            </div>
            <a href="#works" className="text-[10px] font-bold tracking-widest text-zinc-400 hover:text-white transition-colors uppercase">{t.nav.works}</a>
            <a href="#process" className="text-[10px] font-bold tracking-widest text-zinc-400 hover:text-white transition-colors uppercase">{t.nav.process}</a>
            <a href="#pricing" className="text-[10px] font-bold tracking-widest text-zinc-400 hover:text-white transition-colors uppercase">{t.nav.pricing}</a>
            <a href="tel:+998911530202" className="text-[10px] font-bold tracking-widest bg-white text-black px-6 py-2.5 rounded-lg hover:bg-blue-600 hover:text-white transition-all uppercase">{t.nav.touch}</a>
          </div>

          <button onClick={() => setMobileMenuOpen(true)} className="lg:hidden text-white"><Menu size={20} /></button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} className="fixed inset-0 z-[120] bg-[#080808] flex flex-col p-10">
            <div className="flex justify-between items-center mb-16">
               <div className="text-sm font-black tracking-[0.3em] uppercase">ALEXSOFT<span className="text-blue-500">STUDIO</span></div>
               <button onClick={() => setMobileMenuOpen(false)} className="text-white"><X size={24} /></button>
            </div>
            <div className="flex flex-col gap-8">
              <a onClick={() => setMobileMenuOpen(false)} href="#works" className="text-4xl font-black uppercase">{t.nav.works}</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#process" className="text-4xl font-black uppercase">{t.nav.process}</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#pricing" className="text-4xl font-black uppercase">{t.nav.pricing}</a>
              <a href="tel:+998911530202" className="text-4xl font-black uppercase text-blue-500">{t.nav.touch}</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Hero = ({ t }: { t: any }) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 px-6 max-w-screen-xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <span className="inline-flex items-center gap-2 text-blue-500 font-mono text-xs mb-8 tracking-[0.4em] uppercase">
          <span className="w-12 h-px bg-blue-500"></span>{t.hero.badge}
        </span>
        <h1 className="text-[13vw] md:text-[11vw] font-black leading-[0.8] mb-12 tracking-tighter uppercase">
          {t.hero.titleLine1} <br /> 
          <span className="outline-text block">{t.hero.titleLine2}</span>
        </h1>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 mt-12 items-end">
        <p className="text-zinc-400 text-lg md:text-2xl leading-relaxed font-light max-w-xl">{t.hero.sub}</p>
        <div className="flex justify-start lg:justify-end">
          <motion.a 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            href="tel:+998911530202" 
            className="group relative w-44 h-44 md:w-56 md:h-56 rounded-full border border-white/10 flex flex-col items-center justify-center text-center p-6 hover:border-blue-500 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <ArrowUpRight size={32} className="relative z-10 text-blue-500 group-hover:text-white mb-2 transition-colors" />
            <span className="relative z-10 font-bold text-xs md:text-sm tracking-[0.2em] uppercase group-hover:text-white transition-colors">{t.hero.cta}</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

const Process = ({ t }: { t: any }) => {
  const steps = [
    { icon: <Search size={24} />, ...t.process.s1 },
    { icon: <PenTool size={24} />, ...t.process.s2 },
    { icon: <BrainCircuit size={24} />, ...t.process.s3 },
    { icon: <TrendingUp size={24} />, ...t.process.s4 }
  ];

  return (
    <section id="process" className="py-32 px-6 max-w-screen-xl mx-auto">
      <motion.div {...fadeInUp} className="mb-20">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 uppercase">{t.process.title} <span className="text-blue-500 italic">{t.process.subtitle}</span></h2>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <motion.div key={i} {...fadeInUp} transition={{ ...fadeInUp.transition, delay: i * 0.1 }} className="group p-8 bg-zinc-900/20 border border-white/5 rounded-3xl hover:bg-zinc-900/40 hover:border-blue-500/30 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-blue-600/10 text-blue-500 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">{step.icon}</div>
            <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">{step.title}</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Projects = ({ t, onProjectSelect }: { t: any, onProjectSelect: (p: ProjectData) => void }) => {
  const projects: ProjectData[] = [
    { ...t.projects.p1, id: 'billz', image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop", size: "large" },
    { ...t.projects.p5, id: 'medcheck', image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop", size: "small" },
    { ...t.projects.p2, id: 'express24', image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1906&auto=format&fit=crop", size: "small" },
    { ...t.projects.p6, id: 'logistics', image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop", size: "large" },
    { ...t.projects.p3, id: 'imzo', image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop", size: "small" },
    { ...t.projects.p4, id: 'zamon', image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop", size: "small" }
  ];

  return (
    <section id="works" className="py-32 px-6 max-w-screen-xl mx-auto">
      <motion.div {...fadeInUp} className="mb-20">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">{t.projects.title} <span className="text-blue-500 italic">{t.projects.subtitle}</span></h2>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-12">
        {projects.map((p, i) => (
          <motion.div 
            key={i} 
            {...fadeInUp} 
            className={cn(
              "group relative overflow-hidden rounded-[2.5rem] bg-zinc-900/20 border border-white/5 cursor-pointer transform-gpu transition-all duration-700 hover:border-blue-500/50", 
              (p as any).size === "large" ? "md:row-span-2" : ""
            )}
            onClick={() => onProjectSelect(p)}
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img src={p.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />
            </div>
            
            <div className="absolute top-8 right-8 z-10">
              <div className="px-4 py-2 rounded-full bg-blue-600/90 backdrop-blur-md flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 shadow-lg">
                <BrainCircuit size={14} className="text-white" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-white">{t.projects.aiBadge}</span>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 p-10 w-full">
               <div className="flex justify-between items-end">
                  <div>
                    <span className="text-blue-500 font-mono text-[10px] uppercase tracking-widest mb-2 block">{p.cat}</span>
                    <h3 className="text-3xl font-black mb-4 uppercase leading-none">{p.title}</h3>
                    <p className="text-zinc-400 text-sm mb-6 max-w-sm opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">{p.desc}</p>
                    <button className="inline-flex items-center gap-2 text-xs font-bold uppercase border-b border-white/20 pb-1 group-hover:border-blue-500 transition-colors">
                      {t.projects.view} <ArrowUpRight size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Pricing = ({ t }: { t: any }) => {
  const tiers = [
    { icon: <Zap size={24} />, ...t.pricing.landing },
    { icon: <ShoppingCart size={24} />, ...t.pricing.shop },
    { icon: <UtensilsCrossed size={24} />, ...t.pricing.kitchen },
    { icon: <ShieldCheck size={24} />, ...t.pricing.enterprise }
  ];

  return (
    <section id="pricing" className="py-32 px-6 max-w-screen-xl mx-auto">
      <motion.div {...fadeInUp} className="text-center mb-20">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">{t.pricing.title} <span className="text-blue-500 italic">{t.pricing.subtitle}</span></h2>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tiers.map((tier, i) => (
          <motion.div key={i} {...fadeInUp} className="relative group p-10 bg-zinc-900/30 border border-white/5 rounded-[2.5rem] hover:border-blue-500/50 transition-all duration-500">
            <div className="w-14 h-14 rounded-2xl bg-blue-600/10 text-blue-500 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">{tier.icon}</div>
            <h3 className="text-xl font-black mb-1 uppercase tracking-tight leading-tight">{tier.name}</h3>
            <div className="text-blue-500 font-mono text-xl font-bold mb-8 uppercase tracking-widest">{tier.price}</div>
            <ul className="space-y-4 mb-10">
              {tier.features.map((f: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3 text-zinc-400 text-[13px] leading-tight">
                  <CheckCircle2 size={16} className="text-blue-500 flex-shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
            <a href="tel:+998911530202" className="block w-full py-4 rounded-xl bg-white/5 border border-white/10 text-center text-[9px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500">
              Start Project
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Footer = ({ t }: { t: any }) => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const watermarkY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <footer ref={containerRef} className="pt-20 pb-10 px-6 max-w-screen-xl mx-auto overflow-hidden">
      <motion.div {...fadeInUp} className="relative py-32 md:py-48 px-10 rounded-[3.5rem] bg-zinc-900/40 border border-white/5 text-center shadow-2xl overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.2),transparent)] pointer-events-none" />
        <h2 className="text-5xl md:text-8xl font-black leading-none mb-16 uppercase relative z-10 tracking-tighter">
          {t.cta.title} <br /> <span className="text-blue-500 italic">{t.cta.highlight}</span>
        </h2>
        <div className="relative z-10 flex flex-col items-center gap-10">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="tel:+998911530202"
            className="px-12 py-6 rounded-2xl bg-white text-black font-black uppercase text-sm tracking-widest shadow-xl"
          >
             Schedule Discovery Call
          </motion.a>
          <div className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 bg-white/5 uppercase font-bold text-[10px] tracking-widest">
            <MapPin size={16} className="text-blue-500" /> {t.cta.sub}
          </div>
        </div>
      </motion.div>

      <div className="mt-48 relative">
        <motion.h3 style={{ y: watermarkY }} className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[25vw] font-black text-white/[0.03] pointer-events-none uppercase whitespace-nowrap">ALEXSOFT</motion.h3>
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 border-t border-white/5 pt-12 relative z-10">
          <div className="text-[9px] font-mono uppercase text-zinc-600 tracking-[0.3em] font-bold">{t.contact.rights}</div>
          <div className="flex gap-12">
            <a href="https://github.com/Alexsoft11" target="_blank" className="text-[9px] font-mono uppercase text-zinc-500 hover:text-white transition-all tracking-widest font-bold">{t.contact.github}</a>
            <a href="#" className="text-[9px] font-mono uppercase text-zinc-500 hover:text-white transition-all tracking-widest font-bold">{t.contact.privacy}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function PremiumPortfolio() {
  const [lang, setLang] = useState<Language>('ru');
  const [chatOpen, setChatOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const t = translations[lang];

  return (
    <div className="bg-[#080808] text-zinc-100 min-h-screen selection:bg-blue-600 selection:text-white antialiased overflow-x-hidden">
      <GrainOverlay />
      <PremiumBackground />
      
      <motion.button 
        onClick={() => setChatOpen(!chatOpen)} 
        whileHover={{ scale: 1.1 }} 
        whileTap={{ scale: 0.9 }} 
        className="fixed bottom-8 right-8 z-[100] w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-[0_0_20px_rgba(37,99,235,0.5)] border border-blue-400/20"
      >
        <AnimatePresence mode="wait">
          {chatOpen ? (
            <motion.div key="c" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X size={28} />
            </motion.div>
          ) : (
            <motion.div key="s" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
              <Sparkles size={28} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} t={t} />
      <AIChat isOpen={chatOpen} onClose={() => setChatOpen(false)} t={t} />
      <Header lang={lang} setLang={setLang} t={t} />
      
      <main>
        <Hero t={t} />
        <Process t={t} />
        <Projects t={t} onProjectSelect={setSelectedProject} />
        <Pricing t={t} />
        <Footer t={t} />
      </main>
    </div>
  );
}
