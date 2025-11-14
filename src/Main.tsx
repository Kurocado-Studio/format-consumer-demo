import { MotionProvider } from '@kurocado-studio/systemhaus-motion-react';
import {
  FullScreenLoader,
  ThemeProvider,
} from '@kurocado-studio/systemhaus-react';
import React from 'react';
import ReactDOM from 'react-dom/client';

import '../tailwind.css';
import { Demo } from './Demo';
import {
  KUROCADO_STUDIO_DEFAULT_THEME_ID,
  KUROCADO_STUDIO_ORGANIZATION_ID_SYSTEMHAUS,
} from './config/constants';

const rootElement = document.querySelector('#root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <ThemeProvider
        LoaderComponent={FullScreenLoader}
        progressOptions={{
          minimumDelay: 150,
        }}
        organizationId={KUROCADO_STUDIO_ORGANIZATION_ID_SYSTEMHAUS}
        themeId={KUROCADO_STUDIO_DEFAULT_THEME_ID}
      >
        <MotionProvider>
          <main className='h-screen w-screen space-y-2 overflow-y-auto bg-gray-100 py-8'>
            <Demo />
          </main>
        </MotionProvider>
      </ThemeProvider>
    </React.StrictMode>,
  );
}
