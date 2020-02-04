import React, { Component } from 'react';
import {Link, Route, Switch} from "react-router-dom";
import Preferences from "./Preferences";
import Security from "./Security";
import Settings from "./Settings";

class Setting extends Component {
    style={

    };
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className={this.style}>
                <div className="content-body">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-3 col-md-4">
                                <div className="card settings_menu">
                                    <div className="card-header">
                                        <h4 className="card-title">Settings</h4>
                                    </div>
                                    <div className="card-body">
                                        <ul>
                                            <li className="nav-item">
                                                <Link to="/settings" className="nav-link active">
                                                    <i className="la la-user"></i>
                                                    <span>Edit Profile</span>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/settings/Preferences" className="nav-link">
                                                    <i className="la la-cog"></i>
                                                    <span>Preferences</span>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/settings/Security" className="nav-link">
                                                    <i className="la la-lock"></i>
                                                    <span>Security</span>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/settings" className="nav-link">
                                                    <i className="la la-university"></i>
                                                    <span>Linked Account</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                                <Switch>
                                    <Route exact path='/settings/Preferences' component={()=><Preferences/>} />
                                    <Route exact path='/settings/Security' component={()=><Security/>} />
                                    <Route exact path='/settings' component={()=><Settings/>} />
                                </Switch>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

Setting.propTypes = {

};

export default Setting;
