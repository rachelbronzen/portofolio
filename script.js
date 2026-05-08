let currentLanguage = localStorage.getItem('language') || 'en';

document.addEventListener('DOMContentLoaded', function() {
    setLanguage(currentLanguage);
    updateLanguageSwitcher();
    
    const switcher = document.getElementById('language-switcher');
    if (switcher) {
        switcher.addEventListener('click', function(e) {
            e.preventDefault();
            const dropdown = document.querySelector('.language-dropdown');
            dropdown.classList.toggle('open');
        });
    }
    
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(item => {
        item.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
            document.querySelector('.language-dropdown').classList.remove('open');
        });
    });

    document.addEventListener('click', function(e) {
        const dropdown = document.querySelector('.language-dropdown');
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove('open');
        }
    });
});

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    updateContent();
    updateLanguageSwitcher();
}

function updateContent() {
    const t = translations[currentLanguage];
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (t[key]) {
            element.textContent = t[key];
        }
    });
    
    document.querySelectorAll('[data-i18n-html]').forEach(element => {
        const key = element.getAttribute('data-i18n-html');
        if (t[key]) {
            element.innerHTML = t[key];
        }
    });
}

function updateLanguageSwitcher() {
    const switcher = document.getElementById('language-switcher');
    if (switcher) {
        const buttonText = currentLanguage === 'en' ? 'Language' : 'Bahasa';
        switcher.textContent = buttonText;
        switcher.classList.remove('active-en', 'active-id');
        switcher.classList.add(currentLanguage === 'en' ? 'active-en' : 'active-id');
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
