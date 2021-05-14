import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import ScrollToTop from './layouts/ScrollToTop';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/pages/Login/Login';
import Signup from './components/pages/Signup/Signup';

import Landing from './components/pages/Landing/Landing';
import Features from './components/pages/Features/Features';
import Pricing from './components/pages/Pricing/Pricing';
import Learning from './components/pages/Features/Links/Learning/Learning';
import DataAnalytics from './components/pages/Features/Links/DataAnalytics/DataAnalytics';
import CollaborativeLearning from './components/pages/Features/Links/CollaborativeLearning/CollaborativeLearning';
import WebConferencing from './components/pages/Features/Links/WebConferencing/WebConferencing';
import FeaturesSecurity from './components/pages/Features/Links/FeaturesSecurity/FeaturesSecurity';
import MultipleDevices from './components/pages/Features/Links/MultipleDevices/MultipleDevices';

import { IntlProvider } from 'react-intl';
import { translate } from './lang/translate';

import { useSelector } from 'react-redux';
import ToTop from './components/shared/ToTop/ToTop';
import Support from './components/pages/Support/Support';
import Resources from './components/pages/Resources/Resources';
import Blog from './components/pages/Blog/Blog';
import About from './components/pages/About/About';
import Partners from './components/pages/Partners/Partners';
import Institution from './components/pages/Dashboard/Institution/Institution';

function App() {
  const language = useSelector((state) => state.language.language);

  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();

    window.scrollTo(0, 0);
  }, []);

  return (
    <Router>
      <ToTop />
      <IntlProvider
        locale={language}
        formats={{ number: 'en' }}
        messages={translate[language]}
      >
        <ScrollToTop>
          <Route exact path='/' component={Landing} />

          {/* features */}
          <Route exact path='/features' component={Features} />
          <Route path='/features/learning' component={Learning} />
          <Route path='/features/analytics' component={DataAnalytics} />
          <Route
            path='/features/collaboration'
            component={CollaborativeLearning}
          />
          <Route path='/features/conferencing' component={WebConferencing} />
          <Route path='/features/security' component={FeaturesSecurity} />
          <Route path='/features/devices' component={MultipleDevices} />

          {/* nav */}
          <Route path='/pricing' component={Pricing} />
          <Route path='/support' component={Support} />
          <Route path='/resources' component={Resources} />
          <Route path='/blog' component={Blog} />

          {/* footer link */}
          <Route path='/about' component={About} />
          <Route path='/partners' component={Partners} />

          {/* dashboard */}
          <Route path='/dashboard/institution' component={Institution} />

          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
        </ScrollToTop>
      </IntlProvider>
    </Router>
  );
}

export default App;
