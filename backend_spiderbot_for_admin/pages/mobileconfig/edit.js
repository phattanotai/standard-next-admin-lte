import AdminLayoutHoc from "../../components/Layout/AdminLayoutHoc";
import Link from 'next/link';
import React, { useState, useEffect } from "react";
import Router from "next/router";
import Cookies from "js-cookie";

import { ServiceWeb } from "../../service/";
import Dialog from 'react-bootstrap-dialog'

export default class EditUserfake extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",

            errorMessage: "",
            datas: [],
            used: 0,
            configid: Cookies.get("configid"),
            configname: Cookies.get("configname"),
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
        Router.push("/mobileconfig");
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
            const a = { configname: this.state.configid,configvalue: this.state.value };
            console.log('configname: ' + this.state.configid);
            console.log('configvalue: ' + this.state.value);
            const res = await ServiceWeb.editConfig(a);
            console.log('res : ' + JSON.stringify(res.data));
            if (res.data.status === 2000) {
                console.log('Edit config Success!!!');
                this.dialog.show({
                    title: 'Spiderbot information',
                    body: 'Update config is successfully.',
                    actions: [
                        Dialog.OKAction(() => {
                            //action('ok button was clicked!')()
                            Router.push("/mobileconfig");
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
        console.log("config id :" + this.state.configid);
        ServiceWeb.getconfig(this.state.configid).then((res) => {
            console.log("res data=>" + res.data);
            const { data, status } = res.data;
            console.log("status=>" + status);
            if (status === 2000) {
                console.log("data :=>" + data);
                //setUsers(data);
                //this.setState({ datas: data });
                //console.log("data : " + data[0]);
                const { Time_queue_available_same_mob,Time_queue_available_other_mob,App_time_getqueue,App_time_show_webview,Time_update_mobile_offline,App_version } = data[0];
                //console.log("Time_queue_available_same_mob : " + Time_queue_available_same_mob);
                //console.log("Time_queue_available_other_mob : " + Time_queue_available_other_mob);                
                if (Time_queue_available_same_mob){
                    this.setState({ value: Time_queue_available_same_mob });
                }
                if (Time_queue_available_other_mob){
                    this.setState({ value: Time_queue_available_other_mob });
                }
                if (App_time_getqueue){
                    this.setState({ value: App_time_getqueue });
                }
                if (App_time_show_webview){
                    this.setState({ value: App_time_show_webview });
                }
                if (Time_update_mobile_offline){
                    this.setState({ value: Time_update_mobile_offline });
                }
                if (App_version){
                    this.setState({ value: App_version });
                }
                console.log("value : " + this.state.value);
                //this.setState({ value: postName });
            } else {
                //this.setErrorMsg(res.data.msg);
                this.dialog.showAlert(res.data.message);
            }
        });


    }
    render() {

        return <AdminLayoutHoc contentTitle={'Edit Config'} contentTitleButton={<i className="fa fa-2x fa-cogs" />} url={this.props.url}>
            <div className="col-12">
                <div className="card">
                    <div className="card-header">
                        {/* <h3 className="card-title">New User Form</h3> */}
                    </div>
                    <form className="form-horizontal">
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="validation-ex" className="col-12">{this.state.configname}</label>
                                <div className="col-sm-12">
                                    <input type="text" className="form-control" /* is-valid */
                                        placeholder="configvalue"
                                        id="validation-ex1"
                                        onChange={(e) => this.setState({ value: e.target.value })}
                                        value={this.state.value}
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