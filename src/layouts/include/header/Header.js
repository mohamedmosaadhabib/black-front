import React, { Component } from 'react';
import {Link, NavLink} from "react-router-dom";

class Header extends Component {
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

                <div className="header">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-12">
                                <nav className="navbar navbar-expand-lg navbar-light px-0 justify-content-between">
                                    <NavLink className="navbar-brand" to="/">
                                        <img src="/images/w_logo.png" alt=""/>
                                        <span>Exchange</span>
                                    </NavLink>


                                    <div className="dashboard_log my-2">
                                        <div className="d-flex align-items-center">
                                            <div className="account_money">
                                                <ul>
                                                    <li className="crypto">
                                                        <span>0.0025</span>
                                                        <i className="cc BTC-alt"></i>
                                                    </li>
                                                    <li className="usd">
                                                        <span>19.93 USD</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="profile_log dropdown">
                                                <div className="user" data-toggle="dropdown">
                                                    <span className="thumb"><i className="la la-user"></i></span>
                                                    <span className="name">Maria Pascle</span>
                                                    <span className="arrow"><i className="la la-angle-down"></i></span>
                                                </div>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <NavLink to="/accounts" className="dropdown-item">
                                                        <i className="la la-user"></i> Account
                                                    </NavLink>
                                                    <NavLink  to="/Transaction" className="dropdown-item">
                                                        <i className="la la-book"></i> History
                                                    </NavLink>
                                                    <NavLink  to="/settings" className="dropdown-item">
                                                        <i className="la la-cog"></i> Setting
                                                    </NavLink>
                                                    <NavLink  to="/lock" className="dropdown-item">
                                                        <i className="la la-lock"></i> Lock
                                                    </NavLink>
                                                    <NavLink  to="/login" className="dropdown-item logout">
                                                        <i className="la la-sign-out"></i> Logout
                                                    </NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

Header.propTypes = {

};

export default Header;
