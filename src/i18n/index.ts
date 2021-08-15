import i18n from 'i18n-js';
import {en} from './translations';

i18n.fallbacks = true;
i18n.locale = 'en'; // it would change when more than two languages ara available
i18n.translations = {en};

export default i18n;
