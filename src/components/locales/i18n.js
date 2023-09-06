import i18n from "i18next";
import {initReactI18next} from "react-i18next";

import enTranslation from "../../locales/en.json";
import ruTranslation from "../../locales/ru.json";

i18n.use(initReactI18next).init({
    resources: {
        en: {translation: enTranslation},
        ru: {translation: ruTranslation},
    },
    lng: "en", // Установите начальный язык
    fallbackLng: "en", // Язык по умолчанию, если перевод для текущего языка отсутствует
    interpolation: {
        escapeValue: false, // Разрешите использовать HTML-теги в переводах
    },
}).then(r => {
});

export default i18n;