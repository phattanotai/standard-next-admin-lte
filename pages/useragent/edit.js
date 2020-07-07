import AdminLayoutHoc from "../../components/Layout/AdminLayoutHoc";
import Link from 'next/link';
import React, { useState, useEffect } from "react";
import Router from "next/router";
import Cookies from "js-cookie";

import { ServiceUserAgent } from "../../service/";
import Dialog from 'react-bootstrap-dialog';

export default class EditUserfake extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            useragent: "",

            errorMessage: "",
            datas: [],
            used: 0,
            useragentid: Cookies.get("useragentid"),
        };

        //const router = useRouter();
        //const { id_query, username_query, role_query, rolename_query } = router.query;  


        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleResetSubmit = this.handleResetSubmit.bind(this);
        this.setErrorMsg = this.setErrorMsg.bind(this);

        this.onClick = this.onClick.bind(this);
        this.onConfirmClick = this.onConfirmClick.bind(this)
    }

    onClick() {
        this.dialog.showAlert('Hello Dialog!')
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
    handleResetSubmit() {
        Router.push("/useragent");
    }

    /* async handleResetSubmit() {
        try {
            //console.log('auth : ' + this.state.role);
            const a = { name: this.state.name, used: this.state.used, save_place: "", description: "" };
            //console.log('auth : ' + a.rolename);
            const res = await ServiceMobile.editMobile(a, this.state.mobileId);
            //console.log('res : ' + JSON.stringify(res.data));
            if (res.data.status === 2000) {
                console.log('Edit User Success!!!');
                this.dialog.show({
                    title: 'Spiderbot information',
                    body: 'Update user is successfully.',
                    actions: [
                        Dialog.OKAction(() => {
                            //action('ok button was clicked!')()
                            Router.push("/mobile");
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
    } */

    async handleSubmit() {
        try {
            //console.log('auth : ' + this.state.role);
            const a = { useragent: this.state.useragent };
            //console.log('auth : ' + a.rolename);
            const res = await ServiceUserAgent.editUserAgent(a, this.state.useragentid);
            console.log('res : ' + JSON.stringify(res.data));
            if (res.data.status === 2000) {
                console.log('Edit UserAgent Success!!!');
                this.dialog.show({
                    title: 'Spiderbot information',
                    body: 'Update useragent is successfully.',
                    actions: [
                        Dialog.OKAction(() => {
                            //action('ok button was clicked!')()
                            Router.push("/useragent");
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

        ServiceUserAgent.getUserAgent(this.state.useragentid).then((res) => {
            console.log("res data=>" + res.data);
            const { data, status } = res.data;
            console.log("status=>" + status);
            if (status === 2000) {
                console.log("data :=>" + data);
                const { postUserAgent } = data;
                console.log("useragent : " + postUserAgent);
                this.setState({ useragent: postUserAgent });
            } else {
                //this.setErrorMsg(res.data.msg);
                this.dialog.showAlert(res.data.message);
            }
        });


    }
    render() {

        return <AdminLayoutHoc contentTitle={'Edit UserAgent'} contentTitleButton={<i className="fa fa-2x fa-server" />} url={this.props.url}>
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-header">
                        {/* <h3 className="card-title">New User Form</h3> */}
                    </div>
                    <form className="form-horizontal">
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="validation-ex" className="col-sm-4">UserAgent</label>
                                <div className="col-sm-12">
                                    <textarea className="form-control"
                                        placeholder="User Agent"
                                        id="validation-ex1"
                                        onChange={(e) => this.setState({ useragent: e.target.value })}
                                        value={this.state.useragent}
                                        rows={10}
                                        cols={5}
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