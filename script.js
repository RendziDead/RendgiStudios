document.addEventListener('DOMContentLoaded', function () {
    var languageSwitcher = document.getElementById('languageSwitcher');

    if (!languageSwitcher) {
        console.error('�� ������ ������� � id "languageSwitcher". ��������� ������� ����� �������� � ����� HTML.');
        return;
    }

    // ���������� ������� ���� � ������������� ��������������� �������� � select
    var currentUrl = window.location.href;
    var currentLanguage = currentUrl.includes('index-pl.html') ? 'pl' : 'ru';

    languageSwitcher.value = currentLanguage;

    // ��������� ����������� ������� change
    languageSwitcher.addEventListener('change', function () {
        var selectedLanguage = this.value;

        // ���������, �� �������� �� ������������ ������� ��� ������� ����
        if (selectedLanguage !== currentLanguage) {
            if (selectedLanguage === 'ru') {
                window.location.replace('index.html');  // ���������� replace ��� ����� ������� ���������
            } else if (selectedLanguage === 'pl') {
                window.location.replace('index-pl.html');
            }
        }
    });
});