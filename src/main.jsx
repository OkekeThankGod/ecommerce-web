import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom'; // Import HashRouter
import './index.css';
import App from './App.jsx';
import ShopContextProvider from './context/ShopContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShopContextProvider>
      <HashRouter> {/* Wrap App inside HashRouter */}
        <App />
      </HashRouter>
    </ShopContextProvider>
  </StrictMode>
);

