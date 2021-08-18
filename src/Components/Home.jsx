        import React, { Component } from 'react';
        import Visitors from './Visitors';
        import {  Route,  Switch } from "react-router-dom";
        import AddVisitor from './AddVisitor';
        import Sidebar from './Sidebar';
        import Navbar from './Navbar';

        class Home extends Component {

            render() {
                return (
                  <>
            <div class="container-fluid">
                  <Navbar/>  
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <Sidebar/>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                <Switch>
              <Route path="/visitors" component={Visitors}></Route>
              <Route path="/addvisitor" component={AddVisitor}></Route>
              </Switch>
              </div>
            </div>
          </>     
                    
        );
            }
        }

        export default Home;