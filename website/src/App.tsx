import * as React from 'react';
import './App.css';

import {BrowserRouter, Route, Switch} from "react-router-dom";

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import {RouteComponentProps} from "react-router";


class App extends React.Component {
  public render() {
    return ([
        <BrowserRouter>
            <Switch>
                {/*<Route path="/table/:tableName" component={(route: RouteComponentProps<{tableName: string}>) => <PlayView route={route} player={this.state.player!}/>}/>*/}
                {/*<Route path="/table" component={(route: RouteComponentProps) => <TableScreen player={this.state.player!} route={route}/>}/>*/}
                <Route exact path={["/", "/home", "/index"]} component={(route: RouteComponentProps) => <Home route={route} />} />
                <Route component={(route: RouteComponentProps) => <NotFound route={route} />}/>
            </Switch>
        </BrowserRouter>,
    ]);
  }
}

export default App;
