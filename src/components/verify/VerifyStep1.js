import React, { Component } from 'react';

class VerifyStep1 extends Component {
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

                <div className="verification section-padding">
                    <div className="container h-100">
                        <div className="row justify-content-center h-100 align-items-center">
                            <div className="col-xl-5 col-md-6">
                                <div className="auth-form card">
                                    <div class="card-header">
                                        <h4 class="card-title">Link a Debit card</h4>
                                    </div>
                                    <div className="card-body">
                                        <form action="https://quixlab.com/demo/elaenia/verify-step-2.html"
                                              className="identity-upload">
                                            <div className="identity-content">
                                                <span className="icon"><i className="fa fa-shield"></i></span>
                                                <h4>Please verify your identity before adding your card</h4>
                                                <p>Uploading your ID helps as ensure the safety and security of your
                                                    founds</p>
                                            </div>

                                            <div className="text-center">
                                                <button type="submit" className="btn btn-success pl-5 pr-5">Upload ID
                                                </button>
                                            </div>
                                        </form>
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

VerifyStep1.propTypes = {

};

export default VerifyStep1;
