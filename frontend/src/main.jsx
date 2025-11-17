import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import { router } from './routes';
import { AuthProvider } from './context/AuthContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <Suspense fallback={<div className="p-8 text-center text-gray-500">Cargando…</div>}>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </Suspense>
    </HelmetProvider>
  </StrictMode>,
);
