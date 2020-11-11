let popup_wrap_personal = document.querySelector(".popup-wrap_personal");
let close__popUp_personal = function () {
  popup_wrap_personal.classList.add("popUpDis");
  document.body.style.overflow = "visible";
  popup_wrap_personal.classList.remove("popUpShow");
};
let change__popUp_personal = function (obj) {
  popup_wrap_personal.classList.remove("popUpDis");
  document.body.style.overflow = "hidden";
  popup_wrap_personal.classList.add("popUpShow");
  popup_wrap_personal.innerHTML = `
      <div class="popup-content">
        <div class="close" onclick = "close__popUp_personal()">
          <img src="static/images/close.png" />
        </div>
        <div class="popup-main">
          <div class="img-wrap">
            <img src="${obj.img}" />
          </div>
          <div class="description">
            <p class="title">${obj.name}</p>
            <p class="profession">${obj.special}</p>
            <div class="line"></div>
            <p class="list-head">
              ${obj.list_head}
            </p>
              ${obj.skills_text
                .map(
                  (i) => `
              <div class="skills-list_item">
                <div class="circle"></div>
                <p class="skills-text1">
                  ${i}
                </p>
              </div>
              `
                )
                .join("")}
            
          </div>
        </div>
        <p class="skills-title">${
          obj.education.length === 0 ? "" : "Обучение"
        }</p>
        <div class="skills-list">
        ${obj.education
          .map(
            (i) => `
        <div class="skills-list_item">
        <div class="circle"></div>
        <p>${i}</p>
        </div>
        `
          )
          .join("")}
          
        </div>
      </div>
    </div>
  `;
};

