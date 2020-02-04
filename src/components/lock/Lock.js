import React, { Component } from 'react';
import {style} from './index.scss';

class Lock extends Component {
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

                <div className="authincation section-padding">
                    <div className="container h-100">
                        <div className="row justify-content-center h-100 align-items-center">
                            <div className="col-xl-5 col-md-6">
                                <div className="mini-logo text-center my-5">
                                    <img src="images/m_logo.png" alt=""/>
                                </div>
                                <div className="auth-form card">
                                    <div className="card-header justify-content-center">
                                        <h4 className="card-title">Locked</h4>
                                    </div>
                                    <div className="card-body">
                                        <form action="https://quixlab.com/demo/elaenia/index.html">
                                            <div className="form-group mb-4">
                                                <label htmlFor="">Enter Password</label>
                                                <input type="password" className="form-control bg-transparent rounded-0"
                                                       placeholder="Password"/>
                                            </div>
                                            <button className="btn-success btn-block btn-lg border-0"
                                                    type="submit">Unlock
                                            </button>
                                        </form>
                                        <div className="new-account text-center mt-3">
                                            <a className="text-primary" href="reset.html">
                                                <h5>Not Maria Pascle?</h5>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

Lock.propTypes = {

};

export default Lock;
