import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import Home from './Home';

class Index extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Home/>
                        

                
                        {/* <Switch>
                            <Route>

                            </Route>
                        </Switch> */}
                    </div>
                </Router>
            </div>
        );
    }
}

export default Index;