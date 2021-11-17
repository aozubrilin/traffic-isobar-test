import React from 'react';
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import Header from '../header/header';
import Main from '../main/main';
import Example from '../example/example';
import {AppRoute} from '../../const';

const App = () => {
  return (
    <div className="container">
      <Router>
        <Header/>
        <Routes>
          <Route exact path={AppRoute.MAIN.url} element={<Main/>}/>
          <Route exact path={AppRoute.EXAMPLE.url} element={<Example/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
