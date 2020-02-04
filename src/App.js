import React from 'react';
import './App.css';
import Header from "./layouts/include/header/Header";
import Footer from "./layouts/include/footer/Footer";
import Index from "./components/index/Index";
import Sidebar from "./layouts/include/sidebar/Sidebar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Error404 from "./components/error/Error404";
import Request from "./components/Request/Request";
import AddDebit from "./components/AddDebit/AddDebit";
import Setting from "./components/setting/Setting";
import Transaction from "./components/Transaction/Transaction";
import Account from "./components/account/Account";
import Profile from "./components/profile/Profile";
import AddBank from "./components/AddBank/AddBank";
import VerifyStep1 from "./components/verify/VerifyStep1";
import VerifyStep2 from "./components/verify/VerifyStep2";
import VerifyStep3 from "./components/verify/VerifyStep3";
import Login from "./components/Login/Login";
import Reset from "./components/reset/Reset";
import Register from "./components/Register/Register";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Switch>
                <Route static exact path='/login' component={Login} />
                <Route static exact path='/reset' component={Reset} />
                <Route static exact path='/register' component={Register} />
                <Route component={() => (
                    <>
                        <Header/>
                        <Sidebar/>
                        <Switch>
                            <Route static exact path="/" component={() => <Index/>}/>
                            <Route static path="/exchange" component={() => <Request/>}/>
                            <Route static path="/add/debit" component={() => <AddDebit/>}/>
                            <Route static path="/add/bank" component={() => <AddBank/>}/>
                            <Route static path="/accounts" component={() => <Account/>}/>
                            <Route static path="/profile" component={() => <Profile/>}/>
                            <Route static path="/Transaction" component={() => <Transaction/>}/>
                            <Route static path="/settings/" component={() => <Setting/>}/>
                            <Route static path="/verify/step/1" component={() => <VerifyStep1/>}/>
                            <Route static path="/verify/step/2" component={() => <VerifyStep2/>}/>
                            <Route static path="/verify/step/3" component={() => <VerifyStep3/>}/>
                            <Route component={() => <Error404/>}/>
                        </Switch>
                        <Footer/>
                    </>
                )
                }/>

            </Switch>

        </BrowserRouter>
    </div>
  );
}

export default App;
