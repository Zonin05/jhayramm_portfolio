// Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');

// Check if dark mode was previously enabled
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    themeToggle.textContent = '☾'; // Dark mode icon
}

// Toggle dark mode on click
themeToggle.addEventListener('click', () => {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    themeToggle.textContent = isDarkMode ? '☾' : '☀'; // Change icon

    // Save the theme preference to localStorage
    localStorage.setItem('darkMode', isDarkMode);
});


// Hamburger menu toggle
const hamburgerBtn = document.getElementById('hamburger-btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

hamburgerBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
});

// Close sidebar when overlay is clicked
overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
});

// Language dropdown toggle
const earthIcon = document.getElementById('earth-icon');

// Create dropdown menu dynamically
const languageDropdown = document.createElement('div');
languageDropdown.classList.add('dropdown');
earthIcon.appendChild(languageDropdown);

// Add language options
const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' },
    { code: 'zh', name: '中文' },
    { code: 'ja', name: '日本語' },
    { code: 'ko', name: '한국어' },
    { code: 'it', name: 'Italiano' },
    { code: 'pt', name: 'Português' },
    { code: 'ru', name: 'Русский' },
    { code: 'ar', name: 'العربية' },
    { code: 'hi', name: 'हिन्दी' },
    { code: 'bn', name: 'বাংলা' },
    { code: 'pl', name: 'Polski' },
    { code: 'nl', name: 'Nederlands' },
    { code: 'el', name: 'Ελληνικά' },
    { code: 'sv', name: 'Svenska' },
    { code: 'no', name: 'Norsk' },
    { code: 'da', name: 'Dansk' }
];

languages.forEach(language => {
    const languageOption = document.createElement('a');
    languageOption.classList.add('language-option');
    languageOption.setAttribute('data-lang', language.code);
    languageOption.textContent = language.name;
    languageDropdown.appendChild(languageOption);
});

// Toggle dropdown visibility
earthIcon.addEventListener('click', () => {
    languageDropdown.style.display = languageDropdown.style.display === 'block' ? 'none' : 'block';
});

// Language selection
const languageOptions = document.querySelectorAll('.language-option');
languageOptions.forEach(option => {
    option.addEventListener('click', (e) => {
        languageOptions.forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');

        // Save selected language to localStorage
        const selectedLanguage = option.getAttribute('data-lang');
        localStorage.setItem('selectedLanguage', selectedLanguage);

        // Update language content based on selection
        updateLanguageContent(selectedLanguage);

        // Close dropdown
        languageDropdown.style.display = 'none';
    });
});

// Function to update content based on selected language
function updateLanguageContent(language) {
    Object.keys(translations[language]).forEach(key => {
        const elements = document.querySelectorAll(`[data-lang-text="${key}"]`);
        elements.forEach(element => {
            element.textContent = translations[language][key];
        });
    });
}

// Ensure the tick stays on the selected language after page reload
window.addEventListener('load', () => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
        const selectedOption = document.querySelector(`[data-lang="${savedLanguage}"]`);
        if (selectedOption) {
            selectedOption.classList.add('selected');
            updateLanguageContent(savedLanguage);
        }
    }
});

const profilePic = document.getElementById('profile-pic');

profilePic.addEventListener('click', () => {
    profilePic.classList.toggle('expanded');
});

