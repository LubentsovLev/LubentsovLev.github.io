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
        <p class="skills-title">Обучение</p>
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
    img: "static/images/Elena.png",
    special: "Парикмахер-стилист",
    list_head: "Обучение проходила всегда, ориентируясь на",
    skills_text: [
      "потребности конкретного клиента, на индивидуальный подход к каждомуклиенту;",
      "развитие навыков в парикмахерском искусстве, освоение новых технологий, знакомство с новыми материалами и инструментами в профессии, освоение навыков решения задач любого уровня сложности, общение и обмен опытом работы с другими мастерами;",
      "видение задач и направление развития в данном конкретном периоде времени в сфере красоты и здоровья;",
      "поддержку и развитие общей концепции салона и парикмахерского сегмента в частности."
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
    name: "Громченко Елена 2",
    img: "static/images/Elena.png",
    special: "Парикмахер-стилист",
    list_head: "Обучение проходила всегда, ориентируясь на",
    skills_text: [
      "потребности конкретного клиента, на индивидуальный подход к каждомуклиенту;",
      "развитие навыков в парикмахерском искусстве, освоение новых технологий, знакомство с новыми материалами и инструментами в профессии, освоение навыков решения задач любого уровня сложности, общение и обмен опытом работы с другими мастерами;",
      "видение задач и направление развития в данном конкретном периоде времени в сфере красоты и здоровья;",
      "поддержку и развитие общей концепции салона и парикмахерского сегмента в частности."
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
    id: 2,
    name: "Громченко Елена 3",
    img: "static/images/Elena.png",
    special: "Парикмахер-стилист",
    list_head: "Обучение проходила всегда, ориентируясь на",
    skills_text: [
      "потребности конкретного клиента, на индивидуальный подход к каждомуклиенту;",
      "развитие навыков в парикмахерском искусстве, освоение новых технологий, знакомство с новыми материалами и инструментами в профессии, освоение навыков решения задач любого уровня сложности, общение и обмен опытом работы с другими мастерами;",
      "видение задач и направление развития в данном конкретном периоде времени в сфере красоты и здоровья;",
      "поддержку и развитие общей концепции салона и парикмахерского сегмента в частности."
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
    id: 3,
    name: "Громченко Елена 4",
    img: "static/images/Elena.png",
    special: "Парикмахер-стилист",
    list_head: "Обучение проходила всегда, ориентируясь на",
    skills_text: [
      "потребности конкретного клиента, на индивидуальный подход к каждомуклиенту;",
      "развитие навыков в парикмахерском искусстве, освоение новых технологий, знакомство с новыми материалами и инструментами в профессии, освоение навыков решения задач любого уровня сложности, общение и обмен опытом работы с другими мастерами;",
      "видение задач и направление развития в данном конкретном периоде времени в сфере красоты и здоровья;",
      "поддержку и развитие общей концепции салона и парикмахерского сегмента в частности."
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
  
];
//personal
//catalog
let catalog__barber = [
  {
    id: "0",
    catalog: "catalog__barber",
    title: "Неттуаяж «Лореаль»",
    img: "img/hair/1.jpg",
    text:
      "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие",
    functions: ["функция 1", "function 2", "function 3"],
    price: "50 000",
  },
  {
    id: "1",
    catalog: "catalog__barber",
    title: "Удаление предыдущего оттенка/тона «Органик»",
    img: "img/hair/2.jpg",
    text:
      "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие",
    functions: ["функция 1", "function 2", "function 3"],
    price: "50 000",
  },
  {
    id: "2",
    catalog: "catalog__barber",
    title: "Восстанавливающие уходы для волос «Давинес»",
    img: "img/hair/3.jpg",
    text:
      "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие",
    functions: ["функция 1", "function 2", "function 3"],
    price: "50 000",
  },
  {
    id: "3",
    catalog: "catalog__barber",
    title: "Лечение волос и кожи головы",
    img: "img/hair/4.jpg",
    text:
      "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие",
    functions: ["функция 1", "function 2", "function 3"],
    price: "50 000",
  },
  {
    id: "4",
    catalog: "catalog__barber",
    title: "Биоламинирование",
    img: "img/hair/5.jpg",
    text:
      "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие",
    functions: ["функция 1", "function 2", "function 3"],
    price: "50 000",
  },
  {
    id: "5",
    catalog: "catalog__barber",
    title: "В дополнение к укладке",
    img: "img/hair/7.jpg",
    text:
      "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие",
    functions: ["функция 1", "function 2", "function 3"],
    price: "50 000",
  },
  {
    id: "6",
    catalog: "catalog__barber",
    title: "Восстанавливающие уходы для волос «Органик»",
    img: "img/hair/8.jpg",
    text:
      "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие",
    functions: ["функция 1", "function 2", "function 3"],
    price: "50 000",
  },
  {
    id: "7",
    catalog: "catalog__barber",
    title: "Восстанавливающие уходы для волос Nashi Argan",
    img: "img/hair/9.jpg",
    text:
      "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие",
    functions: ["функция 1", "function 2", "function 3"],
    price: "50 000",
  },
  {
    id: "8",
    catalog: "catalog__barber",
    title: "Восстанавливающие уходы для волос Cureplex",
    img: "img/hair/10.jpg",
    text:
      "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие",
    functions: ["функция 1", "function 2", "function 3"],
    price: "50 000",
  },
  {
    id: "9",
    catalog: "catalog__barber",
    title: "Масляное обёртывание для волос",
    img: "img/hair/11.jpg",
    text:
      "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие",
    functions: ["функция 1", "function 2", "function 3"],
    price: "50 000",
  },
];
let catalog__nails = [
  {
    id: "0",
    catalog: "catalog__nails",
    title: "Педикюр",
    img: "img/nails/1.jpg",
    text:
      "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие",
    functions: ["функция 1", "function 2", "function 3"],
    price: "50 000",
  },
  {
    id: "1",
    catalog: "catalog__nails",
    title: "Маникюр",
    img: "img/nails/2.jpg",
    text:
      "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие",
    functions: ["функция 1", "function 2", "function 3"],
    price: "50 000",
  },
  {
    id: "2",
    catalog: "catalog__nails",
    title: "Маникюр мужской",
    img: "img/nails/3.jpg",
    text:
      "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие",
    functions: ["функция 1", "function 2", "function 3"],
    price: "50 000",
  },
  {
    id: "3",
    catalog: "catalog__nails",
    title: "Уходы за кожей рук и ног",
    img: "img/nails/4.jpg",
    text:
      "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие",
    functions: ["функция 1", "function 2", "function 3"],
    price: "50 000",
  },
  {
    id: "4",
    catalog: "catalog__nails",
    title: "Покрытие и снятие",
    img: "img/nails/5.jpg",
    text:
      "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие",
    functions: ["функция 1", "function 2", "function 3"],
    price: "50 000",
  },
  {
    id: "5",
    catalog: "catalog__nails",
    title: "Наращивание",
    img: "img/nails/6.jpg",
    text:
      "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие",
    functions: ["функция 1", "function 2", "function 3"],
    price: "50 000",
  },
];
let catalog__cosmetology = [
  {
    id: "0",
    catalog: "catalog__cosmetology",
    title: "Уход скиноваржх",
    img: "img/cosmet/1.jpg",
    text:
      "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие",
    functions: ["функция 1", "function 2", "function 3"],
    price: "50 000",
  },
  {
    id: "1",
    catalog: "catalog__cosmetology",
    title: "Babor Креш-уход",
    img: "img/cosmet/2.jpg",
    text:
      "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие",
    functions: ["функция 1", "function 2", "function 3"],
    price: "50 000",
  },
  {
    id: "2",
    catalog: "catalog__cosmetology",
    title: "Коллагеновая биоматрица",
    img: "img/cosmet/3.jpg",
    text:
      "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие",
    functions: ["функция 1", "function 2", "function 3"],
    price: "50 000",
  },
  {
    id: "3",
    catalog: "catalog__cosmetology",
    title: "Увлажняющая лифтинг-маска",
    img: "img/cosmet/4.jpg",
    text:
      "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие",
    functions: ["функция 1", "function 2", "function 3"],
    price: "50 000",
  },
  {
    id: "4",
    catalog: "catalog__cosmetology",
    title: "Моделирующая маска ультра-комфорт",
    img: "img/cosmet/5.jpg",
    text:
      "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие",
    functions: ["функция 1", "function 2", "function 3"],
    price: "50 000",
  },
  {
    id: "5",
    catalog: "catalog__cosmetology",
    title: "Локальный уход против купероза",
    img: "img/cosmet/6.jpg",
    text:
      "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие",
    functions: ["функция 1", "function 2", "function 3"],
    price: "50 000",
  },
  {
    id: "6",
    catalog: "catalog__cosmetology",
    title: "Уход за кожей вокруг глаз",
    img: "img/cosmet/7.jpg",
    text:
      "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие",
    functions: ["функция 1", "function 2", "function 3"],
    price: "50 000",
  },
  {
    id: "7",
    catalog: "catalog__cosmetology",
    title: "Экспресс-уход за руками",
    img: "img/cosmet/8.jpg",
    text:
      "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие",
    functions: ["функция 1", "function 2", "function 3"],
    price: "50 000",
  },
  {
    id: "8",
    catalog: "catalog__cosmetology",
    title: "Уходы класса Luxe",
    img: "img/cosmet/9.jpg",
    text:
      "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие",
    functions: ["функция 1", "function 2", "function 3"],
    price: "50 000",
  },
  {
    id: "9",
    catalog: "catalog__cosmetology",
    title: "Волшебные руки красоты",
    img: "img/cosmet/10.jpg",
    text:
      "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие",
    functions: ["функция 1", "function 2", "function 3"],
    price: "50 000",
  },
  {
    id: "10",
    catalog: "catalog__cosmetology",
    title: "VIP-уход",
    img: "img/cosmet/11.jpg",
    text:
      "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие",
    functions: ["функция 1", "function 2", "function 3"],
    price: "50 000",
  },
  {
    id: "11",
    catalog: "catalog__cosmetology",
    title: "Базовый уход с коллагеном",
    img: "img/cosmet/12.jpg",
    text:
      "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие",
    functions: ["функция 1", "function 2", "function 3"],
    price: "50 000",
  },

];
let catalog__massage = [
  {
    id: "0",
    catalog: "catalog__massage",
    title: "Гигиенический массаж",
    img: "img/massage/1.jpg",
    text:
      "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие",
    functions: ["функция 1", "function 2", "function 3"],
    price: "50 000",
  },
  {
    id: "1",
    catalog: "catalog__massage",
    title: "Массаж-рефлексотерапия стоп",
    img: "img/massage/2.jpg",
    text:
      "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие",
    functions: ["функция 1", "function 2", "function 3"],
    price: "50 000",
  },
  {
    id: "2",
    catalog: "catalog__massage",
    title: "Аромат-массаж «Энергия»",
    img: "img/massage/3.jpg",
    text:
      "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие",
    functions: ["функция 1", "function 2", "function 3"],
    price: "50 000",
  },
  {
    id: "3",
    catalog: "catalog__massage",
    title: "Spa-уход «Арома-энергия»",
    img: "img/massage/4.jpg",
    text:
      "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие",
    functions: ["функция 1", "function 2", "function 3"],
    price: "50 000",
  },
  {
    id: "4",
    catalog: "catalog__massage",
    title: "Клеопатра",
    img: "img/massage/5.jpg",
    text:
      "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие",
    functions: ["функция 1", "function 2", "function 3"],
    price: "50 000",
  },
  {
    id: "5",
    catalog: "catalog__massage",
    title: "Бодистайлинг",
    img: "img/massage/6.jpg",
    text:
      "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие",
    functions: ["функция 1", "function 2", "function 3"],
    price: "50 000",
  },
  {
    id: "6",
    catalog: "catalog__massage",
    title: "Мусс для тела",
    img: "img/massage/7.jpg",
    text:
      "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие",
    functions: ["функция 1", "function 2", "function 3"],
    price: "50 000",
  },
  {
    id: "7",
    catalog: "catalog__massage",
    title: "Пилинги",
    img: "img/massage/8.jpg",
    text:
      "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие",
    functions: ["функция 1", "function 2", "function 3"],
    price: "50 000",
  },
  {
    id: "8",
    catalog: "catalog__massage",
    title: "Программа Day Spa",
    img: "img/massage/9.jpg",
    text:
      "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие",
    functions: ["функция 1", "function 2", "function 3"],
    price: "50 000",
  },
];
let catalog__eyebrows = [
  {
    id: "0",
    catalog: "catalog__eyebrows",
    title: "Окрашивание бровей",
    img: "img/eyebrows/1.jpg",
    text:
      "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие",
    functions: ["функция 1", "function 2", "function 3"],
    price: "50 000",
  },
  {
    id: "1",
    catalog: "catalog__eyebrows",
    title: "Окрашивание ресниц",
    img: "img/eyebrows/2.jpg",
    text:
      "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие",
    functions: ["функция 1", "function 2", "function 3"],
    price: "50 000",
  },
  {
    id: "2",
    catalog: "catalog__eyebrows",
    title: "Коррекция бровей",
    img: "img/eyebrows/2.jpg",
    text:
      "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие",
    functions: ["функция 1", "function 2", "function 3"],
    price: "50 000",
  },
  {
    id: "3",
    catalog: "catalog__eyebrows",
    title: "Моделирование густых бровей",
    img: "img/eyebrows/4.jpg",
    text:
      "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие",
    functions: ["функция 1", "function 2", "function 3"],
    price: "50 000",
  },

];
let catalog__depilation = [
  {
    id: "0",
    catalog: "catalog__depilation",
    title: "Лица",
    img: "img/depilation/1.jpg",
    text:
      "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие",
    functions: ["функция 1", "function 2", "function 3"],
    price: "50 000",
  },
  {
    id: "1",
    catalog: "catalog__depilation",
    title: "Ног",
    img: "img/depilation/2.jpg",
    text:
      "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие",
    functions: ["функция 1", "function 2", "function 3"],
    price: "50 000",
  },
  {
    id: "2",
    catalog: "catalog__depilation",
    title: "Рук",
    img: "img/depilation/3.jpg",
    text:
      "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие",
    functions: ["функция 1", "function 2", "function 3"],
    price: "50 000",
  },
  {
    id: "3",
    catalog: "catalog__depilation",
    title: "Тела",
    img: "img/depilation/4.jpg",
    text:
      "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие",
    functions: ["функция 1", "function 2", "function 3"],
    price: "50 000",
  },

];
let catalog__body = [
  {
    id: "0",
    catalog: "catalog__body",
    title: "Уход 1",
    img: "static/images/nails1.png",
    text:
      "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие",
    functions: ["функция 1", "function 2", "function 3"],
    price: "50 000",
  },
  {
    id: "1",
    catalog: "catalog__body",
    title: "Уход  2",
    img: "static/images/nails1.png",
    text:
      "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие",
    functions: ["функция 1", "function 2", "function 3"],
    price: "50 000",
  },
  {
    id: "2",
    catalog: "catalog__body",
    title: "Уход 3",
    img: "static/images/nails1.png",
    text:
      "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие",
    functions: ["функция 1", "function 2", "function 3"],
    price: "50 000",
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
  $("form").submit(function () {
    //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize(),
    }).done(function () {
      alert("Спасибо!");
      setTimeout(function () {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });
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
  ];
  let all__catalogs_tg = [
    document.querySelector(".catalog_1 .triangle"),
    document.querySelector(".catalog_2 .triangle"),
    document.querySelector(".catalog_3 .triangle"),
    document.querySelector(".catalog_4 .triangle"),
    document.querySelector(".catalog_5 .triangle"),
    document.querySelector(".catalog_6 .triangle"),
    document.querySelector(".catalog_7 .triangle"),
  ];
  //catalog
  //slider
  slick__catalog_1 = document.querySelector(".slick__catalog_1_1");
  slick__catalog_2 = document.querySelector(".slick__catalog_2");
  slick__catalog_3 = document.querySelector(".slick__catalog_3");
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
  ];

  //slider

  let catalog__change = function (catalog, array,link, tg) {
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
    catalog.addEventListener("click", function () {
      //debugger
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
  catalog__change(catalog_1, catalog__barber,all__catalogs_links[0],all__catalogs_tg[0]);
  catalog__change(catalog_2, catalog__nails,all__catalogs_links[1],all__catalogs_tg[1]);
  catalog__change(catalog_3, catalog__cosmetology,all__catalogs_links[2],all__catalogs_tg[2]);
  catalog__change(catalog_4, catalog__massage,all__catalogs_links[3],all__catalogs_tg[3]);
  catalog__change(catalog_5, catalog__eyebrows,all__catalogs_links[4],all__catalogs_tg[4]);
  catalog__change(catalog_6, catalog__depilation,all__catalogs_links[5],all__catalogs_tg[5]);
  catalog__change(catalog_7, catalog__body,all__catalogs_links[6],all__catalogs_tg[6]);
  //main section2
  //slider section2
  catalog__change__slider(catalog_1, slick__catalog_1, catalog__barber);
  catalog__change__slider(catalog_2, slick__catalog_2, catalog__nails);
  catalog__change__slider(catalog_3, slick__catalog_3, catalog__cosmetology);
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
        <img src="static/images/section4-img.png">
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
          <img src="static/images/section4-img.png">
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
  });
  /// personal popUp

  /// personal popUp
  ///section Personal
  ///section Personal
  ///section Personal

  ///counters
  if ($(window).width() < 768) {
    let changeCountInner = function (btn_1, btn_2, count, arr) {
      //debugger

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
