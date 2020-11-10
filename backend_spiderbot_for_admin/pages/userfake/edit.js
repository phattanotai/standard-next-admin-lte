import AdminLayoutHoc from "../../components/Layout/AdminLayoutHoc";
import Link from 'next/link';
import React, { useState, useEffect } from "react";
import Router from "next/router";
import Cookies from "js-cookie";

import { ServiceUserFake } from "../../service/";
import Dialog from 'react-bootstrap-dialog'

export default class EditUserfake extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userfake: "",

            errorMessage: "",
            datas: [],
            used: 0,
            userFakeId: Cookies.get("userfakeid"),
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
        Router.push("/userfake");
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
            const a = { name: this.state.userfake };
            //console.log('auth : ' + a.rolename);
            const res = await ServiceUserFake.editUserFake(a, this.state.userFakeId);
            console.log('res : ' + JSON.stringify(res.data));
            if (res.data.status === 2000) {
                console.log('Edit Userfake Success!!!');
                this.dialog.show({
                    title: 'Spiderbot information',
                    body: 'Update userfake is successfully.',
                    actions: [
                        Dialog.OKAction(() => {
                            //action('ok button was clicked!')()
                            Router.push("/userfake");
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

        ServiceUserFake.getUserFake(this.state.userFakeId).then((res) => {
            console.log("res data=>" + res.data);
            const { data, status } = res.data;
            console.log("status=>" + status);
            if (status === 2000) {
                console.log("data :=>" + data);
                //setUsers(data);
                //this.setState({ datas: data });
                //console.log("data : " + this.state.datas);
                const { postName } = data;
                console.log("postName : " + postName);
                this.setState({ userfake: postName });
            } else {
                //this.setErrorMsg(res.data.msg);
                this.dialog.showAlert(res.data.message);
            }
        });


    }
    render() {

        return <AdminLayoutHoc contentTitle={'Edit UserFake'} contentTitleButton={<i className="fa fa-2x fa-id-badge" />} url={this.props.url}>
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-header">
                        {/* <h3 className="card-title">New User Form</h3> */}
                    </div>
                    <form className="form-horizontal">
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="validation-ex" className="col-sm-3">UserFake</label>
                                <div className="col-sm-12">
                                    <input type="text" className="form-control" /* is-valid */
                                        placeholder="Message"
                                        id="validation-ex1"
                                        onChange={(e) => this.setState({ userfake: e.target.value })}
                                        value={this.state.userfake}
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