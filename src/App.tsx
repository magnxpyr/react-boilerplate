import React from 'react';
import Routes from './routes';
import Header from "./shared/layout/header";
import {Container} from "reactstrap";
import {CookiesProvider} from "react-cookie";
import {IntlProvider} from "react-intl";
import translations from './i18n/locales/index';
import './App.scss';

import '@formatjs/intl-pluralrules/polyfill';
import '@formatjs/intl-pluralrules/dist/locale-data/en';

const localeProp = 'en';

export const App = () => {
  return (
    <div>
      <Header/>
      <Container>
        <CookiesProvider>
          <IntlProvider locale={localeProp} defaultLocale={localeProp} key={localeProp}
                        messages={translations[localeProp]}>
            <Routes/>
          </IntlProvider>
        </CookiesProvider>
      </Container>
    </div>
  );
}

export default App;
