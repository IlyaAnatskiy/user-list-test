import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage';
import UsersPage from './pages/UsersPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/" component={UsersPage} exact />
            <Route path="/about" component={AboutPage} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
