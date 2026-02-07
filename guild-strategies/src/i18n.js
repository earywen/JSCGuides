import i18next from 'i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
    .use(HttpBackend)
    .use(LanguageDetector)
    .init({
        fallbackLng: 'fr',
        debug: true,
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
        detection: {
            order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
            caches: ['localStorage', 'cookie'],
        },
        interpolation: {
            escapeValue: false, // not needed for vanilla js generally, but safe
        }
    });

export default i18next;
