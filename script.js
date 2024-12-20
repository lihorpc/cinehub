// Знаходимо всі каруселі
//const carousels = document.querySelectorAll('.carousel-container');

//carousels.forEach((container) => {
//    const carousel = container.querySelector('.carousel');
//  const prevBtn = container.querySelector('.prev-btn');
//    const nextBtn = container.querySelector('.next-btn');

    // Початкова позиція прокрутки
//    let scrollPosition = 0;

    // Події для кнопок
//    prevBtn.addEventListener('click', () => {
//        scrollPosition -= 200;
//        updateCarousel(carousel);
//    });

//    nextBtn.addEventListener('click', () => {
//        scrollPosition += 200;
//        updateCarousel(carousel);
//    });

//    function updateCarousel(carousel) {
//        const maxScroll = carousel.scrollWidth - carousel.offsetWidth;

//       if (scrollPosition < 0) {
//            scrollPosition = 0;
//        } else if (scrollPosition > maxScroll) {
//            scrollPosition = maxScroll;
//        }

//        carousel.style.transform = `translateX(-${scrollPosition}px)`;
//    }
//});

// Отримуємо посилання на елементи каруселі та поле вводу
//const searchInput = document.getElementById('searchInput');
//const carouselItems = document.querySelectorAll('.carousel a');

// Функція для пошуку
//searchInput.addEventListener('input', () => {
//    const query = searchInput.value.toLowerCase(); // Приводимо запит до нижнього регістру

//    carouselItems.forEach(item => {
//        const altText = item.querySelector('img').alt.toLowerCase(); // Отримуємо текст з атрибуту alt
//        if (altText.includes(query)) {
//            item.style.display = 'block'; // Показуємо, якщо є співпадіння
//        } else {
//            item.style.display = 'none'; // Ховаємо, якщо співпадінь немає
//        }
//    });
//});

// Знаходимо всі каруселі
const carousels = document.querySelectorAll('.carousel-container');

// Ініціалізація каруселей
carousels.forEach((container) => {
    const carousel = container.querySelector('.carousel');
    const prevBtn = container.querySelector('.prev-btn');
    const nextBtn = container.querySelector('.next-btn');

    // Початкова позиція прокрутки
    let scrollPosition = 0;

    // Події для кнопок
    prevBtn.addEventListener('click', () => {
        scrollPosition -= 200;
        updateCarousel(carousel);
    });

    nextBtn.addEventListener('click', () => {
        scrollPosition += 200;
        updateCarousel(carousel);
    });

    function updateCarousel(carousel) {
        const maxScroll = carousel.scrollWidth - carousel.offsetWidth;

        if (scrollPosition < 0) {
            scrollPosition = 0;
        } else if (scrollPosition > maxScroll) {
            scrollPosition = maxScroll;
        }

        carousel.style.transform = `translateX(-${scrollPosition}px)`;
        carousel.style.transition = 'transform 0.3s ease-in-out';
    }
});

// Отримуємо елементи DOM
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

// Дані для пошуку (можна розширити, додаючи нові елементи)
const items = [
    { title: 'Персні Влади', url: 'pages/item/item1.html' },
    { title: 'Відьмак', url: 'pages/item/item2.html' },
    { title: 'Гра престолів', url: 'pages/item/item3.html' },
    { title: 'Надприродне', url: 'pages/item/item4.html' },
    { title: 'Люцифер', url: 'pages/item/item5.html' },
    { title: 'Пуститися берега', url: 'pages/item/item6.html' },
    { title: 'Вікінги', url: 'pages/item/item7.html' },
    { title: 'Дивні дива', url: 'pages/item/item8.html' },
    { title: 'Картковий будинок', url: 'pages/item/item9.html' },
    { title: 'Форс-мажори', url: 'pages/item/item10.html' },
];

// Функція для фільтрації та відображення результатів
function displayResults(query) {
    // Очищуємо попередні результати
    searchResults.innerHTML = '';

    // Якщо запит пустий, нічого не показуємо
    if (query.trim() === '') {
        return;
    }

    // Приводимо запит до нижнього регістру для пошуку
    const lowerCaseQuery = query.toLowerCase();

    // Фільтруємо елементи за збігом у заголовках
    const filteredItems = items.filter(item =>
        item.title.toLowerCase().includes(lowerCaseQuery)
    );

    // Якщо немає збігів, виводимо повідомлення "Нічого не знайдено"
    if (filteredItems.length === 0) {
        const noResults = document.createElement('p');
        noResults.textContent = 'Нічого не знайдено';
        noResults.style.color = '#888';
        searchResults.appendChild(noResults);
    } else {
        // Додаємо результати до списку
        filteredItems.forEach(item => {
            const link = document.createElement('a');
            link.href = item.url; // Посилання на відповідну сторінку
            link.target = '_blank'; // Відкриваємо в новій вкладці
            link.textContent = item.title; // Текст посилання
            link.style.display = 'block'; // Робимо посилання вертикальним
            link.style.marginBottom = '5px';
            searchResults.appendChild(link);
        });

    }
}

// Додаємо обробник події для введення в поле пошуку
searchInput.addEventListener('input', () => {
    const query = searchInput.value; // Отримуємо текст із поля введення
    displayResults(query); // Викликаємо функцію відображення результатів
});



