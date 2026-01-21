export const useLanguage = () => {
  const route = useRoute();
  const requestURL = useRequestURL();
  
  const detectLanguage = () => {
    const hostname = requestURL.hostname;

    // Check for Japanese domain (both IDN and Punycode)
    // ハツラ.みんな converts to xn--eckq7fg8cygsa1a1je.xn--q9jyb4c
    if (hostname === 'ハツラ.みんな' || hostname === 'xn--eckq7fg8cygsa1a1je.xn--q9jyb4c') {
      return 'ja';
    }
    
    return 'en';
  };

  const currentLanguage = useState('language', () => detectLanguage());

  const getAlternateUrls = () => {
    const pathname = route.path;
    
    return {
      en: `https://hatsura.dev${pathname}`,
      ja: `https://xn--eckq7fg8cygsa1a1je.xn--q9jyb4c${pathname}`,
      default: `https://hatsura.dev${pathname}`
    };
  };

  return {
    currentLanguage,
    getAlternateUrls,
    detectLanguage
  };
};
