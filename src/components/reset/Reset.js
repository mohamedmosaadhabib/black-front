import React, { Component } from 'react';

class Reset extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>

                <div className="authincation section-padding">
                    <div className="container h-100">
                        <div className="row justify-content-center h-100 align-items-center">
                            <div className="col-xl-5 col-md-6">
                                <div className="mini-logo text-center my-5">
                                    <img src="images/m_logo.png" alt=""/>
                                </div>
                                <div className="auth-form card">
                                    <div className="card-header justify-content-center">
                                        <h4 className="card-title">Reset password</h4>
                                    </div>
                                    <div className="card-body">
                                        <form action="https://quixlab.com/demo/elaenia/signin.html">
                                            <div className="form-group">
                                                <label>Email</label>
                                                <input type="email" className="form-control" value="hello@example.com"/>
                                            </div>
                                            <div className="text-center">
                                                <button type="submit" className="btn btn-success btn-block">Reset
                                                </button>
                                            </div>
                                        </form>
                                        <div className="new-account mt-3">
                                            <p className="mb-1">Don't Received? </p>
                                            <a className="text-primary" href="reset.html">Resend </a>
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

Reset.propTypes = {

};

export default Reset;
