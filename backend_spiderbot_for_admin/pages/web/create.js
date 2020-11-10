import AdminLayoutHoc from "../../components/Layout/AdminLayoutHoc";
import Link from 'next/link';
import React, { useState, useEffect } from "react";
import Router from "next/router";
import Cookies from "js-cookie";

import { ServiceWeb } from "../../service/";
import Dialog from 'react-bootstrap-dialog'

export default class AddWeb extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            URL: "",
            API: "",
            web_id: "",
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
        Router.push("/web");
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
            if (this.state.name !== "" && this.state.URL !== "" && this.state.API !== "" && this.state.web_id !== "") {
                const a = { name: this.state.name, url: this.state.URL, api: this.state.API,web_id: this.state.web_id };
                const res = await ServiceWeb.createWeb(a);
                console.log('res : ' + res.data);
                if (res.data.status === 2000) {
                    console.log('Add Web Success!!!');
                    this.dialog.show({
                        title: 'Spiderbot information',
                        body: 'Add a web name : ' + a.name + ' to spider system is successfully.',
                        actions: [
                            Dialog.OKAction(() => {
                                //action('ok button was clicked!')()
                                Router.push("/web");
                            })
                        ]
                    })
                } else {

                    this.dialog.showAlert(res.data.message);
                    this.setErrorMsg(res.data.msg);
                }
            } else {
                this.dialog.showAlert('กรุณาใส่ webname , url , api, web_id ก่อนกดปุ่ม Save!');
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
                                <label htmlFor="validation-ex" className="col-sm-4">Web Name</label>
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
                            <div className="form-group">
                                <label htmlFor="validation-ex" className="col-sm-3">URL</label>
                                <div className="col-sm-12">
                                    <input type="text" className="form-control " id="validation-ex2" /* is-invalid */
                                        placeholder="URL"
                                        onChange={(e) => this.setState({ URL: e.target.value })}
                                        value={this.state.URL}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="validation-ex" className="col-sm-3">API</label>
                                <div className="col-sm-12">
                                    <input type="text" className="form-control " id="validation-ex2" /* is-invalid */
                                        placeholder="API"
                                        onChange={(e) => this.setState({ API: e.target.value })}
                                        value={this.state.API}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="validation-ex" className="col-sm-3">WEB ID</label>
                                <div className="col-sm-12">
                                    <input type="text" className="form-control " id="validation-ex2" /* is-invalid */
                                        placeholder="WEB ID"
                                        onChange={(e) => this.setState({ web_id: e.target.value })}
                                        value={this.state.web_id}
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