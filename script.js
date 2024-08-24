document.addEventListener('DOMContentLoaded', function () {
    var languageSwitcher = document.getElementById('languageSwitcher');

    if (!languageSwitcher) {
        console.error('Не найден элемент с id "languageSwitcher". Проверьте наличие этого элемента в вашем HTML.');
        return;
    }

    // Определяем текущий язык и устанавливаем соответствующее значение в select
    var currentUrl = window.location.href;
    var currentLanguage = currentUrl.includes('index-pl.html') ? 'pl' : 'ru';

    languageSwitcher.value = currentLanguage;

    // Установка обработчика события change
    languageSwitcher.addEventListener('change', function () {
        var selectedLanguage = this.value;

        // Проверяем, не пытается ли пользователь выбрать уже текущий язык
        if (selectedLanguage !== currentLanguage) {
            if (selectedLanguage === 'ru') {
                window.location.replace('index.html');  // Используем replace для более быстрой обработки
            } else if (selectedLanguage === 'pl') {
                window.location.replace('index-pl.html');
            }
        }
    });
});