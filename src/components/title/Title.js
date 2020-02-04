import React, { Component } from 'react';
import {style} from './index.scss';

class Title extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className={style}>
                <div className="page_title">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="page_title-content">
                                    <p>Welcome Back,
                                        <span> Username</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

Title.propTypes = {

};

export default Title;