let personal_arr = [
  {
    id: 0,
    name: "Громченко Елена",
    img: "img/personal/1.png",
    special: "Парикмахер-стилист",
    list_head: "Обучение проходила всегда, ориентируясь на",
    skills_text: [
      "потребности конкретного клиента, на индивидуальный подход к каждомуклиенту;",
      "развитие навыков в парикмахерском искусстве, освоение новых технологий, знакомство с новыми материалами и инструментами в профессии, освоение навыков решения задач любого уровня сложности, общение и обмен опытом работы с другими мастерами;",
      "видение задач и направление развития в данном конкретном периоде времени в сфере красоты и здоровья;",
      "поддержку и развитие общей концепции салона и парикмахерского сегмента в частности.",
    ],
    education: [
      "Колледж интерсервис",
      "Профессиональный сервис WELLA (1999-2004 гг.).",
      "Академия парикмахерского искусства «ДОЛОРЕС» (2001-2004 гг.).",
      "SCHWARZKOPF professionel.",
      "Московский художественно-педагогический колледж технологий и дизайна.",
      "Школа Инессы Башкировой «Талант».",
      "VISIONHAIR.",
      "Академия L'OREAL professionnel (2009-2020 гг.).",
      "DAVINES академия (2011-2019 гг.).",
      "MAKE UP ATELIER Paris (2012-2015 гг.).",
      "Академия CHI (2015-2016 гг.).",
      "Organic Colour Systems (2015-2019 гг.). «Вводный курс Organic Colour Systems» «BLONDES WORKSHOP», «FASHION WORKSHOP», « THINK CURL SYSTEM»",
      "O'right:: Технический семинар , «Трихология, выпадение волос» - 2019",
    ],
  },
  {
    id: 1,
    name: "Егорова Марина",
    img: "img/personal/2.png",
    special: "Косметолог,  эстетист по телу ",
    list_head: "",
    skills_text: [],
    education: [
      "Базовое среднее медицинское образование",
      "1992 Международный университет массажа",
      "Спорт Мед Импорт обучение работе на аппарате  LPG Sуstems и методу кавитации",
      "«Салон сервис» - «Биоэпиляция», «Бикини-татуаж», «Биотатуаж»",
      "Проф Эст специальность косметолог-эстетист",
      "Академия образования «Планета красоты» - «Контурная пластика», «Мезотерапия», «Ботулотоксины типа А»",
      "Международная Академия красоты и здоровья ЕСКО  - «ЗD лифт массаж лица»",
      "Академия ERSTA – массаж лица и тела «BABOR EFFECTIVE TОUCH» обучение у ведущего тренера  Ricky Welch - разработчика техники данного  массажа, обладателя престижнейшей премии GALA SPA AWORD ",
    ],
  },
  {
    id: 2,
    name: "Калмыкова Оксана",
    img: "img/personal/3.png",
    special: "Парикмахер – стилист",
    list_head: "",
    skills_text: [],
    education: [
      "Академия парикмахерского искусства и эстетики по методу by pivot point",
      "ASK professional",
      "Школа макияжа Make up Atelier",
      "Участие в конкурсе Невские Берега",
      "Академия L’Oréal : семинары  «Ключи к цвету», «Смена цвета», «Акценты блонда» , Ключи к уходу и стайлингу,  Color Workshop Инстатехники , Мастеркласс по брендам , тренинг Majirel High Lift",
      "Академия Davines : Семинары «Теория цвета»,  «Новый Naturaltech Путешествие в СПА», «Блонд. Смена цвета», «Магия локона»",
      "Organik color sistems : «Вводный курс Organic Colour Systems», «BLONDES WORKSHOP»,  «FASHION WORKSHOP», « THINK CURL  SYSTEM»",
      "O’right «Технический семинар»,  «Трихология, выпадение волос» ",
      "Академия CHI  «CHI Ionic технология ионного безаммиачного окрашивания»",
    ],
  },
  {
    id: 3,
    name: "Кочегизова Надежда",
    img: "img/personal/4.png",
    special: "Мастер маникюра и педикюра",
    list_head: "",
    skills_text: [],
    education: [
      "Базовое среднее медицинское образование",
      "Институт ногтевых технологий «La Mirage Beauty Education» Курсы: Современный маникюр, Современный педикюр в салоне",
      "Семинары по ногтевому сервису в центре Planeta Nails Комбинированный маникюр -  выравнивание ногтевой пластины, покрытие гель-лаком  под кутикулу, восстановление и ремонт ногтей",
      "Школа маникюра «Бьюти-Стат» укрепление и наращивание ногтей биогелем",
      "«Компания СПА технологии» мастер-класс японского эко-маникюра P.Shine",
      "Семинар по работе с продукцией «Akzentz» - линия LUXIO, технические продукты AKZENTZ",
    ],
  },
  {
    id: 4,
    name: "Скальская Татьяна",
    img: "img/personal/5.png",
    special: "Мастер маникюра и педикюра",
    list_head: "",
    skills_text: [],
    education: [
      "В 1995 г. закончила  школу Аллабелла.  Наращивание акрилом",
      "Школа Иннесы Башкировой.  Курсы: Классический маникюр. Классический педикюр.Моделирование, конструирование и реставрация ногтей. ( гелевая технология).  Семинар «китайская роспись»",
      "Ортониксия.  Основные методики коррекции ногтей. По технологиям Hellmut RuckGmbH",
      "Семинары по ногтевому сервису в центре Planeta Naiis ",
      "Повышение квалификации в Nail art school  SAKRAMEL Комбинированный маникюр -  выравнивание ногтевой пластины, покрытие гель-лаком   под кутикулу, восстановление и ремонт ногтей",
      "Повышение квалификации в школе Irins «Тонкие линии». «8 видов укрепления и восстановления ногтей»",
      "«Коррекция деформации ногтей методом применения Titan Sistem”.",
      "Семинар по работе с продукцией «Akzentz» - линия LUXIO , технические продукты AKZENTZ",
    ],
  },
  {
    id: 5,
    name: "Хатрахманова Анна",
    img: "img/personal/6.png",
    special: "Парикмахер - стилист",
    list_head: "",
    skills_text: [],
    education: [
      "Pivot point official member school - октябрь 2012г ",
      "конкурс «Make up artist Astana 2014»- август 2014",
      "Revlon professional - международный курс «Лаборатория цвета»- октябрь 2014 ",
      "Частное учреждение дополнительного профессионального образования «Институт косметологии, эстетической медицины и визажного искусства - Дом Русской Косметики» Факультет косметологии и эстетической медицины. «Новые технологии визажного искусства. Макияж, грим, спецэффекты. - февраль 2015 ",
      "ITEC - Diploma in Fashion, Theatre and Media Make up - март 2015 ",
      "Artego - Новинки в окрашивании 2016 - март 2016",
      "GK HAIR PROFESSIONAL - Профессиональная процедура «Кератиновое выпрямление и восстановление волос» - март 2016 ",
      "GK HAIR PROFESSIONAL - Технический семинар по использованию красителей GKhair Oil Hair Colors, Cream Color Juvexin - март 2016 ",
      "Nyx Face Awards Russia  2016 - апрель 2016 ",
      "Nyx Face Awards Russia  2017 - апрель 2017 ",
      "Organic Colour Systems - «Колористический курс для профессионалов» - май 2017 ",
      "Академия Loreal professionnel «Loreal  Pro Start» - январь 2018 ",
      "GK HAIR PROFESSIONAL - Кератиновое выпрямление Miami Bombshell - февраль 2018 ",
      "Organic Colour Systems - «Вводный курс Organic Colour Systems» «BLONDES WORKSHOP»,  «FASHION WORKSHOP», « THINK CURL  SYSTEM»  2017- 2019 ",
      "O’right:  Технический семинар ,  «Трихология, выпадение волос» - 2019",
      "Эль стиль «Свадебный стилист» 2019 ",
    ],
  },
  {
    id: 6,
    name: "Ельцова Екатерина",
    img: "img/personal/7.png",
    special: "Aдминистратор",
    list_head: "",
    skills_text: [],
    education: [],
  },
  {
    id: 7,
    name: "Волкова Ирина",
    img: "img/personal/8.png",
    special: "Aдминистратор",
    list_head: "",
    skills_text: [],
    education: [],
  },
];
//personal
//catalog
let catalog__barber = [
  {
    id: "0",
    catalog: "catalog__barber",
    title: "Стрижки",
    img: "img/hair/13.jpg",
    text: "",
    functions: [
      "Дамская стрижка с укладкой – от 2400",
      "Стрижка с сушкой – от 1940",
      "Мужская стрижка – от 2000",
    ],
    price: "от 2 000",
  },
  {
    id: "1",
    catalog: "catalog__barber",
    title: "Укладки",
    img: "img/hair/16.jpg",
    text: "",
    functions: [
      "Укладка на брашинг – от  1850 ",
      "Праздничная – от 3600",
      "Вечерняя – от 4250",
      "Свадебная – от 5500 ",
      "Имиджевое плетение кос – от 1320",
    ],
    price: "от 1 320",
  },
  {
    id: "2",
    catalog: "catalog__barber",
    title: "Окрашивание",
    img: "img/hair/20.jpg",
    text: "",
    functions: [
      "Окрашивание красителем «Мажирель», «Мажируж» - от 4570",
      "Окрашивание красителем «Мажиблонд» - от 4920",
      "Окрашивание красителем «Луо колор» - от 5050",
      "Окрашивание красителем «Диаришесс», «Диалайт» - от 4450",
      "Окрашивание красителем «Органик» - от 4720",
      "Обесцвечивание красителем «Л’ОРЕАЛЬ» («Блондис», «Платинум», «Платифиз») – от 4450 ",
      "Обесцвечивание красителем «Органик» - от 4500",
    ],
    price: "от 4 500",
  },
  {
    id: "3",
    catalog: "catalog__barber",
    title: "Тонирование",
    img: "img/hair/21.jpg",
    text: "",
    functions: [
      "Тонирование красителем «Органик» - от 5670",
      "Тонирование L’oreal – от 4450",
    ],
    price: "от 4 450",
  },
  {
    id: "4",
    catalog: "catalog__barber",
    title: "Колорирование",
    img: "img/hair/22.jpg",
    text: "",
    functions: [
      "Колорирование красителем «Л’ОРЕАЛЬ» (до 3х цветов) – от 6760",
      "Колорирование красителем «Органик» (до 3х цветов) - от 7500",
    ],
    price: "от 6 760",
  },
  {
    id: "5",
    catalog: "catalog__barber",
    title: "Мелирование",
    img: "img/hair/23.jpg",
    text: "",
    functions: [
      "Мелирование красителем «Л’ОРЕАЛЬ» («Блондис», «Платинум», «Платифиз») – от 4450",
      "Мелирование красителем «Мажимеш» - от 4450",
      "Мелирование красителем «Органик» - от 5770",
      "Частичное мелирование красителем «Л’ОРЕАЛЬ» – от 2530",
      "Частичное мелирование красителем «Органик» - от 3300",
    ],
    price: "от 3 300 ",
  },
  {
    id: "6",
    catalog: "catalog__barber",
    title: "Биозавивка «Давинес»",
    img: "img/hair/19.jpg",
    text: "",
    functions: [],
    price: "от 4 350",
  },
  {
    id: "7",
    catalog: "catalog__barber",
    title: "Химическая завивка L’oreal",
    img: "img/hair/18.jpg",
    text: "",
    functions: [],
    price: "от 3 530",
  },
  {
    id: "8",
    catalog: "catalog__barber",
    title: "Долговременная укладка волос Organic Color System’s",
    img: "img/hair/7.jpg",
    text: "",
    functions: [],
    price: "от 6 850",
  },
  {
    id: "9",
    catalog: "catalog__barber",
    title: "Восстанавливающие уходы для волос Davines",
    img: "img/hair/3.jpg",
    text: "",
    functions: [],
    price: "от 2 300 ",
  },
  {
    id: "10",
    catalog: "catalog__barber",
    title: "Восстанавливающие уходы для волос Organic Color System’s ",
    img: "img/hair/8.jpg",
    text: "",
    functions: [],
    price: "от 3 000 ",
  },
  {
    id: "11",
    catalog: "catalog__barber",
    title: "Восстанавливающие уходы для волос Nashi Argan",
    img: "img/hair/9.jpg",
    text: "",
    functions: [],
    price: "от 2 900",
  },
  {
    id: "12",
    catalog: "catalog__barber",
    title: "Макияж",
    img: "img/body/1.jpg",
    text: "",
    functions: [
      "Экспресс макияж – 1890",
      "Дневной макияж – 2350",
      "Вечерний макияж - 3800",
      "Вечерний макияж - 4280",
      "Вечерний макияж Smoky eyes - 4280",
      "Свадебный макияж – 4650",
    ],
    price: "от 1890",
  },
];
let catalog__nails = [
  {
    id: "0",
    catalog: "catalog__nails",
    title: "Педикюр",
    img: "img/nails/1.jpg",
    text:
      "Аккуратный, красивый педикюр – лучшее украшение женских ножек. На таких ножках и обувь открытая смотрится элегантно ",
    functions: [
      "классический 2 500 руб",
      "комбинированный 2 600 руб ",
      "аппаратный  2 850 руб",
      "Педикюр с гель-лаком – 3850 руб",
      "SPA педикюр «Сила витаминов» - 3300 руб",
    ],
    price: "от 2 850",
  },
  {
    id: "1",
    catalog: "catalog__nails",
    title: "Маникюр",
    img: "img/nails/2.jpg",
    text:
      "Чтобы ваши руки всегда выглядели безупречно и говорили о вас только хорошее, доверьте их нашим специалистам. Ведь ухоженные руки – Ваша визитная карточка, а уход за руками это приятный ритуал, удовольствие от которого вы ощутите буквально на кончиках пальцев",
    functions: [
      "классический  1 650 руб",
      "классический с френч покрытием 1 800 руб",
      "Горячий  1 350 руб",
      "Европейский  1 100 руб",
      "Японский маникюр  - 1900 руб руб",
      "Аппаратный маникюр – 1850 руб",
      "Гигиенический детский маникюр – 800 руб",
      "Классический с покрытием гель-лак  - 2750",
      "Классический с покрытием гель-лак фрэнч – 3000",
    ],
    price: "от 800",
  },
  {
    id: "2",
    catalog: "catalog__nails",
    title: "Маникюр мужской",
    img: "img/nails/3.jpg",
    text: "",
    functions: [
      "классический - 1 750 руб ",
      "маникюр с полировкой - 1 850 руб",
    ],
    price: "от 1 750  ",
  },
  {
    id: "3",
    catalog: "catalog__nails",
    title: "Уходы за кожей рук и ног",
    img: "img/nails/4.jpg",
    text: "",
    functions: [
      "Массаж рук - 350 руб",
      "Обработка мозоли - от 200 руб",
      "Парафиновый SPA-уход – 600 руб",
    ],
    price: "от 200",
  },
  {
    id: "4",
    catalog: "catalog__nails",
    title: "Покрытие и снятие",
    img: "img/nails/5.jpg",
    text: "",
    functions: [
      "ногтей гель-лаком  - 1 350 руб ",
      "ногтей гель-лаком (шеллаком) «Френч - 1 500 руб ",
      "ногтей CND VINYLUX и OPI  INFINITE SHINE - 400 руб",
      "Снятие гель-лака – 650 руб",
    ],
    price: "от 400",
  },
  {
    id: "5",
    catalog: "catalog__nails",
    title: "Наращивание",
    img: "img/nails/6.jpg",
    text: "",
    functions: [
      "ногтей - 4 100 руб",
      "ногтей «френч» - 4 400 руб",
      "Коррекция нарощенных ногтей - 3 300 руб",
      "снятие нарощенных ногтей – 1500 руб",
    ],
    price: "от 1500",
  },
];
let catalog__cosmetology = [
  {
    id: "0",
    catalog: "catalog__cosmetology",
    title: "ОСВЕЖАЮЩИЙ  ПИЛИНГ BABOR MEN ",
    img: "img/cosmet/1_1.png",
    text:
      "Удаляет ороговевшие частицы, восстанавливает гладкость кожи, дарит свежесть и окутывает приятным ароматом нот цитруса, зеленого чая, нежных оттенков роз и нектарина",
    functions: [],
    price: "2500",
  },
  {
    id: "1",
    catalog: "catalog__cosmetology",
    title: "SUPERFOOD ВИТАМИННЫЙ BABOR MEN ",
    img: "img/cosmet/2_2.jpg",
    text:
      "Активация стрессированной кожи. Активизирует собственные защитные функции кожи, обеспечивает профилактику старения, обусловленного негативным воздействием окружающей среды, в том числе профилактику фотостарения. Восстановление иммунитета и сияния, бархатисто-нежная кожа, свежий тон.",
    functions: [],
    price: "5000  ",
  },
  {
    id: "2",
    catalog: "catalog__cosmetology",
    title: "ЛЕГЕНДЫ BABOR ДЛЯ МУЖЧИН ",
    img: "img/cosmet/3_3.jpg",
    text: "",
    functions: [],
    price: "4500",
  },
  // // // // // // // // // // // // // // // //
  // // // // // // // // // // // // // // // //
  // // // // // // // // // // // // // // // //
  {
    id: "3",
    catalog: "catalog__cosmetology",
    title: "MISS СЕЛФИ",
    img: "img/cosmet/4.jpg",
    text:
      "Стимулирование основных функций кожи. Восстанавливает защитный барьер кожи: стимулирует клеточное обновление кожи, укрепляет собственную систему антиоксидантов для защиты от свободных радикалов, защищает от старения",
    functions: [],
    price: "6400",
  },
  {
    id: "4",
    catalog: "catalog__cosmetology",
    title: "СОВЕРШЕНСТВО КОЖИ ",
    img: "img/cosmet/5.png",
    text:
      "Интенсивный профессиональный уход для лица, разработанный специально для кожи с дефицитом сияния. Питает и наполняет ее драгоценной влагой, нормализуя функции, способствуя уменьшению глубины морщин, активации процессов регенерации.",
    functions: [],
    price: "6400",
  },
  {
    id: "5",
    catalog: "catalog__cosmetology",
    title: "SUPERFOOD  ВИТАМИННЫЙ ",
    img: "img/cosmet/6.png",
    text:
      "Активация стрессированной кожи. Активизирует собственные защитные функции кожи, обеспечивает профилактику старения, обусловленного негативным воздействием окружающей среды, в том числе профилактику фотостарения. Восстановление иммунитета и сияния, бархатисто-нежная кожа, свежий тон.",
    functions: [],
    price: "6400",
  },
  {
    id: "6",
    catalog: "catalog__cosmetology",
    title: "БРЫЗГИ ШАМПАНСКОГО ",
    img: "img/cosmet/7.png",
    text:
      "Повышение эластичности и плотности кожи. Обеспечивает профилактику старения, обусловленного негативным воздействием окружающей среды, в том числе профилактику фотостарения.",
    functions: [],
    price: "6400",
  },
  {
    id: "7",
    catalog: "catalog__cosmetology",
    title: "УХОД ДЛЯ ПРОБЛЕМНОЙ КОЖИ",
    img: "img/cosmet/8.jpg",
    text:
      "Профессиональная программа направленная на интенсивное, глубокое очищение кожи, профилактику появления воспалительных элементов при склонности к акне. ",
    functions: [],
    price: "4600",
  },
  {
    id: "8",
    catalog: "catalog__cosmetology",
    title: "HIGH SKIN REFINER ИНТЕГРАЛЬНЫЙ ЛИФТИНГ ",
    img: "img/cosmet/9.png",
    text:
      "Многофункциональное очищение на основе гидрофильного масла и реактивирующего фитоактива действую одновременно в четырех направлениях: активирует детоксикацию, защиту, поддерживает pH-баланс и подготавливает кожу к последующему нанесению высокоактивных средств из линии BABOR HSR®lifting",
    functions: [],
    price: "8 720 ",
  },
  {
    id: "9",
    catalog: "catalog__cosmetology",
    title: "HIGH SKIN REFINER ИНТЕГРАЛЬНЫЙ ЛИФТИНГ с маской Ультра-комфорт",
    img: "img/cosmet/10.jpg",
    text:
      "Многофункциональное очищение на основе гидрофильного масла и реактивирующего фитоактива действую одновременно в четырех направлениях: активирует детоксикацию, защиту, поддерживает pH-баланс и подготавливает кожу к последующему нанесению высокоактивных средств из линии BABOR HSR®lifting. Уход  завершается маской ультра-комфорт для ультимативной коррекции овала лица и лифтинга!",
    functions: [],
    price: "11660",
  },
  {
    id: "10",
    catalog: "catalog__cosmetology",
    title: "ANTI-AGE УХОД REVERSIVE  ",
    img: "img/cosmet/11.jpg",
    text:
      "Этот профессиональный салонный уход – квинтэссенция любви к себе, лучшее, что вы можете подарить своей коже для сохранения ее сияния и молодости. Сияющая гладкая кожа с выравненным тоном и нежным румянцем розы – результат 90-минутного ухода.",
    functions: [],
    price: "9600 ",
  },
  {
    id: "11",
    catalog: "catalog__cosmetology",
    title: "ДРАГОЦЕННЫЕ ЭЛИКСИРЫ ",
    img: "img/cosmet/12.jpg",
    text:
      "ДРАГОЦЕННЫЕ МИНУТЫ УХОДА BABOR <br> Лёгкий щелчок открытия ампулы… И время замирает, целиком посвящённое исполнению заветных желаний о молодости и красоте.",
    functions: [],
    price: "8800 ",
  },
  {
    id: "12",
    catalog: "catalog__cosmetology",
    title: "ГИАЛУРОНОВЫЙ HYDRO CELLULAR ",
    img: "img/cosmet/13.jpg",
    text:
      "Комплексное многомерное насыщение сухой и обезвоженной кожи влагой за счет активного концентрата с трехфракционной гиалуроновой кислотой и пептидами HY-3, а также повышение способности кожи удерживать влагу.",
    functions: [],
    price: "6 500 ",
  },
  {
    id: "13",
    catalog: "catalog__cosmetology",
    title: "Уход за кожей вокруг глаз ",
    img: "img/cosmet/14.png",
    text:
      "Идеальное решение для восстановления нежной кожи в области вокруг глаз",
    functions: [],
    price: "2500",
  },
  {
    id: "14",
    catalog: "catalog__cosmetology",
    title: "Гигиенический массаж лица",
    img: "img/cosmet/15.jpg",
    text: "",
    functions: [],
    price: "2950 ",
  },
  {
    id: "15",
    catalog: "catalog__cosmetology",
    title: "Волшебные руки красоты ",
    img: "img/cosmet/16.jpg",
    text:
      "Микротоковые процедуры для лица на японском аппарате Bup-Seven.Для решения проблем возрастной кожи, воспаленной кожи, кожи с пигментными пятнами и отеками, а также негидратированной кожи предлагаются уникальные аппаратные процедуры с применение минеральных масок и масок с травяными экстрактами японской косметики класса «ЛЮКС» серии Bup-cosmetic. В состав косметики входят гиалуроновая кислота, минеральная вода, экстракт водорослей, экстракты фитопланктона, алое, лакричник, коллаген и другие полезные вещества.",
    functions: [],
    price: "5 100 ",
  },
  {
    id: "16",
    catalog: "catalog__cosmetology",
    title: "АЛМАЗНЫЙ ПИЛИНГ ДЛЯ ЛИЦА И  ТЕЛА ",
    img: "img/cosmet/17.jpg",
    text:
      "Мечтаете о подтянутой, свежей, ровной и бархатистой коже лица? Но не можете позволить себе провести несколько дней дома, чтобы кожа восстановилась после процедуры",
    functions: [
      "ПОЧЕМУ Алмазный пилинг ? ",
      "Потому, что после процедуры алмазного пилинга кожа не краснеет и не шелушится. Нет никакого периода реабилитации. Практически сразу после процедуры вы можете заниматься своими обычными делами. Это очень удобно! ",
    ],
    price: "2000 ",
  },
  {
    id: "17",
    catalog: "catalog__cosmetology",
    title: "Омоложение CooLifting ",
    img: "img/cosmet/18.png",
    text: `это эффективное "оружие" красоты для моментального омоложения кожи лица без инъекций и реабилитаций!`,
    functions: [
      "Быстрая процедура - для занятых людей!",
      "Минус 5 лет за 5 минут!",
      "Красивая кожа - без уколов!",
    ],
    price: "от 7000",
  },
];
let catalog__men = [
  {
    id: "0",
    catalog: "catalog__men",
    title: "Стрижки ",
    img: "img/men/1.jpg",
    text: "",
    functions: [
      "Стрижка машинкой – 900 рублей",
      "Стрижка мужская – 2000",
      "Стрижка мужская со стайлингом - 2300",
    ],
    price: "от 900",
  },
  {
    id: "1",
    catalog: "catalog__men",
    title: "Уход для кожи головы и волос ",
    img: "img/men/2.jpg",
    text: "",
    functions: [],
    price: "от 1500",
  },
  {
    id: "2",
    catalog: "catalog__men",
    title: "Камуфляж",
    img: "img/men/3.jpg",
    text: "",
    functions: [],
    price: "от 2500",
  },
  {
    id: "3",
    catalog: "catalog__men",
    title: "Маникюр ",
    img: "img/men/4.jpg",
    text: "",
    functions: [],
    price: "от 1 750",
  },
  {
    id: "4",
    catalog: "catalog__men",
    title: "Педикюр ",
    img: "img/men/5.jpg",
    text: "",
    functions: [],
    price: "от 2 850",
  },
  {
    id: "5",
    catalog: "catalog__men",
    title: "Уходы для лица и тела ",
    img: "img/men/6.jpg",
    text: "",
    functions: [
      "Освежающий пилинг - 2500",
      "Витаминный уход для лица - 5000",
      "SPA-уход по телу «Энергия» - 6200",
    ],
    price: "от 2 500",
  },
];
let catalog__massage = [
  {
    id: "0",
    catalog: "catalog__massage",
    title: "SPA-ПРОГРАММА БАЛАНС ВОССТАНАВЛИВАЮЩИЙ СПА-УХОД ",
    img: "img/massage/4.jpg",
    text:
      "Программы BABOR SPA – это результат: улучшение состояния кожи, совершенствование контуров тела и наслаждение - максимальное расслабление. Каждая программа включает: пилинг, обертывание и массаж. Подарит вам внутреннюю гармонию, а вашей коже – питание и эластичность. Насыщает кожу влагой и удерживают её внутри кожи. Окутывает тело тёплым, уютным ароматом, сотканным из нот бергамота, кедра и ванили. Восстанавливающий спа-уход для тела с драгоценным маслом арганы питает и способствует повышению эластичности кожи, возвращая ей природную гладкость и сияние. ",
    functions: [],
    price: "6 200",
  },
  {
    id: "1",
    catalog: "catalog__massage",
    title: "SPA-ПРОГРАММА РЕЛАКС РАССЛАБЛЯЮЩИЙ СПА-УХОД  ",
    img: "img/massage/1_1.jpg",
    text:
      "Программы BABOR SPA – это результат: улучшение состояния кожи, совершенствование контуров тела и наслаждение - максимальное расслабление. Каждая программа включает: пилинг, обертывание и массаж. Способствуют восстановлению липидной мантии кожи, повышают эластичность и снимают стянутость.  Окутывает тело цветочно-древесными нотами, с легкой лавандовой нотой. Позабудьте о действительности и стрессе – и пусть весь мир подождёт.Восстанавливающий уход для тела, направленный на гармоничную регенерацию кожи и глубокий релакс. Бьюти-трио масел: пенника лугового, сладкого миндаля и подсолнечника естественным образом восстанавливают гидролипидный слой кожи, укрепляют ее защитные функции, питают, нивелируют неэстетичные покраснения. ",
    functions: [],
    price: "6 200",
  },
  {
    id: "2",
    catalog: "catalog__massage",
    title: "SPA-ПРОГРАММА ЭНЕРГИЯ. ПРОБУЖДАЮЩИЙ АКТИВНЫЙ СПА-УХОД ",
    img: "img/massage/2_2.jpg",
    text:
      "Программы BABOR SPA – это результат: улучшение состояния кожи, совершенствование контуров тела и наслаждение - максимальное расслабление. Каждая программа включает: пилинг, обертывание и массаж. Пробуждает чувства, тонизирует и освежает кожу, защищает от стрессовых факторов окружающей среды. Восстанавливает свежесть, тонус и сияние кожи. Заряжает энергией цитрусовых нот бергамота и лиметты, гармонично оттенённых бодрящим ароматом зелёного чая. Красивое пробуждение кожи и души. ",
    functions: [],
    price: "6 250",
  },
  {
    id: "3",
    catalog: "catalog__massage",
    title: "Водорослевое обертывание «Русалка» ",
    img: "img/massage/4_4.jpg",
    text:
      "Водорослевое обертывание – СПА-процедура, которая предназначена для уменьшения объемов проблемных участков тела. Водорослевое обертывание способно за короткий период подтянуть кожу тела, устранить целлюлит ",
    functions: [],
    price: "6850",
  },
  {
    id: "4",
    catalog: "catalog__massage",
    title: "SPA-уход  «Клеопатра» ",
    img: "img/massage/5.jpg",
    text:
      "Активизируют процессы клеточного метаболизма. Выводят шлаки и токсины, повышают упругость и эластичность кожи, восстанавливают рельеф. Глубоко увлажняет  и питает все слои кожи, возвращает сияние, моделирует контуры.",
    functions: [],
    price: "5 950",
  },
  {
    id: "5",
    catalog: "catalog__massage",
    title: "ГИГИЕНИЧЕСКИЙ МАССАЖ ТЕЛА ",
    img: "img/massage/1.jpg",
    text:
      "Определиться с видом массажа и процедур, необходимых для решения вашей задачи вам поможет наш эстетист по телу! ",
    functions: [],
    price: "от 1660 ",
  },
  {
    id: "6",
    catalog: "catalog__massage",
    title: "Пилинг Аюрведа",
    img: "img/massage/8.jpg",
    text:
      "На влажную кожу массажными движениями наносится моделирующий пилинг в смеси с уходовым маслом.. Уход сопровождает тонкий аромат.Удаляет ороговевшие частицы, восстаниваливает гладкость кожи, моделирует контуры. Дарит приятный аромат.",
    functions: [],
    price: "2 900",
  },
  {
    id: "7",
    catalog: "catalog__massage",
    title: "Пилинг Морской солевой ",
    img: "img/massage/7_7.jpg",
    text:
      "Активизируют процессы клеточного метаболизма. Выводят шлаки и токсины, повышают упругость и эластичность кожи, восстанавливают рельеф.",
    functions: [],
    price: "3 970",
  },
  {
    id: "8",
    catalog: "catalog__massage",
    title: "Капсула Капсула Dermalife Spa-Jet™",
    img: "img/massage/8_8.jpg",
    text:
      "Spa-Jet™ создает совершенную для здоровья среду курорта. Капсула сконцентрировала в себе большинство полезных природных воздействий.",
    functions: [
      "Капсула Dermalife — это полноценный лечебно курортный санаторий",
    ],
    price: "4600",
  },
  {
    id: "9",
    catalog: "catalog__massage",
    title: "Гидромассажная ванна",
    img: "img/massage/9_9.jpg",
    text:
      "Массажи издавна используют для профилактики и лечения многих заболеваний. Существует множество самых разнообразных мануальных практик. Среди них следует особо выделить гидромассаж. Это уникальная процедура, основанная на целебном воздействии воды, пузырьков воздуха и мягкого давления на ткани человеческого тела.",
    functions: [],
    price: "1500",
  },
  // {
  //   id: "1",
  //   catalog: "catalog__massage",
  //   title: "Массаж-рефлексотерапия стоп",
  //   img: "img/massage/2.jpg",
  //   text: "",
  //   functions: [],
  //   price: "950",
  // },
  // {
  //   id: "2",
  //   catalog: "catalog__massage",
  //   title: "Аромат-массаж «Энергия»",
  //   img: "img/massage/3.jpg",
  //   text: "",
  //   functions: [],
  //   price: "2 900",
  // },
  // {
  //   id: "3",
  //   catalog: "catalog__massage",
  //   title: "Spa-уход «Арома-энергия»",
  //   img: "img/massage/4.jpg",
  //   text: "",
  //   functions: [],
  //   price: "6 250",
  // },
  // {
  //   id: "4",
  //   catalog: "catalog__massage",
  //   title: "Клеопатра",
  //   img: "img/massage/5.jpg",
  //   text: "",
  //   functions: [],
  //   price: "5 950",
  // },
  // {
  //   id: "5",
  //   catalog: "catalog__massage",
  //   title: "Бодистайлинг",
  //   img: "img/massage/6.jpg",
  //   text: "",
  //   functions: [],
  //   price: "7 270",
  // },
  // {
  //   id: "6",
  //   catalog: "catalog__massage",
  //   title: "Мусс для тела",
  //   img: "img/massage/7.jpg",
  //   text: "",
  //   functions: [],
  //   price: "6 600",
  // },
  // {
  //   id: "7",
  //   catalog: "catalog__massage",
  //   title: "Пилинги",
  //   img: "img/massage/8.jpg",
  //   text: "",
  //   functions: [],
  //   price: "от 2 900",
  // },
  // {
  //   id: "8",
  //   catalog: "catalog__massage",
  //   title: "Программа Day Spa",
  //   img: "img/massage/9.jpg",
  //   text: "",
  //   functions: [],
  //   price: "от 2000",
  // },
];
let catalog__eyebrows = [
  {
    id: "0",
    catalog: "catalog__eyebrows",
    title: "Окрашивание бровей",
    img: "img/eyebrows/1.jpg",
    text: "",
    functions: [],
    price: "400",
  },
  {
    id: "1",
    catalog: "catalog__eyebrows",
    title: "Окрашивание ресниц",
    img: "img/eyebrows/2.jpg",
    text: "",
    functions: [],
    price: "400",
  },
  {
    id: "2",
    catalog: "catalog__eyebrows",
    title: "Коррекция бровей",
    img: "img/eyebrows/3.jpg",
    text: "",
    functions: [],
    price: "450",
  },
  {
    id: "3",
    catalog: "catalog__eyebrows",
    title: "Моделирование густых бровей",
    img: "img/eyebrows/4.jpg",
    text: "",
    functions: [],
    price: "550",
  },
  {
    id: "4",
    catalog: "catalog__eyebrows",
    title: "Архитектура бровей",
    img: "img/eyebrows/5.jpg",
    text:
      "Архитектура бровей (броу-арт) – это косметическая процедура, требующая от мастера художественных навыков, врожденного эстетического вкуса и специфических знаний. Процесс заключается в подборе и создании формы бровей в соответствии с цветом кожи, волос, формы лица, особенностей внешности.",
    functions: [],
    price: "от 1350",
  },

  {
    id: "5",
    catalog: "catalog__eyebrows",
    title: "Макияж",
    img: "img/body/1.jpg",
    text: "",
    functions: [
      "Экспресс макияж – 1890",
      "Дневной макияж – 2350",
      "Вечерний макияж - 3800",
      "Вечерний макияж - 4280",
      "Вечерний макияж Smoky eyes - 4280",
      "Свадебный макияж – 4650",
    ],
    price: "от 1890",
  },
];
let catalog__depilation = [
  {
    id: "0",
    catalog: "catalog__depilation",
    title: "Лица",
    img: "img/depilation/1.jpg",
    text: "",
    functions: ["Депиляция верхняя губа 600", "Депиляция лица 1000"],
    price: "от 600",
  },
  {
    id: "1",
    catalog: "catalog__depilation",
    title: "Ног",
    img: "img/depilation/2.jpg",
    text: "",
    functions: [
      "Депиляция ног до колен 1100",
      "Депиляция ног выше колена 1100",
      "Депиляция ног полностью 1760",
    ],
    price: "от 1 100",
  },
  {
    id: "2",
    catalog: "catalog__depilation",
    title: "Рук",
    img: "img/depilation/3.jpg",
    text: "",
    functions: [
      "Депиляция подмышек 900",
      "Депиляция рук до локтя 900",
      "Депиляция рук полностью 1450",
      "Депиляция кистей рук 500",
    ],
    price: "от 900",
  },
  {
    id: "3",
    catalog: "catalog__depilation",
    title: "Тела",
    img: "img/depilation/4.jpg",
    text: "",
    functions: [
      "Депиляция груди 950",
      "Депиляция живота 950",
      "Депиляция спины 950",
      "Депиляция поясницы 900",
      "Депиляция ягодиц 950",
    ],
    price: "от 900",
  },
  {
    id: "4",
    catalog: "catalog__depilation",
    title: "бикини",
    img: "img/depilation/5.jpg",
    text: "",
    functions: ["Депиляция бикини 1550", "Депиляция бикини (глубокая) 2200"],
    price: " от 1550",
  },
];
let catalog__body = [
  {
    id: "0",
    catalog: "catalog__body",
    title: "Солярий",
    img: "img/body/1_1.jpg",
    text:
      "   Многие из нас мечтают о красивом загаре. Для большинства людей смуглая кожа является символом красоты, успеха и здоровья, не говоря уже о том, что солнечный свет дарит человеку ощущение праздника, радости, красоты и молодости. Но для нашей полосы характерна нехватка солнечного света и особенно остро это ощущается в зимний период. К счастью сейчас красивого и ровного загара можно добиться с помощью солярия.",
    functions: ["Солярий 35₽ минута"],
    price: "от 35",
  },
];
let close__popUp_catalog = function () {
  popup_wrap_catalog.classList.add("popUpDis");
  document.body.style.overflow = "visible";
  popup_wrap_catalog.classList.remove("popUpShow");
};

