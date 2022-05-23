import i18n from 'i18n-js';
import ca from '../localisation/ca.json';
import es from '../localisation/es.json';

i18n.defaultLocale = 'ca';
i18n.locale = 'ca';
i18n.fallbacks = true;
i18n.translations = { ca, es };

export default i18n;