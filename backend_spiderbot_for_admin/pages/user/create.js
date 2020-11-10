import AdminLayoutHoc from "../../components/Layout/AdminLayoutHoc";
import Link from 'next/link';
import React, { useState, useEffect } from "react";
import Router from "next/router";
import Cookies from "js-cookie";

import { ServiceUser } from "../../service/";
import Dialog from 'react-bootstrap-dialog'

export default class AddUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: { username: "", password: "", role: "3", rolename: "User" },
            username: "",
            password: "",
            role: "3",
            rolename: "User",
            errorMessage: "",
            datas: [],
            mydatas: {},
            value: "User"
        };

        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setErrorMsg = this.setErrorMsg.bind(this);

        this.onClick = this.onClick.bind(this);
        this.onConfirmClick = this.onConfirmClick.bind(this)

        this.handleResetSubmit = this.handleResetSubmit.bind(this);
    }

    onClick() {
        this.dialog.showAlert('Hello Dialog!')
    }

    handleResetSubmit() {
        Router.push("/user");
    }

    onConfirmClick() {
        this.dialog.show({
            title: 'Spiderbot confirm',
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
            if (this.state.username !== "") {
                console.log('auth : ' + this.state.role);
                const a = { username: this.state.username, password: this.state.password, role: this.state.role, rolename: this.state.rolename };
                console.log('auth : ' + a.role);
                const res = await ServiceUser.createUser(a);
                console.log('res : ' + res.data);
                if (res.data.status === 2000) {
                    console.log('Add User Success!!!');
                    this.dialog.show({
                        title: 'Spiderbot information',
                        body: 'Add a user : ' + a.username + ' to spider system is successfully.',
                        actions: [
                            Dialog.OKAction(() => {
                                //action('ok button was clicked!')()
                                Router.push("/user");
                            })
                        ]
                    })
                } else {

                    this.dialog.showAlert(res.data.message);
                    this.setErrorMsg(res.data.msg);
                }
            }
            else {
                this.dialog.showAlert('กรุณาใส่ username ก่อนกดปุ่ม Save!');
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
                console.log("data :=>" + data);
                //setUsers(data);
                this.setState({ datas: data });
                //console.log("data : " + this.state.data);
            } else {
                //this.setErrorMsg(res.data.msg);
                this.dialog.showAlert(res.data.message);
            }
        });
    }
    render() {
        //console.log("role name :" + this.state.rolename );
        return <AdminLayoutHoc contentTitle={'Add User'} contentTitleButton={<i className="fa fa-2x fa-user-plus" />} url={this.props.url}>
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-header">
                        {/* <h3 className="card-title">New User Form</h3> */}
                    </div>
                    <form className="form-horizontal">
                        <div className="card-body">
                            <div className="form-group">
                                {/* <label htmlFor="validation-ex" className="col-sm-3">Username</label> */}
                                <div className="col-sm-12">
                                    <input type="text" className="form-control" /* is-valid */
                                        placeholder="Username"
                                        id="validation-ex1"
                                        onChange={(e) => this.setState({ username: e.target.value })}
                                        value={this.state.username}
                                        required />

                                </div>
                            </div>
                            <div className="form-group">
                                {/* <label htmlFor="validation-ex" className="col-sm-3">Password</label> */}
                                <div className="col-sm-12">
                                    <input type="password" className="form-control " id="validation-ex2" /* is-invalid */
                                        placeholder="Password"
                                        onChange={(e) => this.setState({ password: e.target.value })}
                                        value={this.state.password}
                                        required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="select-1" className="col-sm-12 control-label">Select user role</label>
                                <div className="col-sm-offset-2 col-sm-12">
                                    <select id="select-1" className="form-control" value={this.state.rolename} onChange={this.handleSelectChange}>
                                        {this.state.datas.map((data, index) => {
                                            return (
                                                <option key={index} value={data.Name}>{data.Name}</option>
                                            )
                                        })}
                                    </select>
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