let popup_main_catalog = document.querySelector(".popup-main_catalog");
let popup_wrap_catalog = document.querySelector(".popup-wrap_catalog");
let change__popUp_catalog = function (obj) {
  popup_wrap_catalog.classList.remove("popUpDis");
  document.body.style.overflow = "hidden";
  popup_wrap_catalog.classList.add("popUpShow");
  popup_main_catalog.innerHTML = `
          <div class="img-wrap">
          <img src='${obj.img}' />
          </div>
            <div class="description">
              <p class="title">
                ${obj.title}
              </p>
              <div class="line"></div>
              <p class="description-text">
               ${obj.text}
              </p>
              ${obj.functions
                .map(
                  (i) => `
              <div class="function">
                <div class="circle"></div>
                <p>${i}</p>
              </div>
              `
                )
                .join("")}
              <p class="price-wrap">
                <span class="price-text">Цена:</span>
                <span class="price-value">${obj.price}</span>
                <span class="symbol">₽</span>
              </p>
            </div>

  `;
};

//catalog
//sale
let sale_button_head = document.querySelector(".sale-button_head");
let popup_wrap__sale_close = document.querySelector(".popup_wrap__sale_close");
let popup_wrap__sale = document.querySelector(".popup-wrap__sale");

sale_button_head.addEventListener("click", function () {
  popup_wrap__sale.classList.remove("popUpDis");
  document.body.style.overflow = "hidden";
  popup_wrap__sale.classList.add("popUpShow");
});
popup_wrap__sale_close.addEventListener("click", function () {
  popup_wrap__sale.classList.add("popUpDis");
  document.body.style.overflow = "visible";
  popup_wrap__sale.classList.remove("popUpShow");
});

