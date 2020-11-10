import AdminLayoutHoc from "../../components/Layout/AdminLayoutHoc";
import Link from 'next/link';
import React, { useState, useEffect } from "react";
import Router from "next/router";
import Cookies from "js-cookie";

import { ServiceMobile } from "../../service/";
import Dialog from 'react-bootstrap-dialog'

export default class AddMobile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            save_place: "",
            status: "",
            errorMessage: "",
            datas: [],

        };

        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setErrorMsg = this.setErrorMsg.bind(this);

        this.onConfirmClick = this.onConfirmClick.bind(this)

        this.handleResetSubmit = this.handleResetSubmit.bind(this);
    }

    handleResetSubmit() {
        Router.push("/mobile");
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
            if (this.state.name !== "") {
                const a = { name: this.state.name };
                const res = await ServiceMobile.createMobile(a);
                console.log('res : ' + res.data);
                if (res.data.status === 2000) {
                    console.log('Add Moble Success!!!');
                    this.dialog.show({
                        title: 'Spiderbot information',
                        body: 'Add a mobile name : ' + a.name + ' to spider system is successfully.',
                        actions: [
                            Dialog.OKAction(() => {
                                //action('ok button was clicked!')()
                                Router.push("/mobile");
                            })
                        ]
                    })
                } else {

                    this.dialog.showAlert(res.data.message);
                    this.setErrorMsg(res.data.msg);
                }
            } else {
                this.dialog.showAlert('กรุณาใส่ mobile name ก่อนกดปุ่ม Save!');
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

        /* ServiceMobile.detailMobile(this.state.mobileId).then((res) => {
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
        }); */
    }
    render() {
        //console.log("role name :" + this.state.rolename );
        return <AdminLayoutHoc contentTitle={'Add Mobile'} contentTitleButton={<i className="fa fa-2x fa-phone" />} url={this.props.url}>
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-header">
                        {/* <h3 className="card-title">New User Form</h3> */}
                    </div>
                    <form className="form-horizontal">
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="validation-ex" className="col-sm-4">Mobile Name</label>
                                <div className="col-sm-12">
                                    <input type="text" className="form-control" /* is-valid */
                                        placeholder="Mobile Name"
                                        id="validation-ex1"
                                        onChange={(e) => this.setState({ name: e.target.value })}
                                        value={this.state.name}
                                        required
                                    />
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