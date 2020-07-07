import AdminLayoutHoc from "../components/Layout/AdminLayoutHoc";
import Link from 'next/link';
import React, { useState, useEffect } from "react";
import Router from "next/router";
import Cookies from "js-cookie";

//import '../styles/styles.scss';
import { ServiceWeb } from "../service/";
import Dialog from 'react-bootstrap-dialog'

export default class Description extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: Cookies.get("hisId"), created_at: "", userFake: "", ref: "", message: "",
            status: "", web_name: "", url: "", api: "", imei: "", description: "", name: "",
            mobile_number: "", save_place: "", mobile_status: "",
            errorMessage: "",
            data: [],
            Histid: Cookies.get("hisId"),
            classBadge: "danger",
            histstatus: 'pending',
        };

        this.handleResetSubmit = this.handleResetSubmit.bind(this);

        //this.handleSubmit = this.handleSubmit.bind(this);

        /* this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setErrorMsg = this.setErrorMsg.bind(this);

        this.onClick = this.onClick.bind(this);
        this.onConfirmClick = this.onConfirmClick.bind(this) */
    }

    /* onClick() {
        this.dialog.showAlert('Hello Dialog!')
    } */
    

    handleResetSubmit() {
        Router.push("/admin");
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
            //console.log('auth : ' + this.state.role);
            const a = { username: this.state.username, password: this.state.password, role: this.state.role, rolename: this.state.rolename };
            console.log('auth : ' + a.rolename);
            const res = await ServiceUser.editUser(a, this.state.userid);
            console.log('res : ' + JSON.stringify(res.data));
            if (res.data.status === 2000) {
                console.log('Edit User Success!!!');
                //Router.push("/user");
                /* this.dialog.show({
                    title: 'Spiderbot information',
                    body: 'Edit a user : ' + a.username + ' is successfully.',
                    actions: [
                        /* Dialog.CancelAction(() => {
                            dialog.hide();
                        }), 
                        Dialog.OKAction(()=> {
                            Router.push("/user");
                        })
                    ],
                    bsSize: 'small',
                    onHide: (dialog) => {
                        dialog.hide()
                        console.log('closed by clicking background.')
                    }
                }) */

                this.dialog.show({
                    title: 'Spiderbot information',
                    body: 'Update user is successfully.',
                    actions: [
                        Dialog.OKAction(() => {
                            //action('ok button was clicked!')()
                            Router.push("/user");
                        })
                    ]
                })
            } else {
                this.dialog.showAlert(res.data.message);
                this.setErrorMsg(res.data.message);
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

        console.log("Histid=>" + this.state.Histid);
        ServiceWeb.getHistory(this.state.Histid).then((res) => {
            const { data, status } = res.data;
            if (status === 2000) {
                this.setState({ datas: data });
                const { data, status } = res.data;
                if (status === 2000) {
                    this.setState({ datas: data });
                    const { created_at, userFake, ref, message, status, web_name, url, api, imei, description, name, mobile_number, save_place, mobile_status } = this.state.datas[0]
                    console.log('userFake:' + userFake)
                    this.setState({ created_at: created_at, userFake: userFake, ref: ref, message: message, status: status, status, web_name: web_name, url: url, api: api, imei: imei, description: description, name: name, mobile_number: mobile_number, save_place: save_place, mobile_status: mobile_status });

                    if (this.state.status === '2') {
                        this.setState({ classBadge: "success", histstatus: "success" });
                    }
                    else
                    {
                        this.setState({ classBadge: "danger", histstatus: "pending" });
                    }
                } else {
                    this.setErrorMsg(res.data.message);
                    this.dialog.showAlert(res.data.message);
                }
            } else {
                this.setErrorMsg(res.data.message);
                this.dialog.showAlert(res.data.message);
            }
        });


    }
    render() {

        return <AdminLayoutHoc contentTitle={'Bot History Description'} contentTitleButton={<i className="fa fa-2x fa-tasks" />} url={this.props.url}>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">

                        </div>
                        <div className="col-12">
                            <div className="card-body table-responsive p-0">
                                <table className="table table-hover ">
                                    <thead>
                                        <tr >
                                            <th><h5>ITEMS</h5></th>
                                            <th><h5>DESCRIPTION</h5></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="py-1 "><h5>id</h5></td>
                                            <td className="py-1">{this.state.id}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1"><h5>Status</h5></td>
                                            <td className="py-1"><label className={`badge badge-${this.state.classBadge}`}>{this.state.histstatus}</label> </td>
                                        </tr>
                                        <tr>
                                            <td className="py-1"><h5>Web Name</h5></td>
                                            <td className="py-1">{this.state.web_name}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1"><h5>API</h5></td>
                                            <td className="py-1">{this.state.api}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1"><h5>URL</h5></td>
                                            <td className="py-1">{this.state.url}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1"><h5>Mobile Name</h5></td>
                                            <td className="py-1">{this.state.ref}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1"><h5>Message</h5></td>
                                            <td className="py-1">{this.state.message}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1"><h5>userFake</h5></td>
                                            <td className="py-1">{this.state.userFake}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1"><h5>Android ID</h5></td>
                                            <td className="py-1">{this.state.imei}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1"><h5>Mobile Number</h5></td>
                                            <td className="py-1">{this.state.mobile_number}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1"><h5>Description</h5></td>
                                            <td className="py-1">{this.state.description}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1"><h5>Save Place</h5></td>
                                            <td className="py-1">{this.state.save_place}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1"><h5>Created at</h5></td>
                                            <td className="py-1">{this.state.created_at}</td>
                                        </tr>


                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="bt-tb-page">
                                <button className="btn btn-danger w-25" onClick={this.handleResetSubmit}>Back</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Dialog ref={(el) => { this.dialog = el }} />
            </div>
        </AdminLayoutHoc>
    }
}