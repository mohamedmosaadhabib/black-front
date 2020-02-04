import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Request extends Component {
    style={};
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

                <div className="content-body" style={{marginTop:'3.5rem'}}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-5 col-lg-5 col-md-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="buy-sell-widget">
                                            <ul className="nav nav-tabs">
                                                <li className="nav-item"><a className="nav-link active"
                                                                            data-toggle="tab"
                                                                            href="#buy">Buy</a>
                                                </li>
                                                <li className="nav-item"><a className="nav-link" data-toggle="tab"
                                                                            href="#sell">Sell</a>
                                                </li>
                                            </ul>
                                            <div className="tab-content tab-content-default">
                                                <div className="tab-pane fade show active" id="buy" role="tabpanel">
                                                    <form method="post" name="myform" className="currency_validate">
                                                        <div className="form-group">
                                                            <label className="mr-sm-2">Currency</label>
                                                            <div className="input-group mb-3">
                                                                <div className="input-group-prepend">
                                                                    <label className="input-group-text"><i
                                                                        className="cc BTC-alt"></i></label>
                                                                </div>
                                                                <select name='currency' className="form-control">
                                                                    <option value="">Select</option>
                                                                    <option value="bitcoin">Bitcoin</option>
                                                                    <option value="litecoin">Litecoin</option>
                                                                </select>
                                                            </div>
                                                        </div>

                                                        <div className="form-group">
                                                            <label className="mr-sm-2">Payment Method</label>
                                                            <div className="input-group mb-3">
                                                                <div className="input-group-prepend">
                                                                    <label className="input-group-text"><i
                                                                        className="fa fa-bank"></i></label>
                                                                </div>
                                                                <select className="form-control" name="method">
                                                                    <option value="">Select</option>
                                                                    <option value="bank">Bank of America ********45845
                                                                    </option>
                                                                    <option value="master">Master Card ***********5458
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>

                                                        <div className="form-group">
                                                            <label className="mr-sm-2">Enter your amount</label>
                                                            <div className="input-group">
                                                                <input type="text" name="currency_amount"
                                                                       className="form-control"
                                                                       placeholder="0.0214 BTC"/>
                                                                    <input type="text" name="usd_amount"
                                                                           className="form-control"
                                                                           placeholder="125.00 USD"/>
                                                            </div>
                                                            <div className="d-flex justify-content-between mt-3">
                                                                <p className="mb-0">Monthly Limit</p>
                                                                <h6 className="mb-0">$49750 remaining</h6>
                                                            </div>
                                                        </div>
                                                        <button type="submit" name="submit"
                                                                className="btn btn-success btn-block">Exchange
                                                            Now
                                                        </button>

                                                    </form>
                                                </div>
                                                <div className="tab-pane fade" id="sell">
                                                    <form method="post" name="myform" className="currency2_validate">
                                                        <div className="form-group">
                                                            <label className="mr-sm-2">Currency</label>
                                                            <div className="input-group mb-3">
                                                                <div className="input-group-prepend">
                                                                    <label className="input-group-text"><i
                                                                        className="cc BTC-alt"></i></label>
                                                                </div>
                                                                <select name='currency' className="form-control">
                                                                    <option value="">Select</option>
                                                                    <option value="bitcoin">Bitcoin</option>
                                                                    <option value="litecoin">Litecoin</option>
                                                                </select>
                                                            </div>
                                                        </div>

                                                        <div className="form-group">
                                                            <label className="mr-sm-2">Payment Method</label>
                                                            <div className="input-group mb-3">
                                                                <div className="input-group-prepend">
                                                                    <label className="input-group-text"><i
                                                                        className="fa fa-bank"></i></label>
                                                                </div>
                                                                <select className="form-control" name="method">
                                                                    <option value="">Select</option>
                                                                    <option value="bank">Bank of America ********45845
                                                                    </option>
                                                                    <option value="master">Master Card ***********5458
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>

                                                        <div className="form-group">
                                                            <label className="mr-sm-2">Enter your amount</label>
                                                            <div className="input-group">
                                                                <input type="text" name="currency_amount"
                                                                       className="form-control"
                                                                       placeholder="0.0214 BTC"/>
                                                                    <input type="text" name="usd_amount"
                                                                           className="form-control"
                                                                           placeholder="125.00 USD"/>
                                                            </div>
                                                            <div className="d-flex justify-content-between mt-3">
                                                                <p className="mb-0">Monthly Limit</p>
                                                                <h6 className="mb-0">$49750 remaining</h6>
                                                            </div>
                                                        </div>
                                                        <button type="submit" name="submit"
                                                                className="btn btn-success btn-block">Exchange
                                                            Now
                                                        </button>

                                                    </form>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <p className="p-4">Note: Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                                    cupiditate suscipit explicabo voluptas eos in tenetur error temporibus dolorum.
                                    Nulla!</p>
                            </div>
                            <div className="col-xl-7 col-lg-7 col-md-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="buyer-seller">
                                            <div className="d-flex justify-content-between mb-3">
                                                <div className="buyer-info">
                                                    <div className="media">
                                                        <img className="mr-3" src="images/profile/2.png" alt=""
                                                             width="50"/>
                                                            <div className="media-body">
                                                                <h4>Buyer</h4>
                                                                <h5>Michael John</h5>
                                                                <a href="#">hello@example.com</a>
                                                            </div>
                                                    </div>
                                                </div>
                                                <div className="seller-info text-right">
                                                    <div className="media">
                                                        <div className="media-body">
                                                            <h4>Seller</h4>
                                                            <h5>John Doe</h5>
                                                            <a href="#">hello@example.com</a>
                                                        </div>
                                                        <img className="ml-3" src="images/profile/1.png" alt=""
                                                             width="50"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="table-responsive">
                                                <table className="table">
                                                    <tbody>
                                                    <tr>
                                                        <td><span className="text-primary">You are selling</span></td>
                                                        <td><span className="text-primary">0.00254 BTC</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Payment Method</td>
                                                        <td>Bank of America Bank ***********5245</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Exchange Rate</td>
                                                        <td>0.00212455 BTC</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Fee</td>
                                                        <td>$28.00 USD</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Total</td>
                                                        <td>$854.00 USD</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Vat</td>
                                                        <td>
                                                            <div className="text-danger">$25.00 USD</div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td> Sub Total</td>
                                                        <td> $1232.00 USD</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-6 col-xxl-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">FAQ</h4>
                                    </div>
                                    <div className="card-body">
                                        <div id="accordion-faq" className="accordion">
                                            <div className="card">
                                                <div className="card-header">
                                                    <h5 className="mb-0 collapsed c-pointer" data-toggle="collapse"
                                                        data-target="#collapseOne1" aria-expanded="false"
                                                        aria-controls="collapseOne1"><i className="fa"
                                                                                        aria-hidden="true"></i>What
                                                        Shipping Methods are Available?</h5>
                                                </div>
                                                <div id="collapseOne1" className="collapse show"
                                                     data-parent="#accordion-faq">
                                                    <div className="card-body">Anim pariatur cliche reprehenderit, enim
                                                        eiusmod high
                                                        life accusamus terry richardson ad squid. 3 wolf moon officia
                                                        aute, non
                                                        cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                                                        laborum
                                                        eiusmod.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-header">
                                                    <h5 className="mb-0 collapsed c-pointer" data-toggle="collapse"
                                                        data-target="#collapseTwo2" aria-expanded="false"
                                                        aria-controls="collapseTwo2"><i className="fa"
                                                                                        aria-hidden="true"></i>How
                                                        Long Will it Take To Get My Package?</h5>
                                                </div>
                                                <div id="collapseTwo2" className="collapse"
                                                     data-parent="#accordion-faq">
                                                    <div className="card-body">Anim pariatur cliche reprehenderit, enim
                                                        eiusmod high
                                                        life accusamus terry richardson ad squid. 3 wolf moon officia
                                                        aute, non
                                                        cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                                                        laborum
                                                        eiusmod.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-header">
                                                    <h5 className="mb-0 collapsed c-pointer" data-toggle="collapse"
                                                        data-target="#collapseThree3" aria-expanded="false"
                                                        aria-controls="collapseThree3"><i className="fa"
                                                                                          aria-hidden="true"></i>How
                                                        Do I Track My Order?</h5>
                                                </div>
                                                <div id="collapseThree3" className="collapse"
                                                     data-parent="#accordion-faq">
                                                    <div className="card-body">Anim pariatur cliche reprehenderit, enim
                                                        eiusmod high
                                                        life accusamus terry richardson ad squid. 3 wolf moon officia
                                                        aute, non
                                                        cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                                                        laborum
                                                        eiusmod.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-header">
                                                    <h5 className="mb-0 collapsed c-pointer" data-toggle="collapse"
                                                        data-target="#collapseThree4" aria-expanded="false"
                                                        aria-controls="collapseThree4"><i className="fa"
                                                                                          aria-hidden="true"></i>Do I
                                                        Need A Account To Place Order?</h5>
                                                </div>
                                                <div id="collapseThree4" className="collapse"
                                                     data-parent="#accordion-faq">
                                                    <div className="card-body">Anim pariatur cliche reprehenderit, enim
                                                        eiusmod high
                                                        life accusamus terry richardson ad squid. 3 wolf moon officia
                                                        aute, non
                                                        cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                                                        laborum
                                                        eiusmod.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-header">
                                                    <h5 className="mb-0 collapsed c-pointer" data-toggle="collapse"
                                                        data-target="#collapseThree5" aria-expanded="false"
                                                        aria-controls="collapseThree5"><i className="fa"
                                                                                          aria-hidden="true"></i>How
                                                        do I Place an Order?</h5>
                                                </div>
                                                <div id="collapseThree5" className="collapse"
                                                     data-parent="#accordion-faq">
                                                    <div className="card-body">Anim pariatur cliche reprehenderit, enim
                                                        eiusmod high
                                                        life accusamus terry richardson ad squid. 3 wolf moon officia
                                                        aute, non
                                                        cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                                                        laborum
                                                        eiusmod.
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="intro-video-play">
                                    <div className="play-btn">
                                        <a className="popup-youtube" href="https://www.youtube.com/watch?v=IjzUwnqWc5Q">
                                            <span><i className="fa fa-play"></i></span></a>
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

Request.propTypes = {

};

export default Request;
