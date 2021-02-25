import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en/en';

i18n.use(initReactI18next).init({
	resources: {
		en
	},
	lng: navigator.language,
	fallbackLng: 'en',

	interpolation: {
		escapeValue: false
	}
});

export default i18n;
export { useTranslation } from 'react-i18next';
