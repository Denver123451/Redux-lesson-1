import React from 'react';
import { createRoot } from 'react-dom/client';

import './scss/index.scss';
import Providers from './Providers';
import Application from './Application';

createRoot(document.querySelector('.root')).render(
  <Providers>
    <Application />
  </Providers>
);