//sale
let popup_wrap__consultation = document.querySelector(
  ".popup-wrap__consultation"
);
let consultation_button_1 = document.querySelector(".consultation-button");
let consultation_button_2 = document.querySelector(".consultation-button_2");
let consultation_close = document.querySelector(".consultation_close");
consultation_close.addEventListener("click", function () {
  popup_wrap__consultation.classList.add("popUpDis");
  document.body.style.overflow = "visible";
  popup_wrap__consultation.classList.remove("popUpShow");
});
let consultation__butt = function (btn) {
  btn.addEventListener("click", function () {
    popup_wrap__consultation.classList.remove("popUpDis");
    document.body.style.overflow = "hidden";
    popup_wrap__consultation.classList.add("popUpShow");
  });
};
consultation__butt(consultation_button_1);
consultation__butt(consultation_button_2);

//consultation

/// JQ
$(function () {
  // $("form").submit(function () {
  //   //Change
  //   var th = $(this);
  //   $.ajax({
  //     type: "POST",
  //     url: "mail.php", //Change
  //     data: th.serialize(),
  //   }).done(function () {
  //     setTimeout(() => {
  //       location = "http://salonjulie.ru" + "/th";
  //     }, 1500);
  //     setTimeout(function () {
  //       // Done Functions
  //       th.trigger("reset");
  //     }, 1000);
  //   });
  //   return false;
  // });
  ////jq

  $(".slick1__1").slick({
    slidesToScroll: 1,
    slidesToShow: 1,
    infinite: false,
    arrows: true,
    touchMove: false,
    swipe: false,
  });

  $(".slick2-wrap").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  });

  $(".nails-wrap").slick({
    slidesToScroll: 1,
    slidesToShow: 1,
  });
  ///section2
  ///section2
  ///section2
  //catalog
  catalog_1 = document.querySelector(".catalog_1");
  catalog_2 = document.querySelector(".catalog_2");
  catalog_3 = document.querySelector(".catalog_3");
  catalog_8 = document.querySelector(".catalog_8");
  catalog_4 = document.querySelector(".catalog_4");
  catalog_5 = document.querySelector(".catalog_5");
  catalog_6 = document.querySelector(".catalog_6");
  catalog_7 = document.querySelector(".catalog_7");
  section2_right_content = document.querySelector(".Main-content__inner");
  let all__catalogs_links = [
    document.querySelector(".catalog_1 .wrap "),
    document.querySelector(".catalog_2 .wrap "),
    document.querySelector(".catalog_3 .wrap "),
    document.querySelector(".catalog_4 .wrap "),
    document.querySelector(".catalog_5 .wrap "),
    document.querySelector(".catalog_6 .wrap "),
    document.querySelector(".catalog_7 .wrap "),
    document.querySelector(".catalog_8 .wrap "),
  ];
  let all__catalogs_tg = [
    document.querySelector(".catalog_1 .triangle"),
    document.querySelector(".catalog_2 .triangle"),
    document.querySelector(".catalog_3 .triangle"),
    document.querySelector(".catalog_4 .triangle"),
    document.querySelector(".catalog_5 .triangle"),
    document.querySelector(".catalog_6 .triangle"),
    document.querySelector(".catalog_7 .triangle"),
    document.querySelector(".catalog_8 .triangle"),
  ];
  //catalog
  //slider
  slick__catalog_1 = document.querySelector(".slick__catalog_1_1");
  slick__catalog_2 = document.querySelector(".slick__catalog_2");
  slick__catalog_3 = document.querySelector(".slick__catalog_3");
  slick__catalog_8 = document.querySelector(".slick__catalog_8");
  slick__catalog_4 = document.querySelector(".slick__catalog_4");
  slick__catalog_5 = document.querySelector(".slick__catalog_5");
  slick__catalog_6 = document.querySelector(".slick__catalog_6");
  slick__catalog_7 = document.querySelector(".slick__catalog_7");
  //slider
  let all__sliders = [
    slick__catalog_1,
    slick__catalog_2,
    slick__catalog_3,
    slick__catalog_4,
    slick__catalog_5,
    slick__catalog_6,
    slick__catalog_7,
    slick__catalog_8,
  ];

  //slider

  let catalog__change = function (catalog, array, link, tg) {
    catalog.addEventListener("click", function () {
      for (let i = 0; i < all__sliders.length; i++) {
        all__catalogs_links[i].classList.remove("main-active");
        all__catalogs_tg[i].classList.remove("triangle-active");
      }
      link.classList.add("main-active");
      tg.classList.add("triangle-active");
      section2_right_content.classList.add("slider__animation");
      setTimeout(() => {
        section2_right_content.classList.remove("slider__animation");

        section2_right_content.innerHTML = array
          .map(
            (i) =>
              `
  <div class="section2-right-content_item desktop">
    <div class="styled-border-top"></div>
    <p class="section2-right-content_item-title">
      ${i.title}
    </p>
    <p class="title-subline"></p>
    <div class="nails-img_wrap">
      <img src="${i.img}" class="nails-img" />
    </div>
    <div class="details">
      <p class="details-text" onclick ="change__popUp_catalog(${i.catalog}[${i.id}])">Подробнее</p>
      <img src="static/images/details-arrow-right.png" />
    </div>
  </div>
  
  `
          )
          .join("");
      }, 400);
    });
  };

  let catalog__change__slider = function (catalog, sliderNum, catalogArray) {
    for (let i = 0; i < all__sliders.length; i++) {
      all__sliders[i].classList.add("slider_hide");
    }
    sliderNum.innerHTML = catalogArray
      .map(
        (i) =>
          `
            <div class="slick__catalog_1-item section2-right-content_item desktop ">
            <div class="styled-border-top"></div>
            <p class="section2-right-content_item-title">
              ${i.title}
            </p>
            <p class="title-subline"></p>
            <div class="nails-img_wrap">
              <img src="${i.img}" class="nails-img">
            </div>
            <div class="details">
              <p class="details-text" onclick ="change__popUp_catalog(${i.catalog}[${i.id}])" >Подробнее</p>
              <img src="static/images/details-arrow-right.png">
            </div>
          </div>

  `
      )
      .join("");
  };
  let catalog__slider__shitch = function (catalog, sliderNum, link, tg) {
    $(".slick__catalog_1").slick("slickPause");
    catalog.addEventListener("click", function () {
      for (let i = 0; i < all__sliders.length; i++) {
        all__catalogs_links[i].classList.remove("main-active");
        all__catalogs_tg[i].classList.remove("triangle-active");
        all__sliders[i].classList.add("slider_hide");
        all__sliders[i].classList.remove("slider_show");
      }
      link.classList.add("main-active");
      tg.classList.add("triangle-active");
      $(".slick__catalog_1").slick("slickPlay");

      sliderNum.classList.add("slider_show");
      sliderNum.classList.add("slider__animation");
      setTimeout(() => {
        sliderNum.classList.remove("slider__animation");
      }, 500);

      $(".slick__catalog_1").on("afterChange", function (
        event,
        slick,
        direction
      ) {
        $(".slick__catalog_1").slick("slickPause");
      });
    });
  };

  //main section2
  catalog__change(
    catalog_1,
    catalog__barber,
    all__catalogs_links[0],
    all__catalogs_tg[0]
  );
  catalog__change(
    catalog_2,
    catalog__nails,
    all__catalogs_links[1],
    all__catalogs_tg[1]
  );
  catalog__change(
    catalog_3,
    catalog__cosmetology,
    all__catalogs_links[2],
    all__catalogs_tg[2]
  );
  catalog__change(
    catalog_8,
    catalog__men,
    all__catalogs_links[7],
    all__catalogs_tg[7]
  );
  catalog__change(
    catalog_4,
    catalog__massage,
    all__catalogs_links[3],
    all__catalogs_tg[3]
  );
  catalog__change(
    catalog_5,
    catalog__eyebrows,
    all__catalogs_links[4],
    all__catalogs_tg[4]
  );
  catalog__change(
    catalog_6,
    catalog__depilation,
    all__catalogs_links[5],
    all__catalogs_tg[5]
  );
  catalog__change(
    catalog_7,
    catalog__body,
    all__catalogs_links[6],
    all__catalogs_tg[6]
  );
  //main section2
  //slider section2
  catalog__change__slider(catalog_1, slick__catalog_1, catalog__barber);
  catalog__change__slider(catalog_2, slick__catalog_2, catalog__nails);
  catalog__change__slider(catalog_3, slick__catalog_3, catalog__cosmetology);
  catalog__change__slider(catalog_8, slick__catalog_8, catalog__men);
  catalog__change__slider(catalog_4, slick__catalog_4, catalog__massage);
  catalog__change__slider(catalog_5, slick__catalog_5, catalog__eyebrows);
  catalog__change__slider(catalog_6, slick__catalog_6, catalog__depilation);
  catalog__change__slider(catalog_7, slick__catalog_7, catalog__body);
  //slider section2
  $(".slick__catalog_1").slick({
    slidesToScroll: 1,
    slidesToShow: 1,
    nextArrow:
      '<button type="button" class = "slick-arrow slick-next"><img class="img-arr" src="static/images/slick-arrow.png" alt="next"></button>',
    prevArrow:
      '<button type="button" class = "slick-arrow slick-prev"><img class="img-arr" src="static/images/slick2-left.png" alt="back"></button>',
    infinite: true,
    autoplay: true,
    dots: true,
    autoplaySpeed: 1,
  });

  if ($(window).width() < 768) {
    catalog__slider__shitch(
      catalog_1,
      slick__catalog_1,
      all__catalogs_links[0],
      all__catalogs_tg[0]
    );
    catalog__slider__shitch(
      catalog_2,
      slick__catalog_2,
      all__catalogs_links[1],
      all__catalogs_tg[1]
    );
    catalog__slider__shitch(
      catalog_3,
      slick__catalog_3,
      all__catalogs_links[2],
      all__catalogs_tg[2]
    );
    catalog__slider__shitch(
      catalog_4,
      slick__catalog_4,
      all__catalogs_links[3],
      all__catalogs_tg[3]
    );
    catalog__slider__shitch(
      catalog_5,
      slick__catalog_5,
      all__catalogs_links[4],
      all__catalogs_tg[4]
    );
    catalog__slider__shitch(
      catalog_6,
      slick__catalog_6,
      all__catalogs_links[5],
      all__catalogs_tg[5]
    );
    catalog__slider__shitch(
      catalog_7,
      slick__catalog_7,
      all__catalogs_links[6],
      all__catalogs_tg[6]
    );
    catalog__slider__shitch(
      catalog_8,
      slick__catalog_8,
      all__catalogs_links[7],
      all__catalogs_tg[7]
    );
  }

  ///section2
  ///section2
  ///section2

  ///section Personal
  ///section Personal
  ///section Personal

  let section4_content = document.querySelector(".section4-content");
  let personal__slider = document.querySelector(".personal__slider");
  let popup_wrap = document.querySelector(".popup-wrap");

  let section4__content_fill = function (arr) {
    //let g = i.id
    section4_content.innerHTML = arr
      .map(
        (i) =>
          `
      <div class="section4-item">
      <div class="section4-line"></div>
      <div class="section4-img-wrap">
        <img src="${i.img}">
      </div>
      <p class="section4-name">${i.name}</p>
      <p class="section4-name-line"></p>
      <p class="section4-profession">${i.special}</p>
      <p class="section4-details" onclick ="change__popUp_personal(personal_arr[${i.id}]) " >Подробнее</p>
    </div>
`
      )
      .join("");
  };
  let section4__content_fill_slider = function (arr) {
    personal__slider.innerHTML = arr
      .map(
        (i) =>
          `
        <div class="section4-item ">
        <div class="section4-line"></div>
        <div class="section4-img-wrap">
          <img src="${i.img}">
        </div>
        <p class="section4-name">${i.name}</p>
        <p class="section4-name-line"></p>
        <p class="section4-profession">${i.special}</p>
        <p class="section4-details" onclick ="change__popUp_personal(personal_arr[${i.id}]) " >Подробнее</p>
      </div>
`
      )
      .join("");
  };

  section4__content_fill(personal_arr);
  section4__content_fill_slider(personal_arr);
  $(".personal__slider").slick({
    nextArrow:
      '<button type="button" class = "slick-arrow slick-next"><img class="img-arr" src="static/images/slick-arrow.png" alt="next"></button>',
    prevArrow:
      '<button type="button" class = "slick-arrow slick-prev"><img class="img-arr" src="static/images/slick2-left.png" alt="back"></button>',
    slidesToScroll: 1,
    slidesToShow: 1,
    infinite: false,
    touchMove: false,
    swipe: false,
  });
  /// personal popUp

  /// personal popUp
  ///section Personal
  ///section Personal
  ///section Personal

  ///counters
  if ($(window).width() < 768) {
    let changeCountInner = function (btn_1, btn_2, count, arr) {
      let arrLen = arr.childNodes.length;
      let counter = 1;
      btn_2.addEventListener("click", function () {
        btn_2.disabled = true;
        setTimeout(() => {
          btn_2.disabled = false;
        }, 600);
        if (counter === arrLen) {
          counter = arrLen;
        } else {
          counter = counter + 1;
        }
        count.innerHTML = `${counter} / ${arrLen} `;
      });
      btn_1.addEventListener("click", function () {
        btn_1.disabled = true;
        setTimeout(() => {
          btn_1.disabled = false;
        }, 400);
        if (counter === 1) {
          counter = 1;
        } else {
          counter = counter - 1;
        }
        count.innerHTML = `${counter} / ${arrLen} `;
      });
      count.innerHTML = `${counter} / ${arrLen} `;
    };
    ///counter_1
    let count_1 = document.querySelector(".count_1");
    let sliderCount_1 = document.querySelector(
      ".slick1-wrap-inner .slick-track"
    );
    let prev_1 = document.querySelector(".slick1-wrap-inner .slick-prev");
    let next_1 = document.querySelector(".slick1-wrap-inner .slick-next");
    ///counter_2
    let count_2 = document.querySelector(".count_2");
    let sliderCount_2 = document.querySelector(".slick2-wrap .slick-track");
    let prev_2 = document.querySelector(".slick2-wrap .slick-prev");
    let next_2 = document.querySelector(".slick2-wrap .slick-next");
    ///counter_3
    let count_3 = document.querySelector(".count_3");
    let sliderCount_3 = document.querySelector(
      ".personal__slider-inner .slick-track"
    );
    let prev_3 = document.querySelector(".personal__slider-inner .slick-prev");
    let next_3 = document.querySelector(".personal__slider-inner .slick-next");
    ///catalog_counters
    let catalog_count_1 = document.querySelector(".catalog_count_1");
    let catalog_sliderCount_1 = document.querySelector(
      ".slick__catalog_1_1 .slick-track"
    );
    let catalog_prev_1 = document.querySelector(
      ".slick__catalog_1_1 .slick-prev"
    );
    let catalog_next_1 = document.querySelector(
      ".slick__catalog_1_1 .slick-next"
    );

    changeCountInner(prev_1, next_1, count_1, sliderCount_1);
    changeCountInner(prev_2, next_2, count_2, sliderCount_2);
    changeCountInner(prev_3, next_3, count_3, sliderCount_3);
    //catalog
    changeCountInner(
      catalog_prev_1,
      catalog_next_1,
      catalog_count_1,
      catalog_sliderCount_1
    );
    changeCountInner(prev_2, next_2, count_2, sliderCount_2);
    changeCountInner(prev_3, next_3, count_3, sliderCount_3);
  }
  ///counters

  ////jq
});
// let btn__1_th = document.querySelector(".btn__1-th");
// let btn__2_th = document.querySelector(".btn__2-th");
// let btn__3_th = document.querySelector(".btn__3-th");

// btn__1_th.addEventListener("click", function () {
//   throwTh();
// });
// btn__2_th.addEventListener("click", function () {
//   throwTh();
// });
// btn__3_th.addEventListener("click", function () {
//   throwTh();
// });

// let throwTh = function () {
//   setTimeout(function () {
//     location = "http://salonjulie.ru" + "/th";
//   }, 3500);
// };
