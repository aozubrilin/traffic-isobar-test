import React from 'react';
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import Header from '../header/header';
import Main from '../main/main';
import Example from '../example/example';
import {AppRoute} from '../../const';
import Footer from '../footer/footer';

const App = () => {
  return (
      <Router basename="/traffic-isobar-test">
        <Header/>
        <Routes>
          <Route exact path={AppRoute.MAIN.url} element={<Main/>}/>
          <Route exact path={AppRoute.EXAMPLE.url} element={<Example/>}/>
        </Routes>
        <Footer/>
      </Router>
  );
};

export default App;
