import React, { createContext, useContext, useState, useEffect } from 'react';
import { LanguageContextType } from '../types';

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.explore': 'Explore',
    'nav.submit': 'Submit',
    'nav.dashboard': 'Dashboard',
    'nav.pricing': 'Pricing',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.login': 'Login',
    'nav.signup': 'Sign Up',
    'nav.logout': 'Logout',
    'hero.title': 'Connect Films with Festivals Worldwide',
    'hero.subtitle': 'The ultimate platform for filmmakers to submit to festivals and for festivals to discover amazing films.',
    'hero.cta': 'Get Started',
    'hero.explore': 'Explore Festivals',
    'features.submit.title': 'Submit Your Films',
    'features.submit.desc': 'Easy submission process to festivals worldwide',
    'features.discover.title': 'Discover Festivals',
    'features.discover.desc': 'Find the perfect festivals for your films',
    'features.track.title': 'Track Submissions',
    'features.track.desc': 'Monitor your submissions and results',
    'footer.about': 'About FilmFreeway',
    'footer.contact': 'Contact Us',
    'footer.terms': 'Terms of Service',
    'footer.privacy': 'Privacy Policy',
    'footer.cookies': 'Cookie Policy'
  },
  zh: {
    'nav.home': '首页',
    'nav.explore': '探索',
    'nav.submit': '提交',
    'nav.dashboard': '仪表板',
    'nav.pricing': '定价',
    'nav.about': '关于',
    'nav.contact': '联系',
    'nav.login': '登录',
    'nav.signup': '注册',
    'nav.logout': '退出',
    'hero.title': '连接全球电影与电影节',
    'hero.subtitle': '电影制作人向电影节提交作品，电影节发现优秀电影的终极平台。',
    'hero.cta': '开始使用',
    'hero.explore': '探索电影节',
    'features.submit.title': '提交您的电影',
    'features.submit.desc': '简单的全球电影节提交流程',
    'features.discover.title': '发现电影节',
    'features.discover.desc': '为您的电影找到完美的电影节',
    'features.track.title': '跟踪提交',
    'features.track.desc': '监控您的提交和结果',
    'footer.about': '关于FilmFreeway',
    'footer.contact': '联系我们',
    'footer.terms': '服务条款',
    'footer.privacy': '隐私政策',
    'footer.cookies': 'Cookie政策'
  },
  ja: {
    'nav.home': 'ホーム',
    'nav.explore': '探索',
    'nav.submit': '提出',
    'nav.dashboard': 'ダッシュボード',
    'nav.pricing': '価格',
    'nav.about': '約',
    'nav.contact': '連絡先',
    'nav.login': 'ログイン',
    'nav.signup': 'サインアップ',
    'nav.logout': 'ログアウト',
    'hero.title': '世界中の映画と映画祭をつなぐ',
    'hero.subtitle': '映画制作者が映画祭に提出し、映画祭が素晴らしい映画を発見するための究極のプラットフォーム。',
    'hero.cta': '始める',
    'hero.explore': '映画祭を探索',
    'features.submit.title': '映画を提出',
    'features.submit.desc': '世界中の映画祭への簡単な提出プロセス',
    'features.discover.title': '映画祭を発見',
    'features.discover.desc': 'あなたの映画に最適な映画祭を見つける',
    'features.track.title': '提出を追跡',
    'features.track.desc': '提出と結果を監視する',
    'footer.about': 'FilmFreewayについて',
    'footer.contact': 'お問い合わせ',
    'footer.terms': '利用規約',
    'footer.privacy': 'プライバシーポリシー',
    'footer.cookies': 'クッキーポリシー'
  },
  es: {
    'nav.home': 'Inicio',
    'nav.explore': 'Explorar',
    'nav.submit': 'Enviar',
    'nav.dashboard': 'Panel',
    'nav.pricing': 'Precios',
    'nav.about': 'Acerca de',
    'nav.contact': 'Contacto',
    'nav.login': 'Iniciar sesión',
    'nav.signup': 'Registrarse',
    'nav.logout': 'Cerrar sesión',
    'hero.title': 'Conecta Películas con Festivales Mundialmente',
    'hero.subtitle': 'La plataforma definitiva para que los cineastas envíen a festivales y los festivales descubran películas increíbles.',
    'hero.cta': 'Comenzar',
    'hero.explore': 'Explorar Festivales',
    'features.submit.title': 'Envía tus Películas',
    'features.submit.desc': 'Proceso de envío fácil a festivales mundiales',
    'features.discover.title': 'Descubre Festivales',
    'features.discover.desc': 'Encuentra los festivales perfectos para tus películas',
    'features.track.title': 'Rastrea Envíos',
    'features.track.desc': 'Monitorea tus envíos y resultados',
    'footer.about': 'Acerca de FilmFreeway',
    'footer.contact': 'Contáctanos',
    'footer.terms': 'Términos de Servicio',
    'footer.privacy': 'Política de Privacidad',
    'footer.cookies': 'Política de Cookies'
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.explore': 'Explorer',
    'nav.submit': 'Soumettre',
    'nav.dashboard': 'Tableau de bord',
    'nav.pricing': 'Tarifs',
    'nav.about': 'À propos',
    'nav.contact': 'Contact',
    'nav.login': 'Connexion',
    'nav.signup': 'S\'inscrire',
    'nav.logout': 'Déconnexion',
    'hero.title': 'Connectez les Films avec les Festivals Mondiaux',
    'hero.subtitle': 'La plateforme ultime pour que les cinéastes soumettent aux festivals et que les festivals découvrent des films incroyables.',
    'hero.cta': 'Commencer',
    'hero.explore': 'Explorer les Festivals',
    'features.submit.title': 'Soumettez vos Films',
    'features.submit.desc': 'Processus de soumission facile aux festivals mondiaux',
    'features.discover.title': 'Découvrez les Festivals',
    'features.discover.desc': 'Trouvez les festivals parfaits pour vos films',
    'features.track.title': 'Suivez les Soumissions',
    'features.track.desc': 'Surveillez vos soumissions et résultats',
    'footer.about': 'À propos de FilmFreeway',
    'footer.contact': 'Nous contacter',
    'footer.terms': 'Conditions de service',
    'footer.privacy': 'Politique de confidentialité',
    'footer.cookies': 'Politique des cookies'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: string) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string) => {
    return translations[language as keyof typeof translations]?.[key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{
      language,
      setLanguage: handleSetLanguage,
      t
    }}>
      {children}
    </LanguageContext.Provider>
  );
};