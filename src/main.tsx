import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import App from './App.tsx';
import { LocaleProvider } from './context/LocaleContext';
import './index.css';

// On GitHub Pages the site lives under /<repo-name>/, so routes are relative to that.
const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename={basename}>
    <LocaleProvider>
      <App />
    </LocaleProvider>
  </BrowserRouter>
);
