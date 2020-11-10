import AdminLayoutHoc from "../../components/Layout/AdminLayoutHoc";
import Link from 'next/link';
import React, { useState, useEffect, Component } from "react";
import Router from "next/router";
import Cookies from "js-cookie";

import { ServiceUser } from "../../service";
import Dialog from 'react-bootstrap-dialog';

export default class AddUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: { username: "", password: "", role: "3", rolename: "User" },
            username: "",
            password: "",
            confirmpassword: "",
            role: "3",
            rolename: "User",
            errorMessage: "",
            datas: [],
            role_data: [],
            mydatas: {},
            value: "User",
            user_enable: true,
            switch1: true,
            userid: Cookies.get("userid"),
        };

        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleToggleChange = this.handleToggleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setErrorMsg = this.setErrorMsg.bind(this);

        this.onClick = this.onClick.bind(this);
        this.onConfirmClick = this.onConfirmClick.bind(this)

        this.handleResetSubmit = this.handleResetSubmit.bind(this);
        this.onSearchLevel = this.onSearchLevel.bind(this);
        this.onSearchLevelname = this.onSearchLevelname.bind(this);
    }

    onSearchLevel(level_name) {
        console.log('get myrole');
        const myrole = this.state.role_data.filter((role) => {
            return role.user_level_name == level_name;
        })

        const user_level_id = myrole.map((role, index) => {
            return role.user_level_id
        })
        return user_level_id[0];
    }

    onSearchLevelname(level_id) {
        console.log('get myrole');
        const myrole = this.state.role_data.filter((role) => {
            return role.user_level_id == level_id;
        })

        const user_level_name = myrole.map((role, index) => {
            return role.user_level_name
        })
        //console.log('myrole:' + myrole);
        return user_level_name;
    }

    handleSwitchChange = nr => () => {
        let switchNumber = `switch${nr}`;
        this.setState({
            [switchNumber]: !this.state[switchNumber]
        });
    }

    onClick() {
        this.dialog.showAlert('Hello Dialog!')
    }

    handleResetSubmit() {
        Router.push("/users");
    }

    onConfirmClick() {
        this.dialog.show({
            title: 'Slot Admin confirm',
            body: 'Are you sure?',
            actions: [
                Dialog.CancelAction(() => {
                    dialog.hide();
                }),
                Dialog.OKAction(() => {

                })
            ],
            bsSize: 'small',
            onHide: (dialog) => {
                dialog.hide()
                console.log('closed by clicking background.')
            }
        })
    }

    async handleSubmit() {
        try {
            if (this.state.username !== "" && this.state.user_email !== "") {
                if (this.state.password === this.state.confirmpassword) {
                    this.setState({ role: this.onSearchLevel(this.state.rolename) });
                    console.log('role : ' + this.state.role);

                    let user_enable = 0;
                    if (this.state.switch1) {
                        user_enable = 1;
                    }
                    let a = {};
                    if (this.state.password !== "") {
                        a = { user_name: this.state.username, user_pass: this.state.password, user_email: this.state.user_email, user_level: this.state.role, user_status: user_enable, add_date: "", last_login: "" };
                    } else {
                        a = { user_name: this.state.username, user_email: this.state.user_email, user_level: this.state.role, user_status: user_enable };
                    }

                    console.log('data update : ' + a.role);
                    const res = await ServiceUser.editUser(a, this.state.userid);
                    console.log('res : ' + res.data);
                    if (res.data.status === 2000) {
                        console.log('Edit User Success!!!');
                        this.dialog.show({
                            title: 'Spiderbot information',
                            body: 'Edit a user : ' + a.user_name + ' is successfully.',
                            actions: [
                                Dialog.OKAction(() => {
                                    //action('ok button was clicked!')()
                                    Router.push("/users");
                                })
                            ]
                        })
                    } else {
                        this.dialog.showAlert(res.data.message);
                        this.setErrorMsg(res.data.msg);
                    }
                } else {
                    this.dialog.showAlert('กรุณา confirm password ให้ถูกต้อง!');
                }

            }
            else {
                this.dialog.showAlert('กรุณาใส่ข้อมูลให้ครบ ก่อนกดปุ่ม Save!');
            }

        } catch (error) {
            this.dialog.showAlert(error);
            console.error("An unexpected error happened occurred:", error);
            this.setErrorMsg(error.message);
        }
        //e.preventDefault();
    }

    handleSelectChange(e) {
        console.log("e.target.value :" + e.target.value);
        this.setState({ rolename: e.target.value });
    }

    handleToggleChange(e) {
        console.log("e.target.value :" + e.target.value);
        this.setState({ user_enable: e.target.value });
    }

    setErrorMsg(msg) {
        console.log(msg);
        this.setState({ errorMessage: msg });
    }

    componentDidMount() {
        if (!Cookies.get("user")) {
            Router.push("/");
        }

        ServiceUser.listSystemRole().then((res) => {
            console.log("res data=>" + res.data);
            const { data, status } = res.data;
            console.log("status=>" + status);
            if (status === 2000) {
                console.log("data :=>" + JSON.stringify(data));
                this.setState({ role_data: data });
                console.log("userid=>" + this.state.userid);
                ServiceUser.getUserFromId(this.state.userid).then((res) => {
                    //console.log("res data=>" + res.data);
                    const { data, status } = res.data;
                    //console.log("status=>" + status);
                    if (status === 2000) {
                        //this.setState({ data: data });
                        console.log("edit data =>" + JSON.stringify(data));
                        const { user_name, user_email, user_level, user_status } = data[0];
                        console.log("user_name=>" + user_name);
                        console.log("user_email=>" + user_email);
                        console.log("user_level=>" + user_level);
                        console.log("user_status=>" + user_status);

                        this.setState({ username: user_name, user_email: user_email, rolename: this.onSearchLevelname(user_level), switch1: Boolean(Number(user_status)) });

                    } else {
                        this.setErrorMsg(res.data.message);
                        this.dialog.showAlert(res.data.message);
                    }
                });
            } else {
                //this.setErrorMsg(res.data.msg);
                this.dialog.showAlert(res.data.message);
            }
        });
    }



    render() {
        const element = (
            <div className="toggle-switch">
                <input
                    type="checkbox"
                    data-toggle="toggle"
                    data-on="Ready"
                    data-off="Not Ready"
                    data-onstyle="success"
                    data-offstyle="danger"
                />
            </div>
        );

        return <AdminLayoutHoc contentTitle={'Edit User'} contentTitleButton={<i className="fa fa-2x fa-user-plus" />} url={this.props.url}>
            <div className="offset-md-0">
                <div className="card">
                    <div className="card-header">
                        {/* <h3 className="card-title">New User Form</h3> */}
                    </div>
                    <form className="form-horizontal">
                        <div className="card-body">
                            <div className="form-group">
                                <div className="col-sm-12">
                                    <div className="input-group mb-3 input-group-sm">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Username</span>
                                        </div>
                                        <input type="text" className="form-control"
                                            //placeholder="Username"
                                            id="validation-ex1"
                                            onChange={(e) => this.setState({ username: e.target.value })}
                                            value={this.state.username}
                                            required />
                                    </div>

                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-12">
                                    <div className="input-group mb-3 input-group-sm">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Email</span>
                                        </div>
                                        <input type="text" className="form-control " id="validation-ex2"
                                            //placeholder="Email"
                                            onChange={(e) => this.setState({ user_email: e.target.value })}
                                            value={this.state.user_email}
                                            required />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="select-1" className="col-sm-12 control-label">Select user level</label>
                                <div className="col-sm-offset-2 col-sm-12">
                                    <select id="select-1" className="form-control" value={this.state.rolename} onChange={this.handleSelectChange}>
                                        {this.state.role_data.map((data, index) => {
                                            return (
                                                <option key={index} value={data.user_level_name}>{data.user_level_name}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                {/* <label htmlFor="validation-ex" className="col-sm-3">Password</label> */}
                                <div className="col-sm-12">
                                    <div className="input-group mb-3 input-group-sm">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Password</span>
                                        </div>
                                        <input type="password" className="form-control " id="validation-ex3"
                                            //placeholder="Password"
                                            onChange={(e) => this.setState({ password: e.target.value })}
                                            value={this.state.password}
                                            required />
                                    </div>

                                </div>
                            </div>
                            <div className="form-group">
                                {/* <label htmlFor="validation-ex" className="col-sm-3">Password</label> */}
                                <div className="col-sm-12">
                                    <div className="input-group mb-3 input-group-sm">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Confirm Password</span>
                                        </div>
                                        <input type="password" className="form-control " id="validation-ex4"
                                            //placeholder="Confirm Password"
                                            onChange={(e) => this.setState({ confirmpassword: e.target.value })}
                                            value={this.state.confirmpassword}
                                            required />
                                    </div>

                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-12">
                                    <label class="switch">
                                        <input type="checkbox" onChange={this.handleSwitchChange(1)} checked={this.state.switch1} />
                                        <span class="slider round"></span>
                                    </label>
                                    <label className="control-label">&nbsp;&nbsp;Enabled</label>
                                </div>
                            </div>

                        </div>
                    </form>

                    <div className="card-footer">
                        <div className="d-inline-block btn-block">
                            <button className="btn btn-danger" onClick={this.handleResetSubmit}>Back</button>
                            <button className="btn btn-info float-right" onClick={this.handleSubmit}>Save</button>
                        </div>
                    </div>
                </div>
                <Dialog ref={(el) => { this.dialog = el }} />
            </div>
        </AdminLayoutHoc>
    }
}