import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import Home from './routes/Home';
import store from './store/app.store';
import Footer from './components/Footer';
import Login from './routes/Login';
import PrivateRoute from './components/PrivateRoute';
import Journal from './routes/Journal';
import AuthProvider from './components/providers/AuthProvider';
import Register from './routes/Register';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <PrivateRoute path="/journal" component={Journal} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/" component={Home} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  );
};

export default App;
