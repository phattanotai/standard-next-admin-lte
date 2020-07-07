import AdminLayoutHoc from "../../components/Layout/AdminLayoutHoc";
import Link from 'next/link';
import React, { useState, useEffect } from "react";
import Router from "next/router";
import Cookies from "js-cookie";

import { ServiceWeb } from "../../service/";
import Dialog from 'react-bootstrap-dialog'

export default class EditWeb extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            URL: "",
            API: "",
            status: "",
            errorMessage: "",
            datas: [],
            mobileId: Cookies.get("webid"),
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
        Router.push("/web");
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
            const a = { name: this.state.name, url: this.state.URL, api: this.state.API };
            //console.log('auth : ' + a.rolename);
            const res = await ServiceWeb.editWeb(a, this.state.mobileId);
            console.log('res : ' + JSON.stringify(res.data));
            if (res.data.status === 2000) {
                console.log('Edit web Success!!!');
                this.dialog.show({
                    title: 'Spiderbot information',
                    body: 'Update web is successfully.',
                    actions: [
                        Dialog.OKAction(() => {
                            //action('ok button was clicked!')()
                            Router.push("/web");
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

        ServiceWeb.detailWeb(this.state.mobileId).then((res) => {
            console.log("res data=>" + res.data);
            const { data, status } = res.data;
            console.log("status=>" + status);
            if (status === 2000) {
                console.log("data :=>" + data);
                //setUsers(data);
                //this.setState({ datas: data });
                //console.log("data : " + this.state.datas);
                const { postName, postURL, postAPI } = data;
                //console.log("postName : " + postName);
                this.setState({ name: postName, URL: postURL, API: postAPI });
            } else {
                //this.setErrorMsg(res.data.msg);
                this.dialog.showAlert(res.data.message);
            }
        });


    }
    render() {

        return <AdminLayoutHoc contentTitle={'Edit Web'} contentTitleButton={<i className="fa fa-2x fa-globe" />} url={this.props.url}>
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-header">
                        {/* <h3 className="card-title">New User Form</h3> */}
                    </div>
                    <form className="form-horizontal" onSubmit={this.handleSubmit}>
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="validation-ex" className="col-sm-3">Name</label>
                                <div className="col-sm-12">
                                    <input type="text" className="form-control" /* is-valid */
                                        placeholder="Name"
                                        id="validation-ex1"
                                        onChange={(e) => this.setState({ name: e.target.value })}
                                        value={this.state.name}
                                        disabled={true}
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