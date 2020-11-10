//import "../styles/styles.scss"
import React, { useState } from "react";
import Router from "next/router";
import Cookies from "js-cookie";
import { useUser } from "../components/functions/useUser";
import { ServiceUser } from "../service";
import { ServiceUserAgent } from "../service";
import { ServiceImage } from "../service";
const env = require('../env');
//import Dialog from 'react-bootstrap-dialog';

export default () => {

    //useUser('/', true);
    const [auth, setAuth] = useState({ username: "", password: "" });
    const [errorMessage, setErrorMsg] = useState("");
    const [show, setShow] = useState(false);
    
    //let dialog;
    async function handleSubmit(e) {
        e.preventDefault();
        if (errorMessage) setErrorMsg("");
        try {
            const res = await ServiceUser.Agentlogin(auth);
            console.log("login : " + auth)
            if (res.data.status === 2000) {
                const { data } = res.data;
                console.log("res data=> " + JSON.stringify(data));
                console.log("res data id=> " + data.id);
                console.log("res data agent_code=> " + data.agent_code);
                Cookies.set("userid", data.id);
                Cookies.set("user", auth.username);
                Cookies.set("agentcode", data.agent_code);
                //Cookies.set("agentname", data.agent_code);
                Cookies.set("agenttype", data.agent_type);
                //const levelId = data.level;

                Router.push("/admin", { data: data });

                //<<<<<<<<< For User role >>>>>>>>>
                /* ServiceUser.listSystemRole().then((res) => {
                    console.log(res.data);
                    const { data, status } = res.data;
                    const data_role = data;
                    if (status === 2000) {
                        ServiceUser.listMenu().then((res) => {
                            console.log(res.data);
                            const { data, status } = res.data;
                            if (status === 2000) {
                                var i;
                                var perm_arr = [];
                                for (i = 0; i < data_role.length; i++) {
                                    if (data_role[i].user_level_id == levelId) {
                                        console.log('user role : ' + data_role[i].user_level_name);
                                        console.log('user perm : ' + data_role[i].user_level_permission);

                                        var perm = data_role[i].user_level_permission;
                                        if (perm) {
                                            perm_arr = perm.split('-');
                                        }
                                    }
                                }

                                console.log('data length : ' + data.length);
                                console.log('perm length : ' + perm_arr.length);

                                if (data.length == perm_arr.length) {
                                    var j;

                                    for (j = 0; j < data.length; j++) {
                                        console.log('perm [' + j + ']: ' + Number(perm_arr[j]));
                                        Cookies.set(data[j].menu_name.split(' ').join(''), Number(perm_arr[j]));
                                        console.log('menu ' + data[j].menu_name.split(' ').join('') + ':' + Cookies.get(data[j].menu_name.split(' ').join('')));
                                    }
                                }
                                console.log("go to admin page");
                                Router.push("/admin", { data: data });
                            } else {
                                this.setErrorMsg(res.data.msg);
                            }
                        });

                    } else {
                        this.setErrorMsg(res.data.msg);
                    }
                }); */



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
            <div id="login" className="login">

                <div className="container">
                    <div id="login-row" className="row justify-content-center align-items-center">
                        <div id="login-column" className="col-md-6">
                            <div id="login-box" className="col-md-12">
                                <h1 className="text-center text-white pt-5">{env.agent_name}</h1>
                                <div className="form-group text-center">
                                    <img src="../backend_logo.png" id="icon" alt="User Icon" className="logo" />
                                    
                                    <h3 className="text-center text-white pt-0">Master / Agent Backend</h3>
                                </div>

                                <form id="login-form" className="form-group" onSubmit={handleSubmit}>
                                    {/* <span className="brand-text font-weight-light fa fa-key fa-2x brand-image ml-2">
                                        <h3 className="text-center text-info">Login : </h3>
                                    </span> */}
                                    <div className="form-group">
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


