import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Error404 extends Component {
    render() {
        return (
            <div>
                <div className="content-body mt-4">
                    <br/><br/>
                    <div className="container-fluid mt-4">
                        <div className="row mt-4">
                            <div className=" mt-4 col-xl-12 col-lg-12 col-md-12">
                                <h1 style={{fontSize:'5em'}}>40 + 4 = <span>404</span></h1> Go <Link to='/'>Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Error404;