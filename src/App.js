import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Header from "./components/header/header";
import store from "./store";
import { BrowserRouter as Router, Route } from "react-router-dom"; // 在React中使用路由功能
import Home from "./components/home";
import Detail from "./components/detail";
import Login from "./components/login";
import Write from "./components/write";

class App extends Component{
  render() {
    return(
        <Provider store={store}>
          <div>
              <Router>
                  <Header />
                  <div>
                      <Route exact path="/" component={Home} />
                      <Route exact path="/detail" component={Detail} />
                      <Route exact path="/login" component={Login} />
                      <Route exact path="/write" component={Write} />
                  </div>
              </Router>
          </div>
        </Provider>
    )
  }
}

export default App;