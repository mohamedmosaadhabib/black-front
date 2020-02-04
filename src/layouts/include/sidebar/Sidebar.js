import React, { Component } from 'react';
import {Link, NavLink} from "react-router-dom";

class Sidebar extends Component {
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

                <div className="sidebar">
                    <div className="menu">
                        <ul>
                            <li>
                                <NavLink exact to="/" data-toggle="tooltip" data-placement="right" title="Home">
                                    <span><i className="la la-igloo"></i></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink exact to='/exchange' data-toggle="tooltip" data-placement="right" title="Exchange">
                                    <span><i className="la la-exchange-alt"></i></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/add/debit" data-toggle="tooltip" data-placement="right" title="AddDebit">
                                    <span><i className="la la-user"></i></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink  exact to="/settings" data-toggle="tooltip" data-placement="right" title="AddDebit">
                                    <span><i className="la la-tools"></i></span>
                                </NavLink >
                            </li>
                        </ul>
                    </div>
                </div>


            </div>
        );
    }
}

Sidebar.propTypes = {

};

export default Sidebar;
