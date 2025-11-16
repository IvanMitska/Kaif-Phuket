import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// CRITICAL OPTIMIZATION: Only load absolutely essential CSS immediately
import './styles/critical.css';

// DEFER: Load App component with all dependencies
const loadApp = async () => {
  // Load non-critical styles asynchronously
  await Promise.all([
    import('./index.css'),
    import('./assets/fonts/fonts.css'),
    import('./styles/global-theme.css')
  ]);

  // Load i18n configuration asynchronously
  await import('./i18n.js');

  // Load App component
  const { default: App } = await import('./App.jsx');

  return App;
};

// PRODUCTION: Disable console and devtools
if (import.meta.env.PROD) {
  console.log = console.warn = console.info = () => {};
}

// DEFER: Service Worker registration (non-critical)
if ('serviceWorker' in navigator) {
  setTimeout(() => {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  }, 3000); // Register after 3 seconds
}

// Initialize app
const root = createRoot(document.getElementById('root'));

// Show loading state immediately
root.render(
  <div className="app-loading">
    <div className="loader"></div>
  </div>
);

// Load and render app asynchronously
loadApp().then(App => {
  root.render(
    import.meta.env.PROD ? (
      <App />
    ) : (
      <StrictMode>
        <App />
      </StrictMode>
    )
  );
}).catch(error => {
  console.error('Failed to load app:', error);
  root.render(<div style={{color:'#fff',padding:'20px',textAlign:'center'}}>Failed to load application</div>);
});
