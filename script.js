document.addEventListener('DOMContentLoaded', function () {
    var languageSwitcher = document.getElementById('languageSwitcher');

    if (!languageSwitcher) {
        console.error('Не найден элемент с id "languageSwitcher". Проверьте наличие этого элемента в вашем HTML.');
        return;
    }

    // Определяем текущий язык и устанавливаем соответствующее значение в select
    var currentUrl = window.location.href;
    var currentLanguage = 'pl'; // По умолчанию русский

    if (currentUrl.includes('index-ru.html')) {
        currentLanguage = 'ru';
    } else if (currentUrl.includes('index-en.html')) {
        currentLanguage = 'en';
    } else if (currentUrl.includes('index-ua.html')) {
        currentLanguage = 'ua';
    }

    languageSwitcher.value = currentLanguage;

    // Установка обработчика события change
    languageSwitcher.addEventListener('change', function () {
        var selectedLanguage = this.value;

        // Проверяем, не пытается ли пользователь выбрать уже текущий язык
        if (selectedLanguage !== currentLanguage) {
            if (selectedLanguage === 'ru') {
                window.location.replace('index-ru.html');  // Используем replace для более быстрой обработки
            } else if (selectedLanguage === 'pl') {
                window.location.replace('index.html');
            }
            else if (selectedLanguage === 'en') {
                window.location.replace('index-en.html');
            }
            else if (selectedLanguage === 'ua') {
                window.location.replace('index-ua.html');
            }
        }
    });
});

