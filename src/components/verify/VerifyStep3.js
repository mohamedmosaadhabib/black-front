import React, { Component } from 'react';

class VerifyStep3 extends Component {
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

                <div className="verification section-padding">
                    <div className="container h-100">
                        <div className="row justify-content-center h-100 align-items-center">
                            <div className="col-xl-7">
                                <div className="auth-form card">
                                    <div className="card-header">
                                        <h4 className="card-title">Add New Account</h4>
                                    </div>
                                    <div className="card-body py-0">
                                        <div className="add-bank-card">
                                            <div className="row my-4">
                                                <div className="col-md-6">
                                                    <a href="add-bank-acc.html" className="d-block">
                                                        <div className="media">
                                                            <span className="mr-3"><i className="fa fa-bank"></i></span>
                                                            <div className="media-body">
                                                                <h4 className="mt-0 mb-3">Bank account</h4>
                                                                <p>Use bank account to make purchase and sells. Prices
                                                                    are
                                                                    locked today. Trades may take 4-5 days to
                                                                    process</p>
                                                                <p className="text-muted">Recommended for invest large
                                                                    amount</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="col-md-6">
                                                    <a href="add-debit-card.html" className="d-block">
                                                        <div className="media">
                                                            <span className="mr-3"><i className="fa fa-credit-card"></i></span>
                                                            <div className="media-body">
                                                                <h4 className="mt-0 mb-3">Debit card</h4>
                                                                <p>Use any visa or mastercard debit card to make small
                                                                    investment. Add a bank or wallet to sell</p>
                                                                <p className="text-muted">Recommended for invest small
                                                                    amount</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
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

VerifyStep3.propTypes = {

};

export default VerifyStep3;
