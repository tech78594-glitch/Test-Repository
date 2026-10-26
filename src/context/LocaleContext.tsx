import React, { createContext, useContext, useState, useEffect } from 'react';

export type Locale = 'en' | 'yo' | 'fr' | 'es';

export interface LanguageOption {
  code: Locale;
  label: string;
  nativeLabel: string;
  flag: string;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'en', label: 'English', nativeLabel: 'English (UK)', flag: '🇬🇧' },
  { code: 'yo', label: 'Yoruba', nativeLabel: 'Èdè Yorùbá', flag: '🇳🇬' },
  { code: 'fr', label: 'French', nativeLabel: 'Français', flag: '🇫🇷' },
  { code: 'es', label: 'Spanish', nativeLabel: 'Español', flag: '🇪🇸' },
];

export const TRANSLATIONS: Record<Locale, Record<string, string>> = {
  en: {
    // Top Bar
    'topbar.headquarters': 'MFM Worldwide Headquarters Affiliated',
    'topbar.go': 'Dr. D.K. Olukoya, General Overseer',
    'topbar.address': '13 Bangor Road, Leith, Edinburgh EH6 5JY',

    // Navigation
    'nav.about': 'About Us',
    'nav.programmes': 'PMCH Gatherings',
    'nav.services': 'Services',
    'nav.bulletin': 'Weekly Bulletin',
    'nav.prayers': 'Daily Prayer',
    'nav.prayerWall': 'Prayer Wall',
    'nav.books': 'DKO Books',
    'nav.ministries': 'Ministries',
    'nav.sermons': 'Sermons',
    'nav.gallery': 'Gallery',
    'nav.giving': 'Giving',
    'nav.location': 'Location',
    'nav.planVisit': 'Plan a Visit',
    'nav.prayerRequest': 'Prayer Request',
    'nav.prayerAssistant': 'Prayer Assistant',

    // Live Stream Banner
    'live.serviceInProgress': 'Service in Progress',
    'live.altarLive': 'Join the Altar of Fire Live from Leith Sanctuary',
    'live.watchNow': 'Watch Live Now',

    // Hero Section
    'hero.badge': 'Welcome to Mount Zion in Edinburgh, Scotland',
    'hero.title': 'Mountain of Fire and Miracles Ministries',
    'hero.branch': 'Edinburgh Branch',
    'hero.tagline': 'A do-it-yourself deliverance ministry where prayers are answered through the fire of the Holy Ghost.',
    'hero.scripture': '“Upon Mount Zion shall be deliverance, and there shall be holiness; and the house of Jacob shall possess their possessions.” — Obadiah 1:17',
    'hero.planVisit': 'Plan Your Visit',
    'hero.submitPrayer': 'Submit Prayer Request',
    'hero.watchBroadcast': 'Watch Live Broadcast',
    'hero.countdownLabel': 'Next Service Gathering:',

    // Prayer Wall
    'wall.badge': 'Altar of Agreement & Intercession',
    'wall.title': 'Community Prayer Wall',
    'wall.subtitle': 'Stand in agreement with the brethren in Edinburgh and across Scotland. Post your prayer burden or lift up a brother or sister in prayer today.',
    'wall.network': 'Holy Ghost Prayer Network',
    'wall.offered': 'Prayers Offered on This Wall',
    'wall.postBtn': 'Post a Prayer Request',
    'wall.prayingBtn': 'I Am Praying for This',
    'wall.prayedBtn': 'Praying in Agreement!',
    'wall.allPrayers': 'All Prayers',
    'wall.category': 'Category:',

    // Common Buttons
    'common.cancel': 'Cancel',
    'common.done': 'Done',
    'common.close': 'Close',
    'common.return': 'Return to Site',
    'common.submitting': 'Submitting...',
    'common.send': 'Send Request',
  },
  yo: {
    // Top Bar
    'topbar.headquarters': 'Ẹka Ilé-iṣẹ́ MFM Àgbáyé',
    'topbar.go': 'Dokita D.K. Olukoya, Olùdarí Àgbáyé',
    'topbar.address': '13 Bangor Road, Leith, Edinburgh EH6 5JY',

    // Navigation
    'nav.about': 'Nípa Wa',
    'nav.programmes': 'Àwọn Ìpàdé PMCH',
    'nav.services': 'Àwọn Ìsìn',
    'nav.bulletin': 'Ìwé Ìròyìn Ọ̀sẹ̀',
    'nav.prayers': 'Àdúrà Oojọ́',
    'nav.prayerWall': 'Ògiri Àdúrà',
    'nav.books': 'Àwọn Ìwé DKO',
    'nav.ministries': 'Àwọn Èka Ìsìn',
    'nav.sermons': 'Àwọn Ìwàásù',
    'nav.gallery': 'Àwòrán',
    'nav.giving': 'Ìtọrẹ & Ìdámẹ́wàá',
    'nav.location': 'Ibùdó Wa',
    'nav.planVisit': 'Ṣètò Ìbẹ̀wò',
    'nav.prayerRequest': 'Ẹbẹ̀ Àdúrà',
    'nav.prayerAssistant': 'Olùrànlọ́wọ́ Àdúrà',

    // Live Stream Banner
    'live.serviceInProgress': 'Ìsìn ń lọ lọ́wọ́',
    'live.altarLive': 'Darapọ̀ mọ́ Pẹpẹ Iná Lórí Ayélujára láti Sanctuary Leith',
    'live.watchNow': 'Wo Lórí Ayélujára Nísinsìnyí',

    // Hero Section
    'hero.badge': 'Ẹ kú àbọ̀ sí Orí Òkè Síónì ní Edinburgh, Scotland',
    'hero.title': 'Mountain of Fire and Miracles Ministries',
    'hero.branch': 'Ẹka Edinburgh',
    'hero.tagline': 'Ibi ìgbàlà àti àdúrà gbígbóná nibi ti Ọlọ́run ti ń fi iná dáhùn àti ìtúsílẹ̀ pátápátá.',
    'hero.scripture': '“Ṣùgbọ́n ní orí òkè Síónì ni ìgbàlà yóò wà, ibẹ̀ yóò sì jẹ́ mímọ́; ilé Jákọ́bù yóò sì ní ogún wọn.” — Ọbadiah 1:17',
    'hero.planVisit': 'Ṣètò Ìbẹ̀wò Rẹ',
    'hero.submitPrayer': 'Fi Ẹbẹ̀ Àdúrà Ransẹ́',
    'hero.watchBroadcast': 'Wo Ìsìn Lórí Ayélujára',
    'hero.countdownLabel': 'Ìsìn Tó Kàn:',

    // Prayer Wall
    'wall.badge': 'Pẹpẹ Àdéhùn & Àdúrà Àgbàbọ̀',
    'wall.title': 'Ògiri Àdúrà Àwùjọ',
    'wall.subtitle': 'Ẹ darapọ̀ mọ́ àwọn ará ní Edinburgh láti gbàdúrà papọ̀. Fi ẹ̀bẹ̀ rẹ sílẹ̀ tàbí gbàdúrà fún ẹlòmíràn lónìí.',
    'wall.network': 'Ẹgbẹ́ Àdúrà Ẹ̀mí Mímọ́',
    'wall.offered': 'Àwọn Àdúrà tí a ti gbà lórí Ògiri Yìí',
    'wall.postBtn': 'Fi Ẹbẹ̀ Àdúrà Sílẹ̀',
    'wall.prayingBtn': 'Mo ń Gbàdúrà fún èyí',
    'wall.prayedBtn': 'Mo wà ní Àdéhùn!',
    'wall.allPrayers': 'Gbogbo Àdúrà',
    'wall.category': 'Ẹ̀ka:',

    // Common Buttons
    'common.cancel': 'Fagilé',
    'common.done': 'Ó ti parí',
    'common.close': 'Tìí',
    'common.return': 'Padà sí Ojú-ewé',
    'common.submitting': 'Ń fi ránṣẹ́...',
    'common.send': 'Fi Ẹbẹ̀ Ransẹ́',
  },
  fr: {
    // Top Bar
    'topbar.headquarters': 'Affilié au Siège Mondial de MFM',
    'topbar.go': 'Dr. D.K. Olukoya, Surveillant Général',
    'topbar.address': '13 Bangor Road, Leith, Édimbourg EH6 5JY',

    // Navigation
    'nav.about': 'À Propos',
    'nav.programmes': 'Programmes PMCH',
    'nav.services': 'Cultes',
    'nav.bulletin': 'Bulletin Hebdo',
    'nav.prayers': 'Prière Quotidienne',
    'nav.prayerWall': 'Mur de Prière',
    'nav.books': 'Livres DKO',
    'nav.ministries': 'Ministères',
    'nav.sermons': 'Prédications',
    'nav.gallery': 'Galerie',
    'nav.giving': 'Dons & Dîmes',
    'nav.location': 'Emplacement',
    'nav.planVisit': 'Préparer une Visite',
    'nav.prayerRequest': 'Requête de Prière',
    'nav.prayerAssistant': 'Assistant de Prière',

    // Live Stream Banner
    'live.serviceInProgress': 'Culte en Cours',
    'live.altarLive': 'Rejoignez l’Autel de Feu en direct du sanctuaire de Leith',
    'live.watchNow': 'Regarder en Direct',

    // Hero Section
    'hero.badge': 'Bienvenue sur la Montagne de Sion à Édimbourg, Écosse',
    'hero.title': 'Ministères de la Montagne de Feu et des Miracles',
    'hero.branch': 'Branche d’Édimbourg',
    'hero.tagline': 'Un ministère de délivrance où vos mains apprennent le combat spirituel et où Dieu répond par le feu du Saint-Esprit.',
    'hero.scripture': '« Mais sur la montagne de Sion sera la délivrance, et elle sera sainte ; et la maison de Jacob possédera ses possessions. » — Abdias 1:17',
    'hero.planVisit': 'Planifier Votre Visite',
    'hero.submitPrayer': 'Envoyer une Prière',
    'hero.watchBroadcast': 'Regarder la Transmission',
    'hero.countdownLabel': 'Prochain Culte :',

    // Prayer Wall
    'wall.badge': 'Autel d’Accord et d’Intercession',
    'wall.title': 'Mur de Prière Communautaire',
    'wall.subtitle': 'Unissez-vous dans la prière avec les frères et sœurs d’Édimbourg et de toute l’Écosse. Déposez votre requête ou intercédez pour quelqu’un aujourd’hui.',
    'wall.network': 'Réseau de Prière du Saint-Esprit',
    'wall.offered': 'Prières Offertes sur ce Mur',
    'wall.postBtn': 'Publier une Prière',
    'wall.prayingBtn': 'Je Prie Pour Cela',
    'wall.prayedBtn': 'Uni(e) dans la Prière !',
    'wall.allPrayers': 'Toutes les Prières',
    'wall.category': 'Catégorie :',

    // Common Buttons
    'common.cancel': 'Annuler',
    'common.done': 'Terminé',
    'common.close': 'Fermer',
    'common.return': 'Retour au Site',
    'common.submitting': 'Envoi en cours...',
    'common.send': 'Envoyer la Prière',
  },
  es: {
    // Top Bar
    'topbar.headquarters': 'Afiliado a la Sede Mundial de MFM',
    'topbar.go': 'Dr. D.K. Olukoya, Supervisor General',
    'topbar.address': '13 Bangor Road, Leith, Edimburgo EH6 5JY',

    // Navigation
    'nav.about': 'Sobre Nosotros',
    'nav.programmes': 'Programas PMCH',
    'nav.services': 'Servicios',
    'nav.bulletin': 'Boletín Semanal',
    'nav.prayers': 'Oración Diaria',
    'nav.prayerWall': 'Muro de Oración',
    'nav.books': 'Libros DKO',
    'nav.ministries': 'Ministerios',
    'nav.sermons': 'Sermones',
    'nav.gallery': 'Galería',
    'nav.giving': 'Donaciones',
    'nav.location': 'Ubicación',
    'nav.planVisit': 'Planear una Visita',
    'nav.prayerRequest': 'Petición de Oración',
    'nav.prayerAssistant': 'Asistente de Oración',

    // Live Stream Banner
    'live.serviceInProgress': 'Servicio en Curso',
    'live.altarLive': 'Únase al Altar de Fuego en vivo desde el santuario de Leith',
    'live.watchNow': 'Ver en Vivo Ahora',

    // Hero Section
    'hero.badge': 'Bienvenidos al Monte Sion en Edimburgo, Escocia',
    'hero.title': 'Ministerios de la Montaña de Fuego y Milagros',
    'hero.branch': 'Sede de Edimburgo',
    'hero.tagline': 'Un ministerio de liberación donde sus manos son adiestradas para la guerra espiritual y Dios responde por el fuego del Espíritu Santo.',
    'hero.scripture': '« Mas en el monte de Sion habrá salvación, y será santo; y la casa de Jacob poseerá sus posesiones. » — Abdías 1:17',
    'hero.planVisit': 'Planear Tu Visita',
    'hero.submitPrayer': 'Enviar Petición de Oración',
    'hero.watchBroadcast': 'Ver Transmisión en Vivo',
    'hero.countdownLabel': 'Próximo Servicio:',

    // Prayer Wall
    'wall.badge': 'Altar de Acuerdo e Intercesión',
    'wall.title': 'Muro Comunitario de Oración',
    'wall.subtitle': 'Únase en acuerdo de fe con los hermanos en Edimburgo y toda Escocia. Publique su petición o interceda por un hermano hoy.',
    'wall.network': 'Red de Oración del Espíritu Santo',
    'wall.offered': 'Oraciones Elevadas en Este Muro',
    'wall.postBtn': 'Publicar Petición',
    'wall.prayingBtn': 'Estoy Orando por Esto',
    'wall.prayedBtn': '¡Orando en Acuerdo!',
    'wall.allPrayers': 'Todas las Oraciones',
    'wall.category': 'Categoría:',

    // Common Buttons
    'common.cancel': 'Cancelar',
    'common.done': 'Listo',
    'common.close': 'Cerrar',
    'common.return': 'Volver al Sitio',
    'common.submitting': 'Enviando...',
    'common.send': 'Enviar Petición',
  },
};

interface LocaleContextType {
  locale: Locale;
  setLocale: (newLocale: Locale) => void;
  t: (key: string, fallback?: string) => string;
  languages: LanguageOption[];
  currentLanguage: LanguageOption;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export const LocaleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>(() => {
    try {
      const saved = localStorage.getItem('mfm_locale') as Locale;
      if (saved && (saved === 'en' || saved === 'yo' || saved === 'fr' || saved === 'es')) {
        return saved;
      }
    } catch {
      // ignore
    }
    return 'en';
  });

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem('mfm_locale', newLocale);
      document.documentElement.lang = newLocale;
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const t = (key: string, fallback?: string): string => {
    const localized = TRANSLATIONS[locale]?.[key];
    if (localized) return localized;
    const defaultVal = TRANSLATIONS.en?.[key];
    if (defaultVal) return defaultVal;
    return fallback || key;
  };

  const currentLanguage =
    SUPPORTED_LANGUAGES.find((lang) => lang.code === locale) || SUPPORTED_LANGUAGES[0];

  return (
    <LocaleContext.Provider
      value={{
        locale,
        setLocale,
        t,
        languages: SUPPORTED_LANGUAGES,
        currentLanguage,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
};
