import i18next from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const i18nPromise = i18next
    .use(Backend)
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

export { i18nPromise };
export default i18next;
