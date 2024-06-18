/* eslint-disable import/no-extraneous-dependencies */
import { cleanup, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { afterEach } from 'vitest';
import store from '../store';

// après chaque test on clean (reset) le DOM
afterEach(() => {
  cleanup();
});

// cette fonction ajoute un provider et un browser router autour du composant rendu
// pour que le composant ai accès au store et au routeur
function customRender(ui: React.ReactElement, options = {}) {
  return render(ui, {
    wrapper: ({ children }) => (
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    ),
    ...options,
  });
}

export { screen } from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
// on remplace la fonction render par notre customRender
export { customRender as render };
