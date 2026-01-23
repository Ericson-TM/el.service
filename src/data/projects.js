export const projects = [
  {
    id: 1,
    title: 'Halbmarathon Trainingsplaner',
    description: 'Universitätsprojekt: Webanwendung zur Erstellung und Verwaltung von Halbmarathon-Trainingsplänen. Nutzer können Pläne nach Zielzeit, Trainingszeitraum, Trainingstagen pro Woche und Intensitätsstufe konfigurieren.',
    technologies: ['Java', 'Spring Boot', 'Docker', 'Gradle'],
    category: 'Webentwicklung',
    icon: '🏃',
    image: '/images/project-placeholder.jpg',
    link: 'https://github.com/Ericson-TM/Webtech-SS20204'
  },
  {
    id: 2,
    title: 'Schließfach-Verwaltungsportal',
    description: 'Backend-Management-Portal zur Verwaltung von Schließfächern, Mietern und allen zugehörigen Kundendaten. Umfasst Vertrags- und Mietinformationsverwaltung mit vollständiger CRUD-Funktionalität.',
    technologies: ['PHP', 'JavaScript', 'MySQL'],
    category: 'Webentwicklung',
    icon: '🔐',
    image: '/images/project-placeholder.jpg',
    link: 'https://github.com/Ericson-TM/bl-schliessfach'
  },
  {
    id: 3,
    title: 'SPY Intraday Trading System',
    description: 'Entwicklung eines Machine-Learning-basierten Trading-Systems zur Vorhersage kurzfristiger Preisbewegungen des S&P 500 ETFs (SPY). Mit Logistic Regression und Random Forest Modellen, Backtesting-Framework und Paper-Trading über die Alpaca API.',
    technologies: ['Python', 'scikit-learn', 'pandas', 'Alpaca API'],
    category: 'Machine Learning',
    icon: '📈',
    image: '/images/project-placeholder.jpg',
    link: 'https://github.com/DarianWeingaertner/TradingProject'
  },
  {
    id: 4,
    title: 'Strategy Drift Research – AAPL',
    description: 'Forschungsprojekt zur Untersuchung, wie stark sich die Performance einer Handelsstrategie auf Apple (AAPL) zwischen Backtests und Paper-Live-Trading unterscheidet. Entwicklung einer AAPL-Strategie mit Backtesting und Vergleich der Ergebnisse (Drift: Backtest vs. Live).',
    technologies: ['Python', 'pandas', 'scikit-learn', 'Alpaca API', 'yfinance'],
    category: 'Forschung',
    icon: '🔬',
    image: '/images/project-placeholder.jpg',
    link: 'https://github.com/Ericson-TM/Strategy_Drift_Research'
  }
];
