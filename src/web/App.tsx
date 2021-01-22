import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import Home from './routes/Home';
import store from './store/app.store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
