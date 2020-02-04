import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {

    }

    render() {
        let style={

        };
        return (
            <div className={style}>
                <div className="footer">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-md-6">
                                <div className="copy_right">
                                    Copyright © 2019 Exchange. All Rights Reserved.
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-6 text-lg-right text-center">
                                <div className="social">
                                    <a href="#"><i className="fa fa-youtube-play"></i></a>
                                    <a href="#"><i className="fa fa-instagram"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Footer.propTypes = {

};

export default Footer;
