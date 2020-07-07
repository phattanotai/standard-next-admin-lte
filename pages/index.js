//import "../styles/styles.scss"
import React, { useState } from "react";
import Router from "next/router";
import Cookies from "js-cookie";
import { useUser } from "../components/functions/useUser";
import { ServiceUser } from "../service";
import Dialog from 'react-bootstrap-dialog';

export class MyDialog extends React.Component {
    render() {
        return <div><Dialog ref={(el) => { this.dialog = el }} /></div>
    }
}

export default () => {

    useUser('/', true);
    const [auth, setAuth] = useState({ username: "", password: "" });
    const [errorMessage, setErrorMsg] = useState("");
    const [show, setShow] = useState(false);
    //let dialog;
    async function handleSubmit(e) {
        e.preventDefault();
        if (errorMessage) setErrorMsg("");
        try {
            const res = await ServiceUser.login(auth);
            console.log("login : " + auth)
            if (res.data.status === 2000) {
                const { data } = res.data;
                console.log("res data id=> " + data[0].id);
                Cookies.set("userid", data[0].id);
                Cookies.set("user", auth.username);
                const res_role = await ServiceUser.getUserrole(data[0].id);
                console.log("user role status:" + res_role.data.status);
                if (res_role.data.status === 2000) {
                    console.log("go to admin page");
                    const { data } = res_role.data;
                    Cookies.set("userrole_m1", data[0].m1);
                    Cookies.set("userrole_m2", data[0].m2);
                    Cookies.set("userrole_m3", data[0].m3);
                    Cookies.set("userrole_m4", data[0].m4);
                    Cookies.set("userrole_m5", data[0].m5);
                    Cookies.set("userrole_m6", data[0].m6);
                    Cookies.set("userrole_m7", data[0].m7);
                    Cookies.set("userrole_m8", data[0].m8);
                    Cookies.set("userrole_m9", data[0].m9);
                    Cookies.set("userrole_m10", data[0].m10);
                    //console.log("go to admin page");
                    Router.push("/admin", { data: data });
                }
                else {
                    console.log(res_role);
                    setErrorMsg(res_role.data.message);
                    //this.dialog.showAlert(res_role.data.msg);
                }
            } else {
                console.log(res);
                setErrorMsg(res.data.message + '!!!');
                setShow(true);
                //this.dialog.showAlert(res_role.data.msg);
            }
        } catch (error) {
            console.error("An unexpected error happened occurred:", error);
            setErrorMsg(error.message);
            //this.dialog.showAlert(error.message);
        }
    }
    return (

        <>
            {/* <div><Dialog ref={(el) => { this.dialog = el }} /></div> 
            <MyDialog />*/}
            <div id="login">
                <h3 className="text-center text-white pt-5">Login form</h3>
                <div className="container">

                    <div id="login-row" className="row justify-content-center align-items-center">
                        <div id="login-column" className="col-md-6">
                            <div id="login-box" className="col-md-12">
                                <form id="login-form" className="form" onSubmit={handleSubmit}>
                                    <div className="form-group text-center">
                                        <img src="../icon_spider.png" id="icon" alt="User Icon" />
                                    </div>
                                    <h2 className="text-center text-info">SpiderBot Admin</h2>
                                    <div className="form-group">
                                        {/* <label htmlFor="username" className="text-info">Username:</label><br /> */}
                                        <input type="text" name="username" id="username" className="form-control"
                                            placeholder="Username"
                                            onChange={(e) => {
                                                    setAuth({
                                                        username: e.target.value,
                                                        password: auth.password,
                                                    });
                                                    setShow(false);
                                                }
                                            }
                                            value={auth.username}
                                        />
                                    </div>
                                    <div className="form-group">
                                        {/* <label htmlFor="password" className="text-info">Password:</label><br /> */}
                                        <input type="password" name="password" id="password" className="form-control"
                                            placeholder="Password"
                                            onChange={(e) => {
                                                    setAuth({
                                                        password: e.target.value,
                                                        username: auth.username,
                                                    });
                                                    setShow(false);
                                                }
                                            }
                                            value={auth.password}
                                        />
                                    </div>
                                    <div className="form-group">
                                        {/* <label htmlFor="remember-me" className="text-info"><span>Remember me</span>&nbsp;<span><input id="remember-me" name="remember-me" type="checkbox" /></span></label><br /> */}
                                        <input type="submit" name="submit" className="btn btn-info btn-md" defaultValue="submit" />

                                    </div>
                                    {
                                        show ? <div className="p-3 mb-2 bg-danger text-white">{errorMessage}</div> : null
                                    }

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};


